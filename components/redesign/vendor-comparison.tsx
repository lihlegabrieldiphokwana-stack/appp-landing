"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Store,
  Users,
  Wallet,
  ShieldCheck,
  Clock,
  Star,
  Zap,
  PackageCheck,
  BarChart3,
  MessageSquare,
  Calendar,
  Camera,
  Wrench,
  Sparkles,
} from "lucide-react";
import { CATEGORY_LABELS, formatRand } from "@/lib/service-catalog";
import { Section, Eyebrow, Reveal } from "./primitives";

/* ──────────────────────────────────────────────────────────────────
   Industry-specific comparisons: current pain vs Bouul reality.
   Every claim here maps to a real feature in the app.
   ────────────────────────────────────────────────────────────────── */

interface IndustryComparison {
  /** What pros actually deal with today */
  currentWebsite: string;
  currentBooking: string;
  currentCosts: string;
  /** What Bouul replaces it with */
  bouulWebsite: string;
  bouulBooking: string;
  bouulCosts: string;
  /** The real feature badges */
  features: Array<{ icon: React.ElementType; label: string }>;
}

const INDUSTRY_DATA: Record<string, IndustryComparison> = {
  personalCare: {
    currentWebsite: "A WhatsApp status or a free Wix page nobody finds",
    currentBooking: "Clients DM 'available today?' — you type the same reply 40 times",
    currentCosts: "15-30% commission to booking apps + card machine rental + ad spend just to stay visible",
    bouulWebsite: "A mobile-optimised storefront with your full service menu, pricing, portfolio photos, and working hours — discoverable in search",
    bouulBooking: "Clients see real-time availability and book with one tap. Auto-reminders cut no-shows. Zola handles the FAQs",
    bouulCosts: "Flat monthly fee, zero commission per booking. Escrow payout in 24-48h. No card machine rental needed",
    features: [
      { icon: Store, label: "Visual portfolio gallery" },
      { icon: Calendar, label: "Auto appointment reminders" },
      { icon: Star, label: "Package deals & loyalty programs" },
      { icon: Clock, label: "Recurring booking for regulars" },
      { icon: Camera, label: "Before/after photos per client" },
      { icon: Users, label: "Client history & preferences" },
    ],
  },
  healthcare: {
    currentWebsite: "A static practice website from 2018 that doesn't take bookings",
    currentBooking: "Receptionist juggling a paper diary and phone calls during consulting hours",
    currentCosts: "Practice management software licence + card machine fees + missed-call no-shows = thousands a month",
    bouulWebsite: "A telehealth-enabled storefront with credential badges, patient reviews, and both in-person + virtual booking",
    bouulBooking: "Patients self-schedule. Zola handles intake forms, sends reminders, and triages routine vs urgent. Frees your reception hours for billable work",
    bouulCosts: "One flat fee — replaces your practice mgmt software AND your card machine. Escrow secures deposits on high-value procedures",
    features: [
      { icon: ShieldCheck, label: "Credential verification badge" },
      { icon: MessageSquare, label: "Secure patient messaging" },
      { icon: Clock, label: "Auto intake & medical history" },
      { icon: Star, label: "Verified patient reviews" },
      { icon: Zap, label: "Telemedicine integration" },
      { icon: Wallet, label: "Escrow deposit security" },
    ],
  },
  homeServices: {
    currentWebsite: "A Facebook page and a number in a group — good luck being found",
    currentBooking: "Customers call while you're on a ladder. You miss half, lose the job",
    currentCosts: "20-35% to lead-gen platforms (HelloPeter, Google Guaranteed) + fuel to quote jobs that never materialise",
    bouulWebsite: "A storefront with your full service menu, licence badges, emergency-service flag, and coverage area — shows up in hybrid search results",
    bouulBooking: "Clients see your real-time availability, book with a deposit, and send photo diagnostics before you arrive. You arrive with the right parts, every time",
    bouulCosts: "Flat monthly fee. No per-lead markup. Deposit in escrow before you dispatch a van",
    features: [
      { icon: Store, label: "Licence & insurance verification" },
      { icon: Camera, label: "Photo diagnostics before arrival" },
      { icon: Clock, label: "Emergency service badge + surge pricing" },
      { icon: PackageCheck, label: "Recurring maintenance contracts" },
      { icon: Wrench, label: "Inventory auto-deduction on job completion" },
      { icon: BarChart3, label: "Job history per address" },
    ],
  },
  fitnessWellness: {
    currentWebsite: "A PDF timetable on Instagram that's always out of date",
    currentBooking: "DM me' / 'check bio for link' / 'cash at class' — a new friction every session",
    currentCosts: "Mindbody-style platforms charging per-check-in + card terminal rental + missed-class revenue lost forever",
    bouulWebsite: "A storefront with session schedules, package pricing, instructor bios, and progress photo vault — all mobile-first",
    bouulBooking: "One-tap class booking. Subscriptions auto-bill. Clients see remaining sessions in their wallet. No-shows are prepaid",
    bouulCosts: "Flat monthly subscription fee. No per-check-in charge. Your card terminal is the app — no extra hardware",
    features: [
      { icon: Store, label: "Session package deals & subscriptions" },
      { icon: Clock, label: "Auto no-show protection" },
      { icon: Camera, label: "Progress photo tracking (private)" },
      { icon: Star, label: "Client retention with package pricing" },
      { icon: Users, label: "Multi-instructor schedule" },
      { icon: ShieldCheck, label: "Waiver & intake digital forms" },
    ],
  },
  automotive: {
    currentWebsite: "A Facebook page or a basic site with outdated prices",
    currentBooking: "Drop-in chaos — customers queue or don't show, you can't plan your day",
    currentCosts: "Parts markup eaten by card machine fees + call-out pricing that's just a guess + never charging for actual diagnosis time",
    bouulWebsite: "A storefront listing every service with clear base pricing, add-ons, and your mobile service radius — found by both text and voice search",
    bouulBooking: "Clients book a slot, describe the issue, attach photos. You see the job before you accept. Emergency roadside calls route to you with GPS",
    bouulCosts: "Flat monthly fee. No per-job commission. Set your own call-out and emergency rates. Escrow holds deposit before you buy parts",
    features: [
      { icon: Store, label: "Mobile service radius mapping" },
      { icon: Clock, label: "Emergency service priority flag" },
      { icon: Camera, label: "Vehicle issue photo uploads" },
      { icon: PackageCheck, label: "Parts inventory auto-deduction" },
      { icon: BarChart3, label: "Per-vehicle service history" },
      { icon: Wallet, label: "Deposit escrow on parts-heavy jobs" },
    ],
  },
  petServices: {
    currentWebsite: "Word of mouth and a Facebook album of cute pets — zero discoverability",
    currentBooking: "WhatsApp ping-pong: 'can you do Tuesday?' 'no, Thursday?' 'full' — every single time",
    currentCosts: "Rover-style platforms taking 20% + no-show clients you can't charge + card machine rentals",
    bouulWebsite: "A storefront with your full service menu, pet size/breed specialisations, and a gallery of happy clients — showing in local search results",
    bouulBooking: "Recurring walk/groom schedules set once. Clients book recurring slots. Auto-reminders to both owner and you. No more WhatsApp roulette",
    bouulCosts: "Flat monthly fee. Zero commission. Subscriptions auto-bill weekly/bi-weekly/monthly. No-show protected by prepaid booking",
    features: [
      { icon: Store, label: "Recurring booking for regulars" },
      { icon: ShieldCheck, label: "Vaccination record tracking" },
      { icon: Camera, label: "Photo updates to pet parents" },
      { icon: Star, label: "Pet profile tracking (breed, age, needs)" },
      { icon: Clock, label: "No-show protection" },
      { icon: Zap, label: "Subscription auto-billing" },
    ],
  },
  creative: {
    currentWebsite: "A portfolio site you pay R500/m for hosting + domain + that never generates leads directly",
    currentBooking: "Email ping-pong on briefs, deposits, deadlines. One client ghosts after you've done the work",
    currentCosts: "Upwork/Fiverr taking 20% + Squarespace subscription + invoicing software + Stripe fees = R2000+/m before you earn a cent",
    bouulWebsite: "A rich-media portfolio with service pricing, project milestones, and client reviews — listed in search for 'photographer near me', 'video editor' etc.",
    bouulBooking: "Clients select a package, pay a deposit into escrow, and milestones release as you deliver. No chasing invoices. Brief attachment in-chat",
    bouulCosts: "Flat monthly fee. No per-project commission. Escrow means you never chase payment. Replaces your invoicing tool + portfolio host + payment processor",
    features: [
      { icon: Store, label: "Rich media portfolio gallery" },
      { icon: PackageCheck, label: "Project milestone tracking" },
      { icon: Wallet, label: "Deposit & milestone escrow" },
      { icon: MessageSquare, label: "Secure file sharing in chat" },
      { icon: BarChart3, label: "Client & project history" },
      { icon: Star, label: "Verified client reviews" },
    ],
  },
  hospitality: {
    currentWebsite: "A Booking.com/ Airbnb page — you're a commodity in a grid, competing on price alone",
    currentBooking: "Double-bookings from multiple platforms, manual calendar sync, guests calling at 2am",
    currentCosts: "15-25% commission per booking to OTA platforms + channel manager subscription + POS rental = eating 35%+ of every reservation",
    bouulWebsite: "A full venue storefront with room/space gallery, package deals (venue + catering + staff), seasonal pricing — your brand, not a commodity listing",
    bouulBooking: "Unified calendar across all your spaces. Guests book with deposit. Zola handles availability checks, seasonal rate adjustments, and auto-confirmations",
    bouulCosts: "Flat monthly fee. Zero per-booking commission. Keep the 15-25% you were giving to OTAs. Escrow secures deposits on large event bookings",
    features: [
      { icon: Store, label: "Venue gallery with package builder" },
      { icon: Calendar, label: "Multi-space calendar management" },
      { icon: Wallet, label: "Deposit & cancellation policies" },
      { icon: PackageCheck, label: "Event package deals (venue + staff)" },
      { icon: Star, label: "Verified event reviews" },
      { icon: Users, label: "Staff roster per booking" },
    ],
  },
  education: {
    currentWebsite: "A flyer on community boards or a basic school website — not where parents search",
    currentBooking: "WhatsApp scheduling with parents. Rescheduling is a whole conversation. Missed lessons = lost income",
    currentCosts: "Tutoring centres taking 30-50% of your hourly rate + learning platform subscriptions + card fees on term payments",
    bouulWebsite: "A tutor storefront listing subjects, levels, qualifications, and your hourly rate — discoverable when parents search for maths tutors near them",
    bouulBooking: "Recurring weekly lesson schedules set once. Auto-billing on term/subscription basis. Parents book, reschedule, or cancel within policy — no back-and-forth",
    bouulCosts: "Flat monthly fee. Keep 100% of your hourly rate. No per-lesson commission. Recurring billing means predictable revenue, not feast-or-famine",
    features: [
      { icon: Store, label: "Subject & level specialisation tags" },
      { icon: Clock, label: "Recurring weekly lesson scheduling" },
      { icon: Wallet, label: "Subscription auto-billing" },
      { icon: MessageSquare, label: "Online lesson link integration" },
      { icon: BarChart3, label: "Student progress tracking" },
      { icon: Star, label: "Parent reviews & ratings" },
    ],
  },
  childcare: {
    currentWebsite: "A referral-only word-of-mouth model — you're invisible to new families",
    currentBooking: "Sticky notes on the fridge. Parents call to check availability. Emergency backup care? Good luck",
    currentCosts: "Care.com taking 15% placement fees + card machine rental + no-show parents = unreliable income",
    bouulWebsite: "A care provider storefront with certification badges, rates, availability hours, and parent reviews — discoverable in search",
    bouulBooking: "Parents see your real-time availability, book recurring slots, and pay via subscription or per-session. Auto check-in/out for pickup tracking",
    bouulCosts: "Flat monthly fee. No per-placement or per-hour commission. Subscription revenue is predictable. No-show covered by prepaid booking",
    features: [
      { icon: ShieldCheck, label: "Background check & first aid badge" },
      { icon: Clock, label: "Recurring schedule management" },
      { icon: Wallet, label: "Subscription & per-session billing" },
      { icon: Camera, label: "Daily photo updates" },
      { icon: Users, label: "Multi-child family profiles" },
      { icon: Star, label: "Parent reviews & referrals" },
    ],
  },
};

