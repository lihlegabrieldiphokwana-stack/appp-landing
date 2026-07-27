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
  Paintbrush,
  Flower2,
  Bug,
  HardHat,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "handyman_repairs",
    tabTitle: "Home Repairs & Handyman",
    icon: Hammer,
    badge: "1-on-1 Multi-Skilled Pros",
    title: "TV mounting, door hanging, furniture assembly & general home fixes.",
    description:
      "Stop putting off that growing list of home repairs. Book background-checked, multi-skilled handyman specialists on Bouul who arrive fully equipped with power tools, wall anchors, and hardware to fix everything in a single visit.",
    timeline: "Same-Day / Scheduled",
    costEstimate: "R350 – R750",
    keyBenefits: [
      "TV wall mounting, shelving installation & curtain rod hanging",
      "Door lock adjustment, hinge replacement & cabinet repair",
      "Escrow protection—funds released only when all items on your list are fixed",
    ],
    ctaText: "Book Handyman Pro",
  },
  {
    id: "painting_renovation",
    tabTitle: "Painting & Wall Restoration",
    icon: Paintbrush,
    badge: "Flawless Interior & Exterior",
    title: "Interior wall painting, crack filling & moisture damp proofing.",
    description:
      "Transform your living space with professional painters. From interior feature walls and ceiling repainting to crack prep, sanding, and exterior damp-seal coating, book vetted contractors with guaranteed clean drop-cloth protection.",
    timeline: "1 - 3 Days",
    costEstimate: "R1,200 – R4,500",
    keyBenefits: [
      "Crack filling, plaster sanding & primer application",
      "Premium washable interior paints & weatherproof exterior seals",
      "Furniture drop-cloth covering & clean post-job cleanup",
    ],
    ctaText: "Get Painting Quote",
  },
  {
    id: "gardening_landscaping",
    tabTitle: "Gardening & Lawn Maintenance",
    icon: Flower2,
    badge: "Regular & Deep Yard Clean",
    title: "Lawn mowing, tree trimming, irrigation & garden refuse removal.",
    description:
      "Keep your garden looking pristine without spending your weekend behind a lawnmower. Book experienced gardeners on Bouul for weekly lawn edging, hedge trimming, flowerbed weeding, and full garden refuse disposal.",
    timeline: "Weekly / Bi-Weekly",
    costEstimate: "R350 – R850",
    keyBenefits: [
      "Lawn mowing, edging, weeding & seasonal pruning",
      "Automatic irrigation system repair & sprinkler head replacement",
      "Full garden refuse collection and eco-friendly dumping",
    ],
    ctaText: "Book Garden Maintenance",
  },
  {
    id: "carpentry_building",
    tabTitle: "Carpentry & Custom Building",
    icon: HardHat,
    badge: "Master Woodworkers & Builders",
    title: "Custom Built-in Cupboards, Decking & Home Alterations.",
    description:
      "Upgrade your home with skilled carpenters and builders. From custom bedroom wardrobes and kitchen cabinet repairs to timber deck installation and brickwork alterations, book trade-tested contractors with verified portfolios.",
    timeline: "Project-Based",
    costEstimate: "R1,500 – R8,500+",
    keyBenefits: [
      "Custom kitchen & bedroom built-in cupboard (BIC) installations",
      "Timber decking, pergola construction & wooden door framing",
      "Milestone-based digital escrow payment release",
    ],
    ctaText: "Plan Carpentry Project",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "General Handyman 2-Hour Repair Visit",
    range: "R350 - R650",
    time: "2 hours",
    desc: "TV wall mounting, mirror hanging, door handle repair, or furniture assembly.",
    includes: ["2 hours labor", "Wall plugs & screws", "Power tool usage"],
  },
  {
    task: "Single Room Interior Wall Painting",
    range: "R1,200 - R2,200",
    time: "1 day",
    desc: "Crack filling, sanding, primer coat, and two coats of premium washable interior paint.",
    includes: ["Crack prep & sanding", "2 coat application", "Floor drop-cloths"],
  },
  {
    task: "Garden Maintenance & Refuse Clean-Up",
    range: "R350 - R650",
    time: "2 - 4 hours",
    desc: "Lawn mowing, edge trimming, flowerbed weeding, hedge shaping, and green refuse disposal.",
    includes: ["Lawn mowing & edging", "Hedge trimming", "Refuse removal"],
  },
  {
    task: "Appliance & AC Maintenance Check",
    range: "R450 - R850",
    time: "1 - 2 hours",
    desc: "Air conditioning filter wash & gas test, or washing machine / fridge diagnostic fix.",
    includes: ["Diagnostic check", "Filter wash", "Gas pressure test"],
  },
];

