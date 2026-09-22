import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { occupancySweep, type Comparison } from "@/lib/finance";
import { compactMoney, money, pct } from "@/lib/format";
import { ChartTip, chartAxis, chartGrid } from "./charts";

export function OverviewTab({ comparison }: { comparison: Comparison }) {
  const { strategy, baseline } = comparison;
  const series = strategy.years.map((y, i) => ({
    name: `Y${y.year}`,
    Revenue: Math.round(y.grossRevenue),
    Expenses: Math.round(y.opex),
    "After-tax cash": Math.round(y.atcf),
    "Baseline cash": Math.round(baseline.years[i]?.atcf ?? 0),
    Depreciation: Math.round(y.depreciation),
    "Taxable income": Math.round(y.taxableIncome),
  }));

  const mix = [
    {
      name: "Peak",
      nights: strategy.inputs.peakDays * (strategy.inputs.peakOcc / 100),
      adr: strategy.inputs.peakAdr,
    },
    {
      name: "Shoulder",
      nights: strategy.inputs.shoulderDays * (strategy.inputs.shoulderOcc / 100),
      adr: strategy.inputs.shoulderAdr,
    },
    {
      name: "Low",
      nights: strategy.inputs.lowDays * (strategy.inputs.lowOcc / 100),
      adr: strategy.inputs.lowAdr,
    },
  ];
  const maxNights = Math.max(...mix.map((m) => m.nights), 1);

  const sweep = occupancySweep(strategy.inputs, [-20, -10, 0, 10, 20]);
  const maxAbsAtcf = Math.max(...sweep.map((s) => Math.abs(s.atcf)), 1);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Ten-year cash engine</CardTitle>
          <CardDescription>
            Revenue grows with ADR. Expenses inflate. Debt service is the real
            amortizing note, not interest-only.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid {...chartGrid} />
              <XAxis dataKey="name" {...chartAxis} />
              <YAxis {...chartAxis} tickFormatter={(v) => compactMoney(Number(v))} />
              <Tooltip content={<ChartTip />} />
              <Bar dataKey="Revenue" fill="var(--color-chart-3)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Expenses" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="After-tax cash"
                stroke="var(--color-sage)"
                strokeWidth={2.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Baseline cash"
                stroke="var(--color-chart-4)"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Depreciation vs taxable income</CardTitle>
          <CardDescription>
            Year 1 is the cost-seg / bonus cliff. Later years revert toward 27.5-year
            straight line.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid {...chartGrid} />
              <XAxis dataKey="name" {...chartAxis} />
              <YAxis {...chartAxis} tickFormatter={(v) => compactMoney(Number(v))} />
              <Tooltip content={<ChartTip />} />
              <Area
                type="monotone"
                dataKey="Depreciation"
                fill="var(--color-sage-dim)"
                stroke="var(--color-sage)"
              />
              <Line
                type="monotone"
                dataKey="Taxable income"
                stroke="var(--color-chart-3)"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Season mix</CardTitle>
          <CardDescription>Occupied nights weighted by the ADR you typed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mix.map((row) => (
            <div key={row.name} className="space-y-1.5">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted-foreground">{row.name}</span>
                <span className="tabular-nums text-foreground">
                  {row.nights.toFixed(0)} nts · {money(row.adr)} ADR
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-sage"
                  style={{ width: `${(row.nights / maxNights) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <p className="pt-2 text-xs text-muted-foreground">
            Gross yield {pct(strategy.grossYield)} on purchase price. Cash in{" "}
            {money(strategy.basis.cashInvested)}.
          </p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Occupancy sensitivity</CardTitle>
          <CardDescription>
            Same ADRs, occupancy shifted across all three seasons. The tax shield
            barely moves — paper losses are mostly depreciation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {sweep.map((row) => (
            <div key={row.delta} className="grid grid-cols-[5rem_1fr_7rem] items-center gap-3">
              <span className="text-xs tabular-nums text-muted-foreground">
                {row.delta === 0 ? "Base" : `${row.delta > 0 ? "+" : ""}${row.delta} pts`}
              </span>
              <div className="h-8 overflow-hidden rounded-md bg-muted">
                <div
                  className={row.atcf >= 0 ? "h-8 bg-sage/80" : "h-8 bg-terracotta/80"}
                  style={{ width: `${Math.max(8, (Math.abs(row.atcf) / maxAbsAtcf) * 100)}%` }}
                />
              </div>
              <span className="text-right text-sm tabular-nums text-foreground">
                {money(row.atcf)}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
