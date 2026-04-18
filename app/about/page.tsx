"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutMarketplacePreview } from "@/components/about-marketplace-preview";

const marketProblems = [
  {
    title: "Customers search in too many places",
    description:
      "Local service discovery often starts in search results, old contact lists, social posts, and group chats. That makes trust hard to compare and slows down action.",
  },
  {
    title: "Good professionals are hard to judge",
    description:
      "Many skilled operators do not have polished websites, structured booking flows, or a reliable way to show recent work before a customer commits.",
  },
  {
    title: "Bookings lose context after discovery",
    description:
      "A customer might find a promising professional, then move into a separate chat, payment, tracking, and review flow. Bouul is designed to keep that journey together.",
  },
];

const values = [
  {
    title: "Discovery should be intelligent",
    description:
      "Bouul does not just list services. It learns from search intent, location, social signals, and conversion behavior to surface the right professional faster.",
  },
  {
    title: "Trust must be visible",
    description:
      "Identity checks, booking-tied reviews, status updates, and secure payments turn an uncertain booking into a more confident one.",
  },
  {
    title: "Professionals deserve tools",
    description:
      "A good marketplace also gives vendors pricing control, analytics, profile testing, and an operating system that helps them grow.",
  },
];

const audiencePillars = [
  {
    audience: "For customers",
    title: "A faster way to decide who to trust",
    body:
      "Bouul brings category search, location context, public work signals, verified profiles, booking updates, and support paths into one experience.",
    points: [
      "Search by need, not directory jargon",
      "Compare professionals with clearer trust signals",
      "Keep booking status and follow-up in one place",
    ],
  },
  {
    audience: "For professionals",
    title: "A business surface, not just a profile",
    body:
      "Professionals need tools that help them win work, manage demand, and look credible. Bouul supports that with dashboard views, content tools, repeat booking flows, and payout context.",
    points: [
      "Show availability, pricing, and service detail clearly",
      "Use analytics and creative testing to improve conversion",
      "Manage recurring work, invoices, and payouts with less admin",
    ],
  },
];

const milestones = [
  {
    year: "Origin",
    title: "Started as a better answer to messy local discovery",
    detail:
      "The early idea was simple: people should not have to guess whether a local professional is available, trustworthy, or able to complete the work.",
  },
  {
    year: "Product",
    title: "Expanded from discovery into booking confidence",
    detail:
      "The product direction grew to include verification, booking status, reviews tied to real work, vendor tools, and clearer support flows.",
  },
  {
    year: "Today",
    title: "A peer-to-peer services engine with trust and social layers",
    detail:
      "Bouul now frames local services as a connected marketplace where search, social proof, operations, and policy work together.",
  },
  {
    year: "Next",
    title: "A city-by-city network where the best local work is easy to find",
    detail:
      "The next phase is density: stronger city coverage, more reliable category pages, and better tools for professionals in each local market.",
  },
];

const principles = [
  "Verified bookings over anonymous noise",
  "Structured workflows over chat-only chaos",
  "Location-aware ranking over generic search",
  "Clear policies over hidden assumptions",
];

const cityStrategy = [
  "Start where local demand is dense enough for fast matching.",
  "Build category pages that make each city feel specific, not generic.",
  "Use repeat bookings and follows to make trusted professionals easier to find again.",
  "Let support, trust, and policy signals improve the marketplace as it grows.",
];

const proofPoints = [
  { value: "2-sided", label: "Built for customers and professionals" },
  { value: "City-led", label: "Organized around local service density" },
  { value: "Trust-first", label: "Verification, booking status, and support context" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              ABOUT BOUUL
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Local services, rebuilt around trust and momentum.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Bouul is a peer-to-peer services discovery engine for people who
              want to find trusted help quickly and for professionals who want a
              practical operating layer behind their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Download the app
              </Link>
              <Link
                href="/vendors"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Explore vendor tools
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Marketplace model
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[380px]">
              <AboutMarketplacePreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              THE PROBLEM
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Local services still depend on scattered signals.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              The work may be local, but the path to finding it is fragmented.
              Bouul exists to bring search, trust, booking, and follow-up into a
              product experience that feels easier to act on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketProblems.map((problem, index) => (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7"
              >
                <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                  Problem {index + 1}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {problem.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              WHAT WE BELIEVE
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              A better marketplace starts with better product principles.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">
                  Principle
                </div>
                <h2 className="text-white text-xl font-semibold mb-3">
                  {value.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiencePillars.map((pillar, index) => (
            <motion.article
              key={pillar.audience}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {pillar.audience}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">
                {pillar.title}
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-7">
                {pillar.body}
              </p>
              <div className="space-y-4">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              We built Bouul because discovery was too fragmented.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              The best local professionals were getting lost in generic search
              results, DMs, and social feeds. Customers wanted trust. Vendors
              wanted growth. Bouul was designed to bring both sides into one
              product layer.
            </p>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.year} className="flex gap-4 border-b border-neutral-800 pb-5">
                  <div className="w-24 flex-shrink-0 text-xs font-semibold tracking-widest text-neutral-500 uppercase pt-1">
                    {item.year}
                  </div>
                  <div>
                    <div className="text-neutral-200 font-medium mb-2">{item.title}</div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Operating principles
            </div>
            <div className="space-y-4">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{principle}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-700 bg-black/60 p-5">
              <div className="text-white font-semibold mb-2">Where we are headed</div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                The company is focused on city-by-city density, clearer service
                quality signals, and tools that help independent professionals
                operate with the polish of a larger business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div>
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              WHY CITIES FIRST
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Service marketplaces work when local density is real.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Bouul is organized around cities because trust, response time,
              availability, and service quality all depend on local context. A
              strong marketplace is not just a national list. It is a network of
              useful local pockets that get better as people book, follow, and
              return.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="space-y-5">
              {cityStrategy.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-neutral-800 pb-5 last:border-0 last:pb-0">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                    {index + 1}
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                  WHERE BOUUL FITS
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                  The goal is a marketplace people can return to, not just visit once.
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed">
                  Bouul is building toward a service graph where customers can
                  rediscover professionals they trust, vendors can understand
                  what drives bookings, and every completed job makes the next
                  decision easier.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {proofPoints.map((point) => (
                  <div key={point.value} className="rounded-2xl border border-neutral-800 bg-black p-5">
                    <div className="text-3xl font-semibold text-white mb-2">
                      {point.value}
                    </div>
                    <div className="text-neutral-500 text-sm leading-relaxed">
                      {point.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