/* Fallback for uncategorised */
const FALLBACK = INDUSTRY_DATA.homeServices;

const ALL_INDUSTRIES = [
  { key: "personalCare", label: "Beauty & Personal Care" },
  { key: "healthcare", label: "Healthcare" },
  { key: "homeServices", label: "Home Services" },
  { key: "fitnessWellness", label: "Fitness & Wellness" },
  { key: "automotive", label: "Automotive" },
  { key: "petServices", label: "Pet Services" },
  { key: "creative", label: "Creative" },
  { key: "hospitality", label: "Hospitality" },
  { key: "education", label: "Education" },
  { key: "childcare", label: "Childcare" },
];

/* ──────────────────────────────────────────────────────────────────
   Comparison row — shows current vs bouul for one pain point.
   ────────────────────────────────────────────────────────────────── */

function PainRow({
  icon: Icon,
  label,
  current,
  bouul,
}: {
  icon: React.ElementType;
  label: string;
  current: string;
  bouul: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-3 md:grid-cols-[1fr_1fr_1fr]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 md:col-span-3">
        <Icon className="h-4 w-4 text-b-green-deep" />
        <span className="text-xs font-bold uppercase tracking-widest text-b-ink-faint">
          {label}
        </span>
      </div>
      {/* Current */}
      <div className="rounded-2xl border border-red-200/30 bg-red-50/30 p-4 dark:border-red-900/20 dark:bg-red-950/20">
        <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400">
          <XCircle className="h-3.5 w-3.5" />
          <span>What you have now</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-b-ink-soft">{current}</p>
      </div>
      {/* Bouul */}
      <div className="rounded-2xl border border-emerald-200/30 bg-emerald-50/30 p-4 dark:border-emerald-900/20 dark:bg-emerald-950/20">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>With Bouul</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-b-ink-soft">{bouul}</p>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Main component
   ────────────────────────────────────────────────────────────────── */

export function VendorComparison() {
  const [industry, setIndustry] = useState("homeServices");

  const data = INDUSTRY_DATA[industry] ?? FALLBACK;

  return (
    <Section className="bg-b-paper-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Honest comparison</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            What your industry is actually paying for.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
            Most pros in South Africa are running on a patchwork of expensive,
            outdated tools. Pick your industry and see exactly what changes.
          </p>
        </Reveal>

        {/* Industry picker — scrollable chips */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ALL_INDUSTRIES.map((ind) => {
            const active = ind.key === industry;
            return (
              <button
                key={ind.key}
                type="button"
                onClick={() => setIndustry(ind.key)}
                className={
                  active
                    ? "shrink-0 rounded-full bg-b-green px-4 py-2 text-sm font-semibold text-b-forest shadow-md"
                    : "shrink-0 rounded-full border border-b-line bg-b-paper-raised px-4 py-2 text-sm font-medium text-b-ink-soft transition-colors hover:border-b-ink/30 hover:text-b-ink"
                }
              >
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Comparison cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={industry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 space-y-8"
          >
            {/* Three pain-point rows */}
            <PainRow
              icon={Globe}
              label="Your online presence"
              current={data.currentWebsite}
              bouul={data.bouulWebsite}
            />
            <PainRow
              icon={Smartphone}
              label="Booking & scheduling"
              current={data.currentBooking}
              bouul={data.bouulBooking}
            />
            <PainRow
              icon={DollarSign}
              label="Fees & hidden costs"
              current={data.currentCosts}
              bouul={data.bouulCosts}
            />

            {/* Feature badges */}
            <div className="mt-6 rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-b-green-deep">
                <Sparkles className="h-4 w-4" />
                <span>Features you get, not add-ons</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.features.map((feat) => (
                  <div
                    key={feat.label}
                    className="flex items-center gap-2.5 rounded-xl bg-b-paper-deep px-4 py-3"
                  >
                    <feat.icon className="h-4 w-4 shrink-0 text-b-green-deep" />
                    <span className="text-sm font-medium text-b-ink">{feat.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center rounded-2xl bg-b-green-soft p-5">
                <p className="text-center text-sm font-semibold text-b-green-deep">
                  Flat monthly fee. Zero commission per booking.{" "}
                  <span className="text-b-ink">That&apos;s the whole pricing story — no fine print.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
