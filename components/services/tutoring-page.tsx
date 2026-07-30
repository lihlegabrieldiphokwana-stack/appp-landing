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
  BookOpen,
  GraduationCap,
  Target,
  Globe,
  Award as AwardIcon,
} from "lucide-react";

// Use-cases data for interactive exploration
const SITUATIONS = [
  {
    id: "matric_prep",
    tabTitle: "Matric Exam & Past Paper Prep",
    icon: GraduationCap,
    badge: "Matric Distinction Specialists",
    title: "Boost Grade 12 Math, Physics & Accounting marks before final exams.",
    description:
      "Don't let difficult finals limit university admission options. Book verified subject specialist tutors on Bouul who drill past papers, clarify complex syllabus concepts, and share proven exam techniques for CAPS and IEB matriculation exams.",
    timeline: "Weekly 1-on-1 Sessions",
    costEstimate: "R320 – R520 / hr",
    keyBenefits: [
      "Targeted CAPS & IEB past paper memorandum drilling",
      "Specialists in Core Math, Physical Sciences, Accounting & Life Sciences",
      "Escrow protection—funds released only after each completed lesson",
    ],
    ctaText: "Book Matric Tutor",
  },
  {
    id: "ieb_caps",
    tabTitle: "High School CAPS & IEB Support",
    icon: BookOpen,
    badge: "Grades 8 - 11 Subject Boost",
    title: "Build confidence in Mathematics, Sciences & Languages early.",
    description:
      "Prevent knowledge gaps before Grade 12. Connect your learner with background-checked university graduates and qualified teachers who simplify challenging topics, review weekly homework, and prepare for term tests.",
    timeline: "Flexible Weekly Schedule",
    costEstimate: "R250 – R420 / hr",
    keyBenefits: [
      "In-person home visits or interactive online 1-on-1 sessions",
      "Customized lesson plans aligned to school term syllabus",
      "Detailed lesson summary reports sent to parents after every session",
    ],
    ctaText: "Book Subject Specialist",
  },
  {
    id: "cambridge",
    tabTitle: "Cambridge IGCSE & A-Levels",
    icon: Globe,
    badge: "International Curriculum",
    title: "Rigorous IGCSE, AS & A-Level subject mastery for university entry.",
    description:
      "Cambridge curricula require deep conceptual synthesis rather than simple memorization. Book experienced Cambridge tutors on Bouul who guide students through past papers, essay structure, and international exam standards.",
    timeline: "Subject-Specific Mastery",
    costEstimate: "R380 – R650 / hr",
    keyBenefits: [
      "Cambridge IGCSE, AS-Level & A-Level accredited tutors",
      "Specialized support for Math, Physics, Chemistry & Economics",
      "Direct guidance for UK, US & international university applications",
    ],
    ctaText: "Book Cambridge Tutor",
  },
  {
    id: "primary",
    tabTitle: "Primary School & Homework Help",
    icon: Target,
    badge: "Foundational Learning",
    title: "Build reading fluency, foundational math & positive study habits.",
    description:
      "Transform homework time from a daily struggle into an encouraging routine. Patient primary school tutors on Bouul assist Grade 1 to 7 learners with reading, foundational numeracy, and project research.",
    timeline: "After-School Sessions",
    costEstimate: "R200 – R350 / hr",
    keyBenefits: [
      "Patient, encouraging tutors trained in foundational learning",
      "Assistance with daily homework, spelling & reading comprehension",
      "Builds self-confidence and independent study habits",
    ],
    ctaText: "Book Primary School Tutor",
  },
];

