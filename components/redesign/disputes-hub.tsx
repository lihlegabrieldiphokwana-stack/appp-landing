"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  Camera,
  FileText,
  Users,
  CheckCircle2,
  Lock,
  Clock,
  HelpCircle,
  Gavel,
  Check,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

interface DisputeScenario {
  id: string;
  title: string;
  trade: string;
  escrowAmount: string;
  clientClaim: string;
  proDefense: string;
  evidence: {
    clientPhoto: string;
    proDocument: string;
    zolaLog: string;
  };
  juryBreakdown: {
    proPayout: number;
    clientRefund: number;
    verdictTitle: string;
    rationale: string;
    inspectorBadge: string;
  };
}

const DISPUTE_SCENARIOS: DisputeScenario[] = [
  {
    id: "geyser-leak",
    title: "Scenario #1: Geyser Install vs Roof Tile Leak",
    trade: "Plumbing & Roofing",
    escrowAmount: "R3,800",
    clientClaim: "Client claims ceiling leak returned 2 days after new 150L geyser was installed, demanding full refund.",
    proDefense: "Plumber claims new geyser installation passed PIRB pressure test. Leak is caused by cracked roof tiles above ceiling.",
    evidence: {
      clientPhoto: "📸 Photo: Water stain on bedroom ceiling drywall (uploaded 48h post-install)",
      proDocument: "📜 PIRB Certificate #P-884021 + 6.0 Bar Hydrostatic Pressure Test Pass Log",
      zolaLog: "💬 Zola Chat Memory: 'Customer declined R650 roof tile sealing add-on prior to dispatch'",
    },
    juryBreakdown: {
      proPayout: 85,
      clientRefund: 15,
      verdictTitle: "Verdict: 85% Escrow Released to Contractor",
      rationale: "PIRB Senior Inspector verified geyser pressure test was 100% compliant. Zola pre-brief logs proved roof repair was declined by client prior to booking.",
      inspectorBadge: "Verified PIRB Trade Auditor #7740",
    },
  },
  {
    id: "db-board",
    title: "Scenario #2: DB Board Tripping & Wiring Safety",
    trade: "Electrical & Wireman",
    escrowAmount: "R2,400",
    clientClaim: "Client refuses final release claiming main breaker trips whenever oven and aircon run simultaneously.",
    proDefense: "Electrician shows stove circuit is on a 30A feeder installed in 1998, which exceeds main breaker capacity.",
    evidence: {
      clientPhoto: "📹 Video: Main 63A breaker tripping when appliances turn on",
      proDocument: "📜 Wireman's Test Report + SANS 10142 Load Calculations Sheet",
      zolaLog: "💬 Zola Chat Memory: 'CoC inspection limited to DB board replacement; stove circuit rewiring unquoted'",
    },
    juryBreakdown: {
      proPayout: 100,
      clientRefund: 0,
      verdictTitle: "Verdict: 100% Escrow Released to Electrician",
      rationale: "Wireman Board confirmed DB board installation met SANS 10142 spec. Appliance overload requires separate circuit upgrade requested as add-on.",
      inspectorBadge: "Department of Labour Wireman Inspector",
    },
  },
  {
    id: "custom-upholstery",
    title: "Scenario #3: Custom Sofa Upholstery Shade Match",
    trade: "Furniture & Decor",
    escrowAmount: "R5,200",
    clientClaim: "Client claims velvet fabric shade is slightly darker than expected under indoor warm lighting.",
    proDefense: "Upholsterer submitted physical fabric dye batch sample code #V-904 matching order specification.",
    evidence: {
      clientPhoto: "📸 Photo: Sofa in living room light",
      proDocument: "📜 Mill Dye Batch Certificate #V-904 + Signed Digital Fabric Card",
      zolaLog: "💬 Zola Chat Memory: 'Client selected Dye Batch V-904 in pre-order confirmation'",
    },
    juryBreakdown: {
      proPayout: 100,
      clientRefund: 0,
      verdictTitle: "Verdict: 100% Escrow Released to Upholsterer",
      rationale: "Jury verified delivered fabric matched dye batch #V-904 approved in signed digital order agreement.",
      inspectorBadge: "SA Furniture Crafts Guild Auditor",
    },
  },
];

