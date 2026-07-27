"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ResonanceEngine } from "@/components/resonance-engine";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  Brain,
  Code2,
  Terminal,
  BarChart3,
  Users,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  FileText,
  Building2,
  Lock,
  Layers,
  Bot,
  TrendingUp,
  Award,
  Sliders,
  DollarSign,
  Copy,
  Check,
} from "lucide-react";

const CODE_SNIPPETS = [
  {
    id: "auto_assign",
    title: "auto_assign_employees.ts",
    label: "Workload & Schedule Dispatch",
    code: `// Zola Business Pro — Autonomous Employee Dispatch Tool
import { autoAssignEmployees } from "supabase/functions/ai-agent/business_tools";

const result = await autoAssignEmployees.execute({
  booking_id: "bk_99812",
  criteria: "workload_balance_and_proximity",
  max_travel_radius_km: 25,
}, ctx);

// Output: Assigned Thabo M. (Workload score: 14/100, Proximity: 4.2km)`,
  },
  {
    id: "auto_publish",
    title: "article_publish.ts",
    label: "Veto-Window Article Publishing",
    code: `// Zola Business Pro — Autonomous Article Publishing Tool
const { data: staged } = await ctx.supabase.rpc("rpc_zb_stage_auto_action", {
  p_vendor_id: "vendor_aqua_plumbing",
  p_action: "publish_article",
  p_payload: { draft_id: "draft_geyser_safety_guide" },
  p_preview_summary: "Publish: How to Prevent Geyser Burst in Winter",
  p_window_seconds: 300, // 5-minute merchant veto window
  p_dry_run: false,
});

// Returns commit_at: "2026-07-27T12:35:00Z" (Auto-publishes if not vetoed)`,
  },
  {
    id: "credit_profile",
    title: "export_credit_profile.ts",
    label: "Merchant Financing & Credit Profile",
    code: `// Zola Business Pro — Instant Merchant Credit Profile Export
const response = await fetch("https://api.bouul.com/v1/zola-credit-profile-generator", {
  method: "POST",
  headers: { Authorization: \`Bearer \${token}\` },
  body: JSON.stringify({ vendor_id: "v_48102", include_revenue_history: true }),
});

// Output: Verified Zola Credit Score 780/800 • Pre-approved R150,000 Equipment Line`,
  },
];

const BUSINESS_SUPERPOWERS = [
  {
    icon: Users,
    title: "Workload Balancing & Auto-Dispatch",
    badge: "Smart Dispatch",
    desc: "Zola evaluates employee shift schedules, live GPS locations, and current daily job loads to automatically assign arriving bookings to the optimal technician without human delay.",
  },
  {
    icon: FileText,
    title: "Autonomous Marketing & Article Publishing",
    badge: "5-Min Veto Window",
    desc: "Zola writes long-form SEO guides and service case studies for your storefront, staging them with a configurable 5-minute veto window so you can review or let them publish on autopilot.",
  },
  {
    icon: BarChart3,
    title: "Demand Forecasting & Price Nudges",
    badge: "Dynamic Yield",
    desc: "Zola tracks regional search spikes (e.g. cold snaps triggering geyser calls) and alerts merchants to adjust staffing rosters or run targeted promotional packages.",
  },
  {
    icon: ShieldCheck,
    title: "Employee Scorecards & Performance Audits",
    badge: "Quality Control",
    desc: "Every completed job is audited for customer rating, arrival timeliness, and drop-cloth cleanliness, generating automated monthly scorecards for staff bonuses.",
  },
  {
    icon: DollarSign,
    title: "Instant Zola Credit Profile & Receipts",
    badge: "Merchant Finance",
    desc: "Export verified revenue velocity certificates and Zola Credit Profiles to secure bank financing for new service bakkies, tools, or staff expansion.",
  },
  {
    icon: CheckCircle2,
    title: "Automated 24h Customer Pre-Job Checklists",
    badge: "Zero No-Shows",
    desc: "Zola sends automated pre-job checklists 24 hours prior to arrival, confirming gate codes, property access, and main water/electricity shut-off locations.",
  },
];

