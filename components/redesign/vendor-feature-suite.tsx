"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Wrench,
  PackageCheck,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  Sliders,
  Layers,
  Calendar,
  Box,
  FileText,
  DollarSign,
  ArrowRight,
  TrendingUp,
  Tag,
  Star,
  Clock,
  Camera,
  Check,
} from "lucide-react";

export function VendorFeatureSuite() {
  const [activeTab, setActiveTab] = useState<"store" | "service" | "bundles">("store");

  return (
    <section className="py-20 md:py-28 px-5 max-w-6xl mx-auto border-t border-b-line">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-4 border border-emerald-500/20 shadow-sm">
          <Sparkles className="h-4 w-4 text-emerald-600" />
          <span>Complete Merchant Commerce Suite</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
          Built for how real South African businesses operate.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
          From your custom digital storefront to item-level service diagnostics and high-margin bundles, Bouul gives you enterprise commerce superpowers.
        </p>
      </div>

      {/* ── THREE TAB SELECTOR — Touch-optimized horizontal swipe on mobile ── */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 px-1 -mx-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none snap-x touch-pan-x mb-8 sm:mb-12">
        <button
          onClick={() => setActiveTab("store")}
          className={`snap-start shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
            activeTab === "store"
              ? "bg-b-forest text-b-cream shadow-lg scale-[1.02]"
              : "bg-b-paper-raised border border-b-line text-b-ink-soft hover:text-b-ink"
          }`}
        >
          <Store className="h-4 w-4 text-b-sun" />
          <span>1. Store Detail Features</span>
        </button>

        <button
          onClick={() => setActiveTab("service")}
          className={`snap-start shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
            activeTab === "service"
              ? "bg-b-forest text-b-cream shadow-lg scale-[1.02]"
              : "bg-b-paper-raised border border-b-line text-b-ink-soft hover:text-b-ink"
          }`}
        >
          <Wrench className="h-4 w-4 text-b-sun" />
          <span>2. Service Detail Features</span>
        </button>

        <button
          onClick={() => setActiveTab("bundles")}
          className={`snap-start shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
            activeTab === "bundles"
              ? "bg-b-forest text-b-cream shadow-lg scale-[1.02]"
              : "bg-b-paper-raised border border-b-line text-b-ink-soft hover:text-b-ink"
          }`}
        >
          <PackageCheck className="h-4 w-4 text-b-sun" />
          <span>3. Bundles & Packages</span>
        </button>
      </div>

      {/* ── TAB CONTENT CONTAINERS ── */}
      <AnimatePresence mode="wait">
        {activeTab === "store" && (
          <motion.div
            key="tab-store"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div className="rounded-3xl bg-b-paper-raised border border-b-line p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
                  Storefront & Brand Identity
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold text-b-ink">
                  Store Detail: Your High-Converting Digital Storefront
                </h3>
                <p className="mt-3 text-sm text-b-ink-soft leading-relaxed">
                  Your Store Detail page is your digital flagship. It showcases your staff, verified reviews, custom handle, and dynamic service menu to convert profile visitors into paying customers.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Tag className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Custom Merchant Handles (`$handle`)</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Claim your unique handle (e.g. <code className="bg-b-paper-raised px-1.5 py-0.5 rounded text-emerald-600">@sipho_plumbing</code>) featured on search cards, QR code shares, and social feeds.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Team & Employee Roster Sheet</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clients tap your team pill to view staff licenses, PIRB/Wireman wire certifications, and photo badges, building instant client trust.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Dynamic Menu Sections & Inventory Sync</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Organize services into custom sections (e.g. *Emergency*, *Maintenance*, *Packages*). Items auto-hide when inventory depletes.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <Star className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Verified Rating & Review Audit</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Displays verified customer ratings, star breakdowns, and response metrics. Zero fake reviews allowed.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Policy & Escrow Disclosures</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clear cancellation policy terms, emergency call-out tariffs, and 100% Escrow Guarantee badging shown up front.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">1-Tap Direct Message & Instant Booking</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clients can launch a chat with Zola AI or request instant booking directly from your storefront header.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "service" && (
          <motion.div
            key="tab-service"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div className="rounded-3xl bg-b-paper-raised border border-b-line p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
                  Item Level Booking Architecture
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold text-b-ink">
                  Service Detail: Precision Scope, Diagnostics & Pricing
                </h3>
                <p className="mt-3 text-sm text-b-ink-soft leading-relaxed">
                  Every individual service listing provides crystal-clear scope expectations, visual photo diagnostics, automated inventory consumption, and deposit security.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Task Step & Process Breakdown</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Show clients step-by-step execution (*Step 1: Diagnostic*, *Step 2: Fitting*, *Step 3: Testing*) so they understand your professional value.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Camera className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Visual Photo & Video Diagnostics</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clients snap photos/videos of leaks, electrical DB boards, or hair style inspiration in chat so you arrive prepared with the right parts.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Box className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Automated Inventory Ledger Deductions</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Link services to parts in your inventory. Completing a job automatically deducts used valves, fittings, or shampoo bottles.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Custom Add-Ons & Tiered Variants</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Offer optional upgrades (e.g. *Standard Geyser* vs *Hybrid Solar*) and add-ons (*Extra 5m Hose*, *Same-Day Urgent Dispatch*).
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Escrow Security & Deposit Terms</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Set required deposit percentages with funds secured in Bouul Escrow before you dispatch staff or purchase specialized materials.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Real-Time Capacity & Duration Sizing</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Define exact estimated service duration (e.g. *4 Hours*) so your employee calendars automatically block out realistic buffer times.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "bundles" && (
          <motion.div
            key="tab-bundles"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div className="rounded-3xl bg-b-paper-raised border border-b-line p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-2">
                  High-Margin Package Engine
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold text-b-ink">
                  Bundles: Cross-Sell Services & Boost Order Value
                </h3>
                <p className="mt-3 text-sm text-b-ink-soft leading-relaxed">
                  Service Bundles allow you to group multiple complementary services into a single 1-tap package, increasing your Average Order Value (AOV) while offering clients attractive package savings.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <PackageCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Multi-Service Package Combinations</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Combine related trades (e.g. *"Geyser Replacement + Electrical CoC + Wall Waterproofing"*) into a single hassle-free package.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Higher Average Order Value (AOV)</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Bundling turns a single R650 service booking into a R3,500 full-home package, maximizing revenue per customer visit.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Automated Multi-Employee Scheduling</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Zola AI automatically checks calendar availability across multiple technicians (e.g. Electrician + Plumber) without double-booking.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <Tag className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Dynamic Package Discounts</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Offer 15% package savings when clients book the bundle, displaying crossed-out original prices to drive high conversion.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Unified Escrow & Phased Milestones</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Clients pay once into escrow, with payout milestones releasing progressively as each sub-service in the bundle is completed.
                  </p>
                </div>

                <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-b-ink">Featured Bundle Placement</h4>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Bundles are highlighted on home search screens, category rows, and storefront featured carousels for maximum exposure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
