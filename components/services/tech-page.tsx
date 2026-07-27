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
  Monitor,
  Cpu,
  Shield,
  Wifi,
  HardDrive,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "cctv_security",
    tabTitle: "CCTV & Security Systems",
    icon: Camera,
    badge: "PSIRA Vetted Technicians",
    title: "HD IP cameras, electric fencing & mobile phone monitoring.",
    description:
      "Protect your property with certified security technicians. Book CCTV installers on Bouul for high-definition 4K night-vision camera placement, mobile phone remote viewing setup, electric fencing repairs, and alarm system integration.",
    timeline: "Same-Day / Scheduled",
    costEstimate: "R1,800 – R7,500",
    keyBenefits: [
      "4K Night-vision IP camera installation & mobile remote view setup",
      "Electric fence Energizer repair, wire tensioning & alarm connection",
      "Digital escrow protection—funds released after live camera feed test",
    ],
    ctaText: "Book CCTV Installer",
  },
  {
    id: "computer_repair",
    tabTitle: "Computer & Laptop Repair",
    icon: Monitor,
    badge: "Certified Hardware Techs",
    title: "Laptop screen replacement, SSD upgrades & virus removal.",
    description:
      "Is a crashing computer slowing down your workday? Book certified IT technicians on Bouul for home or office visits. We handle cracked laptop screens, SSD speed upgrades, RAM installation, and malware cleanup.",
    timeline: "1 - 2 Hours",
    costEstimate: "R450 – R1,500",
    keyBenefits: [
      "MacBook & Windows laptop screen, battery & keyboard replacement",
      "High-speed SSD upgrade & OS re-installation with zero data loss",
      "On-site home diagnostic visit or secure courier pickup",
    ],
    ctaText: "Book Computer Tech",
  },
  {
    id: "wifi_networking",
    tabTitle: "Mesh Wi-Fi & Fibre Networks",
    icon: Wifi,
    badge: "Gigabit Network Speeds",
    title: "Fix Wi-Fi dead zones, mesh router setup & CAT6 cabling.",
    description:
      "Tired of buffering during video calls? Network specialists on Bouul optimize your home fibre connection, install seamless mesh Wi-Fi access points, and run neat CAT6 Ethernet cables to every room.",
    timeline: "2 - 4 Hours",
    costEstimate: "R650 – R2,800",
    keyBenefits: [
      "Whole-home seamless Mesh Wi-Fi coverage with zero dead zones",
      "Neat trunked CAT6 Ethernet cabling for smart TVs & gaming rigs",
      "Fibre router speed optimization & firewall security configuration",
    ],
    ctaText: "Optimize Wi-Fi Network",
  },
  {
    id: "data_recovery",
    tabTitle: "Data Recovery & IT Support",
    icon: HardDrive,
    badge: "Cleanroom Data Recovery",
    title: "Recover lost photos, crashed hard drives & IT helpdesk support.",
    description:
      "Accidentally deleted important files or suffered a hard drive crash? Certified data recovery experts on Bouul recover photos, documents, and business databases from damaged HDDs, SSDs, and flash drives.",
    timeline: "1 - 3 Days",
    costEstimate: "R850 – R4,500",
    keyBenefits: [
      "Cleanroom data recovery for crashed hard drives & corrupt SSDs",
      "Automated cloud backup setup for home & small office computers",
      "100% strict data privacy NDA guarantee",
    ],
    ctaText: "Recover Lost Data",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "4-Camera 4K HD CCTV System Installation",
    range: "R3,500 - R6,800",
    time: "1 day",
    desc: "4 outdoor 4K night-vision cameras, 1TB DVR/NVR recorder, cabling, power supply, and mobile phone app remote view setup.",
    includes: ["4x 4K IP cameras", "1TB DVR recorder", "Mobile app setup"],
  },
  {
    task: "Laptop SSD Upgrade & System Speedup",
    range: "R650 - R1,400",
    time: "2 hours",
    desc: "Installation of high-speed 512GB/1TB SSD, Windows/macOS re-installation, and full user file transfer.",
    includes: ["512GB/1TB SSD drive", "OS installation", "Data transfer"],
  },
  {
    task: "Home Mesh Wi-Fi & Dead Zone Removal",
    range: "R850 - R2,200",
    time: "2 - 3 hours",
    desc: "Dual-band Mesh Wi-Fi access point installation, router configuration, speed testing, and dead zone elimination.",
    includes: ["Mesh access point", "Router config", "Speed optimization"],
  },
  {
    task: "On-Site IT Support & Virus Removal Visit",
    range: "R450 - R850",
    time: "1 - 2 hours",
    desc: "In-home or office diagnostic visit, malware & virus removal, printer network setup, and software troubleshooting.",
    includes: ["1-2 hrs labor", "Malware removal", "Printer network config"],
  },
];

