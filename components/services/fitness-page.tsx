"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  Star,
  Heart,
  MessageCircle,
  Activity,
  Sparkles,
  Search,
  CalendarCheck,
  Wrench,
  Users,
  ArrowRight,
} from "lucide-react";

const offerings = [
  {
    icon: Activity,
    title: "Personal training",
    desc: "One-on-one sessions tailored to your fitness level, goals, and any injuries. No judgment, just results.",
  },
  {
    icon: Heart,
    title: "Yoga",
    desc: "Private vinyasa, hatha, or restorative flow in your living room or garden. Mats optional.",
  },
  {
    icon: Sparkles,
    title: "Pilates",
    desc: "Core-strengthening mat or reformer-style sessions adapted for home spaces with minimal equipment.",
  },
  {
    icon: Star,
    title: "Massage therapy",
    desc: "Sports recovery, deep tissue, or relaxation massage on your own table or theirs.",
  },
  {
    icon: ShieldCheck,
    title: "Nutrition coaching",
    desc: "Meal planning, macro guidance, and grocery lists built around your routine — not a fad diet.",
  },
  {
    icon: MessageCircle,
    title: "Life coaching",
    desc: "Structured breathwork, goal-setting, and accountability sessions for mental and emotional wellness.",
  },
  {
    icon: Users,
    title: "Meditation",
    desc: "Guided breathwork, body scans, and mindfulness practices for stress reduction and better sleep.",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell us your goal",
    body: "Share what you want to achieve — lose weight, build strength, recover from an injury, or just feel better. Also tell us where you want to train (home, garden, estate gym).",
  },
  {
    number: "02",
    icon: Search,
    title: "Match with the right trainer",
    body: "Browse profiles of vetted professionals who specialise in your goal. Read reviews from real clients and chat directly to discuss availability, equipment, and approach.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book your sessions",
    body: "Pick a time that works, pay per session or by package through secure escrow, and build a routine with a pro who knows your body and your goals.",
  },
];

const faqs: [string, string][] = [
  [
    "Do I need to own gym equipment?",
    "Not necessarily. Many trainers specialise in bodyweight workouts or bring their own kettlebells and bands. You can confirm equipment needs in the app chat before booking.",
  ],
  [
    "Can I buy a package of sessions?",
    "Yes, many professionals offer session packages at a discounted rate. These are securely managed through the app — no cash to handle or track.",
  ],
];

export default function FitnessPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Bouul for Fitness &amp; Wellness
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Your goals. Your space. Your schedule.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Finding the motivation to fight traffic to get to a crowded gym is the biggest hurdle to your fitness
                goals. What if the studio came to you? Bouul connects you with vetted personal trainers, yoga
                instructors, and wellness coaches who train you in your living room, garden, or local park. See their
                specialties, read client reviews, and pay securely in-app.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Book a wellness professional
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50"
                >
                  See how it works
                </Link>
              </div>
              {/* Killer alt */}
              <div className="mt-8 rounded-2xl border border-b-line bg-b-paper-raised p-4">
                <p className="text-sm leading-relaxed text-b-ink-soft">
                  <span className="font-semibold text-b-ink">No gym membership required.</span> Most trainers bring
                  their own equipment or work with bodyweight. You get the professional, the privacy, and the
                  progress — without the commute.
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
                src="/scenes/personal_training.png"
                alt="Personal training"
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
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> Identity-verified trainers
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-b-green-deep" /> Real client reviews
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="h-3.5 w-3.5 text-b-green-deep" /> Flexible pay-per-session
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Train on your terms ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Train on your terms
            </h2>
            <p className="mt-4 text-lg text-b-ink-soft max-w-xl mx-auto">
              No intimidating gym floor. No rigid class times. No packed parking lot.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Star,
                title: "Home privacy",
                body: "Train in the space where you feel most comfortable. No waiting for equipment, no locker room awkwardness, no feeling judged — just you and a professional focused entirely on your progress.",
              },
              {
                icon: CalendarCheck,
                title: "Your schedule",
                body: "Early mornings, late evenings, weekends — your trainer fits around your life, not the other way around. No commute means a 45-minute workout stays 45 minutes.",
              },
              {
                icon: Wrench,
                title: "Your equipment or theirs",
                body: "Many trainers bring their own kettlebells, bands, and mats. Others are experts in bodyweight-only programmes. You choose what works for your space and budget.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Find your practice ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Find your practice
            </h2>
            <p className="mt-4 text-lg text-b-ink-soft max-w-xl">
              Whatever your goal — strength, flexibility, recovery, or peace of mind — there is a professional who
              specialises in it.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {offerings.map((offering, i) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-green-soft">
                  <offering.icon className="h-5 w-5 text-b-green-deep" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-b-ink">{offering.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{offering.desc}</p>
              </motion.div>
            ))}
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
              Tell us your goal. We find your match.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
              >
                <span className="font-price text-sm font-semibold text-b-ink-faint">{step.number}</span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <step.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{step.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain vs solution ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              What&apos;s really keeping you from working out?
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {([
              [
                "The intimidation factor of crowded commercial gyms.",
                "Train in the privacy of your own home with a professional focused entirely on you.",
              ],
              [
                "Wasting an hour commuting to a 45-minute workout class.",
                "Your trainer or therapist comes to your specified location, saving you massive amounts of time.",
              ],
              [
                "Paying for gym memberships you never end up using.",
                "Pay per session or buy packages directly from the professional, with funds securely managed.",
              ],
            ] as [string, string][]).map(([pain, solution], i) => (
              <motion.div
                key={pain.slice(0, 20)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun-soft text-xs font-semibold text-b-sun">
                    !
                  </span>
                  <span className="text-sm font-semibold text-b-ink">The barrier</span>
                </div>
                <p className="text-b-ink-soft b-body-sm leading-relaxed mb-5">{pain}</p>
                <div className="flex items-start gap-2.5 pt-4 border-t border-b-line">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                  <p className="b-body-sm leading-relaxed text-b-ink">{solution}</p>
                </div>
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
              Common questions about booking fitness professionals
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <h3 className="text-b-ink font-semibold mb-2">{q}</h3>
                <p className="b-body-sm leading-relaxed text-b-ink-soft">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Start your journey
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Your first session is just a few taps away. Download Bouul, tell us your goal, and meet the
              professional who will help you get there.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Book a wellness professional
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
