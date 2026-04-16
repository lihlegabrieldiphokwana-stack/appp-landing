"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StatusBoardPreview } from "@/components/status-board-preview";

const statusItems = [
  { name: "Website", state: "Operational", detail: "Landing, learn, and product pages are live." },
  { name: "Marketplace", state: "Operational", detail: "Services, city, category, and pro pages are available." },
  { name: "Newsroom", state: "Operational", detail: "Press context and article pages are online." },
  { name: "Mobile downloads", state: "In progress", detail: "App store links are still being finalized." },
];

const incidentPolicy = [
  "If a disruption affects bookings, update this page first.",
  "If support is available but one flow is down, note the affected area clearly.",
  "If there are no incidents, keep the page current anyway so visitors trust it.",
];

export default function StatusPage() {
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
              STATUS
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Service health and launch status.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              This page is a public check-in on what&apos;s running and what is
              still being finalized.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Download page
              </Link>
              <Link
                href="/support"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Support
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Suggested image
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[380px]">
              <StatusBoardPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {statusItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {item.name}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  {item.state}
                </h2>
              </div>
              <p className="text-neutral-500 leading-relaxed">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Incident policy
            </div>
            <div className="space-y-4">
              {incidentPolicy.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Contact
            </div>
            <p className="text-neutral-500 leading-relaxed mb-4">
              If something looks off, email support@bouul.com or use the support
              page.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
            >
              Open support page
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
