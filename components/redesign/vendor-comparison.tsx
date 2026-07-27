"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  DollarSign,
  CheckCircle2,
  XCircle,
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
import { Section, Eyebrow, Reveal } from "./primitives";

/* ──────────────────────────────────────────────────────────────────
   Industry-specific comparisons — every claim grounded in the
   2026 South African market research report.
   Specific competitor names deliberately excluded.
   ────────────────────────────────────────────────────────────────── */

interface IndustryComparison {
  currentWebsite: string;
  currentBooking: string;
  currentCosts: string;
  bouulWebsite: string;
  bouulBooking: string;
  bouulCosts: string;
  features: Array<{ icon: React.ElementType; label: string }>;
}

const INDUSTRY_DATA: Record<string, IndustryComparison> = {
  /* ─── Beauty & Personal Care (8 professions) ─── */
  personalCare: {
    currentWebsite:
      "An Instagram grid or a free website builder at R120–R400/m that nobody finds through search. Your real storefront is a WhatsApp status.",
    currentBooking:
      "Clients DM 'available today?' — you type the same reply 40 times a day. Marketplace platforms take up to 20% commission on new clients. Premium scheduling tools cost R600–R1,600+/m.",
    currentCosts:
      "Marketplace commissions up to 20% + card machine fees at nearly 3% per swipe + reputation management fees just to reply to reviews + load shedding forces backup power just to keep taking bookings. Total tech tax: R1,700+/m before earning a cent.",
    bouulWebsite:
      "A mobile storefront with your full service menu, portfolio photos, prices, and working hours — discoverable in search results, not hidden behind social algorithms.",
    bouulBooking:
      "Clients see real-time availability and book with one tap. Auto-reminders cut no-shows. Your AI assistant handles the FAQs so you don't type the same reply 40 times.",
    bouulCosts:
      "Flat monthly fee. Zero commission per booking. No card machine rental needed. No reputation-management ransom. Escrow payout in 24–48h. That R1,700/m tech tax? Gone.",
    features: [
      { icon: Store, label: "Visual portfolio gallery for every service" },
      { icon: Calendar, label: "Auto appointment & follow-up reminders" },
      { icon: Star, label: "Package deals & loyalty pricing" },
      { icon: Users, label: "Client history & preferences logged" },
      { icon: Camera, label: "Before/after photos per client record" },
      { icon: Wallet, label: "Deposit collection — no-show protection" },
    ],
  },

  /* ─── Healthcare (8 professions) ─── */
  healthcare: {
    currentWebsite:
      "A static practice site from years ago running at R120–R400/m, or no website at all — patients rely on directory sites that charge monthly just to let you reply to feedback.",
    currentBooking:
      "Receptionist on the phone during consulting hours juggling a paper diary — or paying premium scheduling tool fees. Telehealth calls drop during load shedding. Medical aid tariff codes make digital quoting nearly impossible.",
    currentCosts:
      "Practice management software licensing for medical aid coding + card machine fees at nearly 3% + missed-call no-shows = tens of thousands in lost revenue and software fees before a single patient is treated.",
    bouulWebsite:
      "A telehealth-enabled storefront with credential badges, patient reviews, and consult types (in-person or virtual) — found in search results.",
    bouulBooking:
      "Patients self-schedule. Your AI assistant handles intake forms, sends reminders, and triages routine vs urgent. No reception overhead for admin work.",
    bouulCosts:
      "One flat fee — replaces your practice management software AND your card terminal. Escrow secures deposits on high-value procedures. No per-claim admin burden.",
    features: [
      { icon: ShieldCheck, label: "Credential & registration badge" },
      { icon: MessageSquare, label: "Secure patient messaging" },
      { icon: Zap, label: "Telemedicine consult integration" },
      { icon: Clock, label: "Auto intake & history forms" },
      { icon: Star, label: "Verified patient reviews" },
      { icon: Wallet, label: "Deposit escrow on large procedures" },
    ],
  },

  /* ─── Home Services (16 professions) ─── */
  homeServices: {
    currentWebsite:
      "A Facebook page and a number in a neighbourhood WhatsApp group. Marketplace platforms take 20% of your quoted labour. Search-engine pay-per-lead ads cost R150–R350 per qualified call.",
    currentBooking:
      "Customers call while you're on a ladder. You miss half the calls and lose the job. Scheduling software breaks when load shedding kills the internet sync — double-bookings are common.",
    currentCosts:
      "Marketplace commission at 20% + search-engine lead ads at R150–R350/lead + card machine fees at nearly 3% + fuel to quote jobs that never materialise + reputation site fees. For a pro doing 15 jobs a month, that's thousands in platform taxes alone.",
    bouulWebsite:
      "A storefront with your full service menu, licence badges, emergency flag, and coverage area — shown in both text and voice search results.",
    bouulBooking:
      "Clients see real-time availability, book with a deposit, and send photo diagnostics before you arrive. You arrive with the right parts, every time.",
    bouulCosts:
      "Flat monthly fee. No per-lead markup. No marketplace commission. Deposit in escrow before you dispatch a van. Reviews live on your storefront — no monthly ransom.",
    features: [
      { icon: Store, label: "Licence & insurance verification badges" },
      { icon: Camera, label: "Photo diagnostics before arrival" },
      { icon: Zap, label: "Emergency service flag + surge pricing" },
      { icon: PackageCheck, label: "Recurring maintenance contracts" },
      { icon: Wrench, label: "Inventory auto-deduction on completion" },
      { icon: BarChart3, label: "Job history per address & customer" },
    ],
  },

  /* ─── Fitness & Wellness (7 professions) ─── */
  fitnessWellness: {
    currentWebsite:
      "A PDF timetable on Instagram that's out of date the day you post it. Or a basic site at R120–R400/m that nobody finds through search.",
    currentBooking:
      "DM me / check bio for link / cash at class — every single time. Premium scheduling tools that can handle class capacities cost R600–R1,600+/m, which destroys the margin of an independent trainer.",
    currentCosts:
      "Premium scheduling platform fees + card machine at nearly 3% + per-check-in platform charges + commercial studio rental + load shedding killing video sessions = trainers keep less than half of what clients pay.",
    bouulWebsite:
      "A storefront with session schedules, package pricing, instructor bios, and progress photo vault — all mobile-first and search-discoverable.",
    bouulBooking:
      "One-tap class booking. Subscriptions auto-bill. Clients see remaining sessions in their wallet. No-shows are prepaid. No more DM scheduling chaos.",
    bouulCosts:
      "Flat monthly fee. No per-check-in charge. No card terminal to rent. The R1,600+/m you were burning on scheduling? That's your whole Bouul subscription for the year.",
    features: [
      { icon: Store, label: "Session package deals & subscriptions" },
      { icon: Clock, label: "Prepaid no-show protection" },
      { icon: Camera, label: "Private progress photo tracking" },
      { icon: Star, label: "Client retention with auto packages" },
      { icon: Users, label: "Multi-instructor schedule management" },
      { icon: ShieldCheck, label: "Digital waiver & intake forms" },
    ],
  },

  /* ─── Automotive (8 professions) ─── */
  automotive: {
    currentWebsite:
      "A basic site with outdated prices, or nothing — customers find you by driving past. Search-engine lead ads cost R150–R350/click but parts supply chain delays kill your ability to quote accurately.",
    currentBooking:
      "Drop-in chaos. You can't schedule because job durations depend on parts that may or may not arrive. For mobile pros, load shedding degrades GPS — location pins fail when you're roadside.",
    currentCosts:
      "Card machine at nearly 3% on every job + fuel for quotes that never convert + search ads at R150–R350/click + cash deposit fees at the bank + parts you buy upfront and hope the client pays = you're financing the job yourself every time.",
    bouulWebsite:
      "A storefront with clear base pricing per service, add-ons, emergency flag, and your mobile service radius — found in search results.",
    bouulBooking:
      "Clients book a slot, describe the issue, and attach photos. You see the job before you accept. Emergency roadside calls route to you with GPS.",
    bouulCosts:
      "Flat monthly fee. No per-job commission. Set your own call-out and emergency rates. Escrow holds the deposit before you buy parts — you stop financing jobs yourself.",
    features: [
      { icon: Store, label: "Mobile service radius & zones" },
      { icon: Zap, label: "Emergency roadside priority flag" },
      { icon: Camera, label: "Vehicle issue photo uploads" },
      { icon: PackageCheck, label: "Parts inventory auto-deduction" },
      { icon: BarChart3, label: "Per-vehicle service history" },
      { icon: Wallet, label: "Deposit escrow on parts-heavy jobs" },
    ],
  },

  /* ─── Pet Services (4 professions) ─── */
  petServices: {
    currentWebsite:
      "Word of mouth and a Facebook album of cute pets. There's no dedicated pet-service marketplace with broad adoption in SA. You're invisible to new pet owners.",
    currentBooking:
      "WhatsApp ping-pong: 'can you do Tuesday?' 'no, Thursday?' 'full' — every single time. No digital calendar, no cancellation policy enforcement.",
    currentCosts:
      "No dedicated marketplace means you 'pay' in unpaid admin time + card machine at nearly 3% + cash deposit fees at the bank + no-show clients you can't charge because you never collected a deposit.",
    bouulWebsite:
      "A storefront with your full service menu, pet size/breed specialisations, vaccination requirements, and a gallery — discoverable in search results.",
    bouulBooking:
      "Recurring walk/groom schedules set once. Clients book recurring slots. Auto-reminders to both owner and you. No more WhatsApp roulette.",
    bouulCosts:
      "Flat monthly fee. Zero commission. Subscriptions auto-bill weekly/bi-weekly. No-show protected by prepaid booking.",
    features: [
      { icon: Store, label: "Recurring booking for regular walks/grooms" },
      { icon: ShieldCheck, label: "Vaccination & health record tracking" },
      { icon: Camera, label: "Photo updates to pet parents" },
      { icon: Star, label: "Pet profile — breed, age, special needs" },
      { icon: Clock, label: "Prepaid no-show protection" },
      { icon: Zap, label: "Subscription auto-billing" },
    ],
  },

  /* ─── Creative (8 professions) ─── */
  creative: {
    currentWebsite:
      "A portfolio site at R120–R400/m billed in foreign currency that never generates direct leads. Or you're on global gig platforms giving up 20% of every project to a platform that competes with you on price.",
    currentBooking:
      "Email ping-pong on briefs, deposits, deadlines. One client ghosts after you've done the work. Sending large files fails during load shedding.",
    currentCosts:
      "Global gig platforms at 20% + portfolio platform subscription in foreign currency at R350–R700/m + payment gateway fees at nearly 3% + invoicing software + portfolio hosting = R2,000+/m before you earn a cent from a client.",
    bouulWebsite:
      "A rich-media portfolio with service pricing, project milestones, and verified reviews — discoverable when clients search for 'photographer near me' or 'video editor'.",
    bouulBooking:
      "Clients select a package, pay a deposit into escrow, and milestones release as you deliver. Briefs attach in-chat. No chasing invoices.",
    bouulCosts:
      "Flat monthly fee. No per-project commission. Escrow means you never chase payment. Replaces your portfolio host + invoicing tool + payment processor — one subscription instead of four.",
    features: [
      { icon: Store, label: "Rich media portfolio per service" },
      { icon: PackageCheck, label: "Project milestone tracking + release" },
      { icon: Wallet, label: "Deposit & milestone escrow" },
      { icon: MessageSquare, label: "Secure file sharing in chat" },
      { icon: BarChart3, label: "Client & project history" },
      { icon: Star, label: "Verified client reviews" },
    ],
  },

  /* ─── Hospitality (4 professions) ─── */
  hospitality: {
    currentWebsite:
      "A listing on global accommodation platforms — you're a commodity in a grid, competing on price alone. Those platforms take up to 20% of every booking. If you run events, there's no good digital venue directory in SA.",
    currentBooking:
      "Double-bookings from juggling multiple platform calendars and direct WhatsApp inquiries. Event staff coordinate via chaotic WhatsApp groups. Load shedding breaks smart check-in systems.",
    currentCosts:
      "Global accommodation platforms at up to 20% commission + calendar sync subscriptions + card machine at nearly 3% + solar/inverter backup just to keep digital ratings from tanking during load shedding = a third of every reservation gone before you pay staff.",
    bouulWebsite:
      "A full venue storefront with room/space gallery, package deals (venue + catering + staff), seasonal pricing — your brand, not a commodity tile on a grid.",
    bouulBooking:
      "Unified calendar across all your spaces. Guests book with deposit. Your AI assistant handles availability checks, seasonal rates, and auto-confirmations across channels.",
    bouulCosts:
      "Flat monthly fee. Zero per-booking commission. Keep the percentage you were giving to aggregators. Escrow secures deposits on large event bookings.",
    features: [
      { icon: Store, label: "Venue gallery with package builder" },
      { icon: Calendar, label: "Multi-space calendar management" },
      { icon: Wallet, label: "Deposit & cancellation policies" },
      { icon: PackageCheck, label: "Event packages (venue + staff + catering)" },
      { icon: Star, label: "Verified event & guest reviews" },
      { icon: Users, label: "Staff roster per booking" },
    ],
  },

  /* ─── Education (1 profession) ─── */
  education: {
    currentWebsite:
      "A flyer on the school notice board or a post in a parent WhatsApp group. Global tutoring platforms don't understand the local curriculum (CAPS, IEB).",
    currentBooking:
      "WhatsApp scheduling with parents — every reschedule is a whole conversation. Load shedding drops your video lesson mid-session. Parents pay late via EFT and you spend hours chasing.",
    currentCosts:
      "Local tutoring agencies take up to half your hourly rate + video meeting subscriptions at R280/m + data costs for online sessions + payment gateway fees at nearly 3% = a tutor charging R300/hour keeps maybe half after all the deductions.",
    bouulWebsite:
      "A tutor storefront listing your subjects, levels, qualifications, curriculum focus, and hourly rate — discoverable when parents search for maths tutors nearby.",
    bouulBooking:
      "Recurring weekly lesson schedules set once. Auto-billing on term or subscription basis. Parents book, reschedule, or cancel within policy — no back-and-forth.",
    bouulCosts:
      "Flat monthly fee. Keep 100% of your hourly rate. No per-lesson commission. Recurring billing means predictable revenue, not chasing EFTs every week.",
    features: [
      { icon: Store, label: "Subject, level & curriculum tags" },
      { icon: Clock, label: "Recurring weekly lesson scheduling" },
      { icon: Wallet, label: "Subscription & term auto-billing" },
      { icon: MessageSquare, label: "Online lesson link in booking" },
      { icon: BarChart3, label: "Student progress tracking" },
      { icon: Star, label: "Parent reviews & ratings" },
    ],
  },

  /* ─── Childcare (2 professions) ─── */
  childcare: {
    currentWebsite:
      "Word of mouth or a post in a neighbourhood WhatsApp group. No dedicated childcare marketplace with broad SA adoption — formal agencies charge placement fees that price most families out.",
    currentBooking:
      "Sticky notes on the fridge. Parents call to check availability. No digital contracts, no formal payroll tracking, no way to verify a caregiver's credentials before hiring.",
    currentCosts:
      "Background check costs you can't recoup + no-show parents you can't charge + card machine at nearly 3% + cash deposit fees at the bank + no formal invoicing = unreliable income with no legal protection for either party.",
    bouulWebsite:
      "A care provider storefront with certification badges, rates, hours, and parent reviews — discoverable in search results.",
    bouulBooking:
      "Parents see real-time availability, book recurring slots, and pay via subscription or per-session. Auto check-in/out for pickup tracking.",
    bouulCosts:
      "Flat monthly fee. No per-placement or per-hour commission. Subscription revenue is predictable. No-show covered by prepaid booking.",
    features: [
      { icon: ShieldCheck, label: "First aid & background check badge" },
      { icon: Clock, label: "Recurring schedule management" },
      { icon: Wallet, label: "Subscription & per-session billing" },
      { icon: Camera, label: "Daily photo & update sharing" },
      { icon: Users, label: "Multi-child family profiles" },
      { icon: Star, label: "Parent reviews & referrals" },
    ],
  },

  /* ─── Senior Care (1 profession) ─── */
  seniorCare: {
    currentWebsite:
      "Listed with an expensive nursing agency that takes a cut, or invisible — working through informal family referrals. No central way for families to find you.",
    currentBooking:
      "WhatsApp is the 'platform' — medication schedules, shift changes, and emergency contact info all sent as texts that get buried. No formal shift tracking, no medication logging.",
    currentCosts:
      "Agency placement fees that take up to half your hourly rate + card machine at nearly 3% + no digital verification system so you pay for background checks out of pocket + cash you have to deposit at bank fees.",
    bouulWebsite:
      "A caregiver storefront with certification badges, availability hours, service types, and family reviews.",
    bouulBooking:
      "Families book recurring care schedules. Auto check-in/out for shift tracking. Medication reminders and emergency contacts stored in-app.",
    bouulCosts:
      "Flat monthly fee. No agency placement commission. Keep 100% of your rate. Recurring billing means predictable income, not feast-or-famine.",
    features: [
      { icon: ShieldCheck, label: "Care qualification & training badges" },
      { icon: Clock, label: "Recurring shift scheduling" },
      { icon: Wallet, label: "Subscription auto-billing" },
      { icon: Camera, label: "Care log & update sharing" },
      { icon: Users, label: "Family communication tools" },
      { icon: Star, label: "Family reviews & ratings" },
    ],
  },

  /* ─── Retail (4 professions) ─── */
  retail: {
    currentWebsite:
      "No dedicated marketplace exists for these service gigs in SA — gift wrapping, mystery shopping, personal shopping, product demonstrations rely entirely on word of mouth or agency sub-contracts.",
    currentBooking:
      "Agency portals that haven't been updated in years, or WhatsApp groups where shifts get called out and you race to reply 'I'm available' first.",
    currentCosts:
      "Agency/QA company takes an undisclosed margin + card machine at nearly 3% on every payment + instant EFT fees + you pay for your own travel and parking with no guarantee of reimbursement + cash deposit fees at the bank = gig margins squeezed from every direction.",
    bouulWebsite:
      "A storefront listing your service, rates, portfolio, and service area — discoverable in search results when clients look for gift wrapping, a personal shopper, or mystery shopping.",
    bouulBooking:
      "Clients book your service, describe the brief, and pay a deposit into escrow. No agency middleman. You set your own rates.",
    bouulCosts:
      "Flat monthly fee. No agency cut. No per-gig commission. Escrow means you get paid when you deliver, not 'net 30' or whenever the agency remembers.",
    features: [
      { icon: Store, label: "Service portfolio & rate card" },
      { icon: MessageSquare, label: "Client brief & requirements in chat" },
      { icon: Wallet, label: "Deposit escrow per gig" },
      { icon: Clock, label: "Availability calendar" },
      { icon: BarChart3, label: "Gig history & earnings log" },
      { icon: Star, label: "Client reviews & ratings" },
    ],
  },
};

