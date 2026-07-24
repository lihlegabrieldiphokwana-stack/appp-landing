"use client";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { MediaPlaceholder } from "@/components/redesign/media-placeholder";
import { SceneCard } from "@/components/redesign/scene-card";

// Map city slugs to display names
const cityNames: Record<string, string> = {
  "johannesburg": "Johannesburg",
  "sandton": "Sandton",
  "cape-town": "Cape Town",
  "durban": "Durban",
  "pretoria": "Pretoria",
  "centurion": "Centurion",
  "midrand": "Midrand",
  "randburg": "Randburg",
  "fourways": "Fourways",
  "roodepoort": "Roodepoort",
  "boksburg": "Boksburg",
  "benoni": "Benoni",
};

const popularCategories = [
  { name: "Plumbers", scene: "/scenes/plumbing.png", count: 234 },
  { name: "Electricians", scene: "/scenes/electrical_service.png", count: 189 },
  { name: "Cleaners", scene: "/scenes/house_cleaning.png", count: 312 },
  { name: "Tutors", scene: "/scenes/tutoring_service.png", count: 156 },
  { name: "Beauty", scene: "/scenes/makeup_artist.png", count: 278 },
  { name: "Builders", scene: "/scenes/carpentry.png", count: 145 },
  { name: "Gardeners", scene: "/scenes/garden_maintenance.png", count: 198 },
  { name: "Painters", scene: "/scenes/painting_service.png", count: 167 },
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
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-b-paper">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-6">
              LOCAL SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Services in {cityName}
            </h1>
            <p className="text-b-ink-soft text-xl max-w-2xl mx-auto mb-12">
              Find trusted professionals in your neighborhood.
              Verified, rated, and ready to help.
            </p>
            <MediaPlaceholder
              kind="image"
              src={`/cities/${citySlug}.jpg`}
              alt={cityName}
              label="City view"
              ratio="21/9"
              className="mx-auto max-w-4xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-b-paper border-y border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-extrabold text-b-ink mb-4">
              Popular Categories in {cityName}
            </h2>
            <p className="text-b-ink-soft text-lg">
              Browse the most requested services in your area
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <SceneCard
                  src={category.scene}
                  alt={category.name}
                  tag={`${category.count} pros`}
                  label={category.name}
                  href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
                  variant="tile"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Professionals */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-extrabold text-b-ink mb-4">
              Top Professionals Near You
            </h2>
            <p className="text-b-ink-soft text-lg">
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
                className="bg-b-paper-raised border border-b-line rounded-2xl p-6 hover:border-b-green/50 transition-colors group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <MediaPlaceholder
                    kind="image"
                    src={pro.image}
                    alt={pro.name}
                    ratio="1/1"
                    className="w-16 h-16"
                    rounded="rounded-full"
                  />
                  {pro.available && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-b-green-soft rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-b-green" />
                      <span className="text-b-green-deep text-xs font-medium">Available</span>
                    </div>
                  )}
                </div>
                <div className="text-b-ink font-semibold text-lg mb-1 group-hover:text-b-green-deep transition-colors">
                  {pro.name}
                </div>
                <div className="text-b-ink-soft text-sm mb-3">{pro.category}</div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-b-green-deep font-semibold">★ {pro.rating}</span>
                    <span className="text-b-ink-faint">({pro.reviews})</span>
                  </div>
                  <div className="text-b-ink-faint">{pro.distance}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink mb-6">
              Need a service in {cityName}?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Book trusted professionals in minutes. Available 24/7.
            </p>
            <a
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Download Bouul
            </a>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
