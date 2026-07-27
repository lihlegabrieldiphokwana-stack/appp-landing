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
  Sparkle,
  Sun,
  Layers,
  HeartHandshake,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "regular",
    tabTitle: "Regular Weekly / Bi-Weekly Clean",
    icon: Sparkles,
    badge: "Same Trusted Cleaner Every Time",
    title: "Reclaim your weekends with a dedicated, background-checked cleaner.",
    description:
      "Stop playing 'cleaner roulette' on platforms that send a different unvetted stranger every week. Bouul allows you to select, interview, and lock in your favorite professional cleaner for recurring weekly or bi-weekly visits.",
    timeline: "Fixed Weekly Slot",
    costEstimate: "R320 – R550 / visit",
    keyBenefits: [
      "100% ID & background-cleared home cleaning specialists",
      "Option to retain the exact same cleaner for complete consistency & trust",
      "Escrow protection—funds released only after your weekly sign-off",
    ],
    ctaText: "Schedule Recurring Clean",
  },
  {
    id: "deep_clean",
    tabTitle: "Deep Clean & Post-Renovation",
    icon: Layers,
    badge: "Intensive 360° Scrub",
    title: "Heavy-duty deep cleaning for kitchens, bathrooms & dust-heavy homes.",
    description:
      "When standard surface wiping isn't enough, book a deep-clean specialist team. From oven degreasing and tile grout scrubbing to ceiling cobweb removal and window tracks, transform your living space into a spotless sanctuary.",
    timeline: "4 - 7 Hours",
    costEstimate: "R750 – R1,600",
    keyBenefits: [
      "Deep appliance degreasing (ovens, fridges, range hoods)",
      "High-pressure tile grout & silicone mildew restoration",
      "Full post-construction dust & plaster removal",
    ],
    ctaText: "Book Deep Cleaning Team",
  },
  {
    id: "move_in_out",
    tabTitle: "Move-In / Move-Out Reset",
    icon: Home,
    badge: "Deposit Return Guarantee",
    title: "Get 100% of your rental deposit back with an inspection-ready clean.",
    description:
      "Landlords and property managers are ruthless during exit inspections. Book specialized move-out cleaners on Bouul who follow a strict 40-point landlord checklist, ensuring pristine cupboards, pristine sanitaryware, and spotless floors.",
    timeline: "Same-Day Completion",
    costEstimate: "R850 – R1,800",
    keyBenefits: [
      "Strict 40-point landlord exit inspection checklist",
      "Inside cabinet, drawer, light fixture & baseboard scrubbing",
      "100% re-clean guarantee if landlord highlights any missed spot",
    ],
    ctaText: "Book Move-Out Clean",
  },
  {
    id: "airbnb",
    tabTitle: "Airbnb & Short-Stay Turnover",
    icon: RefreshCw,
    badge: "5-Star Guest Ready",
    title: "Rapid guest turnovers with photo checklists & linen changes.",
    description:
      "Automate your short-stay turnover hassle. Bouul cleaners handle guest checkout inspection, bed linen laundering, bathroom restocking, and upload high-resolution photo verification before your next guest checks in.",
    timeline: "2 - 3 Hour Turnover",
    costEstimate: "R420 – R850 / turn",
    keyBenefits: [
      "Same-day emergency guest turnover availability",
      "Photo verification checklist sent directly via the app",
      "Linen washing, ironing, and guest amenities restocking",
    ],
    ctaText: "Automate Airbnb Clean",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "1-2 Bedroom Standard Maintenance Clean",
    range: "R320 - R480",
    time: "3 - 4 hours",
    desc: "Dusting, vacuuming, mopping, bathroom sanitation, kitchen surface wiping, and bed making.",
    includes: ["All main rooms", "Sanitaryware scrub", "Trash emptying"],
  },
  {
    task: "3-4 Bedroom Full Deep Clean",
    range: "R650 - R1,100",
    time: "5 - 7 hours",
    desc: "Intensive deep clean including inside oven, fridge, window tracks, door frames, and baseboards.",
    includes: ["Appliance interior", "Window glass & tracks", "Tile grout scrub"],
  },
  {
    task: "Move-Out Inspection Deposit Clean",
    range: "R850 - R1,600",
    time: "6 - 8 hours",
    desc: "Landlord-ready exit clean covering all built-in cupboards, light fittings, wall spot cleaning, and balconies.",
    includes: ["40-point checklist", "Inside all cupboards", "Re-clean guarantee"],
  },
  {
    task: "Upholstery & Carpet Steam Wash",
    range: "R450 - R950",
    time: "2 - 3 hours",
    desc: "Deep extraction steam washing for 3-seater couches, mattresses, or wall-to-wall carpets.",
    includes: ["Stain pre-treatment", "Hot water extraction", "Odour neutralizer"],
  },
];

