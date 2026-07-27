"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  PlumbingActivityArticle,
  PlumbingActivityId,
} from "@/components/services/articles/plumbing-activity-article";
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
  Lock,
  RefreshCw,
  ChevronRight,
  Star,
  Check,
  Info,
  Building2,
  Hammer,
  Brain,
  BookOpen,
  X,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "emergency",
    title: "🚨 Emergency Leaks & Floods",
    subtitle: "When water is pooling at 2:00 AM and every minute counts",
    badge: "Immediate Dispatch",
    color: "from-red-500/20 to-orange-500/10",
    border: "border-red-500/30",
    accent: "text-red-500",
    headline: "Burst pipes don't wait for Monday business hours.",
    reality:
      "It's late at night or on a Sunday. A pipe bursts under the kitchen sink, or the geyser gives way, flooding your ceiling. Calling random emergency numbers leads to unanswered phones, 3-hour waits, or predatory call-out fees with zero upfront price transparency.",
    howBouulSolves: [
      {
        title: "Live GPS & 'Available Now' Filtering",
        desc: "Filter exclusively by plumbers who are on-duty and within 15 kilometers right now. See verified arrival times before you tap book.",
      },
      {
        title: "Zero Hidden After-Hours Markup",
        desc: "All hourly rates and call-out fees are displayed upfront in the app. No arbitrary R2,500 'emergency inspection' surprises at your door.",
      },
      {
        title: "Escrow Payment Protection",
        desc: "In an emergency, desperate homeowners often get ripped off paying cash upfront. On Bouul, your payment stays locked in secure digital escrow until the leak is stopped and confirmed fixed.",
      },
    ],
    timeline: "Average on-site arrival: 35–45 minutes in major metropolitan areas.",
    proTip: "Use the in-app emergency button to broadcast your request simultaneously to the top 3 nearest available plumbers.",
  },
  {
    id: "mystery",
    title: "🔍 Mystery Blockages & Damps",
    subtitle: "When you don't know what parts are needed or where the leak is",
    badge: "Visual Diagnostic",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    accent: "text-blue-500",
    headline: "Eliminate the 'I need to drive to the hardware store' excuse.",
    reality:
      "A drain keeps backing up stubbornly, or a mysterious damp patch is spreading across your bedroom wall. Traditional plumbers arrive, charge a call-out fee just to look at it, and then disappear for 2 hours to buy replacement PVC fittings or specialized drain snakes.",
    howBouulSolves: [
      {
        title: "10-Second Visual Chat Diagnostic",
        desc: "When booking, upload photos or a quick 10-second video of the damp patch, pipe under the sink, or model number. The plumber reviews it before departing.",
      },
      {
        title: "Arrive Fully Equipped on Trip #1",
        desc: "Because the plumber has assessed the visual evidence in advance, they bring the exact washers, copper fittings, or electric drain rodding tools needed immediately.",
      },
      {
        title: "Transparent Scope Adjustments",
        desc: "If opening a wall reveals extensive corrosion, any changes to the price or materials must be formally submitted and approved by you in the app before work continues.",
      },
    ],
    timeline: "Average diagnosis & repair completion: 1.5 to 2 hours in a single visit.",
    proTip: "Snap a photo of your geyser or under-sink pipe labels in the chat so the pro brings exact OEM replacement parts.",
  },
  {
    id: "geyser",
    title: "🏗️ Geysers & Installations",
    subtitle: "High-value renovations, solar upgrades, and geyser replacements",
    badge: "Milestone Escrow",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    accent: "text-amber-500",
    headline: "Protect your R15,000+ plumbing investments from contractor ghosting.",
    reality:
      "You're installing a new solar geyser, heat pump, or renovating a master bathroom. The greatest anxiety is handing over a 50% upfront deposit for materials, only for the contractor to vanish or deliver non-compliant piping that voids your homeowner's insurance.",
    howBouulSolves: [
      {
        title: "Strict Trade Background Checks",
        desc: "Every plumber on Bouul undergoes identity verification, criminal background checks, and verification of formal plumbing qualifications and certificates of compliance (CoC).",
      },
      {
        title: "Milestone-Based Escrow Release",
        desc: "Never hand over unrecoverable cash. Fund the material cost into escrow; release it only when the geyser is delivered on-site. Release labor funds only after testing and CoC issuance.",
      },
      {
        title: "Verified Portfolio & Client History",
        desc: "Inspect real photo galleries of past bathroom installations and read authentic reviews left exclusively by clients who completed paid bookings through Bouul.",
      },
    ],
    timeline: "Full installation & pressure testing: Half-day to 1-day structured scheduled booking.",
    proTip: "Request a formal digital Certificate of Compliance (CoC) directly through your Bouul post-job documentation tab.",
  },
  {
    id: "landlord",
    title: "🏢 Landlord & Remote Dispatch",
    subtitle: "Managing rental properties, offices, and Airbnb maintenance remotely",
    badge: "Remote Management",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-500",
    headline: "Fix tenant plumbing disasters without ever leaving your office desk.",
    reality:
      "You own rental apartments or manage a commercial office space. A tenant calls while you're traveling or at work to report a overflowing toilet. Coordinating access between the tenant and a random plumber while managing payment remotely is a logistical nightmare.",
    howBouulSolves: [
      {
        title: "Remote Dispatch & Coordinate Sharing",
        desc: "Enter your rental property address and dispatch a verified plumber directly to your tenant. Share live tracking links so the tenant knows when to open the gate.",
      },
      {
        title: "Mandatory Before-and-After Photo Audit",
        desc: "You don't need to be there to inspect the work. The plumber must upload high-resolution before-and-after photos into the job milestone log before escrow can be released.",
      },
      {
        title: "Instant Digital Tax Invoices",
        desc: "As soon as you approve the completion, generate clean, itemized digital tax invoices and VAT receipts instantly for your accounting and landlord expense records.",
      },
    ],
    timeline: "Zero travel time for you. Complete end-to-end management from your smartphone.",
    proTip: "Save your rental properties in your Bouul address book for 1-click dispatch whenever a tenant reports maintenance.",
  },
];

