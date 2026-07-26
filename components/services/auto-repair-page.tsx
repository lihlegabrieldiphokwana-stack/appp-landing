"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  Zap,
  MessageCircle,
  Clock,
  ArrowRight,
  Search,
  CalendarCheck,
  Smartphone,
  Store,
  Wrench,
  Car,
  Gauge,
  Cog,
  Disc3,
  Battery,
  CircleDot,
  Workflow,
  Sparkles,
} from "lucide-react";
import research from "@/docs/research/json/auto-repair.json";

const serviceIcons = [
  { icon: Gauge, label: "Diagnostics" },
  { icon: Cog, label: "Servicing" },
  { icon: Disc3, label: "Brakes" },
  { icon: Battery, label: "Battery" },
  { icon: CircleDot, label: "Tyres" },
  { icon: Workflow, label: "Panels" },
  { icon: Sparkles, label: "Detailing" },
];

export default function AutoRepairPage() {
  const c = research;

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Bouul for Auto Repair
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                {c.hook_headline}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                {c.hook_body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  {c.cta}
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50"
                >
                  See how it works
                </Link>
              </div>
              {/* Alternative killer */}
              <div className="mt-8 rounded-2xl border border-b-line bg-b-paper-raised p-4">
                <p className="text-sm leading-relaxed text-b-ink-soft">
                  <span className="font-semibold text-b-ink">
                    Don&apos;t gamble on a Facebook recommendation.
                  </span>{" "}
                  Your cousin&apos;s &quot;guy&quot; might do good work — or he
                  might disappear after taking a deposit. Bouul shows you
                  mechanics who are available, rated, and verified right now.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]"
            >
              <img
                src={c.scene}
                alt="Auto Repair"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" />{" "}
              ID-verified mechanics
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-b-green-deep" /> Upfront pricing,
              no surprises
            </span>
            <span className="flex items-center gap-1.5">
              <Car className="h-3.5 w-3.5 text-b-green-deep" /> Comes to your
              home or office
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Skip the dealership ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              SKIP THE DEALERSHIP
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Three ways to fix your car. Only one makes sense.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Dealership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="rounded-3xl border border-b-line bg-b-paper p-7"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                <Store className="h-6 w-6 text-b-ink" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-b-ink">
                Dealership
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Expensive labour rates and parts mark-ups",
                  "Full day lost dropping off and collecting",
                  "Opaque quotes that balloon once the car is on the lift",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-b-ink-soft"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-b-sun" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Independent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-b-line bg-b-paper p-7"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                <Wrench className="h-6 w-6 text-b-ink" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-b-ink">
                Independent Garage
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Hit-or-miss quality and specialisation",
                  "Cash-only transactions, no digital trail",
                  "No accountability if the fix doesn't hold",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-b-ink-soft"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-b-sun" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bouul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-3xl border-2 border-b-green bg-b-paper-raised p-7 shadow-[0_8px_32px_rgba(16,185,129,0.1)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-b-green-soft">
                <Car className="h-6 w-6 text-b-green-deep" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-b-green-deep">
                Bouul
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Mobile mechanics come to your home or office",
                  "Fixed-price quotes approved in advance — no surprises",
                  "Escrow-protected payment released only on job completion",
                  "Live tracking so you know exactly when help arrives",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-b-ink"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we fix ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              WHAT WE FIX
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Everything your car needs, on your schedule.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-b-ink-soft leading-relaxed">
              From a check-engine light to a fresh set of tyres, Bouul connects
              you with verified professionals who bring the workshop to you.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 max-w-5xl mx-auto">
            {c.services.map((service: string, i: number) => {
              const iconDef = serviceIcons[i] ?? serviceIcons[0];
              const IconComp = iconDef.icon;
              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group rounded-2xl border border-b-line bg-b-paper-raised p-5 text-center transition-all hover:border-b-green hover:shadow-[0_4px_20px_rgba(16,185,129,0.12)]"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-b-green-soft transition-colors group-hover:bg-b-green">
                    <IconComp className="h-5 w-5 text-b-green-deep transition-colors group-hover:text-b-paper" />
                  </span>
                  <p className="mt-3 text-sm font-medium text-b-ink leading-tight">
                    {service}
                  </p>
                </motion.div>
              );
            })}
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
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              HOW IT WORKS
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From rattling noise to running smooth, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: MessageCircle,
                title: "Describe the issue",
                body: "Tell Bouul what your car is doing — 'check engine light' or 'grinding when braking' works. Share a photo of your licence disc and the mechanic arrives knowing exactly which parts to bring.",
              },
              {
                number: "02",
                icon: CalendarCheck,
                title: "Approve the quote",
                body: "Review a fixed-price quote before any work begins. Approve it in the app, pick a time slot that suits you, and the mechanic heads your way.",
              },
              {
                number: "03",
                icon: Smartphone,
                title: "Track, inspect, pay",
                body: "Watch your mechanic arrive on the live map. Inspect the work, then release payment from escrow — only when you're satisfied.",
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

      {/* ── What sets a Bouul auto pro apart ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              THE BOULUL DIFFERENCE
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              What sets a Bouul auto pro apart.
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: c.why_titles[0],
                body: c.why_bodies[0],
              },
              {
                icon: Zap,
                title: c.why_titles[1],
                body: c.why_bodies[1],
              },
              {
                icon: Car,
                title: c.why_titles[2],
                body: c.why_bodies[2],
              },
              {
                icon: Clock,
                title: "Live arrival tracking",
                body: "Precise geolocation tracking for precise arrival management. No more wondering when the mechanic will show up.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-b-green-soft">
                  <item.icon className="h-6 w-6 text-b-green-deep" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-ink">
                  {item.title}
                </h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              Common questions about booking auto repair
            </h2>
          </motion.div>
          <div className="space-y-4">
            {c.faqs.map(
              (faq, i: number) => (
                <motion.div
                  key={faq[0]}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
                >
                  <h3 className="text-b-ink font-semibold mb-2">{faq[0]}</h3>
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
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Ready to get your car sorted?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Join thousands of drivers who use Bouul to book verified mechanics
              with upfront pricing — at home, at work, on your terms.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
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
