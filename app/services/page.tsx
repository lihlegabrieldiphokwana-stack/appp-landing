"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { SceneCard } from "@/components/redesign/scene-card";
import { FeaturedScenes } from "@/components/redesign/featured-scenes";
import { sceneForCategory, sceneForPopular } from "@/lib/scene-images";
import Link from "next/link";

// Service categories with their services
const serviceCategories = [
  {
    name: "Home Services",
    services: [
      { name: "Plumbers", slug: "plumbers", count: 234 },
      { name: "Electricians", slug: "electricians", count: 189 },
      { name: "Carpenters", slug: "carpenters", count: 156 },
      { name: "Painters", slug: "painters", count: 167 },
      { name: "Builders", slug: "builders", count: 145 },
      { name: "Gardeners", slug: "gardeners", count: 198 },
      { name: "Pool Cleaners", slug: "pool-cleaners", count: 87 },
      { name: "Pest Control", slug: "pest-control", count: 92 },
      { name: "AC Repair", slug: "ac-repair", count: 134 },
      { name: "Appliance Repair", slug: "appliance-repair", count: 112 },
      { name: "Handyman", slug: "handyman", count: 203 },
      { name: "Roofers", slug: "roofers", count: 78 },
      { name: "Tilers", slug: "tilers", count: 95 },
      { name: "Welders", slug: "welders", count: 67 },
      { name: "Aluminum & Glass", slug: "aluminum-glass", count: 54 },
    ],
  },
  {
    name: "Cleaning Services",
    services: [
      { name: "House Cleaning", slug: "house-cleaning", count: 312 },
      { name: "Carpet Cleaning", slug: "carpet-cleaning", count: 145 },
      { name: "Office Cleaning", slug: "office-cleaning", count: 178 },
      { name: "Deep Cleaning", slug: "deep-cleaning", count: 167 },
      { name: "Move-In/Out Cleaning", slug: "move-cleaning", count: 134 },
      { name: "Window Cleaning", slug: "window-cleaning", count: 98 },
      { name: "Upholstery Cleaning", slug: "upholstery-cleaning", count: 76 },
      { name: "Pressure Washing", slug: "pressure-washing", count: 89 },
    ],
  },
  {
    name: "Beauty & Wellness",
    services: [
      { name: "Hairdressers", slug: "hairdressers", count: 267 },
      { name: "Barbers", slug: "barbers", count: 198 },
      { name: "Nail Technicians", slug: "nail-technicians", count: 234 },
      { name: "Massage Therapists", slug: "massage-therapists", count: 156 },
      { name: "Facial Treatments", slug: "facial-treatments", count: 145 },
      { name: "Makeup Artists", slug: "makeup-artists", count: 178 },
      { name: "Eyelash & Brows", slug: "eyelash-brows", count: 167 },
      { name: "Spas", slug: "spas", count: 89 },
      { name: "Personal Trainers", slug: "personal-trainers", count: 134 },
      { name: "Yoga Instructors", slug: "yoga-instructors", count: 78 },
    ],
  },
  {
    name: "Automotive",
    services: [
      { name: "Mechanics", slug: "mechanics", count: 189 },
      { name: "Car Detailing", slug: "car-detailing", count: 156 },
      { name: "Panel Beaters", slug: "panel-beaters", count: 87 },
      { name: "Towing Services", slug: "towing-services", count: 67 },
      { name: "Car Wash", slug: "car-wash", count: 134 },
      { name: "Windscreen Repair", slug: "windscreen-repair", count: 54 },
      { name: "Auto Electricians", slug: "auto-electricians", count: 78 },
    ],
  },
  {
    name: "Education & Tuition",
    services: [
      { name: "Math Tutors", slug: "math-tutors", count: 234 },
      { name: "English Tutors", slug: "english-tutors", count: 198 },
      { name: "Science Tutors", slug: "science-tutors", count: 167 },
      { name: "Language Lessons", slug: "language-lessons", count: 145 },
      { name: "Music Lessons", slug: "music-lessons", count: 178 },
      { name: "Computer Lessons", slug: "computer-lessons", count: 134 },
      { name: "Homework Help", slug: "homework-help", count: 112 },
      { name: "Exam Prep", slug: "exam-prep", count: 98 },
    ],
  },
  {
    name: "Health & Medical",
    services: [
      { name: "Physiotherapists", slug: "physiotherapists", count: 145 },
      { name: "Dietitians", slug: "dietitians", count: 98 },
      { name: "Counselors", slug: "counselors", count: 134 },
      { name: "Nurses", slug: "nurses", count: 167 },
      { name: "Elderly Care", slug: "elderly-care", count: 189 },
      { name: "Baby Nurses", slug: "baby-nurses", count: 156 },
      { name: "First Aid Training", slug: "first-aid-training", count: 67 },
    ],
  },
  {
    name: "Events & Photography",
    services: [
      { name: "Photographers", slug: "photographers", count: 198 },
      { name: "Videographers", slug: "videographers", count: 156 },
      { name: "Event Planners", slug: "event-planners", count: 134 },
      { name: "Caterers", slug: "caterers", count: 167 },
      { name: "DJs", slug: "djs", count: 145 },
      { name: "Live Bands", slug: "live-bands", count: 89 },
      { name: "Decorators", slug: "decorators", count: 112 },
      { name: "MCs", slug: "mcs", count: 78 },
    ],
  },
  {
    name: "Professional Services",
    services: [
      { name: "Accountants", slug: "accountants", count: 167 },
      { name: "Bookkeepers", slug: "bookkeepers", count: 134 },
      { name: "Tax Consultants", slug: "tax-consultants", count: 112 },
      { name: "Legal Services", slug: "legal-services", count: 98 },
      { name: "Business Consultants", slug: "business-consultants", count: 89 },
      { name: "Marketing Agencies", slug: "marketing-agencies", count: 78 },
      { name: "Web Designers", slug: "web-designers", count: 145 },
      { name: "Graphic Designers", slug: "graphic-designers", count: 156 },
    ],
  },
  {
    name: "Pets",
    services: [
      { name: "Pet Groomers", slug: "pet-groomers", count: 134 },
      { name: "Dog Walkers", slug: "dog-walkers", count: 98 },
      { name: "Pet Sitters", slug: "pet-sitters", count: 112 },
      { name: "Veterinarians", slug: "veterinarians", count: 87 },
      { name: "Pet Training", slug: "pet-training", count: 76 },
    ],
  },
  {
    name: "Logistics & Moving",
    services: [
      { name: "Removal Companies", slug: "removal-companies", count: 145 },
      { name: "Courier Services", slug: "courier-services", count: 167 },
      { name: "Furniture Delivery", slug: "furniture-delivery", count: 134 },
      { name: "Storage Services", slug: "storage-services", count: 89 },
      { name: "Skip Hire", slug: "skip-hire", count: 67 },
    ],
  },
  {
    name: "Tech & IT",
    services: [
      { name: "IT Support", slug: "it-support", count: 178 },
      { name: "Computer Repair", slug: "computer-repair", count: 156 },
      { name: "Network Installation", slug: "network-installation", count: 98 },
      { name: "Security Systems", slug: "security-systems", count: 134 },
      { name: "CCTV Installation", slug: "cctv-installation", count: 112 },
      { name: "Data Recovery", slug: "data-recovery", count: 67 },
    ],
  },
  {
    name: "Legal & Financial",
    services: [
      { name: "Attorneys", slug: "attorneys", count: 145 },
      { name: "Notaries", slug: "notaries", count: 78 },
      { name: "Financial Advisors", slug: "financial-advisors", count: 112 },
      { name: "Insurance Agents", slug: "insurance-agents", count: 98 },
      { name: "Real Estate Agents", slug: "real-estate-agents", count: 167 },
    ],
  },
];

