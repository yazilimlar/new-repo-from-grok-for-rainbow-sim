import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, n as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ChevronDown, i as RotateCcw, r as SlidersHorizontal, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Area, c as Bar, i as XAxis, l as ResponsiveContainer, n as LineChart, o as Line, r as YAxis, s as CartesianGrid, t as ComposedChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-FDQQlQQE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
			ghost: "hover:bg-secondary hover:text-foreground",
			sage: "bg-sage text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, { ...props });
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, { ...props });
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		className: cn("fixed inset-0 z-50 bg-background/70", className),
		...props
	});
}
function SheetContent({ className, children, side = "left", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex h-dvh w-[min(100%,22rem)] flex-col bg-card shadow-lg", side === "left" ? "inset-y-0 left-0 border-r" : "inset-y-0 right-0 border-l", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 p-5 pr-12", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-lg font-medium", className),
		...props
	});
}
function Tabs({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		className: cn("flex flex-col gap-4", className),
		...props
	});
}
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex h-11 w-full items-center gap-1 overflow-x-auto rounded-lg bg-muted p-1 text-muted-foreground sm:w-fit", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-9 min-h-9 shrink-0 items-center justify-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: cn("outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
var STORAGE_KEY = "rainbow-house-simulator-v1";
var DEFAULT_INPUTS = {
	purchasePrice: 65e4,
	landValuePct: 25,
	closingCosts: 13e3,
	ffe: 4e4,
	mortgageAmount: 45e4,
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
	utilities: 6e3,
	insurance: 3e3,
	propertyTax: 1e4,
	maintenance: 3500,
	supplies: 2400,
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
	projectionYears: 10
};
var PRESETS = {
	conservative: {
		label: "Conservative",
		peakOcc: 50,
		shoulderOcc: 35,
		lowOcc: 22
	},
	base: {
		label: "Base",
		peakOcc: 65,
		shoulderOcc: 50,
		lowOcc: 35
	},
	strong: {
		label: "Strong",
		peakOcc: 80,
		shoulderOcc: 62,
		lowOcc: 48
	}
};
/**
* IRS MACRS percentages (GDS).
* 5-year: 200% declining balance, half-year convention (Pub 946 Table A-1).
* 15-year: 150% declining balance, half-year convention (Table A-1).
* Residential rental: 27.5-year straight line, mid-month (Table A-6).
*/
var MACRS_5_HY = [
	.2,
	.32,
	.192,
	.1152,
	.1152,
	.0576
];
var MACRS_15_HY = [
	.05,
	.095,
	.0855,
	.077,
	.0693,
	.0623,
	.059,
	.059,
	.059,
	.059,
	.059,
	.059,
	.059,
	.059,
	.059,
	.0295
];
/** Mid-month residential rental recovery fraction for each year, 1-indexed month. */
function residentialRentalRates(placedMonth, years) {
	const month = Math.min(12, Math.max(1, Math.round(placedMonth)));
	const annual = 1 / 27.5;
	const rates = [];
	let remaining = 1;
	const monthsFirst = 12.5 - month;
	const r1 = Math.min(remaining, annual * (monthsFirst / 12));
	rates.push(r1);
	remaining -= r1;
	for (let y = 2; y <= years; y++) {
		const r = Math.min(remaining, annual);
		rates.push(r);
		remaining -= r;
	}
	return rates;
}
function macrsRate(table, yearIndex) {
	return table[yearIndex] ?? 0;
}
function n(v) {
	return Number.isFinite(v) ? v : 0;
}
function grow(base, ratePct, yearIndex) {
	return base * Math.pow(1 + ratePct / 100, yearIndex);
}
function monthlyPayment(principal, annualRatePct, termYears) {
	const p = n(principal);
	if (p <= 0 || termYears <= 0) return 0;
	const r = annualRatePct / 100 / 12;
	const periods = termYears * 12;
	if (r === 0) return p / periods;
	return p * r / (1 - Math.pow(1 + r, -periods));
}
function amortizeYears(principal, annualRatePct, termYears, years) {
	const pmt = monthlyPayment(principal, annualRatePct, termYears);
	const r = annualRatePct / 100 / 12;
	let bal = n(principal);
	const out = [];
	for (let y = 0; y < years; y++) {
		let interest = 0;
		let prin = 0;
		for (let m = 0; m < 12; m++) {
			if (bal <= .5) {
				bal = 0;
				break;
			}
			const i = bal * r;
			let p = pmt - i;
			if (p > bal) p = bal;
			interest += i;
			prin += p;
			bal -= p;
		}
		out.push({
			interest,
			principalPaid: prin,
			payment: pmt * 12,
			endingBalance: Math.max(0, bal)
		});
	}
	return out;
}
function splitBasis(inputs) {
	const price = n(inputs.purchasePrice);
	const landPct = Math.min(90, Math.max(0, n(inputs.landValuePct))) / 100;
	const closing = Math.max(0, n(inputs.closingCosts));
	const ffe = Math.max(0, n(inputs.ffe));
	const landValue = price * landPct;
	const closingToLand = closing * landPct;
	const landBasis = landValue + closingToLand;
	const buildingBasis = price - landValue + (closing - closingToLand);
	const costSeg = buildingBasis * (Math.min(80, Math.max(0, n(inputs.costSegPct))) / 100);
	const personalProp = costSeg * (Math.min(100, Math.max(0, n(inputs.personalSharePct))) / 100);
	const landImprov = costSeg - personalProp;
	const realProp = buildingBasis - costSeg;
	const mortgage = Math.max(0, n(inputs.mortgageAmount));
	const cashInvested = price + closing + ffe - mortgage;
	return {
		landBasis,
		buildingBasis,
		realProp,
		personalProp,
		landImprov,
		ffe,
		totalCost: price + closing + ffe,
		cashInvested
	};
}
function seasonRevenue(days, occPct, adr) {
	const nights = Math.max(0, days) * (Math.min(100, Math.max(0, occPct)) / 100);
	return {
		nights,
		revenue: nights * Math.max(0, adr)
	};
}
function occupancyMix(inputs) {
	const peak = seasonRevenue(inputs.peakDays, inputs.peakOcc, inputs.peakAdr);
	const shoulder = seasonRevenue(inputs.shoulderDays, inputs.shoulderOcc, inputs.shoulderAdr);
	const low = seasonRevenue(inputs.lowDays, inputs.lowOcc, inputs.lowAdr);
	const occupiedNights = peak.nights + shoulder.nights + low.nights;
	return {
		peak,
		shoulder,
		low,
		occupiedNights,
		roomRevenue: peak.revenue + shoulder.revenue + low.revenue,
		bookings: occupiedNights / Math.max(1, n(inputs.avgStayNights))
	};
}
function irr(cashflows) {
	if (cashflows.length < 2) return null;
	let r = .12;
	for (let i = 0; i < 40; i++) {
		let npv = 0;
		let deriv = 0;
		for (let t = 0; t < cashflows.length; t++) {
			const cf = cashflows[t] ?? 0;
			const den = Math.pow(1 + r, t);
			npv += cf / den;
			if (t > 0) deriv -= t * cf / Math.pow(1 + r, t + 1);
		}
		if (Math.abs(deriv) < 1e-12) break;
		const next = r - npv / deriv;
		if (!Number.isFinite(next)) return null;
		if (Math.abs(next - r) < 1e-8) return next;
		r = next;
	}
	return Number.isFinite(r) ? r : null;
}
function saleAt(year, years, basis, inputs) {
	const idx = Math.min(years.length, Math.max(1, year)) - 1;
	const row = years[idx];
	const salePrice = row.propertyValue;
	const sellingCosts = salePrice * (n(inputs.sellingCostPct) / 100);
	const cumulativeDep = years.slice(0, idx + 1).reduce((s, y) => s + y.depreciation, 0);
	const adjustedBasis = Math.max(0, basis.totalCost - cumulativeDep);
	const gain = salePrice - sellingCosts - adjustedBasis;
	const dep1245 = years.slice(0, idx + 1).reduce((s, y) => s + y.depBonus + y.dep5 + y.dep15, 0);
	const dep1250 = years.slice(0, idx + 1).reduce((s, y) => s + y.dep27, 0);
	const positiveGain = Math.max(0, gain);
	const recapture1245 = Math.min(positiveGain, dep1245);
	const unrecaptured1250 = Math.min(positiveGain - recapture1245, dep1250);
	const ltcg = Math.max(0, positiveGain - recapture1245 - unrecaptured1250);
	const ordinary = n(inputs.taxRatePct) / 100;
	const rate1250 = Math.min(n(inputs.unrecaptured1250Pct) / 100, ordinary);
	const taxOnSale = recapture1245 * ordinary + unrecaptured1250 * rate1250 + ltcg * (n(inputs.ltcgRatePct) / 100);
	const netEquityProceeds = salePrice - sellingCosts - row.remainingBalance - taxOnSale;
	const totalProfit = row.cumulativeAtcf + netEquityProceeds - basis.cashInvested;
	return {
		year: row.year,
		salePrice,
		sellingCosts,
		remainingBalance: row.remainingBalance,
		cumulativeDep,
		adjustedBasis,
		gain,
		recapture1245,
		unrecaptured1250,
		ltcg,
		taxOnSale,
		netEquityProceeds,
		cumulativeAtcf: row.cumulativeAtcf,
		totalProfit
	};
}
function project(inputs) {
	const yearsCount = Math.min(15, Math.max(1, Math.round(n(inputs.projectionYears))));
	const basis = splitBasis(inputs);
	occupancyMix(inputs);
	const bonusRate = inputs.applyBonus ? Math.min(100, Math.max(0, n(inputs.bonusPct))) / 100 : 0;
	const personal5 = basis.personalProp + basis.ffe;
	const bonusAmount = (personal5 + basis.landImprov) * bonusRate;
	const remaining5 = personal5 * (1 - bonusRate);
	const remaining15 = basis.landImprov * (1 - bonusRate);
	const resRates = residentialRentalRates(inputs.placedInServiceMonth, yearsCount);
	const debt = amortizeYears(n(inputs.mortgageAmount), n(inputs.interestRate), n(inputs.loanTermYears), yearsCount);
	const taxRate = n(inputs.taxRatePct) / 100;
	const lossesAllowed = Boolean(inputs.materialParticipation);
	const stay = Math.max(1, n(inputs.avgStayNights));
	const avgStayQualifiesStr = stay <= 7;
	const years = [];
	let palCarry = 0;
	let cumulativeAtcf = 0;
	for (let i = 0; i < yearsCount; i++) {
		const peak = seasonRevenue(inputs.peakDays, inputs.peakOcc, grow(inputs.peakAdr, inputs.revenueGrowthPct, i));
		const shoulder = seasonRevenue(inputs.shoulderDays, inputs.shoulderOcc, grow(inputs.shoulderAdr, inputs.revenueGrowthPct, i));
		const low = seasonRevenue(inputs.lowDays, inputs.lowOcc, grow(inputs.lowAdr, inputs.revenueGrowthPct, i));
		const occupiedNights = peak.nights + shoulder.nights + low.nights;
		const roomRevenue = peak.revenue + shoulder.revenue + low.revenue;
		const bookings = occupiedNights / stay;
		const cleaningFee = grow(inputs.cleaningFee, inputs.revenueGrowthPct, i);
		const cleaningRevenue = bookings * cleaningFee;
		const grossRevenue = roomRevenue + cleaningRevenue;
		const cleaningExp = bookings * cleaningFee * (n(inputs.cleaningCostRatio) / 100);
		const platform = roomRevenue * (n(inputs.platformFeePct) / 100);
		const pm = grossRevenue * (n(inputs.pmFeePct) / 100);
		const fixed = grow(inputs.utilities, inputs.opexInflationPct, i) + grow(inputs.insurance, inputs.opexInflationPct, i) + grow(inputs.propertyTax, inputs.opexInflationPct, i) + grow(inputs.maintenance, inputs.opexInflationPct, i) + grow(inputs.supplies, inputs.opexInflationPct, i) + grow(inputs.hoa, inputs.opexInflationPct, i);
		const opex = cleaningExp + platform + pm + fixed;
		const noi = grossRevenue - opex;
		const loan = debt[i] ?? {
			interest: 0,
			principalPaid: 0,
			payment: 0,
			endingBalance: 0
		};
		const depBonus = i === 0 ? bonusAmount : 0;
		const dep5 = remaining5 * macrsRate(MACRS_5_HY, i);
		const dep15 = remaining15 * macrsRate(MACRS_15_HY, i);
		const dep27 = basis.realProp * (resRates[i] ?? 0);
		const depreciation = depBonus + dep5 + dep15 + dep27;
		const taxableBeforeQbi = noi - loan.interest - depreciation;
		let qbiDeduction = 0;
		if (inputs.qbiEnabled && taxableBeforeQbi > 0 && lossesAllowed) qbiDeduction = taxableBeforeQbi * .2;
		let taxableIncome = taxableBeforeQbi - qbiDeduction;
		let suspendedLossUsed = 0;
		if (taxableIncome > 0 && palCarry > 0) {
			suspendedLossUsed = Math.min(taxableIncome, palCarry);
			taxableIncome -= suspendedLossUsed;
			palCarry -= suspendedLossUsed;
		}
		let taxPaid = 0;
		let w2Shield = 0;
		if (taxableIncome >= 0) taxPaid = taxableIncome * taxRate;
		else if (lossesAllowed && avgStayQualifiesStr) w2Shield = -taxableIncome * taxRate;
		else {
			palCarry += -taxableIncome;
			taxableIncome = 0;
		}
		const btcf = noi - loan.payment;
		const atcf = btcf - taxPaid + w2Shield;
		cumulativeAtcf += atcf;
		const propertyValue = grow(inputs.purchasePrice, inputs.appreciationPct, i + 1);
		years.push({
			year: i + 1,
			grossRevenue,
			roomRevenue,
			cleaningRevenue,
			occupiedNights,
			bookings,
			opex,
			noi,
			interest: loan.interest,
			principalPaid: loan.principalPaid,
			debtService: loan.payment,
			depreciation,
			depBonus,
			dep5,
			dep15,
			dep27,
			taxableBeforeQbi,
			qbiDeduction,
			taxableIncome,
			suspendedLossUsed,
			suspendedLossCarry: palCarry,
			taxPaid,
			w2Shield,
			btcf,
			atcf,
			propertyValue,
			remainingBalance: loan.endingBalance,
			equity: propertyValue - loan.endingBalance,
			cumulativeAtcf
		});
	}
	const year1 = years[0];
	const saleYear5 = saleAt(Math.min(5, yearsCount), years, basis, inputs);
	const saleYear10 = saleAt(Math.min(10, yearsCount), years, basis, inputs);
	const exitFlows = [-basis.cashInvested, ...years.map((y) => y.atcf)];
	const sale = years.length >= 10 ? saleYear10 : saleYear5;
	const saleIdx = Math.min(sale.year, exitFlows.length - 1);
	exitFlows[saleIdx] = (years[saleIdx - 1]?.atcf ?? 0) + sale.netEquityProceeds;
	return {
		inputs,
		basis,
		years,
		year1,
		capRate: inputs.purchasePrice > 0 ? year1.noi / inputs.purchasePrice : 0,
		coc: basis.cashInvested > 0 ? year1.atcf / basis.cashInvested : 0,
		dscr: year1.debtService > 0 ? year1.noi / year1.debtService : 0,
		grossYield: inputs.purchasePrice > 0 ? year1.grossRevenue / inputs.purchasePrice : 0,
		avgStayQualifiesStr,
		lossesAllowed: lossesAllowed && avgStayQualifiesStr,
		monthlyPayment: monthlyPayment(n(inputs.mortgageAmount), n(inputs.interestRate), n(inputs.loanTermYears)),
		saleYear5,
		saleYear10,
		holdIrr: irr(exitFlows)
	};
}
function compare(inputs) {
	const strategy = project(inputs);
	const baseline = project({
		...inputs,
		costSegPct: 0
	});
	return {
		strategy,
		baseline,
		extraYear1Shield: strategy.year1.w2Shield - baseline.year1.w2Shield,
		extraYear1Atcf: strategy.year1.atcf - baseline.year1.atcf,
		extraYear1Dep: strategy.year1.depreciation - baseline.year1.depreciation
	};
}
function occupancySweep(inputs, deltas) {
	return deltas.map((delta) => {
		const next = {
			...inputs,
			peakOcc: clampPct(inputs.peakOcc + delta),
			shoulderOcc: clampPct(inputs.shoulderOcc + delta),
			lowOcc: clampPct(inputs.lowOcc + delta)
		};
		const model = project(next);
		return {
			delta,
			peakOcc: next.peakOcc,
			atcf: model.year1.atcf,
			shield: model.year1.w2Shield,
			noi: model.year1.noi
		};
	});
}
function clampPct(v) {
	return Math.min(95, Math.max(5, v));
}
var useSim = create((set) => ({
	inputs: DEFAULT_INPUTS,
	patch: (partial) => set((s) => ({ inputs: {
		...s.inputs,
		...partial
	} })),
	reset: () => set({ inputs: { ...DEFAULT_INPUTS } }),
	applyPreset: (id) => set((s) => {
		const preset = PRESETS[id];
		return { inputs: {
			...s.inputs,
			peakOcc: preset.peakOcc,
			shoulderOcc: preset.shoulderOcc,
			lowOcc: preset.lowOcc
		} };
	}),
	hydrate: (inputs) => set({ inputs: {
		...DEFAULT_INPUTS,
		...inputs
	} })
}));
function persistInputs(inputs) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
	} catch {}
}
function loadPersistedInputs() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		return {
			...DEFAULT_INPUTS,
			...parsed
		};
	} catch {
		return null;
	}
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-card text-card-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.03)]", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 p-5 pb-0", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("font-display text-lg font-medium tracking-tight", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-5", className),
		...props
	});
}
var usd0 = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});
var usd2 = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 2
});
var pct1 = new Intl.NumberFormat("en-US", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
});
var pct0 = new Intl.NumberFormat("en-US", {
	style: "percent",
	maximumFractionDigits: 0
});
function money(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return digits === 2 ? usd2.format(n) : usd0.format(n);
}
function compactMoney(n) {
	if (!Number.isFinite(n)) return "—";
	const abs = Math.abs(n);
	const sign = n < 0 ? "-" : "";
	if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(2)}M`;
	if (abs >= 1e4) return `${sign}$${(abs / 1e3).toFixed(1)}k`;
	return money(n);
}
function pct(n, alreadyRatio = true) {
	if (!Number.isFinite(n)) return "—";
	return pct1.format(alreadyRatio ? n : n / 100);
}
function pctPoints(n) {
	if (!Number.isFinite(n)) return "—";
	return pct0.format(n / 100);
}
function monthName(month) {
	return [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	][month - 1] ?? "January";
}
function ChartTip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1",
			children: payload.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full",
						style: { background: item.color }
					}), item.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-foreground",
					children: money(item.value ?? 0)
				})]
			}, item.name))
		})]
	});
}
var chartAxis = {
	stroke: "var(--color-border)",
	tick: {
		fill: "var(--color-muted-foreground)",
		fontSize: 11
	}
};
var chartGrid = {
	stroke: "var(--color-border)",
	strokeDasharray: "3 3",
	vertical: false
};
function ExitTab({ comparison }) {
	const { strategy } = comparison;
	const wealth = strategy.years.map((y) => ({
		name: `Y${y.year}`,
		Equity: Math.round(y.equity),
		"Cumulative cash": Math.round(y.cumulativeAtcf),
		"Loan balance": Math.round(y.remainingBalance)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Equity and cash" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Equity is appreciated value minus remaining principal. Cash is after-tax, including any W-2 shield." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: wealth,
							margin: {
								top: 8,
								right: 8,
								left: 0,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...chartGrid }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									...chartAxis
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									...chartAxis,
									tickFormatter: (v) => compactMoney(Number(v))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTip, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "Equity",
									stroke: "var(--color-sage)",
									strokeWidth: 2.5,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "Cumulative cash",
									stroke: "var(--color-chart-3)",
									strokeWidth: 2,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "Loan balance",
									stroke: "var(--color-chart-4)",
									strokeWidth: 1.5,
									strokeDasharray: "4 4",
									dot: false
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleCard, {
				title: "If you sell in year 5",
				sale: strategy.saleYear5,
				cashIn: strategy.basis.cashInvested
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleCard, {
				title: "If you sell in year 10",
				sale: strategy.saleYear10,
				cashIn: strategy.basis.cashInvested,
				irr: strategy.holdIrr
			})
		]
	});
}
function SaleCard({ title, sale, cashIn, irr }) {
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
		["Profit vs cash in", money(sale.totalProfit)]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Cost segregation is a timing benefit. Sale recapture gives a large piece back — modeled here so the shield is not treated as free money." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "space-y-2",
		children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-muted-foreground",
				children: k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "tabular-nums text-foreground",
				children: v
			})]
		}, k))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-lg bg-muted p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Cash in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl tabular-nums",
				children: money(cashIn)
			}),
			irr != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: [
					"Levered IRR to this sale:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sage",
						children: pct(irr)
					})
				]
			}) : null
		]
	})] })] });
}
function tone(n) {
	if (n > 0) return "text-sage";
	if (n < 0) return "text-terracotta";
	return "text-foreground";
}
function Kpi({ label, value, hint, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 font-display text-2xl tabular-nums tracking-tight", className),
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
function KpiStrip({ comparison }) {
	const { strategy, extraYear1Shield } = comparison;
	const y = strategy.year1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "Gross revenue",
				value: money(y.grossRevenue),
				hint: `${y.occupiedNights.toFixed(0)} occupied nights`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "NOI",
				value: money(y.noi),
				hint: `Cap rate ${pct(strategy.capRate)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "Year 1 taxable",
				value: money(y.taxableIncome),
				className: tone(y.taxableIncome),
				hint: strategy.lossesAllowed ? "Losses can offset ordinary income" : "Passive — losses suspended"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "W-2 tax shield",
				value: money(y.w2Shield),
				className: tone(y.w2Shield),
				hint: extraYear1Shield > 0 ? `${money(extraYear1Shield)} more than straight-line` : "From usable paper losses"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "After-tax cash",
				value: money(y.atcf),
				className: tone(y.atcf),
				hint: `Cash-on-cash ${pct(strategy.coc)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "DSCR",
				value: strategy.dscr.toFixed(2),
				className: strategy.dscr >= 1.25 ? "text-sage" : "text-terracotta",
				hint: "NOI / annual debt service"
			})
		]
	});
}
var ROWS = [
	{
		key: "grossRevenue",
		label: "Gross revenue",
		kind: "money"
	},
	{
		key: "opex",
		label: "Operating expenses",
		kind: "money",
		tone: "loss"
	},
	{
		key: "noi",
		label: "NOI",
		kind: "money",
		tone: "sage"
	},
	{
		key: "interest",
		label: "Mortgage interest",
		kind: "money",
		tone: "loss"
	},
	{
		key: "principalPaid",
		label: "Principal paid",
		kind: "money",
		tone: "muted"
	},
	{
		key: "debtService",
		label: "Debt service",
		kind: "money",
		tone: "loss"
	},
	{
		key: "depreciation",
		label: "Depreciation",
		kind: "money",
		tone: "muted"
	},
	{
		key: "taxableIncome",
		label: "Taxable income",
		kind: "money"
	},
	{
		key: "taxPaid",
		label: "Tax on the property",
		kind: "money",
		tone: "loss"
	},
	{
		key: "w2Shield",
		label: "W-2 tax shield",
		kind: "money",
		tone: "sage"
	},
	{
		key: "atcf",
		label: "After-tax cash flow",
		kind: "money",
		tone: "sage"
	},
	{
		key: "equity",
		label: "Estimated equity",
		kind: "money"
	}
];
function LedgerTab({ comparison }) {
	const years = comparison.strategy.years;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ten-year ledger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Interest is from a 12-month amortizing schedule. Depreciation follows MACRS half-year (5- and 15-year) and mid-month (27.5-year). Cash flow adds the W-2 shield the original model skipped." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
		className: "-mx-5 overflow-x-auto px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[720px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border text-xs tracking-wide text-muted-foreground uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "sticky left-0 bg-card py-3 pr-4 font-medium",
					children: "Line"
				}), years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
					className: "px-3 py-3 text-right font-medium tabular-nums",
					children: ["Y", y.year]
				}, y.year))]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ROWS.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: cn("border-b border-border/70", idx === 2 || idx === 10 ? "bg-muted/40" : ""),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "sticky left-0 bg-card py-3 pr-4 font-medium text-foreground",
					children: row.label
				}), years.map((y) => {
					const raw = y[row.key];
					const num = typeof raw === "number" ? raw : 0;
					const display = row.key === "opex" || row.key === "interest" || row.key === "debtService" || row.key === "depreciation" || row.key === "taxPaid" ? money(-Math.abs(num)) : money(num);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cn("px-3 py-3 text-right tabular-nums", row.tone === "sage" && "text-sage", row.tone === "loss" && "text-terracotta", row.tone === "muted" && "text-muted-foreground", !row.tone && "text-foreground"),
						children: display
					}, y.year);
				})]
			}, row.label)) })]
		})
	})] });
}
function OverviewTab({ comparison }) {
	const { strategy, baseline } = comparison;
	const series = strategy.years.map((y, i) => ({
		name: `Y${y.year}`,
		Revenue: Math.round(y.grossRevenue),
		Expenses: Math.round(y.opex),
		"After-tax cash": Math.round(y.atcf),
		"Baseline cash": Math.round(baseline.years[i]?.atcf ?? 0),
		Depreciation: Math.round(y.depreciation),
		"Taxable income": Math.round(y.taxableIncome)
	}));
	const mix = [
		{
			name: "Peak",
			nights: strategy.inputs.peakDays * (strategy.inputs.peakOcc / 100),
			adr: strategy.inputs.peakAdr
		},
		{
			name: "Shoulder",
			nights: strategy.inputs.shoulderDays * (strategy.inputs.shoulderOcc / 100),
			adr: strategy.inputs.shoulderAdr
		},
		{
			name: "Low",
			nights: strategy.inputs.lowDays * (strategy.inputs.lowOcc / 100),
			adr: strategy.inputs.lowAdr
		}
	];
	const maxNights = Math.max(...mix.map((m) => m.nights), 1);
	const sweep = occupancySweep(strategy.inputs, [
		-20,
		-10,
		0,
		10,
		20
	]);
	const maxAbsAtcf = Math.max(...sweep.map((s) => Math.abs(s.atcf)), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ten-year cash engine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Revenue grows with ADR. Expenses inflate. Debt service is the real amortizing note, not interest-only." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
							data: series,
							margin: {
								top: 8,
								right: 8,
								left: 0,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...chartGrid }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									...chartAxis
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									...chartAxis,
									tickFormatter: (v) => compactMoney(Number(v))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTip, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Revenue",
									fill: "var(--color-chart-3)",
									radius: [
										4,
										4,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Expenses",
									fill: "var(--color-chart-2)",
									radius: [
										4,
										4,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "After-tax cash",
									stroke: "var(--color-sage)",
									strokeWidth: 2.5,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "Baseline cash",
									stroke: "var(--color-chart-4)",
									strokeWidth: 1.5,
									strokeDasharray: "4 4",
									dot: false
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Depreciation vs taxable income" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Year 1 is the cost-seg / bonus cliff. Later years revert toward 27.5-year straight line." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
						data: series,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...chartGrid }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
								...chartAxis
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								...chartAxis,
								tickFormatter: (v) => compactMoney(Number(v))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTip, {}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "Depreciation",
								fill: "var(--color-sage-dim)",
								stroke: "var(--color-sage)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "Taxable income",
								stroke: "var(--color-chart-3)",
								strokeWidth: 2,
								dot: false
							})
						]
					})
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Season mix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Occupied nights weighted by the ADR you typed." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-4",
				children: [mix.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: row.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-foreground",
							children: [
								row.nights.toFixed(0),
								" nts · ",
								money(row.adr),
								" ADR"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-sage",
							style: { width: `${row.nights / maxNights * 100}%` }
						})
					})]
				}, row.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pt-2 text-xs text-muted-foreground",
					children: [
						"Gross yield ",
						pct(strategy.grossYield),
						" on purchase price. Cash in",
						" ",
						money(strategy.basis.cashInvested),
						"."
					]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Occupancy sensitivity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Same ADRs, occupancy shifted across all three seasons. The tax shield barely moves — paper losses are mostly depreciation." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "space-y-3",
					children: sweep.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[5rem_1fr_7rem] items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tabular-nums text-muted-foreground",
								children: row.delta === 0 ? "Base" : `${row.delta > 0 ? "+" : ""}${row.delta} pts`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 overflow-hidden rounded-md bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: row.atcf >= 0 ? "h-8 bg-sage/80" : "h-8 bg-terracotta/80",
									style: { width: `${Math.max(8, Math.abs(row.atcf) / maxAbsAtcf * 100)}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-sm tabular-nums text-foreground",
								children: money(row.atcf)
							})
						]
					}, row.delta))
				})]
			})
		]
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-xs font-medium tracking-wide text-muted-foreground uppercase", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-muted px-3 text-sm tabular-nums text-foreground shadow-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Slider({ className, value, defaultValue, min = 0, max = 100, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		min,
		max,
		value,
		defaultValue,
		className: cn("relative flex h-11 w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-sage" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full border border-sage bg-primary shadow-sm ring-ring transition-[box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2" })]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sage", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-primary shadow-sm transition-transform duration-150 data-[state=checked]:translate-x-5" })
	});
}
function FieldNumber({ id, label, value, onChange, step = 1, min, max, display }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				children: label
			}), display ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm tabular-nums text-foreground",
				children: display
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type: "number",
			value: Number.isFinite(value) ? value : 0,
			min,
			max,
			step,
			onChange: (e) => onChange(parseFloat(e.target.value) || 0)
		})]
	});
}
function FieldSlider({ id, label, value, onChange, min, max, step = 1, display }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm tabular-nums text-foreground",
				children: display
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			id,
			min,
			max,
			step,
			value: [value],
			onValueChange: (v) => onChange(v[0] ?? value)
		})]
	});
}
function FieldSwitch({ id, label, description, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				className: "normal-case tracking-normal text-foreground",
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-snug text-muted-foreground",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id,
			checked,
			onCheckedChange: onChange
		})]
	});
}
function Section({ title, defaultOpen = true, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		open: defaultOpen,
		className: "group border-b border-border py-4 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: cn("flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground select-none", "[&::-webkit-details-marker]:hidden"),
			children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-muted-foreground transition-transform duration-150 group-open:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4",
			children
		})]
	});
}
function ParamsPanel() {
	const inputs = useSim((s) => s.inputs);
	const patch = useSim((s) => s.patch);
	const reset = useSim((s) => s.reset);
	const mix = occupancyMix(inputs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 px-5 pt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-foreground",
				children: "Assumptions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Live model. Nothing is filed with the IRS."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: reset,
				className: "shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Reset"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto px-5 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Property and loan",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "purchasePrice",
							label: "Purchase price",
							value: inputs.purchasePrice,
							onChange: (v) => patch({ purchasePrice: v }),
							step: 1e4,
							min: 0,
							display: money(inputs.purchasePrice)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "landValuePct",
							label: "Land share of price",
							value: inputs.landValuePct,
							onChange: (v) => patch({ landValuePct: v }),
							min: 10,
							max: 45,
							display: pctPoints(inputs.landValuePct)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "closingCosts",
							label: "Closing costs",
							value: inputs.closingCosts,
							onChange: (v) => patch({ closingCosts: v }),
							step: 500,
							min: 0,
							display: money(inputs.closingCosts)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "ffe",
							label: "Furniture and equipment",
							value: inputs.ffe,
							onChange: (v) => patch({ ffe: v }),
							step: 1e3,
							min: 0,
							display: money(inputs.ffe)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "mortgageAmount",
							label: "Mortgage",
							value: inputs.mortgageAmount,
							onChange: (v) => patch({ mortgageAmount: v }),
							step: 1e4,
							min: 0,
							display: money(inputs.mortgageAmount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "interestRate",
							label: "Interest rate",
							value: inputs.interestRate,
							onChange: (v) => patch({ interestRate: v }),
							min: 2,
							max: 12,
							step: .1,
							display: `${inputs.interestRate.toFixed(1)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "loanTermYears",
							label: "Term",
							value: inputs.loanTermYears,
							onChange: (v) => patch({ loanTermYears: v }),
							min: 10,
							max: 30,
							step: 1,
							display: `${inputs.loanTermYears} years`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "placedInServiceMonth",
									children: "Placed in service"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "placedInServiceMonth",
									className: "flex h-11 w-full rounded-md border border-input bg-muted px-3 text-sm text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
									value: inputs.placedInServiceMonth,
									onChange: (e) => patch({ placedInServiceMonth: Number(e.target.value) }),
									children: Array.from({ length: 12 }, (_, i) => i + 1).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: m,
										children: monthName(m)
									}, m))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Mid-month convention for 27.5-year property."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Seasons",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								mix.occupiedNights.toFixed(0),
								" occupied nights · ",
								mix.bookings.toFixed(0),
								" ",
								"turns at a ",
								inputs.avgStayNights,
								"-night stay"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "peakAdr",
							label: "Peak ADR",
							value: inputs.peakAdr,
							onChange: (v) => patch({ peakAdr: v }),
							step: 10,
							display: money(inputs.peakAdr)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "peakOcc",
							label: "Peak occupancy",
							value: inputs.peakOcc,
							onChange: (v) => patch({ peakOcc: v }),
							min: 10,
							max: 95,
							display: pctPoints(inputs.peakOcc)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "shoulderAdr",
							label: "Shoulder ADR",
							value: inputs.shoulderAdr,
							onChange: (v) => patch({ shoulderAdr: v }),
							step: 10,
							display: money(inputs.shoulderAdr)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "shoulderOcc",
							label: "Shoulder occupancy",
							value: inputs.shoulderOcc,
							onChange: (v) => patch({ shoulderOcc: v }),
							min: 10,
							max: 95,
							display: pctPoints(inputs.shoulderOcc)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "lowAdr",
							label: "Low-season ADR",
							value: inputs.lowAdr,
							onChange: (v) => patch({ lowAdr: v }),
							step: 10,
							display: money(inputs.lowAdr)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "lowOcc",
							label: "Low-season occupancy",
							value: inputs.lowOcc,
							onChange: (v) => patch({ lowOcc: v }),
							min: 5,
							max: 95,
							display: pctPoints(inputs.lowOcc)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "avgStayNights",
							label: "Average stay",
							value: inputs.avgStayNights,
							onChange: (v) => patch({ avgStayNights: v }),
							min: 1,
							max: 14,
							display: `${inputs.avgStayNights} nights`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Operating costs",
					defaultOpen: false,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "cleaningFee",
							label: "Cleaning fee (guest-paid)",
							value: inputs.cleaningFee,
							onChange: (v) => patch({ cleaningFee: v }),
							step: 10,
							display: money(inputs.cleaningFee)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "cleaningCostRatio",
							label: "Host cleaning cost",
							value: inputs.cleaningCostRatio,
							onChange: (v) => patch({ cleaningCostRatio: v }),
							min: 0,
							max: 100,
							display: pctPoints(inputs.cleaningCostRatio)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "utilities",
							label: "Utilities",
							value: inputs.utilities,
							onChange: (v) => patch({ utilities: v }),
							step: 250,
							display: money(inputs.utilities)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "insurance",
							label: "Insurance",
							value: inputs.insurance,
							onChange: (v) => patch({ insurance: v }),
							step: 250,
							display: money(inputs.insurance)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "propertyTax",
							label: "Property tax",
							value: inputs.propertyTax,
							onChange: (v) => patch({ propertyTax: v }),
							step: 250,
							display: money(inputs.propertyTax)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "maintenance",
							label: "Maintenance",
							value: inputs.maintenance,
							onChange: (v) => patch({ maintenance: v }),
							step: 250,
							display: money(inputs.maintenance)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "supplies",
							label: "Supplies",
							value: inputs.supplies,
							onChange: (v) => patch({ supplies: v }),
							step: 100,
							display: money(inputs.supplies)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "platformFeePct",
							label: "Platform fee",
							value: inputs.platformFeePct,
							onChange: (v) => patch({ platformFeePct: v }),
							min: 0,
							max: 20,
							step: .5,
							display: `${inputs.platformFeePct}% of room revenue`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "pmFeePct",
							label: "Property management",
							value: inputs.pmFeePct,
							onChange: (v) => patch({ pmFeePct: v }),
							min: 0,
							max: 30,
							display: pctPoints(inputs.pmFeePct)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldNumber, {
							id: "hoa",
							label: "HOA",
							value: inputs.hoa,
							onChange: (v) => patch({ hoa: v }),
							step: 100,
							display: money(inputs.hoa)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Tax strategy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "taxRatePct",
							label: "Combined ordinary rate",
							value: inputs.taxRatePct,
							onChange: (v) => patch({ taxRatePct: v }),
							min: 10,
							max: 50,
							display: pctPoints(inputs.taxRatePct)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "costSegPct",
							label: "Cost segregation",
							value: inputs.costSegPct,
							onChange: (v) => patch({ costSegPct: v }),
							min: 0,
							max: 50,
							step: 1,
							display: `${inputs.costSegPct}% of building reclassified`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "personalSharePct",
							label: "Share of study that is 5-year",
							value: inputs.personalSharePct,
							onChange: (v) => patch({ personalSharePct: v }),
							min: 20,
							max: 80,
							display: pctPoints(inputs.personalSharePct)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSwitch, {
							id: "applyBonus",
							label: "Bonus depreciation",
							description: "100% additional first-year depreciation on 5- and 15-year property acquired after Jan 19, 2025 (IRC §168(k), Notice 2026-11).",
							checked: inputs.applyBonus,
							onChange: (v) => patch({ applyBonus: v })
						}),
						inputs.applyBonus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "bonusPct",
							label: "Bonus percentage",
							value: inputs.bonusPct,
							onChange: (v) => patch({ bonusPct: v }),
							min: 0,
							max: 100,
							step: 5,
							display: pctPoints(inputs.bonusPct)
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSwitch, {
							id: "materialParticipation",
							label: "Material participation",
							description: "Needed for the short-term rental exception so Year 1 losses can offset W-2 income.",
							checked: inputs.materialParticipation,
							onChange: (v) => patch({ materialParticipation: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSwitch, {
							id: "qbiEnabled",
							label: "Section 199A (QBI)",
							description: "20% deduction on positive qualified business income. Does not enlarge a loss.",
							checked: inputs.qbiEnabled,
							onChange: (v) => patch({ qbiEnabled: v })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Growth",
					defaultOpen: false,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "revenueGrowthPct",
							label: "ADR growth",
							value: inputs.revenueGrowthPct,
							onChange: (v) => patch({ revenueGrowthPct: v }),
							min: 0,
							max: 8,
							step: .5,
							display: `${inputs.revenueGrowthPct}% / year`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "opexInflationPct",
							label: "Expense inflation",
							value: inputs.opexInflationPct,
							onChange: (v) => patch({ opexInflationPct: v }),
							min: 0,
							max: 8,
							step: .5,
							display: `${inputs.opexInflationPct}% / year`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSlider, {
							id: "appreciationPct",
							label: "Appreciation",
							value: inputs.appreciationPct,
							onChange: (v) => patch({ appreciationPct: v }),
							min: 0,
							max: 8,
							step: .5,
							display: `${inputs.appreciationPct}% / year`
						})
					]
				})
			]
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-secondary text-foreground",
		sage: "bg-sage-dim text-sage",
		warn: "bg-secondary text-chart-3",
		loss: "bg-secondary text-terracotta"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var SLICES = [
	{
		id: "land",
		label: "Land",
		life: "Non-depreciable",
		bonus: false,
		swatch: "bg-muted-foreground/40"
	},
	{
		id: "real",
		label: "Building structure",
		life: "27.5-year MACRS",
		bonus: false,
		swatch: "bg-chart-4"
	},
	{
		id: "improve",
		label: "Land improvements",
		life: "15-year MACRS",
		bonus: true,
		swatch: "bg-sage"
	},
	{
		id: "personal",
		label: "Personal property + FF&E",
		life: "5-year MACRS",
		bonus: true,
		swatch: "bg-chart-3"
	}
];
function TaxTab({ comparison }) {
	const { strategy, baseline, extraYear1Dep, extraYear1Shield } = comparison;
	const b = strategy.basis;
	const y = strategy.year1;
	const values = {
		land: b.landBasis,
		real: b.realProp,
		improve: b.landImprov,
		personal: b.personalProp + b.ffe
	};
	const total = Object.values(values).reduce((s, v) => s + v, 0) || 1;
	const [active, setActive] = (0, import_react.useState)("personal");
	const waterfall = [
		{
			label: "NOI",
			value: y.noi
		},
		{
			label: "Interest",
			value: -y.interest
		},
		{
			label: "Depreciation",
			value: -y.depreciation
		},
		{
			label: "QBI",
			value: -y.qbiDeduction
		},
		{
			label: "Taxable",
			value: y.taxableIncome
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Depreciable map" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Land never depreciates. Cost segregation pulls basis out of 27.5-year property into 5- and 15-year classes that can take bonus." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseDiagram, {
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-28 overflow-hidden rounded-lg",
							children: SLICES.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActive(slice.id),
								className: cn("relative flex min-w-8 flex-col justify-end p-2 text-left transition-opacity duration-150", slice.swatch, active === slice.id ? "opacity-100" : "opacity-70 hover:opacity-90"),
								style: { flexGrow: Math.max(values[slice.id], total * .04) },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-medium text-primary-foreground/90",
									children: slice.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tabular-nums font-medium text-primary-foreground",
									children: money(values[slice.id])
								})]
							}, slice.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Width is basis. Click a class. Year 1 bonus sits on 5- and 15-year property only — ",
								money(y.depBonus),
								" this run."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: SLICES.find((s) => s.id === active)?.label }), SLICES.find((s) => s.id === active)?.bonus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "sage",
						children: "Bonus eligible"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "No bonus" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: SLICES.find((s) => s.id === active)?.life })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Allocated basis",
							value: money(values[active])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Share of total cost",
							value: `${(values[active] / total * 100).toFixed(1)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Year 1 deduction from this class",
							value: money(active === "land" ? 0 : active === "real" ? y.dep27 : active === "improve" ? y.depBonus * (b.landImprov / (b.personalProp + b.ffe + b.landImprov || 1)) + y.dep15 : y.depBonus * ((b.personalProp + b.ffe) / (b.personalProp + b.ffe + b.landImprov || 1)) + y.dep5)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Year 1 paper loss"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl tabular-nums text-terracotta",
									children: money(y.taxableIncome)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [
										"At ",
										strategy.inputs.taxRatePct,
										"% ordinary rate that is a",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sage",
											children: money(y.w2Shield)
										}),
										" shield against other income — if you materially participate and average stay is 7 nights or less."
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Year 1 waterfall" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "How NOI becomes a tax loss." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: waterfall.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[8rem_1fr_7rem] items-center gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: row.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 rounded-md bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-7 rounded-md", row.value >= 0 ? "bg-sage/70" : "bg-terracotta/70"),
									style: { width: `${Math.min(100, Math.abs(row.value) / Math.max(y.noi, y.depreciation, 1) * 100)}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right tabular-nums text-foreground",
								children: money(row.value)
							})
						]
					}, row.label))
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Cost seg vs straight-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Same house, same loan. Only the recovery lives change." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareCell, {
								label: "Strategy dep",
								value: money(strategy.year1.depreciation)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareCell, {
								label: "Baseline dep",
								value: money(baseline.year1.depreciation)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareCell, {
								label: "Extra deduction",
								value: money(extraYear1Dep),
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareCell, {
								label: "Extra tax shield",
								value: money(extraYear1Shield),
								accent: true
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qualification, { strategy })]
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-border pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm tabular-nums text-foreground",
			children: value
		})]
	});
}
function CompareCell({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-muted p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-1 text-sm tabular-nums font-medium", accent ? "text-sage" : "text-foreground"),
			children: value
		})]
	});
}
function Qualification({ strategy }) {
	const stayOk = strategy.avgStayQualifiesStr;
	const mp = strategy.inputs.materialParticipation;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "space-y-2 text-xs text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: stayOk ? "text-sage" : "text-terracotta",
				children: stayOk ? `Average stay ${strategy.inputs.avgStayNights} nights — qualifies as short-term.` : `Average stay ${strategy.inputs.avgStayNights} nights — above the 7-night STR test.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: mp ? "text-sage" : "text-terracotta",
				children: mp ? "Material participation on — losses treated as non-passive." : "No material participation — Year 1 loss is suspended PAL."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bonus applies only to MACRS lives of 20 years or less. The 27.5-year shell never takes §168(k)." })
		]
	});
}
function HouseDiagram({ active, onSelect }) {
	const dim = (id) => active === id ? 1 : .45;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 560 260",
		className: "w-full",
		role: "img",
		"aria-label": "Rainbow House asset diagram",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "560",
				height: "260",
				fill: "var(--color-muted)",
				rx: "12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "188",
				width: "512",
				height: "48",
				rx: "6",
				fill: "var(--color-muted-foreground)",
				opacity: dim("land"),
				className: "cursor-pointer",
				onClick: () => onSelect("land")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "218",
				fill: "var(--color-background)",
				fontSize: "11",
				fontFamily: "Figtree, sans-serif",
				children: "Land"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "72",
				y: "210",
				width: "168",
				height: "14",
				rx: "3",
				fill: "var(--color-sage)",
				opacity: dim("improve"),
				className: "cursor-pointer",
				onClick: () => onSelect("improve")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "96",
				y: "86",
				width: "248",
				height: "124",
				rx: "6",
				fill: "var(--color-chart-4)",
				opacity: dim("real"),
				className: "cursor-pointer",
				onClick: () => onSelect("real")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "88,90 220,28 352,90",
				fill: "var(--color-chart-4)",
				opacity: dim("real"),
				className: "cursor-pointer",
				onClick: () => onSelect("real")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "128",
				y: "128",
				width: "56",
				height: "82",
				fill: "var(--color-background)",
				opacity: .35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "208",
				y: "118",
				width: "48",
				height: "40",
				fill: "var(--color-chart-3)",
				opacity: dim("personal"),
				className: "cursor-pointer",
				onClick: () => onSelect("personal")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "268",
				y: "150",
				width: "44",
				height: "60",
				fill: "var(--color-chart-3)",
				opacity: dim("personal"),
				className: "cursor-pointer",
				onClick: () => onSelect("personal")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "368",
				y: "150",
				width: "120",
				height: "60",
				rx: "6",
				fill: "var(--color-sage)",
				opacity: dim("improve"),
				className: "cursor-pointer",
				onClick: () => onSelect("improve")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "428",
				cy: "168",
				rx: "38",
				ry: "10",
				fill: "var(--color-background)",
				opacity: .25
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "108",
				y: "78",
				fill: "var(--color-foreground)",
				fontSize: "11",
				fontFamily: "Figtree, sans-serif",
				opacity: "0.8",
				children: "27.5-year structure"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "372",
				y: "140",
				fill: "var(--color-foreground)",
				fontSize: "11",
				fontFamily: "Figtree, sans-serif",
				opacity: "0.8",
				children: "15-year pool / site"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "204",
				y: "108",
				fill: "var(--color-foreground)",
				fontSize: "11",
				fontFamily: "Figtree, sans-serif",
				opacity: "0.8",
				children: "5-year FF&E"
			})
		]
	});
}
function Simulator() {
	const inputs = useSim((s) => s.inputs);
	const applyPreset = useSim((s) => s.applyPreset);
	const hydrate = useSim((s) => s.hydrate);
	const [sheetOpen, setSheetOpen] = (0, import_react.useState)(false);
	const comparison = (0, import_react.useMemo)(() => compare(inputs), [inputs]);
	(0, import_react.useEffect)(() => {
		const saved = loadPersistedInputs();
		if (saved) hydrate(saved);
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		persistInputs(inputs);
	}, [inputs]);
	const activePreset = Object.keys(PRESETS).find((id) => {
		const p = PRESETS[id];
		return p.peakOcc === inputs.peakOcc && p.shoulderOcc === inputs.shoulderOcc && p.lowOcc === inputs.lowOcc;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-background/95",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.18em] text-sage uppercase",
							children: "STR tax studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl tracking-tight text-foreground sm:text-3xl",
							children: "Rainbow House"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "lg:hidden",
							onClick: () => setSheetOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}), "Assumptions"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Occupancy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-lg bg-muted p-1",
							children: Object.keys(PRESETS).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applyPreset(id),
								className: cn("h-9 rounded-md px-3 text-sm", activePreset === id ? "bg-card text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" : "text-muted-foreground hover:text-foreground"),
								children: PRESETS[id].label
							}, id))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden h-[calc(100dvh-5.5rem)] border-r border-border lg:sticky lg:top-[5.5rem] lg:block lg:overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPanel, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 space-y-5 px-4 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiStrip, { comparison }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							defaultValue: "overview",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "overview",
										children: "Overview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "tax",
										children: "Asset & tax map"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "ledger",
										children: "Ledger"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "exit",
										children: "Hold vs sell"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "overview",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, { comparison })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "tax",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaxTab, { comparison })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "ledger",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerTab, { comparison })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "exit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExitTab, { comparison })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-3xl pb-8 text-xs leading-relaxed text-muted-foreground",
							children: "Educational model, not tax, legal, or investment advice. Cost segregation requires a study. Bonus depreciation follows IRC §168(k) as amended by the One Big Beautiful Bill and IRS Notice 2026-11 — 100% additional first-year depreciation for qualified property acquired after January 19, 2025. Short-term rental losses offset ordinary income only if the average stay is 7 days or less and you materially participate. Recapture on sale is estimated."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: sheetOpen,
				onOpenChange: setSheetOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Assumptions" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPanel, {})
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Simulator, {});
}
//#endregion
export { Home as component };
