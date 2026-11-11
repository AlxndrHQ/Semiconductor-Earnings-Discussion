// Nightly earnings refresh.
//
// For every company in src/data/companies.js, asks Finnhub's earnings calendar
// for the most recent reported quarter (EPS and revenue, actual vs estimate)
// and the next scheduled report date, and writes src/data/live-earnings.json.
//
// The hand-written write-ups in companies.js are never touched. The site shows
// these numbers alongside them, and the weekly Claude routine rewrites the prose.
//
// Usage: FINNHUB_KEY=... node scripts/update-earnings.mjs
// Exits 0 whether or not anything changed; the workflow checks `git diff`.

import { readFile, writeFile } from 'node:fs/promises';
import { COMPANIES } from '../src/data/companies.js';

const KEY = process.env.FINNHUB_KEY || process.env.VITE_FINNHUB_KEY || process.env.VITE_FINNHUB_API_KEY;
if (!KEY) {
  console.error('FINNHUB_KEY is not set');
  process.exit(1);
}

const OUT = new URL('../src/data/live-earnings.json', import.meta.url);
const DAY = 86_400_000;
const iso = (d) => d.toISOString().slice(0, 10);
const today = new Date();
const from = iso(new Date(today - 150 * DAY));
const to = iso(new Date(+today + 200 * DAY));

// Finnhub resolves ADR/OTC tickers to the home listing; the suffix gives the currency.
const CURRENCY_BY_SUFFIX = { KS: 'KRW', KQ: 'KRW', T: 'JPY', TO: 'CAD', TW: 'TWD', AS: 'EUR', HK: 'HKD' };
const currencyOf = (symbol) => CURRENCY_BY_SUFFIX[symbol.split('.')[1]] ?? 'USD';

// EPS within ±2% of the estimate counts as a Meet (absorbs rounding, e.g. 0.49 vs 0.4994).
const MEET_BAND = 0.02;
function statusOf(actual, estimate) {
  if (actual == null || estimate == null || estimate === 0) return null;
  const diff = (actual - estimate) / Math.abs(estimate);
  return diff > MEET_BAND ? 'Beat' : diff < -MEET_BAND ? 'Miss' : 'Meet';
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchCalendar(ticker) {
  const url = `https://finnhub.io/api/v1/calendar/earnings?symbol=${encodeURIComponent(ticker)}&from=${from}&to=${to}&token=${KEY}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    if (res.status === 429) { await sleep(5000 * (attempt + 1)); continue; }
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const body = await res.json();
    if (body.error) return { error: body.error };
    return { rows: body.earningsCalendar ?? [] };
  }
  return { error: 'rate limited' };
}

function summarize(rows, runDate) {
  const sorted = [...rows].sort((a, b) => a.date.localeCompare(b.date));
  const reported = sorted.filter((r) => r.epsActual != null || r.revenueActual != null);
  const upcoming = sorted.filter((r) => r.epsActual == null && r.revenueActual == null && r.date >= runDate);
  const last = reported.at(-1);
  const next = upcoming[0];
  const symbol = (last ?? next)?.symbol;
  return {
    symbol,
    currency: symbol ? currencyOf(symbol) : 'USD',
    latest: last && {
      date: last.date,
      fiscalQuarter: last.quarter,
      fiscalYear: last.year,
      epsActual: last.epsActual,
      epsEstimate: last.epsEstimate,
      revenueActual: last.revenueActual,
      revenueEstimate: last.revenueEstimate,
      status: statusOf(last.epsActual, last.epsEstimate),
    },
    next: next && { date: next.date, hour: next.hour || null },
  };
}

let previous = { companies: {} };
try { previous = JSON.parse(await readFile(OUT, 'utf8')); } catch { /* first run */ }

const runDate = iso(today);
const companies = {};
const skipped = [];

for (const c of COMPANIES) {
  const { rows, error } = await fetchCalendar(c.ticker);
  if (error || !rows.length) {
    // Keep yesterday's data rather than wiping it on a transient failure or unsupported ticker.
    if (previous.companies[c.id]) companies[c.id] = previous.companies[c.id];
    skipped.push(`${c.ticker} (${error ?? 'no rows'})`);
  } else {
    companies[c.id] = summarize(rows, runDate);
  }
  await sleep(1100); // free tier: 60 calls/min
}

const changed = JSON.stringify(companies) !== JSON.stringify(previous.companies);
if (changed) {
  await writeFile(OUT, JSON.stringify({ updatedAt: runDate, source: 'Finnhub earnings calendar', companies }, null, 2) + '\n');
}

console.log(`${Object.keys(companies).length}/${COMPANIES.length} companies with live data; ${changed ? 'changes written' : 'no changes'}.`);
if (skipped.length) console.log(`Skipped: ${skipped.join(', ')}`);
