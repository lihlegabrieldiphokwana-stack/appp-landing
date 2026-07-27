"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Calculator,
  LineChart,
  Percent,
  Coins,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Scale,
  DollarSign,
  Activity,
  Award,
} from "lucide-react";

export function DynamicPricingSection() {
  const [selectedFactor, setSelectedFactor] = useState<"cpi" | "demand" | "trophy" | "inventory">("cpi");

  return (
    <section className="py-20 md:py-28 px-5 max-w-6xl mx-auto border-t border-b-line bg-b-paper">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-4 border border-emerald-500/20 shadow-sm">
          <TrendingUp className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>Bouul Dynamic Pricing Engine™</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
          Fair prices that reflect economic reality.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
          Service prices on Bouul adjust dynamically based on real-time market data — CPI/PPI inflation indices, demand forecasting models, inventory depletion rules, and customer trophy tiers.
        </p>
      </div>

      {/* ── INTERACTIVE DYNAMIC PRICING PILLARS ── */}
      <div className="grid lg:grid-cols-4 gap-4 mb-10">
        {[
          {
            id: "cpi",
            label: "1. 70/30 CPI & PPI Indexing",
            desc: "Automatic inflation adjustment using StatSA CPI (70%) & PPI (30%) data.",
            icon: Calculator,
            color: "text-emerald-600 bg-emerald-500/10",
          },
          {
            id: "demand",
            label: "2. 37-Feature Demand Model",
            desc: "Poisson regression model (R² 0.66) predicting seasonal demand peaks.",
            icon: LineChart,
            color: "text-blue-600 bg-blue-500/10",
          },
          {
            id: "trophy",
            label: "3. Trophy Tier Discounts",
            desc: "Holding Silver, Gold, or Platinum trophies unlocks 5%–15% checkout discounts.",
            icon: Award,
            color: "text-amber-600 bg-amber-500/10",
          },
          {
            id: "inventory",
            label: "4. Slow-Period Autonomy",
            desc: "Vendors set custom price adjustment bands for off-peak hours automatically.",
            icon: Zap,
            color: "text-purple-600 bg-purple-500/10",
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedFactor(item.id as any)}
            className={`p-6 rounded-3xl border text-left transition-all flex flex-col justify-between space-y-4 ${
              selectedFactor === item.id
                ? "bg-b-paper-raised border-emerald-500 shadow-xl scale-[1.02]"
                : "bg-b-paper border-b-line hover:border-emerald-500/40"
            }`}
          >
            <div className={`h-10 w-10 rounded-2xl ${item.color} flex items-center justify-center font-bold`}>
              <item.icon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-base text-b-ink">{item.label}</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* ── SIMULATED CALCULATION DETAIL CARD ── */}
      <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl">
        {selectedFactor === "cpi" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block">
                Economic CPI/PPI Benchmark
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink">
                Inflation-Protected Vendor Margins
              </h3>
              <p className="text-sm text-b-ink-soft leading-relaxed">
                Bouul automatically blends Consumer Price Index (CPI, 70% weight) and Producer Price Index (PPI, 30% weight) with a 2021 baseline. Prices adjust smoothly so vendor margins remain protected against rising material and fuel costs without arbitrary rate shocks to clients.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-emerald-700 bg-emerald-500/10 p-3.5 rounded-2xl border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
                <span>Zero arbitrary price gouging • Transparent StatSA inflation alignment</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-4 font-mono text-xs text-b-ink">
              <div className="flex items-center justify-between border-b border-b-line pb-3 font-bold">
                <span>Metric Baseline</span>
                <span className="text-emerald-600">Weighted Index</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Base Service Rate:</span>
                <span>R 1,200.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">CPI Adjustment (70%):</span>
                <span className="text-emerald-600">+ R 54.00 (+4.5%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">PPI Adjustment (30%):</span>
                <span className="text-blue-600">+ R 18.00 (+1.5%)</span>
              </div>
              <div className="pt-3 border-t border-b-line flex justify-between font-extrabold text-sm">
                <span>Dynamic Rate:</span>
                <span className="text-emerald-600">R 1,272.00</span>
              </div>
            </div>
          </div>
        )}

        {selectedFactor === "demand" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block">
                Algorithmic Predictive Demand
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink">
                37-Feature Demand Forecasting
              </h3>
              <p className="text-sm text-b-ink-soft leading-relaxed">
                Using a Poisson regression model evaluated against 37 market signals (including weather forecasts, seasonality, holiday weekends, and local event density), Zola predicts optimal price points that maximize vendor booking volume while ensuring clients get instant availability.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-blue-700 bg-blue-500/10 p-3.5 rounded-2xl border border-blue-500/20">
                <Activity className="h-5 w-5 shrink-0 text-blue-600" />
                <span>R² 0.66 Predictive Accuracy • High-Volume Dispatch Optimization</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-4 font-mono text-xs text-b-ink">
              <div className="flex items-center justify-between border-b border-b-line pb-3 font-bold">
                <span>Signal Variable</span>
                <span className="text-blue-600">Model Weight</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Peak Hours (07:00-10:00):</span>
                <span>+12% Demand Factor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Rainfall & Weather Alert:</span>
                <span className="text-blue-600">+18% Plumbing Surge</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Off-Peak Midweek:</span>
                <span className="text-emerald-600">-8% Fill Incentive</span>
              </div>
              <div className="pt-3 border-t border-b-line flex justify-between font-extrabold text-sm">
                <span>Predicted Conversion:</span>
                <span className="text-blue-600">94.2% Optimal</span>
              </div>
            </div>
          </div>
        )}

        {selectedFactor === "trophy" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block">
                Loyalty & Mastery Discounts
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink">
                Trophy-Triggered Price Cuts
              </h3>
              <p className="text-sm text-b-ink-soft leading-relaxed">
                When clients earn trophies (e.g. *"Plumbing Patron"*, *"Clean Home Connoisseur"*), the Supabase edge pricing function (`trigger_type = 'trophy'`) evaluates the user&apos;s trophy tier and applies dynamic discounts ranging from 5% (Silver) up to 15% (Platinum) directly at checkout.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-amber-700 bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/20">
                <Award className="h-5 w-5 shrink-0 text-amber-600" />
                <span>3.4x Higher Merchant Repeat Bookings • Instant Edge Discount</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-4 font-mono text-xs text-b-ink">
              <div className="flex items-center justify-between border-b border-b-line pb-3 font-bold">
                <span>Trophy Tier</span>
                <span className="text-amber-600">Dynamic Discount</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Bronze Trophy Holder:</span>
                <span>R50 Wallet Credit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Silver Trophy Holder:</span>
                <span className="text-amber-600">5% Dynamic Discount</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Gold Trophy Holder:</span>
                <span className="text-amber-600">10% Dynamic Discount</span>
              </div>
              <div className="pt-3 border-t border-b-line flex justify-between font-extrabold text-sm">
                <span>Platinum Inner Circle:</span>
                <span className="text-emerald-600">15% Off + VIP Dispatch</span>
              </div>
            </div>
          </div>
        )}

        {selectedFactor === "inventory" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-purple-600 uppercase tracking-widest block">
                Off-Peak Fill Controls
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink">
                Slow-Period Merchant Autonomy
              </h3>
              <p className="text-sm text-b-ink-soft leading-relaxed">
                Vendors configure price adjustment bands on their Zola Autonomy settings page. During slow calendar windows, Zola automatically applies defined discounts to attract bookings, keeping staff billable without manual intervention.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-purple-700 bg-purple-500/10 p-3.5 rounded-2xl border border-purple-500/20">
                <Zap className="h-5 w-5 shrink-0 text-purple-600" />
                <span>Defined Price Band Bounds • Automatic Idle-Time Monetization</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-4 font-mono text-xs text-b-ink">
              <div className="flex items-center justify-between border-b border-b-line pb-3 font-bold">
                <span>Autonomy Rule</span>
                <span className="text-purple-600">Applied Action</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Idle Technician Window:</span>
                <span>Tuesday 13:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Max Allowed Band:</span>
                <span className="text-purple-600">-12% Max Discount</span>
              </div>
              <div className="flex justify-between">
                <span className="text-b-ink-soft">Auto Fill Status:</span>
                <span className="text-emerald-600">3 Slots Booked</span>
              </div>
              <div className="pt-3 border-t border-b-line flex justify-between font-extrabold text-sm">
                <span>Capacity Utilized:</span>
                <span className="text-purple-600">100% Billable</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