const popularServices = [
  { name: "Plumbers", slug: "plumbers" },
  { name: "Electricians", slug: "electricians" },
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Hairdressers", slug: "hairdressers" },
  { name: "Mechanics", slug: "mechanics" },
  { name: "Math Tutors", slug: "math-tutors" },
  { name: "Photographers", slug: "photographers" },
  { name: "Massage Therapists", slug: "massage-therapists" },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = serviceCategories.filter(cat => {
    if (!selectedCategory && searchQuery) {
      // Filter services within categories based on search
      return cat.services.some(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      return cat.name === selectedCategory;
    }
    return true;
  });

  const filteredServices = searchQuery
    ? serviceCategories.flatMap(cat => 
        cat.services.filter(s => 
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

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
              BROWSE SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Find the perfect professional
            </h1>
            <p className="text-b-ink-soft text-xl max-w-2xl mx-auto mb-12">
              Over 71 service categories. Thousands of verified professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What service do you need? (e.g., plumber, electrician, cleaner)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-b-paper-deep border border-b-line rounded-full text-b-ink placeholder:text-b-ink-faint focus:outline-none focus:border-b-green transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-b-green hover:opacity-90 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-b-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results with scene images */}
      {searchQuery && (
        <section className="py-16 bg-b-paper border-t border-b-line">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-b-ink mb-6">
              Results for "{searchQuery}"
            </h2>
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredServices.map((service) => {
                  const scene = sceneForPopular(service.slug);
                  return (
                    <Link
                      key={service.slug}
                      href={`/category/${service.slug}`}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised transition-colors hover:border-b-green/50"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-b-paper-deep">
                        <img
                          src={scene.src}
                          alt={service.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="text-b-ink font-semibold group-hover:text-b-green-deep transition-colors">
                          {service.name}
                        </div>
                        <div className="text-b-ink-faint text-xs whitespace-nowrap ml-2">
                          {service.count}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-b-ink-soft text-center py-12">
                No services found matching "{searchQuery}"
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured scenes — real work, on display */}
      {!searchQuery && <FeaturedScenes />}

      {/* Popular Services */}
      {!searchQuery && (
        <section className="py-16 bg-b-paper border-t border-b-line">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-extrabold text-b-ink mb-8">
                Popular Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {popularServices.map((service) => {
                  const scene = sceneForPopular(service.slug);
                  return (
                    <SceneCard
                      key={service.slug}
                      src={scene.src}
                      alt={service.name}
                      label={service.name}
                      href={`/category/${service.slug}`}
                      variant="tile"
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs */}
      {!searchQuery && (
        <section className="py-8 bg-b-paper border-t border-b-line sticky top-20 md:top-16 z-40 bg-b-paper/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === null
                    ? "bg-b-green text-b-forest"
                    : "bg-b-paper-deep text-b-ink-soft hover:text-b-ink"
                }`}
              >
                All Categories
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.name
                      ? "bg-b-green text-b-forest"
                      : "bg-b-paper-deep text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Categories Grid */}
      <section className="py-24 bg-b-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                className="bg-b-paper-raised border border-b-line rounded-3xl p-0 h-full flex flex-col overflow-hidden"
              >
                {(() => {
                  const scene = sceneForCategory(category.name);
                  return (
                    <SceneCard
                      src={scene.src}
                      alt={category.name}
                      tag={`${category.services.length} services`}
                      label={category.name}
                      href={`/category/${category.services[0].slug}`}
                      variant="minimal"
                      className="aspect-[16/9] rounded-none border-0 border-b border-b-line"
                    />
                  );
                })()}
                <div className="p-6">
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/category/${service.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-b-paper-deep transition-colors group"
                    >
                      <div className="text-b-ink-soft group-hover:text-b-ink transition-colors">
                        {service.name}
                      </div>
                      <div className="text-b-ink-faint text-sm group-hover:text-b-green-deep transition-colors">
                        {service.count}
                      </div>
                    </Link>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-b-paper-raised border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                SEE IT IN ACTION
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight mb-5">
                Not sure what you need? Watch what others booked.
              </h2>
              <p className="text-b-ink-soft text-lg leading-relaxed mb-8">
                Bouul&apos;s short-form Glimpses feed and social Following tab
                show you real service results from real people. See the braid
                style, the clean living room, the newly tiled bathroom — then
                tap to book the same service from the same vendor. You don&apos;t
                need to imagine what you&apos;ll get — you can see it.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-b-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-b-green flex-shrink-0" />
                  Scroll short videos and photos of real completed work
                </li>
                <li className="flex items-start gap-3 text-sm text-b-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-b-green flex-shrink-0" />
                  See what services your friends have booked and loved
                </li>
                <li className="flex items-start gap-3 text-sm text-b-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-b-green flex-shrink-0" />
                  Tap any glimpse to book the same service in one click
                </li>
                <li className="flex items-start gap-3 text-sm text-b-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-b-green flex-shrink-0" />
                  Follow a vendor to get notified about new work and specials
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-b-line bg-b-paper-deep p-4 md:p-6">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Hair & braiding", file: "hair_styling" },
                  { label: "Nails & beauty", file: "nail_service" },
                  { label: "Home cleaning", file: "house_cleaning" },
                  { label: "Repairs & fixes", file: "plumbing" },
                  { label: "Auto detailing", file: "auto_repair" },
                  { label: "Fitness", file: "personal_training" },
                  { label: "Photography", file: "photography_service" },
                  { label: "Pet grooming", file: "pet_grooming" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-b-line bg-b-paper overflow-hidden hover:border-b-green/40 transition-colors"
                  >
                    <div className="aspect-[3/2] w-full bg-b-paper-deep">
                      <img
                        src={`/scenes/${item.file}.png`}
                        alt={item.label}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="text-b-ink-soft text-xs text-center py-1.5 px-1 truncate">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-b-ink-faint">
                See real results — scroll glimpses of these services in the app
              </p>
            </div>
          </motion.div>
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
              Can't find what you're looking for?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              We're constantly adding new services. Let us know what you need.
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
