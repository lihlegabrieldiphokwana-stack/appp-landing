"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ShieldCheck, Zap, MessageCircle, Home, Car, MapPin, Key, Lock, ArrowRight, Search, CalendarCheck, Smartphone } from "lucide-react";
import research from "@/docs/research/json/locksmiths.json";

export default function LocksmithsPage() {
  const c = research;

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">Bouul for Locksmiths</div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">{c.hook_headline}</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">{c.hook_body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/download" className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]">{c.cta}</Link>
                <Link href="/how-it-works" className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50">See how it works</Link>
              </div>
              {/* Alternative killer */}
              <div className="mt-8 rounded-2xl border border-b-line bg-b-paper-raised p-4">
                <p className="text-sm leading-relaxed text-b-ink-soft">
                  <span className="font-semibold text-b-ink">Don&apos;t Google a locksmith at 2am.</span> Stranded outside is the worst time to compare anonymous call-out ads. Bouul shows you verified, rated locksmiths nearby with upfront pricing.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]">
              <img src={c.scene} alt="Locksmiths" className="w-full aspect-[4/3] object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> Criminal background checks &amp; ID verification</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-b-green-deep" /> Emergency dispatch within minutes</span>
            <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-b-green-deep" /> Cashless digital payments</span>
          </motion.div>
        </div>
      </section>

      {/* ── What to do if you're locked out ── */}
      <section className="border-t border-b-line bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">EMERGENCY PROTOCOL</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">What to do if you&apos;re locked out.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", icon: Home, title: "Check spare key locations", body: "Before you panic, check with family members, inside your bag, or with a trusted neighbour who might hold a spare. This saves time and money." },
              { step: "02", icon: Car, title: "Check your vehicle", body: "If you drove, your keys may be locked in the car. Check every door and window. Vehicle lockout services are often faster than home entry." },
              { step: "03", icon: MessageCircle, title: "Contact a neighbour", body: "A neighbour may have a spare or know a local professional they trust. This can resolve the situation faster than an anonymous Google search." },
              { step: "04", icon: Key, title: "Book a Bouul locksmith", body: "Open Bouul, tap emergency locksmith, and a verified professional is dispatched to your location. Watch them approach on the live map." },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6">
                <span className="font-price text-xs font-semibold text-b-sun">{item.step}</span>
                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft"><item.icon className="h-5 w-5 text-b-ink" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-cream">{item.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-cream/70">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The old way ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">THE OLD WAY</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">Calling a random locksmith is a gamble.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.pains.map((pair: string[], i: number) => (
              <motion.div key={pair[0]} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun-soft text-xs font-semibold text-b-sun">!</span>
                  <span className="text-sm font-semibold text-b-ink">The problem</span>
                </div>
                <p className="text-b-ink-soft b-body-sm leading-relaxed mb-5">{pair[0]}</p>
                <div className="flex items-start gap-2.5 pt-4 border-t border-b-line">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                  <p className="b-body-sm leading-relaxed text-b-ink">{pair[1]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Bouul is different ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">BOULUL DIFFERENCE</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">How Bouul is different.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Lock, title: c.why_titles[2], body: c.why_bodies[2] },
              { icon: MapPin, title: c.why_titles[0], body: c.why_bodies[0] },
              { icon: ShieldCheck, title: c.why_titles[1], body: c.why_bodies[1] },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-b-green-soft"><item.icon className="h-7 w-7 text-b-green-deep" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common locksmith jobs grid ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">Common locksmith jobs on Bouul.</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {c.services.map((service: string) => (
              <div key={service} className="rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3 text-center">
                <div className="text-b-ink text-sm font-medium">{service}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase text-center mb-4">Good for</p>
            <div className="flex flex-wrap justify-center gap-2">
              {c.audience.map((who: string) => (
                <span key={who} className="rounded-full bg-b-green-soft px-4 py-2 text-sm font-medium text-b-green-deep">{who}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">Common questions about booking locksmiths</h2>
          </motion.div>
          <div className="space-y-4">
            {c.faqs.map((faq, i: number) => (
              <motion.div key={faq[0]} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6">
                <h3 className="text-b-ink font-semibold mb-2">{faq[0]}</h3>
                <p className="b-body-sm leading-relaxed text-b-ink-soft">{faq[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">Locked out or locked in?</h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">Don&apos;t wait outside in the dark. Get a verified locksmith dispatched to your location right now.</p>
            <Link href="/download" className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors">{c.cta}</Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
