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
  Lock,
  RefreshCw,
  ChevronRight,
  Star,
  Check,
  Info,
  Building2,
  Hammer,
  Brain,
  Truck,
  Car,
  Fuel,
  Key,
  Shield,
  Navigation,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "breakdown_tow",
    tabTitle: "Flatbed Emergency Towing",
    icon: Truck,
    badge: "15-25 Min Emergency Dispatch",
    title: "Stranded on the side of the road? Immediate flatbed towing response.",
    description:
      "When your engine seizes, radiator bursts, or gearbox locks up, waiting hours for an unverified tow truck on a dark highway is dangerous. Bouul dispatches licensed flatbed tilt-tray trucks with real-time GPS tracking to safely transport your vehicle.",
    timeline: "15 - 25 Mins ETA",
    costEstimate: "R650 – R1,200",
    keyBenefits: [
      "24/7 Priority flatbed tilt-tray dispatch for safe non-scratch towing",
      "Live GPS tracking—share your tow truck's location with loved ones",
      "Escrow protection—funds released only when your car is safely dropped off",
    ],
    ctaText: "Book Emergency Tow",
  },
  {
    id: "flat_tyre",
    tabTitle: "Flat Tyre & Wheel Change",
    icon: Car,
    badge: "Fast Roadside Rescue",
    title: "Burst tyre or stuck lug nuts on the highway? On-site spare wheel change.",
    description:
      "A flat tyre on a busy highway is stressful and unsafe. Bouul dispatches roadside assistance operators equipped with heavy-duty hydraulic jacks and impact wrenches to swap your flat with your spare wheel or inflate run-flat tyres on site.",
    timeline: "15 - 30 Mins",
    costEstimate: "R320 – R480",
    keyBenefits: [
      "Rapid highway response for puncture & tyre blowout emergencies",
      "Hydraulic jack & stubborn wheel nut removal equipment",
      "Tyre pressure check & mobile inflation to recommended PSI",
    ],
    ctaText: "Request Tyre Assistance",
  },
  {
    id: "battery_jump",
    tabTitle: "Jumpstart & Battery Rescue",
    icon: Zap,
    badge: "On-Site Power Boost",
    title: "Left your lights on or battery dead? Immediate heavy-duty jumpstart.",
    description:
      "Dead battery in an underground parking garage or shopping mall? Bouul dispatches roadside technicians carrying commercial 12V/24V jump starters and surge-protected booster cables to get your engine running without frying sensitive ECU electronics.",
    timeline: "15 - 25 Mins",
    costEstimate: "R350 – R550",
    keyBenefits: [
      "Surge-protected 12V/24V booster jumpstart units",
      "Alternator charge test before you drive away",
      "Option to purchase new replacement battery on the spot",
    ],
    ctaText: "Request Battery Jumpstart",
  },
  {
    id: "fuel_delivery",
    tabTitle: "Emergency Fuel Delivery",
    icon: Fuel,
    badge: "5L Clean Fuel Delivered",
    title: "Ran out of fuel miles from the nearest station? 5L fuel delivery to your location.",
    description:
      "Running out of fuel on an unfamiliar road happens to everyone. Bouul dispatches a roadside assistant carrying 5 liters of clean petrol or diesel in approved safety canisters directly to your vehicle's GPS pin so you can reach the nearest filling station.",
    timeline: "20 - 35 Mins",
    costEstimate: "R380 – R580",
    keyBenefits: [
      "5L Clean unleaded petrol or 50ppm diesel delivered in safety can",
      "Fuel line priming for diesel vehicles if air-locked",
      "Transparent fixed pricing including fuel & delivery charge",
    ],
    ctaText: "Request Fuel Delivery",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "Highway Flatbed Towing (First 10km)",
    range: "R650 - R950",
    time: "15 - 30 mins dispatch",
    desc: "Flatbed tilt-tray winch loading and transport within 10km radius. Additional km charged at fixed per-km rate.",
    includes: ["Flatbed tilt-tray loading", "10km transport included", "Vehicle tie-down strap security"],
  },
  {
    task: "Roadside Emergency Jumpstart",
    range: "R350 - R550",
    time: "15 - 25 mins dispatch",
    desc: "Surge-protected booster pack jumpstart for cars, SUVs, and light commercial vehicles.",
    includes: ["Surge protection boost", "Alternator test", "Driveway/underground access"],
  },
  {
    task: "Flat Tyre & Spare Wheel Replacement",
    range: "R320 - R480",
    time: "15 - 30 mins dispatch",
    desc: "Hydraulic jack lifting, damaged wheel removal, spare wheel fitment, and pressure check.",
    includes: ["Hydraulic jack lift", "Spare wheel fitment", "PSI pressure check"],
  },
  {
    task: "Emergency 5L Fuel Delivery",
    range: "R380 - R580",
    time: "20 - 35 mins dispatch",
    desc: "Direct delivery of 5 liters of unleaded petrol or 50ppm diesel to stranded vehicle GPS location.",
    includes: ["5L clean fuel included", "Safety can pouring", "Engine start check"],
  },
];