export default function TradesPage() {
  const [activeTab, setActiveTab] = useState("handyman_repairs");
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
            <span>Verified Handymen, Builders &amp; Trades Pros Active Now • Avg. Confirmation: 5 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Home repairs &amp; trades. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Escrow protected quality.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                From handyman fixes and interior painting to carpentry, building, and gardening. Book trade-tested contractors with upfront pricing, live tracking, and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Hammer className="h-5 w-5" />
                  <span>Book Vetted Trades Pro</span>
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
                  <span>Identity &amp; Background Vetted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.97 Rating (5,800+ Jobs)</span>
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
                  <span className="font-display font-bold text-sm">Trades Contractor Matched</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  Skill &amp; ID Verified
                </span>
              </div>

              {/* Contractor card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">FixMaster Home Services</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Multi-Skilled Handyman &amp; Carpentry • 7 Yrs Exp</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.98</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">390+ Completed Repairs</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Scheduled Slot</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Today 14:00 PM
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R450.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">List repairs or snap photo of wall/door needing work</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow holds payment safely until job completion</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Inspect finished repair &amp; tap 'Job Satisfied' to release funds</span>
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
            <Hammer className="h-3.5 w-3.5" />
            <span>Tailored Trades Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact home repair needs.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your project below to see how our trade-tested contractors deliver quality craftsmanship.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Project Cost</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Trade Vetting</span>
                      <span className="font-semibold text-b-ink">Identity &amp; Skill Verified</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Workmanship Guarantee</span>
                      <span className="font-semibold text-b-ink">Fixed Quote Approval</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never pay upfront cash deposits for building or repairs. Bouul holds your funds in digital escrow until you inspect the work.</span>
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
                <span>Transparent Trades Pricing</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No blind quotes. Fixed trade estimates.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Know what your home repair, painting, or gardening will cost before your contractor arrives. Bouul standardizes baseline rates for common home services.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Upfront Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your contractor approves the fixed quote in-app. If extra materials are required, an updated itemized estimate is submitted for your explicit approval.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Job for Guide Pricing</span>
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
                      Est. Duration: {currentEstimate.time}
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
                    <span>Rates confirmed in-app before work starts.</span>
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
            {/* Left Column: Explaining Zola AI in the context of trades */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI home repair assistant who plans the job.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Snap a photo of cracked drywall, a broken cupboard hinge, or a TV wall mount location. Tell Zola what you need done in plain language—she calculates materials, matches trade pros, and hands you an exact quote draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Wall &amp; Hardware Inspection</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your wall surface or broken fixture. Zola&apos;s vision AI identifies wall types (drywall vs brick), anchor requirements, and paint color match estimates, ensuring your pro brings exact materials.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Home Memory &amp; Paint Specs Profile</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your home wall paint codes (e.g. Plascon Cashmere White), timber finishes, and gate codes. She automatically passes your property specs to future contractors so your home finishes match perfectly.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Multi-Task Booking &amp; Dispatch</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Need a handyman who can mount a TV, fix a door, and hang pictures all in one go? Zola matches multi-skilled pros near your address who complete your entire list in a single visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Trades Chat Mockup */}
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
                          Vision &amp; Hardware Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Home Repairs Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I need my 65-inch TV mounted on this brick wall. Here is a photo of the space:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">tv_wall_mount_area.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: Solid Brick Wall • Heavy Duty Bracket</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Wall &amp; Hardware Diagnostic</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your photo: solid red brick wall behind plaster. Requires 10mm rawl bolts for a secure 65-inch TV mount.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **FixMaster Home Services** (4.98 ★, 390+ repairs) who carries heavy-duty tilting TV brackets and masonry drill bits.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Confirmed Repair Draft
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">65&quot; TV Wall Mount &amp; Cable Concealment</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">FixMaster • Today 14:00 PM • Fixed R450</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% mounting guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Trades Precision ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Quality Home Trades</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why hiring a contractor on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Home repairs require skill and reliability. We engineered an end-to-end platform enforcing identity verification, milestone digital escrow, and transparent quotes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. 100% Identity & Skill Vetted",
              subtitle: "Strict contractor background checks",
              body: "Every handyman, painter, carpenter, and builder on Bouul undergoes identity checks, criminal background verification, and trade skill testing before placement.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Never pay upfront cash deposits",
              body: "Never risk losing a cash deposit to an unverified builder. Your funds are held safely in Bouul digital escrow and only released after you inspect completed work.",
            },
            {
              icon: MapPin,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Live Arrival & Vehicle Tracking",
              subtitle: "Know when your pro arrives",
              body: "Track your assigned handyman or contractor vehicle live on an interactive map. Know their exact arrival minute so you can plan your day.",
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
                <span>Standard on all trades bookings</span>
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
              <span>Proven Same-Day Home Fix</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From broken cupboard &amp; unmounted TV to fixed home in 2.5 hours.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a 4-item home repair list was completed seamlessly in one visit using Bouul&apos;s handyman dispatch.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Request",
                time: "13:00 PM",
                title: "Repair List Uploaded",
                desc: "Homeowner uploads photos of 65\" TV, loose cupboard hinge & curtain rod.",
                badge: "List Saved",
              },
              {
                step: "02. Match",
                time: "13:05 PM",
                title: "Handyman Dispatched",
                desc: "Zola AI matches FixMaster carrying rawl bolts, drill & hinge replacements.",
                badge: "Escrow Locked",
              },
              {
                step: "03. Arrival",
                time: "14:00 PM",
                title: "On-Site Work Begins",
                desc: "TV mounted on brick wall, cupboard hinge replaced & curtain rods aligned.",
                badge: "Live Arrival Check",
              },
              {
                step: "04. Resolution",
                time: "15:30 PM",
                title: "Inspection & Approval",
                desc: "Homeowner tests TV mount & cupboard doors, then taps 'Satisfied' to release funds.",
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
                  <span>Typical Handyman Repair</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TRADES PROS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional trades standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every trade contractor on Bouul is vetted for quality and craftsmanship. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "carpentry",
              tag: "Carpentry & BICs",
              title: "Custom Built-in Cupboard Installation",
              desc: "Precision wood joinery, soft-close hinges, and custom melamine bedroom wardrobe fitting.",
            },
            {
              file: "remodeling",
              tag: "Interior Painting",
              title: "Flawless Washable Wall Painting",
              desc: "Crack filling, plaster sanding, primer coat, and two coats of premium interior satin paint.",
            },
            {
              file: "gardening",
              tag: "Gardening & Lawn",
              title: "Lawn Mowing & Edge Shaping",
              desc: "Precision lawn mowing, weed removal, flowerbed edging, and garden refuse disposal.",
            },
            {
              file: "hardware",
              tag: "Handyman Fixes",
              title: "Heavy-Duty TV & Shelf Wall Mounting",
              desc: "Solid brick and drywall TV mounting with concealed cabling and level alignment.",
            },
            {
              file: "appliances",
              tag: "AC & Appliance Repair",
              title: "Air Conditioner Servicing & Gas Top-Up",
              desc: "Air conditioning filter wash, compressor diagnostic test, and refrigerant re-gassing.",
            },
            {
              file: "interior_design",
              tag: "Tiling & Flooring",
              title: "Precision Ceramic & Porcelain Tiling",
              desc: "Tile floor leveling, adhesive spreading, spacer alignment, and waterproof grouting.",
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
                  <span>100% Quality Guarantee</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. COMPREHENSIVE TRADES SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every home repair &amp; trades service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From handyman repairs and painting to carpentry, building, gardening, and appliance maintenance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🔨 Handyman & Home Repairs",
              items: [
                "TV wall mounting & cable hiding",
                "Shelving & curtain rod hanging",
                "Door hinge & lock latch adjustments",
                "Furniture flat-pack assembly",
                "Ceiling fan & light fixture mounting",
                "Window latch & sliding door repairs",
              ],
            },
            {
              category: "🎨 Painting & Building Trades",
              items: [
                "Interior wall & ceiling repainting",
                "Exterior damp-proofing & weather seal",
                "Crack filling, plastering & drywall repair",
                "Custom built-in cupboard (BIC) carpentry",
                "Timber deck & pergola construction",
                "Floor tiling, grouting & waterproofing",
              ],
            },
            {
              category: "🌿 Outdoor, AC & Appliances",
              items: [
                "Lawn mowing, edging & weeding",
                "Tree pruning & garden refuse disposal",
                "Air conditioner servicing & gas re-gassing",
                "Appliance repair (washing machines, fridges)",
                "Pest control & termites extermination",
                "Pool cleaning & pump maintenance",
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

      {/* ── 9. EXTENSIVE TRADES FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking trades pros.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do handymen on Bouul bring their own tools and wall anchors?",
                a: "Yes! Handymen booked on Bouul arrive with complete power tool sets, masonry drill bits, rawl plugs, level tools, and hardware fasteners required for your job.",
              },
              {
                q: "How does escrow protect me against bad quality building or painting work?",
                a: "Your payment is secured digitally in Bouul escrow when you approve the quote. Funds are only released to your contractor after you inspect the finished work and tap 'Job Satisfied'.",
              },
              {
                q: "Can I combine multiple small repairs into one handyman visit?",
                a: "Absolutely! You can list multiple tasks (e.g., mount TV, fix door latch, hang 3 picture frames) in your booking request so a single pro completes everything in one visit.",
              },
              {
                q: "Who provides the paint for interior painting jobs?",
                a: "You can specify during booking whether you'll provide your own paint or if you'd like your painter to supply brand-name washable paint (e.g. Dulux, Plascon) in your chosen shade.",
              },
              {
                q: "How are contractors vetted on Bouul?",
                a: "Every trades professional undergoes identity validation, criminal background checks, proof of address verification, and portfolio review before activation.",
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
              <Hammer className="h-3.5 w-3.5" />
              <span>Verified Home Trades Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to cross off your home repair list?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over unreliable handymen or cash deposit risks again. Join thousands who use Bouul to book trade-tested, escrow-protected pros in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Hammer className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Identity Vetted
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
