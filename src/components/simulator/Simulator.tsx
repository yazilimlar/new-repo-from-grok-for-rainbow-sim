import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRESETS, type PresetId } from "@/lib/defaults";
import { compare } from "@/lib/finance";
import { cn } from "@/lib/utils";
import { loadPersistedInputs, persistInputs, useSim } from "@/store/simulator";
import { ExitTab } from "./ExitTab";
import { KpiStrip } from "./KpiStrip";
import { LedgerTab } from "./LedgerTab";
import { OverviewTab } from "./OverviewTab";
import { ParamsPanel } from "./ParamsPanel";
import { TaxTab } from "./TaxTab";

export function Simulator() {
  const inputs = useSim((s) => s.inputs);
  const applyPreset = useSim((s) => s.applyPreset);
  const hydrate = useSim((s) => s.hydrate);
  const [sheetOpen, setSheetOpen] = useState(false);
  const comparison = useMemo(() => compare(inputs), [inputs]);

  useEffect(() => {
    const saved = loadPersistedInputs();
    if (saved) hydrate(saved);
  }, [hydrate]);

  useEffect(() => {
    persistInputs(inputs);
  }, [inputs]);

  const activePreset = (Object.keys(PRESETS) as PresetId[]).find((id) => {
    const p = PRESETS[id];
    return (
      p.peakOcc === inputs.peakOcc &&
      p.shoulderOcc === inputs.shoulderOcc &&
      p.lowOcc === inputs.lowOcc
    );
  });

  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95">
        <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-sage uppercase">
                STR tax studio
              </p>
              <h1 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                Rainbow House
              </h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setSheetOpen(true)}
            >
              <SlidersHorizontal />
              Assumptions
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">Occupancy</span>
            <div className="flex rounded-lg bg-muted p-1">
              {(Object.keys(PRESETS) as PresetId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => applyPreset(id)}
                  className={cn(
                    "h-9 rounded-md px-3 text-sm",
                    activePreset === id
                      ? "bg-card text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {PRESETS[id].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]">
        <aside className="hidden h-[calc(100dvh-5.5rem)] border-r border-border lg:sticky lg:top-[5.5rem] lg:block lg:overflow-hidden">
          <ParamsPanel />
        </aside>

        <main className="min-w-0 space-y-5 px-4 py-5 sm:px-6">
          <KpiStrip comparison={comparison} />
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tax">Asset & tax map</TabsTrigger>
              <TabsTrigger value="ledger">Ledger</TabsTrigger>
              <TabsTrigger value="exit">Hold vs sell</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverviewTab comparison={comparison} />
            </TabsContent>
            <TabsContent value="tax">
              <TaxTab comparison={comparison} />
            </TabsContent>
            <TabsContent value="ledger">
              <LedgerTab comparison={comparison} />
            </TabsContent>
            <TabsContent value="exit">
              <ExitTab comparison={comparison} />
            </TabsContent>
          </Tabs>
          <p className="max-w-3xl pb-8 text-xs leading-relaxed text-muted-foreground">
            Educational model, not tax, legal, or investment advice. Cost
            segregation requires a study. Bonus depreciation follows IRC §168(k)
            as amended by the One Big Beautiful Bill and IRS Notice 2026-11 —
            100% additional first-year depreciation for qualified property
            acquired after January 19, 2025. Short-term rental losses offset
            ordinary income only if the average stay is 7 days or less and you
            materially participate. Recapture on sale is estimated.
          </p>
        </main>
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Assumptions</SheetTitle>
          </SheetHeader>
          <div className="min-h-0 flex-1 overflow-hidden">
            <ParamsPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