export function DisputesHub() {
  const [activeScenario, setActiveScenario] = useState<DisputeScenario>(DISPUTE_SCENARIOS[0]);

  return (
    <div className="relative pt-24 pb-20">
      <Section id="disputes-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              Fairness & Escrow Governance
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              Transparent Disputes & <br />
              <span className="text-b-green-deep">Escrow Protection.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              When work expectations differ, Bouul freezes escrow funds safely while executing a 3-step evidence review process that protects both clients and verified trade contractors.
            </p>
          </div>
        </Reveal>

        {/* 3 Step Resolution Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">Step 1: Immediate Escrow Freeze</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Tapping "Dispute Booking" instantly freezes escrow funds. Neither party can withdraw money until evidence is reviewed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">Step 2: 48-Hour Evidence Upload</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Client and contractor submit high-res photos, pre-diagnostic chat logs, and initial scope briefs directly inside the app.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold">
                <Gavel className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">Step 3: Peer Jury Signoff</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Senior certified trade inspectors evaluate technical evidence against PIRB/SANS building standards for fair payout release.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── SIMULATED DISPUTE & PEER JURY VERDICT INTERACTIVE DEMO ── */}
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-6 sm:p-10 md:p-12 shadow-2xl mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-green-deep border border-emerald-500/20 mb-3">
                <Gavel className="h-4 w-4" />
                <span>Simulated Peer Jury Verdict Case</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-b-ink">
                Test Real Dispute Scenarios Live
              </h2>
              <p className="text-xs sm:text-sm text-b-ink-soft mt-2">
                Click any case scenario below to inspect customer claims, contractor defense evidence, and how our trade peer jury awards escrow payouts.
              </p>
            </div>

            {/* Scenario Tabs */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none snap-x touch-pan-x mb-8">
              {DISPUTE_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className={`snap-start shrink-0 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] ${
                    activeScenario.id === sc.id
                      ? "bg-b-forest text-b-cream shadow-md scale-[1.02]"
                      : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  {sc.title}
                </button>
              ))}
            </div>

            {/* Selected Scenario Board */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-b-paper border border-b-line">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-b-green-deep tracking-widest block">
                      Trade Category: {activeScenario.trade}
                    </span>
                    <h3 className="font-display text-lg font-bold text-b-ink mt-0.5">
                      {activeScenario.title}
                    </h3>
                  </div>
                  <div className="shrink-0 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-extrabold text-amber-800 text-center">
                    Locked Escrow: <span className="text-sm text-b-ink font-mono">{activeScenario.escrowAmount}</span>
                  </div>
                </div>

                {/* Claims Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Client Claim */}
                  <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700 block">
                      👤 Client Dispute Claim:
                    </span>
                    <p className="text-xs text-b-ink leading-relaxed font-medium">
                      &quot;{activeScenario.clientClaim}&quot;
                    </p>
                  </div>

                  {/* Contractor Defense */}
                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 block">
                      🛠️ Contractor Technical Defense:
                    </span>
                    <p className="text-xs text-b-ink leading-relaxed font-medium">
                      &quot;{activeScenario.proDefense}&quot;
                    </p>
                  </div>
                </div>

                {/* Technical Evidence Locker */}
                <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                  <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-b-ink flex items-center gap-2">
                    <Camera className="h-4 w-4 text-b-green-deep" />
                    <span>Uploaded Technical Evidence Vault (48h Inspection Window)</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-b-paper-raised border border-b-line/60 text-b-ink-soft">
                      {activeScenario.evidence.clientPhoto}
                    </div>
                    <div className="p-3 rounded-xl bg-b-paper-raised border border-b-line/60 text-b-ink-soft">
                      {activeScenario.evidence.proDocument}
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 font-medium">
                      {activeScenario.evidence.zolaLog}
                    </div>
                  </div>
                </div>

                {/* Peer Jury Final Verdict Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-b-forest text-b-cream space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-b-forest-line pb-4">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-xl bg-b-sun text-b-ink font-bold flex items-center justify-center">
                        <Gavel className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-base text-white">
                          {activeScenario.juryBreakdown.verdictTitle}
                        </h4>
                        <span className="text-[11px] text-b-sun font-semibold">
                          Audited by: {activeScenario.juryBreakdown.inspectorBadge}
                        </span>
                      </div>
                    </div>
                    {/* Visual split progress bar */}
                    <div className="flex items-center gap-2 text-xs font-mono font-bold">
                      <span className="text-emerald-400">{activeScenario.juryBreakdown.proPayout}% Pro</span>
                      <span>/</span>
                      <span className="text-rose-300">{activeScenario.juryBreakdown.clientRefund}% Client</span>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-b-cream/90 italic">
                    &quot;{activeScenario.juryBreakdown.rationale}&quot;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Protection Policies */}
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-b-green-deep uppercase tracking-widest block mb-1">
                Zero Chargeback Fraud
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink">
                How We Protect Verified Pros &amp; Clients
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-2">
                <h4 className="font-display font-bold text-base text-b-ink flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-b-green-deep" />
                  <span>Scope Change Safeguard</span>
                </h4>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Contractors cannot be penalized for unquoted extra work requested verbally on site. Extra tasks require an in-app add-on approval.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-2">
                <h4 className="font-display font-bold text-base text-b-ink flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-b-green-deep" />
                  <span>Workmanship Guarantee</span>
                </h4>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  If work fails pressure tests or safety checks, the contractor must rectify the issue before escrow funds are released.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

