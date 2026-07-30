"use client";
import { GenericActivityArticleModal } from "./articles/generic-activity-article-modal";
import { getArticleById } from "./articles/master-article-registry";


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
  Activity,
  Heart,
  Dumbbell,
  Smile,
  BookOpen,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "personal_training",
    tabTitle: "1-on-1 In-Home Personal Training",
    icon: Activity,
    badge: "REPPSA Accredited Trainers",
    title: "Reach your weight loss & strength goals in your living room or garden.",
    description:
      "Ditch intimidating, crowded gyms and expensive long-term contracts. Book certified personal trainers on Bouul who bring kettlebells, resistance bands, and custom workout plans straight to your home for private 1-on-1 coaching.",
    timeline: "45 - 60 Mins",
    costEstimate: "R300 – R550 / session",
    keyBenefits: [
      "Certified trainers who bring portable fitness equipment directly to you",
      "Customized workouts tailored to weight loss, muscle gain & joint safety",
      "Digital escrow protection—pay per session without multi-year contracts",
    ],
    ctaText: "Book Personal Trainer",
  },
  {
    id: "yoga_pilates",
    tabTitle: "Private Yoga & Core Pilates",
    icon: Heart,
    badge: "Mindful Movement & Posture",
    title: "Restore flexibility, core strength & posture alignment at home.",
    description:
      "Unwind from daily stress with private Vinyasa yoga flow or core-strengthening Mat Pilates. Experienced instructors adapt every pose to your current flexibility level and injury history in the quiet comfort of your home.",
    timeline: "60 Mins",
    costEstimate: "R350 – R600 / session",
    keyBenefits: [
      "Private 1-on-1 Vinyasa, Hatha, or restorative Mat Pilates sessions",
      "Correction of posture imbalances caused by long hours sitting at desks",
      "Mats & props supplied if requested",
    ],
    ctaText: "Book Private Yoga",
  },
  {
    id: "sports_massage",
    tabTitle: "Sports Recovery & Deep Tissue",
    icon: Sparkles,
    badge: "Licensed Massage Therapists",
    title: "Release muscle tightness, knots & post-workout soreness at home.",
    description:
      "Don't let muscle stiffness interrupt your active routine. Book qualified sports massage therapists on Bouul who set up a professional portable massage table in your home to deliver targeted deep tissue release.",
    timeline: "60 - 90 Mins",
    costEstimate: "R500 – R950",
    keyBenefits: [
      "Deep tissue, trigger point & sports recovery massage therapy",
      "Therapist brings portable massage table, fresh linens & organic oils",
      "Promotes faster athletic recovery and joint mobility",
    ],
    ctaText: "Book Recovery Massage",
  },
  {
    id: "nutrition",
    tabTitle: "Custom Nutrition & Meal Planning",
    icon: TrendingUp,
    badge: "Sustainable Macro Coaching",
    title: "Personalized nutrition coaching built around your real lifestyle.",
    description:
      "Fad diets don't work long-term. Work with certified sports nutritionists on Bouul who calculate your exact caloric needs, design easy-to-prep meal plans, and provide weekly accountability without cutting out your favorite foods.",
    timeline: "Weekly Check-Ins",
    costEstimate: "R450 – R850",
    keyBenefits: [
      "Calculated macro-nutrient targets for fat loss or lean muscle gain",
      "Grocery shopping lists & simple South African meal recipes",
      "Weekly progress check-ins via in-app photo & weight logging",
    ],
    ctaText: "Start Nutrition Plan",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "1-on-1 In-Home Personal Training Session",
    range: "R300 - R550 / session",
    time: "45 - 60 mins",
    desc: "Private 1-on-1 workout session at your home or local park with trainer bringing equipment.",
    includes: ["Equipment provided", "Warmup & cool down", "Custom exercise plan"],
  },
  {
    task: "Private Home Yoga or Mat Pilates Flow",
    range: "R350 - R600 / session",
    time: "60 mins",
    desc: "Guided 1-on-1 yoga flow or core-strengthening Pilates adapted to your flexibility level.",
    includes: ["Pose alignment", "Breathwork", "Mat & prop guidance"],
  },
  {
    task: "Deep Tissue & Sports Recovery Massage",
    range: "R500 - R950",
    time: "60 - 90 mins",
    desc: "Mobile deep tissue massage targeting stubborn muscle knots, tight IT bands, and lower back tension.",
    includes: ["Portable massage table", "Organic oils & linens", "Trigger point release"],
  },
  {
    task: "Personalized Macro & Meal Plan Coaching",
    range: "R450 - R850",
    time: "Weekly guidance",
    desc: "Custom caloric & macro calculation, weekly meal plan structure, and progress tracking.",
    includes: ["Macro calculation", "Grocery guide", "Weekly check-ins"],
  },
];

