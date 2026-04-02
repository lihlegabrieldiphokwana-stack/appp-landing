"use client";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Map city slugs to display names
const cityNames: Record<string, string> = {
  "johannesburg": "Johannesburg",
  "sandton": "Sandton",
  "cape-town": "Cape Town",
  "durban": "Durban",
  "pretoria": "Pretoria",
  "centurion": "Centurion",
  "midrand": "Midrand",
  "roodepoort": "Roodepoort",
  "boksburg": "Boksburg",
  "benoni": "Benoni",
};

const popularCategories = [
  { name: "Plumbers", icon: "🔧", count: 234 },
  { name: "Electricians", icon: "⚡", count: 189 },
  { name: "Cleaners", icon: "🧹", count: 312 },
  { name: "Tutors", icon: "📚", count: 156 },
  { name: "Beauty", icon: "💅", count: 278 },
  { name: "Builders", icon: "🔨", count: 145 },
  { name: "Gardeners", icon: "🌿", count: 198 },
  { name: "Painters", icon: "🎨", count: 167 },
];

const topPros = [
  {
    name: "Marco T.",
    category: "Plumber",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 km",
    available: true,
    image: "/pros/marco-t.jpg",
  },
  {
    name: "Sarah M.",
    category: "Electrician",
    rating: 5.0,
    reviews: 94,
    distance: "1.8 km",
    available: true,
    image: "/pros/sarah-m.jpg",
  },
  {
    name: "David K.",
    category: "Builder",
    rating: 4.8,
    reviews: 203,
    distance: "3.5 km",
    available: false,
    image: "/pros/david-k.jpg",
  },
  {
    name: "Lisa P.",
    category: "Cleaner",
    rating: 4.9,
    reviews: 156,
    distance: "0.9 km",
    available: true,
    image: "/pros/lisa-p.jpg",
  },
];

export default function CityPage() {
  const params = useParams();
  const citySlug = params.city as string;
  const cityName = cityNames[citySlug] || citySlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

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
              LOCAL SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Services in {cityName}
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl mx-auto mb-12">
              Find trusted professionals in your neighborhood. 
              Verified, rated, and ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-black border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Popular Categories in {cityName}
            </h2>
            <p className="text-neutral-500 text-lg">
              Browse the most requested services in your area
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category, i) => (
              <motion.a
                key={category.name}
                href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="text-4xl">{category.icon}</div>
                <div className="text-white font-medium text-center group-hover:text-emerald-400 transition-colors">
                  {category.name}
                </div>
                <div className="text-neutral-600 text-xs">
                  {category.count} professionals
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Professionals */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Top Professionals Near You
            </h2>
            <p className="text-neutral-500 text-lg">
              Highest-rated professionals in {cityName}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPros.map((pro, i) => (
              <motion.a
                key={pro.name}
                href={`/pro/${pro.name.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-2xl">
                    {pro.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  {pro.available && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-emerald-400 text-xs font-medium">Available</span>
                    </div>
                  )}
                </div>
                <div className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                  {pro.name}
                </div>
                <div className="text-neutral-500 text-sm mb-3">{pro.category}</div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400 font-semibold">★ {pro.rating}</span>
                    <span className="text-neutral-600">({pro.reviews})</span>
                  </div>
                  <div className="text-neutral-600">{pro.distance}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

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
              Need a service in {cityName}?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Book trusted professionals in minutes. Available 24/7.
            </p>
            <a
              href="/download"
              className="inline-block px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
            >
              Download Bouul
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
