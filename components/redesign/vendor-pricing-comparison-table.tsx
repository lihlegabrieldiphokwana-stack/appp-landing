"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Zap,
  DollarSign,
  TrendingUp,
  Percent,
  Users,
  Kanban,
  Bot,
  Store,
  Timer,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export function VendorPricingComparisonTable() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-b-line bg-b-paper">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-2 rounded-full mb-4 border border-emerald-500/20 shadow-sm min-h-[36px]">
          <Percent className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>Vendor Pricing & Competitor Comparison</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
          Free leads. Industry-leading 8% commission only.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-b-ink-soft leading-relaxed px-2">
          No pay-per-lead gouging. No upfront credit packs. You list your business for free, receive unlimited customer leads for free, and only pay an 8% commission when a job is completed and escrow-verified.
        </p>
      </div>

      {/* ── HIGHLIGHT CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-b-paper-raised border border-emerald-500/30 space-y-3 shadow-md hover:shadow-lg transition-all duration-200">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xl">
            R0
          </div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-b-ink">Free Unlimited Leads</h3>
          <p className="text-xs text-b-ink-soft leading-relaxed">
            Never pay R80–R250 per lead just to respond to inquiries. All lead discovery, chat responses, and quotes on Bouul are 100% free.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-b-paper-raised border border-emerald-500/30 space-y-3 shadow-md hover:shadow-lg transition-all duration-200">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xl">
            8%
          </div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-b-ink">Flat 8% Commission Only</h3>
          <p className="text-xs text-b-ink-soft leading-relaxed">
            Compare to 15%–25%+ taken by legacy directories and delivery apps. Keep 92% of your revenue on every completed booking.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-b-paper-raised border border-emerald-500/30 space-y-3 shadow-md hover:shadow-lg transition-all duration-200">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xl">
            100%
          </div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-b-ink">Bouul Escrow Security</h3>
          <p className="text-xs text-b-ink-soft leading-relaxed">
            Funds are locked in escrow before you dispatch staff or purchase materials. Zero unpaid invoices or non-paying clients.
          </p>
        </div>
      </div>

      {/* ── COMPARISON TABLE CONTAINER ── */}
      <div className="rounded-2xl sm:rounded-3xl border border-b-line bg-b-paper-raised p-4 sm:p-8 md:p-10 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-b-ink">
            Bouul vs. Legacy Lead Directories & Marketplaces
          </h3>
          <span className="inline-flex sm:hidden text-[11px] font-semibold text-b-ink-faint italic">
            ← Scroll table horizontally →
          </span>
        </div>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto rounded-xl border border-b-line/60 scrollbar-none touch-pan-x">
          <table className="w-full text-left text-xs border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-b-line bg-b-paper text-b-ink font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 w-1/3">Feature & Commercial Terms</th>
                <th className="py-3.5 px-4 bg-emerald-500/10 text-emerald-700 font-extrabold w-1/3 border-x border-emerald-500/20">
                  Bouul Marketplace
                </th>
                <th className="py-3.5 px-4 text-b-ink-soft w-1/3">
                  Legacy Marketplaces & Lead Directories
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-b-line text-b-ink">
              <tr>
                <td className="py-3.5 px-4 font-bold">Cost Per Customer Lead</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-extrabold text-emerald-700 border-x border-emerald-500/20">
                  R0 (100% Free Unlimited Leads)
                </td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">
                  R80 – R250 per lead credit (paid upfront)
                </td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Commission on Completed Jobs</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-extrabold text-emerald-700 border-x border-emerald-500/20">
                  Flat 8% Only (Industry Lowest)
                </td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">
                  15% – 25%+ High Margin Cut
                </td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Payment Protection</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  100% Escrow Guaranteed Before Dispatch
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">
                  Unprotected / Manual Invoicing Risk
                </td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Zola AI Business Manager</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  Included (5 Automations + Veto Window)
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">None / Basic Auto-Reply</td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Unified Kanban Ops Board</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  Included (Triage Orders & Disputes)
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">Not Available</td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Team & Employee Workboard</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  Included (Shift Timers, Status Pills & Upsell Strip)
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">Not Available</td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Custom Brand Handle ($handle)</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  Full Brand Storefront ($handle)
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">Generic Directory Listing</td>
              </tr>

              <tr>
                <td className="py-3.5 px-4 font-bold">Dynamic Pricing & Inflation Indexing</td>
                <td className="py-3.5 px-4 bg-emerald-500/5 font-bold text-emerald-700 border-x border-emerald-500/20">
                  70/30 CPI & PPI Automated Indexing
                </td>
                <td className="py-3.5 px-4 text-b-ink-soft">Static Manual Prices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
