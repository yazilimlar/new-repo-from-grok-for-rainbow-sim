import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function FieldNumber({
  id,
  label,
  value,
  onChange,
  step = 1,
  min,
  max,
  display,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
  display?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>{label}</Label>
        {display ? (
          <span className="text-sm tabular-nums text-foreground">{display}</span>
        ) : null}
      </div>
      <Input
        id={id}
        type="number"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

export function FieldSlider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  display,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  display: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-sm tabular-nums text-foreground">{display}</span>
      </div>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(v) => onChange(v[0] ?? value)}
      />
    </div>
  );
}

export function FieldSwitch({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-1">
        <Label htmlFor={id} className="normal-case tracking-normal text-foreground">
          {label}
        </Label>
        {description ? (
          <p className="text-xs leading-snug text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

export function Section({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="group border-b border-border py-4 last:border-b-0"
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground select-none",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        {title}
        <ChevronDown className="size-4 text-muted-foreground transition-transform duration-150 group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-4">{children}</div>
    </details>
  );
}
