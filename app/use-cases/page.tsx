"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UseCasesPreview } from "@/components/use-cases-preview";

const useCases = [
  {
    title: "Urgent home repairs",
    subtitle: "A burst pipe, faulty plug, or broken gate needs fast matching.",
    detail:
      "Bouul surfaces nearby professionals, shows trust signals, and lets the customer book without switching apps or making phone calls.",
  },
  {
    title: "Recurring personal services",
    subtitle: "Hair, beauty, wellness, and grooming depend on repeat visits.",
    detail:
      "Customers can follow their favourite professionals, rebook quickly, and get notified when they have fresh availability.",
  },
  {
    title: "Business and office needs",
    subtitle: "Teams need cleaning, maintenance, design, and admin support.",
    detail:
      "The platform is useful when a business needs a reliable local provider with clean pricing and clear completion tracking.",
  },
  {
    title: "Professional growth",
    subtitle: "Vendors need more than a listing.",
    detail:
      "The vendor side gives pricing control, analytics, follower growth, and creative testing so a business can actually scale.",
  },
];

const userTypes = [
  "Homeowners who need trusted help now",
  "Renters managing one-off repairs",
  "Busy families coordinating recurring services",
  "Small businesses handling local operations",
  "Independent professionals building a client base",
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              USE CASES
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 max-w-4xl">
              Built for the moments when local help matters most.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Bouul fits urgent jobs, recurring bookings, and vendor growth
              workflows. The same platform can help a customer find a plumber
              and help that plumber fill a calendar.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
              Seller story
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Scenario
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {item.title}
              </h2>
              <p className="text-neutral-400 text-sm uppercase tracking-wide mb-5">
                {item.subtitle}
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {item.detail}
              </p>
              <div className="rounded-2xl border border-neutral-800 bg-black/50 p-5">
                <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 min-h-[140px]">
                  <UseCasesPreview />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Who it serves
            </div>
            <div className="space-y-4">
              {userTypes.map((type) => (
                <div key={type} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Use case storyboard
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[320px] mb-5">
              <UseCasesPreview />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Discover", "Book", "Grow"].map((step) => (
                <div key={step} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <div className="h-1.5 w-8 rounded-full bg-emerald-400 mb-3" />
                  <div className="text-sm font-semibold text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
