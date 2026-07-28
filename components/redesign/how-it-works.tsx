"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CalendarCheck,
  Armchair,
  Sparkles,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Lock,
  CheckCircle2,
  ArrowRight,
  Languages,
  Zap,
  Navigation,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

/* ─── 11 South African Languages ────────────────────────────────────────── */
const SA_LANGUAGES = [
  "English",
  "isiZulu",
  "Afrikaans",
  "Sesotho",
  "isiXhosa",
  "Setswana",
  "Sepedi",
  "Xitsonga",
  "siSwati",
  "tshiVenda",
  "isiNdebele",
];

const SEARCH_QUERIES = [
  "my geyser is leaking",
  "isikole samadoda clean",
  "aircon not cooling",
  "braids near sandton",
];

const PRO_CARDS = [
  {
    id: "pro-1",
    name: "Marco T. Plumbing & Heating",
    rating: "4.9",
    reviews: 128,
    price: "R850",
    eta: "15 min away",
    badge: "CIPC & Master Plumber",
    image: "/service-scenes/plumbing.png",
  },
  {
    id: "pro-2",
    name: "HomeRight Emergency Solutions",
    rating: "4.8",
    reviews: 94,
    price: "R950",
    eta: "8 min away",
    badge: "24/7 Verified Team",
    image: "/service-scenes/carpentry.png",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [queryIndex, setQueryIndex] = useState<number>(0);
  const [selectedPro, setSelectedPro] = useState<string>("pro-1");
  const [escrowReleased, setEscrowReleased] = useState<boolean>(false);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Say what you need",
      body: 'Type it the way you\'d say it — "my geyser is leaking" works. Search understands plain language in 11 South African languages.',
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Pick your pro",
      body: "Compare verified professionals near you: real reviews, upfront rand prices, response times, and portfolios of actual work.",
    },
    {
      number: "03",
      icon: Armchair,
      title: "Relax",
      body: "Pay into escrow, track your pro live on the way, and release the money only when the job is done right.",
    },
  ];

  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow tone="green" className="mb-3">
            How Bouul Works
          </Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
            Three steps between you and a done job.
          </h2>
          <p className="text-base sm:text-lg text-b-ink-soft leading-relaxed">
            From emergency home repairs to personal wellness, experience seamless booking backed by 100% escrow protection.
          </p>
        </div>
      </Reveal>

      {/* Interactive Step Switcher Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 ${
                  isActive
                    ? "border-b-green-deep bg-b-paper-raised shadow-md ring-1 ring-b-green-deep/20"
                    : "border-b-line bg-b-paper hover:border-b-line/80 hover:bg-b-paper-raised/60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-price text-sm font-bold ${
                      isActive ? "text-b-green-deep" : "text-b-ink-faint"
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-b-green-deep text-b-paper"
                        : "bg-b-sun-soft text-b-ink"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-b-ink mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-b-ink-soft line-clamp-2 leading-relaxed">
                  {step.body}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Interactive UI Showcase Card */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeStep === 0 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-b-green-deep">
                    Step 01 Interactive Preview
                  </span>
                  <h3 className="font-display text-2xl font-bold text-b-ink mt-0.5">
                    Natural Language Search & 11 SA Languages
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-b-sun-soft px-3 py-1 text-xs font-semibold text-b-ink">
                  <Languages className="h-3.5 w-3.5 text-b-green-deep" />
                  <span>11 Languages</span>
                </span>
              </div>

              {/* Simulated Search Bar */}
              <div className="rounded-2xl border border-b-line bg-b-paper p-4 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-b-line bg-b-paper-raised px-4 py-3 shadow-inner">
                  <Search className="h-4 w-4 text-b-green-deep shrink-0" />
                  <input
                    type="text"
                    value={SEARCH_QUERIES[queryIndex]}
                    readOnly
                    className="w-full bg-transparent text-sm font-semibold text-b-ink outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQueryIndex((prev) => (prev + 1) % SEARCH_QUERIES.length)}
                    className="shrink-0 text-xs font-bold text-b-green-deep hover:underline"
                  >
                    Try next query
                  </button>
                </div>

                <div className="flex items-center gap-2 px-1 text-xs text-b-green-deep font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Zola AI Parsed: Emergency Geyser Valve & Pipe Repair</span>
                </div>
              </div>

              {/* Language Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-b-ink-faint mb-2.5">
                  Supported South African Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {SA_LANGUAGES.map((lang, idx) => (
                    <span
                      key={lang}
                      className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                        idx === 0 || idx === 1 || idx === 3
                          ? "border-b-green-deep/30 bg-emerald-500/10 text-b-green-deep"
                          : "border-b-line bg-b-paper text-b-ink-soft"
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 1 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-b-green-deep">
                    Step 02 Interactive Preview
                  </span>
                  <h3 className="font-display text-2xl font-bold text-b-ink mt-0.5">
                    Compare Verified Pros & Upfront Rand Prices
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-b-green-deep">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>100% CIPC Verified</span>
                </span>
              </div>

              {/* Pro Comparison Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {PRO_CARDS.map((pro) => {
                  const isSelected = selectedPro === pro.id;
                  return (
                    <div
                      key={pro.id}
                      onClick={() => setSelectedPro(pro.id)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                        isSelected
                          ? "border-b-green-deep bg-b-paper shadow-md ring-1 ring-b-green-deep/30"
                          : "border-b-line bg-b-paper/60 hover:border-b-line/80"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={pro.image}
                            alt={pro.name}
                            className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-xs border border-b-line"
                          />
                          <div>
                            <h4 className="font-display font-bold text-b-ink text-sm leading-tight">
                              {pro.name}
                            </h4>
                            <span className="text-[11px] font-semibold text-b-green-deep">
                              {pro.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-b-line/60 text-xs">
                        <div className="flex items-center gap-1 text-b-ink font-bold">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span>{pro.rating}</span>
                          <span className="text-b-ink-faint font-normal">({pro.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-b-ink-soft">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{pro.eta}</span>
                        </div>
                        <span className="font-price font-extrabold text-b-ink text-sm">
                          {pro.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-b-ink px-6 py-2.5 text-xs font-bold text-b-paper hover:bg-b-forest transition-colors"
                >
                  <span>Proceed to Escrow Booking (Step 03)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-b-green-deep">
                    Step 03 Interactive Preview
                  </span>
                  <h3 className="font-display text-2xl font-bold text-b-ink mt-0.5">
                    100% Escrow Protection & Live En-Route Radar
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-b-sun-soft px-3 py-1 text-xs font-semibold text-b-ink">
                  <Lock className="h-3.5 w-3.5 text-b-green-deep" />
                  <span>Vault Locked</span>
                </span>
              </div>

              {/* Escrow Status Card */}
              <div className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-b-line">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-b-green-deep" />
                    <span className="text-xs font-bold text-b-ink">Escrow Deposit Locked:</span>
                  </div>
                  <span className="font-price font-extrabold text-base text-b-green-deep">R850.00</span>
                </div>

                {/* Live En-route progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-b-ink">
                      <Navigation className="h-3.5 w-3.5 text-b-green-deep animate-pulse" />
                      Marco T. Plumbing En-Route
                    </span>
                    <span className="text-b-ink-soft font-semibold">ETA: 8 mins away</span>
                  </div>

                  <div className="h-2 w-full rounded-full bg-b-paper-deep overflow-hidden">
                    <div className="h-full bg-b-green-deep w-3/4 rounded-full transition-all duration-500" />
                  </div>
                </div>

                {/* Release Escrow Action */}
                <div className="pt-2">
                  {escrowReleased ? (
                    <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-b-green-deep/20 text-xs font-bold text-b-green-deep">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Job Completed & Escrow Payment Released to Vendor!</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setEscrowReleased(true)}
                      className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-b-ink text-b-paper text-xs font-bold hover:bg-b-forest transition-colors shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Simulate Job Sign-Off & Release Escrow</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