export default function FitnessPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const activeArticle = selectedArticleId ? getArticleById(selectedArticleId) : null;
  const [activeTab, setActiveTab] = useState("personal_training");
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
            <span>Verified Certified Personal Trainers Active Now • Avg. Confirmation: 5 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Transform your fitness. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  In the comfort of your home.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                From 1-on-1 home personal training and private yoga to deep tissue sports recovery massage. Book REPPSA-certified fitness professionals with no long-term contracts and digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <Activity className="h-5 w-5" />
                  <span>Book Certified Trainer</span>
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
                  <span>REPPSA Certified &amp; CPR Vetted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.98 Rating (4,200+ Sessions)</span>
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
                  <span className="font-display font-bold text-sm">Personal Trainer Matched</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  REPPSA Level 4 Certified
                </span>
              </div>

              {/* Trainer card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">FitForm Mobile Training</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Strength &amp; Mobility Coach • CPR Certified</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">420+ Client Sessions</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Session Time</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Tomorrow 06:30 AM
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R400.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Select goal (weight loss, strength) &amp; home equipment</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow holds payment per session—no gym contracts</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Complete workout session &amp; tap 'Job Satisfied' to release funds</span>
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
            <Activity className="h-3.5 w-3.5" />
            <span>Tailored Fitness Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact fitness goals.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your wellness goal below to see how our certified trainers and therapists deliver safe, personalized coaching.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Session Duration &amp; Rate</span>
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
                      <span className="font-semibold text-b-ink">REPPSA Accredited &amp; First Aid</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Contract Commitment</span>
                      <span className="font-semibold text-b-ink">Pay-Per-Session (Zero Monthly Fees)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Every fitness pro on Bouul is identity verified, CPR/First Aid certified, and background checked for home safety.</span>
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
                <span>Transparent Fitness Rates</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No 12-month gym traps. Pay as you train.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Traditional gym memberships lock you into costly annual contracts. Bouul standardizes transparent per-session pricing so you only pay for completed workouts.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Workout Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your trainer guides your full workout session. Payment is held safely in escrow and only released after you finish your session and tap &apos;Job Satisfied&apos;.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Fitness Service for Guide Pricing</span>
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
                    <span>Rates confirmed in-app before booking.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Match Trainer In App</span>
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
            {/* Left Column: Explaining Zola AI in the context of fitness */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI fitness assistant who plans workouts.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Tell Zola your fitness goals or injury history in plain language or voice notes—she analyzes your requirements and matches you with a certified home trainer.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Goal &amp; Posture Assessment</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of your home gym equipment, garden workout space, or target fitness goal. Zola&apos;s vision AI assesses space constraints and equipment, creating a brief for your personal trainer.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Fitness Memory &amp; Injury Profile</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your fitness history (e.g. lower back tension, past knee surgery, preferred workout days, weight goals). She automatically briefs your trainer before every session to avoid injury flare-ups.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Calendar &amp; Progress Logging</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola locks in your recurring weekly workout times, logs completed sessions, and tracks weight and strength improvements directly in the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Fitness Chat Mockup */}
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
                          Fitness &amp; Injury Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Home Fitness Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">I want to start a 3-day home workout routine! Here is a photo of my patio space and dumbbells:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">patio_workout_space.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: 15m² Outdoor Space + 5-15kg Dumbbells</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Fitness &amp; Injury Diagnostic</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your space: ample room for bodyweight HIIT and dumbbell strength training. From your **Fitness Memory profile**, I noted your past knee ligament strain.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **FitForm Mobile Training** (REPPSA Level 4, 420+ sessions) for Tuesday at 06:30 AM with low-impact knee-safe programming.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Confirmed Workout Draft
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">1-on-1 Low-Impact Strength &amp; Conditioning</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">FitForm Mobile • Tue 06:30 AM • Fixed R400/session</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">Zero gym contract policy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Fitness Trust ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built For Workout Safety</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why hiring a trainer on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Fitness requires safe, certified instruction. We engineered a platform enforcing REPPSA certification, CPR vetting, and digital escrow safety.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. REPPSA & CPR Vetted Trainers",
              subtitle: "Strict fitness certification",
              body: "Every personal trainer and instructor on Bouul must upload active REPPSA registration and current First Aid / CPR certificates. Unvetted trainers are strictly barred.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Pay per session without gym lock-ins",
              body: "Never get locked into 12-month debit orders. Your payment is held safely in Bouul escrow per session and only released after you complete your workout.",
            },
            {
              icon: Activity,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Injury-Safe Custom Workouts",
              subtitle: "Adapted to your physical history",
              body: "Our trainers adapt every exercise to your joint health and physical limitations, ensuring a safe workout that builds strength without risk of injury.",
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
                <span>Standard on all fitness sessions</span>
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
              <span>Proven 12-Week Transformation</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From 86kg to 74kg lean strength in 12 weeks.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a busy executive achieved a 12kg fat loss transformation with 3 home workouts per week on Bouul.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Assessment",
                time: "Week 1",
                title: "In-Home Fitness Assessment",
                desc: "Trainer conducts body composition assessment & sets up dumbbell patio station.",
                badge: "Goal Baseline",
              },
              {
                step: "02. Habit",
                time: "Weeks 2-4",
                title: "3x Weekly Home Sessions",
                desc: "Progressive strength workouts paired with simple macro meal coaching.",
                badge: "Escrow Per Session",
              },
              {
                step: "03. Progress",
                time: "Weeks 5-8",
                title: "Strength & Energy Surge",
                desc: "Body fat drops 6%, squat & pushup strength doubles with zero joint pain.",
                badge: "Progress Logged",
              },
              {
                step: "04. Result",
                time: "Week 12",
                title: "12kg Fat Loss Achieved",
                desc: "Client reaches 74kg target weight with sustainable eating habits established.",
                badge: "Goal Achieved",
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
                  <span>Typical Home Fitness Boost</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TRAINERS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional fitness standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every fitness pro on Bouul is vetted for safety and results. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
  {
    "id": "beauty_personal_trainers",
    "file": "personal_training",
    "tag": "Personal Training",
    "title": "1-on-1 Fitness & Weight Loss Coaching",
    "desc": "Customized strength training, body composition assessment, and high-intensity interval workouts."
  },
  {
    "id": "beauty_yoga_instructors",
    "file": "yoga_class",
    "tag": "Yoga & Mindfulness",
    "title": "Private Vinyasa & Hatha Yoga Sessions",
    "desc": "Breathwork guidance, posture alignment, flexibility enhancement, and stress-reduction meditation."
  },
  {
    "id": "beauty_yoga_instructors",
    "file": "pilates_class",
    "tag": "Pilates",
    "title": "Core Reformer & Mat Pilates Training",
    "desc": "Low-impact core strengthening, posture correction, and spinal stabilization exercises."
  },
  {
    "id": "health_physiotherapists",
    "file": "physiotherapy",
    "tag": "Sports Rehab",
    "title": "Sports Injury & Muscle Recovery",
    "desc": "Dry needling, myofascial release massage, and joint rehabilitation for athletes."
  },
  {
    "id": "health_dietitians",
    "file": "meditation_instruction",
    "tag": "Fitness Nutrition",
    "title": "Macros & Performance Meal Planning",
    "desc": "Custom calorie & macro tracking, contest prep nutrition, and lean muscle gain guides."
  },
  {
    "id": "health_dietitians",
    "file": "nutrition_consulting",
    "tag": "Body Assessment",
    "title": "Body Fat & Bio-Impedance Testing",
    "desc": "Scientific body composition analysis, metabolic rate testing, and goal milestone tracking."
  }
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

      {/* ── 8. COMPREHENSIVE FITNESS SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every fitness &amp; wellness service, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From 1-on-1 home personal training to private yoga, sports massage, and nutrition coaching.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "🏋️‍♂️ Personal Training & Strength",
              items: [
                "1-on-1 In-home personal training",
                "Weight loss & body fat reduction",
                "Functional strength & kettlebell training",
                "Post-injury rehabilitation & joint safety",
                "Senior mobility & balance conditioning",
                "Small group family park workouts",
              ],
            },
            {
              category: "🧘‍♀️ Yoga, Pilates & Mindful Movement",
              items: [
                "Private Vinyasa & Hatha yoga flow",
                "Restorative evening yoga & breathwork",
                "Mat Pilates core & pelvic floor alignment",
                "Desk posture correction stretching",
                "Pre-natal & post-natal gentle fitness",
                "Guided mindfulness & meditation",
              ],
            },
            {
              category: "💆‍♂️ Recovery, Massage & Nutrition",
              items: [
                "Mobile deep tissue sports recovery massage",
                "Trigger point & IT band release therapy",
                "Personalized macro-nutrient meal planning",
                "Grocery guide & South African recipes",
                "Weekly accountability & weight tracking",
                "Event preparation body conditioning",
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

      {/* ── 9. EXTENSIVE FITNESS FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking fitness pros.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to own home gym equipment before booking a trainer?",
                a: "No! Personal trainers on Bouul bring portable resistance bands, kettlebells, jump ropes, and mats directly to your home. If you have equipment, your trainer incorporates it.",
              },
              {
                q: "How are fitness trainers background checked on Bouul?",
                a: "Every fitness trainer undergoes identity verification, REPPSA registration validation, CPR/First Aid certification checks, and police clearance background verification.",
              },
              {
                q: "What if I have an existing lower back or knee injury?",
                a: "Zola AI captures your physical injury history during booking and briefs your certified trainer beforehand so your workout routine is 100% low-impact and safe.",
              },
              {
                q: "Am I locked into a monthly contract?",
                a: "No! Bouul operates strictly on a pay-per-session basis. You pay into digital escrow per workout, giving you complete freedom without 12-month gym debit orders.",
              },
              {
                q: "When is payment released to the trainer or massage therapist?",
                a: "Your payment is locked safely in Bouul escrow and is only released after your session is completed and you tap 'Job Satisfied'.",
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
              <Activity className="h-3.5 w-3.5" />
              <span>Verified Fitness Dispatch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to transform your health and strength?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over crowded gyms or multi-year debit order traps again. Join thousands who use Bouul to book certified, escrow-protected trainers in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <Activity className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> REPPSA Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-emerald-600" /> Escrow Protected
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {activeArticle && (
        <GenericActivityArticleModal
          article={activeArticle}
          onClose={() => setSelectedArticleId(null)}
        />
      )}

      <RedesignFooter />
    </main>
  );
}