export default function TechPage() {
  const [activeTab, setActiveTab] = useState("cctv_security");
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
            <span>Verified CCTV Technicians &amp; IT Specialists Active Now • Avg. Confirmation: 5 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Tech &amp; security services. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Escrow protected setup.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                From CCTV camera installation and laptop repairs to mesh Wi-Fi setup and data recovery. Book PSIRA &amp; IT certified technicians with upfront pricing and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Monitor className="h-5 w-5" />
                  <span>Book Tech Professional</span>
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
                  <span>PSIRA Security &amp; IT Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.99 Rating (3,900+ Installs)</span>
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
                  <span className="font-display font-bold text-sm">Security Tech Matched</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  PSIRA Security Clearance
                </span>
              </div>

              {/* Tech card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      <Camera className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">SecureVision Tech</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">4K CCTV &amp; Mesh Wi-Fi Specialist • PSIRA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">350+ CCTV Installs</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Scheduled Slot</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Today 11:00 AM
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R3,500.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Select tech problem or snap photo of camera/laptop issue</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow holds payment safely until installation testing</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Test live mobile camera feed or PC &amp; release funds</span>
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
            <Monitor className="h-3.5 w-3.5" />
            <span>Tailored Tech Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact tech &amp; security needs.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your technology requirement below to see how our certified IT specialists deliver seamless solutions.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Tech Rate</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Certification</span>
                      <span className="font-semibold text-b-ink">PSIRA &amp; IT Vetted Techs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data Privacy</span>
                      <span className="font-semibold text-b-ink">100% Strict NDA Guarantee</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Every security installer and IT technician undergoes PSIRA registration validation, criminal background clearance, and technical certification.</span>
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
                <span>Transparent Tech Rates</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No inflated IT callout fees. Fixed rates.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Unverified technicians often charge high hourly callout fees without fixing the core issue. Bouul standardizes baseline rates for CCTV and IT repairs.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Tech Setup Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your technician approves the fixed installation quote in-app. Payment is locked safely in digital escrow until you test the live feed or computer performance.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Tech Job for Guide Pricing</span>
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
                      Duration: {currentEstimate.time}
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
                    <span>Tech rate confirmed in-app before technician arrival.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Get Exact Tech Quote</span>
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
            {/* Left Column: Explaining Zola AI in the context of tech */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI tech assistant who diagnoses network &amp; hardware faults.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Snap a photo of an error code, laptop screen defect, or camera wiring—Zola diagnoses the hardware problem, recommends replacement specs, and hands you an exact booking draft.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Screen &amp; Hardware Fault Analysis</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your cracked laptop screen, DVR error light, or router cabling. Zola&apos;s vision AI identifies screen panel model numbers, drive health, and camera wiring requirements.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Tech Memory &amp; Security Specs Profile</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your home router passwords, camera DVR IP addresses, and laptop serial numbers. She briefings technicians beforehand to ensure seamless setup.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Dispatch &amp; Escrow Release</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Need emergency CCTV repair or immediate virus removal? Zola matches certified tech pros near you who arrive on-site with correct tools and replacement parts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Tech Chat Mockup */}
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
                          Hardware &amp; Security Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Tech Services Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I want to install 4 CCTV cameras around my house! Here is a photo of my driveway &amp; gate:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">gate_perimeter_view.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: 4K Wide Angle IP Camera Placement</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Security &amp; Wiring Diagnostic</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your perimeter layout: wide angle 4K night-vision IP cameras recommended with PoE cabling to central DVR.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **SecureVision Tech** (PSIRA Registered, 350+ CCTV installs) available Today at 11:00 AM.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Confirmed CCTV Install Draft
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">4-Camera 4K HD CCTV System + Mobile Phone Setup</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">SecureVision • Today 11:00 AM • Fixed R3,500</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% mobile feed guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Tech Trust ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Security &amp; Data Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why hiring tech pros on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Security and IT work require absolute trust. We engineered a platform enforcing PSIRA registration, strict NDA privacy, and digital escrow safety.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. 100% PSIRA & IT Certified",
              subtitle: "Strict security background checks",
              body: "Every CCTV installer and security technician on Bouul undergoes PSIRA clearance validation, criminal record checks, and technical competence testing.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Pay only after live feed verification",
              body: "Never pay upfront for incomplete camera or network installs. Payment is held safely in Bouul digital escrow and only released after live phone feed testing.",
            },
            {
              icon: Shield,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. 100% Data Privacy & NDA",
              subtitle: "Your files & network are secure",
              body: "Our computer repair and data recovery experts operate under strict POPIA compliance and non-disclosure agreements, keeping your files completely confidential.",
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
                <span>Standard on all tech bookings</span>
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
              <span>Proven 4-Camera Security Setup</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Complete home CCTV &amp; mobile monitoring setup in 3 hours.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a homeowner secured their property with 4K cameras and live smartphone notifications using Bouul.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Inspection",
                time: "10:30 AM",
                title: "Perimeter Assessment",
                desc: "Technician inspects gate, driveway & back patio angle requirements.",
                badge: "PSIRA Verified",
              },
              {
                step: "02. Cabling",
                time: "11:15 AM",
                title: "PoE Cabling & Mounting",
                desc: "4K cameras mounted with waterproof conduit and hidden cabling.",
                badge: "Conduit Installed",
              },
              {
                step: "03. Config",
                time: "12:45 PM",
                title: "DVR & App Configuration",
                desc: "1TB DVR configured for motion alerts and remote view app synced on phone.",
                badge: "Mobile App Synced",
              },
              {
                step: "04. Testing",
                time: "13:30 PM",
                title: "Live Feed Test & Escrow Release",
                desc: "Homeowner tests night-vision alerts on phone and releases digital escrow.",
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
                  <span>Typical CCTV Installation</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TECH PROS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional tech standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every security installer and IT technician on Bouul is vetted for technical competence. Here is a glimpse of the professional standards available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "hardware",
              tag: "CCTV Installation",
              title: "4K Night-Vision IP Camera Setup",
              desc: "Outdoor weatherproof 4K camera mounting, PoE cabling, DVR recording, and mobile remote viewing.",
            },
            {
              file: "auto_repair",
              tag: "Computer Repair",
              title: "Laptop SSD Upgrade & Hardware Repair",
              desc: "High-speed SSD installation, RAM expansion, cracked screen replacement, and OS speed optimization.",
            },
            {
              file: "interior_design",
              tag: "Mesh Wi-Fi",
              title: "Whole-Home Seamless Mesh Wi-Fi Setup",
              desc: "Dual-band Mesh access point setup, fibre router speed tuning, and dead zone elimination.",
            },
            {
              file: "remodeling",
              tag: "Security Systems",
              title: "Electric Fence Energizer & Alarm Repair",
              desc: "Electric fence energizer replacement, wire tensioning, siren testing, and alarm system integration.",
            },
            {
              file: "house_cleaning",
              tag: "Network Cabling",
              title: "CAT6 Ethernet Cabling & Office Rack Setup",
              desc: "Neat wall trunking, CAT6 RJ45 termination, patch panel setup, and high-speed network switches.",
            },
            {
              file: "photography_service",
              tag: "Data Recovery",
              title: "Crashed Hard Drive & SSD Data Recovery",
              desc: "Cleanroom recovery of lost photos, corrupt files, and damaged hard drives under strict privacy NDA.",
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

      {/* ── 8. COMPREHENSIVE TECH SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every tech &amp; security service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From CCTV installation and computer repair to Mesh Wi-Fi, CAT6 network cabling, and data recovery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "📹 CCTV & Security Systems",
              items: [
                "4K Night-vision IP camera installation",
                "Mobile phone app remote view configuration",
                "DVR / NVR hard drive recorder setup",
                "Electric fence energizer repair & tensioning",
                "Alarm system integration & motion sensors",
                "Intercom & gate motor smart access setup",
              ],
            },
            {
              category: "💻 Computer Repair & IT Support",
              items: [
                "Laptop screen, battery & keyboard replacement",
                "High-speed SSD upgrade & OS re-installation",
                "Malware, spyware & virus removal",
                "Desktop PC custom building & component fix",
                "Printers & wireless office network setup",
                "On-site home & business IT helpdesk support",
              ],
            },
            {
              category: "🌐 Wi-Fi, Networking & Data",
              items: [
                "Seamless Mesh Wi-Fi setup (zero dead zones)",
                "Neat trunked CAT6 Ethernet cable runs",
                "Fibre router speed & firewall optimization",
                "Cleanroom hard drive & SSD data recovery",
                "Automated cloud backup configuration",
                "Smart home TV & automation integration",
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

      {/* ── 9. EXTENSIVE TECH FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking tech pros.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I watch my CCTV cameras live on my mobile phone when I'm away?",
                a: "Yes! All CCTV camera installations booked on Bouul include mobile phone app configuration so you can view live HD streams and receive motion alerts anywhere in the world.",
              },
              {
                q: "Will an SSD upgrade preserve all my files and photos?",
                a: "Yes! Our computer technicians clone your existing hard drive or migrate your files safely to the new SSD before returning your computer.",
              },
              {
                q: "Are security installers registered with PSIRA?",
                a: "Yes! All CCTV and security technicians on Bouul undergo PSIRA clearance verification, proof of address validation, and police criminal checks.",
              },
              {
                q: "How does escrow protect me during a CCTV installation?",
                a: "Your payment is locked safely in Bouul digital escrow and is only released after the cameras are installed and you test the live feed on your mobile phone.",
              },
              {
                q: "Is my personal data safe during computer repair or data recovery?",
                a: "Our technicians operate under strict POPIA compliance and signed privacy NDAs. Your personal files, photos, and passwords remain strictly confidential.",
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
              <Monitor className="h-3.5 w-3.5" />
              <span>Verified Tech &amp; Security Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to secure your property &amp; upgrade your tech?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over unverified security installers or slow computers again. Join thousands who use Bouul to book certified, escrow-protected tech pros in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Monitor className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> PSIRA Certified
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
