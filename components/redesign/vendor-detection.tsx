"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Search,
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
  RefreshCw,
  MessageSquare,
  FileText,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

/* ──────────────────────────────────────────────────────────────────
   Detection signals — real things Bouul monitors automatically.
   Grouped by business area with what triggers, what's detected,
   and why it matters.
   ────────────────────────────────────────────────────────────────── */

interface DetectionArea {
  id: string;
  icon: React.ElementType;
  color: string;
  label: string;
  preamble: string;
  signals: Array<{
    label: string;
    what: string;
    why: string;
    outcome: string;
  }>;
}

const DETECTION_AREAS: DetectionArea[] = [
  {
    id: "storefront",
    icon: Store,
    color: "text-emerald-600",
    label: "Storefront Health",
    preamble:
      "Most pros don't know their storefront is incomplete until a customer bounces. Bouul scores every page out of 10 and tells you exactly what's missing.",
    signals: [
      {
        label: "Completeness gaps",
        what: "Missing logo, cover image, description, phone number, or search keywords on your storefront. Each missing field drops your score.",
        why: "A storefront without a logo or description converts at a fraction of one that's complete — customers decide in seconds whether to book.",
        outcome: "Auto-create a fix task with the exact fields needed. Your score improves the moment each one is added.",
      },
      {
        label: "Service listing gaps",
        what: "Services live without gallery images or search keywords. The listing exists but won't show up in relevant searches.",
        why: "A service with no photos and no discoverability tags might as well not exist — it passes every database query but fails every customer search.",
        outcome: "A completeness task is assigned. One upload and a few tags turn an invisible listing into a bookable asset.",
      },
      {
        label: "Missing post media",
        what: "A text post was published without any attached image or video — zero media coverage on publish.",
        why: "Posts without media get negligible engagement. In a visual marketplace, text-only posts don't earn their placement on the feed.",
        outcome: "An editorial task is created. Add media, and the post gets the engagement it deserves.",
      },
    ],
  },
  {
    id: "dispatch",
    icon: Truck,
    color: "text-cyan-600",
    label: "Dispatch & Fulfillment",
    preamble:
      "Orders get assigned, but what happens next? Bouul watches the entire fulfillment loop and flags every gap before it becomes a customer complaint.",
    signals: [
      {
        label: "Unaccepted assignments",
        what: "An order was assigned to an employee who hasn't accepted it yet. The clock is ticking.",
        why: "Every minute an assignment sits unaccepted is a minute the customer isn't sure their booking is real. In urgent trades (plumbing, electrical, locksmith), that hesitation costs the job.",
        outcome: "Auto-escaped alert after a configurable window. If nobody accepts, the system can offer it to the next available employee.",
      },
      {
        label: "Scheduling conflicts",
        what: "An employee has overlapping assignments — same time slot, two different jobs. One of them won't happen.",
        why: "Double bookings erode trust faster than almost anything. One no-show from a double-booked slot and that customer never comes back.",
        outcome: "Flagged as a conflict task. The vendor or employee resolves by reassigning one of the jobs before the overlap becomes a missed appointment.",
      },
      {
        label: "Substitution needed",
        what: "The customer's preferred employee is unavailable, and a substitute was auto-assigned. The handoff needs confirmation.",
        why: "When a regular client requests their usual person and gets someone else with no heads-up, it feels like a downgrade — even if the substitute is just as qualified.",
        outcome: "A substitution notice is created. The vendor reviews and confirms, or reassigns to another suitable employee.",
      },
      {
        label: "Pre-arrival confirmation",
        what: "An employee is en route but hasn't confirmed readiness (parts on hand, correct address, client contact confirmed).",
        why: "Arriving without the right parts or without confirming the address is the #1 cause of same-day reschedules. One preventable reschedule wipes your margin on that job.",
        outcome: "A readiness task appears before the arrival window closes. Confirm once, roll with confidence.",
      },
      {
        label: "Missing tracking",
        what: "A courier or delivery order has no tracking number or carrier set — the customer can't see where their service/package is.",
        why: "In a market where customers expect Uber-level tracking, silence reads as 'we forgot about you.'",
        outcome: "A tracking task is created. Add the number, and the customer gets an automated notification with their tracking link.",
      },
      {
        label: "Live status drift",
        what: "An in-progress assignment hasn't had a status update beyond the expected window — the system doesn't know if it's on track.",
        why: "If you don't know a job is running late until the customer complains, you're reactive instead of proactive. Every late notification is a preventable bad review.",
        outcome: "An at-risk signal fires. The employee updates their status, or the vendor gets a heads-up to check in.",
      },
    ],
  },
  {
    id: "disputes",
    icon: Scale,
    color: "text-rose-600",
    label: "Customer Disputes",
    preamble:
      "Disputes don't wait for you to notice them. Bouul tracks every case from opening to verdict and flags the moments that need your attention.",
    signals: [
      {
        label: "Outstanding response",
        what: "A customer filed a dispute and the vendor hasn't responded yet — critical urgency.",
        why: "Disputes escalate automatically if left unanswered. A quick response often resolves the issue before it reaches a jury. Silence reads as guilt.",
        outcome: "A critical-urgency task fires the moment a response is due. The vendor drafts and submits directly from the task.",
      },
      {
        label: "Evidence gaps",
        what: "A dispute case is missing required evidence — photos, messages, or booking details that the jury needs to rule.",
        why: "Without evidence, the jury rules against the vendor by default. Most cases are winnable with the right documentation.",
        outcome: "A blocked task lists exactly what evidence is missing. Upload it, and the case becomes reviewable.",
      },
      {
        label: "Jury deadline approaching",
        what: "The jury has been assigned and their deliberation window is about to close.",
        why: "If the jury times out, the dispute resolves in the customer's favour by default. A few hours' notice can mean the difference between a fair ruling and an automatic loss.",
        outcome: "A monitoring task keeps the case visible until the verdict is in — no surprises.",
      },
      {
        label: "Verdict follow-up",
        what: "The jury has issued a verdict. The vendor needs to review the outcome and decide on next steps.",
        why: "After a verdict, there's a narrow window to accept, appeal, or arrange the resolution. Letting it lapse creates enforcement problems.",
        outcome: "A follow-up task surfaces the verdict with the key details. Review and close in one tap.",
      },
    ],
  },
  {
    id: "hygiene",
    icon: ClipboardCheck,
    color: "text-green-600",
    label: "Operations Hygiene",
    preamble:
      "The daily stuff that's easy to skip and costly to ignore. Bouul turns recurring operational tasks into a checklist that can't be forgotten.",
    signals: [
      {
        label: "Open / close checklists",
        what: "The daily open-for-business or end-of-day close tasks haven't been completed. SLA breach signals fire when they're overdue.",
        why: "An unprepared storefront or unclosed day's books cascade into forgotten prep, uncleared tabs, and next-morning chaos.",
        outcome: "A recurring task with SLA monitoring. Miss it, and an at-risk signal fires before it becomes a problem.",
      },
      {
        label: "Unanswered inquiries",
        what: "A customer sent a booking inquiry or question and hasn't received a response within the expected window.",
        why: "Every unanswered inquiry is a lost booking. In competitive categories, customers message three pros at once and book the first one who replies.",
        outcome: "A follow-up task is created. Reply from the task, and the conversation continues where it left off.",
      },
      {
        label: "Unreplied reviews",
        what: "Customers have left reviews — both positive and negative — that haven't been acknowledged.",
        why: "Acknowledging a positive review builds loyalty. Replying to a negative one publicly shows future customers you care. Ignoring them signals the opposite.",
        outcome: "A review-response task lists every unreplied review. Respond to all of them from one surface.",
      },
      {
        label: "Stale availability",
        what: "Your availability status or working hours haven't been updated recently enough to trust.",
        why: "Nothing frustrates a customer more than booking a time slot that the vendor isn't actually available for. Stale availability is a cancellation waiting to happen.",
        outcome: "A freshness task prompts you to confirm or update your hours. Five seconds of work prevents hours of rescheduling.",
      },
      {
        label: "Expiring policies",
        what: "An insurance certificate, trade licence, or business registration is approaching its expiry date.",
        why: "Expired credentials can get your storefront delisted or flagged in search. In regulated trades (electrical, gas, medical), it's a legal exposure.",
        outcome: "A policy-expiry task gives you weeks of notice. Upload the renewed document and the badge stays active.",
      },
      {
        label: "Equipment readiness",
        what: "Tools, equipment, or supplies haven't been confirmed as ready for the upcoming day's bookings.",
        why: "Arriving at a job without a working tool or enough consumables means either a delay or a second trip — both destroy margin on that booking.",
        outcome: "A readiness checklist surfaces before the first job of the day. Confirm everything is good, or flag what needs attention.",
      },
    ],
  },
  {
    id: "metrics",
    icon: BarChart3,
    color: "text-indigo-600",
    label: "Performance Metrics",
    preamble:
      "Your business generates data with every booking. Bouul monitors the trends that matter and alerts you when something shifts — no dashboard-diving required.",
    signals: [
      {
        label: "Exception rate spike",
        what: "The rate of cancellations, disputes, or no-shows on your orders has crossed a threshold — something is off.",
        why: "A sudden spike in exceptions usually traces to a specific cause: a service page misrepresents what's offered, a particular employee is underperforming, or pricing shifted. You can't fix what you don't measure.",
        outcome: "An alert surfaces with the exception rate and a link to the affected orders. One review session can identify and fix the root cause.",
      },
      {
        label: "Slow acceptance pattern",
        what: "Employees are taking longer than usual to accept assignments — the average response time is creeping up.",
        why: "Slow acceptance is often the first sign of disengagement, unclear expectations, or a scheduling mismatch. Left unchecked, it becomes missed orders.",
        outcome: "A metrics alert flags the trend. The vendor can address it in a team briefing or adjust the auto-assignment configuration.",
      },
      {
        label: "Employee delay pattern",
        what: "A specific employee has a recurring pattern of late arrivals or extended job durations — beyond normal variance.",
        why: "One employee consistently running late affects not just their jobs but every downstream booking. Customers don't care whose fault it is — they care that their appointment started late.",
        outcome: "The pattern is surfaced as an operational signal. The vendor can review, coach, or adjust scheduling for that employee.",
      },
      {
        label: "SLA breach review",
        what: "A service-level agreement was missed — a response took too long, a job went past its promised window, or a follow-up was never completed.",
        why: "SLA breaches are the closest thing to a contractual failure in a service marketplace. Each one erodes trust and can trigger dispute escalations.",
        outcome: "A review task captures what breached, when, and why. Close the loop so it doesn't happen again.",
      },
      {
        label: "Coverage gap",
        what: "There aren't enough employees scheduled or available to cover the booked orders for an upcoming shift window.",
        why: "A coverage gap means either a customer gets cancelled on or an employee gets overloaded — both lead to bad outcomes. A gap detected 48 hours ahead is fixable. One detected 30 minutes ahead is a crisis.",
        outcome: "An alert fires with enough lead time to adjust schedules, find cover, or notify affected customers before they arrive.",
      },
    ],
  },
  {
    id: "content",
    icon: Sparkles,
    color: "text-amber-600",
    label: "Content & Discovery",
    preamble:
      "Your content is how customers find you. Bouul watches what's being published, how it performs, and when it needs attention to keep you discoverable.",
    signals: [
      {
        label: "Comment burst",
        what: "A post suddenly received a spike in comments — far more than normal engagement.",
        why: "A comment burst can mean the post is going viral (great) or attracting spam or negative sentiment (bad). Either way, you want to know immediately.",
        outcome: "A moderation review task surfaces the post with the comment count. Review, respond, or moderate in one flow.",
      },
      {
        label: "Publishing workflow",
        what: "Content has been drafted and is ready to advance through the publishing pipeline — approvals, scheduling, or going live.",
        why: "Drafted content that never publishes is wasted effort. A stalled publishing workflow means your feed stays stale and customers see the same old posts.",
        outcome: "A publishing task keeps the workflow moving. Approve, schedule, or publish — the next step is always clear.",
      },
      {
        label: "Listing freshness",
        what: "A service listing hasn't been reviewed or updated recently — prices, photos, or descriptions may be stale.",
        why: "Outdated listings erode trust. Customers who see a price from 2023 or photos from a different season assume you don't care about accuracy.",
        outcome: "A freshness review task prompts you to review and confirm the listing. Five minutes of updates keeps the listing competitive.",
      },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────────── */

export function VendorDetection() {
  const [openArea, setOpenArea] = useState<string | null>(null);

  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>What Bouul watches</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            Your business runs on autopilot.{" "}
            <span className="text-b-green-deep">We watch the gaps.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
            Bouul doesn&apos;t just list your services — it monitors your entire operation
            and creates assignments the moment something needs your attention.
            No dashboards to refresh, no spreadsheets to audit. The system sees
            it and tells you.
          </p>
        </Reveal>

        {/* ── 6 detection areas ── */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DETECTION_AREAS.map((area) => (
            <Reveal key={area.id}>
              <button
                type="button"
                onClick={() =>
                  setOpenArea(openArea === area.id ? null : area.id)
                }
                className="group w-full text-left"
              >
                <div
                  className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                    openArea === area.id
                      ? "border-b-green-deep/40 bg-b-green-soft shadow-md"
                      : "border-b-line bg-b-paper-raised hover:border-b-ink/20"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                        openArea === area.id
                          ? "bg-b-green-deep text-white"
                          : "bg-b-paper-deep text-b-ink-faint"
                      }`}
                    >
                      <area.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-b-ink">
                        {area.label}
                      </h3>
                      <p className="text-xs text-b-ink-faint">
                        {area.signals.length} detection
                        {area.signals.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Preamble */}
                  <p className="mt-3 text-sm leading-relaxed text-b-ink-soft">
                    {area.preamble}
                  </p>
                </div>
              </button>

              {/* Expanded signal detail */}
              <AnimatePresence>
                {openArea === area.id && (
                  <motion.div
                    key={`detail-${area.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-4 pb-2">
                      {area.signals.map((signal, i) => (
                        <motion.div
                          key={signal.label}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="rounded-2xl border border-b-line bg-b-paper-raised p-5"
                        >
                          <div className="flex items-center gap-2">
                            <Scan className="h-3.5 w-3.5 text-b-green-deep" />
                            <span className="text-xs font-bold uppercase tracking-wider text-b-green-deep">
                              Signal
                            </span>
                          </div>
                          <h4 className="mt-2 font-display text-base font-bold text-b-ink">
                            {signal.label}
                          </h4>

                          <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-b-ink-soft">
                            <div className="flex items-start gap-2">
                              <Eye className="mt-0.5 h-4 w-4 shrink-0 text-b-ink-faint" />
                              <span>
                                <span className="font-semibold text-b-ink">
                                  What Bouul watches:{" "}
                                </span>
                                {signal.what}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                              <span>
                                <span className="font-semibold text-b-ink">
                                  Why it matters:{" "}
                                </span>
                                {signal.why}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                              <span>
                                <span className="font-semibold text-b-ink">
                                  What happens:{" "}
                                </span>
                                {signal.outcome}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>

        {/* ── Bottom summary ── */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-b-forest-line bg-b-forest p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold text-b-sun">
                  {DETECTION_AREAS.reduce((s, a) => s + a.signals.length, 0)}+
                </div>
                <p className="mt-1 text-sm text-b-cream/60">
                  Detection signals across{" "}
                  {DETECTION_AREAS.length} operational areas
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold text-b-sun">
                  2
                </div>
                <p className="mt-1 text-sm text-b-cream/60">
                  Cross-cutting signal types — at-risk &amp; SLA breach
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold text-b-sun">
                  Auto
                </div>
                <p className="mt-1 text-sm text-b-cream/60">
                  Assignments created by detection — no manual auditing
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-b-cream/50">
              Every signal creates an actionable assignment in the ops board.
              Your team sees what needs doing. Nothing falls through the cracks.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