// Interactive Pricing Estimator Data
const PRICE_ESTIMATES = [
  {
    task: "Leaking Tap / Washer Replacement",
    range: "R350 – R550",
    time: "~30–45 mins",
    desc: "Includes diagnosis, replacement of worn washers, ceramic cartridges, and reseating tap valves.",
    includes: ["Call-out & travel", "Standard replacement washers", "Post-repair pressure check"],
  },
  {
    task: "Blocked Drain / Hydro-Jetting",
    range: "R650 – R1,100",
    time: "~1–2 hours",
    desc: "Clearing stubborn kitchen, shower, or main sewer line blockages using mechanical snakes or high-pressure water jetting.",
    includes: ["Call-out & travel", "Mechanical rodding / snaking", "Camera inspection if required"],
  },
  {
    task: "Emergency Pipe Leak Repair",
    range: "R800 – R1,500",
    time: "~1–2.5 hours",
    desc: "Immediate after-hours or urgent daytime dispatch to locate, isolate, and repair burst copper or polypipe lines.",
    includes: ["Priority rapid dispatch", "Pipe isolation & section replacement", "Escrow leak guarantee"],
  },
  {
    task: "150L / 200L Geyser Replacement",
    range: "R7,500 – R11,500",
    time: "Half Day (4–6 hrs)",
    desc: "Full removal of failed geyser, supply and installation of new SABS-approved unit, new vacuum breakers, and safety valves.",
    includes: ["SABS Geyser unit & valves", "Full plumbing installation", "Official Certificate of Compliance (CoC)"],
  },
];

