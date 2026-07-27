"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { MediaPlaceholder } from "@/components/redesign/media-placeholder";
import { UseCasesPreview } from "@/components/use-cases-preview";
import { FlutterGlimpsesShowcase } from "@/components/redesign/flutter-glimpses-showcase";

const useCases = [
  {
    title: "Urgent home repairs",
    subtitle: "A burst pipe, faulty plug, or broken gate needs fast matching.",
    detail:
      "Bouul surfaces nearby professionals, shows trust signals, and lets the customer book without switching apps or making phone calls.",
    shot: "/use-cases/repairs.jpg",
  },
  {
    title: "Recurring personal services",
    subtitle: "Hair, beauty, wellness, and grooming depend on repeat visits.",
    detail:
      "Customers can follow their favourite professionals, rebook quickly, and get notified when they have fresh availability.",
    shot: "/use-cases/recurring.jpg",
  },
  {
    title: "Business and office needs",
    subtitle: "Teams need cleaning, maintenance, design, and admin support.",
    detail:
      "The platform is useful when a business needs a reliable local provider with clean pricing and clear completion tracking.",
    shot: "/use-cases/office.jpg",
  },
  {
    title: "Professional growth",
    subtitle: "Vendors need more than a listing.",
    detail:
      "The vendor side gives pricing control, analytics, follower growth, and creative testing so a business can actually scale.",
    shot: "/use-cases/growth.jpg",
  },
];

const userTypes = [
  "Homeowners who need trusted help now",
  "Renters managing one-off repairs",
  "Busy families coordinating recurring services",
  "Small businesses handling local operations",
  "Independent professionals building a client base",
  "Friends sharing trusted recommendations through social feeds",
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              USE CASES
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6 max-w-4xl">
              Built for the moments when local help matters most.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              Bouul fits urgent jobs, recurring bookings, and vendor growth
              workflows. The same platform can help a customer find a plumber
              and help that plumber fill a calendar.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/download"
              className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
            >
              Download the app
            </Link>
            <Link
              href="/vendors"
              className="px-7 py-3.5 rounded-full border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium text-sm transition-colors"
            >
              Seller story
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
                Scenario
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink mb-3">
                {item.title}
              </h2>
              <p className="text-b-ink-soft text-sm uppercase tracking-wide mb-5">
                {item.subtitle}
              </p>
              <p className="text-b-ink-soft leading-relaxed mb-6">
                {item.detail}
              </p>
              <MediaPlaceholder
                kind="image"
                src={item.shot}
                alt={item.title}
                label="Scenario"
                ratio="16/9"
              />
            </motion.article>
          ))}
        </div>
      </section>

      <FlutterGlimpsesShowcase />

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              Who it serves
            </div>
            <div className="space-y-4">
              {userTypes.map((type) => (
                <div key={type} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                  <span className="text-b-ink-soft text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-b-line bg-b-paper p-8">
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              How it works
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[320px] mb-5">
              <UseCasesPreview />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Discover", desc: "Search or scroll glimpses" },
                { label: "Book", desc: "Chat, confirm, escrow" },
                { label: "Stay connected", desc: "Follow, message, earn" },
              ].map((step) => (
                <div key={step.label} className="rounded-2xl border border-b-line bg-b-paper-raised p-4">
                  <div className="h-1.5 w-8 rounded-full bg-b-green mb-3" />
                  <div className="text-sm font-semibold text-b-ink">{step.label}</div>
                  <div className="text-xs text-b-ink-soft mt-1">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
