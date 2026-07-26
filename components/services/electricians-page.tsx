"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ShieldCheck, Zap, MessageCircle, Home, Star, Clock, ArrowRight, Search, CalendarCheck, Smartphone } from "lucide-react";

// Inline data from docs/research/json/electricians.json
const data = {
  slug: "electricians",
  name: "Electricians",
  scene: "/scenes/electrical_service.png",
  tagline: "From inverter setups to fault-finding — verified electrical experts, securely booked.",
  hook_headline: "Don't leave your home's safety in the dark.",
  hook_body:
    "The main breaker keeps tripping, and the prospect of navigating a power outage without a functioning backup system is daunting. Finding an electrician who understands complex modern load-shedding setups is risky when relying on random web searches. Bouul connects you with strictly vetted electrical contractors. Track their arrival, approve the scope of work, and pay safely through digital escrow once the power is restored.",
  pains: [
    [
      "Hiring an unverified contractor who damages expensive inverters or batteries.",
      "Bouul profiles highlight specific expertise, backed by reviews from localised, verified installations.",
    ],
    [
      "Paying large upfront cash deposits and the contractor disappearing.",
      "Bouul’s escrow system secures your funds digitally; payment is only released upon successful project completion.",
    ],
    [
      "Waiting days for a Certificate of Compliance (COC) for a property sale.",
      "Filter specifically for certified professionals authorised to issue immediate compliance documentation.",
    ],
  ],
  services: [
    "Inverter and battery installation",
    "Electrical fault finding",
    "Single/Three-phase COC issuance",
    "Distribution board (DB) rewiring",
    "Generator integration",
    "Lighting installation",
    "Security system wiring",
  ],
  audience: [
    "Homeowners upgrading backup power systems",
    "Sellers requiring a rapid COC",
    "Tenants experiencing dangerous electrical faults",
  ],
  why_icons: ["ShieldCheck", "Zap", "MessageCircle"],
  why_titles: ["Certified safety standards", "Capital protection", "Prepared for load shedding"],
  why_bodies: [
    "Access professionals qualified to handle high-voltage systems, issuing legitimate compliance certificates.",
    "Never risk a cash deposit again. Your money is protected in escrow until the installation is fully functional.",
    "Connect with experts highly experienced in integrating solar, inverters, and lithium battery backup systems.",
  ],
  trust: [
    "Comprehensive identity and background verification",
    "Escrow facility mitigating all financial risk",
    "Transparent pricing on every job",
    "Publicly visible portfolio of completed local projects",
  ],
  cta: "Find a certified electrician",
  faqs: [
    [
      "Can I book someone specifically for a solar or inverter fault?",
      "Yes. The platform allows you to specify the exact nature of your backup power issue, matching you with specialists in that distinct field.",
    ],
    [
      "Is my payment safe for large-scale installations?",
      "Absolutely. Bouul’s escrow system is designed specifically to protect capital on high-value jobs until the agreed-upon milestones are met.",
    ],
    [
      "What if the work needs municipal approval?",
      "Most residential electrical work doesn’t need prior approval, but your electrician will advise on what requires a COC or inspection after the job.",
    ],
  ],
};

