import { MACRS_15_HY, MACRS_5_HY, macrsRate, residentialRentalRates } from "./macrs.ts";

export type Inputs = {
  purchasePrice: number;
  landValuePct: number;
  closingCosts: number;
  ffe: number;
  mortgageAmount: number;
  interestRate: number;
  loanTermYears: number;
  placedInServiceMonth: number;

  peakAdr: number;
  peakOcc: number;
  peakDays: number;
  shoulderAdr: number;
  shoulderOcc: number;
  shoulderDays: number;
  lowAdr: number;
  lowOcc: number;
  lowDays: number;
  avgStayNights: number;
  cleaningFee: number;
  cleaningCostRatio: number;

  utilities: number;
  insurance: number;
  propertyTax: number;
  maintenance: number;
  supplies: number;
  platformFeePct: number;
  hoa: number;
  pmFeePct: number;

  revenueGrowthPct: number;
  opexInflationPct: number;
  appreciationPct: number;
  sellingCostPct: number;

  taxRatePct: number;
  ltcgRatePct: number;
  unrecaptured1250Pct: number;
  costSegPct: number;
  personalSharePct: number;
  bonusPct: number;
  applyBonus: boolean;
  materialParticipation: boolean;
  qbiEnabled: boolean;

  projectionYears: number;
};

export type BasisSplit = {
  landBasis: number;
  buildingBasis: number;
  realProp: number;
  personalProp: number;
  landImprov: number;
  ffe: number;
  totalCost: number;
  cashInvested: number;
};

export type YearResult = {
  year: number;
  grossRevenue: number;
  roomRevenue: number;
  cleaningRevenue: number;
  occupiedNights: number;
  bookings: number;
  opex: number;
  noi: number;
  interest: number;
  principalPaid: number;
  debtService: number;
  depreciation: number;
  depBonus: number;
  dep5: number;
  dep15: number;
  dep27: number;
  taxableBeforeQbi: number;
  qbiDeduction: number;
  taxableIncome: number;
  suspendedLossUsed: number;
  suspendedLossCarry: number;
  taxPaid: number;
  w2Shield: number;
  btcf: number;
  atcf: number;
  propertyValue: number;
  remainingBalance: number;
  equity: number;
  cumulativeAtcf: number;
};

export type SaleResult = {
  year: number;
  salePrice: number;
  sellingCosts: number;
  remainingBalance: number;
  cumulativeDep: number;
  adjustedBasis: number;
  gain: number;
  recapture1245: number;
  unrecaptured1250: number;
  ltcg: number;
  taxOnSale: number;
  netEquityProceeds: number;
  cumulativeAtcf: number;
  totalProfit: number;
};

export type Model = {
  inputs: Inputs;
  basis: BasisSplit;
  years: YearResult[];
  year1: YearResult;
  capRate: number;
  coc: number;
  dscr: number;
  grossYield: number;
  avgStayQualifiesStr: boolean;
  lossesAllowed: boolean;
  monthlyPayment: number;
  saleYear5: SaleResult;
  saleYear10: SaleResult;
  holdIrr: number | null;
};

export type Comparison = {
  strategy: Model;
  baseline: Model;
  extraYear1Shield: number;
  extraYear1Atcf: number;
  extraYear1Dep: number;
};

function n(v: number): number {
  return Number.isFinite(v) ? v : 0;
}

function grow(base: number, ratePct: number, yearIndex: number): number {
  return base * Math.pow(1 + ratePct / 100, yearIndex);
}

