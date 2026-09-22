import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Comparison } from "@/lib/finance";
import { money } from "@/lib/format";
import { cn } from "@/lib/utils";

type SliceId = "land" | "real" | "improve" | "personal";

const SLICES: {
  id: SliceId;
  label: string;
  life: string;
  bonus: boolean;
  swatch: string;
}[] = [
  { id: "land", label: "Land", life: "Non-depreciable", bonus: false, swatch: "bg-muted-foreground/40" },
  { id: "real", label: "Building structure", life: "27.5-year MACRS", bonus: false, swatch: "bg-chart-4" },
  { id: "improve", label: "Land improvements", life: "15-year MACRS", bonus: true, swatch: "bg-sage" },
  { id: "personal", label: "Personal property + FF&E", life: "5-year MACRS", bonus: true, swatch: "bg-chart-3" },
];

export function TaxTab({ comparison }: { comparison: Comparison }) {
  const { strategy, baseline, extraYear1Dep, extraYear1Shield } = comparison;
  const b = strategy.basis;
  const y = strategy.year1;
  const values: Record<SliceId, number> = {
    land: b.landBasis,
    real: b.realProp,
    improve: b.landImprov,
    personal: b.personalProp + b.ffe,
  };
  const total = Object.values(values).reduce((s, v) => s + v, 0) || 1;
  const [active, setActive] = useState<SliceId>("personal");

  const waterfall = [
    { label: "NOI", value: y.noi },
    { label: "Interest", value: -y.interest },
    { label: "Depreciation", value: -y.depreciation },
    { label: "QBI", value: -y.qbiDeduction },
    { label: "Taxable", value: y.taxableIncome },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Depreciable map</CardTitle>
          <CardDescription>
            Land never depreciates. Cost segregation pulls basis out of 27.5-year
            property into 5- and 15-year classes that can take bonus.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <HouseDiagram active={active} onSelect={setActive} />
          <div className="flex h-28 overflow-hidden rounded-lg">
            {SLICES.map((slice) => (
              <button
                key={slice.id}
                type="button"
                onClick={() => setActive(slice.id)}
                className={cn(
                  "relative flex min-w-8 flex-col justify-end p-2 text-left transition-opacity duration-150",
                  slice.swatch,
                  active === slice.id ? "opacity-100" : "opacity-70 hover:opacity-90",
                )}
                style={{ flexGrow: Math.max(values[slice.id], total * 0.04) }}
              >
                <span className="text-[10px] font-medium text-primary-foreground/90">
                  {slice.label}
                </span>
                <span className="text-xs tabular-nums font-medium text-primary-foreground">
                  {money(values[slice.id])}
                </span>
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Width is basis. Click a class. Year 1 bonus sits on 5- and 15-year
            property only — {money(y.depBonus)} this run.
          </p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>{SLICES.find((s) => s.id === active)?.label}</CardTitle>
            {SLICES.find((s) => s.id === active)?.bonus ? (
              <Badge variant="sage">Bonus eligible</Badge>
            ) : (
              <Badge>No bonus</Badge>
            )}
          </div>
          <CardDescription>{SLICES.find((s) => s.id === active)?.life}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Stat label="Allocated basis" value={money(values[active])} />
          <Stat
            label="Share of total cost"
            value={`${((values[active] / total) * 100).toFixed(1)}%`}
          />
          <Stat
            label="Year 1 deduction from this class"
            value={money(
              active === "land"
                ? 0
                : active === "real"
                  ? y.dep27
                  : active === "improve"
                    ? y.depBonus * (b.landImprov / (b.personalProp + b.ffe + b.landImprov || 1)) +
                      y.dep15
                    : y.depBonus * ((b.personalProp + b.ffe) / (b.personalProp + b.ffe + b.landImprov || 1)) +
                      y.dep5,
            )}
          />
          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground">Year 1 paper loss</p>
            <p className="mt-1 font-display text-2xl tabular-nums text-terracotta">
              {money(y.taxableIncome)}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              At {strategy.inputs.taxRatePct}% ordinary rate that is a{" "}
              <span className="text-sage">{money(y.w2Shield)}</span> shield against
              other income — if you materially participate and average stay is 7
              nights or less.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Year 1 waterfall</CardTitle>
          <CardDescription>How NOI becomes a tax loss.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {waterfall.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[8rem_1fr_7rem] items-center gap-3 text-sm"
              >
                <span className="text-muted-foreground">{row.label}</span>
                <div className="h-7 rounded-md bg-muted">
                  <div
                    className={cn(
                      "h-7 rounded-md",
                      row.value >= 0 ? "bg-sage/70" : "bg-terracotta/70",
                    )}
                    style={{
                      width: `${Math.min(100, (Math.abs(row.value) / Math.max(y.noi, y.depreciation, 1)) * 100)}%`,
                    }}
                  />
                </div>
                <span className="text-right tabular-nums text-foreground">
                  {money(row.value)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Cost seg vs straight-line</CardTitle>
          <CardDescription>
            Same house, same loan. Only the recovery lives change.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <CompareCell label="Strategy dep" value={money(strategy.year1.depreciation)} />
            <CompareCell label="Baseline dep" value={money(baseline.year1.depreciation)} />
            <CompareCell label="Extra deduction" value={money(extraYear1Dep)} accent />
            <CompareCell label="Extra tax shield" value={money(extraYear1Shield)} accent />
          </div>
          <Qualification strategy={strategy} />
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm tabular-nums text-foreground">{value}</span>
    </div>
  );
}

function CompareCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg bg-muted p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p
        className={cn(
          "mt-1 text-sm tabular-nums font-medium",
          accent ? "text-sage" : "text-foreground",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function Qualification({ strategy }: { strategy: Comparison["strategy"] }) {
  const stayOk = strategy.avgStayQualifiesStr;
  const mp = strategy.inputs.materialParticipation;
  return (
    <ul className="space-y-2 text-xs text-muted-foreground">
      <li className={stayOk ? "text-sage" : "text-terracotta"}>
        {stayOk
          ? `Average stay ${strategy.inputs.avgStayNights} nights — qualifies as short-term.`
          : `Average stay ${strategy.inputs.avgStayNights} nights — above the 7-night STR test.`}
      </li>
      <li className={mp ? "text-sage" : "text-terracotta"}>
        {mp
          ? "Material participation on — losses treated as non-passive."
          : "No material participation — Year 1 loss is suspended PAL."}
      </li>
      <li>
        Bonus applies only to MACRS lives of 20 years or less. The 27.5-year
        shell never takes §168(k).
      </li>
    </ul>
  );
}

function HouseDiagram({
  active,
  onSelect,
}: {
  active: SliceId;
  onSelect: (id: SliceId) => void;
}) {
  const dim = (id: SliceId) => (active === id ? 1 : 0.45);
  return (
    <svg viewBox="0 0 560 260" className="w-full" role="img" aria-label="Rainbow House asset diagram">
      <rect x="0" y="0" width="560" height="260" fill="var(--color-muted)" rx="12" />
      <rect
        x="24"
        y="188"
        width="512"
        height="48"
        rx="6"
        fill="var(--color-muted-foreground)"
        opacity={dim("land")}
        className="cursor-pointer"
        onClick={() => onSelect("land")}
      />
      <text x="40" y="218" fill="var(--color-background)" fontSize="11" fontFamily="Figtree, sans-serif">
        Land
      </text>
      <rect
        x="72"
        y="210"
        width="168"
        height="14"
        rx="3"
        fill="var(--color-sage)"
        opacity={dim("improve")}
        className="cursor-pointer"
        onClick={() => onSelect("improve")}
      />
      <rect
        x="96"
        y="86"
        width="248"
        height="124"
        rx="6"
        fill="var(--color-chart-4)"
        opacity={dim("real")}
        className="cursor-pointer"
        onClick={() => onSelect("real")}
      />
      <polygon
        points="88,90 220,28 352,90"
        fill="var(--color-chart-4)"
        opacity={dim("real")}
        className="cursor-pointer"
        onClick={() => onSelect("real")}
      />
      <rect
        x="128"
        y="128"
        width="56"
        height="82"
        fill="var(--color-background)"
        opacity={0.35}
      />
      <rect
        x="208"
        y="118"
        width="48"
        height="40"
        fill="var(--color-chart-3)"
        opacity={dim("personal")}
        className="cursor-pointer"
        onClick={() => onSelect("personal")}
      />
      <rect
        x="268"
        y="150"
        width="44"
        height="60"
        fill="var(--color-chart-3)"
        opacity={dim("personal")}
        className="cursor-pointer"
        onClick={() => onSelect("personal")}
      />
      <rect
        x="368"
        y="150"
        width="120"
        height="60"
        rx="6"
        fill="var(--color-sage)"
        opacity={dim("improve")}
        className="cursor-pointer"
        onClick={() => onSelect("improve")}
      />
      <ellipse
        cx="428"
        cy="168"
        rx="38"
        ry="10"
        fill="var(--color-background)"
        opacity={0.25}
      />
      <text x="108" y="78" fill="var(--color-foreground)" fontSize="11" fontFamily="Figtree, sans-serif" opacity="0.8">
        27.5-year structure
      </text>
      <text x="372" y="140" fill="var(--color-foreground)" fontSize="11" fontFamily="Figtree, sans-serif" opacity="0.8">
        15-year pool / site
      </text>
      <text x="204" y="108" fill="var(--color-foreground)" fontSize="11" fontFamily="Figtree, sans-serif" opacity="0.8">
        5-year FF&E
      </text>
    </svg>
  );
}
