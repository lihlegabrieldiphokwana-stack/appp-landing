"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GenericActivityArticleModal, ActivityArticleData } from "./articles/generic-activity-article-modal";
import { getArticleById } from "./articles/master-article-registry";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  Zap,
  MessageCircle,
  Home,
  Droplets,
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
  BookOpen,
  Lock,
  RefreshCw,
  ChevronRight,
  Star,
  Check,
  Info,
  Building2,
  Hammer,
  Brain,
  Sun,
  Battery,
  Cpu,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "outage",
    tabTitle: "Emergency Outage & Tripping DB",
    icon: Zap,
    badge: "15-30 Min Priority Dispatch",
    title: "Tripping breakers or a pitch-black home? Get verified emergency response.",
    description:
      "When your DB board trips continuously or half your home loses power unexpectedly, waiting until Monday isn't an option. Bouul dispatches licensed master electricians equipped with high-precision fault meters to isolate earth leaks and restore power safely.",
    timeline: "30 Mins ETA",
    costEstimate: "R450 – R750",
    keyBenefits: [
      "24/7 Priority dispatch for burning smells or dead DB boards",
      "Earth leakage diagnostic testing & breaker replacements",
      "Escrow protection—funds held until lights and appliances run smoothly",
    ],
    ctaText: "Book Emergency Electrician",
  },
  {
    id: "inverter",
    tabTitle: "Solar & Inverter Installations",
    icon: Sun,
    badge: "Certified Solar Installers",
    title: "Clean backup power, wired to Department of Labour standards.",
    description:
      "Protect your expensive lithium batteries and hybrid inverters from amateur wiring. Bouul connects you with vetted solar and backup power specialists who install automatic transfer switches, surge protection, and compliant sub-DBs.",
    timeline: "Same-Day / Scheduled",
    costEstimate: "R2,500 – R8,500+",
    keyBenefits: [
      "SANS 10142-1 compliant inverter & battery integration",
      "Automatic transfer switch (ATS) & surge arrester setup",
      "Full system load balancing and battery health optimization",
    ],
    ctaText: "Schedule Inverter Installation",
  },
  {
    id: "coc",
    tabTitle: "Certificate of Compliance (CoC)",
    icon: FileText,
    badge: "Registered Inspection Pros",
    title: "Selling your property? Get legal electrical compliance without the hassle.",
    description:
      "Selling or renting your property requires a legal Certificate of Compliance. Book registered installation electricians on Bouul who perform honest, transparent inspections and issue digital CoC documentation required by banks and conveyancers.",
    timeline: "24-48 Hours",
    costEstimate: "R850 – R1,800",
    keyBenefits: [
      "Department of Labour registered installation electricians",
      "Itemized diagnostic reports before any remedial work",
      "Digital CoC certificate delivered directly through the app",
    ],
    ctaText: "Book CoC Inspection",
  },
  {
    id: "smart_lighting",
    tabTitle: "Rewiring & Smart Lighting",
    icon: Cpu,
    badge: "Modern Home Upgrades",
    title: "Upgrade to energy-efficient LED, smart switches & modern DB boards.",
    description:
      "From sleek recessed LED downlights and smart Wi-Fi switches to complete DB board modernization, transform your home's energy efficiency and aesthetic with certified electrical technicians.",
    timeline: "Flexible Scheduling",
    costEstimate: "R650 – R3,200",
    keyBenefits: [
      "Smart switch & automated home lighting integration",
      "Clean, labeled distribution board overhauls",
      "Full warranty on materials and workmanship",
    ],
    ctaText: "Plan Lighting Upgrade",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "Fault Finding & Earth Leakage Fix",
    range: "R450 - R850",
    time: "45 - 90 mins",
    desc: "Diagnostic testing, earth leakage isolation, and replacement of single-pole circuit breakers.",
    includes: ["Diagnostic testing", "Component replacement", "DB board safety check"],
  },
  {
    task: "Geyser Element & Thermostat Wiring",
    range: "R650 - R1,200",
    time: "1 - 2 hours",
    desc: "Replacement of burnt isolator switches, geyser timers, thermostats, or heating elements.",
    includes: ["Isolator switch replacement", "Timer programming", "Thermal safety test"],
  },
  {
    task: "Backup Inverter & ATS Connection",
    range: "R2,200 - R5,500",
    time: "3 - 6 hours",
    desc: "AC input/output sub-DB wiring, changeover switch installation, and battery fuse protection.",
    includes: ["Sub-DB installation", "Surge protection", "Load testing"],
  },
  {
    task: "Electrical CoC Inspection & Certificate",
    range: "R950 - R1,800",
    time: "2 - 3 hours",
    desc: "Comprehensive SANS 10142-1 inspection covering DB boards, bonding, earthing, and socket outlets.",
    includes: ["Full property test", "Defect reporting", "Digital CoC issuance"],
  },
];

