"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Sparkles,
  Check,
  Lightbulb,
  Users,
  ArrowRight,
  Wallet,
  ShieldCheck,
  BadgeCheck,
  Banknote,
  CalendarRange,
  Repeat,
  Zap,
} from "lucide-react";
import {
  SERVICE_CATALOG,
  CATEGORY_VALUE_PROPS,
  CATEGORY_LABELS,
  formatRand,
} from "@/lib/service-catalog";
import { Section, Eyebrow, Reveal } from "./primitives";
import { VendorIndustryDeepdive } from "./vendor-industry-deepdive";

/* ----------------------------------------------------------------
   Category guessing — match words in the business name against the
   real service catalog (names + search keywords).
---------------------------------------------------------------- */

const wordIndex: Map<string, string> = (() => {
  const index = new Map<string, string>();
  for (const service of SERVICE_CATALOG) {
    const words = [
      ...service.name.toLowerCase().split(/[^a-z]+/),
      ...service.keywords.flatMap((k) => k.toLowerCase().split(/[^a-z]+/)),
    ];
    for (const word of words) {
      if (word.length >= 4 && !index.has(word)) {
        index.set(word, service.category);
      }
    }
  }
  // Common trade words the catalog wording misses
  const extras: Record<string, string> = {
    cuts: "personalCare",
    cut: "personalCare",
    fade: "personalCare",
    hair: "personalCare",
    salon: "personalCare",
    spa: "personalCare",
    braids: "personalCare",
    clean: "homeServices",
    cleaning: "homeServices",
    plumbing: "homeServices",
    electrical: "homeServices",
    auto: "automotive",
    motors: "automotive",
    tut: "education",
    tutors: "education",
    kitchen: "foodBeverage",
    catering: "foodBeverage",
    photo: "creative",
    studio: "creative",
    fitness: "fitnessWellness",
    gym: "fitnessWellness",
    pets: "petServices",
    paws: "petServices",
  };
  for (const [word, cat] of Object.entries(extras)) index.set(word, cat);
  return index;
})();

function guessCategory(businessName: string): string | null {
  const words = businessName.toLowerCase().split(/[^a-z]+/);
  for (const word of words) {
    const hit = wordIndex.get(word);
    if (hit) return hit;
  }
  return null;
}

function possessive(name: string) {
  return name.endsWith("s") || name.endsWith("S") ? `${name}'` : `${name}'s`;
}

/* ----------------------------------------------------------------
   Hero — the business-name input is the centrepiece.
---------------------------------------------------------------- */

