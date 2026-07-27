"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Truck,
  Scale,
  ClipboardCheck,
  BarChart3,
  Eye,
  Scan,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  MessageSquare,
  FileText,
  Sparkles,
  ChevronRight,
  Kanban,
  Activity,
  Layers,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

interface DetectionSignal {
  id: string;
  label: string;
  what: string;
  why: string;
  outcome: string;
  urgency: "HIGH" | "MEDIUM" | "CRITICAL";
}

interface DetectionArea {
  id: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  label: string;
  preamble: string;
  signals: DetectionSignal[];
}

const DETECTION_AREAS: DetectionArea[] = [
  {
    id: "storefront",
    icon: Store,
    color: "text-emerald-600",
    badgeBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    label: "Storefront Health",
    preamble:
      "Most pros don't know their storefront is incomplete until a customer bounces. Bouul scores every page out of 10 and tells you exactly what's missing.",
    signals: [
      {
        id: "signal-1",
        label: "Completeness Gaps",
        what: "Missing logo, cover image, description, phone number, or search keywords on your storefront.",
        why: "A storefront without branding converts at a fraction of a complete one — clients decide in seconds.",
        outcome: "Auto-creates a 1-tap fix task on your Ops Board. Your health score improves the moment fields are saved.",
        urgency: "HIGH",
      },
      {
        id: "signal-2",
        label: "Service Listing Gaps",
        what: "Services live without gallery images or search keywords — stuck at 5/10 health score.",
        why: "Listings without media pass database queries but fail customer search queries.",
        outcome: "A completeness task is assigned. One photo upload turns an invisible listing into a bookable asset.",
        urgency: "MEDIUM",
      },
      {
        id: "signal-3",
        label: "Missing Post Media",
        what: "A text post published with zero attached images or videos.",
        why: "Text-only posts get negligible feed engagement compared to visual Glimpses™.",
        outcome: "An editorial task prompts you to attach a photo to boost feed distribution.",
        urgency: "MEDIUM",
      },
    ],
  },
  {
    id: "dispatch",
    icon: Truck,
    color: "text-blue-600",
    badgeBg: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    label: "Dispatch & Fulfillment",
    preamble:
      "Orders get assigned, but what happens next? Bouul watches the entire fulfillment loop and flags every gap before it becomes a customer complaint.",
    signals: [
      {
        id: "signal-4",
        label: "Unaccepted Assignments",
        what: "An order was assigned to an employee who hasn't accepted it within the time window.",
        why: "Unaccepted assignments cause client anxiety. In urgent trades (plumbing, towing), delay costs the job.",
        outcome: "Auto-escalated alert. If unaccepted, Zola auto-reassigns to the next available team member.",
        urgency: "CRITICAL",
      },
      {
        id: "signal-5",
        label: "Scheduling Overlaps",
        what: "An employee has overlapping assignments in the same time slot.",
        why: "Double bookings erode client trust instantly. A missed slot leads to bad reviews.",
        outcome: "Flagged on Ops Board. Vendor or employee reassigns before the overlap becomes a missed job.",
        urgency: "HIGH",
      },
      {
        id: "signal-6",
        label: "Substitution Needed",
        what: "Preferred technician is unavailable, and a substitute was auto-assigned.",
        why: "Clients requesting a regular technician appreciate a heads-up before arrival.",
        outcome: "Substitution notice created for vendor confirmation.",
        urgency: "MEDIUM",
      },
      {
        id: "signal-7",
        label: "Pre-Arrival Confirmation",
        what: "Employee hasn't confirmed readiness 30 minutes before arrival window.",
        why: "Catches no-shows and vehicle breakdown delays early.",
        outcome: "Check-in ping sent to employee; vendor alerted if unconfirmed.",
        urgency: "HIGH",
      },
    ],
  },
  {
    id: "disputes",
    icon: Scale,
    color: "text-rose-600",
    badgeBg: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    label: "Customer Disputes",
    preamble:
      "Disputes can stall payouts and hurt your rating. Bouul keeps dispute resolution moving on a strict 48-hour timeline.",
    signals: [
      {
        id: "signal-8",
        label: "Vendor Response Outstanding",
        what: "A customer raised a dispute and your 48-hour response window is running.",
        why: "Failing to respond within 48 hours results in auto-forfeit to the customer.",
        outcome: "High-urgency task on your Ops Board with a countdown timer to submit photos/notes.",
        urgency: "CRITICAL",
      },
      {
        id: "signal-9",
        label: "Jury Timeout Watch",
        what: "Dispute in community jury flow is approaching voting deadline.",
        why: "Ensures unbiased 3 customer + 1 peer vendor voting finishes promptly.",
        outcome: "Monitored automatically to enforce final escrow release.",
        urgency: "MEDIUM",
      },
      {
        id: "signal-10",
        label: "Verdict Follow-up",
        what: "Jury rendered a verdict — action required (refund processing or repair re-dispatch).",
        why: "Resolving post-verdict actions quickly protects your store's reputation score.",
        outcome: "Action task created with clear next steps.",
        urgency: "HIGH",
      },
    ],
  },
  {
    id: "operations",
    icon: ClipboardCheck,
    color: "text-amber-600",
    badgeBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    label: "Operations Hygiene",
    preamble:
      "The small operational details — morning checklists, review replies, policy expirations — that keep a business running smoothly.",
    signals: [
      {
        id: "signal-11",
        label: "Daily Open Checklist",
        what: "Morning store prep checklist not completed by scheduled opening time.",
        why: "Unprepared teams lead to delayed first appointments and disorganized shifts.",
        outcome: "Ops alert sent to shift manager to complete open checklist.",
        urgency: "HIGH",
      },
      {
        id: "signal-12",
        label: "Unanswered Review Responses",
        what: "Customer reviews waiting for vendor reply past 24 hours.",
        why: "Replying to reviews boosts SEO visibility and signals customer care.",
        outcome: "Task queued with Zola AI suggested responses ready to approve.",
        urgency: "MEDIUM",
      },
      {
        id: "signal-13",
        label: "Policy & Insurance Expiry",
        what: "PIRB/Wireman license, liability insurance, or trade certification about to expire.",
        why: "Expired credentials automatically suspend verified badging.",
        outcome: "Renewal reminder task created 30 days prior.",
        urgency: "CRITICAL",
      },
    ],
  },
  {
    id: "metrics",
    icon: BarChart3,
    color: "text-purple-600",
    badgeBg: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    label: "Performance Metrics",
    preamble:
      "Your operational data is constantly analyzed for negative trends before they damage revenue.",
    signals: [
      {
        id: "signal-14",
        label: "Exception Rate Spike",
        what: "Cancellations, disputes, or delays crossed 5% threshold this week.",
        why: "Indicates operational strain, staffing shortages, or quality issues.",
        outcome: "Diagnostic review task auto-generated with root cause insights.",
        urgency: "CRITICAL",
      },
      {
        id: "signal-15",
        label: "Slow Acceptance Pattern",
        what: "Specific employee taking >45 mins on average to accept assigned jobs.",
        why: "Identifies bottlenecks in team responsiveness before jobs are missed.",
        outcome: "Performance coaching note flagged for store manager.",
        urgency: "MEDIUM",
      },
      {
        id: "signal-16",
        label: "Team Coverage Gap",
        what: "Upcoming shift window has fewer technicians scheduled than predicted demand.",
        why: "Unstaffed peak hours result in turned-away clients and lost revenue.",
        outcome: "Roster gap task prompts manager to add shifts.",
        urgency: "HIGH",
      },
    ],
  },
];

