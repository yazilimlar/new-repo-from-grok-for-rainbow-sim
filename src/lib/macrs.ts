/**
 * IRS MACRS percentages (GDS).
 * 5-year: 200% declining balance, half-year convention (Pub 946 Table A-1).
 * 15-year: 150% declining balance, half-year convention (Table A-1).
 * Residential rental: 27.5-year straight line, mid-month (Table A-6).
 */

export const MACRS_5_HY = [
  0.2, 0.32, 0.192, 0.1152, 0.1152, 0.0576,
] as const;

export const MACRS_15_HY = [
  0.05, 0.095, 0.0855, 0.077, 0.0693, 0.0623, 0.059, 0.059, 0.059, 0.059, 0.059,
  0.059, 0.059, 0.059, 0.059, 0.0295,
] as const;

/** Mid-month residential rental recovery fraction for each year, 1-indexed month. */
export function residentialRentalRates(
  placedMonth: number,
  years: number,
): number[] {
  const month = Math.min(12, Math.max(1, Math.round(placedMonth)));
  const annual = 1 / 27.5;
  const rates: number[] = [];
  let remaining = 1;
  const monthsFirst = 12.5 - month;
  const r1 = Math.min(remaining, annual * (monthsFirst / 12));
  rates.push(r1);
  remaining -= r1;
  for (let y = 2; y <= years; y++) {
    const r = Math.min(remaining, annual);
    rates.push(r);
    remaining -= r;
  }
  return rates;
}

export function macrsRate(table: readonly number[], yearIndex: number): number {
  return table[yearIndex] ?? 0;
}
