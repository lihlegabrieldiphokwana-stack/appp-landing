"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { LearnHubPreview } from "@/components/learn-hub-preview";

const cards = [
  {
    href: "/about",
    title: "About Bouul",
    description:
      "The story behind the product, its operating principles, and the problem it solves.",
  },
  {
    href: "/use-cases",
    title: "Use Cases",
    description:
      "Where the platform helps customers, families, and businesses in the real world.",
  },
  {
    href: "/newsroom",
    title: "Newsroom",
    description:
      "Launch updates, press-ready context, and a place to publish product stories.",
  },
  {
    href: "/policies",
    title: "Policy Hub",
    description:
      "The public summary of the rules around safety, reviews, payments, and conduct.",
  },
  {
    href: "/privacy",
    title: "Privacy",
    description:
      "How Bouul handles account, booking, and location data at a high level.",
  },
  {
    href: "/terms",
    title: "Terms",
    description:
      "The core expectations for customers and professionals using the platform.",
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "The quickest path to support, press, and business-specific contact requests.",
  },
  {
    href: "/support",
    title: "Support",
    description:
      "Practical help for booking issues, account problems, and trust & safety flows.",
  },
  {
    href: "/careers",
    title: "Careers",
    description:
      "A simple view of the product, operations, and content roles the team needs.",
  },
  {
    href: "/press",
    title: "Press",
    description:
      "A media-friendly page with assets, product facts, and newsroom context.",
  },
  {
    href: "/status",
    title: "Status",
    description:
      "The current service health and what is still being finalized.",
  },
  {
    href: "/cities",
    title: "Cities",
    description:
      "A browseable list of the city pages Bouul is currently organized around.",
  },
];

export default function LearnPage() {
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
              LEARN
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6 max-w-4xl">
              Everything public-facing, in one place.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              This hub connects the pages that explain who Bouul is, how it
              works, and what rules keep the platform usable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-3">
                Section
              </div>
              <h2 className="text-2xl font-semibold text-b-ink mb-3">
                {card.title}
              </h2>
              <p className="text-b-ink-soft text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-b-ink hover:text-b-green-deep transition-colors"
              >
                Open page
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-b-line bg-b-paper p-8">
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Learn map
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[380px]">
              <LearnHubPreview />
            </div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
