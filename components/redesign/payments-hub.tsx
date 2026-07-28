"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  FileText,
  Scale,
  Receipt,
  Code,
  Server,
  UserCheck,
  Calculator,
  Shield,
  Layers,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

/* ─── South African Instant Settlement Banks ────────────────────────────── */

const SA_BANKS = [
  { name: "FNB", fullName: "First National Bank", logoPath: "/banks/fnb.svg", payoutTime: "Instant RTC" },
  { name: "Standard Bank", fullName: "Standard Bank SA", logoPath: "/banks/standardbank.png", payoutTime: "Instant RTC" },
  { name: "Capitec", fullName: "Capitec Bank", logoPath: "/banks/capitec.png", payoutTime: "Instant RTC" },
  { name: "Nedbank", fullName: "Nedbank Group", logoPath: "/banks/nedbank.png", payoutTime: "Instant RTC" },
  { name: "Absa", fullName: "Absa Bank", logoPath: "/banks/absa.webp", payoutTime: "Instant RTC" },
  { name: "TymeBank", fullName: "TymeBank SA", logoPath: "/banks/tymebank.png", payoutTime: "Same-Day" },
  { name: "Discovery Bank", fullName: "Discovery Bank", logoPath: "/banks/discovery.png", payoutTime: "Instant RTC" },
  { name: "Investec", fullName: "Investec Bank", logoPath: "/banks/investec.png", payoutTime: "Instant RTC" },
];

/* ─── Financial Topics Suite Data ────────────────────────────────────────── */

const FINANCIAL_TOPICS = [
  {
    id: "refunds-disputes",
    title: "Refunds & Disputes",
    category: "Protection",
    icon: Scale,
    description: "Clear 4-step escrow dispute resolution rules, pro-rata milestone refunds, and fair job sign-off protection.",
    link: "/payments/refunds-and-disputes",
    badge: "Escrow Rules",
  },
  {
    id: "billing-invoices",
    title: "Invoices & Billing",
    category: "Accounting",
    icon: Receipt,
    description: "Automated PDF tax invoice generation, custom CIPC/VAT registration details, and instant job receipts.",
    link: "/payments/billing-and-invoices",
    badge: "Auto PDFs",
  },
  {
    id: "taxes-1099",
    title: "Taxes & 1099 / SARS",
    category: "Compliance",
    icon: Calculator,
    description: "Annual gross earnings exports, 1099 / IT3(a) statements, and one-click SARS eFiling revenue reports.",
    link: "/payments/taxes-and-1099",
    badge: "Tax Export",
  },
  {
    id: "connect-integrations",
    title: "Connect & Integrations",
    category: "API & Sync",
    icon: Layers,
    description: "Sync payouts and ledgers with Xero, Sage, and QuickBooks, plus real-time REST webhooks for enterprise accounts.",
    link: "/payments/connect-and-integrations",
    badge: "Xero / Sage API",
  },
  {
    id: "atlas-security",
    title: "Atlas Security & Privacy",
    category: "Infrastructure",
    icon: Server,
    description: "PCI-DSS Level 1 compliance, AES-256 bank-grade data encryption, and strict POPIA privacy safeguards.",
    link: "/payments/atlas-infrastructure",
    badge: "AES-256 Vault",
  },
  {
    id: "verification-account",
    title: "Merchant Verification & KYC",
    category: "Onboarding",
    icon: UserCheck,
    description: "CIPC company verification, ID photo checks, and instant bank account name-matching for safe payouts.",
    link: "/verification",
    badge: "KYC Verified",
  },
];

type AudienceTab = "overview" | "users" | "vendors";

