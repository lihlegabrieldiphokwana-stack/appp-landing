"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  Camera,
  Home,
  Briefcase,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Code2,
  Terminal,
  Zap,
  BookOpen,
  Lock,
  Globe,
  Star,
  Layers,
} from "lucide-react";

const USE_CASE_CATEGORIES = [
  {
    id: "homeowners",
    title: "Homeowners & Landlords",
    subtitle: "Emergency Repairs, Property Memory & Escrow Safety",
    icon: Home,
    badge: "Consumer & Landlord",
    cases: [
      {
        title: "2:00 AM Emergency Geyser Leak",
        scenario: "Water running down the kitchen wall at night.",
        howZolaSolves: "Zola detects high urgency, guides the user to the main stopcock via Home Memory, and dispatches the nearest PIRB plumber in 25 mins with locked escrow.",
        codeSnippet: `Zola.executeIntent("geyser_burst_emergency", {
  location: "Fourways, Sandton",
  homeMemory: "Stopcock by front boundary wall",
  escrowStatus: "Locked (R1,200)",
});`,
      },
      {
        title: "Multi-Property Landlord Approval",
        scenario: "Tenant reports broken shower mixer; landlord needs to review.",
        howZolaSolves: "Zola generates an itemized quote card with a 1-tap approval link. Landlord approves remotely and payment is held safely until tenant signs off.",
        codeSnippet: `Zola.generateApprovalLink({
  tenantId: "t_481",
  service: "Shower Mixer Replacement",
  quoteTotal: "R850.00",
});`,
      },
    ],
  },
  {
    id: "contractors",
    title: "Contractors & Trade Pros",
    subtitle: "Zero Admin, Pre-Packed Trip #1 & Auto-Publishing",
    icon: Briefcase,
    badge: "Trade Merchants",
    cases: [
      {
        title: "Photo Pre-Briefing & Trip #1 Hardware",
        scenario: "Plumber gets dispatched without knowing pipe dimensions.",
        howZolaSolves: "Zola's multimodal vision model inspects the customer's photo, identifies the 15mm copper compression joint, and pre-briefs the pro to carry parts in their van.",
        codeSnippet: `Zola.analyzePhoto("under_sink_leak.jpg")
-> Output: "15mm SABS Compression Valve Required"
-> Pre-Packed Status: Confirmed in Van`,
      },
      {
        title: "5-Minute Veto Marketing Article Publishing",
        scenario: "Contractor has zero time to write blog posts or SEO guides.",
        howZolaSolves: "Zola writes long-form service guides and stages them with a 5-minute veto window. If un-vetoed, it auto-publishes to the storefront.",
        codeSnippet: `rpc_zb_stage_auto_action({
  p_action: "publish_article",
  p_window_seconds: 300,
  p_dry_run: false,
});`,
      },
    ],
  },
  {
    id: "enterprises",
    title: "Enterprise & Franchises",
    subtitle: "Workload Balancing, Employee Scorecards & Financing",
    icon: Building2,
    badge: "Enterprise Ops",
    cases: [
      {
        title: "Automated Workload & Proximity Dispatch",
        scenario: "Managing 30+ field technicians across major metro areas.",
        howZolaSolves: "Zola's scheduling engine balances daily job counts and travel radiuses to auto-assign incoming jobs without phone dispatcher bottlenecks.",
        codeSnippet: `autoAssignEmployees.execute({
  criteria: "workload_balance_and_proximity",
  max_travel_radius_km: 25,
});`,
      },
      {
        title: "Instant Zola Credit Profile Export",
        scenario: "Applying for bank financing to purchase 5 new service bakkies.",
        howZolaSolves: "Zola generates a verified Credit Profile certificate based on historical booking velocity and customer ratings for bank approval.",
        codeSnippet: `fetch("https://api.bouul.com/v1/zola-credit-profile-generator")
-> Verified Score: 780/800
-> Pre-approved: R150,000 Credit Line`,
      },
    ],
  },
];

export default function ZolaUseCasesPage() {
  const [activeCategory, setActiveCategory] = useState(USE_CASE_CATEGORIES[0]);

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-forest via-b-forest-raised to-b-forest pt-32 pb-20 md:pt-40 md:pb-28 text-b-cream border-b border-b-forest-line">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-b-sun/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-sun shadow-sm">
              <BookOpen className="h-4 w-4 text-b-sun" />
              <span>Zola AI • Real-World Use Cases &amp; Workflows</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">
              How South Africa books and operates with <br />
              <span className="bg-gradient-to-r from-b-sun via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                Zola Autonomous AI.
              </span>
            </h1>

            <p className="text-b-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore real-world use cases for homeowners, trade contractors, property managers, and service enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. USE CASE CATEGORY SELECTOR ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {USE_CASE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`p-6 rounded-3xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-emerald-600 bg-b-paper-raised shadow-xl scale-[1.02]"
                    : "border-b-line bg-b-paper hover:border-b-ink/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-b-ink">{cat.title}</h3>
                  <p className="text-xs text-b-ink-soft mt-1">{cat.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Use Cases Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {activeCategory.cases.map((uc, idx) => (
              <div
                key={uc.title}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-6 shadow-md grid gap-8 lg:grid-cols-12 items-start"
              >
                {/* Left Column: Problem & Solution */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/20">
                      Use Case #{idx + 1}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-b-ink">
                      {uc.title}
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-b-paper border border-b-line text-xs space-y-1">
                    <span className="font-bold text-b-ink block">Scenario Context:</span>
                    <p className="text-b-ink-soft leading-relaxed">&quot;{uc.scenario}&quot;</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
                    <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> How Zola Solves It:
                    </span>
                    <p className="text-emerald-900 leading-relaxed font-medium">{uc.howZolaSolves}</p>
                  </div>
                </div>

                {/* Right Column: Code Execution Snippet */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-b-forest-line bg-[#0D1B1E] p-5 text-emerald-400 font-mono text-xs shadow-xl space-y-3">
                    <div className="flex items-center justify-between border-b border-b-forest-line/60 pb-2 text-[10px] text-b-cream/60">
                      <span className="font-bold text-white flex items-center gap-1">
                        <Terminal className="h-3.5 w-3.5 text-b-sun" /> Zola Tool Execution
                      </span>
                      <span>TypeScript Edge API</span>
                    </div>

                    <pre className="overflow-x-auto p-3 rounded-xl bg-[#081214] text-emerald-300 font-mono text-[11px] leading-relaxed">
                      <code>{uc.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── 3. BOTTOM CTA ── */}
      <section className="py-24 bg-b-paper-deep border-t border-b-line relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Autonomous AI Workflows</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight">
              Ready to experience Zola in your business or home?
            </h2>

            <p className="text-b-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
              Download the Bouul app today to chat with Zola AI, automate merchant operations, and lock payments safely in digital escrow.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <span>Download Bouul App</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
