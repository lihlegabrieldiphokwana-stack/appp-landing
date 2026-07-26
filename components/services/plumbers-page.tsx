"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ShieldCheck, Zap, MessageCircle, Home, Droplets, Clock, ArrowRight, Search, CalendarCheck, Smartphone } from "lucide-react";
import research from "@/docs/research/json/plumbers.json";

export default function PlumbersPage() {
  const c = research;

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">Bouul for Plumbers</div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">{c.hook_headline}</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">{c.hook_body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/download" className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]">{c.cta}</Link>
                <Link href="/how-it-works" className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50">See how it works</Link>
              </div>
              {/* Alternative killer */}
              <div className="mt-8 rounded-2xl border border-b-line bg-b-paper-raised p-4">
                <p className="text-sm leading-relaxed text-b-ink-soft">
                  <span className="font-semibold text-b-ink">Don&apos;t ask the neighbourhood group.</span> Your neighbour&apos;s plumber might be great — or they might not show up. Bouul shows you who&apos;s available, rated, and verified right now.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]">
              <img src={c.scene} alt="Plumbers" className="w-full aspect-[4/3] object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> ID-verified with job history</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-b-green-deep" /> Available within the hour</span>
            <span className="flex items-center gap-1.5"><Home className="h-3.5 w-3.5 text-b-green-deep" /> Escrow-protected payment</span>
          </motion.div>
        </div>
      </section>

      {/* ── Emergency? Here's what to do ── */}
      <section className="border-t border-b-line bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">EMERGENCY PROTOCOL</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">Water is pooling. Here&apos;s what to do.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", icon: Home, title: "Stop the source", body: "Turn off the main water valve or isolate the affected area. Every second of flow causes more damage." },
              { step: "02", icon: Droplets, title: "Document the leak", body: "Take clear photos of the damage and affected pipes. This helps your plumber arrive prepared with the right parts." },
              { step: "03", icon: Search, title: "Find who's available", body: "Open Bouul. We show you verified plumbers near you who are available right now, with upfront pricing." },
              { step: "04", icon: Clock, title: "Track & relax", body: "Book in two taps. Watch your plumber approach on the live map. Payment stays in escrow until the leak is fixed." },
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
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">Finding a plumber shouldn&apos;t be a project.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.pains.map((pair, i: number) => (
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

      {/* ── What sets a Bouul plumber apart ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">BOULUL DIFFERENCE</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">What sets a Bouul plumber apart.</h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "ID-verified", body: "Every plumber passes identity checks. You know exactly who is arriving at your gate." },
              { icon: Home, title: "Escrow protected", body: "Your payment is held securely. It only reaches the plumber when you confirm the job is done." },
              { icon: Zap, title: "Available now", body: "No phone tag. Bouul shows you who is available right now and their exact arrival time." },
              { icon: MessageCircle, title: "Chat with photos", body: "Snap the leak and send it. Your plumber arrives knowing what to fix and what parts to bring." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-b-green-soft"><item.icon className="h-6 w-6 text-b-green-deep" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-ink">{item.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Bouul works ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">From leak to fixed, in three steps.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { number: "01", icon: Search, title: "Find who's available", body: "Tell Bouul what you need — \"burst pipe\" or \"blocked toilet\" works. We show you verified plumbers near you with real availability and upfront prices." },
              { number: "02", icon: CalendarCheck, title: "Book in seconds", body: "Pick your pro, choose a time that works, confirm. No phone calls, no back-and-forth." },
              { number: "03", icon: Smartphone, title: "Track, chat, pay", body: "Watch your plumber on the way, chat in the app, and release payment from escrow only when the job is done right." },
            ].map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7">
                <span className="font-price text-sm font-semibold text-b-ink-faint">{step.number}</span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft"><step.icon className="h-6 w-6 text-b-ink" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{step.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services covered ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">Common plumbing jobs on Bouul.</h2>
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
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">Common questions about booking plumbers</h2>
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
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">Ready to find a plumber?</h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">Join thousands of homeowners who use Bouul to book verified plumbers.</p>
            <Link href="/download" className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors">{c.cta}</Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