const FALLBACK = INDUSTRY_DATA.homeServices;

const ALL_INDUSTRIES = [
  { key: "homeServices", label: "Home Services" },
  { key: "personalCare", label: "Beauty & Personal Care" },
  { key: "automotive", label: "Automotive" },
  { key: "healthcare", label: "Healthcare" },
  { key: "creative", label: "Creative" },
  { key: "fitnessWellness", label: "Fitness & Wellness" },
  { key: "hospitality", label: "Hospitality" },
  { key: "petServices", label: "Pet Services" },
  { key: "education", label: "Education" },
  { key: "childcare", label: "Childcare" },
  { key: "seniorCare", label: "Senior Care" },
  { key: "retail", label: "Retail" },
];

/* ──────────────────────────────────────────────────────────────────
   Comparison row
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
      className="grid gap-3 md:grid-cols-2"
    >
      <div className="flex items-center gap-2 md:col-span-2">
        <Icon className="h-4 w-4 text-b-green-deep" />
        <span className="text-xs font-bold uppercase tracking-widest text-b-ink-faint">
          {label}
        </span>
      </div>
      <div className="rounded-2xl border border-red-200/30 bg-red-50/30 p-4 dark:border-red-900/20 dark:bg-red-950/20">
        <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400">
          <XCircle className="h-3.5 w-3.5" />
          <span>What you have now</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-b-ink-soft">{current}</p>
      </div>
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
            Most SA pros run on a patchwork of expensive, outdated tools. Pick your
            industry and see exactly what changes.
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
                  <span className="text-b-ink">
                    That&apos;s the whole pricing story — no fine print, no &ldquo;per lead&rdquo; markup, no
                    hidden monthly fees.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
