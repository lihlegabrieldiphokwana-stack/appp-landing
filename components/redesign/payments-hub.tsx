"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  DollarSign,
  TrendingUp,
  Building2,
  CheckCircle2,
  Zap,
  Percent,
  Clock,
  ArrowRight,
  HelpCircle,
  CreditCard,
  Banknote,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const SA_BANKS = [
  { name: "FNB", logo: "🏦", payoutTime: "Instant" },
  { name: "Standard Bank", logo: "🏦", payoutTime: "Instant" },
  { name: "Capitec", logo: "🏦", payoutTime: "Instant" },
  { name: "Nedbank", logo: "🏦", payoutTime: "Instant" },
  { name: "Absa", logo: "🏦", payoutTime: "Instant" },
  { name: "Tymebank", logo: "🏦", payoutTime: "Same-Day" },
];

export function PaymentsHub() {
  const [jobAmount, setJobAmount] = useState<number>(2500);

  const bouulFee = Math.round(jobAmount * 0.08);
  const vendorPayout = jobAmount - bouulFee;
  const legacyLeadCost = 180; // Avg legacy lead fee
  const legacyCommission = Math.round(jobAmount * 0.20); // 20% avg legacy app cut

  return (
    <div className="relative pt-24 pb-20">
      {/* Hero Section */}
      <Section id="payments-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              Trust & Payment Architecture
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              100% Escrow Protected. <br />
              <span className="text-b-green-deep">Zero Unpaid Invoices.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              Funds are secured in neutral escrow before any contractor dispatches or buys materials.
              Completed jobs settle instantly into South African bank accounts with flat 8% fees.
            </p>
          </div>
        </Reveal>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">100% Escrow Lock</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Customers deposit funds into neutral escrow upon booking. Contractors know 100% of the money is guaranteed before stepping foot on site.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                <Percent className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">Flat 8% Commission</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Zero pay-per-lead charges or credit packs. Free customer leads, keeping 92% of your hard-earned revenue on every completed job.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-b-ink">Instant SA Bank Payouts</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Once customer signs off work completion, funds transfer instantly via Real-Time Clearing (RTC) into your SA bank account.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Interactive Earnings Calculator */}
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-b-green-deep uppercase tracking-widest block mb-1">
                Interactive Calculator
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink">
                Calculate Your Payout & Savings
              </h2>
              <p className="text-xs text-b-ink-soft mt-1">
                Compare your net take-home on Bouul vs legacy directory lead packages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Slider Input */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-b-ink uppercase tracking-wider block">
                  Completed Job Value: <span className="text-b-green-deep text-lg">R{jobAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={jobAmount}
                  onChange={(e) => setJobAmount(Number(e.target.value))}
                  className="w-full h-2 bg-b-paper-deep rounded-lg appearance-none cursor-pointer accent-b-green-deep"
                />
                <div className="flex justify-between text-[11px] text-b-ink-faint font-price">
                  <span>R500</span>
                  <span>R12,500</span>
                  <span>R25,000</span>
                </div>
              </div>

              {/* Take home breakdown */}
              <div className="rounded-2xl bg-b-paper border border-b-line p-6 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-b-line">
                  <span className="text-xs font-semibold text-b-ink-soft">Bouul Take-Home Payout (92%):</span>
                  <span className="font-display font-extrabold text-lg text-b-green-deep">R{vendorPayout.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-b-ink-faint">
                  <span>Bouul Platform Fee (8%):</span>
                  <span>R{bouulFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-rose-600 font-medium pt-2 border-t border-b-line/60">
                  <span>Legacy App Cost (20% + Lead Fee):</span>
                  <span>R{(legacyCommission + legacyLeadCost).toLocaleString()}</span>
                </div>
                <div className="p-3 rounded-xl bg-b-green-deep/10 border border-b-green-deep/20 text-xs text-b-green-deep font-bold text-center">
                  🎉 You save R{(legacyCommission + legacyLeadCost - bouulFee).toLocaleString()} on this job with Bouul!
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SA Bank Partner Grid */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="font-display text-xl font-bold text-b-ink mb-2">
              Supported South African Instant Settlement Banks
            </h3>
            <p className="text-xs text-b-ink-soft">
              Real-time clearing supported across all major SA banking institutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {SA_BANKS.map((b) => (
              <div key={b.name} className="p-4 rounded-2xl bg-b-paper-raised border border-b-line text-center space-y-1">
                <span className="text-2xl">{b.logo}</span>
                <p className="font-display font-bold text-xs text-b-ink">{b.name}</p>
                <span className="text-[10px] font-semibold text-b-green-deep block">{b.payoutTime}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