export default function ZolaBusinessPage() {
  const [activeCode, setActiveCode] = useState(CODE_SNIPPETS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-forest via-b-forest-raised to-b-forest pt-32 pb-20 md:pt-40 md:pb-28 text-b-cream border-b border-b-forest-line">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-sun shadow-sm">
                <Briefcase className="h-4 w-4 text-b-sun" />
                <span>Zola Business Pro • The Merchant Operational Engine</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Supercharge your business with <br />
                <span className="bg-gradient-to-r from-b-sun via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  autonomous AI automations.
                </span>
              </h1>

              <p className="text-b-cream/80 text-lg md:text-xl max-w-xl leading-relaxed">
                From automated employee dispatch and 5-minute veto publishing to credit profile generation and demand forecasting, Zola runs backend operations so you can grow your service business.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 text-sm font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-xl flex items-center gap-2"
                >
                  <Briefcase className="h-5 w-5" />
                  <span>Upgrade to Zola Business Pro</span>
                </Link>
                <a
                  href="#code"
                  className="rounded-full border border-b-cream/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Code2 className="h-4 w-4 text-b-sun" />
                  <span>View Tool Code Execution</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Key Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <h3 className="font-display font-extrabold text-xl text-white border-b border-b-forest-line pb-4 flex items-center justify-between">
                  <span>Merchant ROI Metrics</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded">Pro Tier</span>
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-b-forest border border-b-forest-line flex items-center justify-between">
                    <div>
                      <div className="font-display text-3xl font-extrabold text-b-sun">85%</div>
                      <div className="text-xs text-b-cream/70">Admin Time Saved Daily</div>
                    </div>
                    <Users className="h-8 w-8 text-b-sun/60" />
                  </div>

                  <div className="p-4 rounded-2xl bg-b-forest border border-b-forest-line flex items-center justify-between">
                    <div>
                      <div className="font-display text-3xl font-extrabold text-emerald-400">0 Mins</div>
                      <div className="text-xs text-b-cream/70">Lead Response Delay</div>
                    </div>
                    <Zap className="h-8 w-8 text-emerald-400/60" />
                  </div>

                  <div className="p-4 rounded-2xl bg-b-forest border border-b-forest-line flex items-center justify-between">
                    <div>
                      <div className="font-display text-3xl font-extrabold text-white">100%</div>
                      <div className="text-xs text-b-cream/70">CoC &amp; Escrow Audit Guarantee</div>
                    </div>
                    <ShieldCheck className="h-8 w-8 text-white/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. FANCY CODE SNIPPETS & TOOL EXECUTION ── */}
      <section id="code" className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Code2 className="h-3.5 w-3.5" />
            <span>Developer &amp; Business Tool Spec</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Real TypeScript Business Tools Executed by Zola
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Inspect the exact backend tool functions executed in `supabase/functions/ai-agent/business_tools/` to automate merchant workflows.
          </p>
        </div>

        {/* Code Snippet Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide justify-center">
          {CODE_SNIPPETS.map((snip) => (
            <button
              key={snip.id}
              onClick={() => setActiveCode(snip)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCode.id === snip.id
                  ? "bg-b-ink text-white shadow-md scale-[1.02]"
                  : "bg-b-paper-raised text-b-ink-soft border border-b-line hover:border-b-ink/30"
              }`}
            >
              <Terminal className="h-3.5 w-3.5 text-emerald-500" />
              <span>{snip.title}</span>
            </button>
          ))}
        </div>

        {/* IDE Code Window */}
        <div className="rounded-3xl border border-b-forest-line bg-[#0D1B1E] p-6 md:p-8 text-emerald-400 font-mono text-xs shadow-2xl space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-b-forest-line/60 pb-4 text-b-cream/60">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
              <span className="font-bold text-white ml-2">{activeCode.title}</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-1.5 font-sans font-bold text-[11px]"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>

          <pre className="overflow-x-auto p-4 rounded-2xl bg-[#081214] border border-b-forest-line/40 text-emerald-300 leading-relaxed font-mono">
            <code>{activeCode.code}</code>
          </pre>

          <div className="flex items-center justify-between text-[11px] text-b-cream/60 font-sans border-t border-b-forest-line/60 pt-3">
            <span>Function: {activeCode.label}</span>
            <span className="text-emerald-400 font-bold">State: Verified Edge Function</span>
          </div>
        </div>
      </section>

      {/* ── 3. BUSINESS SUPERPOWERS GRID ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Zap className="h-3.5 w-3.5" />
            <span>Merchant Capabilities</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            6 Operational Superpowers for Service Vendors
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Zola handles backend tasks so you can focus on craftsmanship, customer satisfaction, and growing your team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_SUPERPOWERS.map((sp, idx) => {
            const Icon = sp.icon;
            return (
              <motion.div
                key={sp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {sp.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-b-ink mb-2">
                    {sp.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-b-ink-soft">
                    {sp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-b-line/60 flex items-center justify-between text-[11px] font-semibold text-emerald-600">
                  <span>Zola Business Pro</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 4. BOTTOM CTA ── */}
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
              <span>Automate Your Service Enterprise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight">
              Ready to upgrade to Zola Business Pro?
            </h2>

            <p className="text-b-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
              Join thousands of South African service vendors and contractors who use Zola Pro to automate job assignment, auto-publish guides, and scale operations.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <span>Upgrade to Zola Business Pro</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESONANCE ENGINE DISCOVERY SECTION ── */}
      <ResonanceEngine />

      <RedesignFooter />
    </main>
  );
}