export function VendorDetection() {
  const [activeAreaId, setActiveAreaId] = useState<string>("storefront");
  const [expandedSignalId, setExpandedSignalId] = useState<string | null>(null);

  const activeArea =
    DETECTION_AREAS.find((a) => a.id === activeAreaId) || DETECTION_AREAS[0];

  return (
    <Section className="bg-b-paper-raised py-20 md:py-28 border-t border-b-line">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Block */}
        <Reveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-4 border border-emerald-500/20 shadow-sm">
            <Scan className="h-4 w-4 text-emerald-600 animate-pulse" />
            <span>Autonomous Business Monitoring</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
            No other platform watches your business like this.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
            Legacy sites sit back and collect fees. Bouul continuously monitors 27+ operational signals across 5 domains — auto-detecting gaps and generating 1-tap fix tasks on your Ops Board.
          </p>
        </Reveal>

        {/* Mobile & Desktop Horizontal Domain Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-start md:justify-center">
          {DETECTION_AREAS.map((area) => {
            const Icon = area.icon;
            const isActive = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => {
                  setActiveAreaId(area.id);
                  setExpandedSignalId(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-b-forest text-b-cream shadow-lg scale-105"
                    : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
                }`}
              >
                <Icon className="h-4 w-4 text-b-sun" />
                <span>{area.label}</span>
                <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  {area.signals.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Overview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeArea.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-b-line bg-b-paper p-6 sm:p-10 shadow-xl space-y-8"
          >
            {/* Domain Preamble */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-b-line pb-6">
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-2xl ${activeArea.badgeBg} flex items-center justify-center font-bold shrink-0 border`}>
                  <activeArea.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-b-ink">
                    {activeArea.label}
                  </h3>
                  <p className="text-xs text-b-ink-soft mt-0.5">{activeArea.preamble}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-500/10 px-3.5 py-1.5 rounded-xl border border-emerald-500/20 shrink-0">
                <Kanban className="h-4 w-4 text-emerald-600" />
                <span>Auto-Synced to Ops Board</span>
              </div>
            </div>

            {/* Signals Grid for Selected Domain */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeArea.signals.map((signal, idx) => {
                const isExpanded = expandedSignalId === signal.id;
                return (
                  <motion.div
                    key={signal.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-b-paper-raised border border-b-line hover:border-emerald-500/40 hover:shadow-lg transition-all space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                          Signal #{idx + 1}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                            signal.urgency === "CRITICAL"
                              ? "bg-rose-500/10 text-rose-600 border-rose-500/20"
                              : signal.urgency === "HIGH"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                          }`}
                        >
                          {signal.urgency} URGENCY
                        </span>
                      </div>

                      <h4 className="font-display font-extrabold text-lg text-b-ink">
                        {signal.label}
                      </h4>

                      {/* What Bouul Watches */}
                      <div className="p-3 rounded-xl bg-b-paper border border-b-line space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint flex items-center gap-1">
                          <Eye className="h-3 w-3 text-emerald-600" /> What Bouul Watches
                        </span>
                        <p className="text-xs text-b-ink font-medium leading-relaxed">
                          {signal.what}
                        </p>
                      </div>

                      {/* Why It Matters */}
                      <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3 text-amber-600" /> Why It Matters
                        </span>
                        <p className="text-xs text-b-ink-soft leading-relaxed">
                          {signal.why}
                        </p>
                      </div>

                      {/* Automated Action Taken */}
                      <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Automated Fix Action
                        </span>
                        <p className="text-xs text-b-ink-soft leading-relaxed">
                          {signal.outcome}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-3xl bg-b-forest border border-b-forest-line p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-2xl font-extrabold text-b-sun">
              27+ Operational Detection Signals Active
            </h4>
            <p className="text-xs sm:text-sm text-b-cream/80 max-w-2xl leading-relaxed">
              Every signal creates an actionable 1-tap task on your Ops Board. Your team sees what needs fixing before a customer ever notices.
            </p>
          </div>

          <a
            href="/vendors/business"
            className="rounded-full bg-b-green px-7 py-3.5 text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Explore Full Vendor Ops Board</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
