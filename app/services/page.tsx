"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

// Service categories with their services
const serviceCategories = [
  {
    name: "Home Services",
    icon: "🏠",
    color: "emerald",
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
    icon: "✨",
    color: "blue",
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
    icon: "💅",
    color: "pink",
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
    icon: "🚗",
    color: "orange",
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
    icon: "📚",
    color: "purple",
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
    icon: "🏥",
    color: "red",
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
    icon: "📸",
    color: "cyan",
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
    icon: "💼",
    color: "indigo",
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
    icon: "🐾",
    color: "amber",
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
    icon: "📦",
    color: "teal",
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
    icon: "💻",
    color: "violet",
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
    icon: "⚖️",
    color: "slate",
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
  { name: "Plumbers", slug: "plumbers", icon: "🔧" },
  { name: "Electricians", slug: "electricians", icon: "⚡" },
  { name: "House Cleaning", slug: "house-cleaning", icon: "🧹" },
  { name: "Hairdressers", slug: "hairdressers", icon: "✂️" },
  { name: "Mechanics", slug: "mechanics", icon: "🔧" },
  { name: "Math Tutors", slug: "math-tutors", icon: "📐" },
  { name: "Photographers", slug: "photographers", icon: "📸" },
  { name: "Massage Therapists", slug: "massage-therapists", icon: "💆" },
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
              BROWSE SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Find the perfect professional
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl mx-auto mb-12">
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
                  className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-16 bg-black border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Results for "{searchQuery}"
            </h2>
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredServices.map((service, i) => (
                  <Link
                    key={service.slug}
                    href={`/category/${service.slug}`}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 hover:border-emerald-500/50 transition-colors group"
                  >
                    <div className="text-white font-medium text-center group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </div>
                    <div className="text-neutral-600 text-xs text-center mt-1">
                      {service.count} professionals
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-neutral-500 text-center py-12">
                No services found matching "{searchQuery}"
              </div>
            )}
          </div>
        </section>
      )}

      {/* Popular Services */}
      {!searchQuery && (
        <section className="py-16 bg-black border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-white mb-8">
                Popular Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {popularServices.map((service, i) => (
                  <Link
                    key={service.slug}
                    href={`/category/${service.slug}`}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-emerald-500/50 transition-colors group"
                  >
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-white font-medium text-center group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs */}
      {!searchQuery && (
        <section className="py-8 bg-black border-t border-neutral-900 sticky top-16 z-40 bg-black/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === null
                    ? "bg-emerald-500 text-black"
                    : "bg-neutral-900 text-neutral-400 hover:text-white"
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
                      ? "bg-emerald-500 text-black"
                      : "bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Categories Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                    <div className="text-neutral-500 text-sm">
                      {category.services.length} services
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/category/${service.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-900 transition-colors group"
                    >
                      <div className="text-neutral-300 group-hover:text-white transition-colors">
                        {service.name}
                      </div>
                      <div className="text-neutral-600 text-sm group-hover:text-emerald-400 transition-colors">
                        {service.count}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
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
              Can't find what you're looking for?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              We're constantly adding new services. Let us know what you need.
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