export default function PlumbersPage() {
  const [activeTab, setActiveTab] = useState("emergency");
  const [selectedEstimate, setSelectedEstimate] = useState(0);
  const [selectedArticleId, setSelectedArticleId] = useState<PlumbingActivityId | null>(null);

  const currentSituation = SITUATIONS.find((s) => s.id === activeTab) || SITUATIONS[0];

  return (
    <main className="min-h-screen bg-b-paper text-b-ink selection:bg-b-green selection:text-b-forest">
      <RedesignNav />

      {/* ── 1. HERO SECTION: Dynamic & Wowed at first glance ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-paper-deep via-b-paper to-b-paper px-5 pb-20 pt-32 md:pt-40 border-b border-b-line">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-b-green/15 via-emerald-500/10 to-transparent blur-[120px] rounded-full" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          {/* Top Status Bar */}
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
            <span>Verified Master Plumbers Available Now • Avg. Emergency Dispatch: 34 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Plumbing emergencies & repairs, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-b-green-deep">solved without the stress.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-b-ink-soft">
                Whether it&apos;s a 2:00 AM flooded kitchen or a planned geyser upgrade, Bouul eliminates contractor ghosting, predatory call-out fees, and cash disputes. Book verified plumbers with upfront pricing and digital escrow protection.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(16,185,129,0.45)]"
                >
                  <span>Find a Plumber Now</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#situations"
                  className="inline-flex items-center gap-2 rounded-full border border-b-ink/20 bg-b-paper-raised px-7 py-4 font-semibold text-b-ink transition-all hover:border-b-ink/40 hover:bg-b-paper-deep"
                >
                  <span>Explore Use Cases</span>
                  <ChevronRight className="h-4 w-4 text-b-ink-faint" />
                </a>
              </div>

              {/* Trust badges row */}
              <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-b-line/80">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-b-ink">100% Verified</div>
                    <div className="text-b-ink-faint">ID & Trade Checks</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-b-ink">Escrow Shield</div>
                    <div className="text-b-ink-faint">Pay when satisfied</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-b-ink">Live GPS</div>
                    <div className="text-b-ink-faint">Track arrival in-app</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Hero Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                {/* Header mock */}
                <div className="flex items-center justify-between pb-4 border-b border-b-line mb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-display font-bold text-sm">Emergency Dispatch Active</span>
                  </div>
                  <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">PIRB Verified Pro</span>
                </div>

                {/* Plumber card mock */}
                <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                        JD
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-b-ink">Jabulani Dlamini</span>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                        </div>
                        <div className="text-xs text-b-ink-soft">Master Plumber • 8 yrs exp</div>
                        <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-amber-600">
                          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                          <span>4.98 (142 completed jobs)</span>
                        </div>
                      </div>
                    </div>
                    <span className="rounded-lg bg-emerald-500/15 text-emerald-700 px-2.5 py-1 text-xs font-bold">
                      12 mins away
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-b-line/60 flex items-center justify-between text-xs">
                    <span className="text-b-ink-soft">Standard Hourly Rate:</span>
                    <span className="font-price font-bold text-b-ink">R450/hr (Locked in Escrow)</span>
                  </div>
                </div>

                {/* Live Diagnostic Chat snippet */}
                <div className="rounded-2xl border border-b-line bg-b-paper p-3.5 space-y-2.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-b-ink-faint">Visual Diagnostic Chat Preview</div>
                  <div className="flex items-start gap-2 text-xs">
                    <div className="h-6 w-6 rounded-full bg-b-ink/10 flex items-center justify-center shrink-0 font-bold text-[10px]">You</div>
                    <div className="rounded-2xl rounded-tl-none bg-b-paper-deep p-2.5 text-b-ink-soft">
                      &quot;Kitchen pipe burst under sink! Sending video of the valve now.&quot; 📸
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs justify-end">
                    <div className="rounded-2xl rounded-tr-none bg-emerald-600 text-white p-2.5 max-w-[80%]">
                      &quot;Got it! That&apos;s a 15mm copper flexi-hose leak. I have the exact replacement part in my van. Arriving in 12 mins!&quot;
                    </div>
                  </div>
                </div>

                {/* Escrow banner */}
                <div className="mt-4 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-amber-600 shrink-0" />
                  <p className="text-[11px] leading-tight text-b-ink">
                    <span className="font-bold">Escrow Guarantee:</span> Your R450 payment is held safely by Bouul and only released when Jabulani fixes the leak.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE USE-CASE EXPLORER: How Bouul helps in different situations ── */}
      <section id="situations" className="py-24 px-5 max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tailored For Every Situation</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves 4 distinct plumbing situations.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Plumbing needs aren&apos;t one-size-fits-all. Explore how our platform features adapt whether you are facing a midnight flood or managing remote rental repairs.
          </p>
        </div>

        {/* Situation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SITUATIONS.map((sit) => {
            const isActive = activeTab === sit.id;
            return (
              <button
                key={sit.id}
                onClick={() => setActiveTab(sit.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "bg-b-paper-deep border-emerald-600 shadow-md ring-2 ring-emerald-600/20"
                    : "bg-b-paper-raised border-b-line hover:border-b-ink/30 hover:bg-b-paper-deep/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-emerald-600"
                  />
                )}
                <div className="text-xs font-bold text-emerald-600 mb-1">{sit.badge}</div>
                <div className="font-display font-bold text-sm md:text-base text-b-ink line-clamp-1">{sit.title}</div>
                <div className="text-xs text-b-ink-faint mt-1 line-clamp-2">{sit.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Situation Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSituation.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl border ${currentSituation.border} bg-gradient-to-br ${currentSituation.color} bg-b-paper-raised p-6 md:p-10 shadow-lg`}
          >
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Left Column: The Problem Reality */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-b-ink/10 text-b-ink font-semibold text-xs mb-3">
                    The Real-World Headache
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink leading-tight">
                    {currentSituation.headline}
                  </h3>
                </div>
                <div className="p-5 rounded-2xl bg-b-paper border border-b-line/80 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Why Traditional Booking Fails</span>
                  </div>
                  <p className="text-sm leading-relaxed text-b-ink-soft">{currentSituation.reality}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                  <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-b-ink uppercase tracking-wider">Typical Resolution Timeline</div>
                    <div className="text-sm font-semibold text-emerald-700 mt-0.5">{currentSituation.timeline}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: How Bouul Solves It */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    The Bouul Engineering Solution
                  </span>
                  <span className="text-xs font-semibold text-b-ink-faint">3 Tailored Mechanics</span>
                </div>

                <div className="grid gap-4">
                  {currentSituation.howBouulSolves.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="p-5 rounded-2xl bg-b-paper border border-b-line hover:border-emerald-500/40 transition-colors shadow-sm flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-b-ink flex items-center gap-2">
                          <span>{step.title}</span>
                          <Check className="h-4 w-4 text-emerald-600" />
                        </h4>
                        <p className="mt-1.5 text-sm text-b-ink-soft leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pro Tip Bottom Bar */}
                <div className="pt-4 border-t border-b-line/60 flex items-center justify-between text-xs text-b-ink-soft">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span><strong className="text-b-ink">Bouul Pro Tip:</strong> {currentSituation.proTip}</span>
                  </div>
                  <Link href="/download" className="shrink-0 font-bold text-emerald-600 hover:underline flex items-center gap-1">
                    <span>Try this now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── 3. INTERACTIVE UPFRONT PRICE ESTIMATOR & ESCROW GUIDE ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-y border-b-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Upfront Price Transparency</span>
              </div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
                No mystery billing. Know the estimate before you book.
              </h2>
              <p className="text-b-ink-soft text-lg leading-relaxed">
                The most stressful part of hiring a plumber is not knowing if the final bill will be R500 or R5,000. On Bouul, pricing structures are transparent, and funds are held in escrow until you approve the completed job.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                  <p className="text-sm text-b-ink">
                    <strong className="font-semibold">Locked Escrow Protection:</strong> The plumber knows the funds are secured; you know they won&apos;t get paid unless the plumbing works.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                  <p className="text-sm text-b-ink">
                    <strong className="font-semibold">Digital In-App Adjustments:</strong> If unexpected pipe corrosion requires extra parts, the pro submits a digital quote change that you must approve first.
                  </p>
                </div>
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
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md font-bold"
                          : "bg-b-paper-raised border-b-line text-b-ink hover:border-emerald-500/40"
                      }`}
                    >
                      <div className="text-xs opacity-80">{item.time}</div>
                      <div className="text-sm line-clamp-1 mt-0.5">{item.task}</div>
                    </button>
                  ))}
                </div>

                {/* Display Output */}
                <motion.div
                  key={selectedEstimate}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-b-paper-deep border border-b-line space-y-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-b-ink-faint">Estimated Guide Price</div>
                      <div className="font-price text-3xl md:text-4xl font-extrabold text-emerald-600 mt-1">
                        {PRICE_ESTIMATES[selectedEstimate].range}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-500/10 px-3 py-1.5 rounded-full">
                      <Lock className="h-3.5 w-3.5" />
                      <span>100% Escrow Protected</span>
                    </span>
                  </div>

                  <p className="text-sm text-b-ink-soft leading-relaxed border-t border-b-line pt-3">
                    {PRICE_ESTIMATES[selectedEstimate].desc}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-b-ink uppercase tracking-wider mb-2">What&apos;s included in this rate:</div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {PRICE_ESTIMATES[selectedEstimate].includes.map((inc) => (
                        <div key={inc} className="flex items-center gap-1.5 text-xs text-b-ink bg-b-paper px-3 py-2 rounded-lg border border-b-line/60 font-medium">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="text-center pt-2">
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-b-ink px-8 py-3.5 font-bold text-b-paper hover:opacity-90 transition-opacity text-sm"
                  >
                    <span>Get Guaranteed Exact Quotes in App</span>
                    <ArrowRight className="h-4 w-4" />
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
            {/* Left Column: Explaining Zola AI in the context of plumbing */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI plumbing assistant who actually books the job.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Stop calling 10 different contractors who don&apos;t answer or quote blind. Tell Zola what&apos;s leaking in plain language or voice notes—she cross-references calendars, compares ratings, and hands you a guaranteed booking draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Diagnostics &amp; Part Matching</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Send a photo or short video of your leak, geyser label, or under-sink pipe. Zola&apos;s vision AI identifies valve sizes, pipe fittings, and geyser models instantly, creating a technical brief so your plumber brings exact replacement parts on Trip #1.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Home Memory &amp; Property Specs</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your home setup. Once you save your geyser capacity (e.g., 200L solar hybrid), main stopcock location, or gate code, she automatically applies your property specs to future bookings so you never re-explain your plumbing layout.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Calendar &amp; Route Planning</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      No scrolling through lists or waiting for quotes. Zola checks live GPS locations and plumber rosters in real time, surfacing an available, top-rated pro who can reach your address immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Plumbing Chat Mockup */}
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
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • 24/7 Plumbing Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">My kitchen pipe burst under the sink! Here is a photo of the leaking joint:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">under_sink_leak.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: 15mm Copper Compression Valve</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Diagnostic &amp; Home Memory Check</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your photo: that&apos;s a 15mm copper compression joint failure. From your **Home Memory profile**, your main water stopcock is located by the front boundary wall—please close it now to prevent flooding.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I found **Mandla Plumbing** (4.98 ★, 11 mins away) who has exact 15mm SABS replacement valves in his van and a live emergency opening right now.
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
                      <p className="text-sm font-bold text-white">Emergency Valve &amp; Pipe Replacement</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">Mandla Plumbing • Live GPS Tracking • Est. R450</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of a Stress-Free Job ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Wrench className="h-3.5 w-3.5" />
            <span>Built For Plumbing Precision</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why finding a plumber on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            We didn&apos;t just build a directory of phone numbers. We re-engineered the entire workflow of hiring a tradesperson from initial diagnosis to final sign-off.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Camera,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. Pre-Arrival Visual Diagnostics",
              subtitle: "No more 'wrong parts' delays",
              body: "Traditional plumbers charge a call-out fee just to inspect the leak, then leave for hours to buy parts. On Bouul, our integrated photo and video chat lets the pro assess your pipe diameter, geyser brand, or drain layout before they even start their engine.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Total leverage until you're satisfied",
              body: "Never argue over shoddy workmanship again. When you book, your payment is secured in Bouul's independent digital escrow. The plumber sees the funds are guaranteed, but they cannot withdraw a single cent until you inspect the repair and tap 'Job Satisfied'.",
            },
            {
              icon: MapPin,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Real-Time GPS Tracking",
              subtitle: "End the 'sometime between 8 and 4' waiting game",
              body: "Stop taking entire days off work to wait for a plumber who might not show up. As soon as your pro departs, track their exact vehicle location and live arrival countdown on an interactive GPS map directly on your phone.",
            },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8 flex flex-col justify-between hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-b-ink/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feat.color} mb-6 shadow-sm`}>
                  <feat.icon className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-b-ink-faint mb-1">{feat.subtitle}</div>
                <h3 className="font-display text-2xl font-bold text-b-ink mb-3">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-b-ink-soft">{feat.body}</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-b-line/80 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span>Standard on all plumbing bookings</span>
                <Check className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. REAL SOUTH AFRICAN CASE STUDIES & TIMELINE WALKTHROUGH ── */}
      <section className="bg-b-forest text-b-cream py-24 px-5 border-y border-b-forest-line relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-b-sun bg-b-sun/10 px-3 py-1 rounded-full mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Proven In Real Emergencies</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From burst pipe to dry floors in 51 minutes.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a real Sunday evening plumbing crisis was handled seamlessly using Bouul&apos;s emergency dispatch and visual chat.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                time: "18:14 PM",
                step: "01. Crisis & Request",
                title: "Pipe Bursts in Kitchen",
                desc: "Homeowner notices water pouring from under kitchen sink. Opens Bouul, taps 'Emergency Plumber', and filters by 'Available Now within 10km'.",
                badge: "2 Taps to Request",
              },
              {
                time: "18:18 PM",
                step: "02. Visual Diagnostic",
                title: "Photo Sent in Chat",
                desc: "Plumber Sipho M. accepts instantly. Homeowner snaps a 5-second video of the leaking flexi-hose in the chat. Sipho confirms he has a replacement 15mm braided hose in his van.",
                badge: "Parts Confirmed",
              },
              {
                time: "18:32 PM",
                step: "03. GPS Arrival",
                title: "On-Site in 14 Mins",
                desc: "Sipho arrives precisely as tracked on the GPS map. Isolates water valve immediately without needing to leave for a hardware store run.",
                badge: "Zero Travel Delay",
              },
              {
                time: "19:05 PM",
                step: "04. Escrow Release",
                title: "Tested & Approved",
                desc: "New hose installed and pressure tested. Homeowner inspects dry fittings and taps 'Release Escrow'. Sipho receives R550 payout instantly with 5-star rating.",
                badge: "100% Protected",
              },
            ].map((t, idx) => (
              <div
                key={t.step}
                className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-price font-bold text-sm text-b-sun bg-b-sun/15 px-2.5 py-1 rounded-md">{t.time}</span>
                    <span className="text-[11px] font-semibold text-b-cream/60">{t.badge}</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-b-sun/80 mt-4">{t.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">{t.title}</h3>
                  <p className="text-xs leading-relaxed text-b-cream/75">{t.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-b-forest-line/60 flex items-center justify-between text-[11px] text-b-cream/50">
                  <span>Typical Emergency Scenario</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats banner */}
          <div className="mt-12 rounded-3xl bg-b-forest-raised border border-b-forest-line p-8 text-center grid sm:grid-cols-3 gap-6">
            <div>
              <div className="font-display text-4xl font-extrabold text-b-sun">38 Mins</div>
              <div className="text-xs text-b-cream/80 mt-1 uppercase tracking-wider font-semibold">Average Emergency ETA</div>
            </div>
            <div>
              <div className="font-display text-4xl font-extrabold text-b-sun">4.92 / 5</div>
              <div className="text-xs text-b-cream/80 mt-1 uppercase tracking-wider font-semibold">Plumber Satisfaction Score</div>
            </div>
            <div>
              <div className="font-display text-4xl font-extrabold text-b-sun">R0 Lost</div>
              <div className="text-xs text-b-cream/80 mt-1 uppercase tracking-wider font-semibold">To Unfinished Work via Escrow</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PLUMBERS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional plumbing standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every professional on Bouul is vetted for quality and compliance. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>

          {/* Interactive Booking Article Banner */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent p-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-md">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Comprehensive Booking Article</span>
                <h4 className="font-display text-lg font-extrabold text-b-ink">
                  How to Book a PIRB Plumber: From Zola AI Diagnosis to Escrow Release
                </h4>
                <p className="text-xs text-b-ink-soft mt-0.5">
                  Includes live 4-step simulator, quote inspector, and PIRB accreditation breakdown.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticleId("burst_pipes")}
              className="rounded-full bg-b-green px-6 py-3 text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              <span>Read Booking Article</span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "burst_pipes" as PlumbingActivityId,
              file: "plumbing",
              tag: "Emergency Repairs",
              title: "Burst Pipes & High-Pressure Valves",
              desc: "Rapid containment of emergency leaks, copper pipe repairs, and isolating ball valve replacements using SABS-approved fittings.",
            },
            {
              id: "renovation_plumbing" as PlumbingActivityId,
              file: "carpentry",
              tag: "Renovation Plumbing",
              title: "Bathroom & Kitchen Installations",
              desc: "Precision plumbing integration for modern vanities, concealed wall-mounted cisterns, and custom residential fixtures.",
            },
            {
              id: "geyser_compliance" as PlumbingActivityId,
              file: "electrical_service",
              tag: "Geyser Compliance",
              title: "Geyser & Automated Thermostat Wiring",
              desc: "CoC-compliant electrical connections for traditional geysers, hybrid solar conversions, and high-pressure vacuum breakers.",
            },
            {
              id: "damp_restoration" as PlumbingActivityId,
              file: "painting_service",
              tag: "Damp Restoration",
              title: "Post-Leak Wall & Plaster Waterproofing",
              desc: "Complete interior wall repair, anti-fungal waterproofing plaster, and paint restoration following internal pipe repairs.",
            },
            {
              id: "site_cleanup" as PlumbingActivityId,
              file: "house_cleaning",
              tag: "Guaranteed Cleanup",
              title: "Spotless Post-Repair Site Cleanup",
              desc: "Our verified pros never leave mud, rubble, or debris behind. Thorough site cleaning is a mandatory platform requirement.",
            },
            {
              id: "outdoor_drainage" as PlumbingActivityId,
              file: "garden_maintenance",
              tag: "Outdoor Drainage",
              title: "Subsurface Irrigation & Main Line Repair",
              desc: "Non-destructive underground leak detection and repairs for main boundary water lines, borehole piping, and garden drainage.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedArticleId(item.id)}
              className="group cursor-pointer rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col justify-between"
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

      {/* ── 8. COMPREHENSIVE PLUMBING SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every plumbing service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From routine domestic maintenance to complex commercial drainage systems, book specialized professionals with verified trade credentials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🚨 Emergency & Rapid Repairs",
              items: [
                "Burst copper & polypipe repairs",
                "High-pressure drain unblocking",
                "Overflowing toilet & cistern repairs",
                "Emergency water main isolation",
                "Geyser burst & flooding containment",
                "Leaking tap & mixer valve replacement",
              ],
            },
            {
              category: "🏗️ Installations & Upgrades",
              items: [
                "100L–300L SABS Geyser installations",
                "Solar geyser & heat pump conversions",
                "Bathroom & kitchen renovation piping",
                "Water backup tank & booster pump setups",
                "Washing machine & dishwasher plumbing",
                "Water purification & filtration systems",
              ],
            },
            {
              category: "🔍 Diagnostics & Compliance",
              items: [
                "Acoustic & thermal leak detection",
                "Official Certificate of Compliance (CoC)",
                "Water pressure testing & regulation",
                "CCTV drain camera inspections",
                "Septic tank & French drain maintenance",
                "Commercial grease trap cleaning",
              ],
            },
          ].map((col) => (
            <div key={col.category} className="rounded-3xl border border-b-line bg-b-paper-raised p-7">
              <h3 className="font-display text-xl font-bold text-b-ink mb-5 pb-3 border-b border-b-line">{col.category}</h3>
              <ul className="space-y-3.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-b-ink-soft">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. EXTENSIVE PLUMBING FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking plumbers.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does Bouul prevent predatory after-hours emergency call-out fees?",
                a: "Unlike traditional directory numbers where contractors quote arbitrary call-out fees at your front gate, Bouul mandates that all plumbers display their hourly rates and call-out fees transparently on their profile. When you book an emergency dispatch, the exact rate structure is locked in advance before the plumber departs.",
              },
              {
                q: "What happens if a plumber buys a replacement part that fails a week later?",
                a: "All plumbers on Bouul are required to use SABS-approved or OEM-compliant replacement parts. Because your job is recorded digitally in your app history, you have a permanent audit trail and proof of purchase. If an installed valve or washer fails within the standard workmanship guarantee period, our support team mediates immediate warranty resolution.",
              },
              {
                q: "Can I get an official plumbing Certificate of Compliance (CoC) for selling my home?",
                a: "Yes. Many plumbers on Bouul are licensed master plumbers registered with PIRB (Plumbing Industry Registration Board). You can filter specifically for CoC-certified plumbers and request formal digital compliance certification directly through your post-job documentation tab.",
              },
              {
                q: "What should I do in my home while waiting for the emergency plumber to arrive?",
                a: "1) Locate and turn off your main external water stopcock (usually located near your front boundary wall or water meter). 2) Switch off the electrical circuit breaker for your geyser on your distribution board to prevent element burnout. 3) Snap photos or a short video of the leak and send it to your approaching plumber in the Bouul chat.",
              },
              {
                q: "How does the milestone escrow work for large geyser or renovation jobs?",
                a: "For large projects (e.g. R10,000+ solar geyser installations), you don't pay 100% upfront in cash. You deposit the funds into Bouul Escrow, structured into clear milestones (e.g., 50% upon delivery of the physical geyser unit on-site, 50% upon successful pressure testing and CoC issuance). You remain in complete financial control.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-2xl border border-b-line bg-b-paper p-6 shadow-sm"
              >
                <h3 className="font-display font-bold text-lg text-b-ink mb-2.5 flex items-start gap-2.5">
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
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-b-ink leading-tight">
              Ready to find a plumber <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-b-green-deep">you can trust?</span>
            </h2>
            <p className="text-lg md:text-xl text-b-ink-soft max-w-2xl mx-auto leading-relaxed">
              Join thousands of South African homeowners and landlords who use Bouul to book verified, escrow-protected plumbers in seconds.
            </p>

            <div className="pt-4">
              <Link
                href="/download"
                className="group relative inline-flex items-center gap-3 rounded-full bg-b-green px-10 py-5 font-bold text-b-forest text-lg shadow-[0_15px_35px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(16,185,129,0.4)]"
              >
                <span>Download Bouul Now — Free</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="pt-4 text-sm text-b-ink-soft">
              Are you a qualified master plumber or contractor?{" "}
              <Link href="/vendors" className="font-bold text-emerald-600 hover:underline inline-flex items-center gap-1">
                <span>Apply to join the Bouul Pro network</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-b-line/80 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-b-ink-faint">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600" /> PIRB &amp; SABS Compliant Pros</span>
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-emerald-600" /> 100% Escrow Protection</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-emerald-600" /> Instant GPS Dispatch</span>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />

      {/* Interactive Booking Activity Article Modal Reader */}
      <AnimatePresence>
        {selectedArticleId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-b-ink/75 backdrop-blur-md overflow-y-auto p-4 md:p-10 flex justify-center items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl"
            >
              <PlumbingActivityArticle
                articleId={selectedArticleId}
                onClose={() => setSelectedArticleId(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
