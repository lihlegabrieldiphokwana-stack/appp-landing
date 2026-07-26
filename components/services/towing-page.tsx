"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  AlertTriangle,
  MapPin,
  Truck,
  Car,
  Fuel,
  Key,
  CircleOff,
  Search,
  Smartphone,
  CalendarCheck,
} from "lucide-react";
import research from "@/docs/research/json/towing-roadside.json";

export default function TowingPage() {
  const c = research;

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── (dark forest background) */}
      <section className="relative overflow-hidden bg-b-forest px-5 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">
                Bouul for Towing &amp; Roadside
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-cream sm:text-6xl md:text-7xl">
                {c.hook_headline}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-cream/75">
                {c.hook_body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-sun px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-transform hover:scale-[1.03]"
                >
                  {c.cta}
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-b-cream/20 px-7 py-3.5 font-semibold text-b-cream transition-colors hover:border-b-cream/50"
                >
                  See how it works
                </Link>
              </div>
              {/* Trust markers */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-cream/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-b-sun" /> ID-verified
                  operator
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-b-sun" /> Live arrival
                  tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-b-sun" /> Fixed digital
                  pricing
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="overflow-hidden rounded-3xl border border-b-forest-line bg-b-forest-raised shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            >
              <img
                src={c.scene}
                alt="Roadside assistance"
                className="aspect-[4/3] w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tow truck scam warning ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="mb-4 text-xs font-semibold tracking-widest text-b-sun uppercase">
              KNOW THE SCAM
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Don&apos;t fall victim to tow truck scams
            </h2>
          </motion.div>

          <div className="mx-auto max-w-5xl space-y-6">
            {/* The scam accordion */}
            {[
              {
                icon: AlertTriangle,
                title: "The unmarked tow trucks that appear instantly",
                body: "You break down on the N1 at dusk. Within minutes, unmarked trucks swarm, their drivers pressuring you to sign a release. If you sign, your car is towed to an unauthorised yard where it is held for a R12,000+ release fee. This is a well-documented, organised practice on South African highways.",
              },
              {
                icon: ShieldCheck,
                title: "How Bouul protects you",
                body: "Open Bouul. Book a verified, ID-checked recovery vehicle. The driver's name, photo, and vehicle registration are sent to you before they arrive. Pricing is locked in the app — no signature traps, no hidden yard fees. You pay digitally through Bouul, and the operator is tracked on the live map the entire way.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-b-line bg-b-paper p-7"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      i === 0
                        ? "bg-red-100 text-red-600"
                        : "bg-b-green-soft text-b-green-deep"
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-b-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Bouul protects you (3 protection cards) ── */}
      <section className="bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="mb-4 text-xs font-semibold tracking-widest text-b-sun uppercase">
              YOUR SAFETY NET
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">
              How Bouul protects you
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: c.why_titles[1],
                body: c.why_bodies[1],
              },
              {
                icon: Truck,
                title: c.why_titles[0],
                body: c.why_bodies[0],
              },
              {
                icon: MapPin,
                title: c.why_titles[2],
                body: c.why_bodies[2],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-7 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-7 w-7 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-cream">
                  {item.title}
                </h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-cream/70">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common jobs grid ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="mb-4 text-xs font-semibold tracking-widest text-b-green-deep uppercase">
              COVERED SERVICES
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Common jobs we handle
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {c.services.map((service: string) => {
              const Icon =
                service.toLowerCase().includes("flatbed") ||
                service.toLowerCase().includes("towing") ||
                service.toLowerCase().includes("accident")
                  ? Truck
                  : service.toLowerCase().includes("jump") ||
                      service.toLowerCase().includes("battery")
                    ? Car
                    : service.toLowerCase().includes("fuel")
                      ? Fuel
                      : service.toLowerCase().includes("lockout")
                        ? Key
                        : service.toLowerCase().includes("tyre")
                          ? CircleOff
                          : Truck;
              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-b-line bg-b-paper-raised px-4 py-6 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-green-soft">
                    <Icon className="h-5 w-5 text-b-green-deep" />
                  </span>
                  <div className="text-sm font-medium text-b-ink">
                    {service}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* audience / good for */}
          <div className="mx-auto mt-14 max-w-4xl">
            <p className="mb-4 text-center text-xs font-semibold tracking-widest text-b-ink-faint uppercase">
              Good for
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {c.audience.map((who: string) => (
                <span
                  key={who}
                  className="rounded-full bg-b-sun-soft px-4 py-2 text-sm font-medium text-b-ink"
                >
                  {who}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="mb-4 text-xs font-semibold tracking-widest text-b-green-deep uppercase">
              HOW IT WORKS
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Stuck to safe, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Search,
                title: "Find who&apos;s available",
                body: "Open Bouul. We show you verified recovery operators near your location with fixed prices — no signature traps, no hidden yard fees.",
              },
              {
                number: "02",
                icon: CalendarCheck,
                title: "Book in seconds",
                body: "Pick your operator, confirm the fixed rate, and share real-time GPS so your rescuer knows exactly where you are.",
              },
              {
                number: "03",
                icon: Smartphone,
                title: "Track & pay safely",
                body: "Watch the recovery vehicle approach on the live map. Pay digitally through Bouul — no cash changes hands, no hostage yards.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
              >
                <span className="font-price text-sm font-semibold text-b-ink-faint">
                  {step.number}
                </span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <step.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">
                  {step.title}
                </h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              Common questions about roadside assistance
            </h2>
          </motion.div>
          <div className="space-y-4">
            {(c.faqs as [string, string][]).map(
              (faq, i) => (
                <motion.div
                  key={faq[0]}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
                >
                  <h3 className="mb-2 font-semibold text-b-ink">{faq[0]}</h3>
                  <p className="b-body-sm leading-relaxed text-b-ink-soft">
                    {faq[1]}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl mb-6">
              Stranded? We&apos;ve got you.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-b-cream/70">
              Don&apos;t trust an unmarked truck. Open Bouul and book a
              verified operator with fixed pricing and live tracking.
            </p>
            <Link
              href="/download"
              className="inline-block rounded-full bg-b-sun px-10 py-5 text-lg font-semibold text-b-forest shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-colors hover:opacity-90"
            >
              {c.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
