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
  Key,
  Car,
  Shield,
  Unlock,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "home_lockout",
    tabTitle: "Home Lockout & Broken Keys",
    icon: Key,
    badge: "15-25 Min Emergency Dispatch",
    title: "Locked out of your home or snapped a key? Fast, non-destructive entry.",
    description:
      "Standing outside your front door late at night is terrifying. Don't call sketchy web search numbers with hidden call-out traps. Bouul dispatches verified locksmiths trained in non-destructive picking methods so you get back inside without damaging your door frame.",
    timeline: "15 - 25 Mins ETA",
    costEstimate: "R450 – R750",
    keyBenefits: [
      "24/7 Emergency priority dispatch for residential lockouts",
      "Non-destructive picking commitment—preserves door & lock integrity",
      "Digital escrow protection—funds released only when key turns smoothly",
    ],
    ctaText: "Book Emergency Locksmith",
  },
  {
    id: "auto_key",
    tabTitle: "Car Lockout & Transponder Keys",
    icon: Car,
    badge: "Mobile Key Coding Van",
    title: "Keys locked inside your vehicle or lost smart fobs? Mobile key cutting.",
    description:
      "Towing your car to a dealership for a key replacement costs thousands and takes days. Bouul dispatches mobile auto-locksmiths equipped with laser key cutters and OBD transponder programmers directly to your vehicle's location.",
    timeline: "30 - 45 Mins Arrival",
    costEstimate: "R750 – R1,800",
    keyBenefits: [
      "Mobile ECU & OBD transponder key programming on-site",
      "Non-damaging inflatable wedge entry for locked vehicles",
      "All major vehicle makes & smart proximity fobs supported",
    ],
    ctaText: "Request Auto Locksmith",
  },
  {
    id: "smart_lock",
    tabTitle: "Smart Locks & Security Upgrades",
    icon: Lock,
    badge: "Keyless Home Security",
    title: "Upgrade to fingerprint, keypad & Wi-Fi smart locks for your property.",
    description:
      "Ditch physical keys forever. Book security specialists on Bouul who install SABS-approved biometric smart locks, digital keypads, and high-security anti-snap euro cylinders that resist drilling and picking.",
    timeline: "Same-Day / Scheduled",
    costEstimate: "R1,200 – R2,800",
    keyBenefits: [
      "Biometric fingerprint, keypad & mobile app smart lock installation",
      "Anti-snap & anti-drill euro cylinder upgrades for exterior doors",
      "Master key system setup for offices, guest houses & apartments",
    ],
    ctaText: "Plan Smart Lock Installation",
  },
  {
    id: "rekey_safe",
    tabTitle: "Post-Burglary Rekey & Safe Opening",
    icon: Shield,
    badge: "Immediate Security Reset",
    title: "Lost keys or moved home? Re-key cylinders instantly for peace of mind.",
    description:
      "Just moved into a new property or lost a set of keys? Don't risk previous occupants having duplicates. Bouul locksmiths can re-key your existing lock cylinders or replace them on the spot, restoring total security.",
    timeline: "Express Same-Day",
    costEstimate: "R550 – R1,400",
    keyBenefits: [
      "On-site cylinder re-keying so old keys stop working immediately",
      "Digital safe combination resets & emergency key overrides",
      "Heavy-duty night latch & deadbolt reinforcement",
    ],
    ctaText: "Schedule Security Rekey",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "Residential Door Non-Destructive Unlock",
    range: "R450 - R750",
    time: "20 - 40 mins",
    desc: "Emergency picking or bypass for standard timber, aluminum, or UPVC residential doors.",
    includes: ["Non-destructive picking", "Cylinder lubricated", "Safety latch check"],
  },
  {
    task: "Vehicle Lockout & Emergency Entry",
    range: "R550 - R950",
    time: "30 - 45 mins",
    desc: "Air-wedge door bypass to retrieve keys locked inside vehicle trunk or cabin.",
    includes: ["No scratch guarantee", "Trunk bypass", "Alarm reset check"],
  },
  {
    task: "Transponder Key Cutting & Remote Coding",
    range: "R850 - R1,800",
    time: "45 - 90 mins",
    desc: "Laser cutting spare key blade and OBD transponder chip programming for remote fobs.",
    includes: ["Transponder chip", "OBD coding", "Blade laser cut"],
  },
  {
    task: "Anti-Snap Cylinder Replacement & Fitting",
    range: "R650 - R1,200",
    time: "30 - 60 mins",
    desc: "High-security euro cylinder replacement with 3 new keys and anti-pick pins.",
    includes: ["High-security cylinder", "3 laser cut keys", "12-month warranty"],
  },
];

