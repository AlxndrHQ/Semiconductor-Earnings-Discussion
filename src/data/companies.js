export const CATEGORIES = {
  LOGIC:     'Logic (SMH)',
  MEMORY:    'Memory (DRAM)',
  EQUIPMENT: 'Equipment & Lithography',
  SERVICES:  'AI Services & Infrastructure (AIS)',
  ENERGY:    'Energy Infrastructure (ENFR)',
  PHOTONICS: 'Optical & Photonics',
};

export const COMPANIES = [

  // ─────────────────────────────────────────────────────────────────────────
  // LOGIC (SMH)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'nvda',
    name: 'NVIDIA',
    ticker: 'NVDA',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~16%' },
    stackPosition: 'Logic Design — AI Accelerators (GPU + System)',
    thematic:
      'NVIDIA owns the application layer of the AI buildout — its moat is no longer just CUDA, but the rack-scale system (NVLink, NVSwitch, networking) that no competitor can replicate at scale. The Blackwell architecture collapsed the boundary between compute and networking, making NVIDIA the single system integrator for hyperscaler AI factories. In 2026, the constraint is not demand but the ability of TSMC CoWoS-L and SK Hynix HBM4 lines to keep pace with a backlog measured in years, not quarters.',
    constraints: [
      'CoWoS-L advanced packaging capacity at TSMC — allocation bottleneck limits shipment velocity regardless of wafer supply',
      'HBM4 allocation from SK Hynix — memory bandwidth is the compute ceiling; HBM4 yield reset creates near-term supply air pocket',
      'NVLink switch ASIC yield on N3 — constrains rack-scale NVL72 system attach rates and blended ASP',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: CoWoS-L / 3nm / 4nm' },
      { to: 'skhx', label: 'HBM4 primary supplier' },
      { to: 'vrt',  label: 'Blackwell rack liquid cooling' },
      { to: 'avgo', label: 'networking complement (Tomahawk)' },
    ],
    earnings: {
      period: 'FQ2 2027',
      periodEnd: '2026-07-26',
      reportedOn: '2026-08-26',
      status: 'Beat',
      statusBasis: 'Revenue $96.22B vs $92.17B and adjusted EPS $2.22 vs $2.10, LSEG consensus via CNBC.',
      guidance: 'FQ3 2027 revenue of $108.0B +/-2% with GAAP and non-GAAP gross margin of 74.0% +/-50bps, assuming no China Data Center compute revenue.',
      breakdown: [
        'Revenue $96.2B, up 106% YoY and 18% QoQ',
        'Data Center $89.0B, up 117% YoY, the AI compute and networking driver',
        'Edge Computing $7.2B, up 27% YoY',
        'GAAP and non-GAAP gross margin 75.0%; non-GAAP EPS $2.22, GAAP $2.46',
      ],
      sources: [
        { label: 'NVIDIA Q2 FY27 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm', date: '2026-08-26' },
        { label: 'CNBC earnings takeaways (LSEG)', url: 'https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html', date: '2026-08-26' },
        { label: 'NVIDIA sets Q3 call', url: 'https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873', date: '2026-10-28' },
      ],
    },
    ir: {
      base: 'https://investor.nvidia.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.nvidia.com/financial-info/quarterly-results/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$105–$115 — 21-day EMA reclaim on volume, or any CoWoS-L supply constraint resolution announcement creating a re-rate entry point',
      leapStructure: 'Jan 2027 $120C or Jan 2028 $130C — 18-24 month duration to capture Blackwell Ultra and Rubin ramp; size 2–3% of portfolio, target delta 0.60+',
      catalyst: 'May 20 Q1 FY2027 earnings — Blackwell Ultra revenue mix; HBM4 qualification update from SK Hynix; Q2 guidance vs. Street $45B+',
      thesis: 'NVIDIA\'s rack-scale integration moat compounds with each generation — NVLink, networking, and CUDA all tied together. Blackwell Ultra and Rubin represent multi-year ASP expansion with no credible near-term substitute. Core high-conviction hold through the 2027 Rubin ramp.',
    },
  },

  {
    id: 'tsm',
    name: 'TSMC',
    ticker: 'TSM',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~10%' },
    stackPosition: 'Foundry — Leading-edge Logic & Advanced Packaging',
    thematic:
      'TSMC is the single non-substitutable node in the global AI supply chain — every meaningful accelerator, ASIC, and custom silicon chip in 2026 is fabricated here on 3nm or 5nm. Beyond wafer starts, TSMC\'s CoWoS and SoIC advanced packaging lines are the physical glue that bonds HBM stacks to logic dies, making packaging yield a first-order constraint alongside lithography. Any slip in CoWoS-L capacity directly translates to delayed NVIDIA Blackwell and custom ASIC shipments, creating a cascading bottleneck across the entire AI buildout.',
    constraints: [
      'CoWoS-L capacity — incremental tools take 18+ months to qualify; hyperscaler demand exceeds supply through 2026',
      'Geopolitical risk — US-China tension creates tail risk on Taiwan operations and advanced-node export controls',
      'N2 ramp yield learning — engineering bandwidth split between CoWoS expansion and 2nm process development',
    ],
    nexus: [
      { to: 'asml', label: 'High-NA EUV tool supply' },
      { to: 'amat', label: 'deposition & CMP tools' },
      { to: 'nvda', label: 'primary AI accelerator customer' },
      { to: 'mrvl', label: 'custom ASIC: 3nm foundry' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-15',
      status: 'Beat',
      statusBasis: 'Revenue NT$1.49T vs NT$1.47T and net profit NT$763.1B vs NT$746.34B, LSEG SmartEstimates via CNBC. Net profit stands in for EPS; no EPS consensus was found.',
      guidance: 'Q4 2026 revenue of US$52.3B-$54.3B, gross margin 65%-67% and operating margin 56.5%-58.5% at NT$31.8 per US$, with full-year 2026 growth of about 44% in US dollars.',
      breakdown: [
        'Revenue NT$1,494.24B (US$46.72B), up 50.9% YoY; net income up 68.7% YoY',
        'HPC 68% of revenue, up from 57% a year earlier, on AI accelerator demand',
        'Gross margin 66.4%, operating margin 58.7%, net margin 51.1%',
        'Wafer mix: 2nm 8%, 3nm 33%, 5nm 28%; 7nm and below 79%',
      ],
      sources: [
        { label: 'TSMC Q3 2026 release (6-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000726/a3q26e_withguidancexfinal.htm', date: '2026-10-15' },
        { label: 'CNBC TSMC Q3 (LSEG)', url: 'https://www.cnbc.com/2026/10/15/tsmc-third-quarter-profit-global-ai-.html', date: '2026-10-15' },
        { label: 'TSMC Q3 2026 call transcript', url: 'https://www.webull.com/news/15751044230423552', date: '2026-10-15' },
        { label: 'TSMC financial calendar', url: 'https://investor.tsmc.com/english/financial-calendar', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://investor.tsmc.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.tsmc.com/english/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$175–$190 ADR — pullback to 50-day SMA on Taiwan tension headlines; or post-Q2 earnings confirmation of CoWoS-L Phase 2 commissioning',
      leapStructure: 'Jan 2027 $195C — 12-month duration; N2 yield de-risks by Q3 2026 earnings; size 1.5–2%, delta 0.55+',
      catalyst: 'July 17 Q2 2026 earnings — CoWoS-L Phase 2 capacity status; N2 yield milestones; AI wafer revenue as % of logic mix',
      thesis: 'TSMC is the single non-substitutable node in the AI hardware supply chain. No credible alternative exists for leading-edge AI chip fabrication at scale. CoWoS advanced packaging is a compounding moat on top of its lithography dominance.',
    },
  },

  {
    id: 'avgo',
    name: 'Broadcom',
    ticker: 'AVGO',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~8%' },
    stackPosition: 'Custom ASIC (XPU) + Datacenter Networking',
    thematic:
      'Broadcom is the stealth beneficiary of the hyperscaler "de-NVIDIA" movement: Google TPU v6, Meta MTIA, and ByteDance\'s custom training XPUs are all Broadcom-designed ASICs fabricated at TSMC, giving AVGO royalty-like exposure to the custom silicon wave without the GPU commoditization risk. Beyond ASIC, Broadcom\'s Tomahawk and Jericho switch silicon connects every GPU in a cluster — meaning even NVIDIA Blackwell racks ship with Broadcom networking. In 2026, AVGO\'s AI revenue is on a trajectory to a $60-90B TAM, and the binding constraint is TSMC 3nm allocation rather than design pipeline.',
    constraints: [
      'TSMC 3nm wafer allocation — custom ASIC tape-outs compete directly with NVDA for the same leading-edge capacity',
      'Customer concentration — top-3 hyperscaler XPU programs represent outsized revenue risk if any program slips or is cancelled',
      'VMware integration execution — cross-selling private cloud infrastructure while managing culture and headcount remains a distraction risk',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: 3nm XPU & networking ASIC' },
      { to: 'nvda', label: 'networking complement (Tomahawk switch)' },
    ],
    earnings: {
      period: 'FQ3 2026',
      periodEnd: '2026-08-02',
      reportedOn: '2026-09-02',
      status: 'Beat',
      statusBasis: 'Revenue $29.59B vs $29.36B and adjusted EPS $3.32 vs $3.24, LSEG consensus via CNBC.',
      guidance: 'FQ4 2026 revenue of about $34.8B, up 93% YoY, including AI semiconductor revenue of about $21.7B, with non-GAAP operating income near 66% of revenue.',
      breakdown: [
        'Revenue $29.6B, up 86% YoY',
        'AI semiconductor revenue $16.7B, up 221% YoY and 54% QoQ',
        'Semiconductor solutions $20.8B, up 127%; infrastructure software $8.8B, up 29%',
        'Non-GAAP operating income $20.1B; non-GAAP EPS $3.32, GAAP $2.68',
      ],
      sources: [
        { label: 'Broadcom FQ3 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001730168/000173016826000076/avgo-08022026x8kxex99.htm', date: '2026-09-02' },
        { label: 'CNBC Broadcom FQ3 (LSEG)', url: 'https://www.cnbc.com/2026/09/02/broadcom-avgo-q3-earnings-report-2026.html', date: '2026-09-02' },
        { label: 'FQ3 call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-broadcom-tops-q3-2026-estimates-as-ai-sales-surge-93CH-4886849', date: '2026-09-02' },
      ],
    },
    ir: {
      base: 'https://investors.broadcom.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investors.broadcom.com/financial-information/financial-results' }],
    },
    tacticalEntry: {
      idealEntry: '$225–$245 — pullback to 50-day SMA or any hyperscaler custom ASIC program delay creating a temporary sentiment gap',
      leapStructure: 'Jan 2027 $250C — 12-month duration captures Google/Meta XPU Gen 2 production ramp; size 1.5%, delta 0.55+',
      catalyst: 'June 5 FY2026 Q2 earnings — AI semiconductor quarterly revenue vs. $65B FY guide; custom ASIC tape-out pipeline update',
      thesis: 'Broadcom owns the custom ASIC wave and the networking layer simultaneously — hyperscalers pay AVGO whether they choose NVIDIA or their own XPU. AI revenue run-rate tracking to $60B+ by FY2027. Royalty-like economics on the largest capex cycle in tech history.',
    },
  },

  {
    id: 'intc',
    name: 'Intel',
    ticker: 'INTC',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~2%' },
    stackPosition: 'IDM — x86 CPUs & Foundry Services (IFS)',
    thematic:
      'Intel is the restructuring story of the 2026 AI cycle — having ceded AI accelerator leadership to NVIDIA and custom ASIC share to Broadcom, the company\'s value now hinges on whether Intel Foundry Services (IFS) can establish 18A as a credible third-option foundry for Western governments and hyperscalers seeking supply chain diversification from TSMC. The Gaudi 3 AI accelerator has failed to gain meaningful traction at hyperscalers, leaving Intel dependent on x86 data center CPU (Xeon) moat while the compute paradigm shifts to GPU/XPU. In 2026, Intel is a show-me story: 18A yield milestones and IFS customer announcements are the only catalysts that matter.',
    constraints: [
      'IFS 18A process yield — external customer qualification requires yields that have not yet been publicly validated at volume',
      'Gaudi 3 adoption — hyperscalers have not committed Gaudi to meaningful production workloads; software ecosystem remains CUDA-centric',
      'Balance sheet stress — funding simultaneous IDM manufacturing and foundry capex while generating negative free cash flow is structurally challenging',
    ],
    nexus: [
      { to: 'tsm',  label: 'outsourced packaging for some products' },
      { to: 'amat', label: 'fab tooling for 18A/Intel 20A' },
      { to: 'lrcx', label: 'etch tools for high-k gate stack' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-26',
      reportedOn: '2026-10-29',
      status: 'Meet',
      statusBasis: 'Adjusted EPS $0.52 vs $0.40 beat, but revenue $16.51B vs $16.50B was in line (LSEG via CNBC); Reuters-based coverage called revenue roughly in line, so the result is mixed.',
      guidance: 'Q4 2026 revenue of $15.0B-$16.0B, non-GAAP gross margin of 38.0% and non-GAAP EPS of $0.25, all below consensus.',
      breakdown: [
        'Revenue $16.5B, up 21% YoY; non-GAAP gross margin 44.1%',
        'Data Center and AI $7.3B, up 78% YoY, on Xeon demand',
        'Client Computing $8.1B, down 5% YoY',
        'Intel Foundry $6.7B, up 58% YoY; non-GAAP EPS $0.52, GAAP $0.60',
      ],
      sources: [
        { label: 'Intel Q3 2026 release', url: 'https://www.intc.com/news-events/press-releases/detail/1786/intel-reports-third-quarter-2026-financial-results', date: '2026-10-29' },
        { label: 'Intel Q3 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000050863/000005086326000188/q326earningsrelease.htm', date: '2026-10-29' },
        { label: 'CNBC Intel Q3 (LSEG)', url: 'https://www.cnbc.com/2026/10/29/intel-intc-q3-earnings-report-2026-.html', date: '2026-10-29' },
        { label: 'The Edge (Reuters-based)', url: 'https://theedgemalaysia.com/node/823883', date: '2026-10-30' },
        { label: 'Intel Q4 2025 date notice', url: 'https://newsroom.intel.com/corporate/intel-to-report-fourth-quarter-and-full-year-2025-financial-results', date: '2026-01-07' },
      ],
    },
    ir: {
      base: 'https://www.intc.com/investor-relations',
      reports: [{ label: 'Earnings Releases', href: 'https://www.intc.com/investor-relations/earnings/quarterly-results/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$22–$26 — deep value / turnaround entry only; position sizing should be small given execution risk; wait for 18A yield confirmation before adding',
      leapStructure: 'Jan 2027 $28C (OTM lottery) — speculative only; small allocation 0.5% max; captures 18A external customer announcement upside',
      catalyst: 'July 24 Q2 2026 earnings — IFS 18A external customer yield certification timeline; Gaudi 3 adoption update; cost reduction milestones',
      thesis: 'Intel is a turnaround option with significant execution risk. The thesis requires 18A yield to reach external customer certification — without that, IFS is a money-losing distraction. Position sizing should reflect the binary nature of the catalyst.',
    },
  },

  {
    id: 'amd',
    name: 'AMD',
    ticker: 'AMD',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~4.5%' },
    stackPosition: 'Logic Design — x86 CPUs & Instinct GPU Accelerators',
    thematic:
      'AMD is the most credible NVIDIA alternative in the AI compute stack — the Instinct MI300X is shipping to hyperscalers and cloud providers in volume, and the MI350 on TSMC N3 is scheduled to sample in mid-2026 with HBM4 integration. The CPU franchise (EPYC Genoa/Turin) continues to take server market share from Intel, providing durable cash flow that subsidizes the GPU R&D investment cycle. In 2026, AMD\'s GPU trajectory depends less on product quality — which is competitive — and more on whether hyperscalers can qualify ROCm software fast enough to commit meaningful workloads away from CUDA.',
    constraints: [
      'ROCm software ecosystem — CUDA\'s decade-long head start means hyperscalers bear high switching costs; software qualification gates AMD GPU adoption velocity',
      'CoWoS allocation — AMD Instinct GPUs compete with NVDA for the same TSMC advanced packaging capacity',
      'MI350 / MI400 tape-out risk — back-to-back GPU generation development cycles compress engineering margin for error',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: N3 for MI350 / N4 for MI300X' },
      { to: 'skhx', label: 'HBM3E supplier for MI300X' },
      { to: 'mu',   label: 'HBM3E alternate supplier' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-26',
      reportedOn: '2026-11-03',
      status: 'Beat',
      statusBasis: 'Revenue $13.38B vs $13.09B and adjusted EPS $2.09 vs $1.95, LSEG consensus via CNBC.',
      guidance: 'Q4 2026 revenue of about $17B +/-3% with non-GAAP gross margin of about 55%, above the LSEG revenue average of $16.2B.',
      breakdown: [
        'Revenue $13.4B, up 45% YoY; non-GAAP gross margin 56%, GAAP 54%',
        'Data Center $8.5B, up 97% YoY; Helios and Venice ramp drives Q4',
        'Client $2.9B, up 7%; Gaming $773M, down 40%; Embedded $1.1B, up 29%',
        'Non-GAAP EPS $2.09, up 74% YoY; GAAP EPS $1.46',
      ],
      sources: [
        { label: 'AMD Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000188/q32026991.htm', date: '2026-11-03' },
        { label: 'CNBC AMD Q3 (LSEG)', url: 'https://www.cnbc.com/2026/11/03/amd-amd-q3-earnings-report-2026-.html', date: '2026-11-03' },
        { label: 'AMD Q4 2025 release', url: 'https://ir.amd.com/news-events/press-releases/detail/1276/amd-reports-fourth-quarter-and-full-year-2025-financial', date: '2026-02-03' },
      ],
    },
    ir: {
      base: 'https://ir.amd.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.amd.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$130–$145 — ROCm hyperscaler qualification milestone or MI350 production volume confirmation; 21-day EMA reclaim on volume',
      leapStructure: 'Jan 2027 $155C — 12-month duration capturing MI350 N3 ramp catalyst; size 1–1.5%, target delta 0.55',
      catalyst: 'July 29 Q2 2026 earnings — data center GPU revenue vs. $4.5B guide; MI350 production ramp timing; ROCm adoption announcements',
      thesis: 'AMD is the most credible NVIDIA alternative with production silicon shipping at scale. EPYC CPUs fund the GPU R&D cycle. MI350 on N3 with HBM4 narrows the performance gap — the ROCm software barrier is the only gating factor remaining.',
    },
  },

  {
    id: 'txn',
    name: 'Texas Instruments',
    ticker: 'TXN',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'Analog & Embedded — Industrial & Automotive ICs',
    thematic:
      'Texas Instruments is the analog bellwether for the non-AI semiconductor cycle — its 100,000+ part catalog serves the industrial automation, automotive, and personal electronics markets that are in a prolonged inventory correction even as AI chips boom. TXN\'s vertically integrated manufacturing model (DMOS, BCD processes) in 300mm fabs provides structural cost advantage that positions it to outperform in recovery but offers no shelter from the digestion cycle that has now extended into its seventh quarter. In 2026, TXN is the contrarian trade: investors who believe industrial and auto end-markets bottom in H2 2026 will accumulate the stock, while the near-term earnings path remains under pressure.',
    constraints: [
      'Industrial inventory correction — channel inventory remains elevated after 2021-2022 over-ordering; OEM production schedules below TI bookings',
      'Automotive volume softness — EV production ramp slower than TI content-per-vehicle gains; net auto revenue flat to down',
      'New fab underloading — 300mm DMOS fab additions (Sherman, TX and Lehi, UT) carrying fixed cost drag until utilization inflects',
    ],
    nexus: [
      { to: 'amat', label: 'analog process deposition tools' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-21',
      status: 'Beat',
      statusBasis: 'Revenue $6.06B vs $5.92B (Reuters-based report on Investing.com, provider unnamed) and EPS $2.62 vs $2.40 (Zacks consensus); no LSEG or FactSet Q3 figure was found.',
      guidance: 'Q4 2026 revenue of $5.80B-$6.30B and EPS of $2.45-$2.79, with the revenue range above LSEG\'s $5.73B average.',
      breakdown: [
        'Revenue $6.06B, up 28% YoY and 11% QoQ; EPS $2.62, up 77%',
        'Analog $4.91B, up 32%; Embedded Processing $858M, up 21%',
        'Data center revenue up about 95% YoY, about 13% of revenue',
        'Gross margin 64.2%; operating profit $2.87B, up 73% YoY',
      ],
      sources: [
        { label: 'TI Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000097476/000009747626000165/q32026txnex99-eredgar.htm', date: '2026-10-21' },
        { label: 'Investing.com (Reuters)', url: 'https://www.investing.com/news/stock-market-news/analog-chipmaker-texas-instruments-sees-quarterly-sales-above-estimates-4964092', date: '2026-10-21' },
        { label: 'Zacks via Yahoo Finance', url: 'https://finance.yahoo.com/markets/stocks/articles/texas-instruments-txn-q3-earnings-201001631.html', date: '2026-10-21' },
        { label: 'TI Q3 call summary', url: 'https://www.tradingkey.com/news/transcripts/262230690-tradingkey', date: '2026-10-21' },
        { label: 'TXN earnings history', url: 'https://www.alphaquery.com/stock/TXN/earnings-history', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://investor.ti.com',
      reports: [{ label: 'Earnings Release', href: 'https://investor.ti.com/financial-information/financial-results' }],
    },
    tacticalEntry: {
      idealEntry: '$165–$180 — industrial PMI inflection above 50 or channel inventory draw confirmation; accumulate in weakness as cycle troughs',
      leapStructure: 'Jan 2027 $185C — 12-month duration; industrial recovery in H2 2026 is the swing factor; size 1%, delta 0.50',
      catalyst: 'July 22 Q2 2026 earnings — industrial revenue trend; channel inventory days reduction; new 300mm fab utilization rate improvement',
      thesis: 'TXN is the highest-quality analog franchise at a cyclical trough. When industrial and auto inventory normalizes in H2 2026, operating leverage from the 300mm fab base is extreme. The contrarian accumulation window is now, before the recovery is visible in reported numbers.',
    },
  },

  {
    id: 'qcom',
    name: 'Qualcomm',
    ticker: 'QCOM',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3.5%' },
    stackPosition: 'Fabless — Mobile SoC, Automotive ADAS, PC / Edge AI',
    thematic:
      'Qualcomm is transitioning from a handset monoculture to a diversified edge-AI semiconductor company — the Snapdragon X Elite PC chip is competing head-to-head with Apple M-series and Intel Core Ultra, while Snapdragon Ride Flex is positioning QCOM for a multi-year automotive ADAS ramp. The core Snapdragon mobile business remains the cash engine, generating the free cash flow that funds the PC, auto, and IoT diversification without dilution. In 2026, QCOM\'s multiple re-rating requires the market to believe the automotive and PC pipelines will reach scale before any Apple in-house modem transition erodes the handset royalty stream.',
    constraints: [
      'Apple modem transition risk — Apple\'s in-house C1 modem chip could reduce Qualcomm content in iPhone, threatening the royalty stream',
      'Android premium handset share — Samsung and Google Pixel modem/AP wins must offset potential Apple attrition',
      'Automotive design cycle — ADAS/cockpit SoC wins today only generate revenue in 2027-2028 production vehicles; near-term revenue is thin',
    ],
    nexus: [
      { to: 'tsm', label: 'foundry: Snapdragon / Snapdragon X Elite on N3' },
    ],
    earnings: {
      period: 'FQ4 2026',
      periodEnd: '2026-09-27',
      reportedOn: '2026-11-04',
      status: 'Beat',
      statusBasis: 'Non-GAAP revenue $10.44B vs about $10.15B (Zacks via Yahoo Finance) and adjusted EPS $2.17 vs $2.16 (LSEG via CNBC).',
      guidance: 'FQ1 2027 revenue of $10.4B-$11.2B and non-GAAP EPS of $2.15-$2.35, with the fiscal 2027 Data Center revenue target of $5B reiterated.',
      breakdown: [
        'Non-GAAP revenue $10.44B, down 7% YoY; GAAP $10.32B, down 8%',
        'Handsets $5.14B, down 26%; Automotive $1.99B, up 89%; IoT $1.89B, up 4%',
        'QTL $1.30B, down 7%; QCT EBT margin 24%, QTL EBT margin 70%',
        'AI data center: FQ1 revenue guided above $650M; Amazon collaboration',
      ],
      sources: [
        { label: 'Qualcomm FQ4 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000127/qcom092726erex991.htm', date: '2026-11-04' },
        { label: 'CNBC Qualcomm FQ4 (LSEG)', url: 'https://www.cnbc.com/2026/11/04/qualcomm-qcom-earnings-report-q4-2026.html', date: '2026-11-04' },
        { label: 'Zacks via Yahoo Finance', url: 'https://finance.yahoo.com/markets/stocks/articles/qcom-q4-earnings-beat-estimates-145500684.html', date: '2026-11-05' },
        { label: 'Qualcomm FQ4 call transcript', url: 'https://www.tradingkey.com/news/transcripts/262279715-', date: '2026-11-04' },
        { label: 'Qualcomm FQ1 2026 date notice', url: 'https://www.qualcomm.com/news/releases/2026/01/qualcomm-schedules-first-quarter-fiscal-2026-earnings-release-an', date: '2026-01-21' },
      ],
    },
    ir: {
      base: 'https://investor.qualcomm.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.qualcomm.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$145–$160 — Apple modem transition FUD creating entry; or Snapdragon X Elite market share data confirming PC ramp ahead of plan',
      leapStructure: 'Jan 2027 $170C — captures automotive ADAS ramp catalyst and PC attach confirmation; size 1%, delta 0.50',
      catalyst: 'July 30 FY2026 Q3 earnings — automotive revenue growth rate vs. $45B design win pipeline; Snapdragon X Elite PC attach data; Apple modem update',
      thesis: 'QCOM is a multiple re-rating story if automotive and PC diversification reach critical mass before any Apple modem attrition. The $45B automotive lifetime design win pipeline is real and begins generating revenue in 2027-2028 production vehicles. Current valuation does not fully price this.',
    },
  },

  {
    id: 'adi',
    name: 'Analog Devices',
    ticker: 'ADI',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'Analog / Mixed-Signal — Industrial, Instrumentation, Comms',
    thematic:
      'Analog Devices is the highest-quality analog franchise in semiconductors, serving industrial automation, instrumentation, healthcare, and 5G communications — markets that are collectively experiencing the most severe inventory correction since 2016. The Linear Technology and Maxim acquisitions created a differentiated portfolio of precision signal chain and power management ICs that command durable pricing power; the issue in 2026 is not competitive dynamics but the pace of channel destocking at industrial and telecom OEMs. When the industrial cycle inflects — expected in H2 2026 — ADI\'s operating leverage is among the highest in analog due to its outsourced manufacturing model and OpEx discipline during the downturn.',
    constraints: [
      'Industrial end-market inventory correction — precision instrumentation and automation customers running off excess inventory accumulated in 2021-2023',
      'Telecom infrastructure softness — 5G base station investment cycle paused globally; wireless comms revenue declining',
      'Customer concentration in cyclical verticals — industrial + comms represent ~65% of revenue, amplifying cycle sensitivity',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry for high-speed mixed-signal ICs' },
      { to: 'lrcx', label: 'etch tooling for BiCMOS process' },
    ],
    earnings: {
      period: 'FQ3 2026',
      periodEnd: '2026-08-01',
      reportedOn: '2026-08-19',
      status: 'Beat',
      statusBasis: 'Revenue $4.02B vs $3.92B and adjusted EPS $3.45 vs $3.33, analyst estimates in a Reuters-based report on RTE; the Q3 consensus provider is unnamed.',
      guidance: 'FQ4 2026 revenue of $4.3B +/-$100M, adjusted operating margin of about 52.0% +/-100bps and adjusted EPS of $3.86 +/-$0.15.',
      breakdown: [
        'Revenue $4.02B, up 40% YoY, led by Data Center and Industrial',
        'Industrial $1.97B, up 53%; Automotive $998M, up 16%',
        'Communications $655M, up 84%; Consumer $397M, up 6%',
        'Adjusted gross margin 72.5%, adjusted operating margin 50.0%, adjusted EPS $3.45',
      ],
      sources: [
        { label: 'ADI FQ3 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000006281/000000628126000072/adi3q26exhibit991earnings.htm', date: '2026-08-19' },
        { label: 'RTE (Reuters-based)', url: 'https://www.rte.ie/news/business/2026/0819/1588525-analog-devices-quarterly-forecast-tops-estimates/', date: '2026-08-19' },
        { label: 'ADI FQ4 date notice', url: 'https://www.analog.com/en/newsroom/press-releases/2026/10-22-2026-adi-report-4q-fy2026-financial-results.html', date: '2026-10-22' },
      ],
    },
    ir: {
      base: 'https://investor.analog.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.analog.com/financial-information/quarterly-earnings' }],
    },
    tacticalEntry: {
      idealEntry: '$195–$210 — industrial PMI turning positive or distributor sell-through data showing inventory days declining; buy in stages during the trough',
      leapStructure: 'Jan 2027 $220C — 12-month duration; industrial recovery in H2 2026 is the primary swing catalyst; size 1%, delta 0.50',
      catalyst: 'August 19 FY2026 Q3 earnings — industrial revenue trend inflection; communications segment stabilization; distributor channel inventory days',
      thesis: 'ADI is the highest-quality analog franchise in the deepest part of the inventory correction cycle. Outsourced manufacturing means rapid margin expansion on recovery. When industrial and telecom spending normalizes, ADI\'s operating leverage is among the highest in analog semis.',
    },
  },

  {
    id: 'mrvl',
    name: 'Marvell Technology',
    ticker: 'MRVL',
    etf: 'SMH',
    category: CATEGORIES.LOGIC,
    weight: { index: 'SMH', value: '~3.5%' },
    stackPosition: 'Custom ASIC + Data Infrastructure Networking',
    thematic:
      'Marvell is the quiet enabler of the hyperscaler custom silicon wave — its data infrastructure ASICs and optical DSPs power the high-radix networks that interconnect NVIDIA GPU clusters at scale. Major wins at Amazon (Trainium networking), Google (TPU interconnect), and Microsoft represent multi-year, sole-sourced tape-out pipelines on TSMC\'s 3nm process. In 2026, the custom ASIC cycle is still in early innings, and Marvell\'s royalty-like revenue model on production silicon creates compounding volume leverage as hyperscaler AI training clusters scale from thousands to hundreds of thousands of chips.',
    constraints: [
      'TSMC 3nm allocation — custom ASIC tape-outs compete for the same wafer starts as NVDA accelerators',
      'Design cycle latency — 18-to-24-month ASIC development windows mean today\'s wins only ship at scale in 2027',
      'Optical DSP supply tightness — coherent interconnect components face independent supply constraints',
    ],
    nexus: [
      { to: 'tsm',  label: 'foundry: 3nm custom ASIC' },
      { to: 'nvda', label: 'hyperscaler networking complement / compete' },
      { to: 'amzn', label: 'Trainium ASIC design partner' },
    ],
    earnings: {
      period: 'FQ2 2027',
      periodEnd: '2026-08-01',
      reportedOn: '2026-08-27',
      status: 'Beat',
      statusBasis: 'Revenue $2.74B vs $2.71B and adjusted EPS $0.94 vs $0.92, expectations attributed to Reuters by Quartz via Yahoo Finance.',
      guidance: 'FQ3 2027 revenue of $3.15B, with the range narrowed to +/-2% on 2026-11-02 and non-GAAP EPS guided at $1.10 +/-$0.05; the outlook is about $12B for fiscal 2027 and about $18B for fiscal 2028.',
      breakdown: [
        'Revenue $2.739B, up 37% YoY, a record',
        'Data center $2.17B, 79% of revenue, up 46% YoY and 18% QoQ',
        'Communications and other $568M, up 10% YoY and down 3% QoQ',
        'Non-GAAP gross margin 58.9%, operating margin 36.6%, EPS $0.94',
        'Agreed Nov 2 to buy Lumentum in an all-stock deal, ~$115B EV; close expected H1 2028',
      ],
      sources: [
        { label: 'Marvell FQ2 2027 release', url: 'https://investor.marvell.com/news-events/press-releases/detail/1031/marvell-technology-inc-reports-second-quarter-of-fiscal-year-2027-financial-results', date: '2026-08-27' },
        { label: 'Quartz via Yahoo Finance', url: 'https://finance.yahoo.com/markets/stocks/articles/marvell-q2-fy2027-earnings-record-202719586.html', date: '2026-08-27' },
        { label: 'Marvell FQ2 call summary', url: 'https://www.tradingkey.com/news/transcripts/262137259-tradingkey', date: '2026-08-27' },
        { label: 'Lumentum 8-K deal release', url: 'https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm', date: '2026-11-02' },
        { label: 'Marvell press releases', url: 'https://investor.marvell.com/news-events/press-releases', date: '2026-11-05' },
        { label: 'Marvell-Lumentum release', url: 'https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm', date: '2026-11-02' },
      ],
    },
    ir: {
      base: 'https://investor.marvell.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.marvell.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$70–$82 — any tape-out delay headline creating temporary weakness; pullback to 50-day SMA with AI ASIC pipeline intact',
      leapStructure: 'Jan 2027 $90C — 12-month duration; Amazon Trainium2 + Google Gen 2 ASIC production ramp is the delta driver; size 1.5%, delta 0.55',
      catalyst: 'August 26 FY2027 Q2 earnings — custom AI ASIC revenue vs. $8B+ FY guide; optical DSP 1.6T qualification progress; Amazon Trainium3 tape-out confirmation',
      thesis: 'Marvell is the royalty play on hyperscaler custom silicon — sole-sourced, multi-year, compounding volume. The ASIC design cycle creates 18-24 month lead visibility. The optical DSP franchise on top is an AI interconnect option that most MRVL models undervalue.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MEMORY (DRAM)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'skhx',
    name: 'SK Hynix',
    ticker: '000660.KS',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~26% of HBM market' },
    stackPosition: 'HBM Leader — High Bandwidth Memory',
    thematic:
      'SK Hynix is the primary HBM4 supplier to NVIDIA and the structural beneficiary of the AI memory architecture shift from commodity DRAM to stacked HBM. Effectively sold out through end-2026 on long-term supply agreements, Hynix trades at a structural premium to commodity DRAM because HBM supply cannot be substituted — each HBM4 stack requires Through-Silicon Via (TSV) bonding that takes years to qualify at volume. The migration to HBM4 in 2026 resets the yield curve and temporarily gates NVIDIA\'s Blackwell Ultra shipments, creating a virtuous pricing window before Micron\'s HBM4 volume ramp provides second-source relief in 2027.',
    constraints: [
      'HBM4 12-Hi yield rates — stacking 12 dies with TSV bonding at volume is the primary throughput ceiling',
      'TSV packaging equipment lead times — specialized bonders are 12-18 months; capacity cannot be improvised',
      'HBM4 qualification timeline — NVIDIA certification requirement compresses development and production ramp simultaneously',
    ],
    nexus: [
      { to: 'nvda', label: 'primary HBM4 customer' },
      { to: 'amd',  label: 'HBM3E for MI300X / MI350' },
      { to: 'lrcx', label: 'high-aspect-ratio TSV etch tools' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Beat',
      statusBasis: 'Revenue KRW 104.62T vs 98.34T and operating profit KRW 83.33T vs 76.72T, both LSEG SmartEstimates per CNBC.',
      guidance: 'No numeric revenue or profit guidance; on the call the CFO guided Q4 DRAM bit shipments up mid-20% and NAND up mid-single-digit % QoQ, and the company sees demand exceeding supply through 2030.',
      breakdown: [
        'Revenue KRW 104.6T (+32% QoQ, +328% YoY); operating profit KRW 83.3T, 80% margin',
        'Q3 DRAM bits +~10% QoQ, ASP up high-20%; NAND bits down slightly, ASP up mid-20%',
        'HBM4 volume shipments began; expected to pass HBM3E in shipments and revenue in Q4',
        'LTAs with 14 major customers cover over 50% of 2027-2028 capacity',
      ],
      sources: [
        { label: 'SK hynix 3Q26 release', url: 'https://news.skhynix.com/en/q3-2026-business-results/', date: '2026-10-28' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/10/28/sk-hynix-third-quarter-profit.html', date: '2026-10-28' },
        { label: 'Investing.com call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-sk-hynix-posts-record-q3-2026-results-shares-jump-after-hours-93CH-4977343', date: '2026-10-27' },
        { label: 'The Star/Reuters: Q4 2025 report date', url: 'https://www.thestar.com.my/tech/tech-news/2026/01/28/sk-hynix-posts-forecast-beating-q4-profit-on-huge-ai-demand', date: '2026-01-28' },
      ],
    },
    ir: {
      base: 'https://www.skhynix.com/eng/ir',
      reports: [{ label: 'Quarterly Earnings', href: 'https://www.skhynix.com/eng/ir/financialInformation.do' }],
    },
    tacticalEntry: {
      idealEntry: 'KRW 180,000–200,000 (OTC: HXSCF ~$13–$15) — HBM4 yield concern headline creating a buy-the-news opportunity before NVIDIA qualification',
      leapStructure: 'OTC shares or Korean ADR; no liquid US LEAPs — accumulate spot position; size 1–1.5% as long-only equity given options illiquidity',
      catalyst: 'July 24 Q2 2026 earnings — HBM4 12-Hi yield progress; NVIDIA qualification timeline; HBM3E pricing ASP update for H2 2026',
      thesis: 'SK Hynix is structurally sold out of HBM through end-2026. HBM4 qualification at NVIDIA is the next re-rate event. The TSV manufacturing moat takes years to replicate — Micron is 2-3 quarters behind. Long-term supply agreements provide exceptional revenue visibility.',
    },
  },

  {
    id: 'mu',
    name: 'Micron Technology',
    ticker: 'MU',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~20%' },
    stackPosition: 'DRAM & NAND — HBM3E Second Source',
    thematic:
      'Micron is the US-based memory bellwether and the critical second source for HBM as NVIDIA and hyperscalers seek supply chain diversification away from Korean-only HBM sourcing. The HBM3E ramp at Micron is tracking ahead of initial expectations, and the company\'s Boise, Idaho manufacturing footprint provides a geopolitically resilient alternative to SK Hynix\'s Korean fabs. In 2026, Micron\'s blended ASP is inflecting upward as HBM mix rises, and the company is investing aggressively in Idaho and New York 1-beta DRAM capacity to serve the AI memory supercycle through the decade.',
    constraints: [
      'HBM3E volume yield — Micron is 2-3 quarters behind Hynix in HBM TSV yield maturity; ramp risk through H1 2026',
      'NAND oversupply — commodity NAND pricing remains under pressure from Samsung capacity additions, diluting blended margin',
      'Capex intensity — simultaneous HBM expansion, NAND consolidation, and 1-beta DRAM greenfield straining free cash flow',
    ],
    nexus: [
      { to: 'nvda', label: 'HBM3E second source for Blackwell' },
      { to: 'amd',  label: 'HBM3E alternate supplier' },
      { to: 'lrcx', label: 'etch tooling for HBM TSV' },
    ],
    earnings: {
      period: 'FQ4 2026',
      periodEnd: '2026-09-03',
      reportedOn: '2026-09-30',
      status: 'Beat',
      statusBasis: 'Revenue $54.23B vs $51.07B and non-GAAP EPS $33.42 vs $31.61, both LSEG per CNBC.',
      guidance: 'FQ1 2027: revenue $61.5B +/- $1.5B, non-GAAP gross margin about 86.25%, non-GAAP EPS $38.15 +/- $1.00 (GAAP $37.84 +/- $1.00).',
      breakdown: [
        'Revenue $54.23B (+379% YoY); non-GAAP gross margin 87.0%, GAAP 86.8%',
        'DRAM $39.8B, 73% of revenue (+343% YoY); NAND $14.1B (+526% YoY)',
        'Core Data Center BU $18.0B, Cloud Memory BU $16.3B, Mobile and Client $13.1B',
        'HBM grew faster than company; agreements cover most calendar 2027 HBM bit supply',
      ],
      sources: [
        { label: 'Micron FQ4 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000723125/000072312526000018/a2026q4ex991-pressrelease.htm', date: '2026-09-30' },
        { label: 'Micron 8-K summary (BU tables)', url: 'https://www.stocktitan.net/sec-filings/MU/8-k-micron-technology-inc-reports-material-event-adfaaa1a1e55.html', date: '2026-09-30' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/09/30/micron-mu-q4-earnings-report-2026.html', date: '2026-09-30' },
        { label: 'Investing.com call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-micron-tops-q4-2026-estimates-as-demand-stays-hot-93CH-4925992', date: '2026-09-30' },
        { label: 'Wall Street Horizon calendar', url: 'https://www.wallstreethorizon.com/micron-earnings-calendar', date: '2026-11-05' },
        { label: 'Micron FQ1 2021 release (53-week precedent)', url: 'https://www.sec.gov/Archives/edgar/data/723125/000072312521000009/a2021q1ex991-pressrelease.htm', date: '2021-01-07' },
      ],
    },
    ir: {
      base: 'https://investors.micron.com',
      reports: [{ label: 'Earnings Releases', href: 'https://investors.micron.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$105–$120 — NAND pricing concern or HBM3E yield noise creating entry; accumulate on any 10%+ correction with HBM thesis intact',
      leapStructure: 'Jan 2027 $125C — 12-month duration; HBM4 NVIDIA qualification in Q3 is the delta-driving catalyst; size 1.5%, delta 0.55',
      catalyst: 'June 25 FY2026 Q3 earnings — HBM revenue run-rate vs. $3.5B FY guide; HBM4 sampling to NVIDIA update; NAND pricing trajectory',
      thesis: 'Micron is the US-based HBM second source in the most supply-constrained memory market in history. HBM4 qualification at NVIDIA transforms MU from a commodity memory company to a premium AI memory supplier. Idaho manufacturing provides geopolitical supply chain diversification that hyperscalers demand.',
    },
  },

  {
    id: 'ssnlf',
    name: 'Samsung Electronics',
    ticker: 'SSNLF',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~35% of DRAM market' },
    stackPosition: 'Integrated DRAM, NAND & Logic (Foundry)',
    thematic:
      'Samsung is the largest memory manufacturer in the world and the most vertically integrated semiconductor company — it makes the DRAM, NAND, logic chips, and the equipment used to process them, and assembles the phones and TVs that use them downstream. Despite scale advantages, Samsung has ceded HBM3E market share to SK Hynix due to yield certification delays at NVIDIA, turning the most important memory cycle in a decade into a competitive disadvantage. In 2026, Samsung\'s strategic priority is HBM4 second-source qualification at NVIDIA and rebuilding foundry (SF3) yield credibility after high-profile customer losses to TSMC.',
    constraints: [
      'HBM3E yield deficit — NVIDIA\'s HBM3E qualification failure at Samsung ceded revenue to Hynix; HBM4 re-qualification is critical and not yet confirmed',
      'Foundry (SF3) yield — Samsung Foundry\'s 3nm GAA process has underperformed TSMC N3, driving customer defection to TSMC',
      'NAND oversupply — Samsung\'s own capacity adds are the primary cause of NAND pricing weakness that hurts blended margins',
    ],
    nexus: [
      { to: 'nvda', label: 'HBM4 secondary source (qualification pending)' },
      { to: 'amat', label: 'deposition & CMP tools for DRAM' },
      { to: 'lrcx', label: 'etch tools for NAND and DRAM stacks' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-29',
      status: 'Meet',
      statusBasis: 'Mixed against FnGuide-based consensus: operating profit KRW 107.4T beat about 106T, revenue KRW 195.3T missed about 200.3T. Against post-guidance LSEG: operating profit just below 107.66T, revenue in line at 195.3T.',
      guidance: 'No numeric revenue or profit guidance; Samsung expects company-wide earnings growth in Q4 led by DS, and guided Q4 DRAM bit growth of mid-to-high teens % and NAND of mid-teens % QoQ on the call, with 2026 capex about KRW 84.4T.',
      breakdown: [
        'Revenue KRW 195.3T (+14% QoQ); operating profit KRW 107.4T, about 55% margin',
        'DS division revenue KRW 147.1T, operating profit KRW 106.5T; record Memory quarter',
        'HBM4 sales more than tripled QoQ to 60% of HBM; 2027 HBM supply sold out per call',
        'MX/Networks loss KRW 0.6T, DX loss KRW 0.8T; SDC profit KRW 1.1T',
      ],
      sources: [
        { label: 'Samsung Q3 2026 release', url: 'https://news.samsung.com/global/samsung-electronics-announces-third-quarter-2026-results', date: '2026-10-29' },
        { label: 'Samsung Q3 2026 earnings guidance', url: 'https://news.samsung.com/global/samsung-electronics-announces-earnings-guidance-for-third-quarter-2026', date: '2026-10-08' },
        { label: 'Korea JoongAng Daily (FnGuide, revenue forecast)', url: 'https://www.koreajoongangdaily.com/business/samsungs-record-804b-q3-profit-fails-to-impress-investors/12944742', date: '2026-10-29' },
        { label: 'Benzinga via Yahoo (LSEG)', url: 'https://finance.yahoo.com/markets/stocks/articles/samsung-stock-drops-6-seoul-031514212.html', date: '2026-10-28' },
        { label: 'Investing.com (Bloomberg, LSEG preliminary)', url: 'https://www.investing.com/news/earnings/samsung-q3-profit-surges-to-record-high-but-misses-lofty-expectations-4937706', date: '2026-10-07' },
        { label: 'Investing.com (net profit vs Bloomberg)', url: 'https://in.investing.com/news/earnings/samsung-posts-record-quarterly-profit-as-aidriven-chip-demand-surges-5662242', date: '2026-10-29' },
        { label: 'Stockhub (FnGuide preliminary comparison)', url: 'https://stockhub.kr/en/insights/view_1791420339349_rirmz2bfh', date: '2026-10-08' },
        { label: 'Investing.com call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-samsung-electronics-posts-record-q3-2026-profit-93CH-4981365', date: '2026-10-28' },
      ],
    },
    ir: {
      base: 'https://www.samsung.com/us/investor-relations',
      reports: [{ label: 'Earnings Releases', href: 'https://www.samsung.com/global/ir/financial-information/quarterly-earnings/' }],
    },
    tacticalEntry: {
      idealEntry: 'KRW 60,000–70,000 (OTC: SSNLF ~$28–$34) — HBM4 NVIDIA qualification announcement is the primary re-rate trigger; accumulate ahead of Q4 2026 catalyst',
      leapStructure: 'OTC shares only (SSNLF); no US-listed LEAPs — long-only equity accumulation; size 0.5–1% given OTC liquidity and qualification binary risk',
      catalyst: 'July 31 Q2 2026 earnings — HBM3E yield progress update; SF3 (3nm GAA) external customer wins; NAND pricing recovery trajectory',
      thesis: 'Samsung is the contrarian recovery play in memory — if HBM4 NVIDIA qualification succeeds in Q4 2026, the stock re-rates sharply from depressed levels. SF3 foundry credibility restoration is a second option on an already undervalued conglomerate. The risk is qualification delay extending the discount.',
    },
  },

  {
    id: 'wdc',
    name: 'Western Digital',
    ticker: 'WDC',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~5%' },
    stackPosition: 'NAND Flash — Enterprise SSD & HDD',
    thematic:
      'Western Digital is a NAND flash-focused storage company that spans both enterprise SSD (AI inference workloads) and hard disk drive (cold storage for AI training datasets) — a rare combination that provides exposure to AI infrastructure from two different physics layers. The enterprise SSD business is benefiting from AI inference scaling at hyperscalers, where NVMe SSDs store model weights and key-value caches in the inference path. Meanwhile, WDC\'s HDD business faces direct competition from Seagate in the mass-capacity nearline segment that AI data lakes are driving.',
    constraints: [
      'NAND oversupply — industry-wide flash inventory correction from 2022-2023 over-production is resolving slowly; WDC pricing leverage limited',
      'Seagate nearline HDD competition — Seagate\'s mass-capacity HAMR drive advantage (32TB+) creating pricing pressure in WDC\'s largest HDD segment',
      'Flash Ventures JV — capital allocation decisions for Yokkaichi and Kitakami capacity ramps require alignment with Kioxia partnership',
    ],
    nexus: [
      { to: 'amat', label: 'NAND cell deposition tools (Flash Ventures)' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-10-02',
      reportedOn: '2026-10-22',
      status: 'Beat',
      statusBasis: 'Revenue $4.38B vs $4.14B and non-GAAP EPS $4.64 vs $4.08, both Investing.com consensus.',
      guidance: 'FQ2 2027: revenue $5.1B +/- $100M, non-GAAP gross margin 60% to 61%, non-GAAP EPS $5.80 +/- $0.20.',
      breakdown: [
        'Revenue $4.38B (+55% YoY, +17% QoQ); non-GAAP gross margin 58.1%, GAAP 57.8%',
        'Cloud $3.9B (+54% YoY), 88% of revenue',
        'Shipped 248 EB (+22% YoY, +8% QoQ); management calls this the floor for EB growth',
        'CEO cites inference, agentic and physical AI; demand seen growing 25%+ CAGR',
      ],
      sources: [
        { label: 'WDC FQ1 2027 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000106040/000162828026066882/a4ex991-pressreleaseq127.htm', date: '2026-10-22' },
        { label: 'Investing.com call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-western-digital-beats-q1-2027-forecasts-as-stock-falls-93CH-4967679', date: '2026-10-22' },
        { label: 'Investing.com earnings alert', url: 'https://www.investing.com/news/earnings/western-digital-earnings-beat-by-056-revenue-topped-estimates-4967280', date: '2026-10-22' },
        { label: 'WDC FQ2 2026 date notice', url: 'https://www.barchart.com/story/news/37006523/western-digital-to-announce-second-quarter-fiscal-year-2026-financial-results-on-january-29-2026', date: '2026-01-12' },
      ],
    },
    ir: {
      base: 'https://investor.wdc.com',
      reports: [{ label: 'Earnings Releases', href: 'https://investor.wdc.com/financial-information/annual-reports-and-proxy' }],
    },
    tacticalEntry: {
      idealEntry: '$58–$68 — NAND pricing recovery data or enterprise SSD hyperscaler contract announcement; accumulate near 52-week low range',
      leapStructure: 'Jan 2027 $70C — 12-month duration; NAND price recovery in H2 2026 is the swing factor; size 0.75%, delta 0.50',
      catalyst: 'July 30 FY2026 Q4 earnings — enterprise SSD revenue growth vs. hyperscaler AI inference demand; NAND pricing trajectory; Flash Ventures output discipline',
      thesis: 'WDC provides dual AI exposure: enterprise NVMe SSDs for AI inference and nearline HDDs for AI training datasets. The NAND recovery combined with enterprise SSD demand acceleration creates a margin expansion setup. Valuation is undemanding at trough NAND margins.',
    },
  },

  {
    id: 'stx',
    name: 'Seagate Technology',
    ticker: 'STX',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~4%' },
    stackPosition: 'Mass-Capacity HDD — AI Training Data Storage',
    thematic:
      'Seagate is the unexpected beneficiary of the AI training data storage demand — the exabyte-scale datasets required for model pre-training and fine-tuning are economically impossible to store on NAND flash, making HAMR-based nearline HDDs (32TB+) the de facto medium for AI data lakes at hyperscalers. Seagate\'s HAMR (Heat-Assisted Magnetic Recording) technology lead over WDC gives it higher areal density at lower cost-per-TB, the only metric that matters for cold storage at scale. In 2026, nearline HDD demand from hyperscalers is the strongest it has been in the company\'s history, and Seagate\'s manufacturing throughput — not design or pricing — is the constraint on upside.',
    constraints: [
      'HAMR manufacturing throughput — heat-assisted magnetic recording drives require specialized laser-in-actuator assembly that limits ramp velocity',
      'Western Digital competition — WDC\'s ePMR drives are a credible cost alternative at 20-24TB density tiers, pressuring Seagate\'s mid-density segment',
      'Single end-market concentration — nearline HDD is now ~70% of revenue; any hyperscaler capex pause has an outsized impact',
    ],
    nexus: [
      { to: 'amzn', label: 'AWS exabyte storage partner' },
      { to: 'msft', label: 'Azure nearline HDD supply' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-10-02',
      reportedOn: '2026-10-27',
      status: 'Beat',
      statusBasis: 'Revenue $4.233B vs $4.138B and non-GAAP EPS $7.68 vs $7.42, both LSEG per StockTitan.',
      guidance: 'FQ2 2027: revenue $4.8B +/- $100M and non-GAAP EPS $9.20 +/- $0.20, with non-GAAP operating margin expanding toward the mid-50% range.',
      breakdown: [
        'Revenue $4.23B vs $2.63B a year ago; non-GAAP gross margin 57.8%, operating margin 50.7%',
        'Data center revenue $3.4B (+63% YoY, +18% QoQ), 81% of total',
        'Shipped 220 EB; record nearline 198 EB (+24% YoY), 90% data center',
        'HAMR seen near 50% of nearline EB run rate exiting 2026; Mozaic 4 ramping at two CSPs',
      ],
      sources: [
        { label: 'Seagate FQ1 2027 release (SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1137789/000113778926000300/stxq12027pressreleasefinan.htm', date: '2026-10-27' },
        { label: 'Motley Fool call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/28/seagate-stx-q1-2027-earnings-call-transcript/', date: '2026-10-28' },
        { label: 'StockTitan (LSEG consensus)', url: 'https://www.stocktitan.net/articles/seagate-q1-fiscal-2027-earnings-storage-flat-prices-up', date: '2026-10-27' },
        { label: 'Seagate FQ2 2026 date notice', url: 'https://www.businesswire.com/news/home/20260113849496/en/Seagate-Technology-to-Report-Fiscal-Second-Quarter-2026-Financial-Results-on-January-27-2026', date: '2026-01-13' },
      ],
    },
    ir: {
      base: 'https://investors.seagate.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.seagate.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$100–$115 — hyperscaler nearline HDD order moderation headline creating entry; HAMR throughput bottleneck is the bull thesis — not demand',
      leapStructure: 'Jan 2027 $120C — 12-month duration; 40TB HAMR production ramp is the next ASP catalyst; size 1%, delta 0.55',
      catalyst: 'Next quarterly earnings — nearline HDD exabyte shipment growth; 40TB drive production ramp update; HAMR assembly throughput vs. demand',
      thesis: 'Seagate owns the only cost-effective medium for AI training dataset storage at exabyte scale. HAMR technology gives STX higher areal density than WDC at the 32-40TB tier. Nearline HDD demand from hyperscalers is at a multi-decade high and manufacturing throughput — not demand — is the ceiling.',
    },
  },

  {
    id: 'sndk',
    name: 'Sandisk',
    ticker: 'SNDK',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~4%' },
    stackPosition: 'NAND Flash — Enterprise & Consumer SSD (Pure-Play)',
    thematic:
      'Sandisk was spun out of Western Digital in 2024 as the first pure-play NAND flash company of scale, inheriting the joint Flash Ventures manufacturing JV with Kioxia at Yokkaichi and Kitakami — the two largest NAND fab complexes on earth. As an independent company, Sandisk can pursue NAND supply discipline and enterprise SSD pricing strategy without the conflicting interests of a legacy HDD business pulling in the opposite direction. In 2026, Sandisk\'s enterprise NVMe SSD segment is the growth driver, as AI inference workloads at hyperscalers demand ultra-high-density flash for model weight caching and key-value store acceleration at the inference edge.',
    constraints: [
      'Post-spin capital structure — debt load from the separation limits R&D and capex relative to Samsung and Micron, who operate at 3-5x the scale',
      'Flash Ventures JV dependency — capacity decisions at Yokkaichi and Kitakami require coordinated Kioxia alignment, slowing independent response to market signals',
      'Enterprise SSD competition — Samsung and Micron are simultaneously ramping QLC enterprise SSDs with aggressive pricing; pure-play NAND focus means no HBM upside to offset margin pressure',
    ],
    nexus: [
      { to: 'wdc',  label: 'Flash Ventures JV legacy partner' },
      { to: 'amat', label: 'NAND cell deposition tools (Yokkaichi)' },
      { to: 'lrcx', label: 'NAND vertical stack etch' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-10-02',
      reportedOn: '2026-10-29',
      status: 'Beat',
      statusBasis: 'Revenue $11.03B vs $10.58B and non-GAAP EPS $49.51 vs $47.20 per Shacknews (consensus provider unnamed).',
      guidance: 'FQ2 2027: revenue $12.2B to $12.6B, non-GAAP gross margin 84.5% to 85.5%, non-GAAP EPS $55 to $57 pre-split ($6.88 to $7.13 split-adjusted per the call).',
      breakdown: [
        'Revenue $11.03B (+23% QoQ, +378% YoY); non-GAAP gross margin 85.1%, GAAP 85.0%',
        'Datacenter $4.80B (+61% QoQ); Edge $5.83B (+7% QoQ); Consumer $397M (-29% QoQ)',
        'Non-GAAP operating margin 80.4%; non-GAAP EPS $49.51, GAAP $52.60',
        'Long-term agreements cover about 50% of FY27 bits; HBF first die taped out',
      ],
      sources: [
        { label: 'Sandisk FQ1 2027 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/2023554/000162828026068243/sndkq1-27ex991xpressrelease.htm', date: '2026-10-29' },
        { label: 'Motley Fool call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/30/sandisk-sndk-q1-2027-earnings-call-transcript/', date: '2026-10-30' },
        { label: 'Shacknews (consensus)', url: 'https://www.shacknews.com/article/151205/sandisk-sndk-q1-2027-earnings-results', date: '2026-10-29' },
        { label: 'Sandisk FQ2 2026 date notice', url: 'https://www.businesswire.com/news/home/20251230641655/en', date: '2025-12-30' },
      ],
    },
    ir: {
      base: 'https://investor.sandisk.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.sandisk.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$22–$28 — NAND pricing stabilization or enterprise SSD market share data showing Flash Ventures supply discipline paying off',
      leapStructure: 'Jan 2027 $30C (if listed) — speculative LEAP; pure-play NAND recovery + enterprise SSD mix shift; size 0.5%, delta 0.45',
      catalyst: 'Q2 2026 earnings — enterprise SSD revenue vs. consumer NAND mix; Flash Ventures JV output discipline update; gross margin trajectory toward 35%',
      thesis: 'As a pure-play NAND spin-off, SNDK can optimize supply discipline without HDD business conflicts. Enterprise NVMe SSD exposure to AI inference demand is the growth engine. If NAND pricing recovers in H2 2026, SNDK has the highest earnings leverage per point of ASP improvement.',
    },
  },

  {
    id: 'nanya',
    name: 'Nanya Technology',
    ticker: '2408.TW',
    etf: 'DRAM',
    category: CATEGORIES.MEMORY,
    weight: { index: 'DRAM', value: '~3%' },
    stackPosition: 'Commodity DRAM — DDR4 / LPDDR5',
    thematic:
      'Nanya Technology is the smallest of the major DRAM manufacturers, focused on commodity DDR4 and LPDDR5 for consumer electronics, networking, and entry-level server markets that are the most economically sensitive part of the memory cycle. With no HBM roadmap, Nanya has no direct exposure to the AI memory premium and instead competes on cost in the commodity DRAM segments that Samsung and Micron capacity adds have most aggressively repriced. In 2026, Nanya is a cycle-trough story where capex discipline and Taiwan-based manufacturing represent the durable value while the next upcycle begins to form.',
    constraints: [
      'No HBM product — Nanya lacks the TSV and advanced stacking capability to participate in the premium HBM market, capping upside',
      'Commodity DRAM pricing pressure — Samsung and Micron 1-beta capacity additions creating structural oversupply in DDR4/DDR5',
      'Scale disadvantage — Nanya\'s ~3% market share limits R&D leverage; technology roadmap lags the top-3 by 1-2 nodes',
    ],
    nexus: [
      { to: 'amat', label: 'deposition tools for DRAM cell' },
      { to: 'lrcx', label: 'etch tools for capacitor stack' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-12',
      status: null,
      statusBasis: 'Not set: no revenue consensus found in major financial press. EPS NT$25.4 beat a NT$23.51 forecast per Investing.com, but Smartkarma had net income NT$87.63B in line with NT$88.27B expected.',
      guidance: 'No numeric guidance; management expects DRAM ASPs to keep rising in Q4 with room for further gross margin improvement, and bit shipments to stay about flat until new fab output arrives.',
      breakdown: [
        'Revenue NT$133.65B (+61.9% QoQ, +611.7% YoY); EPS NT$25.4, net income NT$87.63B',
        'Gross margin 85.7% (+6.2 pts QoQ); operating margin 80.0%',
        'DRAM ASP up over 60% QoQ; bit shipments down mid-single-digit %',
        'AI infrastructure over 20% of revenue; target 40%-50% by 2029 or 2030',
      ],
      sources: [
        { label: 'Nanya Q3 2026 results (MarketScreener)', url: 'https://www.marketscreener.com/news/nanya-technology-reports-results-for-the-third-quarter-2026-ce785ddcde80f321', date: '2026-10-12' },
        { label: 'Investing.com call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-nanya-technology-q3-2026-profit-surges-on-dram-pricing-93CH-4943419', date: '2026-10-12' },
        { label: 'TrendForce', url: 'https://www.trendforce.com/news/2026/10/12/news-nanyas-3q-dram-asps-surge-over-60-qoq-as-gross-margin-hits-85-7-further-gains-seen-in-4q/', date: '2026-10-12' },
        { label: 'Quartr call summary', url: 'https://quartr.com/events/nanya-technology-corporation-2408-q3-2026_F95UU1G6', date: '2026-10-12' },
        { label: 'Smartkarma alert (search snippet only)', url: 'https://www.smartkarma.com/home/?p=505284', date: '2026-10-12' },
        { label: 'UAnalyze: Q4 2025 investor call', url: 'https://uanalyze.com.tw/articles/5289645797', date: '2026-01-19' },
      ],
    },
    ir: {
      base: 'https://www.nanya.com/en/Invest',
      reports: [{ label: 'Financial Reports', href: 'https://www.nanya.com/en/Invest/FinancialReport' }],
    },
    tacticalEntry: {
      idealEntry: 'TWD 38–48 (Taiwan-listed only) — very small speculative position; pure commodity DRAM recovery play with no HBM upside; trough valuation near book value',
      leapStructure: 'Taiwan-listed shares only; no US-tradeable options — long-only spot equity; size 0.25% max given limited AI upside and scale disadvantage',
      catalyst: 'Q2 2026 earnings — commodity DDR4/DDR5 pricing trend; capex discipline update; any announcements on HBM roadmap development',
      thesis: 'Nanya is a pure commodity DRAM cycle play with no AI premium. The thesis is simple: trough valuation near book value with a DRAM upcycle catalyst in H2 2026. Small position only — the absence of HBM limits upside significantly vs. Hynix or Micron.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // EQUIPMENT & LITHO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'asml',
    name: 'ASML',
    ticker: 'ASML',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~6%' },
    stackPosition: 'Lithography — EUV & High-NA EUV Systems',
    thematic:
      'ASML is the most extreme monopoly in the semiconductor supply chain — it is the sole manufacturer of EUV lithography systems on earth, and the only company capable of producing the High-NA EUV tools (EXE:5000) required to pattern sub-2nm features. Every chip at the leading edge in 2026 — NVIDIA Blackwell, TSMC N3/N2, Samsung SF3 — requires ASML EUV systems, and the High-NA tools needed for the next generation beyond N2 are already on multi-year order queues. The geopolitical dimension of ASML\'s monopoly is acute: Dutch export license restrictions on DUV and EUV systems to China have created a permanent bifurcation of the global semiconductor market.',
    constraints: [
      'High-NA EUV production capacity — the EXE:5000 system requires precision optics made only by Zeiss; output is capped at ~20 systems/year through 2026',
      'Geopolitical export controls — Dutch government DUV/EUV restrictions on China compress TAM; any escalation could affect broader license scope',
      'EUV source power scaling — laser-produced plasma source power determines throughput; next-gen power upgrades are a multi-year R&D program',
    ],
    nexus: [
      { to: 'tsm',  label: 'primary EUV / High-NA customer' },
      { to: 'skhx', label: 'DRAM EUV patterning' },
      { to: 'ssnlf', label: 'foundry & memory EUV tools' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-27',
      reportedOn: '2026-10-14',
      status: 'Meet',
      statusBasis: 'Mixed. Net sales EUR 11.66B vs EUR 11.72B (LSEG via CNBC), a slight miss. Diluted EPS EUR 12.93 (about $14.51) vs $12.05 expected (Stocktwits, provider unnamed), a beat; net profit EUR 4.96B vs EUR 4.1B (LSEG via CNBC).',
      guidance: 'Q4 2026 net sales of EUR 14.2-15.2B with gross margin around 57%; FY2026 net sales of EUR 44-45B with gross margin around 56%.',
      breakdown: [
        'Net sales EUR 11.66B, gross margin 57.5%, net income EUR 4.96B incl. ~EUR 0.5B Mistral AI gain',
        'Net system sales ~EUR 8.4B on 121 litho systems; Installed Base Management EUR 3.3B',
        'Customers raised AI-driven demand forecasts; planned 2027-28 supply won\'t fully meet demand',
        'Studying 2028 capacity beyond the +30% plan; Samsung and TSMC committed to High NA EUV',
      ],
      sources: [
        { label: 'ASML Q3 2026 release (6-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm', date: '2026-10-14' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/10/14/asml-3q-earnings-ai-demand-orders-capacity.html', date: '2026-10-14' },
        { label: 'Stocktwits (EPS consensus)', url: 'https://stocktwits.com/news-articles/markets/equity/asml-raises-sales-forecast-for-a-third-time-but-q3-sales-miss-sends-stock-lower-earnings-selloff-spreads-to-mu-sndk-intc/cZxfWHbRBp9', date: '2026-10-14' },
        { label: 'Q4 2025 results recap (date precedent)', url: 'https://rallies.ai/news/asml-posts-record-132-b-q4-orders-announces-12-b-buyback-and-strong-2026-outlook', date: '2026-01-28' },
        { label: 'MarketScreener calendar (estimate only)', url: 'https://uk.marketscreener.com/quote/stock/ASML-HOLDING-6268/calendar/', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://www.asml.com/en/investors',
      reports: [{ label: 'Quarterly Results', href: 'https://www.asml.com/en/investors/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$700–$760 ADR — any China export restriction escalation headline creating a gap-down entry; or High-NA EXE:5000 shipment delay creating short-term fear',
      leapStructure: 'Jan 2027 $790C — 12-month duration; High-NA volume ramp at TSMC N2 and Samsung SF2 is the next structural re-rate; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — High-NA EXE:5000 cumulative shipments; backlog composition; TSMC N2 readiness update; China DUV restriction impact quantification',
      thesis: 'ASML is the most extreme monopoly in the global supply chain — zero substitutes for EUV or High-NA EUV. Every advanced AI chip in 2026 was patterned with ASML tools. The High-NA transition creates a second ASP step-function above the already-monopoly EUV franchise.',
    },
  },

  {
    id: 'amat',
    name: 'Applied Materials',
    ticker: 'AMAT',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~5%' },
    stackPosition: 'Deposition, Etch & CMP — Gate-All-Around Tooling',
    thematic:
      'Applied Materials is the broadest-based semiconductor equipment company, with leadership positions in CVD deposition, PVD, CMP, and implant — the process steps that become more tool-intensive with each new transistor architecture. The transition to gate-all-around (GAA) transistors at 3nm and below dramatically increases the number of epitaxy, oxidation, and deposition steps per wafer, creating a secular tailwind for AMAT revenue intensity per leading-edge wafer. Advanced packaging (ICAPS) is a second growth vector, as TSMC CoWoS and SoIC build-out requires significant new AMAT deposition and etch capacity additions.',
    constraints: [
      'China export restrictions — US Commerce Department controls on advanced process equipment limit AMAT\'s ability to serve China\'s leading-edge fab customers',
      'Customer concentration — TSMC, Samsung, and SK Hynix represent the majority of WFE revenue; their CapEx cycles drive AMAT\'s order book directly',
      'Gate-all-around adoption ramp — GAA technology complexity creates tool qualification delays at customer fabs, pushing delivery timelines',
    ],
    nexus: [
      { to: 'tsm',  label: 'deposition & CMP for N3/N2/CoWoS' },
      { to: 'skhx', label: 'HBM DRAM process tools' },
      { to: 'intc', label: 'IFS 18A process equipment' },
    ],
    earnings: {
      period: 'FQ3 2026',
      periodEnd: '2026-07-26',
      reportedOn: '2026-08-13',
      status: 'Beat',
      statusBasis: 'Revenue $9.12B vs $8.99B and non-GAAP EPS $3.50 vs $3.40 (Investing.com; Reuters also cites $8.99B revenue but names no provider for Q3 estimates).',
      guidance: 'FQ4 2026 revenue of $10.25B +/- $500M and non-GAAP EPS of $4.02 +/- $0.20.',
      breakdown: [
        'Semiconductor Systems $7.04B (67% foundry/logic, 26% DRAM, 7% flash); 38.0% non-GAAP op margin',
        'Applied Global Services $1.78B; Other (incl. Display) $294M',
        'Non-GAAP gross margin 50.4%, non-GAAP operating margin 34.0%, record revenue up 25% YoY',
        'AI demand lifted calendar 2026 Semi Systems view; packaging seen up 70%+ in calendar 2026',
      ],
      sources: [
        { label: 'AMAT FQ3 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000006951/000162828026056699/exhibit991q32026earningsre.htm', date: '2026-08-13' },
        { label: 'Reuters via Yahoo', url: 'https://finance.yahoo.com/technology/ai/articles/applied-materials-forecasts-quarterly-revenue-200500160.html', date: '2026-08-13' },
        { label: 'Investing.com transcript recap', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-applied-materials-beats-q3-2026-estimates-shares-fall-93CH-4859444', date: '2026-08-13' },
        { label: 'AMAT notice of FQ4 date', url: 'https://www.appliedmaterials.com/us/en/newsroom/press-releases/102226-applied-to-report-fourth-quarter-fiscal-2026-results.html', date: '2026-10-22' },
      ],
    },
    ir: {
      base: 'https://ir.appliedmaterials.com',
      reports: [{ label: 'Earnings Releases', href: 'https://ir.appliedmaterials.com/financial-information/quarterly-earnings' }],
    },
    tacticalEntry: {
      idealEntry: '$165–$180 — any WFE spend guidance cut from TSMC or Samsung creating a broad equipment sector selloff; broadest equipment exposure at the best entry',
      leapStructure: 'Jan 2027 $185C — 12-month duration; GAA tooling intensity increase at TSMC N2 is the secular driver; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — GAA epi and CVD revenue growth vs. guidance; advanced packaging (ICAPS) order growth; China restriction quantification',
      thesis: 'AMAT has the broadest process tool coverage of any equipment company — CVD, PVD, CMP, implant, etch. GAA transistor architecture structurally increases tool steps per wafer at every new node. Advanced packaging exposure adds a second AI-driven secular tailwind.',
    },
  },

  {
    id: 'lrcx',
    name: 'Lam Research',
    ticker: 'LRCX',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~4%' },
    stackPosition: 'Etch & Deposition — HBM TSV & NAND Vertical Stack',
    thematic:
      'Lam Research\'s leadership in atomic layer etch (ALE) and selective deposition makes it structurally indispensable to the two hottest areas of semiconductor manufacturing: HBM TSV etching (which requires ultra-high-aspect-ratio etch that only LRCX tools can deliver at volume) and NAND vertical stack formation (where LRCX holds dominant share in the furnace and single-wafer etch steps). As HBM transitions from 8-Hi to 12-Hi stacks and eventually 16-Hi, the number of TSV etch passes and the required aspect ratio both increase, creating a compounding revenue intensity tailwind for LRCX per HBM unit. The NAND recovery cycle adds a second engine as AI inference drives SSD demand and brings NAND fabs back to full utilization.',
    constraints: [
      'China export controls — restrictions on advanced etch tools for NAND and DRAM limit Lam\'s addressable market in the world\'s largest WFE geography',
      'NAND capex cycle dependency — NAND recovery pace directly gates Lam\'s etch and deposition orders from Samsung, Kioxia, and Micron',
      'HBM TSV tool availability — demand for high-aspect-ratio etch tools exceeds current production capacity; lead times extending',
    ],
    nexus: [
      { to: 'skhx',  label: 'HBM TSV high-aspect-ratio etch' },
      { to: 'mu',    label: 'HBM3E / NAND etch tools' },
      { to: 'tsm',   label: 'advanced packaging etch for CoWoS' },
      { to: 'nanya', label: 'commodity DRAM capacitor etch' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-27',
      reportedOn: '2026-10-21',
      status: 'Beat',
      statusBasis: 'Revenue $8.22B vs ~$8.13-8.14B and non-GAAP EPS $2.20 vs $2.17-2.18 (XTB, BigGo, Earnings Whispers; no LSEG/FactSet figure found). FXEmpire alone shows $8.32B/$2.22, which would be a Miss.',
      guidance: 'December 2026 quarter revenue of $8.60B +/- $400M, gross margin 52.5% +/- 1%, operating margin 40.5% +/- 1% and EPS of $2.33 +/- $0.15.',
      breakdown: [
        'Systems $5.73B; customer support and other $2.49B; record revenue up 22% QoQ',
        'Non-GAAP gross margin 52.4%; non-GAAP operating margin 40.2%, first time above 40%',
        'Systems mix: memory 46%, foundry 46%, logic/other 8%; memory systems revenue up 120% YoY',
        'AI driving DDR5/HBM DRAM record; China 35% of revenue, expected to fall sharply in December',
      ],
      sources: [
        { label: 'Lam FQ1 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000707549/000070754926000052/lrcx_exhibitx991xq1x2027.htm', date: '2026-10-21' },
        { label: 'XTB analysis', url: 'https://www.xtb.com/en/market-analysis/lam-research-strong-numbers-limited-upside-surprise', date: '2026-10-22' },
        { label: 'BigGo Finance', url: 'https://finance.biggo.com/news/b72cc492-fc71-4a54-9927-a17b8a320449', date: '2026-10-21' },
        { label: 'MarketBeat call highlights', url: 'https://www.marketbeat.com/instant-alerts/transcript-lam-research-q1-earnings-call-highlights-2026-10-21/', date: '2026-10-21' },
        { label: 'FXEmpire (conflicting estimates)', url: 'https://www.fxempire.com/stocks/lrcx/earnings', date: '2026-11-05' },
        { label: 'Lam FQ2 2026 date precedent', url: 'https://www.metatrader.com/tr/news/1055663-lam-research-q2-earnings-surpass-expectations-revenues-rise', date: '2026-01-28' },
      ],
    },
    ir: {
      base: 'https://ir.lamresearch.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://ir.lamresearch.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$75–$85 — NAND capex pause news creating broad equipment sector dip; HBM TSV etch demand is structurally decoupled from NAND cycle',
      leapStructure: 'Jan 2027 $90C — 12-month duration; HBM4 12-Hi TSV etch revenue ramp is the primary catalyst; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — HBM TSV etch vs. total systems revenue mix; NAND deposition order recovery; customer support (CSBG) installed base growth',
      thesis: 'LRCX owns HBM TSV etching — the single most specialized process step in HBM manufacturing. As stacks go from 8-Hi to 12-Hi to 16-Hi, aspect ratio increases and only LRCX tools can deliver at volume. NAND recovery adds a second independent engine for 2H 2026.',
    },
  },

  {
    id: 'klac',
    name: 'KLA Corporation',
    ticker: 'KLAC',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~4%' },
    stackPosition: 'Process Control — Inspection, Metrology & Yield Management',
    thematic:
      'KLA is the highest-margin, most defensible business in semiconductor equipment — process control (inspection and metrology) becomes more economically critical with each new node because yield loss at 3nm costs 10x more per wafer than at 28nm, making KLA\'s tools mandatory insurance against expensive defects. As leading-edge IC fabrication migrates to GAA, EUV multi-patterning, and High-NA EUV, the number of inspection steps per wafer increases faster than the number of deposition or etch steps — creating secular revenue intensity growth for KLAC without requiring TSMC or Samsung to build new fabs. Advanced packaging inspection is a third vector, as CoWoS and SoIC bonding defects require new die-to-die alignment and bump inspection tools that KLAC is ramping.',
    constraints: [
      'China export controls — KLA\'s process control tools face restrictions similar to AMAT and LRCX; China has historically been ~25% of WFE spend',
      'NAND capex dependency — KLA\'s etch and deposition inspection revenue tied to NAND fab utilization cycles',
      'R&D cost for High-NA metrology — next-generation inspection tools for sub-2nm features require EUV-compatible optics development',
    ],
    nexus: [
      { to: 'tsm',  label: 'N2/N3 yield management systems' },
      { to: 'skhx', label: 'HBM DRAM inspection & metrology' },
      { to: 'asml', label: 'patterning metrology complement' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Beat',
      statusBasis: 'Revenue $4.14B vs $4.04B (Benzinga, Rallies) and non-GAAP EPS $1.22 vs $1.18 (MarketBeat via Longbridge, Earnings Whispers). No LSEG/FactSet figure found. Benzinga listed a lower $1.13 EPS consensus; still a beat.',
      guidance: 'FQ2 2027 revenue of $4.7B +/- $200M, non-GAAP gross margin of 62.5% +/- 1.0% and non-GAAP EPS of $1.44 +/- $0.11.',
      breakdown: [
        'Semiconductor Process Control $3.75B; PCB/Component Inspection $242M; Specialty Process $139M',
        'Services $851M; revenue up 13% QoQ and 29% YoY; non-GAAP gross margin 62.7%',
        'Advanced packaging process control ~$1.1B in calendar 2026, up 70%+ YoY',
        'AI buildout cited as critical driver; 2026 WFE mid-$150B range, 2027 seen above $200B',
      ],
      sources: [
        { label: 'KLA FQ1 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000319201/000031920126000032/exhibit991earningsrelease0.htm', date: '2026-10-28' },
        { label: 'Rallies.ai recap', url: 'https://rallies.ai/news/kla-forecasts-second-quarter-revenue-of-45-billion-to-49-billion-913d15bd5000677e', date: '2026-10-28' },
        { label: 'Benzinga consensus', url: 'https://www.benzinga.com/quote/KLAC/earnings-forecasts', date: '2026-11-05' },
        { label: 'MarketBeat preview via Longbridge', url: 'https://longbridge.com/news/302525699', date: '2026-10-21' },
        { label: 'MarketBeat call highlights', url: 'https://www.marketbeat.com/instant-alerts/transcript-kla-q1-earnings-call-highlights-2026-10-28/', date: '2026-10-28' },
        { label: 'KLA FQ2 2026 8-K (date precedent)', url: 'https://www.sec.gov/Archives/edgar/data/319201/000031920126000006/exhibit991earningsrelease1.htm', date: '2026-01-29' },
      ],
    },
    ir: {
      base: 'https://ir.kla.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.kla.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$650–$710 — any broad equipment sector macro selloff is the entry; KLAC is the highest-quality, highest-margin equipment business to buy on weakness',
      leapStructure: 'Jan 2027 $730C — 12-month duration; advanced packaging inspection (CoWoS) is the upside option; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — process control revenue per leading-edge wafer; CoWoS inspection tool orders; China restriction impact; services (recurring) growth',
      thesis: 'KLA is the highest-margin, most defensible equipment business in semis. Yield loss at 3nm is catastrophically expensive — KLA\'s tools are mandatory insurance, not discretionary spend. Inspection intensity per wafer grows faster than etch or deposition with every new node. The cleanest compounder in equipment.',
    },
  },

  {
    id: 'toely',
    name: 'Tokyo Electron',
    ticker: 'TOELY',
    etf: 'SMH',
    category: CATEGORIES.EQUIPMENT,
    weight: { index: 'SMH', value: '~3%' },
    stackPosition: 'CVD, Thermal & Etch — TSMC & Samsung Process Tools',
    thematic:
      'Tokyo Electron is the dominant Japanese semiconductor equipment company, with global leadership in thermal CVD, plasma etch, single-wafer thermal processing, and coater/developer systems used in photolithography. TEL\'s process tools are critical at every leading-edge fab worldwide, and its single-wafer thermal oxidation systems have become indispensable for gate oxide formation in GAA transistor structures at TSMC N2 and Samsung SF2. The weak yen against USD-denominated equipment orders has provided a structural tailwind to TEL\'s top-line reporting in local currency, compressing the cost of yen-priced R&D against dollar-denominated revenue.',
    constraints: [
      'Japan export control alignment — Japan has coordinated with the US and Netherlands on advanced semiconductor equipment restrictions to China, limiting TEL\'s formerly large China revenue stream',
      'TSMC/Samsung customer concentration — TEL\'s fate is closely tied to 2-3 customers\' leading-edge investment cycles',
      'Yen volatility — USD/JPY swings create revenue translation noise and complicate multi-year equipment contract pricing',
    ],
    nexus: [
      { to: 'tsm',  label: 'N2 single-wafer thermal CVD / etch' },
      { to: 'skhx', label: 'DRAM capacitor thermal oxidation tools' },
      { to: 'asml', label: 'coater/developer for EUV lithography tracks' },
    ],
    earnings: {
      period: 'Q2 FY2027',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-30',
      status: null,
      statusBasis: 'Not set: no consensus found in major financial press.',
      guidance: 'FY ending March 2027 net sales of JPY 3.7T, operating income of JPY 1.169T and net income of JPY 865B.',
      breakdown: [
        'Net sales JPY 935.0B (+48.4% YoY); gross margin 47.8%; operating margin 31.6%',
        'SPE new equipment JPY 734.4B: 56% non-memory, 34% DRAM, 10% non-volatile; Field Solutions JPY 191.0B',
        'China 36.4% of Q2 sales (JPY 339.9B); South Korea JPY 190.7B; Taiwan JPY 180.4B',
        'AI-led WFE outlook: ~$160B in CY2026, $210B+ in CY2027 across GPU/HBM, CPU, DRAM and NAND',
      ],
      sources: [
        { label: 'TEL Q2 presentation', url: 'https://www.tel.com/ir/irta3a00000006g5-att/fy27q2presentations-e2.pdf', date: '2026-10-30' },
        { label: 'TEL kessan tanshin', url: 'https://www.tel.com/ir/irta3a00000006g5-att/fy27q2tanshin-e.pdf', date: '2026-10-30' },
        { label: 'TEL IR page (schedule)', url: 'https://www.tel.com/ir/', date: '2026-11-05' },
        { label: 'The Outpost', url: 'https://theoutpost.ai/news-story/tokyo-electron-q2-profit-jumps-27-as-ai-demand-for-semiconductor-equipment-accelerates-32910/', date: '2026-10-30' },
        { label: 'Goldesel', url: 'https://goldesel.de/aktien/news/tokyo-electron-aktie-rekordausblick-ubertrifft-erwartungen-dank-ki-chipboom', date: '2026-10-30' },
        { label: 'TEL ADR notice', url: 'https://www.tel.com/news/ir/2026/b4np7600000000ii-att/20260917_001_e.pdf', date: '2026-09-17' },
      ],
    },
    ir: {
      base: 'https://www.tel.com/ir',
      reports: [{ label: 'Earnings Results', href: 'https://www.tel.com/ir/financials/earnings.html' }],
    },
    tacticalEntry: {
      idealEntry: '$13–$16 ADR — yen strength (USD/JPY below 140) compressing USD-reported earnings creates a currency-driven entry; TSMC N2 tool demand is yen-agnostic',
      leapStructure: 'No liquid US options on TOELY ADR — long-only spot equity; size 0.75%, accumulate on USD/JPY strength-driven dips',
      catalyst: 'Next quarterly earnings (JPY) — TSMC N2 single-wafer thermal CVD order backlog; book-to-bill ratio; China revenue restriction impact vs. TSMC offset',
      thesis: 'Tokyo Electron has dominant share in single-wafer thermal CVD and coater/developer for EUV lithography tracks — two tools that are mandatory at every leading-edge node globally. The weak yen provides a structural cost tailwind. TSMC N2 ramp creates a multi-quarter order visibility window.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // AI SERVICES & INFRASTRUCTURE (AIS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'vrt',
    name: 'Vertiv',
    ticker: 'VRT',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~5.1%' },
    stackPosition: 'Thermal Management — Liquid Cooling & Power Distribution',
    thematic:
      'Vertiv is the "Radiator" of the AI buildout: as GPU rack densities breach 100 kW with NVIDIA Blackwell and approach 200 kW with Rubin, air cooling becomes physically impossible and Vertiv\'s direct liquid cooling (DLC) systems become the literal life-support of the data center. NVIDIA co-designed its GB200 NVL72 rack with Vertiv\'s cooling architecture, creating a design-lock that makes Vertiv the default thermal vendor for hyperscaler AI clusters. In 2026, the binding constraint is not Vertiv\'s order book — it is coolant distribution unit (CDU) manufacturing throughput and heat exchanger lead times from a concentrated European supply chain.',
    constraints: [
      'CDU supply chain — heat exchangers sourced from European vendors with 30-40 week lead times; manufacturing is the upside ceiling',
      'Greenfield factory ramp — Vertiv\'s Columbus, OH facility expansion requires 18-24 months to reach volume production',
      'Rack-level integration complexity — each hyperscaler uses unique mechanical designs requiring customized CDU configurations',
    ],
    nexus: [
      { to: 'nvda', label: 'Blackwell rack cooling co-design' },
      { to: 'gev',  label: 'power input from on-site turbine generation' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Beat',
      statusBasis: 'Net sales $4.31B vs $3.77B and adjusted EPS $2.21 vs $1.82 (S&P consensus via StockStory/Yahoo Finance); Investing.com shows $3.75B and $1.82. LSEG/FactSet figures not found.',
      guidance: 'Q4 2026 net sales of $4.313B-$4.513B and adjusted EPS of $2.22-$2.28; FY2026 raised to net sales of $14.45B-$14.85B, adjusted EPS of $7.10-$7.20 and adjusted FCF of $2.6B-$2.8B.',
      breakdown: [
        'Net sales $4.31B, +61% (organic +55%); organic orders grew more than 100%',
        'Americas $2.99B +75%, APAC $779M +50%, EMEA $545M +23%',
        'Adjusted operating margin 25.2%, +290 bps; adjusted FCF $652M',
        'AI data center demand: Americas pipeline fastest sequential growth; backlog duration 12-18 months',
      ],
      sources: [
        { label: 'Vertiv Q3 2026 release (8-K Ex. 99.1)', url: 'https://www.sec.gov/Archives/edgar/data/0001674101/000162828026067707/q32026exhibit991vrt10282026.htm', date: '2026-10-28' },
        { label: 'StockStory via Yahoo Finance (consensus)', url: 'https://finance.yahoo.com/markets/stocks/articles/vertiv-nyse-vrt-beats-expectations-105935914.html', date: '2026-10-28' },
        { label: 'Investing.com call transcript (consensus)', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-vertiv-tops-q3-2026-estimates-and-raises-outlook-93CH-4980196', date: '2026-10-28' },
        { label: 'Motley Fool Q3 call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/28/vertiv-vrt-q3-2026-earnings-call-transcript/', date: '2026-10-28' },
        { label: 'Vertiv Q4 2025 date announcement (cadence)', url: 'https://www.nasdaq.com/press-release/vertiv-announces-date-fourth-quarter-and-full-year-2025-earnings-and-2026-investor', date: '2026-01-21' },
      ],
    },
    ir: {
      base: 'https://investors.vertiv.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.vertiv.com/financials/quarterly-results/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$88–$100 — CDU supply chain delay headline or Columbus factory ramp concern creating a sentiment gap; demand is not the risk, manufacturing throughput is',
      leapStructure: 'Jan 2027 $105C — 12-month duration; Columbus factory Phase 2 commissioning is the upside unlock; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — liquid cooling (DLC) segment revenue growth; CDU backlog vs. capacity; Columbus factory utilization ramp timeline',
      thesis: 'Vertiv is the mandatory thermal infrastructure for every AI rack above 40kW density — and Blackwell racks are 100kW+. The NVL72 co-design lock creates multi-year sole-source exposure. Backlog exceeds $10B. The question is how fast manufacturing can scale, not whether demand will be there.',
    },
  },

  {
    id: 'gev',
    name: 'GE Vernova',
    ticker: 'GEV',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~3.7%' },
    stackPosition: 'Power Generation — Gas Turbines & Grid Infrastructure',
    thematic:
      'GE Vernova owns the "First Mile" of AI power: hyperscalers contracting for 500 MW to 1 GW of dedicated data center capacity are ordering GE gas turbines for on-site generation plants because grid interconnection queues now stretch 5-7 years. The HL-class turbine is the preferred prime mover for hyperscaler behind-the-meter power plants, with order backlog extending into 2028. In 2026, GEV\'s constraint is manufacturing throughput at its Greenville, SC turbine assembly facility — not demand — creating a multi-year revenue visibility that is exceptional for an industrial company.',
    constraints: [
      'HL-class turbine manufacturing backlog — 18-month assembly cycle; Greenville running at capacity through 2027',
      'Grid interconnect queue — 5-7 year wait for utility interconnection pushes hyperscalers to behind-the-meter; creates demand but strains GEV\'s delivery model',
      'Hot-section forgings supply — turbine alloy forgings sourced from a handful of global specialty steel suppliers with constrained capacity',
    ],
    nexus: [
      { to: 'wmb',  label: 'Transco natural gas fuel supply' },
      { to: 'trgp', label: 'upstream Permian gas gathering' },
      { to: 'vrt',  label: 'co-located cooling for on-site data centers' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Beat',
      statusBasis: 'Revenue $12.64B vs $12.01B and GAAP EPS $4.81 vs $4.01 (S&P consensus via StockStory/TradingView). Other estimates seen: EPS $4.03, revenue $11.99B-$12.10B. No Reuters/LSEG figure found.',
      guidance: 'FY2026 raised to revenue of $46.5B-$47.5B, adjusted EBITDA margin of 13.5%-14.5% and FCF of $16B-$17B.',
      breakdown: [
        'Revenue $12.6B, +27% (organic +18%); orders $29.3B, +96% organic; backlog $197B',
        'Power revenue $6.1B, margin 21.4%; gas backlog plus slots 122 GW, 130+ GW expected by year-end',
        'Electrification $3.9B, margin 19.1%; data center orders about $1.4B, over $6B year to date',
        'Adjusted EBITDA $1.9B, 15.4% margin; FCF $5.4B; Wind margin 2.6%',
      ],
      sources: [
        { label: 'GE Vernova Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001996810/000199681026000162/gevpressrelease3q26.htm', date: '2026-10-28' },
        { label: 'StockStory via TradingView (consensus)', url: 'https://www.tradingview.com/news/stockstory:8d7685fe6094b:0-ge-vernova-nyse-gev-reports-strong-q3-2026-full-year-outlook-slightly-exceeds-expectations/', date: '2026-10-28' },
        { label: 'MarketBeat earnings page (consensus cross-check)', url: 'https://www.marketbeat.com/stocks/NYSE/GEV/earnings/', date: '2026-10-28' },
        { label: 'Motley Fool Q3 call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/28/ge-vernova-gev-q3-2026-earnings-call-transcript/', date: '2026-10-28' },
        { label: 'GE Vernova Q4 2025 date announcement (cadence)', url: 'https://www.gevernova.com/news/press-releases/ge-vernova-announce-fourth-quarter-full-year-2025', date: '2026-01-05' },
      ],
    },
    ir: {
      base: 'https://www.gevernova.com/investors',
      reports: [{ label: 'Financial Results', href: 'https://www.gevernova.com/investors/financial-results' }],
    },
    tacticalEntry: {
      idealEntry: '$350–$380 — any wind segment earnings noise masking HL-class turbine Power backlog strength; or broad industrial selloff creating a sector-wide entry',
      leapStructure: 'Jan 2027 $400C — 12-month duration; Greenville factory expansion + hyperscaler behind-the-meter contracts are the catalysts; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — Power segment revenue vs. $30B+ backlog; HL-class turbine order additions from hyperscalers; Greenville capacity expansion timeline',
      thesis: 'GEV owns the gas turbine that hyperscalers are ordering for on-site power because grid interconnect queues are 5-7 years. The Power segment backlog extends to 2028. This is a multi-year, contracted revenue story with industrial manufacturing economics — not a volatile tech multiple.',
    },
  },

  {
    id: 'msft',
    name: 'Microsoft',
    ticker: 'MSFT',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — Azure AI Cloud & Enterprise Copilot',
    thematic:
      'Microsoft has transformed from an enterprise software incumbent into the dominant AI distribution layer — Azure OpenAI Service is the on-ramp for enterprise AI workloads, and Copilot is embedding AI monetization directly into the Microsoft 365 suite that 400M+ enterprise users depend on daily. The partnership with OpenAI gives MSFT exclusive cloud rights to the most commercially important foundation models, creating a durable competitive moat that Google and Amazon can only challenge with their own in-house model investments. In 2026, Azure\'s AI revenue trajectory — growing >40% YoY — is inflecting the cloud segment margin structure as GPU utilization rates and inference efficiency improve with scale.',
    constraints: [
      'GPU supply allocation — Azure\'s AI capacity is gated by NVIDIA GB200/Blackwell Ultra availability; any supply disruption at TSMC flows through to Azure AI capacity',
      'OpenAI dependency — MSFT\'s AI moat is partially dependent on OpenAI\'s continued model leadership; GPT-5 competitive positioning is critical',
      'Copilot monetization proof — enterprise AI seat conversion rates must demonstrate productivity ROI to sustain $30/seat premium pricing at scale',
    ],
    nexus: [
      { to: 'nvda', label: 'Azure GPU fleet (Blackwell clusters)' },
      { to: 'mrvl', label: 'Maia 2 custom AI ASIC networking' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Beat',
      statusBasis: 'Revenue $92.28B vs $90.69B and non-GAAP EPS $4.89 vs $4.73 (LSEG, via CNBC).',
      guidance: 'FQ2 revenue of $96.0B-$97.1B (+18%-19%), Azure growth of 49%-50% in constant currency and capex above $50B.',
      breakdown: [
        'Agents and Infra revenue $76.8B, +25%; Devices and Consumer $15.5B, -3% (new segments)',
        'Azure +48% to $33.17B; Microsoft Cloud $63.9B, +30%',
        'Commercial RPO $677B, +73%; operating income $45.9B, +21%',
        'Capex $45.2B incl. finance leases, about 3/4 short-lived CPUs and GPUs; third-party capacity delayed',
      ],
      sources: [
        { label: 'Microsoft FQ1 2027 release', url: 'https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/', date: '2026-10-28' },
        { label: 'Microsoft FQ1 2027 8-K Ex. 99.1', url: 'https://www.sec.gov/Archives/edgar/data/0000789019/000119312526436122/msft-ex99_1.htm', date: '2026-10-28' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/amp/2026/10/28/microsoft-msft-q1-earnings-report-2027.html', date: '2026-10-28' },
        { label: 'Motley Fool FQ1 call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/29/microsoft-msft-q1-2027-earnings-call-transcript/', date: '2026-10-29' },
        { label: 'Singju Post FQ1 call transcript', url: 'https://singjupost.com/transcript-microsoft-q1-2027-earnings-call/', date: '2026-10-29' },
        { label: 'Wall Street Horizon calendar (inferred date)', url: 'https://www.wallstreethorizon.com/microsoft-earnings-calendar', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://www.microsoft.com/en-us/investor',
      reports: [{ label: 'Earnings Releases', href: 'https://www.microsoft.com/en-us/investor/earnings/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$390–$415 — OpenAI competitive concern headline or Azure growth deceleration fear creating entry; core position should be held through volatility',
      leapStructure: 'Jan 2027 $430C or Jan 2028 $460C — 12-24 month duration; Copilot enterprise monetization is the delta driver; size 2%, delta 0.55+',
      catalyst: 'Next quarterly earnings — Azure AI revenue growth rate vs. 42% guide; Copilot paid seat additions; GitHub Copilot ARR; capital expenditure vs. return on AI investment',
      thesis: 'Microsoft is the AI distribution layer for enterprise — Azure OpenAI is the default on-ramp and Copilot is monetizing the 400M+ seat installed base. The moat compounds with every enterprise AI deployment. This is a core, long-duration position in the AI infrastructure stack.',
    },
  },

  {
    id: 'googl',
    name: 'Alphabet',
    ticker: 'GOOGL',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — GCP + TPU Custom Silicon + Search AI',
    thematic:
      'Alphabet\'s AI story is the most vertically integrated in the hyperscaler peer group: Google designs its own TPU AI accelerators (fabricated at TSMC on 3nm), operates Google Cloud as a third-party AI platform, and is embedding AI into Search, YouTube, and Workspace simultaneously. The TPU v5p competitive advantage in cost-per-FLOP for Google\'s own training workloads means Alphabet is the hyperscaler least exposed to NVIDIA supply constraints — it can self-provision AI compute. In 2026, the critical question is whether Google Cloud\'s AI platform can capture enterprise market share from Azure at a pace that justifies the $75B+ annual capex program funding the buildout.',
    constraints: [
      'Search monetization risk — AI Overviews (AI-generated search summaries) may reduce click-through to paid search results; advertiser ROI must be preserved',
      'GCP market share gap — AWS and Azure hold combined 55%+ cloud market share; Google Cloud\'s AI differentiation must overcome incumbent advantages',
      'Antitrust exposure — DOJ search distribution remedy (Chrome/Android) creates regulatory uncertainty around core Search revenue stream',
    ],
    nexus: [
      { to: 'tsm',  label: 'TPU v5/v6 foundry on 3nm' },
      { to: 'mrvl', label: 'TPU networking ASIC partner' },
      { to: 'stx',  label: 'nearline HDD for AI training datasets' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-28',
      status: 'Miss',
      statusBasis: 'Revenue $127.58B vs $128.22B and adjusted EPS $2.67 vs $3.02 (LSEG, table via StockTitan; CNBC confirms both were below LSEG). GAAP EPS was $2.12.',
      guidance: 'Full-year 2026 capex held at $195B-$205B and expected to increase significantly in 2027, with details on the Q4 call; Alphabet gives no revenue guidance in the release.',
      breakdown: [
        'Google Cloud revenue $30.7B, +103%, with TPU system sales a meaningful contributor',
        'Cloud operating margin 36.2% vs 23.7%; Cloud backlog about $561B',
        'Search $63.4B, +12%; YouTube ads $11.2B; operating margin 31.8%',
        'Q3 capex $51.4B vs $24.0B; FCF -$9.1B; $8.7B equity loss cut EPS by $0.55',
      ],
      sources: [
        { label: 'Alphabet Q3 2026 release (8-K Ex. 99.1)', url: 'https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000080/googexhibit991q32026.htm', date: '2026-10-28' },
        { label: 'StockTitan (LSEG table)', url: 'https://www.stocktitan.net/articles/alphabet-q3-2026-earnings-google-cloud-doubles-search-slows', date: '2026-10-28' },
        { label: 'CNBC analyst reaction', url: 'https://www.cnbc.com/2026/10/29/alphabet-q3-earnings-analyst-reaction.html', date: '2026-10-29' },
        { label: 'Motley Fool Q3 call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/10/29/alphabet-googl-q3-2026-earnings-call-transcript/', date: '2026-10-29' },
        { label: 'Yahoo Finance call highlights (backlog)', url: 'https://finance.yahoo.com/markets/stocks/articles/alphabet-q3-earnings-call-highlights-050416594.html', date: '2026-10-29' },
        { label: 'Fortune (S&P Visible Alpha consensus)', url: 'https://fortune.com/2026/10/28/alphabet-google-stock-drops-cloud-revenue-doubles-free-cash-flow-negative/', date: '2026-10-28' },
      ],
    },
    ir: {
      base: 'https://abc.xyz/investor',
      reports: [{ label: 'Earnings Releases', href: 'https://abc.xyz/investor/other/earnings-materials/' }],
    },
    tacticalEntry: {
      idealEntry: '$160–$175 — antitrust headline or Search AI Overview monetization concern creating fear-based entry; GCP AI revenue trajectory is the real thesis',
      leapStructure: 'Jan 2027 $185C — 12-month duration; GCP AI market share inflection + TPU v6 cost advantage are the re-rate catalysts; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — Google Cloud revenue vs. 35% guide; TPU v6 internal compute cost savings; Search ad revenue sustainability with AI Overviews; DOJ remedy update',
      thesis: 'Alphabet is the most vertically integrated hyperscaler — it designs TPUs, runs GCP, and operates Search simultaneously. The TPU advantage in cost-per-FLOP means GOOGL is least exposed to NVIDIA supply constraints. GCP AI acceleration is the underappreciated catalyst at current valuations.',
    },
  },

  {
    id: 'amzn',
    name: 'Amazon',
    ticker: 'AMZN',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~8%' },
    stackPosition: 'Hyperscaler — AWS AI Cloud + Trainium / Inferentia Custom Silicon',
    thematic:
      'Amazon is the largest cloud infrastructure provider on earth, and AWS is investing aggressively to maintain that lead in the AI era through a combination of NVIDIA GPU procurement (the largest external buyer), proprietary AI silicon (Trainium2 for training, Inferentia3 for inference), and the Amazon Bedrock managed AI API that gives enterprise developers access to leading foundation models. The Trainium/Inferentia program — designed with Marvell networking ASICs — is the most credible hyperscaler in-house AI silicon alternative to NVIDIA in production at scale. In 2026, AWS AI revenue is growing faster than overall AWS, and the margin structure is improving as internal Trainium utilization reduces the marginal cost of training compute.',
    constraints: [
      'NVIDIA GPU allocation — AWS is dependent on Blackwell GPU supply for external GPU cloud offerings; any TSMC/Hynix constraint flows directly to AWS capacity',
      'Trainium2 scale-up risk — custom silicon qualification and software ecosystem for Trainium requires developer migration from CUDA, which is non-trivial',
      'Bedrock competitive pressure — Microsoft Azure OpenAI and Google Vertex AI are competing on model variety, pricing, and enterprise integration',
    ],
    nexus: [
      { to: 'nvda', label: 'AWS GPU fleet (Blackwell instances)' },
      { to: 'mrvl', label: 'Trainium2 networking ASIC' },
      { to: 'stx',  label: 'S3 exabyte storage infrastructure' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-29',
      status: 'Miss',
      statusBasis: 'Revenue $201.94B vs $202.31B and EPS $1.89 vs $1.96 (LSEG, via CNBC).',
      guidance: 'Q4 2026 net sales of $240.0B-$247.0B and operating income of $28.5B-$33.5B; 2026 cash capex of about $220B, with management expecting to spend meaningfully more in 2027.',
      breakdown: [
        'AWS revenue $46.0B, +39%, operating income $17.8B; AWS growth projected above 40% in 2027 and 2028',
        'Operating income $28.1B on a record 13.9% margin; net sales $201.9B, +12%',
        'Advertising $19.6B, +11%, below the $20.82B consensus; online stores $68.5B, +2%',
        'Q3 capex $77.3B gross; TTM FCF -$42.4B; Bedrock token volume nearly 17x YoY',
      ],
      sources: [
        { label: 'Amazon Q3 2026 release (8-K Ex. 99.1)', url: 'https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000038/amzn-20260930xex991.htm', date: '2026-10-29' },
        { label: 'CNBC (LSEG and StreetAccount consensus)', url: 'https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html', date: '2026-10-29' },
      ],
    },
    ir: {
      base: 'https://ir.aboutamazon.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.aboutamazon.com/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$195–$210 — retail margin concern or AWS growth rate noise creating entry; AWS AI acceleration is structurally intact and decoupled from retail volatility',
      leapStructure: 'Jan 2027 $220C or Jan 2028 $240C — 18-24 month duration; AWS AI capacity build-out and Trainium2 margin improvement are catalysts; size 2%, delta 0.60',
      catalyst: 'Next quarterly earnings — AWS revenue vs. 25%+ guide; Trainium2 compute utilization reducing GPU COGS; Bedrock enterprise adoption; retail AI efficiency gains',
      thesis: 'AWS is the largest AI cloud platform on earth and Trainium2 is reducing the marginal cost of training compute — the margin expansion story is just beginning. Amazon\'s retail AI efficiency gains provide a second lever. A core megacap AI infrastructure position.',
    },
  },

  {
    id: 'meta',
    name: 'Meta Platforms',
    ticker: 'META',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~7%' },
    stackPosition: 'Social AI — MTIA Custom Silicon + Llama Open Source',
    thematic:
      'Meta is the hyperscaler that bet entirely on open-source AI — Llama 4 is the most capable openly available large language model and serves as the foundation for Meta\'s AI assistant across Instagram, WhatsApp, and Facebook, while simultaneously establishing Meta as the canonical AI infrastructure partner for enterprises that want to avoid vendor lock-in. The MTIA (Meta Training and Inference Accelerator) custom chip program, designed with TSMC and Broadcom, is driving meaningful cost reduction in Meta\'s own AI inference stack, reducing its marginal cost per interaction as engagement compounds. In 2026, Meta\'s $65B capex program is the most aggressive in its history, and the return on that investment is already visible in engagement metrics and ad pricing power driven by AI recommendation systems.',
    constraints: [
      'Regulatory risk — EU AI Act and US AI regulation could constrain Llama open-source distribution or impose compliance costs on AI-powered advertising',
      'Reality Labs cash drain — the metaverse AR/VR division continues to generate $5B+ annual operating losses, creating shareholder scrutiny on capital allocation',
      'Ad market saturation — AI-driven ad targeting improvements face diminishing returns as privacy regulations (ATT, GDPR) limit signal availability',
    ],
    nexus: [
      { to: 'nvda', label: 'GPU fleet for Llama training' },
      { to: 'tsm',  label: 'MTIA custom ASIC foundry' },
      { to: 'avgo', label: 'MTIA ASIC design partnership' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-21',
      status: 'Meet',
      statusBasis: 'Mixed on LSEG: revenue $64.60B beat $63.4B, but GAAP EPS $3.83 missed $5.46 (via Variety/Yahoo). The $3.83 includes a $9.89B legal charge; EPS excluding it was $7.40.',
      guidance: 'Q4 2026 revenue of $73B-$76B, full-year 2026 total expenses of $175B-$179B including the legal charge, and full-year 2026 capex of $135B-$145B (narrowed from $130B-$145B).',
      breakdown: [
        'Revenue $64.60B, +26%; ad impressions +10%, average price per ad +14%',
        'Operating margin 20% vs 40% on a $9.89B legal charge; ex-charge operating income $22.88B',
        'Capex $34.91B including finance leases; FCF -$2.12B vs +$10.63B a year earlier',
        'Family of Apps operating income $17.12B; Reality Labs loss $4.13B on $443M revenue',
      ],
      sources: [
        { label: 'Meta Q3 2026 release', url: 'https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx', date: '2026-10-21' },
        { label: 'Variety via Yahoo (LSEG consensus)', url: 'https://malaysia.news.yahoo.com/meta-almost-10-billion-legal-201330913.html', date: '2026-10-21' },
        { label: 'CNBC live updates', url: 'https://www.cnbc.com/2026/10/21/meta-earnings-q3-2026-live-updates.html', date: '2026-10-21' },
        { label: 'Investing.com call transcript ($3.57 estimate)', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-meta-beats-q3-2026-estimates-as-ai-push-lifts-shares-93CH-4964260', date: '2026-10-21' },
        { label: 'INDmoney preview (Bloomberg and FactSet estimates)', url: 'https://www.indmoney.com/blog/us-stocks/meta-stock-q3-earnings-preview', date: '2026-10-20' },
        { label: 'days.to calendar estimate', url: 'https://days.to/meta-earnings/q4-2026', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://investor.fb.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.fb.com/investor-news/press-release-details/2025/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$560–$590 — Reality Labs quarterly loss headline or EU AI regulation concern creating entry; ad revenue and MTIA efficiency gains are the structural story',
      leapStructure: 'Jan 2027 $620C — 12-month duration; MTIA 2 deployment reducing AI inference costs 40% is the margin expansion driver; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — advertising revenue growth vs. AI recommendation improvements; MTIA 2 inference cost reduction; Reality Labs operating loss trajectory; Llama enterprise adoption',
      thesis: 'Meta\'s $68B capex program is the most aggressive AI infrastructure build in its history and the returns are already visible in ad pricing and engagement metrics. MTIA custom silicon is reducing inference costs — this compound efficiency will drive margin expansion through 2027. Llama open-source moat is free enterprise distribution.',
    },
  },

  {
    id: 'pltr',
    name: 'Palantir',
    ticker: 'PLTR',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~2%' },
    stackPosition: 'AI Platform — Government & Enterprise Decision Intelligence',
    thematic:
      'Palantir is the AI platform company with the most defensible government moat — its Gotham and Foundry platforms are embedded in US defense, intelligence, and civilian agency infrastructure, and the AIP (AI Platform) product is now the fastest-growing enterprise AI deployment platform in the market. The US military\'s adoption of Palantir\'s Maven Smart System for AI-enabled targeting and intelligence analysis creates a durable, classified revenue stream that no commercial competitor can access. In 2026, Palantir\'s AIP bootcamp-to-enterprise-contract conversion model is generating unprecedented sales velocity, and the Rule of 40 score is inflecting as the company\'s revenue growth accelerates while operating margins expand simultaneously.',
    constraints: [
      'Single-digit penetration of enterprise TAM — AIP adoption is accelerating but enterprise sales cycles remain 6-12 months; conversion rate from bootcamp to contract must scale',
      'Government budget dependency — US federal government budget cycles and continuing resolutions create lumpiness in contract timing and revenue recognition',
      'Valuation multiple fragility — PLTR trades at premium AI-software multiples; any miss vs. AIP growth expectations creates sharp multiple compression',
    ],
    nexus: [
      { to: 'msft', label: 'Azure cloud deployment platform' },
      { to: 'amzn', label: 'AWS GovCloud government workloads' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-02',
      status: 'Beat',
      statusBasis: 'Revenue $2.31B vs $2.18B and adjusted EPS $0.44 vs $0.41 (LSEG, via CNBC).',
      guidance: 'Q4 2026 revenue of $2.649B-$2.653B and adjusted operating income of $1.640B-$1.644B; FY2026 revenue raised to $8.530B-$8.534B, U.S. commercial revenue above $3.559B, and adjusted FCF of $4.8B-$5.0B.',
      breakdown: [
        'Revenue $2.313B, +96%; U.S. revenue $1.937B, +119%',
        'U.S. commercial $984M, +148%, passing U.S. government at $953M, +96%',
        'Adjusted operating margin 62%; GAAP margin 47%; Rule of 40 score 158%',
        'Adjusted FCF $1.216B, 53% margin; TCV $2.918B, +6%; 212 deals of at least $1M',
      ],
      sources: [
        { label: 'Palantir Q3 2026 release (8-K Ex. 99.1)', url: 'https://www.sec.gov/Archives/edgar/data/0001321655/000132165526000045/a2026q3ex991pressrelease.htm', date: '2026-11-02' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/11/02/palantir-pltr-earnings-q3-2026.html', date: '2026-11-02' },
        { label: 'Fortune Q4 2025 report (cadence)', url: 'https://fortune.com/2026/02/02/palantir-record-earnings-stock-up-8-percent-alex-karp-n-of-1/', date: '2026-02-02' },
      ],
    },
    ir: {
      base: 'https://investors.palantir.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investors.palantir.com/news-details/2025/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$72–$82 — any AIP growth rate deceleration concern or government budget continuing resolution creating a pullback; Rule of 40 > 65 is the hold signal',
      leapStructure: 'Jan 2027 $90C — 12-month duration; AIP enterprise deal count acceleration is the primary catalyst; size 1%, delta 0.50 (premium valuation warrants smaller size)',
      catalyst: 'Next quarterly earnings — US commercial revenue vs. 40% growth guide; AIP active enterprise deal count; bootcamp-to-contract conversion rate; Rule of 40 score',
      thesis: 'Palantir has the most defensible government AI moat in the US market — classified contracts cannot be replicated by any commercial competitor. AIP bootcamp velocity is extraordinary and the Rule of 40 at 68 proves the business model is inflecting. Valuation is elevated but justified by the growth rate and moat quality.',
    },
  },

  {
    id: 'orcl',
    name: 'Oracle',
    ticker: 'ORCL',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~3%' },
    stackPosition: 'Cloud Infrastructure (OCI) + AI Database',
    thematic:
      'Oracle has executed one of the most remarkable cloud pivots in enterprise software history — OCI (Oracle Cloud Infrastructure) GPU clusters are fully booked through 2027, and Autonomous Database on OCI is pulling enterprise workloads that have been on-premise Oracle for decades into the cloud. The database moat is the key: Oracle Database is mission-critical for thousands of enterprises that cannot migrate away without years of risk and cost, and OCI\'s multi-cloud interconnect agreements with Microsoft, Google, and Amazon give Oracle a unique hybrid positioning that competes with rather than simply loses to hyperscalers. In 2026, OCI\'s GPU cluster revenue is the most visible proof that enterprise AI infrastructure is a three-cloud market, not a two-horse race.',
    constraints: [
      'OCI GPU capacity — Oracle\'s GPU cluster buildout is supply-constrained by NVIDIA allocation; demand materially exceeds available capacity',
      'Database migration attrition — PostgreSQL and Snowflake are genuine competitive threats for net-new analytics workloads, though legacy Oracle ERP is sticky',
      'Autonomous Database proof — AI-driven self-tuning and self-patching features must demonstrate TCO advantage vs AWS RDS to win migration deals',
    ],
    nexus: [
      { to: 'nvda', label: 'OCI GPU cluster fleet (Blackwell)' },
      { to: 'amzn', label: 'OCI-AWS multi-cloud interconnect' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-08-31',
      reportedOn: '2026-09-10',
      status: 'Beat',
      statusBasis: 'Revenue $19.35B vs $19.14B and adjusted EPS $1.92 vs $1.74 (LSEG, via CNBC).',
      guidance: 'FQ2 revenue growth of 30%-34%, cloud growth of 65%-71% and non-GAAP EPS of $1.85-$1.93; FY2027 revenue of at least $90B, non-GAAP EPS of $8.10, and capex of $90B-$95B with net cash capex of no more than $70B.',
      breakdown: [
        'Cloud infrastructure revenue $7.4B, +121%; total cloud $11.6B, +62%',
        'RPO $664B, up $209B YoY, ahead of the $630.6B StreetAccount consensus',
        'Cloud applications $4.2B, +10%; software $5.5B, -3%',
        'Q1 capex about $28B, or $18B net of customer prepayments',
      ],
      sources: [
        { label: 'Oracle FQ1 2027 release (403 on fetch; seen in search results)', url: 'https://www.oracle.com/news/announcement/q1fy27-earnings-release-2026-09-10/', date: '2026-09-10' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/09/10/oracle-orcl-q1-earnings-report-2027.html', date: '2026-09-10' },
        { label: 'Motley Fool FQ1 call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/09/11/oracle-orcl-q1-2027-earnings-call-transcript/', date: '2026-09-11' },
        { label: 'StorageNewsletter (reproduces release figures)', url: 'https://www.storagenewsletter.com/2026/09/23/oracle-fiscal-1q27-financial-results/', date: '2026-09-23' },
        { label: 'days.to calendar estimate (cadence; unconfirmed)', url: 'https://days.to/oracle-earnings', date: '2026-11-05' },
      ],
    },
    ir: {
      base: 'https://investor.oracle.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.oracle.com/investor-news/press-releases' }],
    },
    tacticalEntry: {
      idealEntry: '$145–$160 — database migration competition concern or OCI GPU capacity constraint headline creating entry; backlog sold-out through 2027 is the anchor',
      leapStructure: 'Jan 2027 $170C — 12-month duration; OCI GPU cluster capacity expansion and Autonomous Database ARR growth are the catalysts; size 1%, delta 0.55',
      catalyst: 'June 10 FY2026 Q4 earnings — OCI revenue vs. $25B guide; GPU cluster booking pipeline; Autonomous Database cloud migration customer count; MSFT/GOOGL/AMZN interconnect revenue',
      thesis: 'Oracle executed a cloud pivot that most investors missed until it was already priced. OCI GPU clusters are sold out through 2027 — demand exceeds capacity. The database moat provides the sticky enterprise base while OCI becomes a credible third hyperscaler alternative.',
    },
  },

  {
    id: 'snow',
    name: 'Snowflake',
    ticker: 'SNOW',
    etf: 'AIS',
    category: CATEGORIES.SERVICES,
    weight: { index: 'AIS', value: '~1.5%' },
    stackPosition: 'AI Data Cloud — Data Lakehouse & Cortex AI',
    thematic:
      'Snowflake is the neutral data layer of the AI enterprise stack — enterprises store their proprietary training data and inference context in Snowflake, then call foundation models from OpenAI, Anthropic, or Mistral through Snowflake Cortex AI without the data leaving the governance perimeter. This data gravity positioning makes Snowflake a platform play rather than a commodity database, as the value compounds with the volume of enterprise data and the number of AI models consuming it. In 2026, the strategic risk is Databricks and Microsoft Fabric competing aggressively on the lakehouse architecture, while the opportunity is that every enterprise AI initiative Snowflake enables generates incremental data compute consumption revenue.',
    constraints: [
      'Consumption model volatility — revenue depends on customer query activity, not seats; macro slowdown or query optimization reduces revenue without customer churn',
      'Databricks competition — Databricks\' open-source Delta Lake and Unity Catalog are genuine architectural alternatives that reduce Snowflake switching cost advantage',
      'Microsoft Fabric integration — MSFT\'s native data layer embedded in Azure and M365 creates a bundled competitor that Snowflake must out-feature to retain enterprise data',
    ],
    nexus: [
      { to: 'msft', label: 'Azure-native data integration (Fabric)' },
      { to: 'amzn', label: 'AWS S3 data lake foundation' },
    ],
    earnings: {
      period: 'FQ2 2027',
      periodEnd: '2026-07-31',
      reportedOn: '2026-09-02',
      status: 'Beat',
      statusBasis: 'Revenue $1.55B vs $1.48B and adjusted EPS $0.62 vs $0.45 (LSEG, via CNBC).',
      guidance: 'FQ3 product revenue of $1.588B-$1.593B (+37%-38%) with 15.5% non-GAAP operating margin; FY2027 product revenue raised to $6.07B (+36%) with 14.5% non-GAAP operating margin.',
      breakdown: [
        'Product revenue $1.49B, +37%; total revenue $1.55B, +35%',
        'Net revenue retention 126%; RPO $9.00B, +30%; 828 customers above $1M',
        'Non-GAAP operating margin 15.3%; adjusted FCF margin 6.0%',
        'AI driver: CoCo coding agent passed 9,100 accounts, adding over 2,000 in the quarter',
      ],
      sources: [
        { label: 'Snowflake FQ2 2027 release (Yahoo syndication)', url: 'https://finance.yahoo.com/markets/stocks/articles/snowflake-reports-financial-results-second-200500902.html', date: '2026-09-02' },
        { label: 'CNBC (LSEG consensus)', url: 'https://www.cnbc.com/2026/09/02/snowflake-snow-q2-earnings-report-2027.html', date: '2026-09-02' },
        { label: 'Snowflake FQ3 date announcement', url: 'https://www.snowflake.com/en/news/press-releases/fy27-q3-earnings-date-announcement/', date: '2026-11-02' },
      ],
    },
    ir: {
      base: 'https://investors.snowflake.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.snowflake.com/news-releases' }],
    },
    tacticalEntry: {
      idealEntry: '$155–$175 — NRR deceleration or Databricks competitive concern creating a pullback; Cortex AI query growth acceleration is the re-rate signal to watch',
      leapStructure: 'Jan 2027 $190C — 12-month duration; Cortex AI consumption ramp above bull-case is the upside catalyst; size 0.75%, delta 0.45 (consumption model uncertainty warrants smaller size)',
      catalyst: 'Next quarterly earnings — product revenue vs. 25% growth guide; Cortex AI managed LLM query growth; NRR trend vs. 126% baseline; operating margin path to profitability',
      thesis: 'Snowflake is the neutral data gravity platform for enterprise AI — models consume data from Snowflake without data leaving the governance perimeter. Every new AI initiative compounds the data stored and queried. The Cortex AI managed LLM API is the most underappreciated monetization layer.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENERGY INFRASTRUCTURE (ENFR)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'enb',
    name: 'Enbridge',
    ticker: 'ENB',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~10%' },
    stackPosition: 'Midstream — North American Oil & Gas Transmission',
    thematic:
      'Enbridge operates the largest energy transmission network in North America — its liquids pipelines move ~30% of North American crude oil and its gas transmission system moves 20% of North American gas consumption, providing unparalleled scale in a capital-intensive, regulated return infrastructure business. The East Ohio Gas acquisition added 1.2M utility customers, making Enbridge North America\'s largest gas utility and increasing the percentage of revenue protected under cost-of-service regulatory frameworks. In 2026, Enbridge\'s AI data center power theme is real but diffuse — Enbridge gas flows ultimately fuel every North American data center, but the direct AI-demand signal is not yet separable from broader power sector growth.',
    constraints: [
      'FERC and CER regulatory exposure — multi-decade pipeline assets require frequent rate case renewals that compress return on invested capital',
      'Canadian oil sands throughput — Mainline crude pipeline volumes tied to upstream producer economics that are sensitive to WTI price',
      'Pipeline capital intensity — growth capex for regulated return assets requires regulatory approval with 3-5 year lead times from approval to revenue',
    ],
    nexus: [
      { to: 'gev', label: 'gas supply for hyperscaler turbine plants' },
      { to: 'wmb', label: 'US gas transmission network interconnect' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-06',
      status: 'Meet',
      statusBasis: 'Adjusted EPS C$0.49 matched the IBES estimate. Revenue is not used because reported figures conflict across sources; a Zacks USD-basis comparison ($0.39 vs $0.36) shows a small beat.',
      guidance: 'Enbridge reaffirmed 2026 guidance of adjusted EBITDA of C$20.2 billion to C$20.8 billion (expects the midpoint) and DCF per share of C$5.70 to C$6.10, with about 5% medium-term annual growth.',
      breakdown: [
        'Adjusted EBITDA C$4.43B vs C$4.27B a year ago; DCF C$2.69B vs C$2.57B',
        'Adjusted EPS C$0.49 vs C$0.46; GAAP EPS C$0.59 vs C$0.30',
        'About C$3B of gas transmission projects placed into service; secured backlog about C$38B',
        'Agreed US$2.6B purchase of Tallgrass crude assets (incl. 75% of Pony Express); CEO cites AI infrastructure as an energy demand driver',
      ],
      sources: [
        { label: 'Enbridge Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000895728/000119312526450711/enb-ex99_1.htm', date: '2026-11-06' },
        { label: 'Q3 2026 call transcript (Motley Fool)', url: 'https://www.fool.com/earnings/call-transcripts/2026/11/06/enbridge-enb-q3-2026-earnings-call-transcript/', date: '2026-11-06' },
        { label: 'Adjusted EPS vs IBES estimate', url: 'https://rallies.ai/news/enbridge-q3-adjusted-eps-cad-049-matching-estimate-f00e5f7f668714db', date: '2026-11-06' },
        { label: 'Zacks Q3 actual vs estimate', url: 'https://finance.yahoo.com/markets/stocks/articles/enbridge-enb-q3-earnings-revenues-125502346.html', date: '2026-11-06' },
      ],
    },
    ir: {
      base: 'https://www.enbridge.com/investment-center',
      reports: [{ label: 'Quarterly Results', href: 'https://www.enbridge.com/investment-center/financial-information/quarterly-reports' }],
    },
    tacticalEntry: {
      idealEntry: '$42–$46 CAD ($30–$34 USD) — interest rate concern or USD/CAD move creating entry; 6.5%+ dividend yield provides significant income cushion while waiting for re-rate',
      leapStructure: 'No meaningful US LEAPs on ENB — long-only equity for dividend yield and capital appreciation; size 1.5% as an income + AI energy infrastructure position',
      catalyst: 'Next quarterly earnings — DCF per share vs. guidance; East Ohio Gas integration synergy update; regulated return asset base growth; AI data center gas demand visibility',
      thesis: 'Enbridge moves 30% of North American crude oil and 20% of natural gas — every AI data center that burns gas flows through ENB infrastructure. The 6.5% dividend yield is the income floor. Regulated return rate base growth provides a durable, inflation-linked return profile.',
    },
  },

  {
    id: 'et',
    name: 'Energy Transfer',
    ticker: 'ET',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~5%' },
    stackPosition: 'Midstream — Permian NGL, Crude & Natural Gas',
    thematic:
      'Energy Transfer is the largest midstream MLP in the US by asset footprint, with crude oil, natural gas, and NGL gathering, processing, and transportation assets spanning the Permian Basin, Mid-Continent, and Gulf Coast — the three regions that will supply the fuel for the US AI power buildout. ET\'s Lake Charles LNG terminal, if ultimately developed, would represent a strategic export outlet for Permian gas that is growing faster than domestic demand can absorb. In 2026, ET\'s leverage to AI power demand is real but indirect — every incremental Bcf/d of gas demand from data center turbines flows through ET infrastructure before it reaches the generator, but regulatory complexity and balance sheet constraints limit direct AI-narrative premium.',
    constraints: [
      'Balance sheet leverage — ET carries ~4.5x debt/EBITDA, limiting financial flexibility and creating vulnerability to interest rate and commodity cycles',
      'LNG project uncertainty — Lake Charles LNG has been in development for a decade; continued delays dilute management credibility on growth capital allocation',
      'Permian gas takeaway competition — multiple competing pipeline expansions reduce ET\'s pricing power on new gathering and transportation contracts',
    ],
    nexus: [
      { to: 'gev',  label: 'feedgas supply for gas turbine power plants' },
      { to: 'trgp', label: 'Permian Basin gathering complement' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-03',
      status: 'Meet',
      statusBasis: 'Mixed: EPS $0.33 vs $0.38 consensus (miss) and revenue $37.10B vs $30.97B consensus (beat), per Investing.com. Other sources put EPS at $0.40-0.41; still a miss.',
      guidance: 'Energy Transfer raised 2026 adjusted EBITDA guidance to $19.7 billion to $19.9 billion from $18.8 billion to $19.1 billion, with growth capital of $5.4 billion to $5.6 billion.',
      breakdown: [
        'Adjusted EBITDA $5.03B, up 31% from $3.84B',
        'DCF attributable to partners, as adjusted, $2.52B, up 33%',
        '2027 growth capital about $7B; South Mississippi Pipeline FID about $1.6B, 1.2 Bcf/d',
        'Call: gas supply for Crusoe\'s 900 MW Abilene expansion; 250,000 MMBtu/d hyperscaler deal',
      ],
      sources: [
        { label: 'Energy Transfer Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001276187/000127618726000066/ex991eterq32026.htm', date: '2026-11-03' },
        { label: 'Investing.com Q3 call transcript', url: 'https://ph.investing.com/news/stock-market-news/earnings-call-transcript-energy-transfer-tops-revenue-estimates-in-q3-2026-93CH-2671089', date: '2026-11-03' },
        { label: 'ET Q4 2025 timing notice (cadence)', url: 'https://www.businesswire.com/news/home/20260113099435/en/Energy-Transfer-Announces-Fourth-Quarter-and-Full-Year-2025-Earnings-Release-and-Earnings-Call-Timing', date: '2026-01-13' },
      ],
    },
    ir: {
      base: 'https://ir.energytransfer.com',
      reports: [{ label: 'Quarterly Results', href: 'https://ir.energytransfer.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$16–$19 unit price — commodity price concern or WTI below $60 creating broad MLP weakness; 7.5%+ distribution yield is the income floor',
      leapStructure: 'No liquid LEAPS on ET — long-only MLP units; size 1% as a yield + Permian AI gas exposure play; hold for distribution + unit appreciation',
      catalyst: 'Next quarterly earnings — Permian gathered volumes growth rate; natural gas pipeline AI data center feedgas volumes; LNG export project FID update; distribution coverage ratio',
      thesis: 'Energy Transfer connects Permian gas production to the data center power plants that hyperscalers are building. The 7.5%+ distribution yield provides income while AI power demand builds. Leverage is the primary risk — monitor 4.5x debt/EBITDA carefully.',
    },
  },

  {
    id: 'epd',
    name: 'Enterprise Products Partners',
    ticker: 'EPD',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~8%' },
    stackPosition: 'Midstream — NGL Fractionation & Gulf Coast Export',
    thematic:
      'Enterprise Products Partners is the highest-quality midstream partnership in the US — its A-rated balance sheet, 26-year distribution growth streak, and dominant Mont Belvieu NGL fractionation position make it the "Treasury Bond with Upside" of the ENFR basket. EPD\'s integrated NGL value chain from Permian gathering to Gulf Coast fractionation to export terminal provides unparalleled logistics optionality and pricing power at every step of the NGL supply chain. In 2026, EPD\'s Mont Belvieu fractionation trains are fully subscribed through 2028, and the company is investing in new capacity that will commission into a structurally tighter NGL market driven by LNG feedstock demand and AI power-sector gas consumption.',
    constraints: [
      'NGL pricing sensitivity — propane and butane export pricing tied to global LPG markets; strong USD can compress export margins',
      'Partnership tax structure — MLP K-1 structure limits institutional ownership, creating a structural valuation discount vs C-corp peers',
      'Growth capex pacing — EPD\'s discipline in only sanctioning projects with >$5B EBITDA/year contributes to steady but incremental growth',
    ],
    nexus: [
      { to: 'trgp', label: 'upstream Permian NGL gathering' },
      { to: 'wmb',  label: 'gas transmission network interconnect' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-29',
      status: 'Beat',
      statusBasis: 'EPS $0.75 vs $0.73 consensus and revenue $17.95B vs $15.51B consensus, per Investing.com.',
      guidance: 'Enterprise gives no full-year earnings or EBITDA guidance; it expects 2026 growth capital of $2.9 billion to $3.4 billion net of $600 million of asset sale proceeds, plus $650 million of sustaining capital.',
      breakdown: [
        'Adjusted EBITDA $2.8B, up 16%',
        'Operational DCF $2.3B, up 27%, 1.9x distribution coverage; $1.1B retained',
        '$6.3B of growth projects under construction, operations scheduled through 2028',
        'Net leverage 2.9x per the call',
      ],
      sources: [
        { label: 'Enterprise Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001061219/000106121926000028/epd-20261029xex991q.htm', date: '2026-10-29' },
        { label: 'Investing.com Q3 results', url: 'https://www.investing.com/news/earnings/enterprise-products-beats-q3-estimates-on-record-volumes-93CH-4982481', date: '2026-10-29' },
        { label: 'Investing.com Q3 call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-enterprise-products-tops-q3-2026-estimates-on-revenue-93CH-4984463', date: '2026-10-29' },
        { label: 'Enterprise Q4 2025 release (cadence)', url: 'https://www.businesswire.com/news/home/20260203814850/en', date: '2026-02-03' },
      ],
    },
    ir: {
      base: 'https://www.enterpriseproducts.com/investor-relations',
      reports: [{ label: 'Quarterly Results', href: 'https://www.enterpriseproducts.com/investor-relations/financial-reports' }],
    },
    tacticalEntry: {
      idealEntry: '$28–$31 unit price — NGL pricing weakness or interest rate concern creating MLP sector dip; 7%+ distribution yield and 26-year growth streak are the anchor',
      leapStructure: 'No liquid LEAPS on EPD — long-only MLP units; size 1.5% as the highest-quality midstream income position; compound the distribution',
      catalyst: 'Next quarterly earnings — DCF per unit vs. $8B+ guide; Mont Belvieu fractionation utilization; new Train 13 fractionator commissioning; LNG feedgas volume growth',
      thesis: 'EPD is the A-rated, 26-year distribution growth midstream franchise — the safest yield in the ENFR basket. Mont Belvieu fractionation is fully subscribed through 2028. AI power demand structurally lifts long-term gas volumes through EPD\'s integrated value chain. Best risk-adjusted income in midstream.',
    },
  },

  {
    id: 'wmb',
    name: 'Williams Companies',
    ticker: 'WMB',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~6.4%' },
    stackPosition: 'Midstream — Natural Gas Transmission (Transco)',
    thematic:
      'Williams is the "Fuel Line" for the AI supercycle: the Transco pipeline moves roughly one-third of US natural gas demand and is the physical backbone serving the Mid-Atlantic data center corridor — the single densest concentration of AI compute in the world. As hyperscalers build behind-the-meter power plants fed by GE Vernova turbines, every incremental Bcf/d of gas demand flows through Williams infrastructure before it reaches the generator. In 2026, Williams is executing a $1.5B+ growth capex program to expand Transco throughput capacity, with tariff-regulated returns that provide recession-resistant cash flow while the AI power demand wave is still building.',
    constraints: [
      'FERC permitting — Transco expansion projects face 3-5 year federal permitting timelines; regulatory risk is the primary execution constraint',
      'Environmental litigation — pipeline expansions in Mid-Atlantic corridors face organized legal opposition that can delay capacity adds',
      'Right-of-way acquisition — securing land access in densely developed Mid-Atlantic states is increasingly expensive',
    ],
    nexus: [
      { to: 'gev',  label: 'gas delivery for hyperscaler turbine plants' },
      { to: 'trgp', label: 'upstream NGL gathering and processing' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-02',
      status: 'Meet',
      statusBasis: 'Mixed: adjusted EPS $0.54 in line with FactSet $0.54 and revenue $3.22B above FactSet $2.99B, per MT Newswires on MarketScreener.',
      guidance: 'Williams kept 2026 adjusted EBITDA guidance of $8.3 billion to $8.5 billion and is tracking to the upper half, with growth capex of $7.3 billion to $7.9 billion and leverage of about 3.75x at the midpoint.',
      breakdown: [
        'Adjusted EBITDA $2.04B, up 6%; adjusted EPS $0.54, up 10%',
        'AFFO $1.59B, up 10%; dividend coverage 2.42x; debt-to-EBITDA 3.80x',
        'Call cited a backlog extending well into the 2030s',
        'Socrates phase 1 in service, phase 2 due within days; five power projects, more hyperscalers ahead',
      ],
      sources: [
        { label: 'Williams Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000107263/000010726326000035/wmb_20260930xer.htm', date: '2026-11-02' },
        { label: 'MT Newswires / MarketScreener (FactSet)', url: 'https://www.marketscreener.com/news/earnings-flash-wmb-the-williams-companies-inc-reports-q3-revenue-3-22b-vs-factset-est-of-2-9-ce785fd9da8bf425', date: '2026-11-02' },
        { label: 'Investing.com Q3 call transcript', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-williams-posts-record-q3-2026-results-shares-rise-425-93CH-4995847', date: '2026-11-03' },
        { label: 'Williams Q4 2025 release (cadence)', url: 'https://www.businesswire.com/news/home/20260210465120/en/', date: '2026-02-10' },
      ],
    },
    ir: {
      base: 'https://investor.williams.com',
      reports: [{ label: 'Quarterly Earnings', href: 'https://investor.williams.com/financial-information/quarterly-results/default.aspx' }],
    },
    tacticalEntry: {
      idealEntry: '$50–$56 — FERC permitting delay headline or rate case uncertainty creating entry; Transco corridor AI data center demand signal is the re-rate thesis',
      leapStructure: 'Jan 2027 $58C — 12-month duration; Southeast Supply Enhancement commissioning + AI corridor volume data are the catalysts; size 1%, delta 0.55',
      catalyst: 'Next quarterly earnings — Transco AI data center corridor volume growth (Mid-Atlantic segment); Southeast Supply Enhancement on-schedule update; FERC rate case settlement',
      thesis: 'Williams\' Transco is the gas artery for the most AI-dense data center corridor in the world — Northern Virginia and the Mid-Atlantic. Every Bcf/d of data center gas demand is tariff-regulated return. The AI power demand tailwind is visible in volumes and not yet priced into the multiple.',
    },
  },

  {
    id: 'trgp',
    name: 'Targa Resources',
    ticker: 'TRGP',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~4.2%' },
    stackPosition: 'Midstream — NGL Gathering, Processing & Fractionation',
    thematic:
      'Targa Resources sits at the upstream end of the natural gas value chain: its gathering and processing systems in the Permian Basin capture the raw gas and NGLs that eventually flow downstream to power the turbines running AI data centers. As AI-driven power demand structurally lifts US gas consumption, Targa\'s throughput volumes grow with the underlying commodity — providing volume-leveraged upside via fee-based contracts without direct commodity price exposure. Targa\'s Delaware Basin expansion program and Grand Prix NGL pipeline position it as the critical upstream link connecting Permian production growth to the national gas grid that feeds GE Vernova turbines and Williams Transco.',
    constraints: [
      'Permian gas flaring regulations — Texas RRC flaring permit tightening accelerates volume growth but adds regulatory risk',
      'NGL fractionation capacity at Mont Belvieu — downstream fractionation bottlenecks can back up gathering throughput when EPD/Enterprise capacity is full',
      'Ethane rejection economics — when ethane prices fall below rejection thresholds, producers reject ethane into the gas stream, reducing NGL volume and processing margin',
    ],
    nexus: [
      { to: 'wmb', label: 'downstream gas transmission via Transco' },
      { to: 'gev', label: 'upstream gas supply for turbine fuel' },
      { to: 'epd', label: 'Mont Belvieu NGL fractionation' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-05',
      status: 'Beat',
      statusBasis: 'EPS $2.76 vs $2.70 estimate and revenue $5.60B vs $4.74B consensus, per Investing.com. Zacks consensus was $2.74 and $5.14B; also a beat.',
      guidance: 'Targa now expects 2026 adjusted EBITDA of at least $6.0 billion, up from $5.7 billion to $5.9 billion, with net growth capex of about $5.0 billion and net maintenance capex of about $250 million.',
      breakdown: [
        'Adjusted EBITDA $1,504M, up 18% year over year and down 6% from Q2',
        'Adjusted cash flow from operations $1.28B; consolidated debt $19.8B',
        'Yeti and Yeti II now due Q2 and Q3 2027, early; Forza, Speedway and Bull Run II under construction',
        '2027 dividend expected at $6.00, up 20%',
      ],
      sources: [
        { label: 'Targa Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001389170/000119312526448401/trgp-ex99_1.htm', date: '2026-11-05' },
        { label: 'Investing.com Q3 results', url: 'https://www.investing.com/news/earnings/targa-resources-earnings-beat-by-006-revenue-topped-estimates-5005005', date: '2026-11-05' },
        { label: 'Zacks preview via Yahoo Finance', url: 'https://finance.yahoo.com/markets/stocks/articles/targa-resources-trgp-q3-earnings-131506842.html', date: '2026-11-03' },
        { label: 'Targa Q4 2025 timing notice (cadence)', url: 'https://www.barchart.com/story/news/37071483/targa-resources-corp-announces-quarterly-dividend-and-timing-of-fourth-quarter-2025-earnings-webcast', date: '2026-01-15' },
      ],
    },
    ir: {
      base: 'https://www.targaresources.com/investors',
      reports: [{ label: 'Quarterly Earnings', href: 'https://www.targaresources.com/investors/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$170–$188 — Permian gas flaring restriction concern or NGL fractionation bottleneck news creating entry; Delaware Basin volume growth is the bull case anchor',
      leapStructure: 'Jan 2027 $195C — 12-month duration; GCX Phase 2 full utilization + Delaware Basin acreage additions are the volume catalysts; size 1%, delta 0.55',
      catalyst: 'Next quarterly earnings — Delaware Basin gathered volume growth rate; Grand Prix NGL pipeline throughput vs. capacity; adjusted EBITDA vs. raised guide; capital return program update',
      thesis: 'Targa sits at the upstream end of the AI gas supply chain — Permian gas and NGLs gather through TRGP before flowing to the turbines and LNG export terminals. Delaware Basin dedications compound volumes without requiring new producer rigs. The fee-based model provides commodity price insulation.',
    },
  },

  {
    id: 'oke',
    name: 'ONEOK',
    ticker: 'OKE',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~6%' },
    stackPosition: 'Midstream — Rocky Mountain NGL + Magellan Liquids Integration',
    thematic:
      'ONEOK\'s acquisition of Magellan Midstream transformed it from a Rocky Mountain NGL specialist into a diversified midstream C-corp with the largest refined products pipeline network in the US — a strategic combination that creates significant cross-selling and optimization opportunities across the combined asset base. The Williston Basin (Bakken) NGL gathering system is one of the highest-growth gathering regions in the US, as producer efficiency gains in North Dakota continue to grow associated gas volumes even without rig count additions. In 2026, the Magellan integration synergies are tracking above plan, and incremental LNG export feedgas volumes from the Gulf Coast are creating a new growth vector for ONEOK\'s gas pipeline assets.',
    constraints: [
      'Integration execution risk — the Magellan integration is the largest in ONEOK\'s history; systems, contracts, and personnel consolidation must be completed without service disruptions',
      'Williston Basin producer activity — Bakken NGL volumes are tied to North Dakota producer capex cycles, which are price-sensitive at WTI < $55/bbl',
      'Refined products demand softness — Magelland\'s refined products pipeline revenues tied to gasoline and diesel demand that is under secular pressure from EV adoption',
    ],
    nexus: [
      { to: 'wmb', label: 'gas transmission network interconnect' },
      { to: 'epd', label: 'NGL fractionation and export markets' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-27',
      status: 'Beat',
      statusBasis: 'EPS $2.13 vs $1.46 and revenue $12.455B vs $11.77B, per Earnings Whispers. EPS includes a $0.53 one-time tax benefit; about $1.60 without it, still above consensus.',
      guidance: 'ONEOK raised 2026 adjusted EBITDA guidance to $8.5 billion to $8.6 billion, a $200 million midpoint increase, with net income of $4.09 billion to $4.27 billion and capex of about $3.5 billion.',
      breakdown: [
        'Adjusted EBITDA $2.24B, up 6%, including a $53M net benefit mainly from debt extinguishment',
        'Debt-to-EBITDA target lowered to about 3.25x or below',
        'Closed Brazos Midland acquisition',
        'Call: new 110 MMcf/d supply deal for a 500 MW plant, after a 250 MMcf/d deal for a 1 GW plant',
      ],
      sources: [
        { label: 'ONEOK Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001039684/000103968426000036/okeq32026earningsrelease.htm', date: '2026-10-27' },
        { label: 'Earnings Whispers Q3 results', url: 'https://www.earningswhispers.com/article/OKE/r621', date: '2026-10-28' },
        { label: 'Earnings Whispers Q3 call transcript', url: 'https://www.earningswhispers.com/transcript/OKE/Q32026', date: '2026-10-28' },
        { label: 'ONEOK Q4 2025 call notice (cadence)', url: 'https://ir.oneok.com/news-and-events/press-releases/2026/01-20-2026-211622430', date: '2026-01-20' },
      ],
    },
    ir: {
      base: 'https://investors.oneok.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investors.oneok.com/financial-information/quarterly-earnings' }],
    },
    tacticalEntry: {
      idealEntry: '$96–$106 — Magellan integration execution concern or Williston producer activity softness creating entry; Magellan synergy upside is the re-rate catalyst',
      leapStructure: 'Jan 2027 $110C — 12-month duration; Magellan $200M synergy realization + LNG feedgas volume growth are the catalysts; size 1%, delta 0.55',
      catalyst: 'Next quarterly earnings — Magellan integration synergy realization vs. $200M plan; Williston Basin NGL volumes; Gulf Coast LNG feedgas pipeline revenue; net income guidance vs. raised midpoint',
      thesis: 'ONEOK\'s Magellan acquisition created the most diversified midstream C-corp: Rocky Mountain NGL, refined products, and Gulf Coast LNG exposure. Synergies are tracking above plan. LNG export feedgas volumes are a new revenue stream from the same infrastructure. Integration risk is the primary near-term concern.',
    },
  },

  {
    id: 'kmi',
    name: 'Kinder Morgan',
    ticker: 'KMI',
    etf: 'ENFR',
    category: CATEGORIES.ENERGY,
    weight: { index: 'ENFR', value: '~5%' },
    stackPosition: 'Midstream — Natural Gas Pipelines & CO2 Transport',
    thematic:
      'Kinder Morgan operates the largest natural gas pipeline network in the US by miles, with ~83,000 miles of pipeline serving every major production basin and demand center — the AI power demand tailwind is therefore broad and diffuse across its system rather than concentrated in a single project or region. The company\'s focus on capital return (dividend + buyback) over growth investment reflects a management philosophy that prioritizes financial returns to investors over building the largest possible infrastructure empire. In 2026, Kinder Morgan\'s AI demand exposure is real but incremental — volumes on existing pipes are rising modestly as data center gas demand adds to a stable industrial and residential base.',
    constraints: [
      'Network expansion competition — KMI\'s existing pipeline network is its moat, but new greenfield projects from Williams, ET, and OKE create cost-of-service competition on contested routes',
      'CO2 business relevance — KMI\'s CO2 enhanced oil recovery (EOR) segment faces secular headwinds as EOR demand declines with aging oil fields',
      'Financing rate sensitivity — KMI\'s balance sheet carries ~$30B of long-term debt; refinancing risk is meaningful if rates remain elevated',
    ],
    nexus: [
      { to: 'wmb', label: 'gas transmission network adjacent to Transco' },
      { to: 'gev', label: 'natural gas transport for power generation' },
    ],
    earnings: {
      period: 'Q3 2026',
      periodEnd: '2026-09-30',
      reportedOn: '2026-10-21',
      status: 'Beat',
      statusBasis: 'Adjusted EPS $0.35 vs $0.32 and revenue $4.53B vs $4.37B consensus, per Investing.com; Newsquawk shows $0.32 and $4.38B.',
      guidance: 'Kinder Morgan expects 2026 to finish more than 6% above its $8.6 billion adjusted EBITDA budget and more than 13% above its $1.36 adjusted EPS budget, with year-end leverage of 3.6x.',
      breakdown: [
        'Adjusted EBITDA $2.18B, up 9%; adjusted EPS $0.35, up 21%',
        'Net debt-to-adjusted EBITDA 3.5x; FCF $545M, with FCF after dividends of -$120M',
        'Backlog record $14.4B, up $4.7B from Q2; $13.2B is natural gas',
        'Over 75% of backlog serves power and LDC demand; Permian Link serves a hyperscaler\'s new power',
      ],
      sources: [
        { label: 'Kinder Morgan Q3 2026 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001506307/000150630726000130/kmi2026q38-kex991.htm', date: '2026-10-21' },
        { label: 'Investing.com Q3 results', url: 'https://www.investing.com/news/earnings/kinder-morgan-earnings-beat-by-003-revenue-topped-estimates-4963923', date: '2026-10-21' },
        { label: 'Newsquawk Q3 headline', url: 'https://www.newsquawk.com/headlines/kinder-morgan-inc-kmi-q3-2026-usd-adj-eps-035-exp-032-revenue-4531bln-exp-438bln', date: '2026-10-21' },
        { label: 'KMI Q4 2025 webcast notice (cadence)', url: 'https://www.businesswire.com/news/home/20260114784221/en/', date: '2026-01-14' },
      ],
    },
    ir: {
      base: 'https://ir.kindermorgan.com',
      reports: [{ label: 'Earnings Releases', href: 'https://ir.kindermorgan.com/financial-information/quarterly-earnings' }],
    },
    tacticalEntry: {
      idealEntry: '$20–$23 — interest rate spike creating dividend yield expansion entry; 5.5%+ dividend yield provides income cushion; AI data center gas demand is a gradual volume tailwind',
      leapStructure: 'No liquid LEAPS on KMI — long-only equity; size 1% as the most conservative ENFR income + AI gas exposure position; monitor debt refinancing risk',
      catalyst: 'Next quarterly earnings — Texas Intrastate and EPNG AI data center gas volume growth; CO2 segment decline rate; DCF per share vs. guidance; debt maturity schedule and refinancing rates',
      thesis: 'Kinder Morgan operates 83,000 miles of US natural gas pipeline — AI power demand is an incremental volume tailwind across every segment. The 5.5% dividend is the return floor. Capital return focus over growth investment maximizes near-term shareholder value from the existing network.',
    },
  },
  // ─────────────────────────────────────────────────────────────────────────
  // OPTICAL & PHOTONICS
  // Note: No dedicated pure-play photonics ETF exists; SMH is the closest
  // proxy as these companies sit in the semiconductor supply chain.
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'cohr',
    name: 'Coherent Corp',
    ticker: 'COHR',
    etf: 'SMH',
    category: CATEGORIES.PHOTONICS,
    weight: { index: 'SMH (proxy)', value: '~1%' },
    stackPosition: 'Optical Components — 800G/1.6T Transceivers & Laser Sources',
    thematic:
      'Coherent is the dominant supplier of the optical transceivers that physically connect GPU clusters inside AI data centers — every NVLink and InfiniBand cable in a Blackwell NVL72 rack terminates in a Coherent active optical cable or pluggable transceiver. The 800G transceiver cycle is the most compressed upgrade cycle in optical history, driven by the insatiable bandwidth demands of AI training clusters scaling from thousands to hundreds of thousands of GPUs, and Coherent\'s indium phosphide (InP) laser manufacturing capacity is the binding constraint on how fast the industry can upgrade. In 2026, Coherent is the picks-and-shovels play on AI interconnect that most equity investors have not yet fully priced into the stock.',
    constraints: [
      'InP laser epitaxy capacity — growing indium phosphide substrates for 800G and 1.6T laser sources requires specialized MOCVD reactors with 18-month lead times',
      'Co-packaged optics (CPO) transition — the industry shift from pluggable to co-packaged optics will eventually disrupt Coherent\'s pluggable transceiver revenue before CPO ASPs can compensate',
      'Integration complexity — the II-VI and Coherent merger combined two large, complex manufacturing organizations; ERP consolidation and fab rationalization are multi-year execution risks',
    ],
    nexus: [
      { to: 'nvda', label: '800G active optical cables for NVLink' },
      { to: 'mrvl', label: 'DSP + transceiver co-design for 1.6T' },
      { to: 'fn',   label: 'contract manufacturing for transceiver assembly' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-30',
      reportedOn: '2026-11-04',
      status: 'Beat',
      statusBasis: 'Non-GAAP EPS $2.09 vs $1.99 (FactSet via CNBC) and revenue $2.37B vs $2.31B (FactSet via MoneyCheck; CNBC confirms a revenue beat without a figure).',
      guidance: 'FQ2 2027 revenue of $2.55-2.75B, non-GAAP gross margin of 40-42% and non-GAAP EPS of $2.28-2.48; FY2027 pro forma growth above 60%.',
      breakdown: [
        'Datacenter & Communications $1.95B, up 79% YoY, 82% of revenue; Industrial $419M',
        'Revenue up 50% YoY (56% pro forma); non-GAAP gross margin 40.6%, operating margin 23.2%',
        'AI datacenters moving from copper to optical connectivity are the stated growth driver',
        'First $3B quarter targeted by end of FY2027 and first $4B quarter in FY2028',
      ],
      sources: [
        { label: 'Coherent FQ1 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000820318/000119312526447200/d176836dex991.htm', date: '2026-11-04' },
        { label: 'CNBC after-hours movers', url: 'https://www.cnbc.com/2026/11/04/stocks-making-the-biggest-moves-after-hours-cohr-app-expe-more.html', date: '2026-11-04' },
        { label: 'MoneyCheck', url: 'https://moneycheck.com/coherent-cohr-stock-rises-after-hours-as-datacenter-revenue-jumps-79', date: '2026-11-04' },
        { label: 'Coherent FQ2 2026 8-K (date precedent)', url: 'https://www.sec.gov/Archives/edgar/data/820318/000119312526037556/d101115dex991.htm', date: '2026-02-04' },
      ],
    },
    ir: {
      base: 'https://www.coherent.com/investors',
      reports: [{ label: 'Quarterly Earnings', href: 'https://www.coherent.com/investors/financial-information' }],
    },
    tacticalEntry: {
      idealEntry: '$62–$72 — CPO transition fear or InP substrate yield noise creating entry; 800G demand is the near-term anchor, 1.6T is the re-rate catalyst',
      leapStructure: 'Jan 2027 $80C — 12-month duration; 1.6T transceiver production qualification at NVIDIA and hyperscalers is the primary catalyst; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — datacom revenue vs. +50% YoY guide; 800G backlog extension into 2027; 1.6T transceiver qualification timeline; InP substrate yield improvement',
      thesis: 'Coherent is the dominant transceiver supplier for AI cluster interconnect — every NVLink and InfiniBand optical link in a Blackwell rack is a COHR product. The 800G cycle is the most compressed in optical history. The 1.6T transition is the next ASP step-function. InP manufacturing moat takes a decade to replicate.',
    },
  },

  {
    id: 'lite',
    name: 'Lumentum Holdings',
    ticker: 'LITE',
    etf: 'SMH',
    category: CATEGORIES.PHOTONICS,
    weight: { index: 'SMH (proxy)', value: '~0.5%' },
    stackPosition: 'Optical Components — InP Lasers, ROADMs & 3D Sensing',
    thematic:
      'Lumentum is a pure-play photonics company with leadership positions in indium phosphide lasers for datacom transceivers and reconfigurable optical add-drop multiplexers (ROADMs) for long-haul network infrastructure — both of which are experiencing simultaneous demand acceleration from AI cluster build-out and hyperscaler backbone network upgrades. The company\'s 3D sensing laser business (used in Apple Face ID and Android equivalents) provides a consumer revenue floor that is now being supplemented by the rapidly growing datacom laser segment. In 2026, Lumentum\'s datacom laser chips are shipping into 800G transceivers made by Coherent, Fabrinet, and others, making it a critical upstream supplier in the optical interconnect stack.',
    constraints: [
      'Customer concentration — Apple 3D sensing represents a meaningful share of revenue; any iPhone volume miss or in-house laser development creates downside risk',
      'ROADM pricing pressure — Chinese competitors are pricing aggressively into the ROADM market, compressing Lumentum\'s long-haul telecom margins',
      'InP capacity investment — scaling laser chip output for 800G/1.6T demand requires significant capital in specialized epitaxy and fab tooling',
    ],
    nexus: [
      { to: 'cohr', label: 'laser chip supply for transceivers' },
      { to: 'fn',   label: 'transceiver assembly manufacturing' },
      { to: 'amzn', label: 'AWS optical network components' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-26',
      reportedOn: '2026-11-02',
      status: 'Beat',
      statusBasis: 'Non-GAAP EPS $4.57 vs $4.22 (Zacks) or $4.21 (Investing.com); revenue $1.2626B vs ~$1.25B (Koyfin, Zacks). Investing.com calls revenue \'in line\', but it was marginally above.',
      guidance: 'FQ2 2027 revenue of $1.575-1.625B, non-GAAP operating margin of 45-46% and non-GAAP EPS of $5.90-6.20.',
      breakdown: [
        'Components $754.2M; Systems $508.4M; revenue up 136.5% YoY and 25.5% QoQ',
        'Non-GAAP gross margin 53.2%; non-GAAP operating margin 42.3%',
        'Pump lasers and optical circuit switches led growth across all businesses',
        'Second major NPO/CPO win with $5B+ commitments',
        'To be acquired by Marvell in an all-stock deal, ~$115B EV; close expected H1 2028',
      ],
      sources: [
        { label: 'Lumentum FQ1 release', url: 'https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-First-Quarter-of-Fiscal-Year-2027-Financial-Results/default.aspx', date: '2026-11-02' },
        { label: 'Lumentum 8-K summary (StockTitan)', url: 'https://www.stocktitan.net/sec-filings/LITE/8-k-lumentum-holdings-inc-reports-material-event-b6c0173c3a18.html', date: '2026-11-02' },
        { label: 'Marvell/Lumentum deal release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm', date: '2026-11-02' },
        { label: 'Investing.com', url: 'https://www.investing.com/news/stock-market-news/marvell-agrees-115-billion-allstock-deal-to-buy-lumentum-4991232', date: '2026-11-02' },
        { label: 'Zacks via Yahoo', url: 'https://finance.yahoo.com/markets/stocks/articles/lumentum-lite-beats-q1-earnings-152003979.html', date: '2026-11-02' },
        { label: 'Original Nov 5 date notice', url: 'https://s21.q4cdn.com/377324469/files/doc_news/Lumentum-Announces-Reporting-Date-for-Fiscal-First-Quarter-2027-Financial-Results-2026.pdf', date: '2026-10-05' },
        { label: 'Lumentum FQ2 2026 8-K (date precedent)', url: 'https://www.sec.gov/Archives/edgar/data/1633978/000162828026005005/lite_ex991xq2fy26.htm', date: '2026-02-03' },
        { label: 'Marvell-Lumentum release', url: 'https://www.sec.gov/Archives/edgar/data/0001633978/000119312526442758/d163169dex991.htm', date: '2026-11-02' },
      ],
    },
    ir: {
      base: 'https://investor.lumentum.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.lumentum.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$72–$82 — Apple 3D sensing concern or Chinese ROADM pricing pressure creating entry; datacom laser chip demand is the AI-driven thesis decoupled from Apple risk',
      leapStructure: 'Jan 2027 $90C — 12-month duration; 800G/1.6T laser chip supply tightness is the primary catalyst; size 1%, delta 0.50',
      catalyst: 'Next quarterly earnings — datacom laser chip revenue vs. +60% YoY guide; ROADM telecom recovery trajectory; 3D sensing Apple iPhone cycle update; InP capacity expansion timeline',
      thesis: 'Lumentum is the upstream laser chip supplier to the AI optical interconnect stack — it sits one level above Coherent and Fabrinet in the value chain. 800G transceiver demand from every major OEM flows through LITE\'s InP epitaxy capacity. The 3D sensing business provides an Apple-correlated floor.',
    },
  },

  {
    id: 'fn',
    name: 'Fabrinet',
    ticker: 'FN',
    etf: 'SMH',
    category: CATEGORIES.PHOTONICS,
    weight: { index: 'SMH (proxy)', value: '~0.5%' },
    stackPosition: 'Optical EMS — Contract Manufacturing for Transceivers & Laser Modules',
    thematic:
      'Fabrinet is the TSMC of the optical world — a pure-play contract manufacturer that assembles the transceivers, laser modules, and optical subsystems that its customers (Coherent, Lumentum, Ciena, Cisco) design but cannot efficiently manufacture at scale. Operating out of its Chonburi, Thailand campus, Fabrinet combines precision optical alignment, hermetic sealing, and RF assembly capabilities that are extraordinarily difficult to replicate, creating a manufacturing moat as defensible as any fab in the semiconductor industry. In 2026, every 800G transceiver surge at the design houses flows directly into Fabrinet\'s production lines, making it one of the cleanest pure-play beneficiaries of the AI cluster interconnect build-out.',
    constraints: [
      'Thailand geographic concentration — the Chonburi campus is the single point of manufacturing for many customers; flood, political, or supply chain disruption risk is structurally elevated',
      'Customer revenue concentration — top-3 customers represent >60% of revenue; any program cancellation or in-house manufacturing move has outsized impact',
      'Optical alignment yield — sub-micron precision alignment of laser-to-fiber coupling is the rate-limiting step in transceiver assembly; yield improvements are incremental and hard-won',
    ],
    nexus: [
      { to: 'cohr', label: 'contract assembly for COHR transceivers' },
      { to: 'lite', label: 'laser module assembly for LITE' },
      { to: 'nvda', label: 'end-market: AI cluster interconnect' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-09-25',
      reportedOn: '2026-11-02',
      status: 'Beat',
      statusBasis: 'Revenue $1.47B vs $1.40B and non-GAAP EPS $4.34 vs $4.19 (Investing.com); MarketBeat shows $1.41B and $4.20. No LSEG/FactSet figure found.',
      guidance: 'FQ2 2027 revenue of $1.6-1.65B and non-GAAP EPS of $4.77-4.92.',
      breakdown: [
        'Data Center $777M, up 78% YoY, 53% of revenue: transceivers, DCI and HPC',
        'Communications Infrastructure $444M, up 35% YoY on telecom and satellite programs',
        'Automotive, Industrial & Other $253M, up 20% YoY, led sequentially by lasers',
        'Record revenue $1.47B, up 51% YoY; non-GAAP gross margin 12.1%, operating margin 10.8%',
      ],
      sources: [
        { label: 'Fabrinet FQ1 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001408710/000140871026000034/fn-20261102xex991q127.htm', date: '2026-11-02' },
        { label: 'Investing.com earnings page', url: 'https://www.investing.com/equities/fabrinet-earnings', date: '2026-11-05' },
        { label: 'MarketBeat', url: 'https://www.marketbeat.com/instant-alerts/price-fabrinet-nyse-fn-shares-up-129-on-earnings-beat-2026-11-03/', date: '2026-11-03' },
        { label: 'Earnings call highlights (Yahoo)', url: 'https://finance.yahoo.com/markets/stocks/articles/fabrinet-q1-earnings-call-highlights-021411566.html', date: '2026-11-03' },
        { label: 'Fabrinet FQ2 2026 8-K (date precedent)', url: 'https://www.sec.gov/Archives/edgar/data/1408710/000140871026000006/fn-2026202xex991q226.htm', date: '2026-02-02' },
      ],
    },
    ir: {
      base: 'https://investor.fabrinet.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.fabrinet.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$220–$245 — Thailand risk headline or customer concentration concern creating entry; the assembly moat is as defensible as any fab; demand for 800G is the anchor',
      leapStructure: 'Jan 2027 $260C — 12-month duration; revenue guidance above $820-840M confirms continued 800G ramp; size 1.5%, delta 0.55',
      catalyst: 'Next quarterly earnings — revenue vs. $820-840M guide; datacom % of total revenue (tracking 72%+); Chonburi Phase 2 capacity utilization; new customer announcements',
      thesis: 'Fabrinet is the TSMC of optical assembly — a manufacturing moat built on sub-micron precision that takes a decade to replicate. Every 800G transceiver surge flows into FN\'s Chonburi production lines. EMS model means low capex intensity and ROIC above 25%. The AI cluster interconnect build-out is a multi-year demand ceiling.',
    },
  },

  {
    id: 'viav',
    name: 'Viavi Solutions',
    ticker: 'VIAV',
    etf: 'SMH',
    category: CATEGORIES.PHOTONICS,
    weight: { index: 'SMH (proxy)', value: '~0.3%' },
    stackPosition: 'Optical Test & Network Intelligence',
    thematic:
      'Viavi Solutions makes the instruments and software that validate, monitor, and troubleshoot optical networks — as AI data centers deploy 800G and eventually 1.6T optical interconnects, the complexity of qualifying and maintaining those networks drives demand for Viavi\'s optical spectrum analyzers, OTDR instruments, and network test platforms. The company\'s OSP (Optical Security and Performance Products) segment, which makes the optically variable anti-counterfeiting pigments used in banknotes and government documents, provides a stable, high-margin cash flow stream that funds R&D in the more cyclical network test business. In 2026, Viavi is benefiting from hyperscaler network infrastructure validation spend and the 5G network testing cycle as carriers bring 5G mid-band capacity online.',
    constraints: [
      'Network test spending cyclicality — telecom carrier capex cycles directly gate Viavi\'s NSE segment; any carrier spending pause reduces test instrument orders',
      'OSP concentration — the anti-counterfeiting pigment business is highly profitable but dependent on government currency printing programs that are long-cycle and politically sensitive',
      'Competition from Spirent and Keysight — large, well-funded competitors in network test limit pricing power and require continuous R&D investment to maintain differentiation',
    ],
    nexus: [
      { to: 'cohr', label: 'optical network validation tools' },
      { to: 'asml', label: 'optical metrology and photomask inspection' },
    ],
    earnings: {
      period: 'FQ1 2027',
      periodEnd: '2026-10-03',
      reportedOn: '2026-11-04',
      status: 'Beat',
      statusBasis: 'Revenue $469.3M vs ~$455M (therighttrader $455.1M; GuruFocus says $14.37M above forecast) and non-GAAP EPS $0.47 vs ~$0.41 (MarketBeat $0.4069, Chartmill $0.415). Chartmill calls revenue in line. No LSEG/FactSet figure found.',
      guidance: 'FQ2 2027 (quarter ending Jan 2, 2027) revenue of $505-515M and non-GAAP EPS of $0.50-0.52.',
      breakdown: [
        'NSE $376.1M, up 74.1% YoY incl. ~$52.7M from Spirent; OSP $93.2M, up 12.2% YoY',
        'Revenue up 56.9% YoY, above the $450-460M guide; quarter had an extra week',
        'Non-GAAP gross margin 64.4%; non-GAAP operating margin 29.0%',
        'Data center revenue up nearly 2x YoY; A&D growth led by PNT for drone systems',
      ],
      sources: [
        { label: 'VIAVI FQ1 release (8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000912093/000162828026070170/viavq1fy278-kex991.htm', date: '2026-11-04' },
        { label: 'Motley Fool call transcript', url: 'https://www.fool.com/earnings/call-transcripts/2026/11/05/viavi-solutions-viav-q1-2027-earnings-call-transcript/', date: '2026-11-05' },
        { label: 'Therighttrader', url: 'https://therighttrader.com/earnings-calendar/viav', date: '2026-11-05' },
        { label: 'GuruFocus', url: 'https://www.gurufocus.com/news/9171549/viavi-solutions-viav-reports-strong-q1-results-shares-rise-4', date: '2026-11-04' },
        { label: 'Chartmill', url: 'https://www.chartmill.com/news/VIAV/Chartmill-57884-VIAVI-Solutions-NASDAQVIAV-Posts-Clear-EPS-Beat-With-In-Line-Revenue', date: '2026-11-04' },
        { label: 'MarketBeat earnings page', url: 'https://www.marketbeat.com/earnings/reports/2026-11-4-viavi-solutions-inc-stock/', date: '2026-11-04' },
        { label: 'VIAVI FQ2 2026 date notice', url: 'https://www.barchart.com/story/news/37048521/viavi-announces-date-for-fiscal-second-quarter-2026-financial-results', date: '2026-01-14' },
      ],
    },
    ir: {
      base: 'https://investor.viavisolutions.com',
      reports: [{ label: 'Quarterly Results', href: 'https://investor.viavisolutions.com/financial-information/quarterly-results' }],
    },
    tacticalEntry: {
      idealEntry: '$10–$13 — telecom carrier capex pause concern or OSP pigment program timing noise creating entry; hyperscaler lab test spending is the AI-correlated revenue stream',
      leapStructure: 'No liquid LEAPS on VIAV — long-only equity; size 0.5% as a speculative optical infrastructure position; smallest allocation in the photonics basket',
      catalyst: 'Next quarterly earnings — NSE datacenter lab test revenue growth; OSP segment in-line; carrier field test recovery; operating margin expansion trajectory',
      thesis: 'Viavi validates and monitors the optical networks that AI data centers are deploying at record speed. As 800G and 1.6T networks proliferate, the complexity and value of test and measurement instrumentation rises proportionally. The OSP anti-counterfeiting business is a stable, high-margin cash flow floor.',
    },
  },

];

export const getCompany = (id) => COMPANIES.find((c) => c.id === id);

// ─── Next Earnings Dates ─────────────────────────────────────────────────────
// Dates in EARNINGS_DATE_CONFIRMED were announced by the company. The rest are
// estimates from last year's reporting cadence.
export const NEXT_EARNINGS = {
  // Logic
  nvda:  '2026-11-17',
  tsm:   '2027-01-14',
  avgo:  '2026-12-09',
  intc:  '2027-01-21',
  amd:   '2027-02-02',
  txn:   '2027-01-26',
  qcom:  '2027-02-03',
  adi:   '2026-11-24',
  mrvl:  '2026-12-01',
  // Memory
  skhx:  '2027-01-27',
  mu:    '2026-12-23',
  ssnlf: '2027-01-28',
  wdc:   '2027-01-28',
  stx:   '2027-01-26',
  sndk:  '2027-01-28',
  nanya: '2027-01-18',
  // Equipment & Lithography
  asml:  '2027-01-27',
  amat:  '2026-11-12',
  lrcx:  '2027-01-27',
  klac:  '2027-01-28',
  toely: '2027-02-05',
  // AIS
  vrt:   '2027-02-10',
  gev:   '2027-01-27',
  msft:  '2027-01-27',
  googl: '2027-02-03',
  amzn:  '2027-02-04',
  meta:  '2027-01-27',
  pltr:  '2027-02-01',
  orcl:  '2026-12-10',
  snow:  '2026-12-02',
  // Energy
  enb:   '2027-02-12',
  et:    '2027-02-16',
  epd:   '2027-02-02',
  wmb:   '2027-02-09',
  trgp:  '2027-02-18',
  oke:   '2027-02-22',
  kmi:   '2027-01-20',
  // Photonics
  cohr:  '2027-02-03',
  lite:  '2027-02-02',
  fn:    '2027-02-01',
  viav:  '2027-02-03',
};

export const EARNINGS_DATE_CONFIRMED = new Set(['nvda', 'avgo', 'adi', 'amat', 'toely', 'snow']);
