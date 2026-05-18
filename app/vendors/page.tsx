"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LampContainer } from "@/components/ui/lamp-effect";
import { FeatureSection } from "@/components/feature-section";
import { VendorDashboardPreview } from "@/components/vendor-dashboard-preview";
import { VendorOpsPreview } from "@/components/vendor-ops-preview";
import { vendorCategoriesList } from "@/lib/vendor-categories-data";

const vendorStats = [
  { stat: "More", label: "bookings", description: "Vendors improve monthly booking volume as their profile and content get stronger" },
  { stat: "Higher", label: "revenue", description: "Top performers see stronger revenue when conversion improves" },
  { stat: "Zero", label: "hidden fees", description: "Transparent pricing with no surprise commissions" },
  { stat: "Full", label: "control", description: "Complete dashboard control over your business" },
];

const vendorFeatures = [
  {
    title: "Resonance Discovery Engine",
    description: "AI-powered discovery tests multiple titles and images for your services, learning which combinations convert each user. No A/B setup required.",
    stat: "12+",
    statLabel: "combinations tested per service",
  },
  {
    title: "Multi-Title & Image Testing",
    description: "Upload 3-5 title variations and multiple images per service. The system cycles through combinations, tracking which pairing converts from impression to purchase.",
    stat: "3-5x",
    statLabel: "more conversion opportunities",
  },
  {
    title: "Real-Time Analytics",
    description: "Track impressions, views, intents, and purchases for every title and image combination. See exactly which creative assets drive bookings.",
    stat: "4-stage",
    statLabel: "conversion funnel tracking",
  },
];

const operatingModels = [
  {
    title: "Service storefront",
    description: "List individual services with pricing, availability, and images. Customers browse, book, and pay — all in one flow.",
  },
  {
    title: "Team and employee mode",
    description: "Route work to staff or contractors, assign jobs, and keep calendars aligned. Employees get their own workboard and schedule view.",
  },
  {
    title: "Subscription models",
    description: "Offer recurring services with weekly, bi-weekly, or monthly cadences. Predictable revenue, automatic billing.",
  },
  {
    title: "Microtasks and quick jobs",
    description: "Small, fast-turnaround jobs at fixed prices. Perfect for handyman work, quick fixes, and one-off requests.",
  },
];

const trustFeatures = [
  {
    title: "Verified Customers Only",
    description: "Every customer is identity-verified before they can book. No anonymous requests, no spam.",
  },
  {
    title: "FICA & Identity Compliant",
    description: "Built-in compliance for South African regulations. Your business stays protected.",
  },
  {
    title: "Secure 24-48h Payouts",
    description: "Funds held in escrow during the job, released within 24-48 hours of completion. No chasing payments.",
  },
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero — lamp effect with vendor value prop */}
      <section className="bg-black border-b border-neutral-900">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-10 bg-gradient-to-br from-emerald-300 to-emerald-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Built for professionals <br /> who want real growth.
          </motion.h1>
        </LampContainer>

        <div className="max-w-3xl mx-auto px-6 pb-20 text-center">
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Bouul gives you the tools to showcase your work, set your prices,
            manage your team, and grow your business — all from one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-full transition-colors"
            >
              Create your free profile
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-3.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium rounded-full transition-colors"
            >
              How it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-20 bg-black border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vendorStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-emerald-400 text-sm font-medium mb-1">{item.label}</div>
                <p className="text-neutral-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section id="how-it-works" className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              One platform. Four ways to operate.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Whether you&apos;re a solo professional or managing a team, Bouul
              adapts to how you work — not the other way around.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operatingModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{model.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Discovery + Analytics */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              KEYSTONE AI
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              You upload. The AI optimizes.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Bouul&apos;s discovery engine tests what works for each customer —
              automatically. No A/B setup, no marketing team required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {vendorFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="text-3xl font-bold text-white mb-1">{feature.stat}</div>
                <div className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  {feature.statLabel}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Ops preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <VendorOpsPreview />
          </motion.div>
        </div>
      </section>

      {/* Pricing control */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                PRICING CONTROL
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                You set the price. The platform handles the rest.
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Set base rates, surge pricing for peak times, off-peak discounts,
                travel fees, and minimum booking values — all from your dashboard.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Surge Pricing", desc: "Automatically adjust rates during high-demand periods." },
                  { title: "Off-Peak Incentives", desc: "Fill slow periods with smart discounts that protect your margin." },
                  { title: "Duration Intelligence", desc: "Price by job complexity, not just hourly. Fairer for you and clearer for customers." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.title}</span>
                      <span className="text-neutral-500 text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Transparent fees
              </div>
              <div className="space-y-4">
                {[
                  { label: "Platform fee", value: "Flat, not percentage-based", note: "No surprise commission cuts" },
                  { label: "Payout timing", value: "24-48 hours after completion", note: "Faster than industry standard" },
                  { label: "Hidden costs", value: "None", note: "What you see is what you keep" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <div>
                      <div className="text-neutral-300 text-sm font-medium">{item.label}</div>
                      <div className="text-neutral-500 text-xs">{item.note}</div>
                    </div>
                    <div className="text-emerald-400 text-sm font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              TRUST & SECURITY
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Bouul protects your business.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              DASHBOARD
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Control your business from anywhere.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Full-feature management for mobile and desktop. Track bookings, manage
              staff, coordinate subscriptions, and review growth from one dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl shadow-black/40"
              style={{ width: "min(820px, 90vw)", aspectRatio: "820/1180" }}
            >
              <VendorDashboardPreview />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category grid */}
      <section id="categories" className="py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              WHO CAN JOIN
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Every trade. Every profession.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              From plumbers to photographers, Bouul is built for professionals who
              want better tools and more control over their business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {vendorCategoriesList.map((category, i) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  href={`/vendors/${category.slug}`}
                  className="block rounded-2xl border border-neutral-800 bg-neutral-950 p-5 h-full hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-emerald-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-neutral-500 text-xs">
                    {category.serviceCount} services
                  </p>
                </Link>
              </motion.div>
            ))}
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
              Ready to grow your business?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Join 5,000+ professionals already using Bouul to showcase their work,
              manage bookings, and earn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="px-10 py-5 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-full text-lg transition-colors"
              >
                Create Free Profile
              </Link>
              <Link
                href="/employees"
                className="px-10 py-5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium rounded-full text-lg transition-colors"
              >
                For your team →
              </Link>
            </div>
            <p className="text-neutral-600 text-sm mt-6">
              Clear fees. No hidden costs. More margin.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
