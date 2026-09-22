import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { money, pctPoints } from "@/lib/format";
import { monthName } from "@/lib/format";
import { occupancyMix } from "@/lib/finance";
import { useSim } from "@/store/simulator";
import { FieldNumber, FieldSlider, FieldSwitch, Section } from "./fields";

export function ParamsPanel() {
  const inputs = useSim((s) => s.inputs);
  const patch = useSim((s) => s.patch);
  const reset = useSim((s) => s.reset);
  const mix = occupancyMix(inputs);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 px-5 pt-5">
        <div>
          <p className="font-display text-lg text-foreground">Assumptions</p>
          <p className="text-xs text-muted-foreground">
            Live model. Nothing is filed with the IRS.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={reset} className="shrink-0">
          <RotateCcw />
          Reset
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-8">
        <Section title="Property and loan">
          <FieldNumber
            id="purchasePrice"
            label="Purchase price"
            value={inputs.purchasePrice}
            onChange={(v) => patch({ purchasePrice: v })}
            step={10000}
            min={0}
            display={money(inputs.purchasePrice)}
          />
          <FieldSlider
            id="landValuePct"
            label="Land share of price"
            value={inputs.landValuePct}
            onChange={(v) => patch({ landValuePct: v })}
            min={10}
            max={45}
            display={pctPoints(inputs.landValuePct)}
          />
          <FieldNumber
            id="closingCosts"
            label="Closing costs"
            value={inputs.closingCosts}
            onChange={(v) => patch({ closingCosts: v })}
            step={500}
            min={0}
            display={money(inputs.closingCosts)}
          />
          <FieldNumber
            id="ffe"
            label="Furniture and equipment"
            value={inputs.ffe}
            onChange={(v) => patch({ ffe: v })}
            step={1000}
            min={0}
            display={money(inputs.ffe)}
          />
          <FieldNumber
            id="mortgageAmount"
            label="Mortgage"
            value={inputs.mortgageAmount}
            onChange={(v) => patch({ mortgageAmount: v })}
            step={10000}
            min={0}
            display={money(inputs.mortgageAmount)}
          />
          <FieldSlider
            id="interestRate"
            label="Interest rate"
            value={inputs.interestRate}
            onChange={(v) => patch({ interestRate: v })}
            min={2}
            max={12}
            step={0.1}
            display={`${inputs.interestRate.toFixed(1)}%`}
          />
          <FieldSlider
            id="loanTermYears"
            label="Term"
            value={inputs.loanTermYears}
            onChange={(v) => patch({ loanTermYears: v })}
            min={10}
            max={30}
            step={1}
            display={`${inputs.loanTermYears} years`}
          />
          <div className="space-y-1.5">
            <Label htmlFor="placedInServiceMonth">Placed in service</Label>
            <select
              id="placedInServiceMonth"
              className="flex h-11 w-full rounded-md border border-input bg-muted px-3 text-sm text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
              value={inputs.placedInServiceMonth}
              onChange={(e) => patch({ placedInServiceMonth: Number(e.target.value) })}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {monthName(m)}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground">
              Mid-month convention for 27.5-year property.
            </p>
          </div>
        </Section>

        <Section title="Seasons">
          <p className="text-xs text-muted-foreground">
            {mix.occupiedNights.toFixed(0)} occupied nights · {mix.bookings.toFixed(0)}{" "}
            turns at a {inputs.avgStayNights}-night stay
          </p>
          <FieldNumber
            id="peakAdr"
            label="Peak ADR"
            value={inputs.peakAdr}
            onChange={(v) => patch({ peakAdr: v })}
            step={10}
            display={money(inputs.peakAdr)}
          />
          <FieldSlider
            id="peakOcc"
            label="Peak occupancy"
            value={inputs.peakOcc}
            onChange={(v) => patch({ peakOcc: v })}
            min={10}
            max={95}
            display={pctPoints(inputs.peakOcc)}
          />
          <FieldNumber
            id="shoulderAdr"
            label="Shoulder ADR"
            value={inputs.shoulderAdr}
            onChange={(v) => patch({ shoulderAdr: v })}
            step={10}
            display={money(inputs.shoulderAdr)}
          />
          <FieldSlider
            id="shoulderOcc"
            label="Shoulder occupancy"
            value={inputs.shoulderOcc}
            onChange={(v) => patch({ shoulderOcc: v })}
            min={10}
            max={95}
            display={pctPoints(inputs.shoulderOcc)}
          />
          <FieldNumber
            id="lowAdr"
            label="Low-season ADR"
            value={inputs.lowAdr}
            onChange={(v) => patch({ lowAdr: v })}
            step={10}
            display={money(inputs.lowAdr)}
          />
          <FieldSlider
            id="lowOcc"
            label="Low-season occupancy"
            value={inputs.lowOcc}
            onChange={(v) => patch({ lowOcc: v })}
            min={5}
            max={95}
            display={pctPoints(inputs.lowOcc)}
          />
          <FieldSlider
            id="avgStayNights"
            label="Average stay"
            value={inputs.avgStayNights}
            onChange={(v) => patch({ avgStayNights: v })}
            min={1}
            max={14}
            display={`${inputs.avgStayNights} nights`}
          />
        </Section>

        <Section title="Operating costs" defaultOpen={false}>
          <FieldNumber
            id="cleaningFee"
            label="Cleaning fee (guest-paid)"
            value={inputs.cleaningFee}
            onChange={(v) => patch({ cleaningFee: v })}
            step={10}
            display={money(inputs.cleaningFee)}
          />
          <FieldSlider
            id="cleaningCostRatio"
            label="Host cleaning cost"
            value={inputs.cleaningCostRatio}
            onChange={(v) => patch({ cleaningCostRatio: v })}
            min={0}
            max={100}
            display={pctPoints(inputs.cleaningCostRatio)}
          />
          <FieldNumber
            id="utilities"
            label="Utilities"
            value={inputs.utilities}
            onChange={(v) => patch({ utilities: v })}
            step={250}
            display={money(inputs.utilities)}
          />
          <FieldNumber
            id="insurance"
            label="Insurance"
            value={inputs.insurance}
            onChange={(v) => patch({ insurance: v })}
            step={250}
            display={money(inputs.insurance)}
          />
          <FieldNumber
            id="propertyTax"
            label="Property tax"
            value={inputs.propertyTax}
            onChange={(v) => patch({ propertyTax: v })}
            step={250}
            display={money(inputs.propertyTax)}
          />
          <FieldNumber
            id="maintenance"
            label="Maintenance"
            value={inputs.maintenance}
            onChange={(v) => patch({ maintenance: v })}
            step={250}
            display={money(inputs.maintenance)}
          />
          <FieldNumber
            id="supplies"
            label="Supplies"
            value={inputs.supplies}
            onChange={(v) => patch({ supplies: v })}
            step={100}
            display={money(inputs.supplies)}
          />
          <FieldSlider
            id="platformFeePct"
            label="Platform fee"
            value={inputs.platformFeePct}
            onChange={(v) => patch({ platformFeePct: v })}
            min={0}
            max={20}
            step={0.5}
            display={`${inputs.platformFeePct}% of room revenue`}
          />
          <FieldSlider
            id="pmFeePct"
            label="Property management"
            value={inputs.pmFeePct}
            onChange={(v) => patch({ pmFeePct: v })}
            min={0}
            max={30}
            display={pctPoints(inputs.pmFeePct)}
          />
          <FieldNumber
            id="hoa"
            label="HOA"
            value={inputs.hoa}
            onChange={(v) => patch({ hoa: v })}
            step={100}
            display={money(inputs.hoa)}
          />
        </Section>

        <Section title="Tax strategy">
          <FieldSlider
            id="taxRatePct"
            label="Combined ordinary rate"
            value={inputs.taxRatePct}
            onChange={(v) => patch({ taxRatePct: v })}
            min={10}
            max={50}
            display={pctPoints(inputs.taxRatePct)}
          />
          <FieldSlider
            id="costSegPct"
            label="Cost segregation"
            value={inputs.costSegPct}
            onChange={(v) => patch({ costSegPct: v })}
            min={0}
            max={50}
            step={1}
            display={`${inputs.costSegPct}% of building reclassified`}
          />
          <FieldSlider
            id="personalSharePct"
            label="Share of study that is 5-year"
            value={inputs.personalSharePct}
            onChange={(v) => patch({ personalSharePct: v })}
            min={20}
            max={80}
            display={pctPoints(inputs.personalSharePct)}
          />
          <FieldSwitch
            id="applyBonus"
            label="Bonus depreciation"
            description="100% additional first-year depreciation on 5- and 15-year property acquired after Jan 19, 2025 (IRC §168(k), Notice 2026-11)."
            checked={inputs.applyBonus}
            onChange={(v) => patch({ applyBonus: v })}
          />
          {inputs.applyBonus ? (
            <FieldSlider
              id="bonusPct"
              label="Bonus percentage"
              value={inputs.bonusPct}
              onChange={(v) => patch({ bonusPct: v })}
              min={0}
              max={100}
              step={5}
              display={pctPoints(inputs.bonusPct)}
            />
          ) : null}
          <FieldSwitch
            id="materialParticipation"
            label="Material participation"
            description="Needed for the short-term rental exception so Year 1 losses can offset W-2 income."
            checked={inputs.materialParticipation}
            onChange={(v) => patch({ materialParticipation: v })}
          />
          <FieldSwitch
            id="qbiEnabled"
            label="Section 199A (QBI)"
            description="20% deduction on positive qualified business income. Does not enlarge a loss."
            checked={inputs.qbiEnabled}
            onChange={(v) => patch({ qbiEnabled: v })}
          />
        </Section>

        <Section title="Growth" defaultOpen={false}>
          <FieldSlider
            id="revenueGrowthPct"
            label="ADR growth"
            value={inputs.revenueGrowthPct}
            onChange={(v) => patch({ revenueGrowthPct: v })}
            min={0}
            max={8}
            step={0.5}
            display={`${inputs.revenueGrowthPct}% / year`}
          />
          <FieldSlider
            id="opexInflationPct"
            label="Expense inflation"
            value={inputs.opexInflationPct}
            onChange={(v) => patch({ opexInflationPct: v })}
            min={0}
            max={8}
            step={0.5}
            display={`${inputs.opexInflationPct}% / year`}
          />
          <FieldSlider
            id="appreciationPct"
            label="Appreciation"
            value={inputs.appreciationPct}
            onChange={(v) => patch({ appreciationPct: v })}
            min={0}
            max={8}
            step={0.5}
            display={`${inputs.appreciationPct}% / year`}
          />
        </Section>
      </div>
    </div>
  );
}
