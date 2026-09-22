import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { DEFAULT_INPUTS } from "./defaults.ts";
import {
  amortizeYears,
  compare,
  monthlyPayment,
  occupancyMix,
  project,
  splitBasis,
} from "./finance.ts";

describe("Rainbow House engine", () => {
  it("prices a 30-year 6.5% mortgage near $2,844 / month", () => {
    const pmt = monthlyPayment(450_000, 6.5, 30);
    assert.ok(Math.abs(pmt - 2844.31) < 0.5, `pmt=${pmt}`);
  });

  it("excludes land from depreciable basis", () => {
    const basis = splitBasis(DEFAULT_INPUTS);
    const landPct = DEFAULT_INPUTS.landValuePct / 100;
    assert.ok(basis.landBasis > 0);
    assert.ok(
      Math.abs(basis.landBasis - (DEFAULT_INPUTS.purchasePrice + DEFAULT_INPUTS.closingCosts) * landPct) < 1,
    );
    assert.equal(
      Math.round(basis.realProp + basis.personalProp + basis.landImprov),
      Math.round(basis.buildingBasis),
    );
  });

  it("takes 100% bonus on 5- and 15-year property in year 1", () => {
    const model = project(DEFAULT_INPUTS);
    const expectedBonus = model.basis.personalProp + model.basis.landImprov + model.basis.ffe;
    assert.ok(Math.abs(model.year1.depBonus - expectedBonus) < 1);
    assert.equal(model.year1.dep5, 0);
    assert.equal(model.year1.dep15, 0);
    assert.ok(model.year1.dep27 > 0);
    assert.ok(model.years[1]!.depBonus === 0);
    assert.ok(model.years[1]!.depreciation < model.year1.depreciation / 2);
  });

  it("uses 20% MACRS year 1 when bonus is off", () => {
    const model = project({ ...DEFAULT_INPUTS, applyBonus: false });
    const personal5 = model.basis.personalProp + model.basis.ffe;
    assert.equal(model.year1.depBonus, 0);
    assert.ok(Math.abs(model.year1.dep5 - personal5 * 0.2) < 1);
    assert.ok(Math.abs(model.year1.dep15 - model.basis.landImprov * 0.05) < 1);
  });

  it("creates a W-2 tax shield when STR losses are allowed", () => {
    const model = project(DEFAULT_INPUTS);
    assert.ok(model.year1.taxableBeforeQbi < 0);
    assert.ok(model.year1.w2Shield > 0);
    assert.equal(model.year1.taxPaid, 0);
    const expected = -model.year1.taxableIncome * (DEFAULT_INPUTS.taxRatePct / 100);
    assert.ok(Math.abs(model.year1.w2Shield - expected) < 1);
  });

  it("suspends losses without material participation", () => {
    const model = project({ ...DEFAULT_INPUTS, materialParticipation: false });
    assert.equal(model.year1.w2Shield, 0);
    assert.ok(model.year1.suspendedLossCarry > 0);
    assert.equal(model.year1.taxableIncome, 0);
  });

  it("cost segregation increases year-1 depreciation vs straight-line building", () => {
    const { extraYear1Dep, extraYear1Shield } = compare(DEFAULT_INPUTS);
    assert.ok(extraYear1Dep > 50_000);
    assert.ok(extraYear1Shield > 10_000);
  });

  it("keeps interest + principal equal to annual debt service in year 1", () => {
    const rows = amortizeYears(450_000, 6.5, 30, 2);
    const y1 = rows[0]!;
    assert.ok(Math.abs(y1.interest + y1.principalPaid - y1.payment) < 0.5);
    assert.ok(y1.interest < 450_000 * 0.065);
    assert.ok(y1.interest > 28_000);
  });

  it("books occupancy from three seasons totaling 365 days", () => {
    const mix = occupancyMix(DEFAULT_INPUTS);
    assert.equal(
      DEFAULT_INPUTS.peakDays + DEFAULT_INPUTS.shoulderDays + DEFAULT_INPUTS.lowDays,
      365,
    );
    assert.ok(mix.occupiedNights > 100 && mix.occupiedNights < 300);
    assert.ok(mix.roomRevenue > 50_000);
  });
});