export default function LocksmithsPage() {
  const [activeTab, setActiveTab] = useState("home_lockout");
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
            <span>Verified Emergency Locksmiths Active Now • Avg. Arrival Time: 18 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Locked out? <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Fast, non-destructive entry.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Don&apos;t get trapped by anonymous call-out scams. Bouul connects you with vetted, background-checked locksmiths featuring upfront fixed pricing, live vehicle tracking, and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Key className="h-5 w-5" />
                  <span>Book Emergency Locksmith</span>
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
                  <span>LASA Accredited &amp; Police Vetted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.99 Rating (2,800+ Unlocks)</span>
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
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-display font-bold text-sm">Emergency Dispatch Active</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  LASA Registered Pro
                </span>
              </div>

              {/* Locksmith card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 font-bold text-white text-lg shadow-md">
                      <Key className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">Apex Lock &amp; Key</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Master Locksmith • Police Clearance #LK-9021</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">290+ Mobile Unlocks</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Live Status</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Arriving in 11 mins
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
                  <span className="text-b-ink font-medium">Snap photo of lock or keyway to confirm rate</span>
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
                  <span className="text-b-ink-faint">Non-destructive entry &amp; key test before payout</span>
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
            <Key className="h-3.5 w-3.5" />
            <span>Tailored Locksmith Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact lockout situation.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your scenario below to see how our accredited locksmiths provide non-destructive entry and upfront price protection.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Arrival &amp; Cost</span>
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
                      <span className="font-semibold text-b-ink">LASA Registered &amp; Police Vetted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Entry Method</span>
                      <span className="font-semibold text-b-ink">Non-Destructive Commitment</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never pay upfront cash to an unverified locksmith. Bouul locks your fixed price in digital escrow until you test your key.</span>
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
                <span>Transparent Locksmith Pricing</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No 2am extortion. Upfront rates guaranteed.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Being locked out leaves you vulnerable to price gouging. Bouul standardizes baseline unlock rates so you know the price before dispatching a locksmith.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Non-Destructive Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Our locksmiths prioritize non-destructive picking first. If a lock cylinder must be drilled due to damage, you approve the replacement part price in-app before drilling begins.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Lockout Type for Guide Pricing</span>
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
                    <span>Rate confirmed in-app before locksmith dispatches.</span>
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
            {/* Left Column: Explaining Zola AI in the context of locksmiths */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI locksmith assistant for 24/7 dispatch.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Stranded outside? Tell Zola your emergency in plain language or voice notes—she identifies your lock type, verifies nearby accredited locksmiths, and hands you an instant dispatch draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Lock &amp; Key Diagnostics</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your keyway, door lock, or car ignition. Zola&apos;s vision AI identifies the lock cylinder brand (e.g. CISA, Yale, Union) or transponder type, ensuring your locksmith brings exact bypass picks and key blanks.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Vehicle &amp; Property Specs Memory</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your vehicle model, door keyway sizes, and gate codes. When you need a spare key cut or lock re-keyed in the future, your specs are automatically passed to your locksmith.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant 24/7 Mobile Dispatch</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola checks live mobile locksmith vans operating near your GPS location, selecting an available LASA-accredited professional who can reach your address within minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Locksmith Chat Mockup */}
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
                          Vision &amp; Dispatch Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • 24/7 Locksmith Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I locked my keys inside my apartment! Here is a photo of my front door lock:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">door_lock_photo.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: Standard Euro Profile Cylinder</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Lock Diagnostics &amp; Dispatch</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your lock photo: that&apos;s a standard Euro Profile cylinder. Non-destructive picking is 100% possible with zero door damage.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **Apex Lock &amp; Key** (LASA Accredited #LK-9021, 11 mins away) who is en route with non-destructive lock pick tools.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Ready for Emergency Dispatch
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Residential Non-Destructive Door Unlock</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">Apex Lock &amp; Key • ETA: ~11 mins • Fixed R550</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Dispatch Now
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% non-destructive guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Locksmith Trust ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Emergency Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why booking a locksmith on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Being locked out is a vulnerable moment. We engineered a platform enforcing identity verification, fixed escrow pricing, and non-destructive entry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. Police Vetted & LASA Registered",
              subtitle: "Strict security accreditation",
              body: "Every locksmith on Bouul undergoes identity checks, criminal background verification, and proof of trade registration. Unvetted operators are strictly barred.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "No call-out extortion scams",
              body: "Never pay cash upfront to a stranger at 2am. Your fixed price is held safely in Bouul escrow and is only released after your door is opened and you test your key.",
            },
            {
              icon: MapPin,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Live GPS Arrival Countdown",
              subtitle: "Know exactly when help arrives",
              body: "Track your assigned locksmith van in real time on an interactive map. Stay safe inside your vehicle or nearby location until the service truck pulls up.",
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
                <span>Standard on all locksmith bookings</span>
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
              <span>Proven 2am Car Lockout Rescue</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From stranded outside to driving home in 24 minutes.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a late-night vehicle lockout was resolved safely using Bouul&apos;s emergency GPS dispatch and mobile key bypass.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Request",
                time: "23:42 PM",
                title: "Keys Locked in Trunk",
                desc: "Driver locks smart key in trunk. Taps emergency lockout in Bouul app.",
                badge: "GPS Location Shared",
              },
              {
                step: "02. Match",
                time: "23:44 PM",
                title: "Auto Locksmith Dispatched",
                desc: "Apex Lock & Key dispatched with non-scratch air-wedge bypass tools.",
                badge: "Fixed Escrow Locked",
              },
              {
                step: "03. Arrival",
                time: "23:56 PM",
                title: "12-Min Van Arrival",
                desc: "Mobile service van arrives. Non-damaging air-wedge bypass executed.",
                badge: "Live Vehicle Tracking",
              },
              {
                step: "04. Resolution",
                time: "00:06 AM",
                title: "Trunk Unlocked & Driving",
                desc: "Keys retrieved without a single scratch. Driver taps 'Satisfied' to release funds.",
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
                  <span>Typical Emergency Unlock</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LOCKSMITHS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional locksmith standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every locksmith on Bouul is vetted for security and precision. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "hardware",
              articleId: "emergency_tripping_repair",
              tag: "High Security",
              title: "Anti-Snap Euro Cylinder Upgrade",
              desc: "Heavy-duty hardened steel euro cylinders resisting drilling, snapping, and bump key attacks.",
            },
            {
              file: "auto_repair",
              articleId: "db_board_rewire",
              tag: "Auto Locksmith",
              title: "Transponder Key Laser Cutting & OBD Coding",
              desc: "On-site laser key blade cutting and OBD transponder fob coding for modern vehicles.",
            },
            {
              file: "security",
              articleId: "surge_arrester_install",
              tag: "Access Control",
              title: "Digital Keypad & Biometric Smart Lock",
              desc: "Keyless fingerprint and PIN entry installation for residential front doors and modern offices.",
            },
            {
              file: "smart_home",
              articleId: "electrical_coc_inspection",
              tag: "Smart Home",
              title: "Wi-Fi Connected Deadbolt Integration",
              desc: "Remote unlock smart deadbolts connected to home Wi-Fi and mobile smartphone applications.",
            },
            {
              file: "carpentry",
              articleId: "solar_inverter_wiring",
              tag: "Door Restoration",
              title: "Mortise Lock & Striker Plate Alignment",
              desc: "Precision timber door mortise chiseling, striker plate alignment, and latch smooth operation.",
            },
            {
              file: "remodeling",
              articleId: "generator_changeover_switch",
              tag: "Commercial Security",
              title: "Master Key System & Panic Bar Setup",
              desc: "Commercial building master keying, fire escape panic bars, and heavy-duty gate lock installations.",
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
                  <span>Read Article & Process →</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. COMPREHENSIVE LOCKSMITH SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every locksmith service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From 2am emergency home lockouts to transponder key programming and smart security installations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🔑 Residential Lockouts & Repairs",
              items: [
                "24/7 Emergency home lockout non-destructive entry",
                "Broken key removal from cylinders",
                "High-security euro cylinder replacement",
                "Mortise lock fitting & latch repair",
                "Gate latch & deadlock installation",
                "Sliding door & window lock fitting",
              ],
            },
            {
              category: "🚗 Automotive Locksmith",
              items: [
                "Mobile car lockout & trunk air-wedge entry",
                "Transponder key chip programming",
                "Laser cut car key blade duplication",
                "Smart key proximity fob replacement",
                "Ignition barrel repair & key extraction",
                "Motorcycle seat & ignition unlocks",
              ],
            },
            {
              category: "🛡️ Smart Security & Safes",
              items: [
                "Biometric fingerprint smart lock fitting",
                "Digital keypad & RFID card lock setup",
                "Cylinder re-keying for new homeowners",
                "Master key system setup for commercial space",
                "Digital safe combination resets & overrides",
                "Fire escape panic hardware installation",
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

      {/* ── 9. EXTENSIVE LOCKSMITH FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking locksmiths.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Will the locksmith damage my door or lock cylinder?",
                a: "Locksmiths on Bouul prioritize non-destructive entry methods (lock picking and air-wedge bypass). In over 95% of standard lockouts, your door and cylinder remain completely undamaged.",
              },
              {
                q: "How does Bouul protect me from late-night price gouging?",
                a: "Unlike anonymous web search numbers that quote R200 over the phone and demand R2,500 cash on site, Bouul fixes your rate in-app before dispatch. Your payment is held safely in escrow.",
              },
              {
                q: "Can a mobile locksmith code a new smart transponder key for my car on site?",
                a: "Yes! Auto locksmiths booked via Bouul carry mobile OBD diagnostic computers and laser key cutters in their service vans to program spare or replacement transponder fobs at your vehicle's location.",
              },
              {
                q: "What credentials do locksmiths on Bouul hold?",
                a: "All locksmiths undergo identity verification, police clearance background checks, and trade registration validation before activation.",
              },
              {
                q: "When is my payment released to the locksmith?",
                a: "Your payment remains locked in Bouul escrow until the locksmith opens your door or vehicle, hand-delivers your key, and you tap 'Job Satisfied' in the app.",
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
              <Key className="h-3.5 w-3.5" />
              <span>Fast Emergency Locksmith Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Locked out or need a security upgrade?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over unverified call-out scams or damaged doors again. Join thousands who use Bouul to book accredited, escrow-protected locksmiths in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Key className="h-5 w-5" />
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