// Price Estimator Guide Data
const PRICE_ESTIMATES = [
  {
    task: "High School CAPS / IEB Subject Session",
    range: "R250 - R420 / hr",
    time: "1 - 2 hours per session",
    desc: "1-on-1 subject tutoring for Core Math, Physics, Accounting, or Languages.",
    includes: ["Syllabus explanation", "Homework review", "Parent progress report"],
  },
  {
    task: "Matric Past Paper Intensive Revision",
    range: "R320 - R520 / hr",
    time: "1.5 - 2 hours per session",
    desc: "Targeted Grade 12 past paper drilling, exam memorandum strategies, and time management.",
    includes: ["Past paper practice", "Memo breakdown", "Exam strategy drilling"],
  },
  {
    task: "Cambridge IGCSE / A-Level Specialist",
    range: "R380 - R650 / hr",
    time: "1 - 2 hours per session",
    desc: "International curriculum tutoring focusing on higher-order analytical questions and paper techniques.",
    includes: ["Cambridge past papers", "Essay structure", "Conceptual depth"],
  },
  {
    task: "Primary School Homework & Reading Support",
    range: "R200 - R350 / hr",
    time: "1 - 1.5 hours per session",
    desc: "After-school assistance with daily homework assignments, reading comprehension, and math fundamentals.",
    includes: ["Homework completion", "Foundational math", "Reading practice"],
  },
];

