import { money, pct } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Comparison } from "@/lib/finance";

function tone(n: number): string {
  if (n > 0) return "text-sage";
  if (n < 0) return "text-terracotta";
  return "text-foreground";
}

function Kpi({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className={cn("mt-2 font-display text-2xl tabular-nums tracking-tight", className)}>
        {value}
      </p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function KpiStrip({ comparison }: { comparison: Comparison }) {
  const { strategy, extraYear1Shield } = comparison;
  const y = strategy.year1;
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
      <Kpi
        label="Gross revenue"
        value={money(y.grossRevenue)}
        hint={`${y.occupiedNights.toFixed(0)} occupied nights`}
      />
      <Kpi label="NOI" value={money(y.noi)} hint={`Cap rate ${pct(strategy.capRate)}`} />
      <Kpi
        label="Year 1 taxable"
        value={money(y.taxableIncome)}
        className={tone(y.taxableIncome)}
        hint={
          strategy.lossesAllowed
            ? "Losses can offset ordinary income"
            : "Passive — losses suspended"
        }
      />
      <Kpi
        label="W-2 tax shield"
        value={money(y.w2Shield)}
        className={tone(y.w2Shield)}
        hint={
          extraYear1Shield > 0
            ? `${money(extraYear1Shield)} more than straight-line`
            : "From usable paper losses"
        }
      />
      <Kpi
        label="After-tax cash"
        value={money(y.atcf)}
        className={tone(y.atcf)}
        hint={`Cash-on-cash ${pct(strategy.coc)}`}
      />
      <Kpi
        label="DSCR"
        value={strategy.dscr.toFixed(2)}
        className={strategy.dscr >= 1.25 ? "text-sage" : "text-terracotta"}
        hint="NOI / annual debt service"
      />
    </div>
  );
}
