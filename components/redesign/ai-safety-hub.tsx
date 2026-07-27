"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  Eye,
  Clock,
  Lock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  UserCheck,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

export function AISafetyHub() {
  return (
    <div className="relative pt-24 pb-20">
      <Section id="ai-safety-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              AI Safety & Governance Architecture
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              Autonomous AI with <br />
              <span className="text-b-green-deep">Human Merchant Veto.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              Zola AI is engineered with strict DeepSeek V4 safety guardrails, a 5-minute merchant review window, POPIA data protection, and zero price hallucination.
            </p>
          </div>
        </Reveal>

        {/* 4 Safety Guardrails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">1. The 5-Minute Merchant Veto Window</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                When Zola draft-publishes marketing campaigns, discount offers, or custom social updates, vendors get a 5-minute SMS &amp; app notification window to review, edit, or veto before live dispatch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">2. Zero Price Hallucination Guardrails</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Zola operates within vendor-defined price envelopes. Zola cannot promise discounts or quote rates outside your pre-approved service matrix.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">3. POPIA &amp; SA Privacy Compliance</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Customer home addresses, gate codes, and DB board photos are encrypted in Home Memory. Data is never sold or used to train external LLMs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-700 flex items-center justify-center font-bold">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">4. 1-Tap Human Escalation</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Customers or vendors can bypass AI instantly with 1 tap to speak with a human support agent or direct contractor phone line.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Veto Timeline Visual Box */}
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl text-center space-y-6">
            <span className="text-xs font-bold text-b-green-deep uppercase tracking-widest block">
              Safety Timeline Example
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink">
              How the 5-Minute Veto Loop Operates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4">
              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                <span className="text-[10px] font-bold uppercase text-b-green-deep">Minute 0:00</span>
                <h4 className="font-display font-bold text-sm text-b-ink">Zola Prepares Campaign</h4>
                <p className="text-xs text-b-ink-soft">Zola detects high weekend rain and drafts a "Geyser Inspection" promo.</p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <span className="text-[10px] font-bold uppercase text-amber-800">Minute 0:01 – 5:00</span>
                <h4 className="font-display font-bold text-sm text-b-ink">Merchant Push Alert</h4>
                <p className="text-xs text-b-ink-soft">Vendor receives alert: "Tap to edit or cancel promo before launch."</p>
              </div>

              <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                <span className="text-[10px] font-bold uppercase text-b-ink-faint">Minute 5:01</span>
                <h4 className="font-display font-bold text-sm text-b-ink">Auto-Dispatch (if approved)</h4>
                <p className="text-xs text-b-ink-soft">If no veto is triggered, campaign publishes to nearby customers.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