export function VendorExperience() {
  const searchParams = useSearchParams();
  const initialName = (searchParams.get("business") ?? "").slice(0, 40);

  const [name, setName] = useState(initialName);
  // The user's explicit chip choice; while null, the category follows the name.
  const [picked, setPicked] = useState<string | null>(null);
  const trimmed = name.trim();

  const guessed = guessCategory(trimmed);
  const category = picked ?? guessed ?? "personalCare";
  const guessedLive = !picked && !!trimmed && !!guessed;

  const valueProp = CATEGORY_VALUE_PROPS[category] ?? CATEGORY_VALUE_PROPS.unknown;
  const services = SERVICE_CATALOG.filter((s) => s.category === category);

  const headline = trimmed
    ? valueProp.headline.replace(/\bYour\b/i, possessive(trimmed))
    : valueProp.headline;

  return (
    <>
      {/* HERO */}
      <Section className="bg-b-paper pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-b-line bg-b-paper-raised px-4 py-1.5 shadow-2xs mb-4">
            <Image
              src="/bouul-favicon.png"
              alt="Bouul Icon"
              width={18}
              height={18}
              className="rounded-md"
            />
            <Eyebrow tone="green" className="tracking-widest">Bouul Merchant Suite</Eyebrow>
          </div>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-b-ink md:text-6xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={trimmed ? "named" : "anon"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {trimmed ? (
                  <>
                    <span className="text-b-green-deep">{trimmed}</span>, meet
                    your next customers.
                  </>
                ) : (
                  <>Put your name on the map.</>
                )}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-b-ink-soft">
            Type your business name and Bouul shows you exactly what it looks
            like on the platform — your services, your prices, your growth tools.
          </p>

          <div className="mx-auto mt-9 max-w-lg">
            <label htmlFor="vendor-business-name" className="sr-only">
              Your business name
            </label>
            <div className="flex items-center gap-3 rounded-2xl border-2 border-b-ink/15 bg-b-paper-raised p-2 pl-5 shadow-[0_20px_50px_rgba(24,39,32,0.10)] transition-colors focus-within:border-b-green">
              <Store className="h-5 w-5 shrink-0 text-b-ink-faint" />
              <input
                id="vendor-business-name"
                type="text"
                value={name}
                maxLength={40}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Your business name"
                className="w-full bg-transparent py-3 font-display text-xl font-bold text-b-ink placeholder:font-body placeholder:text-base placeholder:font-normal placeholder:text-b-ink-faint focus:outline-none"
              />
              <Link
                href="/download"
                className="hidden shrink-0 rounded-xl bg-b-green px-5 py-3 text-sm font-semibold text-b-forest transition-transform hover:scale-[1.03] sm:block"
              >
                Claim it free
              </Link>
            </div>
            <AnimatePresence>
              {guessedLive && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-b-green-deep"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Sounds like {CATEGORY_LABELS[category]?.toLowerCase()} — we set
                  that up for you below
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* CATEGORY PICKER + VALUE PROP ENGINE */}
      <Section className="bg-b-paper pb-20 md:pb-28">
        <div className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Object.keys(CATEGORY_LABELS).map((key) => {
            const active = key === category;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPicked(key)}
                className={
                  active
                    ? "shrink-0 rounded-full bg-b-ink px-4 py-2 text-sm font-semibold text-b-paper"
                    : "shrink-0 rounded-full border border-b-line bg-b-paper-raised px-4 py-2 text-sm font-medium text-b-ink-soft transition-colors hover:border-b-ink/30 hover:text-b-ink"
                }
              >
                {CATEGORY_LABELS[key]}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category + (trimmed ? "-named" : "")}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            {/* Value prop panel */}
            <div className="rounded-3xl border border-b-line bg-b-paper-raised p-7 md:p-9">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-b-ink md:text-3xl">
                {headline}
              </h2>
              <p className="mt-3 text-b-ink-soft">{valueProp.subheadline}</p>

              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                <div>
                  <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint">
                    Why it works
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {valueProp.keyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-b-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint">
                    Tools you get
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {valueProp.bouulFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-b-ink-soft">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-b-line pt-6">
                <p className="flex items-start gap-2.5 text-sm text-b-ink-soft">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-b-ink-faint" />
                  <span>
                    <span className="font-semibold text-b-ink">Made for:</span>{" "}
                    {valueProp.idealFor}
                  </span>
                </p>
                <p className="flex items-start gap-2.5 rounded-2xl bg-b-sun-soft p-4 text-sm text-b-ink">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-b-ink" />
                  <span>
                    <span className="font-semibold">
                      {trimmed ? `Tip for ${trimmed}:` : "Success tip:"}
                    </span>{" "}
                    {valueProp.successTip}
                  </span>
                </p>
              </div>
            </div>

            {/* Services in this category, with real base prices */}
            <div className="rounded-3xl border border-b-forest-line bg-b-forest p-7">
              <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-sun">
                {trimmed ? `Services ${trimmed} could list` : "Services you could list"}
              </p>
              <ul className="mt-4 divide-y divide-b-forest-line">
                {services.slice(0, 7).map((service) => (
                  <li key={service.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-b-cream">
                        {service.name}
                      </p>
                      <p className="truncate text-xs text-b-cream/60">{service.description}</p>
                    </div>
                    <span className="shrink-0 font-price text-sm font-semibold text-b-sun">
                      {formatRand(service.price)}
                    </span>
                  </li>
                ))}
              </ul>
              {services.length > 7 && (
                <p className="mt-3 text-xs text-b-cream/60">
                  Plus {services.length - 7} more in this category.
                </p>
              )}
              <Link
                href="/download"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-b-green px-5 py-3.5 text-sm font-semibold text-b-forest transition-transform hover:scale-[1.02]"
              >
                {trimmed ? `Create ${possessive(trimmed)} storefront` : "Create your storefront"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ── TAILORED INDUSTRY DEEP DIVE WITH BUSINESS NAME ── */}
      <VendorIndustryDeepdive businessName={trimmed} />
    </>
  );
}

/* ----------------------------------------------------------------
   Static vendor sections (no personalization).
---------------------------------------------------------------- */

const operatingModels = [
  {
    icon: Store,
    title: "Service storefront",
    body: "List services with pricing, availability, and photos. Customers browse, book, and pay in one flow.",
  },
  {
    icon: Users,
    title: "Team mode",
    body: "Route work to staff, assign jobs, and keep calendars aligned. Employees get their own workboard.",
  },
  {
    icon: Repeat,
    title: "Subscriptions",
    body: "Weekly, bi-weekly, or monthly recurring services. Predictable revenue, automatic billing.",
  },
  {
    icon: Zap,
    title: "Quick jobs",
    body: "Small fixed-price jobs with fast turnaround — perfect for handyman work and one-off requests.",
  },
];

export function VendorOperating() {
  return (
    <Section className="bg-b-paper py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <Eyebrow>How you can run it</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          One platform, four ways to operate.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {operatingModels.map((model, i) => (
          <Reveal key={model.title} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-b-line bg-b-paper-raised p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-b-green-soft">
                <model.icon className="h-5 w-5 text-b-green-deep" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-b-ink">{model.title}</h3>
              <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{model.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const feeRows = [
  { label: "Platform fee", value: "Flat, not a percentage", note: "No surprise commission cuts" },
  { label: "Payouts", value: "24-48 hours", note: "After job completion, from escrow" },
  { label: "Hidden costs", value: "None", note: "What you see is what you keep" },
];

export function VendorMoney() {
  return (
    <section className="bg-b-forest px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow tone="sun">Your money</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-b-cream md:text-5xl">
            You set the price. You keep the margin.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-cream/70">
            Base rates, surge pricing for peak times, off-peak discounts, travel
            fees — all yours to control from the dashboard. Payments are held in
            escrow and released straight to you.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-b-cream/70">
            <li className="flex items-start gap-3">
              <Banknote className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Surge pricing that respects consumer-protection rules
            </li>
            <li className="flex items-start gap-3">
              <CalendarRange className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Off-peak incentives that fill slow days without killing margin
            </li>
            <li className="flex items-start gap-3">
              <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Escrow protection on every single booking
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-7">
            <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-cream/50">
              Transparent fees
            </p>
            <div className="mt-4 divide-y divide-b-forest-line">
              {feeRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-semibold text-b-cream">{row.label}</p>
                    <p className="text-xs text-b-cream/60">{row.note}</p>
                  </div>
                  <p className="text-right font-price text-sm font-semibold text-b-sun">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Verified customers only",
    body: "Every customer is identity-verified before they can book. No anonymous requests, no spam.",
  },
  {
    icon: ShieldCheck,
    title: "FICA and ID compliant",
    body: "Built-in compliance for South African regulations, so your business stays protected.",
  },
  {
    icon: Wallet,
    title: "Escrow payouts",
    body: "Funds are secured while you work and released within 24-48 hours of completion. No chasing payments.",
  },
];

export function VendorTrust() {
  return (
    <Section className="bg-b-paper py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <Eyebrow>Protection</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Bouul has your back.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {trustItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-b-line bg-b-paper-raised p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-b-sun-soft">
                <item.icon className="h-5 w-5 text-b-ink" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-b-ink">{item.title}</h3>
              <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function VendorCta() {
  return (
    <Section className="bg-b-paper pb-20 md:pb-28">
      <Reveal>
        <div className="rounded-[2rem] bg-b-paper-deep px-6 py-14 text-center md:px-14 md:py-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-b-ink-soft">
            Create your profile, list your first service, and take your first
            booking — free, in one afternoon.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-b-green px-8 py-4 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Create your free profile
            </Link>
            <Link
              href="/employees"
              className="w-full rounded-full border border-b-ink/20 px-8 py-4 font-semibold text-b-ink transition-colors hover:border-b-ink/50 sm:w-auto"
            >
              For your team
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
