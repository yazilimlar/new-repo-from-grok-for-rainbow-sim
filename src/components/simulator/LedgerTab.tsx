import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Comparison, YearResult } from "@/lib/finance";
import { money } from "@/lib/format";
import { cn } from "@/lib/utils";

const ROWS: { key: keyof YearResult | "label"; label: string; kind?: "money" | "plain"; tone?: "sage" | "loss" | "muted" }[] = [
  { key: "grossRevenue", label: "Gross revenue", kind: "money" },
  { key: "opex", label: "Operating expenses", kind: "money", tone: "loss" },
  { key: "noi", label: "NOI", kind: "money", tone: "sage" },
  { key: "interest", label: "Mortgage interest", kind: "money", tone: "loss" },
  { key: "principalPaid", label: "Principal paid", kind: "money", tone: "muted" },
  { key: "debtService", label: "Debt service", kind: "money", tone: "loss" },
  { key: "depreciation", label: "Depreciation", kind: "money", tone: "muted" },
  { key: "taxableIncome", label: "Taxable income", kind: "money" },
  { key: "taxPaid", label: "Tax on the property", kind: "money", tone: "loss" },
  { key: "w2Shield", label: "W-2 tax shield", kind: "money", tone: "sage" },
  { key: "atcf", label: "After-tax cash flow", kind: "money", tone: "sage" },
  { key: "equity", label: "Estimated equity", kind: "money" },
];

export function LedgerTab({ comparison }: { comparison: Comparison }) {
  const years = comparison.strategy.years;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ten-year ledger</CardTitle>
        <CardDescription>
          Interest is from a 12-month amortizing schedule. Depreciation follows
          MACRS half-year (5- and 15-year) and mid-month (27.5-year). Cash flow
          adds the W-2 shield the original model skipped.
        </CardDescription>
      </CardHeader>
      <CardContent className="-mx-5 overflow-x-auto px-5">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs tracking-wide text-muted-foreground uppercase">
              <th className="sticky left-0 bg-card py-3 pr-4 font-medium">Line</th>
              {years.map((y) => (
                <th key={y.year} className="px-3 py-3 text-right font-medium tabular-nums">
                  Y{y.year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, idx) => (
              <tr
                key={row.label}
                className={cn(
                  "border-b border-border/70",
                  idx === 2 || idx === 10 ? "bg-muted/40" : "",
                )}
              >
                <th className="sticky left-0 bg-card py-3 pr-4 font-medium text-foreground">
                  {row.label}
                </th>
                {years.map((y) => {
                  const raw = y[row.key as keyof YearResult];
                  const num = typeof raw === "number" ? raw : 0;
                  const display =
                    row.key === "opex" ||
                    row.key === "interest" ||
                    row.key === "debtService" ||
                    row.key === "depreciation" ||
                    row.key === "taxPaid"
                      ? money(-Math.abs(num))
                      : money(num);
                  return (
                    <td
                      key={y.year}
                      className={cn(
                        "px-3 py-3 text-right tabular-nums",
                        row.tone === "sage" && "text-sage",
                        row.tone === "loss" && "text-terracotta",
                        row.tone === "muted" && "text-muted-foreground",
                        !row.tone && "text-foreground",
                      )}
                    >
                      {display}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
