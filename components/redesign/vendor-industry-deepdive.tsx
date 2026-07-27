"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Wrench,
  Stethoscope,
  Car,
  Camera,
  Heart,
  Dog,
  Baby,
  Hotel,
  ShoppingBag,
  UserCheck,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
} from "lucide-react";

interface IndustryData {
  id: string;
  name: string;
  icon: any;
  saPainPointHeadline: string;
  saEmpiricalData: string;
  specificPainPoints: {
    problem: string;
    bouulSolution: string;
  }[];
}

const INDUSTRY_DEEPDIVES: IndustryData[] = [
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    icon: Scissors,
    saPainPointHeadline: "Fractured Chair-Rental Identity & 20% Marketplace Commissions",
    saEmpiricalData: "Beauty pros lose up to 20% commission on platform bookings (Fresha), struggle to retain client databases under salon chair-rentals, and lose thousands to client no-shows.",
    specificPainPoints: [
      {
        problem: "Managing customer social posts & Instagram booking disconnect",
        bouulSolution: "Zola Auto-Post drafts and publishes service updates & Glimpses™ to your storefront feed, converting social views directly into booked sessions.",
      },
      {
        problem: "Salon chair-rental locks your client database under the owner's account",
        bouulSolution: "You own your custom $handle (e.g. @sipho_barber) and client roster independently, moving your reputation with you wherever you work.",
      },
      {
        problem: "High client no-show rates on walk-ins and manual WhatsApp chats",
        bouulSolution: "Bouul Escrow collects mandatory upfront deposits and sends automated SMS/WhatsApp reminders before every appointment.",
      },
    ],
  },
  {
    id: "home",
    name: "Home Services & Trades",
    icon: Wrench,
    saPainPointHeadline: "R150–R350 Lead Gouging & 20% Labor Commission",
    saEmpiricalData: "Emergency trades pay Google LSAs R150–R350 per lead, while platforms like Kandua extract a massive 20% commission on quoted labor.",
    specificPainPoints: [
      {
        problem: "Paying R150–R350 per lead upfront even when clients ghost",
        bouulSolution: "Bouul provides 100% Free Unlimited Leads. You pay ZERO lead fees and only pay an 8% commission when a job is completed.",
      },
      {
        problem: "Scope creep and uncompensated 2 AM emergency call-outs",
        bouulSolution: "Set dynamic after-hours tariffs and require visual photo diagnostics (DeepSeek V4) before dispatching team members.",
      },
      {
        problem: "Payment delays and client non-payment after job completion",
        bouulSolution: "Funds are locked in Bouul Escrow before you purchase materials or start work, guaranteeing 100% payout upon sign-off.",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    icon: Stethoscope,
    saPainPointHeadline: "Exorbitant Eminance/GoodX Licensing & Data Poverty",
    saEmpiricalData: "Medical practice management software costs thousands in ZAR monthly, while telehealth calls drop during localized load shedding.",
    specificPainPoints: [
      {
        problem: "Complex ICD-10 medical aid tariff delays and manual charting",
        bouulSolution: "POPIA-compliant digital intake forms and structured diagnostic workflows streamline pre-appointment screening.",
      },
      {
        problem: "Telehealth video calls dropping due to load shedding and client data limits",
        bouulSolution: "Offline-first appointment status caching and low-data text/audio fallback keeps consultations connected.",
      },
      {
        problem: "Home nursing paper records creating legal liability risks",
        bouulSolution: "Mobile-first digital patient charting with timestamped verification for traveling nurses and care providers.",
      },
    ],
  },
  {
    id: "auto",
    name: "Automotive & Towing",
    icon: Car,
    saPainPointHeadline: "Volatile Parts Supply Chain & Degraded Cell Tower GPS",
    saEmpiricalData: "Mobile mechanics lose track of dispatch locations when cell towers lose backup battery power during rolling blackouts.",
    specificPainPoints: [
      {
        problem: "Inaccurate WhatsApp pins during load shedding cellular tower outages",
        bouulSolution: "Real-time low-bandwidth GPS tracking and landmark-anchored dispatch pins ensure rapid roadside arrival.",
      },
      {
        problem: "Unpredictable parts supply chain delaying job durations",
        bouulSolution: "Automated inventory ledger consumption auto-deducts used parts and updates client timeline expectations.",
      },
      {
        problem: "Card machines charging 3% taxes on low-margin battery & tyre jobs",
        bouulSolution: "Direct Bouul Escrow digital payouts eliminate physical POS hardware rental fees.",
      },
    ],
  },
  {
    id: "creative",
    name: "Creative & Tech",
    icon: Camera,
    saPainPointHeadline: "USD Exchange Rate Volatility & 20% Fiverr/Upwork Cuts",
    saEmpiricalData: "Creatives pay high USD-denominated Wix/Shopify subscriptions and lose 20% of foreign currency earnings to gig aggregators.",
    specificPainPoints: [
      {
        problem: "Competing against global race-to-the-bottom pricing on Upwork/Fiverr",
        bouulSolution: "Connect directly with local South African businesses and homeowners in ZAR without international platform cuts.",
      },
      {
        problem: "Paying USD subscription fees for web hosting and portfolio sites",
        bouulSolution: "Showcase your work natively on Bouul Glimpses™ with zero monthly hosting or domain fees.",
      },
      {
        problem: "Scope creep on graphic design, video editing, and web dev projects",
        bouulSolution: "Milestone-gated escrow releases ensure you get paid as each project phase is delivered and approved.",
      },
    ],
  },
  {
    id: "fitness",
    name: "Fitness & Wellness",
    icon: Heart,
    saPainPointHeadline: "R1,669/mo Acuity Software Costs & Commercial Gym Rent",
    saEmpiricalData: "Independent trainers pay exorbitant software fees to manage group class waitlists while struggling with uncompensated travel time.",
    specificPainPoints: [
      {
        problem: "Paying up to R1,669/mo for scheduling tools that manage class capacity",
        bouulSolution: "Bouul includes class capacity scheduling, waitlists, and recurring package management natively for free.",
      },
      {
        problem: "Uncompensated travel time between mobile client homes",
        bouulSolution: "Automated geographic route clustering groups client bookings by suburb to minimize driving overhead.",
      },
      {
        problem: "Virtual training calls dropping during power outages",
        bouulSolution: "Integrated session rescheduling and asynchronous video feedback check-ins.",
      },
    ],
  },
  {
    id: "pets",
    name: "Pet Services",
    icon: Dog,
    saPainPointHeadline: "Informal Facebook Group Hiring & Zero Cancellation Safety",
    saEmpiricalData: "The absence of Rover in SA forces pet groomers and sitters onto informal WhatsApp groups, making deposit enforcement impossible.",
    specificPainPoints: [
      {
        problem: "Relying on chaotic Facebook groups with zero cancellation protection",
        bouulSolution: "Structured digital storefront with automated cancellation fee enforcement and upfront deposit collection.",
      },
      {
        problem: "Mobile grooming vans stuck in traffic between distant suburban bookings",
        bouulSolution: "Zola Auto-Assign clusters bookings by geographic zone and calculates realistic travel buffers.",
      },
      {
        problem: "Pet health liability waivers managed on paper or lost in chat",
        bouulSolution: "Digital liability waivers and vet history attachments saved directly to every booking.",
      },
    ],
  },
  {
    id: "childcare",
    name: "Childcare & Nannies",
    icon: Baby,
    saPainPointHeadline: "Prohibitive Background Check Costs & Unverified Social Hiring",
    saEmpiricalData: "Parents and caregivers bypass expensive agencies for unverified social media hiring, leaving both parties legally unprotected.",
    specificPainPoints: [
      {
        problem: "No centralized way to showcase verified CPR & background credentials",
        bouulSolution: "Bouul Qualification Registry badges your verified CPR certifications, police clearance, and references.",
      },
      {
        problem: "Informal cash payments with zero contracts or overtime tracking",
        bouulSolution: "Digital contract generation, hours logging, and automated digital escrow payouts.",
      },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Events",
    icon: Hotel,
    saPainPointHeadline: "Airbnb/Booking 20% Cuts & Inverter Capital Expenditures",
    saEmpiricalData: "Hosts and event staff suffer from 20% aggregator fees and chaotic WhatsApp shift broadcasts for event staff.",
    specificPainPoints: [
      {
        problem: "Managing event staff shifts via chaotic WhatsApp group messages",
        bouulSolution: "Zola Auto-Assign dispatches event staff based on skills and availability with live status tracking.",
      },
      {
        problem: "Event venue deposit disputes and complex catering logistics",
        bouulSolution: "Tiered deposit milestones and multi-service bundle bookings for venue + catering + bar.",
      },
    ],
  },
  {
    id: "education",
    name: "Education & Tutors",
    icon: GraduationCap,
    saPainPointHeadline: "Agency Commission Cuts & Unbillable Late Parent EFT Chasing",
    saEmpiricalData: "Tutors lose up to 30% to local tutoring agencies, while independent tutors waste hours chasing late EFT payments from parents.",
    specificPainPoints: [
      {
        problem: "Wasting unbillable hours chasing parents for late month-end EFTs",
        bouulSolution: "Lesson packages are paid upfront into Bouul Escrow, releasing automatically after each session.",
      },
      {
        problem: "Online Zoom tutoring sessions interrupted by load shedding & data costs",
        bouulSolution: "Offline lesson progress logs, CAPS/IEB curriculum resource sharing, and low-bandwidth chat.",
      },
    ],
  },
];

export function VendorIndustryDeepdive({ businessName = "" }: { businessName?: string }) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("beauty");

  const displayName = businessName.trim() ? businessName.trim() : "Your Business";
  const currentData = INDUSTRY_DEEPDIVES.find((i) => i.id === selectedIndustry) || INDUSTRY_DEEPDIVES[0];

  return (
    <section className="py-20 md:py-28 px-5 max-w-6xl mx-auto border-t border-b-line bg-b-paper">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-4 border border-emerald-500/20 shadow-sm">
          <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>Tailored Industry Solutions</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
          Why <span className="text-emerald-600">{displayName}</span> Should Join Bouul
        </h2>
        <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
          Select your industry below to see how Bouul eliminates your specific South African operational and financial pain points.
        </p>
      </div>

      {/* ── INDUSTRY SELECTOR PILLS ── */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {INDUSTRY_DEEPDIVES.map((ind) => {
          const Icon = ind.icon;
          const active = ind.id === selectedIndustry;
          return (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                active
                  ? "bg-b-forest text-b-cream shadow-lg scale-105"
                  : "bg-b-paper-raised border border-b-line text-b-ink-soft hover:text-b-ink"
              }`}
            >
              <Icon className="h-4 w-4 text-b-sun" />
              <span>{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* ── DETAILED INDUSTRY DEEP DIVE CARD ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentData.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl space-y-8"
        >
          {/* Headline & Empirical Data Banner */}
          <div className="border-b border-b-line/80 pb-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-600 uppercase tracking-widest">
              <currentData.icon className="h-4 w-4" />
              <span>{currentData.name} Sector Analysis</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-b-ink">
              {currentData.saPainPointHeadline}
            </h3>
            <p className="text-xs sm:text-sm text-b-ink-soft leading-relaxed bg-b-paper p-4 rounded-2xl border border-b-line">
              <span className="font-bold text-b-ink">SA Market Evidence: </span>
              {currentData.saEmpiricalData}
            </p>
          </div>

          {/* Problem vs. Bouul Solution Breakdown */}
          <div className="space-y-6">
            <h4 className="font-display font-extrabold text-lg text-b-ink">
              How Bouul Solves Pain Points For <span className="text-emerald-600">{displayName}</span>:
            </h4>

            <div className="grid gap-6 md:grid-cols-3">
              {currentData.specificPainPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-b-paper border border-b-line space-y-4 hover:border-emerald-500/40 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-600">
                      <XCircle className="h-4 w-4 shrink-0" />
                      <span>Traditional Friction</span>
                    </div>
                    <p className="text-xs text-b-ink font-medium leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-b-line/60 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Bouul Solution</span>
                    </div>
                    <p className="text-xs text-b-ink-soft leading-relaxed">
                      {item.bouulSolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
