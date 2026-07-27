"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { DynamicPricingSection } from "@/components/redesign/dynamic-pricing-section";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  Bot,
  Zap,
  Sliders,
  Layers,
  Users,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Kanban,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Store,
  Box,
  Wallet,
  Scale,
  Share2,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Smartphone,
  Timer,
  FileCheck,
  QrCode,
  UserCheck,
  Flame,
  Award,
} from "lucide-react";

export default function VendorBusinessPage() {
  const [activeRoleTab, setActiveRoleTab] = useState<"vendor" | "employee">("vendor");

  return (
    <main className="min-h-screen bg-b-paper text-b-ink selection:bg-b-green selection:text-b-forest">
      <RedesignNav />

      {/* ── HERO HEADER ── */}
      <section className="relative pt-32 pb-20 px-5 max-w-6xl mx-auto text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20 shadow-sm"
        >
          <Briefcase className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>Bouul for Business • Built for South African Enterprise</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-b-ink max-w-5xl mx-auto leading-[1.06]"
        >
          Run your business like a CEO, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            not a firefighter.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-b-ink-soft max-w-3xl mx-auto leading-relaxed"
        >
          Bouul gives service professionals a complete command centre — an ops board, AI business manager, ad engine, dynamic menu editor, and full team management console in your pocket.
        </motion.p>

        {/* ── DUAL ROLE SWITCHER TOGGLE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-b-paper-raised border border-b-line shadow-md"
        >
          <button
            onClick={() => setActiveRoleTab("vendor")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
              activeRoleTab === "vendor"
                ? "bg-b-forest text-b-cream shadow-md"
                : "text-b-ink-soft hover:text-b-ink"
            }`}
          >
            <Store className="h-4 w-4" />
            <span>For Vendors (CEO Command Centre)</span>
          </button>
          <button
            onClick={() => setActiveRoleTab("employee")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
              activeRoleTab === "employee"
                ? "bg-b-green text-b-forest shadow-md"
                : "text-b-ink-soft hover:text-b-ink"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>For Employees (Ground-Level Workboard)</span>
          </button>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT SUITE ── */}
      <section className="py-12 px-5 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {activeRoleTab === "vendor" ? (
            <motion.div
              key="vendor-suite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* 1. Dashboard & Ops Board */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
                    Unified Operations Triage
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    1. Business Dashboard & Kanban Ops Board
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    One screen, every signal. The vendor home screen surfaces health scores, revenue charts, Zola activity digests, and quick-action pills. The Kanban Ops Board consolidates orders, blocked workflows, at-risk assignments, and dispute items into a single triage inbox. Go from signal to action in 1 tap.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-emerald-600 text-xs uppercase tracking-wider block">Health Score Dial</span>
                    <p className="font-display font-extrabold text-2xl text-b-ink">98 / 100</p>
                    <p className="text-xs text-b-ink-soft">Real-time business health metric incorporating response time, fulfillment rate, and customer feedback.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-blue-600 text-xs uppercase tracking-wider block">Unified Ops Board</span>
                    <p className="font-display font-extrabold text-2xl text-b-ink">Kanban Triage</p>
                    <p className="text-xs text-b-ink-soft">Categorizes orders needing action, blocked workflows, and dispute items with 1-tap resolution links.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-amber-600 text-xs uppercase tracking-wider block">Revenue Pacing</span>
                    <p className="font-display font-extrabold text-2xl text-b-ink">+24.8% MoM</p>
                    <p className="text-xs text-b-ink-soft">Net revenue tracking with 7d, 30d, 90d charts and average order value (AOV) metrics.</p>
                  </div>
                </div>
              </div>

              {/* 2. Zola AI Manager Table */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-2">
                    Autonomous Business Manager
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    2. Zola AI — 5 Autonomous Business Automations
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    Zola isn&apos;t a chatbot. It&apos;s an autonomous business manager running 5 independently toggleable automations with full audit transparency and draft veto windows.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-b-line bg-b-paper text-b-ink font-bold uppercase tracking-wider">
                        <th className="py-3.5 px-4">Automation</th>
                        <th className="py-3.5 px-4">What Zola Does For You</th>
                        <th className="py-3.5 px-4">Merchant Control Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-b-line text-b-ink-soft">
                      <tr>
                        <td className="py-4 px-4 font-bold text-b-ink">Auto-Respond to Inquiries</td>
                        <td className="py-4 px-4">Answers customer questions about services, hours, and policies in real time — flags edge cases for human review.</td>
                        <td className="py-4 px-4 font-semibold text-emerald-600">Full Autonomy / Edge Case Escalation</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-b-ink">Auto-Assign Employees</td>
                        <td className="py-4 px-4">Matches orders to best-fit team members based on skill certifications, schedule, proximity, and current workload.</td>
                        <td className="py-4 px-4 font-semibold text-emerald-600">Smart Skill & GPS Matching</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-b-ink">Auto-Schedule Jobs</td>
                        <td className="py-4 px-4">Books time slots on your calendar automatically when a customer confirms diagnostic details.</td>
                        <td className="py-4 px-4 font-semibold text-emerald-600">Calendar Buffer Auto-Lock</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-b-ink">Auto-Follow Up</td>
                        <td className="py-4 px-4">Checks in after job completion: satisfaction survey, rebook nudge, and review request.</td>
                        <td className="py-4 px-4 font-semibold text-emerald-600">Post-Completion Nudge</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-b-ink">Auto-Post Content</td>
                        <td className="py-4 px-4">Drafts and publishes service updates, promotions, tips, and seasonal offers to your store feed.</td>
                        <td className="py-4 px-4 font-semibold text-amber-600">5-Min Self-Serve Draft Veto Window</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Ad Suite & Marketing */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-2">
                    Built-in Growth Engine
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    3. Built-In Ad Suite — Quick Boost & Campaign Studio
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    Promote your services, Glimpses, or text posts without a marketing degree.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-b-ink">Quick Boost (1-Tap Ad Launch)</h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      Pick any service, post, or Glimpse, set a budget (R50–R500) and duration (3–30 days), and tap Launch. Simple 1-button promotion.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                      <Megaphone className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-b-ink">Campaign Studio & ROAS Analytics</h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      Segment audiences by interest, location, and past buyers. Choose budget pacing (aggressive / balanced / conservative) and track real-time ROAS.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Full Team Management */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-purple-600 uppercase tracking-widest block mb-2">
                    Team & Operations Control
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    4. Full Team Management, Live Availability & Roles
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    Granular team roles (Owner, Manager, Employee, Contractor, Freelancer, Trainee), color-coded live availability dots, and 1-minute shareable onboarding invite links.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-emerald-600 uppercase tracking-wider block">Granular Roles</span>
                    <p className="text-b-ink font-semibold">Owner, Manager, Tech, Freelancer</p>
                    <p className="text-b-ink-soft">Control who manages orders, edits menus, handles payouts, or responds to reviews.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-blue-600 uppercase tracking-wider block">Live Status Dots</span>
                    <p className="text-b-ink font-semibold">Available, On Lunch, Unavailable, Emergency</p>
                    <p className="text-b-ink-soft">Real-time color-coded availability dots update across your dashboard instantly.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-amber-600 uppercase tracking-wider block">In-App Rota</span>
                    <p className="text-b-ink font-semibold">Weekly Schedule & Time-Off</p>
                    <p className="text-b-ink-soft">Approve time-off requests in-app with zero paper rotas or WhatsApp confusion.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-rose-600 uppercase tracking-wider block">1-Min Onboarding</span>
                    <p className="text-b-ink font-semibold">Shareable Invite Links</p>
                    <p className="text-b-ink-soft">Send a link for new staff to onboard themselves — profile, photo, and skills included.</p>
                  </div>
                </div>
              </div>

              {/* 5. Inventory, Earnings, Disputes & Policies */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Box className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Inventory That Talks Back</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Track quantity on hand, reorder thresholds, lead times, and inbound/outbound adjustments. Works for service consumables and product stock alike.
                  </p>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Fair Community Jury Dispute Resolution</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    48-hour response window, evidence upload (photos/docs), and anonymous voting by 3 customers + 1 peer vendor to ensure unbiased verdicts.
                  </p>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">10+ Policy Types & Manual Instructions</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Set clear rules (Cancellation, Rescheduling, Refunds, Arrival, Health & Safety). Issue mandatory manual instructions to team members with due dates.
                  </p>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Earnings & Multi-Store Payouts</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Comprehensive net revenue charts, payout status tracking (Pending → Processing → Completed), multi-store switching, and referral rewards.
                  </p>
                </div>
              </div>

              {/* DYNAMIC PRICING ENGINE DEEP DIVE */}
              <DynamicPricingSection />
            </motion.div>
          ) : (
            <motion.div
              key="employee-suite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Employee Workboard */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
                    Ground-Level Work Tool
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    Your Workboard — Everything in One Place
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    Built for the person on the ground — not the person in the office. Get in, get the job done, and get on with your day.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-b-ink">Real-Time Status Pills</h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      Tap to set yourself as Available, On Lunch, Unavailable, or Emergency. Updates your vendor&apos;s dashboard in real time.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-b-ink">5-Domain Task Feed</h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      Curated feeds across Dispatch (orders), Content (posts), Disputes, Metrics, and Operations. Choose simplified or detailed views.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-b-paper border border-b-line space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                      <Timer className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-b-ink">Restart-Proof Shift Timer</h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      Start/stop timer with break and delay tracking. Survives app restarts — built for real shift work, not theoretical tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Assignment Toolkit */}
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-2">
                    Complete Job Execution
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
                    Assignments & Job Execution Toolkit
                  </h2>
                  <p className="text-sm text-b-ink-soft mt-3 leading-relaxed">
                    Every assigned job opens into a complete detail page with customer contact blocks, briefs, visual stage trackers, and delivery verification.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-emerald-600 uppercase tracking-wider block">Customer Block</span>
                    <p className="text-b-ink font-semibold">Contact & Special Notes</p>
                    <p className="text-b-ink-soft">See who you&apos;re serving, their contact info, and special instructions left at booking.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-blue-600 uppercase tracking-wider block">Stage Tracker</span>
                    <p className="text-b-ink font-semibold">Confirmed → In Progress → Complete</p>
                    <p className="text-b-ink-soft">Visual timeline through the fulfillment pipeline so you always know next steps.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-amber-600 uppercase tracking-wider block">1-Tap Upsell Strip</span>
                    <p className="text-b-ink font-semibold">Cross-Service Upsells</p>
                    <p className="text-b-ink-soft">Shows other unbooked services offered by your vendor. Offer an add-on in 1 tap.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                    <span className="font-bold text-rose-600 uppercase tracking-wider block">Verification</span>
                    <p className="text-b-ink font-semibold">PIN & Signature Capture</p>
                    <p className="text-b-ink-soft">Collect digital delivery signatures or PIN codes on site with photo proof upload.</p>
                  </div>
                </div>
              </div>

              {/* Chat & Self-Onboarding */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">Direct Chat with Zola AI</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Ask Zola about your schedule, policy lookups, or task questions in a dedicated staff chat separate from customer conversations.
                  </p>
                </div>

                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">1-Minute Self-Onboarding</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Open an invite link from your vendor, set up your profile, photo, and skills, and start working immediately.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="py-20 px-5 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-b-ink tracking-tight">
          Built for South African service businesses.
        </h2>
        <p className="mt-4 text-b-ink-soft text-base">
          From barbershops and beauty salons to mechanics and home services — setup your account today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="w-full sm:w-auto rounded-full bg-b-green px-8 py-4 text-sm font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Create Your Free Vendor Profile</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/zola/business"
            className="w-full sm:w-auto rounded-full bg-b-paper-raised border border-b-line px-8 py-4 text-sm font-extrabold text-b-ink hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Zola Business Pro</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
