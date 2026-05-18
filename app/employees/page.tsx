"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureSection } from "@/components/feature-section";
import { EmployeeWorkboardPreview } from "@/components/employee-workboard-preview";

const employeeBenefits = [
  {
    title: "Clear assignments",
    description: "See exactly what you need to do, when, and where. No more endless group chats or missed instructions.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Your schedule, in one place",
    description: "See your shifts, appointments, and availability at a glance. Swap or update with a tap.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Track your earnings",
    description: "See completed jobs, tips, and pay period summaries. Know what you've earned without asking anyone.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Chat with your team",
    description: "Message your manager and teammates directly. Share photos, get clarifications, stay connected on the job.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const howItWorksSteps = [
  {
    step: "1",
    title: "Your employer invites you",
    description: "They add you to their Bouul team from the vendor dashboard. You'll get a notification to join.",
  },
  {
    step: "2",
    title: "Download and switch mode",
    description: "Download Bouul, create your account, and use the mode switcher to enter Employee Mode.",
  },
  {
    step: "3",
    title: "Start receiving assignments",
    description: "Tasks and appointments appear on your workboard. Accept, complete, and track — all in one place.",
  },
];

const modeSwitcherCards = [
  {
    title: "Personal mode",
    description: "Your personal Bouul account — browse services, book professionals, follow vendors, and use the app as a customer.",
    icon: (
      <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Employee mode",
    description: "Switch to see your workboard, schedule, and team chat. All your assignments and earnings live here.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    active: true,
  },
];

export default function EmployeesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero — white accent, green-tinted */}
      <section className="pt-32 pb-20 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-4">
              FOR EMPLOYEES
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Your workday,<br />
              <span className="text-emerald-400">organized.</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Get clear assignments, track your schedule, communicate with your
              team, and see your earnings — all from one place. No more scattered
              WhatsApp groups or paper schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className="px-8 py-3.5 bg-white hover:bg-neutral-200 text-black font-semibold rounded-full transition-colors"
              >
                Download Bouul
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-3.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium rounded-full transition-colors"
              >
                How it works →
              </Link>
            </div>
          </motion.div>

          {/* Workboard phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div
              className="bg-[#0a1a12] border border-emerald-500/20 rounded-[3rem] flex flex-col overflow-hidden relative shadow-2xl shadow-black/40"
              style={{ width: "min(380px, 80vw)", aspectRatio: "380/760" }}
            >
              <EmployeeWorkboardPreview />
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="w-28 h-1 bg-white/20 rounded-full backdrop-blur-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-4">
              WHAT YOU GET
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Everything you need to stay on top of your work.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Bouul&apos;s employee mode is built for the people doing the work.
              Clear, simple, and always in sync with your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {employeeBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">{benefit.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-4">
              GETTING STARTED
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Three steps to a better workday.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode switcher explainer */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-4">
              ONE APP, TWO MODES
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Your personal account and work account. In one app.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Don&apos;t juggle multiple apps. Bouul lets you switch between your
              personal profile and employee workboard with a single tap. Your
              personal bookings stay private. Your work assignments stay organized.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modeSwitcherCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${
                  card.active
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-neutral-800 bg-neutral-950"
                }`}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${card.active ? "text-white" : "text-neutral-300"}`}>
                  {card.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team communication */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-4">
                STAY CONNECTED
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Team chat, built for the job.
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Message your manager, share job photos, get quick clarifications.
                Everything stays attached to the relevant booking so context is
                never lost.
              </p>
              <div className="space-y-4">
                {[
                  "Share photos and job updates in real time",
                  "Get assignment changes instantly",
                  "All messages tied to bookings, not scattered across apps",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
            >
              {/* Mock chat */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white text-sm font-semibold">
                    TM
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Thabo M. — Manager</div>
                    <div className="text-neutral-500 text-xs">Geyser repair · Sandton</div>
                  </div>
                </div>
                <div className="ml-10 rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-neutral-200">
                  Can you check the gate motor too while you&apos;re there?
                </div>
                <div className="mr-10 rounded-2xl rounded-tr-sm bg-emerald-400 p-3 text-sm font-medium text-black">
                  Yes, I&apos;ll add it to the job card. Should take 15 min extra.
                </div>
                <div className="ml-10 rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-neutral-200">
                  Perfect. I&apos;ve updated the booking. You&apos;ll see the extra on your earnings.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Ready to join your team on Bouul?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Download the app, ask your employer to add you to their team, and
              start your first day with a clear workboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="px-10 py-5 bg-white hover:bg-neutral-200 text-black font-semibold rounded-full text-lg transition-colors"
              >
                Download Bouul
              </Link>
              <Link
                href="/vendors"
                className="px-10 py-5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium rounded-full text-lg transition-colors"
              >
                For business owners →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
