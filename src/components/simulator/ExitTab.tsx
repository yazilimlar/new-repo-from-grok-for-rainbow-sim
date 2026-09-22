import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Comparison, SaleResult } from "@/lib/finance";
import { compactMoney, money, pct } from "@/lib/format";
import { ChartTip, chartAxis, chartGrid } from "./charts";

export function ExitTab({ comparison }: { comparison: Comparison }) {
  const { strategy } = comparison;
  const wealth = strategy.years.map((y) => ({
    name: `Y${y.year}`,
    Equity: Math.round(y.equity),
    "Cumulative cash": Math.round(y.cumulativeAtcf),
    "Loan balance": Math.round(y.remainingBalance),
  }));

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Equity and cash</CardTitle>
          <CardDescription>
            Equity is appreciated value minus remaining principal. Cash is
            after-tax, including any W-2 shield.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={wealth} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid {...chartGrid} />
              <XAxis dataKey="name" {...chartAxis} />
              <YAxis {...chartAxis} tickFormatter={(v) => compactMoney(Number(v))} />
              <Tooltip content={<ChartTip />} />
              <Line type="monotone" dataKey="Equity" stroke="var(--color-sage)" strokeWidth={2.5} dot={false} />
              <Line
                type="monotone"
                dataKey="Cumulative cash"
                stroke="var(--color-chart-3)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Loan balance"
                stroke="var(--color-chart-4)"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <SaleCard title="If you sell in year 5" sale={strategy.saleYear5} cashIn={strategy.basis.cashInvested} />
      <SaleCard
        title="If you sell in year 10"
        sale={strategy.saleYear10}
        cashIn={strategy.basis.cashInvested}
        irr={strategy.holdIrr}
      />
    </div>
  );
}

function SaleCard({
  title,
  sale,
  cashIn,
  irr,
}: {
  title: string;
  sale: SaleResult;
  cashIn: number;
  irr?: number | null;
}) {
  const rows = [
    ["Sale price", money(sale.salePrice)],
    ["Selling costs", money(-sale.sellingCosts)],
    ["Loan payoff", money(-sale.remainingBalance)],
    ["Adjusted basis", money(sale.adjustedBasis)],
    ["Total gain", money(sale.gain)],
    ["§1245 recapture (ordinary)", money(sale.recapture1245)],
    ["Unrecaptured §1250 (up to 25%)", money(sale.unrecaptured1250)],
    ["Long-term capital gain", money(sale.ltcg)],
    ["Tax on sale", money(-sale.taxOnSale)],
    ["Net proceeds after tax", money(sale.netEquityProceeds)],
    ["Cash taken out along the way", money(sale.cumulativeAtcf)],
    ["Profit vs cash in", money(sale.totalProfit)],
  ] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Cost segregation is a timing benefit. Sale recapture gives a large
          piece back — modeled here so the shield is not treated as free money.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-3 text-sm">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="tabular-nums text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 rounded-lg bg-muted p-4">
          <p className="text-xs text-muted-foreground">Cash in</p>
          <p className="font-display text-xl tabular-nums">{money(cashIn)}</p>
          {irr != null ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Levered IRR to this sale:{" "}
              <span className="text-sage">{pct(irr)}</span>
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
