"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import Link from "next/link";
import {
  Trophy,
  Award,
  ShieldCheck,
  Zap,
  UserCheck,
  TrendingUp,
  Coins,
  Lock,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Percent,
  Star,
  Users,
  Repeat,
  Flame,
  Scale,
  Gift,
} from "lucide-react";

export default function TrophiesPage() {
  const [activePerspective, setActivePerspective] = useState<"consumer" | "vendor">("consumer");
  const [selectedTier, setSelectedTier] = useState<"bronze" | "silver" | "gold" | "platinum">("gold");

  return (
    <main className="min-h-screen bg-b-paper text-b-ink selection:bg-b-green selection:text-b-forest">
      <RedesignNav />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-5 max-w-6xl mx-auto text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20 shadow-sm"
        >
          <Trophy className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>The Bouul Mastery Engine</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-b-ink max-w-4xl mx-auto leading-[1.08]"
        >
          Gamified trust for consumers. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            Automated retention for vendors.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-b-ink-soft max-w-2xl mx-auto leading-relaxed"
        >
          The Bouul Trophy System bridges the gap between client loyalty and merchant growth. Earn wallet credits, unlock dynamic discounts, and build lifetime service relationships.
        </motion.p>

        {/* ── DUAL PERSPECTIVE TOGGLE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-b-paper-raised border border-b-line shadow-md"
        >
          <button
            onClick={() => setActivePerspective("consumer")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
              activePerspective === "consumer"
                ? "bg-b-green text-b-forest shadow-md"
                : "text-b-ink-soft hover:text-b-ink"
            }`}
          >
            <UserCheck className="h-4 w-4" />
            <span>Consumer Perspective (Clients)</span>
          </button>
          <button
            onClick={() => setActivePerspective("vendor")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
              activePerspective === "vendor"
                ? "bg-b-forest text-b-cream shadow-md"
                : "text-b-ink-soft hover:text-b-ink"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>Vendor Perspective (Merchants)</span>
          </button>
        </motion.div>
      </section>

      {/* ── PERSPECTIVE DEEP DIVE SECTION ── */}
      <section className="py-16 px-5 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {activePerspective === "consumer" ? (
            <motion.div
              key="consumer-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
                  Client Benefits & Gamification
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                  How Trophies Supercharge Your Booking Experience
                </h2>
                <p className="text-sm text-b-ink-soft mt-2">
                  Every booking, review, and repeat hire moves you up the trophy ladder, unlocking real financial rewards and VIP service perks.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Coins className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Wallet Credits & Cash Rewards</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Unlocking milestones like the <strong className="text-b-ink">Bouul Regular (10 Bookings)</strong> instantly deposits R50 to R350 wallet credits directly into your app account to use on your next booking.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Real Spendable Balance</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Percent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Automatic Dynamic Discounts</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Trophies act as digital loyalty cards. Reaching <strong className="text-b-ink">Silver or Gold</strong> automatically unlocks vendor-specific discounts (e.g., 15% off repeat electrician visits or hair styling).
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Applied at Checkout</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <Flame className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Vendor Inner Circle VIP Status</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Top-tier trophy holders earn direct line access, priority emergency dispatch, and seasonal exclusive slots with premier service vendors.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-purple-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Priority Dispatch</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Smart Privacy Control (Public vs. Private)</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Show off creative status trophies (like "Patron of Photography") on your public profile, while keeping sensitive care and health trophies strictly private.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-blue-600 flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    <span>1-Tap Privacy Toggle</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Jury Duty & Justice Fragments</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Trophy holders get invited to resolve community escrow disputes. Voting earns <strong className="text-b-ink">Justice Fragments</strong> redeemable for wallet credits.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-rose-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Community Governance</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Relationship Continuity</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Never lose track of your favourite plumber, cleaner, or electrician. Trophies preserve full booking history and custom service preferences.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-teal-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Seamless Repeat Booking</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="vendor-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-2">
                  Merchant Growth & Retention
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                  How Trophies Build High-LTV Repeat Business
                </h2>
                <p className="text-sm text-b-ink-soft mt-2">
                  Stop paying expensive ad networks for one-off clicks. The Trophy System turns first-time clients into lifelong repeat customers automatically.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Repeat className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Automated Repeat Retention</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clients are gamified to return to <strong className="text-b-ink">YOUR business</strong> to reach their 3rd, 5th, and 10th booking milestone trophies, driving predictable monthly revenue.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-amber-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Zero Manual Retargeting</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Dynamic Pricing Rules</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Set custom rules via <code className="text-xs bg-b-paper-deep px-1.5 py-0.5 rounded text-emerald-600">trigger_type: 'trophy'</code> to reward your top-tier clients with targeted discounts without reducing public rates.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Targeted Margin Protection</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Instant VIP Client Identification</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    When a booking request arrives, Zola AI highlights client trophy badges so your staff know instantly when serving a high-value "Gold Inner Circle" client.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-blue-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>White-Glove Service Insights</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">3.4x Higher Customer Lifetime Value</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Data shows clients enrolled in a category trophy ladder generate 3.4x higher Lifetime Value (LTV) compared to un-gamified marketplaces.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-purple-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Proven Revenue Impact</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Zero Ad-Spend Customer Loyalty</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Traditional platforms force vendors to pay per click. Bouul's trophy ladder retains your clients organically through achievement milestones.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-rose-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>No Pay-Per-Click Fees</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Co-Branded Merchant Trophies</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Top vendors can create custom co-branded trophies (e.g. <strong className="text-b-ink">Clay Creations Photography Inner Circle</strong>) to build brand equity.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-teal-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Custom Brand Equity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── INTERACTIVE TROPHY TIER LADDER SIMULATOR ── */}
      <section className="py-20 px-5 max-w-6xl mx-auto bg-b-paper-raised rounded-3xl border border-b-line my-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full mb-3">
            <Trophy className="h-3.5 w-3.5" />
            <span>Interactive Ladder Simulator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-b-ink">
            Explore the 4 Trophy Tiers
          </h2>
          <p className="text-sm text-b-ink-soft mt-3">
            Click each tier to see client rewards and vendor retention benefits in action.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(["bronze", "silver", "gold", "platinum"] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-6 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedTier === tier
                  ? tier === "bronze"
                    ? "bg-amber-700 text-white shadow-lg"
                    : tier === "silver"
                    ? "bg-slate-400 text-white shadow-lg"
                    : tier === "gold"
                    ? "bg-amber-500 text-b-forest shadow-lg"
                    : "bg-emerald-600 text-white shadow-lg"
                  : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
              }`}
            >
              <Award className="h-4 w-4" />
              <span>{tier} Tier</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper p-8 sm:p-10 shadow-xl">
          {selectedTier === "bronze" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-b-line pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Entry Milestone</span>
                  <h3 className="font-display text-2xl font-extrabold text-b-ink">Bronze Tier — First Relationship</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-amber-700/10 text-amber-800 text-xs font-extrabold">
                  1 – 3 Bookings
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider block">Consumer Perk</span>
                  <p className="text-b-ink font-semibold text-sm">R50 Wallet Credit + Bronze Profile Badge</p>
                  <p className="text-b-ink-soft">
                    Completing your first 3 bookings unlocks a R50 credit directly in your Bouul wallet plus a verified profile badge.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-amber-600 uppercase tracking-wider block">Vendor Benefit</span>
                  <p className="text-b-ink font-semibold text-sm">Initial Conversion Lock-In</p>
                  <p className="text-b-ink-soft">
                    Converts trial users into repeat buyers by providing a clear, achievable 3-booking milestone goal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTier === "silver" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-b-line pb-4">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Established Relationship</span>
                  <h3 className="font-display text-2xl font-extrabold text-b-ink">Silver Tier — Established Client</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-500/10 text-slate-700 text-xs font-extrabold">
                  5 – 9 Bookings
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider block">Consumer Perk</span>
                  <p className="text-b-ink font-semibold text-sm">R150 Wallet Credit + 10% Repeat Discount</p>
                  <p className="text-b-ink-soft">
                    Unlocks R150 wallet credit and an automatic 10% discount on all future bookings with your category vendors.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-amber-600 uppercase tracking-wider block">Vendor Benefit</span>
                  <p className="text-b-ink font-semibold text-sm">2.1x Higher Re-Booking Velocity</p>
                  <p className="text-b-ink-soft">
                    Clients re-book 2.1x faster when approaching Silver status to claim their R150 wallet credit reward.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTier === "gold" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-b-line pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Inner Circle VIP</span>
                  <h3 className="font-display text-2xl font-extrabold text-b-ink">Gold Tier — Inner Circle Patron</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-amber-500/15 text-amber-700 text-xs font-extrabold">
                  10 – 19 Bookings
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider block">Consumer Perk</span>
                  <p className="text-b-ink font-semibold text-sm">R350 Credit + 15% VIP Discount + Direct Line</p>
                  <p className="text-b-ink-soft">
                    Unlocks R350 wallet credit, 15% dynamic pricing discount, direct chat access, and priority dispatch.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-amber-600 uppercase tracking-wider block">Vendor Benefit</span>
                  <p className="text-b-ink font-semibold text-sm">High-LTV Core Business Anchor</p>
                  <p className="text-b-ink-soft">
                    Gold clients represent your top 10% highest lifetime-value clients, providing baseline recurring monthly revenue.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTier === "platinum" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-b-line pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Category Master</span>
                  <h3 className="font-display text-2xl font-extrabold text-b-ink">Platinum Tier — Category Master</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-600/15 text-emerald-700 text-xs font-extrabold">
                  20+ Bookings
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider block">Consumer Perk</span>
                  <p className="text-b-ink font-semibold text-sm">Zero Escrow Dispute Fees + Emergency Priority</p>
                  <p className="text-b-ink-soft">
                    Exclusive zero-fee escrow dispute protection, 24/7 emergency priority dispatch, and custom merchant gifts.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <span className="font-bold text-amber-600 uppercase tracking-wider block">Vendor Benefit</span>
                  <p className="text-b-ink font-semibold text-sm">Brand Advocate & Co-Branded Perks</p>
                  <p className="text-b-ink-soft">
                    Platinum clients become organic brand advocates who refer friends and family with 5x higher conversion rates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="py-20 px-5 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-b-ink tracking-tight">
          Ready to experience the Bouul Trophy System?
        </h2>
        <p className="mt-4 text-b-ink-soft text-base">
          Start booking verified service professionals or register as a merchant today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto rounded-full bg-b-green px-8 py-4 text-sm font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Explore Services & Earn Trophies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/vendors"
            className="w-full sm:w-auto rounded-full bg-b-paper-raised border border-b-line px-8 py-4 text-sm font-extrabold text-b-ink hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
          >
            <span>Register as a Merchant</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
