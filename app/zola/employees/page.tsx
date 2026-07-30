"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import Link from "next/link";
import {
  Users,
  Sparkles,
  Bot,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  FileText,
  Lock,
  Layers,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Send,
  UserCheck,
  Calendar,
  HelpCircle,
  Shield,
  Briefcase,
  Sliders,
  Check,
  AlertCircle,
  MessageSquare,
  Smartphone,
  Heart,
  Smile,
  Compass,
} from "lucide-react";

interface EmployeeFeature {
  id: string;
  badge: string;
  title: string;
  fullTitle?: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  description: string;
  highlights: string[];
  chatExample: {
    prompt: string;
    zolaResponse: string;
    ctaButton?: string;
  };
}

const EMPLOYEE_ZOLA_FEATURES: EmployeeFeature[] = [
  {
    id: "awareness",
    badge: "Zero-Effort Context",
    title: "Daily Context",
    fullTitle: "Always Knows Your Day",
    subtitle: "No setup required when you arrive on site",
    icon: Compass,
    accentColor: "emerald",
    description:
      "When you open Zola on the job, it already knows who you are, your employer, your assigned shoot or trade job, and your shift schedule. Never waste time explaining background details.",
    highlights: [
      "Instant shift & next-job briefing upon opening the app",
      "Recognizes open job invites awaiting your response",
      "Pre-loaded with your specific trade qualifications & role",
    ],
    chatExample: {
      prompt: "Good morning! What's on my plate today?",
      zolaResponse:
        "Good morning Lihle! You're at Clay Creations today. Your next job is a Wedding Photography shoot at 10:00 AM in Hyde Park. You also have 2 open job invites to review whenever you're ready.",
    },
  },
  {
    id: "execution",
    badge: "On-Site Assistant",
    title: "Job Briefs & SOPs",
    fullTitle: "Job Briefings & Quick Checklists",
    subtitle: "Client preferences & SOP checklists in seconds",
    icon: FileText,
    accentColor: "teal",
    description:
      "Ask Zola about any booking to instantly get customer instructions, cancellation rules, and step-by-step checklists so every shoot or service call goes smoothly.",
    highlights: [
      "Surfaces special client instructions & equipment checklists",
      "Explains job cancellation & grace-period policies on demand",
      "Protects customer privacy by showing initial & address only",
    ],
    chatExample: {
      prompt: "Walk me through the checklist for this afternoon's shoot.",
      zolaResponse:
        "Here's your checklist for Thandi M.'s Portrait Session: 1) Set up backdrop & softbox. 2) White balance check. 3) Client consult (5 mins). 4) Shooting (45 mins). 5) Review selects together.",
    },
  },
  {
    id: "reporting",
    badge: "Field Unblocker",
    title: "Delays & Dispatch",
    fullTitle: "Report Delays & Request Dispatch Support",
    subtitle: "Keep your manager updated without phone call tag",
    icon: AlertTriangle,
    accentColor: "amber",
    description:
      "Stuck in traffic or need extra help on site? Message Zola to notify your dispatcher or request job coverage immediately — no stressful back-and-forth required.",
    highlights: [
      "1-tap delay notifications that automatically alert your manager",
      "Instant request for dispatch backup if you can't make a slot",
      "Smart hand-offs to app completion screens when job photos are ready",
    ],
    chatExample: {
      prompt: "Traffic is backed up on the M1, I'll be 20 minutes late for the 10am.",
      zolaResponse:
        "Got it! I've notified your dispatcher and updated your vendor team with your 20-minute delay. Safe drive!",
    },
  },
  {
    id: "growth",
    badge: "Private Growth",
    title: "Ratings & Stats",
    fullTitle: "Track Your Ratings & Personal Progress",
    subtitle: "Private feedback focused strictly on your own success",
    icon: Heart,
    accentColor: "sky",
    description:
      "Check your completion rates, customer ratings, and average stage times in total privacy. Zola provides encouragement and tips with zero toxic coworker comparisons.",
    highlights: [
      "Strict privacy firewall — only you can view your personal stats",
      "Zero team rankings, percentiles, or competitive pressure",
      "Helpful insights on stage timings to help you earn top reviews",
    ],
    chatExample: {
      prompt: "How have my reviews and ratings been this month?",
      zolaResponse:
        "You're doing great! Over the last 30 days: 95% completion rate, 4.7★ average rating across 22 reviews, and an 88% on-time arrival rate. Keep up the awesome work!",
    },
  },
  {
    id: "hr",
    badge: "Self-Service HR",
    title: "Pay & Time-Off",
    fullTitle: "Earnings, Pay Records & Time-Off",
    subtitle: "Everyday workplace questions answered instantly",
    icon: DollarSign,
    accentColor: "purple",
    description:
      "Check your pay history, review overtime policies, or submit time-off requests for your manager's approval — directly through chat.",
    highlights: [
      "View past payment ledgers and status in seconds",
      "Submit structured time-off or shift-swap requests for manager review",
      "Instant access to company overtime and break policies",
    ],
    chatExample: {
      prompt: "I need next Friday off for a family wedding.",
      zolaResponse:
        "I've submitted your time-off request for 14 August (Reason: family wedding). It's pending your manager's approval — you can track or cancel it anytime in your app.",
      ctaButton: "Track Schedule Requests",
    },
  },
];

