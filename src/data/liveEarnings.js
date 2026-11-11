// Merges the nightly Finnhub snapshot (live-earnings.json, written by
// scripts/update-earnings.mjs) with the hand-written data in companies.js.
//
// Rules:
// - Next report date: a company-confirmed date in companies.js wins while it is
//   still upcoming; otherwise the live date; otherwise the hand-written estimate.
// - Latest results: the live quarter is shown only when it was reported after the
//   quarter the write-up covers. The write-up stays the source of truth for any
//   quarter it covers, since its beat/miss call weighs more than EPS alone.

import live from './live-earnings.json';
import { COMPANIES, NEXT_EARNINGS, EARNINGS_DATE_CONFIRMED } from './companies.js';

export const LIVE_UPDATED_AT = live.updatedAt ?? null;

const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** { date, confirmed, source } or null */
export function getNextEarnings(id) {
  const curated = NEXT_EARNINGS[id];
  const liveNext = live.companies?.[id]?.next?.date;
  const confirmed = EARNINGS_DATE_CONFIRMED.has(id);
  if (curated && confirmed && curated >= todayIso()) return { date: curated, confirmed: true, source: 'company' };
  if (liveNext) return { date: liveNext, confirmed: false, source: 'finnhub' };
  if (curated) return { date: curated, confirmed, source: 'estimate' };
  return null;
}

/** Live quarter newer than the write-up, with currency, or null. */
export function getNewerResults(company) {
  const entry = live.companies?.[company.id];
  const latest = entry?.latest;
  if (!latest?.date) return null;
  const writtenThrough = company.earnings?.reportedOn ?? '';
  if (latest.date <= writtenThrough) return null;
  return { ...latest, currency: entry.currency };
}

/** Status for summaries: the auto status when newer results exist, else the write-up's. */
export function getEffectiveStatus(company) {
  return getNewerResults(company)?.status ?? company.earnings?.status ?? null;
}

const SYMBOL = { USD: '$', CAD: 'C$', EUR: '€', JPY: '¥', KRW: '₩', TWD: 'NT$', HKD: 'HK$' };

export function formatMoney(n, currency = 'USD', { compact = false } = {}) {
  if (n == null) return '—';
  const sym = SYMBOL[currency] ?? `${currency} `;
  if (compact) {
    const abs = Math.abs(n);
    const [div, suf] = abs >= 1e12 ? [1e12, 'T'] : abs >= 1e9 ? [1e9, 'B'] : abs >= 1e6 ? [1e6, 'M'] : [1, ''];
    return `${sym}${(n / div).toFixed(div === 1 ? 0 : 2)}${suf}`;
  }
  const decimals = Math.abs(n) >= 100 ? 0 : 2;
  return `${sym}${n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
}

export { COMPANIES };
