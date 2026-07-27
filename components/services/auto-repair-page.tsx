"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  Zap,
  MessageCircle,
  Home,
  Clock,
  ArrowRight,
  Search,
  CalendarCheck,
  Smartphone,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  FileText,
  MapPin,
  UserCheck,
  Camera,
  Sparkles,
  TrendingUp,
  HelpCircle,
  PhoneCall,
  Award,
  Lock,
  RefreshCw,
  ChevronRight,
  Star,
  Check,
  Info,
  Building2,
  Hammer,
  Brain,
  Car,
  Disc3,
  Gauge,
  Battery,
  Cog,
  Shield,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "breakdown",
    tabTitle: "Mobile Emergency Breakdown",
    icon: Wrench,
    badge: "20-30 Min Mobile Dispatch",
    title: "Car won't start or broke down on the road? Mobile mechanic dispatch.",
    description:
      "Stuck in a driveway or parking lot with a dead battery, failed alternator, or snapping belt? Bouul dispatches certified mobile mechanics equipped with heavy-duty jump starters, diagnostic scanners, and emergency replacement batteries directly to your location.",
    timeline: "20 - 30 Mins ETA",
    costEstimate: "R650 – R1,400",
    keyBenefits: [
      "24/7 Mobile mechanic dispatch for dead batteries, starters & belts",
      "OBD-II live error code scanning on site before towing",
      "Escrow protection—funds released only when your engine runs smoothly",
    ],
    ctaText: "Request Mobile Mechanic",
  },
  {
    id: "service",
    tabTitle: "Minor & Major Vehicle Servicing",
    icon: Cog,
    badge: "RMI Accredited Workshops",
    title: "Keep your warranty intact with transparent minor & major servicing.",
    description:
      "Avoid dealership markups while maintaining full service history. Book RMI and MIWA accredited workshops on Bouul for minor (oil, oil filter, multi-point check) and major services (spark plugs, air filter, fuel filter, timing belt inspection).",
    timeline: "2 - 4 Hours",
    costEstimate: "R1,200 – R2,800",
    keyBenefits: [
      "OEM-grade oil & filter replacements maintaining factory warranties",
      "Comprehensive 50-point safety & brake wear inspection report",
      "Itemized digital invoice detailing exact parts & labor costs",
    ],
    ctaText: "Book Scheduled Service",
  },
  {
    id: "brakes",
    tabTitle: "Brakes, Discs & Suspension",
    icon: Disc3,
    badge: "Precision Brake Systems",
    title: "Squealing brakes or soft pedal? Get high-performance pads & discs fitted.",
    description:
      "Brakes are your vehicle's single most critical safety system. Book certified brake specialists on Bouul who replace worn pads, skim or replace rusted brake discs, and flush brake fluid to ensure maximum stopping power.",
    timeline: "1 - 2 Hours",
    costEstimate: "R1,450 – R3,200",
    keyBenefits: [
      "Ferodo & Bosch approved brake pad & disc replacements",
      "Hydraulic brake fluid flushing & caliper slide lubrication",
      "Anti-squeal compound application and road test safety check",
    ],
    ctaText: "Book Brake Replacement",
  },
  {
    id: "diagnostics",
    tabTitle: "Check Engine Light & Diagnostics",
    icon: Gauge,
    badge: "Advanced OBD-II Scan",
    title: "Check engine light illuminated? Precise diagnostic fault finding.",
    description:
      "Don't guess what your car's dashboard warning lights mean. Book diagnostic technicians equipped with dealer-level OBD-II scan tools that read live ECU sensor data, pinpoint misfires, and reset fault codes accurately.",
    timeline: "30 - 60 Mins",
    costEstimate: "R450 – R850",
    keyBenefits: [
      "Full ECU diagnostic scan covering engine, ABS & airbags",
      "Live sensor data reading (MAF, oxygen sensor, fuel trim)",
      "Clear explanation of error codes before replacing expensive parts",
    ],
    ctaText: "Book Diagnostic Scan",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "On-Site Battery Replacement & Jumpstart",
    range: "R650 - R1,400",
    time: "30 - 45 mins",
    desc: "Mobile dispatch with new sealed maintenance-free battery, terminal cleaning, and alternator charge test.",
    includes: ["New 12V battery", "Terminal protection", "Alternator test"],
  },
  {
    task: "Minor Engine Oil & Filter Service",
    range: "R1,200 - R1,950",
    time: "1 - 2 hours",
    desc: "Full synthetic engine oil drain, new OEM-grade oil filter, fluid top-ups, and 30-point safety check.",
    includes: ["Synthetic engine oil", "New oil filter", "Safety inspection"],
  },
  {
    task: "Front Brake Pads & Disc Replacement",
    range: "R1,450 - R3,200",
    time: "1 - 2 hours",
    desc: "Replacement of front axle ceramic/metallic brake pads and new ventilated brake discs.",
    includes: ["New brake pads", "New brake discs", "Caliper service"],
  },
  {
    task: "OBD-II Diagnostic Scan & Fault Reset",
    range: "R450 - R850",
    time: "30 - 45 mins",
    desc: "Full electronic scan of engine control unit (ECU), sensor diagnosis, and error code clearing.",
    includes: ["Full ECU scan", "Diagnostic printout", "Code clearing"],
  },
];