export default function TutoringPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const activeArticle = selectedArticleId ? getArticleById(selectedArticleId) : null;
  const [activeTab, setActiveTab] = useState("matric_prep");
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
            <span>Verified Subject Specialist Tutors Available Now • Avg. Match: 6 Mins</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Top academic results. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                  CAPS, IEB &amp; Cambridge.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Unlock your learner&apos;s full potential. Book background-checked subject specialist tutors for in-person home visits or 1-on-1 online sessions with digital escrow safety.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 font-bold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] hover:bg-emerald-400 flex items-center gap-2"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Find a Certified Tutor</span>
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
                  <span>ID &amp; Matric Distinction Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  <span>Digital Escrow Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.98 Rating (3,500+ Lessons)</span>
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
                  <span className="font-display font-bold text-sm">Subject Tutor Matched</span>
                </div>
                <span className="text-xs font-semibold text-b-green-deep bg-b-green/10 px-2.5 py-1 rounded-full">
                  B.Sc Eng (Wits) • 6 Distinctions
                </span>
              </div>

              {/* Tutor card mock */}
              <div className="rounded-2xl border border-b-green/30 bg-gradient-to-br from-b-green/10 via-transparent to-transparent p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white text-lg shadow-md">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-b-ink">Sindi Academic Tutoring</h4>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <p className="text-xs text-b-ink-soft">Core Math &amp; Physics Specialist • IEB/CAPS</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span>4.99</span>
                    </div>
                    <span className="text-[10px] text-b-ink-faint">180+ Student Distinctions</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Next Lesson</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Thursday 16:00 PM
                    </span>
                  </div>
                  <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                    <span className="text-[10px] text-b-ink-faint block">Escrow Protected</span>
                    <span className="font-semibold text-b-ink">R350.00 Held</span>
                  </div>
                </div>
              </div>

              {/* Step indicator */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    1
                  </div>
                  <span className="text-b-ink font-medium">Select grade, curriculum (CAPS/IEB) &amp; weak topics</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    2
                  </div>
                  <span className="text-b-ink font-medium">Digital escrow holds payment safely per lesson</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-b-line text-b-ink-faint font-bold text-[10px]">
                    3
                  </div>
                  <span className="text-b-ink-faint">Receive lesson summary report before funds release</span>
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
            <BookOpen className="h-3.5 w-3.5" />
            <span>Tailored Academic Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            How Bouul solves your exact learning goals.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Select your curriculum or learning stage below to see how our verified tutors boost marks and build confidence.
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
                    <span className="text-xs font-semibold text-b-ink-faint uppercase tracking-wider">Estimated Hourly Rate</span>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-extrabold text-b-ink">{currentSituation.costEstimate}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {currentSituation.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-center justify-between">
                      <span>Tutor Vetting</span>
                      <span className="font-semibold text-b-ink">Degree &amp; Matric Verification</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Protection</span>
                      <span className="font-semibold text-emerald-600">100% Escrow Shield</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Format</span>
                      <span className="font-semibold text-b-ink">In-Person Home or Online 1-on-1</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Every tutor on Bouul undergoes identity checks, academic transcript validation, and police clearance checks for child safety.</span>
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
                <span>Transparent Hourly Rates</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink leading-tight">
                No long contracts. Clear hourly tutoring rates.
              </h2>

              <p className="text-base leading-relaxed text-b-ink-soft">
                Know exactly what your child&apos;s tutoring sessions cost before starting. Bouul standardizes hourly rates based on subject complexity and tutor qualifications.
              </p>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-b-ink">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>The Bouul Academic Guarantee</span>
                </div>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Your tutor submits a brief lesson summary report in-app after every session. Payment for each lesson is released from escrow only after parent sign-off.
                </p>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-b-line pb-4">
                  <span className="font-display font-bold text-lg text-b-ink">Select Academic Level for Guide Pricing</span>
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
                      Lesson Time: {currentEstimate.time}
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
                    <span>Rates confirmed in-app before lesson starts.</span>
                  </div>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-2.5 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <span>Match Tutor In App</span>
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
            {/* Left Column: Explaining Zola AI in the context of tutoring */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-b-sun">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zone of Local Assistance</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meet Zola. Your AI academic assistant who analyzes past papers.
              </h2>
              
              <p className="text-lg text-b-cream/80 leading-relaxed">
                Struggling with calculus or physical science concepts? Tell Zola your weak topics in plain language or voice notes—she analyzes syllabus requirements and matches you with a verified distinction tutor.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Visual Past Paper &amp; Mark Breakdown Analysis</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Snap a photo of a difficult past paper question or term report card. Zola&apos;s vision AI analyzes the topic breakdown (e.g. Euclidean Geometry vs Trigonometry), creating a diagnostic briefing for your tutor.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-b-sun/20 text-b-sun">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Student Learning Profile Memory</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola remembers your learner&apos;s curriculum (IEB, CAPS, Cambridge), grade level, upcoming exam dates, and historical test scores. She briefings tutors before every lesson so time is never wasted reviewing known topics.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-b-forest-raised border border-b-forest-line flex items-start gap-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Instant Schedule &amp; Lesson Tracking</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-cream/70">
                      Zola schedules weekly sessions seamlessly around sports and extra-murals, delivering lesson progress reports directly to parents after every session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Zola Tutoring Chat Mockup */}
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
                          Syllabus &amp; Memory Active
                        </span>
                      </div>
                      <p className="text-[11px] text-b-cream/60">Zone of Local Assistance • Academic Matching</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User message with image upload */}
                  <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white shadow-sm">
                    <p className="mb-2">My son is struggling with IEB Grade 12 Calculus. Here is his recent test paper:</p>
                    <div className="rounded-xl bg-b-ink/40 p-2.5 border border-white/10 flex items-center gap-3">
                      <div className="h-10 w-12 rounded-lg bg-emerald-800/60 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">calculus_test_paper.jpg</p>
                        <p className="text-[10px] text-emerald-200">Vision Analysis: IEB Math P1 Optimization Fault</p>
                      </div>
                    </div>
                  </div>

                  {/* Zola response */}
                  <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-b-forest border border-b-forest-line px-4 py-3.5 text-sm text-b-cream shadow-sm space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-b-sun">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zola Academic Diagnostic Check</span>
                    </div>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I analysed your test paper: the error is in 3D calculus optimization questions. From your **Student Memory profile**, final IEB exams start in 7 weeks.
                    </p>
                    <p className="text-xs leading-relaxed text-b-cream/90">
                      I matched **Sindi Academic Tutoring** (B.Sc Eng Wits, 180+ matric distinctions) available Thursday at 16:00 PM for in-person or online 1-on-1.
                    </p>
                  </div>

                  {/* Booking draft card */}
                  <div className="w-fit max-w-[92%] rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-b-forest p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-price text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CalendarCheck className="h-3.5 w-3.5" /> Confirmed Lesson Draft
                      </span>
                      <span className="text-[10px] font-bold text-b-cream/60 bg-white/5 px-2 py-0.5 rounded">
                        Escrow Protected
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Grade 12 IEB Calculus Past Paper Intensive</p>
                      <p className="text-xs text-b-cream/70 mt-0.5">Sindi Academic Tutoring • Thu 16:00 PM • Fixed R350/hr</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-b-forest font-extrabold px-5 py-2 text-xs transition-transform hover:scale-105 cursor-pointer shadow-md">
                        Confirm &amp; Lock Escrow
                      </span>
                      <span className="text-[11px] text-b-cream/50">Lesson progress guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEEP-DIVE FEATURE SPOTLIGHT: The Architecture of Academic Trust ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Built For Academic Excellence</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Why hiring a tutor on Bouul is fundamentally superior.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Your child&apos;s future depends on quality instruction. We engineered a platform enforcing academic transcript verification, digital escrow, and parent progress reporting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "bg-blue-500/10 text-blue-600",
              title: "1. Verified Degrees & Matric Distinctions",
              subtitle: "Strict academic vetting",
              body: "Every tutor on Bouul must upload verified university transcripts and matric distinction certificates. Unvetted candidates are strictly barred.",
            },
            {
              icon: Lock,
              color: "bg-amber-500/10 text-amber-600",
              title: "2. The Digital Escrow Shield",
              subtitle: "Pay per lesson without upfront contracts",
              body: "Never pay huge upfront term fees to agencies. Your payment is held safely in escrow per lesson and is only released after parent sign-off.",
            },
            {
              icon: AwardIcon,
              color: "bg-emerald-500/10 text-emerald-600",
              title: "3. Parent Progress Reports",
              subtitle: "Full visibility on student marks",
              body: "Receive a digital progress report after every session detailing covered topics, student strengths, weak areas, and assigned revision homework.",
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
                <span>Standard on all tutoring sessions</span>
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
              <span>Proven 6-Week Mark Jump</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              From 54% to 81% distinction in Grade 12 Math.
            </h2>
            <p className="mt-4 text-lg text-b-cream/80">
              See how a Grade 12 IEB learner transformed their Core Math results through targeted past paper drilling on Bouul.
            </p>
          </div>

          {/* Timeline Steps Grid */}
          <div className="grid gap-6 md:grid-cols-4 relative">
            {[
              {
                step: "01. Diagnostic",
                time: "Week 1",
                title: "54% Mark Baseline",
                desc: "Parent uploads Grade 12 Term 1 test. Zola identifies calculus & trig paper weaknesses.",
                badge: "Diagnostic Complete",
              },
              {
                step: "02. Matching",
                time: "Week 2",
                title: "Distinction Tutor Matched",
                desc: "Sindi Academic Tutoring begins weekly 1.5-hour 1-on-1 past paper memo drilling.",
                badge: "Weekly Escrow",
              },
              {
                step: "03. Drilling",
                time: "Weeks 3-5",
                title: "Past Paper Intensive",
                desc: "Drilled 8 past IEB papers, mastering 3D trigonometry and calculus optimization.",
                badge: "Memo Mastered",
              },
              {
                step: "04. Result",
                time: "Week 6",
                title: "81% Final Distinction",
                desc: "Prelim result jumps to 81%. Student secures engineering university placement.",
                badge: "Distinction Achieved",
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
                  <span>Typical Grade 12 Boost</span>
                  <span>Escrow Protected Timeline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TUTORS IN ACTION — VERIFIED FIELD IMAGERY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Verified Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Professional academic standards, showcased in-app.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Every tutor on Bouul is vetted for subject mastery and communication skills. Here is a glimpse of the professional standards and capabilities available when you book through the app.
          </p>
        </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
  {
    "id": "edu_math_tutors",
    "file": "tutoring_service",
    "tag": "Mathematics",
    "title": "Grade 8-12 Pure Maths & Technical Maths",
    "desc": "Algebra, trigonometry, calculus, and past exam paper step-by-step revision."
  },
  {
    "id": "edu_science_tutors",
    "file": "tutoring_service",
    "tag": "Physical Science",
    "title": "Physics & Chemistry Exam Preparation",
    "desc": "Newtonian mechanics, stoichiometry, organic chemistry, and lab report guidance."
  },
  {
    "id": "edu_english_tutors",
    "file": "tutoring_service",
    "tag": "Languages",
    "title": "English & Afrikaans First Additional Language",
    "desc": "Essay writing structure, poetry analysis, literature comprehension, and oral prep."
  },
  {
    "id": "edu_computer_lessons",
    "file": "tutoring_service",
    "tag": "Coding & IT",
    "title": "Python, Java & CAT Computer Lessons",
    "desc": "Introductory programming logic, database SQL queries, and software project coaching."
  },
  {
    "id": "edu_homework_help",
    "file": "tutoring_service",
    "tag": "Primary School",
    "title": "Foundation Phase Homework Assistance",
    "desc": "Patient reading support, basic arithmetic, and structured daily study habits."
  },
  {
    "id": "edu_exam_prep",
    "file": "tutoring_service",
    "tag": "NBT & University",
    "title": "NBT Test Prep & Tertiary Academics",
    "desc": "National Benchmark Test MAT/AQL prep and university-level statistics coaching."
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

      {/* ── 8. COMPREHENSIVE TUTORING SERVICES DIRECTORY ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Every academic subject, covered and verified.
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            From Grade 12 past paper prep to primary school homework support across CAPS, IEB, and Cambridge.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              category: "📐 STEM Subjects (Grades 8 - 12)",
              items: [
                "Core Mathematics & Mathematical Literacy",
                "Physical Sciences (Physics & Chemistry)",
                "Life Sciences (Biology & Genetics)",
                "Information Technology (Java & Delphi)",
                "Engineering Graphics & Design (EGD)",
                "Computer Applications Technology (CAT)",
              ],
            },
            {
              category: "📚 Commerce & Humanities",
              items: [
                "Financial Accounting & Bookkeeping",
                "Business Studies & Economics",
                "English Home & First Additional Language",
                "Afrikaans & isiZulu Language Prep",
                "Geography & Mapwork Skills",
                "History & Analytical Essay Writing",
              ],
            },
            {
              category: "🌍 Cambridge & Primary Foundations",
              items: [
                "Cambridge IGCSE, AS & A-Level Mathematics",
                "Cambridge Physics, Chemistry & Economics",
                "Primary School Grade 1-7 Reading Fluency",
                "Primary Math & Foundational Numeracy",
                "After-School Homework & Study Skills",
                "NBT Exam Preparation Workshops",
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

      {/* ── 9. EXTENSIVE TUTORING FAQ ── */}
      <section className="bg-b-paper-deep py-24 px-5 border-t border-b-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink">
              Frequently asked questions about booking tutors.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How are tutors background checked on Bouul?",
                a: "Every tutor undergoes identity verification, university transcript validation, matric distinction verification, and a criminal background check before being activated.",
              },
              {
                q: "Can we choose between in-person home visits and online sessions?",
                a: "Yes! You can filter for tutors available for in-person home visits in your suburb, or choose online 1-on-1 interactive video sessions depending on your preference.",
              },
              {
                q: "How does the tutor know what curriculum my child follows?",
                a: "Zola AI captures your child's curriculum (CAPS, IEB, or Cambridge), grade level, and textbook syllabus in the booking brief so your tutor prepares aligned past papers beforehand.",
              },
              {
                q: "Do I have to sign a long-term monthly contract?",
                a: "No! Bouul operates on a transparent pay-per-lesson basis. You pay per lesson into digital escrow, giving you complete flexibility to pause or increase sessions before exams.",
              },
              {
                q: "When is payment released to the tutor?",
                a: "Your payment is held safely in Bouul escrow per lesson and is only released after the lesson is completed and you receive your tutor's progress summary report.",
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
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Verified Academic Tutoring</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
              Ready to boost your child&apos;s marks and confidence?
            </h2>

            <p className="max-w-xl mx-auto text-lg text-b-ink-soft leading-relaxed">
              Never stress over unverified tutors or long-term contract lock-ins again. Join parents who use Bouul to book distinction-verified tutors in seconds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Download Bouul Now</span>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 text-xs font-semibold text-b-ink-faint border-t border-b-line/60 max-w-md mx-auto">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Transcript Verified
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
