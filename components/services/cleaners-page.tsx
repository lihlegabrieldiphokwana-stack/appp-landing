"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Search,
  CalendarCheck,
  Smartphone,
  MapPin,
  Star,
  Users,
  ArrowRight,
  Home,
  Clock,
} from "lucide-react";

export default function CleanersPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">Bouul for Cleaners</div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Reclaim your weekend without the security anxiety.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                The house requires a deep clean, but the prospect of navigating platforms that send a different,
                unverified stranger every week is exhausting. You require consistency, rigorous security vetting,
                and direct communication. Bouul empowers you to select and re-book specific cleaning professionals.
                Every individual is ID-verified, and live tracking ensures you know exactly who is arriving at your gate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Book a trusted cleaner
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
                  <span className="font-semibold text-b-ink">Don&apos;t play cleaner roulette.</span> Other platforms
                  send whoever is available. Bouul lets you pick the same professional every time — vetted, reviewed,
                  and on your schedule.
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
                src="/scenes/house_cleaning.png"
                alt="Cleaners"
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
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> ID-verified with job history
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5 text-b-green-deep" /> Direct chat with your cleaner
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-b-green-deep" /> Re-book the same trusted pro
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Security-first ── */}
      <section className="border-t border-b-line bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">SECURITY-FIRST</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">
              Your home is your sanctuary. We treat it that way.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Strict identity checks",
                body: "Every cleaning professional undergoes mandatory ID verification and background screening before they can accept a single booking on Bouul.",
              },
              {
                icon: MapPin,
                title: "Live tracking for estate access",
                body: "Share your cleaner's live location with estate security. Know their name, photo, and ETA — no more guessing at the gate.",
              },
              {
                icon: Star,
                title: "Transparent reliability stats",
                body: "See cancellation rates, punctuality scores, and genuine reviews from real neighbours before you book.",
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
                <h3 className="mt-5 font-display text-lg font-bold text-b-cream">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-cream/70">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The old way ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">THE OLD WAY</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Finding a cleaner shouldn&apos;t feel like a security risk.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {([
              [
                "Platforms that randomise who comes to your home, preventing you from building trust.",
                "Bouul allows you to browse profiles, read individual reviews, and re-book your preferred professional.",
              ],
              [
                "Service providers cancelling at the last minute with no backup available.",
                "View real-time availability and rely on transparent reliability ratings before making a booking.",
              ],
              [
                "Security concerns regarding granting access to unknown individuals.",
                "Mandatory ID verification and geolocation tracking provide complete peace of mind at your estate gate.",
              ],
            ] as [string, string][]).map(([pain, solution], i) => (
              <motion.div
                key={pain.slice(0, 20)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun-soft text-xs font-semibold text-b-sun">
                    !
                  </span>
                  <span className="text-sm font-semibold text-b-ink">The problem</span>
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

      {/* ── How Bouul works ── */}
      <section className="border-t border-b-line bg-b-paper px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From booking to sparkling clean, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Search,
                title: "Find your ideal cleaner",
                body: "Tell Bouul what you need — \"weekly deep clean\" or \"move-out sanitisation\". Browse profiles with individual reviews, photos, and transparent reliability ratings.",
              },
              {
                number: "02",
                icon: CalendarCheck,
                title: "Book with confidence",
                body: "Pick your preferred professional, select a time that works, and confirm. No phone calls. No last-minute surprises.",
              },
              {
                number: "03",
                icon: Smartphone,
                title: "Track, chat, re-book",
                body: "Watch your cleaner approach on the live map, chat directly in the app, and release payment only when you are satisfied. Found someone you love? Re-book them in one tap.",
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

      {/* ── Meet your cleaner ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              MEET YOUR CLEANER
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Know who is arriving before they arrive.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Browse profiles with reviews",
                body: "Every cleaner has a detailed profile with real reviews from neighbours, photos of their previous work, and individual ratings — so you choose someone you trust.",
              },
              {
                icon: MessageCircle,
                title: "Chat directly about your needs",
                body: "Use the in-app chat to discuss specific requirements — which rooms need extra attention, whether to use your products or theirs, and special instructions for pet areas.",
              },
              {
                icon: Clock,
                title: "Re-book your favourite pro",
                body: "Found someone brilliant? Save them as a preferred cleaner and re-book with one tap. Build a lasting relationship with a professional who knows your home.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-b-green-soft">
                  <item.icon className="h-7 w-7 text-b-green-deep" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-b-ink">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto space-y-3"
          >
            {[
              "Strict identity and background checks",
              "Transparent cancellation and reliability statistics",
              "Direct messaging avoiding third-party miscommunication",
              "Secure cashless transactions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-b-line bg-b-paper p-4"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-b-green-deep" />
                <span className="text-sm font-medium text-b-ink">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services covered ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Cleaning services on Bouul.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              "Standard residential cleaning",
              "Deep spring cleaning",
              "Move-in/Move-out sanitisation",
              "Post-construction clearing",
              "Window cleaning",
              "Upholstery cleaning",
              "Carpet cleaning",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3 text-center"
              >
                <div className="text-b-ink text-sm font-medium">{service}</div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase text-center mb-4">
              Perfect for
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Busy professionals lacking domestic time",
                "Families requiring reliable weekly maintenance",
                "Tenants needing exit-inspection deep cleans",
                "Estate residents requiring vetted personnel",
              ].map((who) => (
                <span
                  key={who}
                  className="rounded-full bg-b-green-soft px-4 py-2 text-sm font-medium text-b-green-deep"
                >
                  {who}
                </span>
              ))}
            </div>
          </motion.div>
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
              Common questions about booking cleaners
            </h2>
          </motion.div>
          <div className="space-y-4">
            {([
              [
                "Will I get the same person every time?",
                "Unlike other platforms, Bouul allows you to request and re-book the specific professional you prefer, subject to their schedule.",
              ],
              [
                "How is access control managed for secure estates?",
                "You are provided with the professional's verified ID details and live tracking, streamlining the security clearance process at your gate.",
              ],
              [
                "Do they bring their own cleaning supplies?",
                "You can specify this when booking. Many professionals arrive fully equipped, while others offer labour-only rates if you provide the products.",
              ],
            ] as [string, string][]).map(([q, a], i) => (
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
              Ready to find a cleaner you can trust?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Join thousands of homeowners who use Bouul to book verified cleaning professionals.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Book a trusted cleaner
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