export default function AutoRepairPage() {
  const [activeTab, setActiveTab] = useState("breakdown");
  const [selectedEstimate, setSelectedEstimate] = useState(0);

  const currentSituation = SITUATIONS.find((s) => s.id === activeTab) || SITUATIONS[0];
  const currentEstimate = PRICE_ESTIMATES[selectedEstimate];

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40 border-b border-b-line">
        <div className="mx-auto max-w-6xl">
          {/* Active Pros Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-b-green/30 bg-b-green/10 px-4 py-1.5 text-xs font-semibold text-b-green-deep mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-b-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-b-green-deep"></span>
            </span>
            <span>Verified RMI &amp; MIWA Mechanics Active Now • Avg. Diagnostic Quote: 8 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Honest mechanics. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Escrow protected quotes.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Say goodbye to inflated garage quotes and mysterious extra charges. Book RMI-accredited workshops and mobile mechanics with upfront itemized pricing, live tracking, and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Car className="h-5 w-5" />
                  <span>Book Vetted Mechanic</span>
                </Link>

                <a
                  href="#use-cases"
                  className="rounded-full border border-b-line bg-b-paper-raised px-6 py-4 font-semibold text-b-ink transition-all hover:bg-b-paper-deep flex items-center gap-2"
                >
                  <Search className="h-4 w-4 text-b-ink-soft" />
                  <span>Explore Use Cases</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-medium text-b-ink-faint border-t border-b-line pt-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>RMI &amp; MIWA Vetted Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.98 Rating (3,800+ Services)</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header mock */}
              <div className="flex items-center justify-between pb-4 border-b border-b-line mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display font-bold text-sm">Mobile Mechanic Active</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  RMI Certified Workshop
                </span>
              </div>

              {/* Mechanic card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      <Car className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">ProDrive Automotive</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Master Auto Technician • Member #RMI-4491</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">410 Completed Services</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Live Status</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Mobile Van (18 mins)
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R1,450.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Select car make &amp; warning symptom or service type</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow locks fixed rate before work starts</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Road test &amp; diagnostic verification before payout</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE 4-SITUATION EXPLORER ── */}
      <section id="use-cases" className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Car className="h-3.5 w-3.5" />
            <span>Tailored Automotive Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact vehicle issues.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your automotive situation below to see how our accredited workshops and mobile mechanics deliver honest repair work.
          </p>
        </div>

        {/* Situation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SITUATIONS.map((sit) => {
            const Icon = sit.icon;
            const isActive = activeTab === sit.id;
            return (
              <button
                key={sit.id}
                onClick={() => setActiveTab(sit.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-b-ink text-white shadow-lg scale-[1.02]"
                    : "bg-b-paper-raised text-b-ink-soft border border-b-line hover:border-b-ink/30 hover:text-b-ink"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-b-sun" : "text-b-ink-faint"}`} />
                <span>{sit.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl"
          >
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full">
                  <span>{currentSituation.badge}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-b-ink leading-tight">
                  {currentSituation.title}
                </h3>

                <p className="text-base leading-relaxed text-b-ink-soft">
                  {currentSituation.description}
                </p>

                <div className="space-y-3 pt-2">
                  {currentSituation.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-b-ink font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/download"
                    className="rounded-full bg-b-green px-8 py-3.5 font-bold text-b-forest shadow-md hover:bg-emerald-400 transition-all flex items-center gap-2"
                  >
                    <span>{currentSituation.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Summary Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-6 shadow-sm">
                  <div className="border-b border-b-line pb-4">
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Cost &amp; Turnaround</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Accreditation</span>
                      <span className="font-semibold text-b-ink">RMI / MIWA Certified Workshops</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Parts Guarantee</span>
                      <span className="font-semibold text-b-ink">OEM Grade Parts Warranty</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never pay for unapproved replacement parts. Bouul requires explicit in-app approval before any extra work begins.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── 3. UPFRONT PRICE ESTIMATOR CALCULATOR ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-y border-b-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Transparent Automotive Pricing</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                Clear mechanic rates. No inflated repair quotes.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Know what your car service or repair costs before handing over your keys. Bouul standardizes labor and diagnostics rates across vetted partner workshops.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Repair Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your mechanic uploads itemized part invoices and diagnostic scan reports in-app. Escrow is held until you complete a road test and approve the invoice.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Repair Type for Guide Pricing</span>
                  <span className="text-xs font-semibold text-b-ink-faint">Standard Platform Rate Structure</span>
                </div>

                {/* Selectors */}
                <div className="grid grid-cols-2 gap-2.5">
                  {PRICE_ESTIMATES.map((item, idx) => (
                    <button
                      key={item.task}
                      onClick={() => setSelectedEstimate(idx)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedEstimate === idx
                          ? "border-emerald-600 bg-emerald-500/10 text-b-ink font-bold shadow-sm"
                          : "border-b-line bg-b-paper-raised text-b-ink-soft hover:bg-b-paper"
                      }`}
                    >
                      <div className="text-xs font-semibold">{item.task}</div>
                      <div className="text-sm font-extrabold text-emerald-600 mt-1">{item.range}</div>
                    </button>
                  ))}
                </div>

                {/* Selected Detail Box */}
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-base text-b-ink">{currentEstimate.task}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                      Est. Time: {currentEstimate.time}
                    </span>
                  </div>

                  <p className="text-xs text-b-ink-soft leading-relaxed">{currentEstimate.desc}</p>

                  <div className="border-t border-b-line pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-b-ink-faint block mb-2">What&apos;s Included as Standard:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {currentEstimate.includes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-b-ink">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-b-ink-faint">
                    <span>Rates confirmed in-app before mechanic starts.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Get Exact Quote In App</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BOOK, DIAGNOSE & PLAN WITH ZOLA AI ── */}
      <section className="bg-b-forest py-24 px-5 text-b-cream relative overflow-hidden border-t border-b border-b-forest-line">
        <div className="absolute -left-40 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-b-sun/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column: Explaining Zola AI in the context of auto repair */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI auto assistant who diagnoses warning lights.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Hear a strange knocking sound or see a dashboard warning light? Tell Zola what&apos;s happening in plain language or voice notes—she cross-references mechanics, checks parts, and hands you an exact quote draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Dashboard &amp; Engine Diagnostics</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your dashboard error light or engine bay. Zola&apos;s vision AI analyzes warning symbols and engine components, generating a diagnostic brief so your mechanic brings exact replacement sensors or tools.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Vehicle Memory &amp; Service Log</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your vehicle profile (e.g. 2021 VW Polo 1.0 TSI, VIN, synthetic oil spec, mileage history). She automatically applies your car specs to future servicing so you get exact OEM-grade oil and filters.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Workshop &amp; Mobile Dispatch</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola checks RMI workshop availability and mobile mechanic vans in real time, connecting you with an accredited technician near your address.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Auto Repair Chat Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative">
                <div className="flex items-center justify-between border-b border-b-forest-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-b-sun text-b-ink font-bold shadow-sm">
                      <Sparkles className="h-5 w-5 text-b-ink" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">Zola AI Assistant</span>
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                          Vision &amp; Vehicle Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Automotive Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">My brake pedal feels spongy and this warning light came on:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">dash_brake_warning.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: ABS &amp; Brake Wear Indicator</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Vehicle Diagnostic Check</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your photo: that&apos;s the brake pad wear indicator. From your **Vehicle Memory profile** (2021 VW Polo 1.0 TSI, 48,200km), your front pads are due for replacement.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **ProDrive Automotive** (RMI Accredited #RMI-4491, 18 mins away) who carries Ferodo ceramic brake pads in stock.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Ready for Repair Dispatch
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Front Brake Pad Replacement &amp; Fluid Flush</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">ProDrive Automotive • RMI Certified • Est. R1,450</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% parts warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Automotive Precision ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Wrench className="h-3.5 w-3.5" />
            <span>Built For Vehicle Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why servicing your car on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Your vehicle is essential for daily life. We engineered an end-to-end platform enforcing RMI workshop accreditation, digital escrow, and transparent part invoices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. RMI & MIWA Vetted Workshops",
              subtitle: "No unqualified backyard mechanics",
              body: "Every workshop and mobile mechanic on Bouul undergoes RMI registration validation and technician qualification checks. Uncertified backyard operators are strictly barred.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "No surprise invoice markups",
              body: "Never worry about a mechanic holding your car hostage for extra unapproved charges. Your payment is held safely in escrow and only released after your road test.",
            },
            {
              icon: MapPin,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Real-Time Vehicle & Van Tracking",
              subtitle: "Know when your car or mechanic arrives",
              body: "Track mobile mechanic vans live on an interactive map or receive instant push notifications when your vehicle enters the workshop bay and passes final testing.",
            },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-sm"
            >
              <div>
                <div className={`h-12 w-12 rounded-2xl ${feat.color} flex items-center justify-center mb-6`}>
                  <feat.icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-b-ink-faint mb-1">{feat.subtitle}</div>
                <h3 className="font-display text-xl font-bold text-b-ink mb-3">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-b-ink-soft">{feat.body}</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-b-line/80 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span>Standard on all auto repairs</span>
                <Check className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. REAL CASE STUDY TIMELINE WALKTHROUGH ── */}
      <section className="bg-b-forest text-b-cream py-24 px-5 border-y border-b-forest-line relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-b-sun bg-b-sun/10 px-3 py-1 rounded-full mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Proven Mobile Breakdown Repair</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From dead battery to running engine in 38 minutes.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a morning driveway breakdown was diagnosed and fixed on site using Bouul&apos;s mobile mechanic dispatch.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Incident",
                time: "07:15 AM",
                title: "Engine Clicking & No-Start",
                desc: "Driver experiences rapid clicking on ignition. Snaps photo of dashboard battery light in Bouul app.",
                badge: "Photo Uploaded",
              },
              {
                step: "02. Match",
                time: "07:18 AM",
                title: "Mobile Van Dispatched",
                desc: "Zola AI matches ProDrive Mobile Van carrying 12V sealed battery and alternator tester.",
                badge: "Escrow Locked",
              },
              {
                step: "03. Arrival",
                time: "07:36 AM",
                title: "18-Min Van Arrival",
                desc: "Mobile tech arrives, performs diagnostic test, and replaces faulty 65Ah battery on driveway.",
                badge: "Live GPS Tracking",
              },
              {
                step: "04. Resolution",
                time: "07:53 AM",
                title: "Engine Started & Road Test",
                desc: "Alternator charging confirmed, driver tests ignition, and taps 'Satisfied' to release funds.",
                badge: "Escrow Released",
              },
            ].map((t, idx) => (
              <div key={t.step} className="rounded-2xl border border-b-forest-line bg-b-forest-raised p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-price font-bold text-sm text-b-sun bg-b-sun/15 px-2.5 py-1 rounded-md">{t.time}</span>
                    <span className="text-[11px] font-semibold text-b-cream/60">{t.badge}</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-b-sun/80 mt-4">{t.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">{t.title}</h3>
                  <p className="text-xs leading-relaxed text-b-cream/75">{t.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-b-forest-line/60 flex items-center justify-between text-[11px] text-b-cream/50">
                  <span>Typical Driveway Repair</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. MECHANICS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional automotive standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every mechanic on Bouul is vetted for safety and precision. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "auto_repair",
              tag: "Engine Servicing",
              title: "Synthetic Oil & OEM Filter Change",
              desc: "High-grade synthetic oil replacement, new OEM filter fitting, and comprehensive 50-point engine health check.",
            },
            {
              file: "hardware",
              tag: "Brake Systems",
              title: "Front & Rear Disc & Pad Replacement",
              desc: "Ferodo ceramic brake pads, ventilated disc replacements, and hydraulic line pressure bleeding.",
            },
            {
              file: "electrical_service",
              tag: "Electrical Diagnostics",
              title: "OBD-II ECU Scan & Sensor Calibration",
              desc: "Dealer-level electronic scan tool reading ECU error codes, mass air flow sensors, and oxygen sensors.",
            },
            {
              file: "appliances",
              tag: "Battery & Charging",
              title: "Heavy-Duty 12V Battery & Alternator Test",
              desc: "Sealed maintenance-free battery installation, terminal corrosion cleaning, and alternator output testing.",
            },
            {
              file: "towing",
              tag: "Mobile Call-Out",
              title: "On-Site Driveway Emergency Repair",
              desc: "Mobile service van fully equipped for driveway starter motor, alternator, and coolant line replacements.",
            },
            {
              file: "smart_home",
              tag: "Air Conditioning",
              title: "Vehicle HVAC & Cabin Filter Service",
              desc: "Air conditioning gas re-gassing, compressor leak test, and pollen filter replacement for ice-cold airflow.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden hover:border-emerald-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full bg-b-paper-deep relative overflow-hidden">
                  <img
                    src={`/scenes/${item.file}.png`}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-b-ink/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Vetted Standard</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-b-ink group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-b-ink-soft">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-4 border-t border-b-line/60 flex items-center justify-between text-[11px] text-b-ink-faint">
                <span className="font-semibold text-b-ink-soft">Covered by Bouul Escrow</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>100% Workmanship Guarantee</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. COMPREHENSIVE AUTO REPAIR SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every auto repair service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From routine oil servicing to major engine diagnostic overhauls, book accredited mechanics with verified credentials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🚗 Engine Servicing & Maintenance",
              items: [
                "Minor synthetic oil & oil filter service",
                "Major service (spark plugs, fuel/air filters)",
                "Timing belt & tensioner kit replacement",
                "Coolant flush & radiator hose replacement",
                "Engine valve cover gasket leak repair",
                "Drive belt & alternator belt fitting",
              ],
            },
            {
              category: "🛑 Brakes, Suspension & Steering",
              items: [
                "Front & rear brake pad replacements",
                "Ventilated brake disc fitment & skimming",
                "Brake fluid hydraulic pressure flushing",
                "Front shock absorber & strut replacement",
                "Tie rod end & wheel bearing replacement",
                "Power steering fluid & hose leak repair",
              ],
            },
            {
              category: "⚡ Electrical, Batteries & HVAC",
              items: [
                "On-site 12V sealed battery installation",
                "OBD-II ECU error code scanning & reset",
                "Alternator & starter motor replacement",
                "Air conditioning gas re-gassing & leak test",
                "Headlight bulb & wiring loom repair",
                "Vehicle security & tracking unit fitment",
              ],
            },
          ].map((col) => (
            <div key={col.category} className="rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-b-ink mb-4 pb-3 border-b border-b-line">
                {col.category}
              </h3>
              <ul className="space-y-2.5 text-xs text-b-ink-soft">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. EXTENSIVE AUTO REPAIR FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking auto repair.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Will servicing my car through Bouul void my manufacturer warranty?",
                a: "No! Under Right to Repair laws, servicing your out-of-plan or in-warranty vehicle at an RMI/MIWA accredited workshop using OEM-grade parts preserves your legal rights and vehicle resale value.",
              },
              {
                q: "What if the mechanic discovers additional worn parts during a service?",
                a: "Mechanics on Bouul cannot add unapproved line items to your bill. If extra worn parts are found during inspection, your mechanic sends an updated itemized quote in-app for your explicit approval before work continues.",
              },
              {
                q: "Can a mobile mechanic change my brakes or battery in my home driveway?",
                a: "Yes! Mobile mechanics booked on Bouul carry hydraulic jacks, torque wrenches, and OBD diagnostic tools directly to your home or office driveway for routine maintenance.",
              },
              {
                q: "What guarantee do I have on replaced car parts?",
                a: "All new OEM-grade parts installed by Bouul accredited mechanics come with a standard 6 to 12-month manufacturer warranty covering both parts and labor.",
              },
              {
                q: "How does escrow protect my automotive repair payment?",
                a: "Your payment is secured digitally in Bouul escrow when you approve the quote. Funds are only released to your mechanic after you complete a road test and tap 'Job Satisfied'.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-2 shadow-sm"
              >
                <h3 className="font-display font-bold text-base text-b-ink flex items-start gap-2">
                  <span className="text-emerald-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm leading-relaxed text-b-ink-soft pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. BOTTOM FINAL CTA ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <Car className="h-3.5 w-3.5" />
              <span>Accredited Mechanic Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to service or repair your vehicle?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over inflated mechanic bills or unvetted garages again. Join drivers who use Bouul to book RMI-accredited, escrow-protected mechanics in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Car className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> RMI &amp; MIWA Vetted
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-emerald-600" /> Escrow Protected
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
