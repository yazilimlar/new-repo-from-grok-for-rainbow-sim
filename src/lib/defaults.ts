import type { Inputs } from "./finance.ts";

export const STORAGE_KEY = "rainbow-house-simulator-v1";

export const DEFAULT_INPUTS: Inputs = {
  purchasePrice: 650_000,
  landValuePct: 25,
  closingCosts: 13_000,
  ffe: 40_000,
  mortgageAmount: 450_000,
  interestRate: 6.5,
  loanTermYears: 30,
  placedInServiceMonth: 6,

  peakAdr: 425,
  peakOcc: 65,
  peakDays: 92,
  shoulderAdr: 300,
  shoulderOcc: 50,
  shoulderDays: 91,
  lowAdr: 260,
  lowOcc: 35,
  lowDays: 182,
  avgStayNights: 3,
  cleaningFee: 150,
  cleaningCostRatio: 70,

  utilities: 6_000,
  insurance: 3_000,
  propertyTax: 10_000,
  maintenance: 3_500,
  supplies: 2_400,
  platformFeePct: 3,
  hoa: 0,
  pmFeePct: 0,

  revenueGrowthPct: 3,
  opexInflationPct: 3,
  appreciationPct: 3,
  sellingCostPct: 6,

  taxRatePct: 32,
  ltcgRatePct: 15,
  unrecaptured1250Pct: 25,
  costSegPct: 30,
  personalSharePct: 60,
  bonusPct: 100,
  applyBonus: true,
  materialParticipation: true,
  qbiEnabled: true,

  projectionYears: 10,
};

export const PRESETS = {
  conservative: {
    label: "Conservative",
    peakOcc: 50,
    shoulderOcc: 35,
    lowOcc: 22,
  },
  base: {
    label: "Base",
    peakOcc: 65,
    shoulderOcc: 50,
    lowOcc: 35,
  },
  strong: {
    label: "Strong",
    peakOcc: 80,
    shoulderOcc: 62,
    lowOcc: 48,
  },
} as const;

export type PresetId = keyof typeof PRESETS;