export function PaymentsHub() {
  const [activeAudience, setActiveAudience] = useState<AudienceTab>("overview");
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
          <div className="text-center max-w-3xl mx-auto mb-10">
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

            {/* Audience Segment Toggle */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl border border-b-line bg-b-paper p-1.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveAudience("overview")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    activeAudience === "overview"
                      ? "bg-b-ink text-b-paper shadow-sm"
                      : "text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Platform Overview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudience("users")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    activeAudience === "users"
                      ? "bg-b-ink text-b-paper shadow-sm"
                      : "text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>For Customers</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudience("vendors")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    activeAudience === "vendors"
                      ? "bg-b-ink text-b-paper shadow-sm"
                      : "text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span>For Vendors & Pros</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dynamic Audience View Banner */}
        {activeAudience === "users" && (
          <Reveal>
            <div className="max-w-4xl mx-auto mb-14 rounded-3xl border border-b-line bg-b-paper-raised p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-b-green-deep">
                    Customer Escrow Protection
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-b-ink">
                    Never worry about non-delivery or unfulfilled bookings.
                  </h3>
                  <p className="mt-1 text-xs text-b-ink-soft max-w-xl">
                    Your payment stays safe in neutral escrow. Funds are released to the vendor only when you sign off that the work is complete.
                  </p>
                </div>
                <Link
                  href="/payments/for-users"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-b-ink px-5 py-2.5 text-xs font-bold text-b-paper hover:bg-b-forest transition-colors"
                >
                  <span>Customer Payment Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}

        {activeAudience === "vendors" && (
          <Reveal>
            <div className="max-w-4xl mx-auto mb-14 rounded-3xl border border-b-line bg-b-paper-raised p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-b-ink">
                    Vendor Payouts & Revenue OS
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-b-ink">
                    100% upfront deposit guarantees zero bad debt.
                  </h3>
                  <p className="mt-1 text-xs text-b-ink-soft max-w-xl">
                    Instant RTC payouts straight into your SA bank account upon job completion with flat 8% fees and automated tax exports.
                  </p>
                </div>
                <Link
                  href="/payments/for-vendors"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-b-ink px-5 py-2.5 text-xs font-bold text-b-paper hover:bg-b-forest transition-colors"
                >
                  <span>Vendor Payout Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}

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
                <div className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-b-green-deep/10 border border-b-green-deep/20 text-xs text-b-green-deep font-bold text-center">
                  <Sparkles className="h-4 w-4 shrink-0 text-b-green-deep" />
                  <span>You save R{(legacyCommission + legacyLeadCost - bouulFee).toLocaleString()} on this job with Bouul!</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SA Bank Partner Grid */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-b-ink mb-2">
              Supported South African Instant Settlement Banks
            </h3>
            <p className="text-sm text-b-ink-soft">
              Real-Time Clearing (RTC) supported across all major SA banking institutions for instant payouts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-24">
            {SA_BANKS.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-b-paper-raised border border-b-line shadow-xs transition-all hover:border-b-green-deep/30 hover:shadow-md"
              >
                <img
                  src={b.logoPath}
                  alt={`${b.fullName} Logo`}
                  className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-xs bg-b-paper p-0.5"
                />
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-display font-bold text-sm text-b-ink truncate">{b.name}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-b-green-deep">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    {b.payoutTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Financial Topics Suite & Documentation Hub */}
        <Reveal>
          <div className="max-w-6xl mx-auto border-t border-b-line/80 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Eyebrow tone="green" className="mb-2">Financial Topic Suite</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-b-ink">
                Payments, Disputes, Invoicing & Tax Knowledge Base
              </h2>
              <p className="mt-3 text-sm text-b-ink-soft leading-relaxed">
                Explore topic guides, regulatory frameworks, accounting integrations, and refund policies built into Bouul&apos;s payment infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FINANCIAL_TOPICS.map((topic, index) => (
                <Reveal key={topic.id} delay={index * 0.05}>
                  <div className="flex flex-col justify-between h-full rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-xs transition-all hover:border-b-green-deep/40 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft text-b-ink">
                          <topic.icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-b-paper border border-b-line px-2.5 py-0.5 text-[10px] font-bold text-b-ink-soft">
                          {topic.badge}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-b-green-deep">
                        {topic.category}
                      </span>
                      <h3 className="mt-1 font-display font-bold text-b-ink text-xl">
                        {topic.title}
                      </h3>
                      <p className="mt-2 text-xs text-b-ink-soft leading-relaxed">
                        {topic.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-b-line/60">
                      <Link
                        href={topic.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-b-ink hover:text-b-green-deep transition-colors"
                      >
                        <span>Explore topic</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}



