"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ContactRoutingPreview } from "@/components/contact-routing-preview";

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
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              CONTACT
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Reach the right team quickly.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              Use the contact paths below depending on what you need. This keeps
              support simple and avoids routing everything through one inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/support"
                className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
              >
                Support centre
              </Link>
              <Link
                href="/learn"
                className="px-7 py-3.5 rounded-full border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium text-sm transition-colors"
              >
                Learn hub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Contact routing
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[380px]">
              <ContactRoutingPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactRoutes.map((route, index) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                {route.title}
              </div>
              <p className="text-b-ink-soft leading-relaxed mb-6">{route.detail}</p>
              <a
                href={route.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-b-ink hover:text-b-green-deep transition-colors"
              >
                {route.label}
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
