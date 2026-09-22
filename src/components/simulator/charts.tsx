import type { TooltipProps } from "recharts";
import { money } from "@/lib/format";

type PayloadItem = {
  name?: string;
  value?: number;
  color?: string;
};

export function ChartTip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="mb-1.5 text-muted-foreground">{label}</p>
      <ul className="space-y-1">
        {(payload as PayloadItem[]).map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span
                className="size-2 rounded-full"
                style={{ background: item.color }}
              />
              {item.name}
            </span>
            <span className="tabular-nums text-foreground">
              {money(item.value ?? 0)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const chartAxis = {
  stroke: "var(--color-border)",
  tick: { fill: "var(--color-muted-foreground)", fontSize: 11 },
};

export const chartGrid = {
  stroke: "var(--color-border)",
  strokeDasharray: "3 3",
  vertical: false,
};
