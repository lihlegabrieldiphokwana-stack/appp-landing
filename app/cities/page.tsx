"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CityMapPreview } from "@/components/city-map-preview";

const cities = [
  { slug: "johannesburg", name: "Johannesburg", region: "Gauteng", highlight: "Launch center", blurb: "The primary city story and default marketplace view." },
  { slug: "sandton", name: "Sandton", region: "Gauteng", highlight: "High-intent business district", blurb: "Great for premium vendors, urgent bookings, and fast-moving commercial demand." },
  { slug: "cape-town", name: "Cape Town", region: "Western Cape", highlight: "Lifestyle and home services", blurb: "A strong fit for recurring home, beauty, and professional service needs." },
  { slug: "durban", name: "Durban", region: "KwaZulu-Natal", highlight: "Growing coastal demand", blurb: "Useful for city-wide services, hospitality, and local trades." },
  { slug: "pretoria", name: "Pretoria", region: "Gauteng", highlight: "Government and family demand", blurb: "Balanced home services, office work, and specialist bookings." },
  { slug: "centurion", name: "Centurion", region: "Gauteng", highlight: "Suburban expansion", blurb: "A practical hub for family-oriented local services." },
  { slug: "midrand", name: "Midrand", region: "Gauteng", highlight: "Cross-city connector", blurb: "Well placed for vendors serving a wider northern corridor." },
  { slug: "randburg", name: "Randburg", region: "Gauteng", highlight: "Dense residential demand", blurb: "Good for everyday service discovery and repeat bookings." },
  { slug: "fourways", name: "Fourways", region: "Gauteng", highlight: "Fast-growing residential area", blurb: "A strong area for home, beauty, and family services." },
  { slug: "roodepoort", name: "Roodepoort", region: "Gauteng", highlight: "Western corridor", blurb: "A useful coverage area for home and logistics services." },
  { slug: "boksburg", name: "Boksburg", region: "Gauteng", highlight: "East Rand activity", blurb: "Practical for trade, repairs, and local service work." },
  { slug: "benoni", name: "Benoni", region: "Gauteng", highlight: "Community-focused demand", blurb: "A strong hub for trustworthy local service discovery." },
];

export default function CitiesPage() {
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
              CITIES
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 max-w-4xl">
              Explore the cities Bouul is built around.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              These city pages are the local entry points for discovery. Each
              one is a slice of the marketplace tailored to a specific place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city, index) => (
            <motion.article
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {city.region}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {city.name}
              </h2>
              <p className="text-neutral-400 text-sm uppercase tracking-wide mb-4">
                {city.highlight}
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {city.blurb}
              </p>
              <Link
                href={`/city/${city.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
              >
                Open city page
                <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Suggested image
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[380px]">
              <CityMapPreview />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