export function monthlyPayment(
  principal: number,
  annualRatePct: number,
  termYears: number,
): number {
  const p = n(principal);
  if (p <= 0 || termYears <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  const periods = termYears * 12;
  if (r === 0) return p / periods;
  return (p * r) / (1 - Math.pow(1 + r, -periods));
}

export function amortizeYears(
  principal: number,
  annualRatePct: number,
  termYears: number,
  years: number,
): { interest: number; principalPaid: number; payment: number; endingBalance: number }[] {
  const pmt = monthlyPayment(principal, annualRatePct, termYears);
  const r = annualRatePct / 100 / 12;
  let bal = n(principal);
  const out = [];
  for (let y = 0; y < years; y++) {
    let interest = 0;
    let prin = 0;
    for (let m = 0; m < 12; m++) {
      if (bal <= 0.5) {
        bal = 0;
        break;
      }
      const i = bal * r;
      let p = pmt - i;
      if (p > bal) p = bal;
      interest += i;
      prin += p;
      bal -= p;
    }
    out.push({
      interest,
      principalPaid: prin,
      payment: pmt * 12,
      endingBalance: Math.max(0, bal),
    });
  }
  return out;
}

export function splitBasis(inputs: Inputs): BasisSplit {
  const price = n(inputs.purchasePrice);
  const landPct = Math.min(90, Math.max(0, n(inputs.landValuePct))) / 100;
  const closing = Math.max(0, n(inputs.closingCosts));
  const ffe = Math.max(0, n(inputs.ffe));
  const landValue = price * landPct;
  const closingToLand = closing * landPct;
  const landBasis = landValue + closingToLand;
  const buildingBasis = price - landValue + (closing - closingToLand);
  const costSeg = buildingBasis * (Math.min(80, Math.max(0, n(inputs.costSegPct))) / 100);
  const personalShare = Math.min(100, Math.max(0, n(inputs.personalSharePct))) / 100;
  const personalProp = costSeg * personalShare;
  const landImprov = costSeg - personalProp;
  const realProp = buildingBasis - costSeg;
  const mortgage = Math.max(0, n(inputs.mortgageAmount));
  const cashInvested = price + closing + ffe - mortgage;
  return {
    landBasis,
    buildingBasis,
    realProp,
    personalProp,
    landImprov,
    ffe,
    totalCost: price + closing + ffe,
    cashInvested,
  };
}

function seasonRevenue(
  days: number,
  occPct: number,
  adr: number,
): { nights: number; revenue: number } {
  const nights = Math.max(0, days) * (Math.min(100, Math.max(0, occPct)) / 100);
  return { nights, revenue: nights * Math.max(0, adr) };
}

export function occupancyMix(inputs: Inputs) {
  const peak = seasonRevenue(inputs.peakDays, inputs.peakOcc, inputs.peakAdr);
  const shoulder = seasonRevenue(inputs.shoulderDays, inputs.shoulderOcc, inputs.shoulderAdr);
  const low = seasonRevenue(inputs.lowDays, inputs.lowOcc, inputs.lowAdr);
  const occupiedNights = peak.nights + shoulder.nights + low.nights;
  const roomRevenue = peak.revenue + shoulder.revenue + low.revenue;
  const stay = Math.max(1, n(inputs.avgStayNights));
  const bookings = occupiedNights / stay;
  return { peak, shoulder, low, occupiedNights, roomRevenue, bookings };
}

function irr(cashflows: number[]): number | null {
  if (cashflows.length < 2) return null;
  let r = 0.12;
  for (let i = 0; i < 40; i++) {
    let npv = 0;
    let deriv = 0;
    for (let t = 0; t < cashflows.length; t++) {
      const cf = cashflows[t] ?? 0;
      const den = Math.pow(1 + r, t);
      npv += cf / den;
      if (t > 0) deriv -= (t * cf) / Math.pow(1 + r, t + 1);
    }
    if (Math.abs(deriv) < 1e-12) break;
    const next = r - npv / deriv;
    if (!Number.isFinite(next)) return null;
    if (Math.abs(next - r) < 1e-8) return next;
    r = next;
  }
  return Number.isFinite(r) ? r : null;
}

function saleAt(
  year: number,
  years: YearResult[],
  basis: BasisSplit,
  inputs: Inputs,
): SaleResult {
  const idx = Math.min(years.length, Math.max(1, year)) - 1;
  const row = years[idx]!;
  const salePrice = row.propertyValue;
  const sellingCosts = salePrice * (n(inputs.sellingCostPct) / 100);
  const cumulativeDep = years.slice(0, idx + 1).reduce((s, y) => s + y.depreciation, 0);
  const adjustedBasis = Math.max(0, basis.totalCost - cumulativeDep);
  const gain = salePrice - sellingCosts - adjustedBasis;
  const dep1245 = years
    .slice(0, idx + 1)
    .reduce((s, y) => s + y.depBonus + y.dep5 + y.dep15, 0);
  const dep1250 = years.slice(0, idx + 1).reduce((s, y) => s + y.dep27, 0);
  const positiveGain = Math.max(0, gain);
  const recapture1245 = Math.min(positiveGain, dep1245);
  const unrecaptured1250 = Math.min(positiveGain - recapture1245, dep1250);
  const ltcg = Math.max(0, positiveGain - recapture1245 - unrecaptured1250);
  const ordinary = n(inputs.taxRatePct) / 100;
  const rate1250 = Math.min(n(inputs.unrecaptured1250Pct) / 100, ordinary);
  const taxOnSale =
    recapture1245 * ordinary +
    unrecaptured1250 * rate1250 +
    ltcg * (n(inputs.ltcgRatePct) / 100);
  const netEquityProceeds = salePrice - sellingCosts - row.remainingBalance - taxOnSale;
  const totalProfit = row.cumulativeAtcf + netEquityProceeds - basis.cashInvested;
  return {
    year: row.year,
    salePrice,
    sellingCosts,
    remainingBalance: row.remainingBalance,
    cumulativeDep,
    adjustedBasis,
    gain,
    recapture1245,
    unrecaptured1250,
    ltcg,
    taxOnSale,
    netEquityProceeds,
    cumulativeAtcf: row.cumulativeAtcf,
    totalProfit,
  };
}

export function project(inputs: Inputs): Model {
  const yearsCount = Math.min(15, Math.max(1, Math.round(n(inputs.projectionYears))));
  const basis = splitBasis(inputs);
  const mix0 = occupancyMix(inputs);
  const bonusRate = inputs.applyBonus ? Math.min(100, Math.max(0, n(inputs.bonusPct))) / 100 : 0;
  const personal5 = basis.personalProp + basis.ffe;
  const bonusAmount = (personal5 + basis.landImprov) * bonusRate;
  const remaining5 = personal5 * (1 - bonusRate);
  const remaining15 = basis.landImprov * (1 - bonusRate);
  const resRates = residentialRentalRates(inputs.placedInServiceMonth, yearsCount);
  const debt = amortizeYears(
    n(inputs.mortgageAmount),
    n(inputs.interestRate),
    n(inputs.loanTermYears),
    yearsCount,
  );
  const taxRate = n(inputs.taxRatePct) / 100;
  const lossesAllowed = Boolean(inputs.materialParticipation);
  const stay = Math.max(1, n(inputs.avgStayNights));
  const avgStayQualifiesStr = stay <= 7;

  const years: YearResult[] = [];
  let palCarry = 0;
  let cumulativeAtcf = 0;

  for (let i = 0; i < yearsCount; i++) {
    const peak = seasonRevenue(
      inputs.peakDays,
      inputs.peakOcc,
      grow(inputs.peakAdr, inputs.revenueGrowthPct, i),
    );
    const shoulder = seasonRevenue(
      inputs.shoulderDays,
      inputs.shoulderOcc,
      grow(inputs.shoulderAdr, inputs.revenueGrowthPct, i),
    );
    const low = seasonRevenue(
      inputs.lowDays,
      inputs.lowOcc,
      grow(inputs.lowAdr, inputs.revenueGrowthPct, i),
    );
    const occupiedNights = peak.nights + shoulder.nights + low.nights;
    const roomRevenue = peak.revenue + shoulder.revenue + low.revenue;
    const bookings = occupiedNights / stay;
    const cleaningFee = grow(inputs.cleaningFee, inputs.revenueGrowthPct, i);
    const cleaningRevenue = bookings * cleaningFee;
    const grossRevenue = roomRevenue + cleaningRevenue;

    const cleaningExp = bookings * cleaningFee * (n(inputs.cleaningCostRatio) / 100);
    const platform = roomRevenue * (n(inputs.platformFeePct) / 100);
    const pm = grossRevenue * (n(inputs.pmFeePct) / 100);
    const fixed =
      grow(inputs.utilities, inputs.opexInflationPct, i) +
      grow(inputs.insurance, inputs.opexInflationPct, i) +
      grow(inputs.propertyTax, inputs.opexInflationPct, i) +
      grow(inputs.maintenance, inputs.opexInflationPct, i) +
      grow(inputs.supplies, inputs.opexInflationPct, i) +
      grow(inputs.hoa, inputs.opexInflationPct, i);
    const opex = cleaningExp + platform + pm + fixed;
    const noi = grossRevenue - opex;

    const loan = debt[i] ?? {
      interest: 0,
      principalPaid: 0,
      payment: 0,
      endingBalance: 0,
    };

    const depBonus = i === 0 ? bonusAmount : 0;
    const dep5 = remaining5 * macrsRate(MACRS_5_HY, i);
    const dep15 = remaining15 * macrsRate(MACRS_15_HY, i);
    const dep27 = basis.realProp * (resRates[i] ?? 0);
    const depreciation = depBonus + dep5 + dep15 + dep27;

    const taxableBeforeQbi = noi - loan.interest - depreciation;
    let qbiDeduction = 0;
    if (inputs.qbiEnabled && taxableBeforeQbi > 0 && lossesAllowed) {
      qbiDeduction = taxableBeforeQbi * 0.2;
    }
    let taxableIncome = taxableBeforeQbi - qbiDeduction;

    let suspendedLossUsed = 0;
    if (taxableIncome > 0 && palCarry > 0) {
      suspendedLossUsed = Math.min(taxableIncome, palCarry);
      taxableIncome -= suspendedLossUsed;
      palCarry -= suspendedLossUsed;
    }

    let taxPaid = 0;
    let w2Shield = 0;
    if (taxableIncome >= 0) {
      taxPaid = taxableIncome * taxRate;
    } else if (lossesAllowed && avgStayQualifiesStr) {
      w2Shield = -taxableIncome * taxRate;
    } else {
      palCarry += -taxableIncome;
      taxableIncome = 0;
    }

    const btcf = noi - loan.payment;
    const atcf = btcf - taxPaid + w2Shield;
    cumulativeAtcf += atcf;
    const propertyValue = grow(inputs.purchasePrice, inputs.appreciationPct, i + 1);

    years.push({
      year: i + 1,
      grossRevenue,
      roomRevenue,
      cleaningRevenue,
      occupiedNights,
      bookings,
      opex,
      noi,
      interest: loan.interest,
      principalPaid: loan.principalPaid,
      debtService: loan.payment,
      depreciation,
      depBonus,
      dep5,
      dep15,
      dep27,
      taxableBeforeQbi,
      qbiDeduction,
      taxableIncome,
      suspendedLossUsed,
      suspendedLossCarry: palCarry,
      taxPaid,
      w2Shield,
      btcf,
      atcf,
      propertyValue,
      remainingBalance: loan.endingBalance,
      equity: propertyValue - loan.endingBalance,
      cumulativeAtcf,
    });
  }

  const year1 = years[0]!;
  const saleYear5 = saleAt(Math.min(5, yearsCount), years, basis, inputs);
  const saleYear10 = saleAt(Math.min(10, yearsCount), years, basis, inputs);

  const exitFlows = [-basis.cashInvested, ...years.map((y) => y.atcf)];
  const sale = years.length >= 10 ? saleYear10 : saleYear5;
  const saleIdx = Math.min(sale.year, exitFlows.length - 1);
  exitFlows[saleIdx] = (years[saleIdx - 1]?.atcf ?? 0) + sale.netEquityProceeds;

  const capRate = inputs.purchasePrice > 0 ? year1.noi / inputs.purchasePrice : 0;
  const coc = basis.cashInvested > 0 ? year1.atcf / basis.cashInvested : 0;
  const dscr = year1.debtService > 0 ? year1.noi / year1.debtService : 0;
  const grossYield = inputs.purchasePrice > 0 ? year1.grossRevenue / inputs.purchasePrice : 0;

  return {
    inputs,
    basis,
    years,
    year1,
    capRate,
    coc,
    dscr,
    grossYield,
    avgStayQualifiesStr,
    lossesAllowed: lossesAllowed && avgStayQualifiesStr,
    monthlyPayment: monthlyPayment(
      n(inputs.mortgageAmount),
      n(inputs.interestRate),
      n(inputs.loanTermYears),
    ),
    saleYear5,
    saleYear10,
    holdIrr: irr(exitFlows),
  };
}

export function compare(inputs: Inputs): Comparison {
  const strategy = project(inputs);
  const baseline = project({ ...inputs, costSegPct: 0 });
  return {
    strategy,
    baseline,
    extraYear1Shield: strategy.year1.w2Shield - baseline.year1.w2Shield,
    extraYear1Atcf: strategy.year1.atcf - baseline.year1.atcf,
    extraYear1Dep: strategy.year1.depreciation - baseline.year1.depreciation,
  };
}

export function occupancySweep(
  inputs: Inputs,
  deltas: number[],
): { delta: number; peakOcc: number; atcf: number; shield: number; noi: number }[] {
  return deltas.map((delta) => {
    const next: Inputs = {
      ...inputs,
      peakOcc: clampPct(inputs.peakOcc + delta),
      shoulderOcc: clampPct(inputs.shoulderOcc + delta),
      lowOcc: clampPct(inputs.lowOcc + delta),
    };
    const model = project(next);
    return {
      delta,
      peakOcc: next.peakOcc,
      atcf: model.year1.atcf,
      shield: model.year1.w2Shield,
      noi: model.year1.noi,
    };
  });
}

function clampPct(v: number): number {
  return Math.min(95, Math.max(5, v));
}