export default function ElectriciansPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Bouul for Electricians
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                {data.hook_headline}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">{data.hook_body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  {data.cta}
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
                  <span className="font-semibold text-b-ink">Don&apos;t gamble with your electrical safety.</span> A bad
                  wiring job can burn down what took a lifetime to build. Bouul verifies licences, COC credentials, and
                  real local experience so you&apos;re never the guinea pig.
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
                src={data.scene}
                alt="Electricians"
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
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> Licensed &amp; COC-certified
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-b-green-deep" /> Backup-power specialists
            </span>
            <span className="flex items-center gap-1.5">
              <Home className="h-3.5 w-3.5 text-b-green-deep" /> Escrow-protected payment
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Loadshedding-ready ── */}
      <section className="border-t border-b-line bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">LOADSHELDING-READY</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">
              Don&apos;t let Eskom win. We know backup power inside out.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Home,
                title: "Inverter expertise",
                body: "From single-phase backup to full-home hybrid inverters. Our electricians size, install, and commission systems that keep your lights on.",
              },
              {
                icon: Zap,
                title: "Battery storage",
                body: "Lithium-ion, lead-acid, or solar-coupled — we match you with pros who know the chemistry and safety requirements of modern battery banks.",
              },
              {
                icon: ShieldCheck,
                title: "Generator integration",
                body: "Automatic changeover switches, load management, and COC-compliant generator wiring. No more extension cords through the window.",
              },
              {
                icon: Star,
                title: "Solar readiness",
                body: "PV-ready DB boards, surge protection for sensitive electronics, and isolator installations that pass municipal inspection first time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6"
              >
                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft">
                  <item.icon className="h-5 w-5 text-b-ink" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-cream">{item.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-cream/70">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COC in a day ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">COC IN A DAY</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From fault to compliance certificate, same day.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                icon: Search,
                title: "Book",
                body: "Tell Bouul what you need — COC for a sale, a tripping breaker, or a full DB upgrade. We match you with certified electricians available today.",
              },
              {
                step: "02",
                icon: Zap,
                title: "Diagnose",
                body: "Your electrician arrives, inspects the installation, and explains the scope clearly. No surprises, no hidden call-out fees.",
              },
              {
                step: "03",
                icon: Clock,
                title: "Fix",
                body: "They carry out the required work — from a simple earth leakage replacement to a complete rewire — with full adherence to SANS 10142.",
              },
              {
                step: "04",
                icon: ShieldCheck,
                title: "Certify",
                body: "Once the work passes inspection, your electrician issues a valid COC on the spot. Download it from the app immediately.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-6"
              >
                <span className="font-price text-xs font-semibold text-b-ink-faint">{item.step}</span>
                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft">
                  <item.icon className="h-5 w-5 text-b-ink" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-ink">{item.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The old way ── */}
      <section className="border-t border-b-line bg-b-paper px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">THE OLD WAY</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Finding a safe electrician shouldn&apos;t be a shock.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {data.pains.map((item, i: number) => (
              <motion.div
                key={item[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun-soft text-xs font-semibold text-b-sun">
                    !
                  </span>
                  <span className="text-sm font-semibold text-b-ink">The problem</span>
                </div>
                <p className="text-b-ink-soft b-body-sm leading-relaxed mb-5">{item[0]}</p>
                <div className="flex items-start gap-2.5 pt-4 border-t border-b-line">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                  <p className="b-body-sm leading-relaxed text-b-ink">{item[1]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Bouul works ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From trip switch to fixed and certified, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Search,
                title: "Find who&apos;s available",
                body: "Tell Bouul what you need — \"tripping breaker\" or \"COC for a sale\" works. We show you certified electricians near you with real availability and upfront pricing.",
              },
              {
                number: "02",
                icon: CalendarCheck,
                title: "Book in seconds",
                body: "Pick your pro, choose a time that works, confirm. No phone calls, no back-and-forth.",
              },
              {
                number: "03",
                icon: Smartphone,
                title: "Track, chat, pay",
                body: "Watch your electrician on the way, chat in the app, and release payment from escrow only when the job is done right and the COC is issued.",
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

      {/* ── Common electrical jobs ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Common electrical jobs on Bouul.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {data.services.map((service: string) => (
              <div
                key={service}
                className="rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3 text-center"
              >
                <div className="text-b-ink text-sm font-medium">{service}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase text-center mb-4">
              Good for
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {data.audience.map((who: string) => (
                <span
                  key={who}
                  className="rounded-full bg-b-green-soft px-4 py-2 text-sm font-medium text-b-green-deep"
                >
                  {who}
                </span>
              ))}
            </div>
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
              Common questions about booking electricians
            </h2>
          </motion.div>
          <div className="space-y-4">
            {data.faqs.map((faq, i: number) => (
              <motion.div
                key={faq[0]}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
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
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Ready to find a certified electrician?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Join thousands of homeowners who use Bouul to book verified electrical professionals.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              {data.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
