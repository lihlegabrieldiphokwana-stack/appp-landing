"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Store, TrendingUp, Wallet, CalendarRange } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const perks = [
  { icon: TrendingUp, text: "AI tests your titles and photos to find what converts" },
  { icon: Wallet, text: "Flat platform fee, payouts in 24-48 hours" },
  { icon: CalendarRange, text: "Bookings, staff, and subscriptions in one dashboard" },
];

export function VendorTeaser() {
  const [name, setName] = useState("");
  const trimmed = name.trim();

  return (
    <Section className="bg-b-paper pb-20 md:pb-28">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-b-line bg-b-paper-deep px-6 py-12 md:px-14 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Run a business?</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={trimmed ? "named" : "anon"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="block"
                  >
                    {trimmed ? (
                      <>
                        Bouul, built for{" "}
                        <span className="text-b-green-deep">{trimmed}</span>.
                      </>
                    ) : (
                      <>Your name up in lights.</>
                    )}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-b-ink-soft">
                {trimmed
                  ? `Type it, see it. That's how fast ${trimmed} gets a storefront, bookings, and payouts on Bouul.`
                  : "Type your business name and watch Bouul shape itself around what you do."}
              </p>
              <ul className="mt-7 space-y-3">
                {perks.map((perk) => (
                  <li key={perk.text} className="flex items-start gap-3 text-sm text-b-ink-soft">
                    <perk.icon className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                    {perk.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-[0_20px_50px_rgba(24,39,32,0.08)] md:p-8">
              <label
                htmlFor="teaser-business-name"
                className="flex items-center gap-2 font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint"
              >
                <Store className="h-3.5 w-3.5" /> Your business name
              </label>
              <input
                id="teaser-business-name"
                type="text"
                value={name}
                maxLength={40}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Thabo's Cuts"
                className="mt-3 w-full rounded-2xl border border-b-line bg-b-paper px-5 py-4 font-display text-xl font-bold text-b-ink placeholder:font-body placeholder:text-base placeholder:font-normal placeholder:text-b-ink-faint focus:border-b-green focus:outline-none focus:ring-2 focus:ring-b-green-soft"
              />
              <Link
                href={trimmed ? `/vendors?business=${encodeURIComponent(trimmed)}` : "/vendors"}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-b-ink px-5 py-4 font-semibold text-b-paper transition-colors hover:bg-b-forest"
              >
                {trimmed ? `See Bouul for ${trimmed}` : "See what pros get"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-center text-xs text-b-ink-faint">
                Free to join. No card needed.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