export default function CleanersPage() {
  const [activeTab, setActiveTab] = useState("regular");
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
            <span>Verified Professional Cleaners Available Now • Avg. Booking Confirmation: 4 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Spotless home. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Complete peace of mind.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Say goodbye to unvetted stranger anxiety. Bouul connects you with background-checked home cleaning professionals you can select, interview, and retain for recurring visits.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>Book a Trusted Cleaner</span>
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
                  <span>100% ID &amp; Criminal Background Vetted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.97 Rating (4,200+ Cleans)</span>
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
                  <span className="font-display font-bold text-sm">Verified Cleaner Matched</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  Police Clearance Verified
                </span>
              </div>

              {/* Cleaner card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      SC
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">Sindi&apos;s Professional Cleaning</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Residential &amp; Airbnb Specialist • 5 Yrs Experience</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.98</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">342 Completed Cleans</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Scheduled Slot</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Saturday 08:30 AM
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R380.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Specify home size &amp; eco-friendly supply preferences</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow holds payment until clean inspection</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Option to lock in Sindi for all future weekly visits</span>
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
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tailored Home Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact cleaning needs.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your scenario below to see how our verified cleaning professionals deliver consistent quality and security.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Duration &amp; Cost</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Security Vetting</span>
                      <span className="font-semibold text-b-ink">Police Clearance Verified</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Re-Booking Right</span>
                      <span className="font-semibold text-b-ink">Lock Preferred Cleaner</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Every cleaner on Bouul undergoes identity checks, address confirmation, and criminal background checks before activation.</span>
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
                <span>Transparent Cleaning Rates</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                Clear hourly &amp; task pricing. No surprise fees.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Know exactly what your home clean will cost before your cleaner arrives. Bouul standardizes baseline rates based on home size and cleaning depth.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Quality Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your cleaner follows your specified task list in-app. If any room or appliance is not cleaned to your satisfaction, tap &apos;Request Re-touch&apos; before releasing escrow.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Home Type for Guide Pricing</span>
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
                    <span>Rates confirmed in-app before booking.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Book Your Clean In App</span>
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
            {/* Left Column: Explaining Zola AI in the context of cleaning */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI cleaning assistant who remembers your home.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Tell Zola what needs cleaning in plain language or voice notes—she matches you with available, background-checked cleaners and remembers your exact home preferences.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Room &amp; Stain Diagnostics</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of a carpet stain, dusty patio, or kitchen oven. Zola&apos;s vision AI analyzes the surface type and soil level, recommending the right cleaning equipment and estimated hours.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Home Memory &amp; Cleaning Instructions</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your exact household preferences (e.g., &quot;Use eco-friendly detergent&quot;, &quot;Gate code 4920&quot;, &quot;Don&apos;t let the cat out&quot;). She automatically Briefs your cleaner before every visit.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Calendar &amp; Re-Booking</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Found a cleaner you love? Zola locks in your preferred cleaner&apos;s recurring weekly calendar automatically so you get the same trusted person every single time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Cleaning Chat Mockup */}
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
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Home Cleaning Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I need my 3-bedroom home cleaned Saturday morning! Here is a photo of the lounge couch stain:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">couch_stain_photo.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: Fabric Upholstery Spot Wash</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Diagnostics &amp; Home Memory Check</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your stain photo: that&apos;s a water-based fabric stain. From your **Home Memory profile**, I have noted your preference for eco-friendly supplies and key lockbox access.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I booked **Sindi&apos;s Cleaning** (4.98 ★, 342 cleans) for Saturday at 08:30 AM. Sindi will bring fabric upholstery cleaner as requested.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Confirmed Booking Draft
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">3-Bed Home Clean + Couch Spot Wash</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">Sindi&apos;s Cleaning • Sat 08:30 AM • Est. R380</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% deposit guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Cleaning Security ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Home Security</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why hiring a cleaner on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Inviting someone into your home requires complete trust. We engineered a security-first platform ensuring rigorous background checks, digital escrow, and cleaner retention.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. 100% Criminal Background Vetted",
              subtitle: "Strict security verification",
              body: "Every cleaner on Bouul undergoes identity verification, proof of residence checks, and police clearance background checks before taking their first booking.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Pay only after clean inspection",
              body: "Never pay upfront cash deposits. Your payment is held safely in Bouul escrow and is only released after you inspect your clean and tap 'Job Satisfied'.",
            },
            {
              icon: HeartHandshake,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Retain Your Favorite Cleaner",
              subtitle: "Build long-term trust",
              body: "When you find a cleaner who understands your home, lock them in for all future visits. Enjoy the peace of mind of having the exact same trusted professional every time.",
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
                <span>Standard on all home cleanings</span>
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
              <span>Proven Move-Out Deposit Return</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From messy apartment to 100% deposit refund.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a 3-bedroom rental move-out clean was executed impeccably, passing the landlord&apos;s exit inspection on the very first try.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Booking",
                time: "08:00 AM",
                title: "Landlord Checklist Upload",
                desc: "Tenant uploads rental exit checklist. Escrow secures move-out clean rate.",
                badge: "Checklist Saved",
              },
              {
                step: "02. Arrival",
                time: "08:30 AM",
                title: "Vetted Team Arrival",
                desc: "Cleaners arrive with specialized degreasers and steam equipment.",
                badge: "GPS Arrival Check",
              },
              {
                step: "03. Execution",
                time: "12:30 PM",
                title: "40-Point Deep Scrub",
                desc: "Cupboards, oven interior, windows, and baseboards scrubbed to perfection.",
                badge: "Photo Inspection",
              },
              {
                step: "04. Inspection",
                time: "14:00 PM",
                title: "100% Deposit Approved",
                desc: "Landlord signs off inspection checklist. Escrow released to cleaners.",
                badge: "Deposit Refunded",
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
                  <span>Typical Exit Clean</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CLEANERS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional cleaning standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every cleaner on Bouul is vetted for safety and quality. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "house_cleaning",
              articleId: "weekly_standard_clean",
              tag: "Residential Maintenance",
              title: "Pristine Living Room & Surface Wiping",
              desc: "Thorough dusting, floor polishing, and furniture maintenance using non-abrasive eco-friendly cleaners.",
            },
            {
              file: "laundry",
              articleId: "full_home_dusting",
              tag: "Linen & Laundry",
              title: "Washing, Folding & Ironing Service",
              desc: "Neat bed linen changes, clothes laundering, and precise folding for residential or Airbnb turnovers.",
            },
            {
              file: "window_cleaning",
              articleId: "deep_kitchen_clean",
              tag: "Deep Window Clean",
              title: "Crystal-Clear Interior & Exterior Glass",
              desc: "Streak-free window washing, window sill cleaning, and track dust removal for maximum natural light.",
            },
            {
              file: "furniture_assembly",
              articleId: "floor_mopping_and_polishing",
              tag: "Organizing & Reset",
              title: "Closet & Pantry Organization",
              desc: "Decluttering and structured organization for bedroom wardrobes, kitchen pantries, and storage rooms.",
            },
            {
              file: "interior_design",
              articleId: "bathroom_scrub_and_sanitise",
              tag: "Sanitary Scrub",
              title: "High-Sanitation Bathroom Deep Clean",
              desc: "Tile limescale removal, mirror polishing, and deep disinfection of showers, tubs, and toilets.",
            },
            {
              file: "gardening",
              articleId: "ceiling_fan_and_light_fixture_cleaning",
              tag: "Patio & Outdoor",
              title: "Patio Sweeping & Balcony Wash",
              desc: "Outdoor broom sweeping, outdoor furniture wipe-down, and balcony glass cleaning for entertainment areas.",
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

      {/* ── 8. COMPREHENSIVE CLEANING SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every cleaning service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From routine home maintenance to deep carpet steam extraction, book vetted cleaning specialists with full background clearance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🏡 Domestic & Recurring Cleaning",
              items: [
                "Weekly & bi-weekly home maintenance",
                "Dusting, vacuuming & floor mopping",
                "Kitchen surface & sink degreasing",
                "Bathroom sanitization & mirror polish",
                "Bed making & linen changing",
                "Interior trash removal & bin lining",
              ],
            },
            {
              category: "✨ Deep & Specialized Cleaning",
              items: [
                "Move-in & move-out deposit return cleans",
                "Oven, stove & fridge interior scrubbing",
                "Tile grout & silicone mildew restoration",
                "Post-renovation dust & plaster removal",
                "Deep carpet & couch steam extraction",
                "Window glass, frame & track cleaning",
              ],
            },
            {
              category: "🔑 Commercial & Airbnb Turnover",
              items: [
                "Same-day Airbnb guest turnover",
                "Linen washing, ironing & bed styling",
                "Guest amenities & coffee restocking",
                "Photo verification checklist reports",
                "Office desk & workstation sanitization",
                "Commercial kitchen floor degreasing",
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

      {/* ── 9. EXTENSIVE CLEANING FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking cleaners.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How are cleaners background checked on Bouul?",
                a: "Every home cleaner on Bouul undergoes identity verification, proof of address validation, and a criminal background check before being activated on the platform.",
              },
              {
                q: "Can I request the exact same cleaner for my weekly visits?",
                a: "Yes! Once you find a cleaner you love, you can lock in their recurring schedule so the same trusted person comes to your home every week.",
              },
              {
                q: "Do I need to provide cleaning chemicals and equipment?",
                a: "You can specify during booking whether you prefer your cleaner to use your own household supplies or bring their own professional cleaning kit and detergents.",
              },
              {
                q: "What if something is missed during a move-out clean?",
                a: "All move-out cleans booked through Bouul come with our Landlord Re-Clean Guarantee. If your landlord highlights any missed area on the checklist, your cleaner returns to fix it at no extra cost before escrow is released.",
              },
              {
                q: "How does escrow protect my payment?",
                a: "Your payment is secured digitally when you book, but it is not transferred to your cleaner until you return home, inspect the clean, and tap 'Job Satisfied' in the app.",
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Trusted Home Cleaning</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready for a spotless home and total peace of mind?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over unverified strangers or messy weekends again. Join homeowners who use Bouul to book background-checked, escrow-protected cleaners in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Police Clearance Vetted
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