export default function TowingPage() {
  const [activeTab, setActiveTab] = useState("breakdown_tow");
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
            <span>Verified Towing &amp; Roadside Operators Active Now • Avg. Dispatch ETA: 14 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Stranded on the road? <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Immediate towing dispatch.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Don&apos;t get victimized by unregistered tow truck chasers. Bouul connects you with licensed, insured flatbed tow operators featuring fixed kilometric rates, live GPS tracking, and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Truck className="h-5 w-5" />
                  <span>Request Emergency Tow</span>
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
                  <span>UTASA Accredited &amp; Goods In Transit Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.99 Rating (5,100+ Recoveries)</span>
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
                  <span className="font-display font-bold text-sm">Emergency Roadside Active</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  UTASA Insured Operator
                </span>
              </div>

              {/* Tow truck card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 font-bold text-white text-lg shadow-md">
                      <Truck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">RapidTow Assistance</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Flatbed Tilt-Tray • Permit #TW-8812</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">580+ Highway Tows</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Live Dispatch Status</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Tow Truck ETA: 12 Mins
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R750.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Auto GPS location &amp; destination selected in app</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow locks fixed rate per km before truck departs</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Safe delivery to workshop/home before releasing funds</span>
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
            <Truck className="h-3.5 w-3.5" />
            <span>Tailored Roadside Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact roadside emergency.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your scenario below to see how our accredited tow operators provide non-scratch flatbed recovery and fixed kilometric pricing.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Dispatch &amp; Rate</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Operator Vetting</span>
                      <span className="font-semibold text-b-ink">UTASA Accredited &amp; Insured</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>GPS Vehicle Tracking</span>
                      <span className="font-semibold text-b-ink">Live Route &amp; Tow Truck Map</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never pay cash on the highway to unregistered tow trucks. Bouul locks your fixed per-km rate in escrow before the truck dispatches.</span>
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
                <span>Transparent Kilometric Pricing</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No roadside price gouging. Fixed per-km rates.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Highway breakdowns leave drivers exposed to extortionate tow fees. Bouul standardizes baseline hookup fees and transparent per-kilometer rates before dispatch.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Goods-In-Transit Insurance</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Every flatbed tow booked on Bouul includes Goods-In-Transit insurance covering your vehicle against damage during loading, transit, and offloading.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Roadside Service for Guide Pricing</span>
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
                      Dispatch: {currentEstimate.time}
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
                    <span>Rate confirmed in-app before tow truck dispatches.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Request Tow In App</span>
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
            {/* Left Column: Explaining Zola AI in the context of towing */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI roadside emergency assistant.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Break down on a dark highway or suburban street? Tell Zola what happened or press Emergency Rescue—she captures your exact GPS pin, calculates flatbed requirements, and dispatches help instantly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Location &amp; Damage Photo Briefing</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your vehicle&apos;s position, burst tyre, or front bumper. Zola&apos;s vision AI analyzes loading clearance and wheel damage, ensuring the tow truck arrives with the correct winch cables and ground clearance ramps.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Vehicle Memory &amp; Towing Specs</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your vehicle model (e.g. BMW 3 Series, low clearance, automatic transmission requires flatbed only). She automatically enforces flatbed tilt-tray dispatch so your transmission is never damaged.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Live GPS Truck Tracking &amp; Emergency Share</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Track your assigned tow truck driver live on an interactive map. Zola lets you share a live tracking link with family or insurance so everyone knows help is on the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Towing Chat Mockup */}
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
                          GPS &amp; Roadside Dispatch Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Emergency Towing</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I blew a tyre on the highway and my engine died! Here is a photo of where I am parked:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">highway_breakdown.jpg</p>
                        <p className="text-[10px] text-emerald-200">GPS Pin Verified • Emergency Shoulder</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola GPS &amp; Vehicle Memory Diagnostic</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I captured your GPS pin. From your **Vehicle Memory profile** (Automatic transmission), flatbed tilt-tray towing is required to prevent gearbox damage.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **RapidTow Assistance** (UTASA Insured #TW-8812, 12 mins away) who is en route with a low-clearance flatbed truck.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Ready for Emergency Tow Dispatch
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Flatbed Highway Tow (12km Transport)</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">RapidTow Assistance • ETA: ~12 mins • Fixed R750</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Dispatch Tow Truck
                      </span>
                      <span className="text-[11px] text-b-cream/50">100% insured transit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Roadside Safety ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Roadside Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why booking towing on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            A highway breakdown is high stress. We engineered an emergency-first platform enforcing operator insurance, fixed kilometric rates, and live vehicle tracking.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. UTASA Vetted & Insured",
              subtitle: "Strict Goods-In-Transit insurance",
              body: "Every tow truck operator on Bouul undergoes identity checks, driver license verification, and Goods-In-Transit insurance validation before taking highway dispatches.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "No highway cash extortion",
              body: "Never argue over cash fees on the shoulder of a highway. Your fixed kilometric rate is locked safely in Bouul escrow and is only released after your vehicle is delivered.",
            },
            {
              icon: Navigation,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Live GPS Arrival Countdown",
              subtitle: "Know exactly when your tow truck arrives",
              body: "Track your assigned flatbed truck in real time on an interactive map. Stay safe inside your locked vehicle until your tow driver arrives at your exact location.",
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
                <span>Standard on all towing dispatches</span>
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
              <span>Proven Highway Rescue</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From roadside puncture to home delivery in 21 minutes.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a late-night highway tyre blowout was resolved safely using Bouul&apos;s emergency GPS roadside dispatch.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Request",
                time: "21:10 PM",
                title: "Tyre Blowout on Highway",
                desc: "Driver experiences sidewall blowout. Taps emergency roadside rescue in Bouul app.",
                badge: "GPS Location Shared",
              },
              {
                step: "02. Match",
                time: "21:12 PM",
                title: "Roadside Operator Dispatched",
                desc: "RapidTow unit dispatched carrying high-pressure hydraulic jack & torque wrench.",
                badge: "Escrow Locked",
              },
              {
                step: "03. Arrival",
                time: "21:24 PM",
                title: "12-Min Unit Arrival",
                desc: "Operator arrives, sets up safety warning cones, and replaces blown tyre with spare wheel.",
                badge: "Live GPS Tracking",
              },
              {
                step: "04. Resolution",
                time: "21:31 PM",
                title: "Safe Driveway Journey",
                desc: "Tyre PSI checked, driver guided safely back onto highway, and taps 'Satisfied' to release funds.",
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
                  <span>Typical Highway Rescue</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TOWING IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional towing standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every tow operator on Bouul is vetted for safety and transit insurance. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "towing",
              tag: "Flatbed Towing",
              title: "Flatbed Tilt-Tray Vehicle Transport",
              desc: "Heavy-duty hydraulic tilt-tray flatbed towing for luxury, automatic, and low-clearance vehicles.",
            },
            {
              file: "auto_repair",
              tag: "Roadside Rescue",
              title: "Highway Tyre Blowout & Spare Fitment",
              desc: "Mobile hydraulic jack lifting, stubborn lug nut removal, and spare wheel torque tightening.",
            },
            {
              file: "hardware",
              tag: "Battery Jumpstart",
              title: "Heavy-Duty 12V/24V Jumpstart Boost",
              desc: "Surge-protected electronic jumpstart packs for dead batteries in cars, SUVs, and delivery vans.",
            },
            {
              file: "electrical_service",
              tag: "Fuel Delivery",
              title: "5L Clean Fuel canister Delivery",
              desc: "On-site 5L unleaded or diesel fuel delivery in safety canisters for empty fuel tank emergencies.",
            },
            {
              file: "appliances",
              tag: "Accident Recovery",
              title: "Safe Winch Loading & Body Shop Drop-off",
              desc: "Precision winch recovery from accident scenes with direct delivery to approved panelbeaters.",
            },
            {
              file: "smart_home",
              tag: "Long-Distance Towing",
              title: "Inter-City Vehicle Logistics",
              desc: "Scheduled long-distance vehicle transport between major cities with full Goods-In-Transit insurance.",
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
                  <span>100% Insured Transit</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. COMPREHENSIVE TOWING SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every towing &amp; roadside service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From 24/7 highway breakdown towing to mobile battery jumpstarts and tyre changes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🚚 Flatbed Towing & Recovery",
              items: [
                "24/7 Emergency flatbed tilt-tray towing",
                "Accident scene winch recovery",
                "Automatic & AWD vehicle flatbed transport",
                "Low-clearance sports car ramp loading",
                "Inter-city long distance vehicle transport",
                "Underground parking garage low-mast tow",
              ],
            },
            {
              category: "⛽ Roadside Assistance Services",
              items: [
                "Surge-protected 12V/24V battery jumpstarts",
                "5L Emergency petrol or diesel fuel delivery",
                "Highway flat tyre & spare wheel change",
                "Locked key vehicle air-wedge entry",
                "Radiator coolant leak emergency top-up",
                "Stuck ditch & mud vehicle winch extraction",
              ],
            },
            {
              category: "🛡️ Commercial & Fleet Logistics",
              items: [
                "Multi-vehicle fleet transport logistics",
                "Heavy-duty commercial truck towing",
                "Insurance panelbeater direct drop-offs",
                "Immobilized vehicle yard storage transport",
                "Motorcycle & quad bike specialized towing",
                "Goods-in-transit insured transport claims",
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

      {/* ── 9. EXTENSIVE TOWING FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking towing.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How are tow rates calculated on Bouul?",
                a: "Tow rates consist of a standardized baseline hookup fee (covering the first 10km) plus a fixed per-kilometer rate for additional distance. You see the exact total price in-app before confirming your tow.",
              },
              {
                q: "Is my vehicle insured during transit?",
                a: "Yes! Every flatbed tow operator booked through Bouul maintains active Goods-In-Transit insurance covering your vehicle against any damage during winch loading, highway transit, and offloading.",
              },
              {
                q: "Can automatic or all-wheel-drive (AWD) cars be towed safely?",
                a: "Yes. Bouul dispatches flatbed tilt-tray trucks specifically for automatic and AWD vehicles. Flatbed loading keeps all four wheels off the tarmac, preventing gearbox and differential damage.",
              },
              {
                q: "What happens if I break down in an underground parking lot?",
                a: "Mention low headroom in your Zola dispatch request! Zola will match a roadside operator equipped with a low-profile wheel-lift unit or jumper pack to safely extract your car from tight parking structures.",
              },
              {
                q: "When is my payment released to the tow operator?",
                a: "Your payment is locked safely in Bouul escrow. It is only released after your vehicle is offloaded at your designated home or workshop address and you tap 'Job Satisfied'.",
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
              <Truck className="h-3.5 w-3.5" />
              <span>Fast Emergency Roadside Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Stranded or need roadside assistance now?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over highway tow truck chasers or hidden call-out fees again. Join thousands who use Bouul to book insured, escrow-protected tow operators in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Truck className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> UTASA Insured Operators
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
