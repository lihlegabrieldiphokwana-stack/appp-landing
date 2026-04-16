"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const values = [
  {
    title: "Discovery should be intelligent",
    description:
      "Bouul does not just list services. It learns from search intent, location, social signals, and conversion behavior to surface the right professional faster.",
  },
  {
    title: "Trust must be visible",
    description:
      "Identity checks, booking-only reviews, live tracking, and secure payments turn an uncertain booking into a confident one.",
  },
  {
    title: "Professionals deserve tools",
    description:
      "A good marketplace also gives vendors pricing control, analytics, profile testing, and an operating system that helps them grow.",
  },
];

const milestones = [
  { year: "Origin", title: "Started as a better answer to messy local discovery" },
  { year: "Today", title: "A peer-to-peer services engine with trust and social layers" },
  { year: "Next", title: "A city-by-city network where the best local work is easy to find" },
];

const principles = [
  "Verified bookings over anonymous noise",
  "Structured workflows over chat-only chaos",
  "Location-aware ranking over generic search",
  "Clear policies over hidden assumptions",
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
              Local services, rebuilt with better signals.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Bouul is a peer-to-peer services discovery engine for people who
              want to find trusted help quickly and for professionals who want a
              real operating system behind their business.
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
              Suggested image
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-700 bg-black/60 p-8 min-h-[320px] flex items-center justify-center text-center">
              <div>
                <div className="text-white font-semibold text-xl mb-2">
                  Founder story or city scene
                </div>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                  This page still wants a standalone photo. A documentary-style portrait of a founder or a customer and professional reviewing a booking in a real neighborhood setting would be strongest.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
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
                <div key={item.year} className="flex gap-4 border-b border-neutral-800 pb-4">
                  <div className="w-24 flex-shrink-0 text-xs font-semibold tracking-widest text-neutral-500 uppercase pt-1">
                    {item.year}
                  </div>
                  <div className="text-neutral-300">{item.title}</div>
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
              <div className="text-white font-semibold mb-2">Image note</div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                This block would work well with a founder portrait, a team
                photo, or a collage of real customers and professionals using
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
