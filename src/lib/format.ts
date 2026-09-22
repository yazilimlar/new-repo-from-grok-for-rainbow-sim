const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const pct1 = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 1,
  signDisplay: "exceptZero",
});

const pct0 = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 0,
});

export function money(n: number, digits: 0 | 2 = 0): string {
  if (!Number.isFinite(n)) return "—";
  return digits === 2 ? usd2.format(n) : usd0.format(n);
}

export function compactMoney(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(2)}M`;
  if (abs >= 10_000) return `${sign}$${(abs / 1_000).toFixed(1)}k`;
  return money(n);
}

export function pct(n: number, alreadyRatio = true): string {
  if (!Number.isFinite(n)) return "—";
  return pct1.format(alreadyRatio ? n : n / 100);
}

export function pctPoints(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return pct0.format(n / 100);
}

export function signedMoney(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n > 0) return `+${money(n)}`;
  return money(n);
}

export function monthName(month: number): string {
  return (
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][month - 1] ?? "January"
  );
}
