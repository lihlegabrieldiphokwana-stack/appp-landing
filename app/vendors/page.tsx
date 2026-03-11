"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { VendorCategoryValueProp } from "@/components/vendor-category-value-prop";
import { VendorPricingComparison } from "@/components/vendor-pricing-comparison";
import { Footer } from "@/components/footer";

const vendorFeatures = [
  {
    title: "Resonance™ Discovery Engine",
    description: "Our AI-powered discovery engine tests multiple titles and images for your services, learning which combinations convert each individual user. No A/B setup required — just upload and let the system optimize.",
    stat: "12+",
    statLabel: "combinations tested per service",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Multi-Title & Image Testing",
    description: "Upload 3-5 title variations and multiple images per service. The system automatically cycles through all combinations, tracking which title + image pairing converts each user from impression to purchase.",
    stat: "3-5x",
    statLabel: "more conversion opportunities",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Analytics",
    description: "Track impressions, views, intents, and purchases for every title and image combination. See exactly which creative assets resonate with your audience and drive bookings.",
    stat: "4-stage",
    statLabel: "conversion funnel tracking",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const vendorStats = [
  { stat: "10x", label: "more bookings", description: "Vendors see an average 10x increase in monthly bookings" },
  { stat: "40-60%", label: "revenue growth", description: "Top performers increase revenue by 40-60%" },
  { stat: "Zero", label: "hidden fees", description: "Transparent pricing with no surprise commissions" },
  { stat: "Full", label: "control", description: "Complete dashboard control over your business" },
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-6">
              FOR PROFESSIONALS
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Built for professionals <br />
              <span className="text-neutral-500">who mean business.</span>
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl mx-auto mb-12">
              Join 5,000+ professionals growing their business on Bouul.
              From barbers to consultants, we give you the tools to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-base transition-colors"
              >
                Start Selling on Bouul
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full text-base border border-neutral-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.stat}
                </div>
                <div className="text-neutral-400 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-neutral-600 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resonance Discovery Engine */}
      <section id="features" className="py-24 md:py-32 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              KEYSTONE DISCOVERY™
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-3xl">
              Vendors upload. The system tests.<br />
              <span className="text-neutral-500">No A/B setup required.</span>
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl">
              Every service can have multiple titles and images. Resonance automatically cycles through
              all combinations, learning which title + image pairing converts each individual user.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendorFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col gap-4"
              >
                <div className="text-emerald-400">{feature.icon}</div>
                <div className="text-4xl font-bold text-emerald-400">{feature.stat}</div>
                <div className="text-white font-semibold text-xl">{feature.title}</div>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
                <div className="text-neutral-600 text-xs font-medium border-t border-neutral-800 pt-3">
                  {feature.statLabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <VendorPricingComparison />

      {/* Category Value Props */}
      <VendorCategoryValueProp />

      {/* CTA */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of professionals who trust Bouul to fill their calendar
              and grow their revenue.
            </p>
            <a
              href="/download"
              className="inline-block px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
            >
              Create Your Vendor Profile
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
