"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { sceneForCategory, sceneForPopular } from "@/lib/scene-images";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal,
  Flame,
  Wrench,
  Zap,
  Droplets,
  Scissors,
  Car,
  GraduationCap,
  Heart,
  Camera,
  Briefcase,
  Dog,
  Truck,
  Monitor,
  Check,
  X,
  Lock,
  Clock,
  Brain,
  MessageCircle,
} from "lucide-react";

// Service categories with their services
const serviceCategories = [
  {
    name: "Home Services",
    icon: Wrench,
    badge: "15 Services",
    tagline: "Plumbing, electrical, handyman, painting & garden maintenance",
    services: [
      { name: "Plumbers", slug: "plumbers" },
      { name: "Electricians", slug: "electricians" },
      { name: "Carpenters", slug: "carpenters" },
      { name: "Painters", slug: "painters" },
      { name: "Builders", slug: "builders" },
      { name: "Gardeners", slug: "gardeners" },
      { name: "Pool Cleaners", slug: "pool-cleaners" },
      { name: "Pest Control", slug: "pest-control" },
      { name: "AC Repair", slug: "ac-repair" },
      { name: "Appliance Repair", slug: "appliance-repair" },
      { name: "Handyman", slug: "handyman" },
      { name: "Roofers", slug: "roofers" },
      { name: "Tilers", slug: "tilers" },
      { name: "Welders", slug: "welders" },
      { name: "Aluminum & Glass", slug: "aluminum-glass" },
    ],
  },
  {
    name: "Cleaning Services",
    icon: Droplets,
    badge: "8 Services",
    tagline: "House, deep, carpet, window & move-in/out cleaning",
    services: [
      { name: "House Cleaning", slug: "house-cleaning" },
      { name: "Carpet Cleaning", slug: "carpet-cleaning" },
      { name: "Office Cleaning", slug: "office-cleaning" },
      { name: "Deep Cleaning", slug: "deep-cleaning" },
      { name: "Move-In/Out Cleaning", slug: "move-cleaning" },
      { name: "Window Cleaning", slug: "window-cleaning" },
      { name: "Upholstery Cleaning", slug: "upholstery-cleaning" },
      { name: "Pressure Washing", slug: "pressure-washing" },
    ],
  },
  {
    name: "Beauty & Wellness",
    icon: Scissors,
    badge: "10 Services",
    tagline: "Hair, nails, massage, personal training & skin treatments",
    services: [
      { name: "Hairdressers", slug: "hairdressers" },
      { name: "Barbers", slug: "barbers" },
      { name: "Nail Technicians", slug: "nail-technicians" },
      { name: "Massage Therapists", slug: "massage-therapists" },
      { name: "Facial Treatments", slug: "facial-treatments" },
      { name: "Makeup Artists", slug: "makeup-artists" },
      { name: "Eyelash & Brows", slug: "eyelash-brows" },
      { name: "Spas", slug: "spas" },
      { name: "Personal Trainers", slug: "personal-trainers" },
      { name: "Yoga Instructors", slug: "yoga-instructors" },
    ],
  },
  {
    name: "Automotive",
    icon: Car,
    badge: "7 Services",
    tagline: "Mechanics, car detailing, panel beaters & towing dispatch",
    services: [
      { name: "Mechanics", slug: "mechanics" },
      { name: "Car Detailing", slug: "car-detailing" },
      { name: "Panel Beaters", slug: "panel-beaters" },
      { name: "Towing Services", slug: "towing-services" },
      { name: "Car Wash", slug: "car-wash" },
      { name: "Windscreen Repair", slug: "windscreen-repair" },
      { name: "Auto Electricians", slug: "auto-electricians" },
    ],
  },
  {
    name: "Education & Tuition",
    icon: GraduationCap,
    badge: "8 Services",
    tagline: "Math, science, languages, music & IEB/CAPS exam prep",
    services: [
      { name: "Math Tutors", slug: "math-tutors" },
      { name: "English Tutors", slug: "english-tutors" },
      { name: "Science Tutors", slug: "science-tutors" },
      { name: "Language Lessons", slug: "language-lessons" },
      { name: "Music Lessons", slug: "music-lessons" },
      { name: "Computer Lessons", slug: "computer-lessons" },
      { name: "Homework Help", slug: "homework-help" },
      { name: "Exam Prep", slug: "exam-prep" },
    ],
  },
  {
    name: "Health & Medical",
    icon: Heart,
    badge: "7 Services",
    tagline: "Physiotherapy, home nurses, eldercare & baby wellness",
    services: [
      { name: "Physiotherapists", slug: "physiotherapists" },
      { name: "Dietitians", slug: "dietitians" },
      { name: "Counselors", slug: "counselors" },
      { name: "Nurses", slug: "nurses" },
      { name: "Elderly Care", slug: "elderly-care" },
      { name: "Baby Nurses", slug: "baby-nurses" },
      { name: "First Aid Training", slug: "first-aid-training" },
    ],
  },
  {
    name: "Events & Photography",
    icon: Camera,
    badge: "8 Services",
    tagline: "Photographers, videographers, caterers, DJs & decor",
    services: [
      { name: "Photographers", slug: "photographers" },
      { name: "Videographers", slug: "videographers" },
      { name: "Event Planners", slug: "event-planners" },
      { name: "Caterers", slug: "caterers" },
      { name: "DJs", slug: "djs" },
      { name: "Live Bands", slug: "live-bands" },
      { name: "Decorators", slug: "decorators" },
      { name: "MCs", slug: "mcs" },
    ],
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    badge: "8 Services",
    tagline: "Accountants, tax filings, legal contracts & web design",
    services: [
      { name: "Accountants", slug: "accountants" },
      { name: "Bookkeepers", slug: "bookkeepers" },
      { name: "Tax Consultants", slug: "tax-consultants" },
      { name: "Legal Services", slug: "legal-services" },
      { name: "Business Consultants", slug: "business-consultants" },
      { name: "Marketing Agencies", slug: "marketing-agencies" },
      { name: "Web Designers", slug: "web-designers" },
      { name: "Graphic Designers", slug: "graphic-designers" },
    ],
  },
  {
    name: "Pets",
    icon: Dog,
    badge: "5 Services",
    tagline: "Mobile pet hydrobath grooming, dog walking & sitters",
    services: [
      { name: "Pet Groomers", slug: "pet-groomers" },
      { name: "Dog Walkers", slug: "dog-walkers" },
      { name: "Pet Sitters", slug: "pet-sitters" },
      { name: "Veterinarians", slug: "veterinarians" },
      { name: "Pet Training", slug: "pet-training" },
    ],
  },
  {
    name: "Logistics & Moving",
    icon: Truck,
    badge: "5 Services",
    tagline: "House removals, store bakkies, couriers & skip hire",
    services: [
      { name: "Removal Companies", slug: "removal-companies" },
      { name: "Courier Services", slug: "courier-services" },
      { name: "Furniture Delivery", slug: "furniture-delivery" },
      { name: "Storage Services", slug: "storage-services" },
      { name: "Skip Hire", slug: "skip-hire" },
    ],
  },
  {
    name: "Tech & IT",
    icon: Monitor,
    badge: "6 Services",
    tagline: "CCTV installation, laptop repair, mesh Wi-Fi & security",
    services: [
      { name: "IT Support", slug: "it-support" },
      { name: "Computer Repair", slug: "computer-repair" },
      { name: "Network Installation", slug: "network-installation" },
      { name: "Security Systems", slug: "security-systems" },
      { name: "CCTV Installation", slug: "cctv-installation" },
      { name: "Data Recovery", slug: "data-recovery" },
    ],
  },
  {
    name: "Legal & Financial",
    icon: ShieldCheck,
    badge: "5 Services",
    tagline: "Attorneys, financial advisors, real estate & notaries",
    services: [
      { name: "Attorneys", slug: "attorneys" },
      { name: "Notaries", slug: "notaries" },
      { name: "Financial Advisors", slug: "financial-advisors" },
      { name: "Insurance Agents", slug: "insurance-agents" },
      { name: "Real Estate Agents", slug: "real-estate-agents" },
    ],
  },
];