export default function ElectriciansPage() {
  const [activeTab, setActiveTab] = useState("outage");
  const [selectedEstimate, setSelectedEstimate] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<ActivityArticleData | null>(null);

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
            <span>Verified Master Electricians Available Now • Avg. Emergency Response: 28 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Power restored safely. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Escrow protected.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                From tripping breakers and solar inverter setups to legal Certificates of Compliance (CoC). Book vetted electrical contractors with upfront pricing, live tracking, and digital escrow protection.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Zap className="h-5 w-5" />
                  <span>Book Certified Electrician</span>
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
                  <span>ECASA &amp; DoL Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.96 Rating (3,100+ Jobs)</span>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header mock */}
              <div className="flex items-center justify-between pb-4 border-b border-b-line mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-display font-bold text-sm">Emergency Fault Dispatch</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  SANS 10142-1 Certified
                </span>
              </div>

              {/* Electrician card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 font-bold text-white text-lg shadow-md">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">VoltTech Electrical</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Master Installation Electrician • License #EC-8492</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">184 CoC &amp; Inverter Jobs</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Live Status</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> En Route (14 mins)
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R550.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Fault diagnostic brief sent with DB board photo</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow locks fixed rate before dispatch</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Power restored &amp; compliance check before payout</span>
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
            <Zap className="h-3.5 w-3.5" />
            <span>Tailored Electrical Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact electrical situation.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your current scenario below to see how our verified electrical contractors protect your safety, property, and budget.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Dispatch &amp; Cost</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Certified Contractor</span>
                      <span className="font-semibold text-b-ink">ECASA / DoL Registered</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Arrival Guarantee</span>
                      <span className="font-semibold text-b-ink">Live GPS Vehicle Tracking</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never pay upfront cash for electrical work. Bouul secures your deposit in escrow until the power test is complete.</span>
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
                <span>Transparent Electrical Pricing</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No hidden call-out traps. Know the rate before booking.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Unscrupulous electricians often inflate call-out charges or quote blind over the phone. Bouul standardizes baseline pricing so you know what typical electrical jobs cost before booking.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Upfront Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your contractor approves the fixed price or milestone estimate in-app. If extra work or parts are needed, an updated quote is submitted for your explicit approval before work continues.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select a Typical Job for Guide Pricing</span>
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
                    <span>Final price confirmed in-app before work starts.</span>
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
            {/* Left Column: Explaining Zola AI in the context of electrical */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI electrical assistant who actually books the job.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Stop guessing circuit breaker ratings or searching for license numbers. Tell Zola what&apos;s tripping in plain language or voice notes—she cross-references electrical licences, availability, and hands you a guaranteed booking draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Diagnostics &amp; DB Board Matching</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your tripping DB board or inverter error screen. Zola&apos;s vision AI analyzes breaker types, earth leakage switches, and fault codes, generating a technical brief so your electrician arrives with exact replacement breakers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Home Memory &amp; Solar Specs</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your electrical setup. Once you save your inverter capacity (e.g., 5kW Sunsynk + 5.12kWh lithium battery) or CoC history, she applies your property specs automatically to future electrical bookings.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Licence Verification &amp; Route Dispatch</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      No uncertified risks. Zola verifies ECASA / Department of Labour registration in real time, connecting you only with certified electricians who are currently active and near your address.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Electrical Chat Mockup */}
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
                          Vision &amp; Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • 24/7 Electrical Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">My main breaker keeps tripping when the inverter kicks in! Here is my DB board photo:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">db_board_tripping.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: 63A Earth Leakage Switch Neutral Fault</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Electrical &amp; Home Memory Diagnostic</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your DB board photo: the 63A earth leakage is tripping due to a shared neutral line on your non-essential circuit. From your **Home Memory profile**, your 5kW inverter was installed 8 months ago.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **VoltTech Electrical** (Licensed Master Electrician #EC-8492, 14 mins away) who carries neutral separation kits in his van.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Ready for Dispatch
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">DB Neutral Isolation &amp; Fault Fix</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">VoltTech Electrical • License Verified • Est. R550</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% safety guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Electrical Precision ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Wrench className="h-3.5 w-3.5" />
            <span>Built For Electrical Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why booking an electrician on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            High-voltage systems leave zero margin for error. We engineered an end-to-end framework enforcing licence validation, milestone escrow, and live arrival tracking.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. Verified Trade Accreditation",
              subtitle: "No uncertified handymen on high voltage",
              body: "Every electrical contractor on Bouul must upload valid Department of Labour wireman's licences and ECASA membership proof. Unlicensed handymen are strictly barred from high-voltage bookings.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Capital protection on high-value jobs",
              body: "Whether paying R500 for a breaker fix or R15,000 for a full solar overhaul, your funds are safely locked in Bouul's independent digital escrow until the power test is passed and you approve the job.",
            },
            {
              icon: MapPin,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Live GPS Arrival Countdown",
              subtitle: "End the 'sometime today' waiting game",
              body: "Track your assigned electrician's vehicle in real time on an interactive map. Know their exact arrival minute so you don't waste hours sitting at home waiting for a service truck.",
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
                <span>Standard on all electrical bookings</span>
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
              <span>Proven In Real Emergencies</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From tripping DB to fully powered in 42 minutes.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a sudden main breaker trip during peak evening hours was resolved seamlessly using Bouul&apos;s emergency dispatch and diagnostic chat.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Incident",
                time: "19:14 PM",
                title: "Main DB Tripping",
                desc: "Total outage during evening peak hours. User snaps photo of DB board in Bouul app.",
                badge: "Photo Uploaded",
              },
              {
                step: "02. Match",
                time: "19:17 PM",
                title: "Master Electrician Matched",
                desc: "Zola AI matches VoltTech Electrical (1.8km away) carrying SABS breakers.",
                badge: "Escrow Locked",
              },
              {
                step: "03. Arrival",
                time: "19:32 PM",
                title: "Live GPS Arrival",
                desc: "Pro arrives in 15 mins. Isolate neutral fault on outdoor floodlight circuit.",
                badge: "Live GPS Tracking",
              },
              {
                step: "04. Resolution",
                time: "19:56 PM",
                title: "Power Restored",
                desc: "Breaker replaced, safety test logged, homeowner taps 'Job Satisfied' to release funds.",
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
                  <span>Typical Outage Scenario</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ELECTRICIANS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional electrical standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every contractor on Bouul is vetted for safety and compliance. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "appliances",
              articleId: "fuse_box_db_upgrade",
              tag: "DB Board Overhauls",
              title: "Clean Labeled Distribution Board & DB Upgrade",
              desc: "Replaced obsolete rewireable fuses with modern DIN-rail circuit breakers, 63A earth leakage protection, and SANS 10142 CoC.",
            },
            {
              file: "electrical_service",
              articleId: "electrical_fault_tracing",
              tag: "Fault Finding",
              title: "Electrical Fault Tracing & Circuit Isolation",
              desc: "Diagnostic megger testing, earth loop impedance checks, and isolating hidden neutral faults or burnt junction boxes.",
            },
            {
              file: "lighting",
              articleId: "lighting_installation",
              tag: "Lighting Layout",
              title: "Modern LED Downlight & Dimmer Layout",
              desc: "Precision ceiling layout with warm-white LED downlights, smart dimmers, and fire-rated insulation caps.",
            },
            {
              file: "solar",
              articleId: "geyser_timer_installation",
              tag: "Energy Saving",
              title: "Geyser Automated Timer & Load Control",
              desc: "Heavy-duty programmable timer installation for geysers to optimize power consumption and prevent peak-load surges.",
            },
            {
              file: "smart_home",
              articleId: "stove_oven_installation",
              tag: "Heavy Appliance",
              title: "Dedicated Stove & Oven Cabling",
              desc: "High-current 30A/40A dedicated isolator installation and heavy-duty cabling for modern induction cooktops and built-in ovens.",
            },
            {
              file: "security",
              articleId: "outdoor_security_lighting",
              tag: "Perimeter Security",
              title: "Outdoor Floodlight & Day/Night Sensor Wiring",
              desc: "PIR motion sensor floodlights, day/night photocell switches, and weatherproof conduit runs for perimeter security.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => {
                const art = getArticleById(item.articleId);
                if (art) setSelectedArticle(art);
              }}
              className="group rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden hover:border-emerald-500/40 hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer"
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

                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-lg text-b-ink group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <BookOpen className="h-4 w-4 text-emerald-600 opacity-80 group-hover:opacity-100 shrink-0" />
                  </h3>
                  <p className="text-xs leading-relaxed text-b-ink-soft">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-4 border-t border-b-line/60 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-b-ink-soft">Covered by Bouul Escrow</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span>Read Article &amp; Process →</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. COMPREHENSIVE ELECTRICAL SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every electrical service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From emergency tripping fixes to commercial solar installations, book licensed installation electricians with verified credentials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🚨 Emergency & Fault Repairs",
              items: [
                "DB board earth leakage isolation",
                "Burnt circuit breaker replacement",
                "Emergency generator changeover switch",
                "Power outage & phase loss diagnosis",
                "Burnt cable joint & conduit repair",
                "Tripping geyser isolator replacement",
              ],
            },
            {
              category: "⚡ Solar & Backup Power",
              items: [
                "Hybrid & off-grid inverter installation",
                "Lithium battery bank connection",
                "Rooftop solar panel array wiring",
                "Automatic Transfer Switch (ATS) setup",
                "Surge arrester & lightning protection",
                "Generators & changeover panels",
              ],
            },
            {
              category: "📜 Compliance & Installations",
              items: [
                "Electrical Certificate of Compliance (CoC)",
                "Complete DB board rewire & labeling",
                "Smart Wi-Fi switch & lighting layout",
                "Geyser timer & load control installation",
                "Dedicated oven & stove cabling",
                "Electric gate & fence power hookup",
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

      {/* ── 9. EXTENSIVE ELECTRICAL FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking electricians.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How do I know if an electrician on Bouul is legally certified?",
                a: "Every electrical contractor handling high voltage on Bouul undergoes license validation. You can view their Department of Labour wireman's registration number and ECASA status directly on their profile before booking.",
              },
              {
                q: "How quickly can I get a Certificate of Compliance (CoC) for a home sale?",
                a: "Inspectors booked via Bouul typically conduct inspections within 24 to 48 hours. Once all circuits pass SANS 10142-1 standards, your digital CoC certificate is generated and sent via the app.",
              },
              {
                q: "Can I book an electrician to install my own purchased inverter or solar panels?",
                a: "Yes! Many homeowners buy their own inverter or solar hardware. You can book certified installers on Bouul purely for labor, AC/DC sub-DB cabling, surge protection, and compliance sign-off.",
              },
              {
                q: "What happens if my DB board trips again after the electrician leaves?",
                a: "All bookings made through Bouul are protected by our Escrow Guarantee. Your payment is held safely until you verify that your power remains stable. If a fault reoccurs, the contractor is obliged to return under platform warranty.",
              },
              {
                q: "Are call-out fees included in the price estimate?",
                a: "Yes. All price estimates shown on Bouul include baseline diagnostic time. Your contractor will confirm the exact fixed quote in-app before opening your DB board or executing repairs.",
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
              <Zap className="h-3.5 w-3.5" />
              <span>Safe Electrical Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to fix your power or install backup power?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over tripping breakers or uncertified wiring again. Join homeowners who use Bouul to book licensed, escrow-protected electricians in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Zap className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> DoL Licensed Pros
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-emerald-600" /> Escrow Protected
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <GenericActivityArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>

      <RedesignFooter />
    </main>
  );
}