const WORKER_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "100% Private to You",
    desc: "Your pay records, performance stats, and time-off requests are strictly confidential. Zola never shares your numbers with peers.",
  },
  {
    icon: Smartphone,
    title: "Built for Mobile Workers",
    desc: "No sitting behind a desk. Designed for fast voice or text interactions while you're on the move between clients.",
  },
  {
    icon: Sparkles,
    title: "Zero Admin Stress",
    desc: "Let Zola handle updating dispatchers, organizing your shoot brief, and reminding you of key client preferences.",
  },
  {
    icon: UserCheck,
    title: "No Peer Competition",
    desc: "No toxic leaderboards or rankings. Zola focuses purely on helping you grow at your own pace.",
  },
];

export default function EmployeeZolaPage() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>("awareness");

  const currentFeature =
    EMPLOYEE_ZOLA_FEATURES.find((f) => f.id === activeFeatureId) || EMPLOYEE_ZOLA_FEATURES[0];

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-forest via-b-forest-raised to-b-forest pt-32 pb-20 md:pt-40 md:pb-28 text-b-cream border-b border-b-forest-line">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Hero */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 shadow-sm">
                <Bot className="h-4 w-4 animate-pulse text-emerald-400" />
                <span>Your On-The-Job AI Partner</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-b-cream leading-[1.08]">
                Meet Zola for <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                  Team Members & Field Pros
                </span>
              </h1>

              <p className="text-lg text-b-cream/80 leading-relaxed max-w-2xl font-normal">
                An AI companion in your pocket that makes your work day effortless. From checking shoot instructions and reporting traffic delays to requesting time-off — Zola has your back on every job.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#how-zola-helps"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-950/20"
                >
                  <span>See How Zola Helps You</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/employees"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-6 py-3.5 text-sm font-semibold text-b-cream hover:bg-white/15 transition-all"
                >
                  <span>Explore Mobile Workboard</span>
                  <ChevronRight className="h-4 w-4 text-b-cream/60" />
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 rounded-2xl border border-white/10 bg-b-forest-raised/90 p-6 backdrop-blur-xl shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Always On Duty
                  </span>
                </div>
                <span className="text-xs text-b-cream/60">Field Mobile Experience</span>
              </div>

              {/* Chat snippet preview */}
              <div className="space-y-3 text-xs">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-b-cream/90">
                  <p className="font-semibold text-emerald-300 text-[11px] mb-1">
                    Morning Briefing
                  </p>
                  <p>
                    "Good morning Lihle! You have a 10am shoot at Hyde Park. Client requested golden-hour lighting. 2 open job invites awaiting your response."
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-emerald-200">
                  <p className="font-semibold text-emerald-400 text-[11px] mb-1">
                    Instant Delay Alert
                  </p>
                  <p>
                    "Stuck in traffic? Tell Zola and we'll instantly let your manager and dispatch team know — stress free."
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-amber-500/15 border border-amber-500/30 p-3 text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Confidential:</strong> Your earnings, performance stats, and requests are strictly private to you.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURE HIGHLIGHTS (MARKETING TONE) ── */}
      <section id="how-zola-helps" className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
            Work Made Simpler
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
            Everything you need on the job, right when you ask.
          </h2>
          <p className="text-b-ink-muted text-base">
            No complicated apps or paperwork. Talk to Zola like a teammate to get instant answers, report status, or manage your workday.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none justify-start lg:justify-center">
          {EMPLOYEE_ZOLA_FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isSelected = feature.id === activeFeatureId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeatureId(feature.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-b-forest text-b-cream border-b-forest shadow-md"
                    : "bg-b-paper-raised text-b-ink-muted border-b-line hover:border-b-ink/30 hover:text-b-ink"
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? "text-emerald-400" : "text-b-ink-muted"}`} />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Feature Card */}
        <div className="rounded-2xl border border-b-line bg-b-paper-raised p-6 md:p-8 shadow-xl space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Description & Highlights */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                {currentFeature.badge}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink leading-tight">
                {currentFeature.fullTitle}
              </h3>
              <p className="text-b-ink-muted text-base leading-relaxed">
                {currentFeature.description}
              </p>

              <ul className="space-y-3 pt-2">
                {currentFeature.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-b-ink font-medium">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Interactive Chat Example */}
            <div className="lg:col-span-6 rounded-2xl border border-b-forest-line bg-b-forest p-6 text-b-cream space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold tracking-wide">Live Conversation Example</span>
                </div>
                <span className="text-[10px] font-mono text-b-cream/50">Bouul Field App</span>
              </div>

              <div className="space-y-4 text-sm font-sans">
                {/* Employee Prompt */}
                <div className="flex items-start justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-emerald-600/30 border border-emerald-500/40 px-4 py-3 max-w-[90%] text-emerald-100 shadow-sm">
                    <p className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">You</p>
                    <p className="text-sm font-medium">{currentFeature.chatExample.prompt}</p>
                  </div>
                </div>

                {/* Zola Response */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-xs">
                    Z
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white/10 border border-white/15 px-4 py-3.5 max-w-[90%] text-b-cream shadow-sm space-y-2">
                    <p className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">Zola Assistant</p>
                    <p className="leading-relaxed text-sm">{currentFeature.chatExample.zolaResponse}</p>

                    {currentFeature.chatExample.ctaButton && (
                      <div className="pt-2">
                        <button className="inline-flex items-center gap-2 bg-emerald-500 text-b-forest px-3.5 py-1.5 rounded-lg font-bold text-xs hover:bg-emerald-400 transition-all shadow-sm">
                          <span>{currentFeature.chatExample.ctaButton}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WORKER BENEFITS GRID ── */}
      <section className="py-16 bg-b-paper-raised border-y border-b-line px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Designed For You
            </div>
            <h2 className="font-display text-3xl font-extrabold text-b-ink">
              Why team members love working with Zola
            </h2>
            <p className="text-b-ink-muted text-sm">
              We built Zola to make your daily work less stressful, protecting your privacy while removing administrative headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKER_BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-b-line bg-b-paper p-6 space-y-3 hover:border-emerald-500/40 hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-b-ink">{b.title}</h3>
                  <p className="text-xs text-b-ink-muted leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. BOTTOM CALL TO ACTION ── */}
      <section className="py-16 bg-b-forest text-b-cream border-t border-b-forest-line px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
            Ready to experience effortless field work?
          </h2>
          <p className="text-b-cream/80 text-base max-w-2xl mx-auto">
            Experience how Bouul's mobile workboard and Zola AI keep you informed, on-time, and supported on every assignment.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/employees"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-lg"
            >
              <span>Try the Employee Workboard Simulator</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/zola/business"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-6 py-3.5 text-sm font-semibold text-b-cream hover:bg-white/20 transition-all"
            >
              <span>Zola for Business Owners</span>
              <ChevronRight className="h-4 w-4 text-b-cream/60" />
            </Link>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
