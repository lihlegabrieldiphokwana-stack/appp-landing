"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const contactRoutes = [
  {
    title: "Support",
    detail: "Questions about bookings, accounts, or app usage.",
    href: "mailto:support@bouul.com",
    label: "support@bouul.com",
  },
  {
    title: "Press",
    detail: "Media requests, interviews, and launch coverage.",
    href: "/press",
    label: "Press kit",
  },
  {
    title: "Careers",
    detail: "Interested in helping build the product or operations layer.",
    href: "/careers",
    label: "Open careers page",
  },
];

export default function ContactPage() {
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
              CONTACT
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Reach the right team quickly.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Use the contact paths below depending on what you need. This keeps
              support simple and avoids routing everything through one inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/support"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Support centre
              </Link>
              <Link
                href="/learn"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Learn hub
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
            <div className="rounded-2xl border border-dashed border-neutral-700 bg-black/60 p-8 min-h-[320px] flex items-center justify-center text-center">
              <div>
                <div className="text-white font-semibold text-xl mb-2">
                  Contact support desk image
                </div>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                  A clean office or support desk scene with a phone and laptop
                  would work well here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactRoutes.map((route, index) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {route.title}
              </div>
              <p className="text-neutral-500 leading-relaxed mb-6">{route.detail}</p>
              <a
                href={route.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
              >
                {route.label}
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
