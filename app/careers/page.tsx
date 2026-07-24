"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { CareersBoardPreview } from "@/components/careers-board-preview";

const roles = [
  {
    title: "Product and design",
    detail: "Build the booking experience, the discovery surfaces, and the merchant tools.",
  },
  {
    title: "Engineering",
    detail: "Ship fast, maintain quality, and keep the app stable as the marketplace grows.",
  },
  {
    title: "Operations and support",
    detail: "Help vendors onboard, handle support issues, and keep trust flows working.",
  },
  {
    title: "Content and growth",
    detail: "Turn product language into public pages, stories, and launch-ready content.",
  },
];

const values = [
  "Move quickly, but keep the product trustworthy",
  "Make complex systems feel simple",
  "Treat vendors like businesses, not listings",
  "Keep customer and safety problems visible",
];

export default function CareersPage() {
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
              CAREERS
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Help build the local services engine.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              Bouul needs product thinkers, builders, and operators who are
              comfortable with both marketplace complexity and real customer
              problems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
              >
                Contact us
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
              Team preview
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[380px]">
              <CareersBoardPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Team area
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink mb-4">
                {role.title}
              </h2>
              <p className="text-b-ink-soft leading-relaxed">{role.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              What we value
            </div>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                  <span className="text-b-ink-soft text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-b-line bg-b-paper p-8">
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Hiring enquiries
            </div>
            <p className="text-b-ink-soft leading-relaxed">
              Bouul is building an early team across product, engineering,
              operations, and growth. Send a short note to support@bouul.com
              with the role area you are interested in and links to relevant
              work.
            </p>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