const popularServices = [
  { name: "Plumbers", slug: "plumbers", tag: "Emergency & Home" },
  { name: "Electricians", slug: "electricians", tag: "24/7 Power" },
  { name: "House Cleaning", slug: "house-cleaning", tag: "Eco Clean" },
  { name: "Hairdressers", slug: "hairdressers", tag: "Beauty & Style" },
  { name: "Mechanics", slug: "mechanics", tag: "Auto Diagnostics" },
  { name: "Math Tutors", slug: "math-tutors", tag: "Grade 8-12" },
  { name: "Photographers", slug: "photographers", tag: "Events & Media" },
  { name: "Massage Therapists", slug: "massage-therapists", tag: "Recovery" },
];

const SEARCH_SUGGESTIONS = [
  "Plumber",
  "Electrician",
  "House Cleaning",
  "Locksmith",
  "Towing",
  "Math Tutor",
  "CCTV",
  "Mobile Grooming",
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeCategoryObj = serviceCategories.find((c) => c.name === selectedCategory);

  const filteredCategories = serviceCategories.filter((cat) => {
    if (!selectedCategory && searchQuery) {
      return cat.services.some((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      return cat.name === selectedCategory;
    }
    return true;
  });

  const filteredServices = searchQuery
    ? serviceCategories.flatMap((cat) =>
        cat.services.filter((s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. ELEGANT HERO & INTEGRATED SEARCH ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-paper via-b-paper-raised to-b-paper pt-32 pb-16 md:pt-40 md:pb-24 border-b border-b-line">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6"
          >
            {/* Active Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-b-green/30 bg-b-green/10 px-4 py-1.5 text-xs font-semibold text-b-green-deep shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-b-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-b-green-deep"></span>
              </span>
              <span>71+ Verified Service Categories • 5,000+ Active Professionals</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-b-ink leading-[1.05]">
              Find verified professionals. <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                Every service, escrow protected.
              </span>
            </h1>

            <p className="text-b-ink-soft text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore thousands of background-cleared service providers across South Africa with upfront pricing, live tracking, and digital escrow security.
            </p>

            {/* Elevated Search Bar Box */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative rounded-2xl border border-b-line bg-b-paper p-2 shadow-2xl transition-all focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
                <div className="flex items-center gap-3 px-4 py-1">
                  <Search className="h-5 w-5 text-b-ink-faint shrink-0" />
                  <input
                    type="text"
                    placeholder="Search any service (e.g., plumber, electrician, nanny, CCTV)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent py-2.5 text-b-ink placeholder:text-b-ink-faint focus:outline-none text-base font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs font-bold text-b-ink-faint hover:text-b-ink px-2 py-1 bg-b-line/50 rounded-md flex items-center gap-1"
                    >
                      <X className="h-3.5 w-3.5" /> Clear
                    </button>
                  )}
                  <button className="rounded-xl bg-b-green px-6 py-3 font-bold text-b-forest hover:bg-emerald-400 transition-all shadow-md shrink-0 flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
                <span className="text-b-ink-faint font-medium">Popular:</span>
                {SEARCH_SUGGESTIONS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="rounded-full border border-b-line bg-b-paper-raised px-3 py-1 text-b-ink-soft hover:border-emerald-500 hover:text-b-ink transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. LIVE SEARCH RESULTS (If user is typing) ── */}
      {searchQuery && (
        <section className="py-16 bg-b-paper border-b border-b-line">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-extrabold text-b-ink">
                Matching services for &quot;{searchQuery}&quot;
              </h2>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full">
                {filteredServices.length} Results Found
              </span>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredServices.map((service) => {
                  const scene = sceneForPopular(service.slug);
                  return (
                    <Link
                      key={service.slug}
                      href={`/category/${service.slug}`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised transition-all hover:border-emerald-500 hover:shadow-md"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-b-paper-deep relative">
                        <img
                          src={scene.src}
                          alt={service.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                          Gold Standard
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-b-ink group-hover:text-emerald-600 transition-colors">
                          {service.name}
                        </span>
                        <ChevronRight className="h-4 w-4 text-b-ink-faint group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-b-line bg-b-paper-raised p-12 text-center text-b-ink-soft">
                <Search className="h-8 w-8 mx-auto text-b-ink-faint mb-3" />
                <p className="font-bold text-base text-b-ink">No services found matching &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-b-ink-soft mt-1">Try searching for &quot;Plumber&quot;, &quot;Electrician&quot;, &quot;CCTV&quot;, or browse our categories below.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 3. POPULAR SERVICES GRID ── */}
      {!searchQuery && !selectedCategory && (
        <section className="py-20 px-5 max-w-6xl mx-auto border-b border-b-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
                <Flame className="h-3.5 w-3.5 text-amber-500" />
                <span>Most Requested</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-b-ink">
                Popular Service Categories
              </h2>
            </div>
            <p className="text-sm text-b-ink-soft mt-2 md:mt-0 max-w-md">
              Instant dispatch &amp; verified background checks on South Africa&apos;s most booked home and lifestyle services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service, idx) => {
              const scene = sceneForPopular(service.slug);
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    href={`/category/${service.slug}`}
                    className="group flex flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden hover:border-emerald-500/40 hover:shadow-xl transition-all h-full"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full bg-b-paper-deep relative overflow-hidden">
                        <img
                          src={scene.src}
                          alt={service.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div className="absolute top-3 left-3 bg-b-ink/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                          {service.tag}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-lg text-b-ink group-hover:text-emerald-600 transition-colors">
                            {service.name}
                          </h3>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 pb-4 text-[11px] font-medium text-b-ink-faint flex items-center justify-between border-t border-b-line/60 pt-3">
                      <span>Verified Professionals</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Escrow Protected
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 4. CATEGORY FILTER TABS (STICKY) ── */}
      {!searchQuery && (
        <section className="py-6 bg-b-paper border-b border-b-line sticky top-20 md:top-16 z-40 bg-b-paper/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  selectedCategory === null
                    ? "bg-b-ink text-white shadow-md scale-[1.02]"
                    : "bg-b-paper-raised text-b-ink-soft border border-b-line hover:border-b-ink/30 hover:text-b-ink"
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>All 12 Main Categories</span>
              </button>

              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? "bg-b-ink text-white shadow-md scale-[1.02]"
                        : "bg-b-paper-raised text-b-ink-soft border border-b-line hover:border-b-ink/30 hover:text-b-ink"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-b-sun" : "text-b-ink-faint"}`} />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. DIRECTORY DISPLAY: ALL CATEGORIES VS FILTERED CATEGORY ── */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        {selectedCategory && activeCategoryObj ? (
          /* ── RICH FILTERED STATE (Fills layout cleanly) ── */
          <div className="space-y-10">
            {/* Active Category Header Banner */}
            <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold text-2xl shadow-lg">
                  {React.createElement(activeCategoryObj.icon, { className: "h-8 w-8" })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-3xl font-extrabold text-b-ink">
                      {activeCategoryObj.name}
                    </h2>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full">
                      {activeCategoryObj.badge}
                    </span>
                  </div>
                  <p className="text-sm text-b-ink-soft mt-1">
                    {activeCategoryObj.tagline}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory(null)}
                className="rounded-full border border-b-line bg-b-paper px-4 py-2 text-xs font-bold text-b-ink hover:bg-b-paper-deep transition-all flex items-center gap-1.5 shrink-0"
              >
                <X className="h-3.5 w-3.5 text-b-ink-faint" />
                <span>Show All Categories</span>
              </button>
            </div>

            {/* 2-Column Responsive Layout: Expanded Sub-Services Grid on Left (7 cols) & Zola AI Sidebar on Right (5 cols) */}
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Left Column: Expanded Sub-services grid */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-b-ink-faint">
                    Individual Service Pages ({activeCategoryObj.services.length})
                  </span>
                  <span className="text-xs font-medium text-emerald-600">
                    Click any service to view gold standard use case
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {activeCategoryObj.services.map((service) => {
                    const scene = sceneForPopular(service.slug);
                    return (
                      <Link
                        key={service.slug}
                        href={`/category/${service.slug}`}
                        className="group flex flex-col justify-between rounded-2xl border border-b-line bg-b-paper-raised p-4 transition-all hover:border-emerald-500/50 hover:shadow-md"
                      >
                        <div>
                          <div className="aspect-[16/10] w-full rounded-xl bg-b-paper-deep overflow-hidden relative mb-3">
                            <img
                              src={scene.src}
                              alt={service.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                              }}
                            />
                            <div className="absolute top-2 right-2 bg-b-ink/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                              Escrow Safe
                            </div>
                          </div>

                          <h4 className="font-display font-bold text-base text-b-ink group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                            <span>{service.name}</span>
                            <ChevronRight className="h-4 w-4 text-b-ink-faint group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                          </h4>
                        </div>

                        <div className="mt-3 pt-3 border-t border-b-line/60 flex items-center justify-between text-[10px] text-b-ink-faint">
                          <span>Avg Confirmation: 5 Mins</span>
                          <span className="font-bold text-emerald-600">Explore Page →</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Sticky Zola AI Assistant & Category Guarantee Card */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
                {/* Zola AI Assistant Box */}
                <div className="rounded-3xl border border-b-forest-line bg-b-forest p-6 text-b-cream shadow-xl space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-b-forest-line pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-b-sun text-b-ink font-bold">
                        <Sparkles className="h-4 w-4 text-b-ink" />
                      </span>
                      <span className="font-display font-bold text-sm text-white">Zola AI Assistant</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      {activeCategoryObj.name} Diagnostic
                    </span>
                  </div>

                  <p className="text-xs text-b-cream/80 leading-relaxed">
                    Not sure which {activeCategoryObj.name.toLowerCase()} professional fits your project? Ask Zola AI to analyze your job photos and prepare an upfront quote in seconds.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-b-forest-raised border border-b-forest-line space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-b-sun">
                      <Brain className="h-4 w-4" />
                      <span>{activeCategoryObj.name} AI Memory</span>
                    </div>
                    <p className="text-[11px] text-b-cream/70 leading-relaxed">
                      Zola remembers your specific requirements, property access codes, and price estimates so your pro arrives fully prepared.
                    </p>
                  </div>

                  <Link
                    href="/download"
                    className="w-full rounded-full bg-b-green py-3 text-center text-xs font-extrabold text-b-forest shadow-md hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Ask Zola About {activeCategoryObj.name}</span>
                  </Link>
                </div>

                {/* Category Trust Signals */}
                <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-sm">
                  <h4 className="font-display font-bold text-sm text-b-ink flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>{activeCategoryObj.name} Guarantee</span>
                  </h4>

                  <div className="space-y-3 text-xs text-b-ink-soft">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% Identity &amp; Criminal Clearance Checked</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Lock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Digital Escrow Shield protects your funds until work is done</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Live GPS arrival tracking on mobile dispatch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── DEFAULT ALL CATEGORIES GRID (3-Column Layout) ── */
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
                Browse All 71+ Verified Services
              </h2>
              <p className="mt-4 text-lg text-b-ink-soft">
                Every category links to a gold-standard use-case page complete with Zola AI diagnostics, guide pricing, and verified contractor profiles.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category, catIndex) => {
                const Icon = category.icon;
                const scene = sceneForCategory(category.name);
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.04 }}
                    className="bg-b-paper-raised border border-b-line rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Image Header */}
                      <div className="relative w-full aspect-[16/9] bg-b-paper-deep overflow-hidden">
                        <img
                          src={scene.src}
                          alt={category.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-b-ink/80 via-b-ink/20 to-transparent" />

                        <div className="absolute top-3 left-3 bg-b-paper/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-b-ink flex items-center gap-1.5 shadow-sm">
                          <Icon className="h-3 w-3 text-emerald-600" />
                          <span>{category.badge}</span>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                          <h3 className="font-display text-xl font-extrabold text-white drop-shadow-md">
                            {category.name}
                          </h3>
                        </div>
                      </div>

                      {/* Sub-services links */}
                      <div className="p-5 space-y-1.5">
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/category/${service.slug}`}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-b-paper text-xs font-semibold text-b-ink-soft hover:text-emerald-600 transition-colors group"
                          >
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 opacity-70 group-hover:opacity-100" />
                              <span>{service.name}</span>
                            </span>
                            <ChevronRight className="h-3.5 w-3.5 text-b-ink-faint group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border-t border-b-line/60 bg-b-paper/40 text-[11px] text-b-ink-faint flex items-center justify-between">
                      <span>Escrow Protection Active</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" /> Vetted Pros
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* ── 6. BOTTOM CTA ── */}
      <section className="py-24 bg-b-paper-deep border-t border-b-line relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              <span>South Africa&apos;s Trusted Services Platform</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight">
              Ready to book a verified professional?
            </h2>

            <p className="text-b-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
              Download the Bouul app today to match background-checked contractors, chat with Zola AI, and pay securely with digital escrow protection.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <span>Download Bouul App</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
