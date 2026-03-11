"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { VendorCategoryValueProp } from "@/components/vendor-category-value-prop";
import { VendorPricingComparison } from "@/components/vendor-pricing-comparison";
import { LampContainer } from "@/components/ui/lamp-effect";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

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

// Service categories for vendors (same as services page but from vendor perspective)
const vendorServiceCategories = [
  { name: "Home Services", icon: "🏠", slug: "home-services", services: ["Plumbers", "Electricians", "Carpenters", "Painters", "Builders", "Gardeners", "Pool Cleaners", "Pest Control", "AC Repair", "Appliance Repair", "Handyman", "Roofers", "Tilers", "Welders", "Aluminum & Glass"], painPoint: "Emergency calls at odd hours", bouulBenefit: "Set your own availability. You control when you work." },
  { name: "Cleaning", icon: "✨", slug: "cleaning", services: ["House Cleaning", "Carpet Cleaning", "Office Cleaning", "Deep Cleaning", "Move-In/Out Cleaning", "Window Cleaning", "Upholstery Cleaning", "Pressure Washing"], painPoint: "Clients don't value your expertise", bouulBenefit: "Showcase before/after videos. Let your work speak." },
  { name: "Beauty & Wellness", icon: "💅", slug: "beauty", services: ["Hairdressers", "Barbers", "Nail Technicians", "Massage Therapists", "Facial Treatments", "Makeup Artists", "Eyelash & Brows", "Spas", "Personal Trainers", "Yoga Instructors"], painPoint: "Last-minute cancellations", bouulBenefit: "Require deposits. Protect your time and income." },
  { name: "Automotive", icon: "🚗", slug: "automotive", services: ["Mechanics", "Car Detailing", "Panel Beaters", "Towing Services", "Car Wash", "Windscreen Repair", "Auto Electricians"], painPoint: "Customers question your pricing", bouulBenefit: "Transparent quotes upfront. No more haggling." },
  { name: "Education", icon: "📚", slug: "education", services: ["Math Tutors", "English Tutors", "Science Tutors", "Language Lessons", "Music Lessons", "Computer Lessons", "Homework Help", "Exam Prep"], painPoint: "Hard to prove your qualifications", bouulBenefit: "Verified badges + reviews. Credibility built-in." },
  { name: "Health & Medical", icon: "🏥", slug: "health", services: ["Physiotherapists", "Dietitians", "Counselors", "Nurses", "Elderly Care", "Baby Nurses", "First Aid Training"], painPoint: "Insurance paperwork nightmares", bouulBenefit: "Handle bookings, not bureaucracy. We simplify admin." },
  { name: "Events & Photography", icon: "📸", slug: "events", services: ["Photographers", "Videographers", "Event Planners", "Caterers", "DJs", "Live Bands", "Decorators", "MCs"], painPoint: "Seasonal income instability", bouulBenefit: "Year-round visibility. Peak season or not." },
  { name: "Professional", icon: "💼", slug: "professional", services: ["Accountants", "Bookkeepers", "Tax Consultants", "Legal Services", "Business Consultants", "Marketing Agencies", "Web Designers", "Graphic Designers"], painPoint: "Referrals dry up sometimes", bouulBenefit: "Consistent inbound leads. No more feast or famine." },
  { name: "Pets", icon: "🐾", slug: "pets", services: ["Pet Groomers", "Dog Walkers", "Pet Sitters", "Veterinarians", "Pet Training"], painPoint: "Clients don't trust strangers with pets", bouulBenefit: "Verified profiles + reviews. Trust established instantly." },
  { name: "Logistics", icon: "📦", slug: "logistics", services: ["Removal Companies", "Courier Services", "Furniture Delivery", "Storage Services", "Skip Hire"], painPoint: "Fuel costs eating margins", bouulBenefit: "Dynamic pricing tools. Adjust for distance, load, urgency." },
  { name: "Tech & IT", icon: "💻", slug: "tech", services: ["IT Support", "Computer Repair", "Network Installation", "Security Systems", "CCTV Installation", "Data Recovery"], painPoint: "Clients don't understand technical value", bouulBenefit: "Show expertise through content. Education converts." },
  { name: "Legal & Financial", icon: "⚖️", slug: "legal", services: ["Attorneys", "Notaries", "Financial Advisors", "Insurance Agents", "Real Estate Agents"], painPoint: "Compliance limits marketing", bouulBenefit: "Professional platform. Compliant by design." },
];

const painPoints = [
  {
    problem: "15-25% Commission Fees",
    current: "Other platforms take a huge cut of every job",
    bouul: "0% commission. Keep 100% of what you earn.",
    icon: "💸",
  },
  {
    problem: "Restricted Customer Access",
    current: "Can't build direct relationships with your customers",
    bouul: "Full customer data access. Build your client base.",
    icon: "🔒",
  },
  {
    problem: "Basic Profile Templates",
    current: "Limited customization, blend in with everyone else",
    bouul: "Complete branding control. Stand out your way.",
    icon: "🎨",
  },
  {
    problem: "Slow Payouts (5-7 days)",
    current: "Wait over a week to access your earnings",
    bouul: "24-48 hour payouts. Your money, faster.",
    icon: "⏰",
  },
  {
    problem: "No Marketing Tools",
    current: "Rely on platform alone for visibility",
    bouul: "AI Discovery + video content + social following.",
    icon: "📢",
  },
  {
    problem: "Email-Only Support",
    current: "Wait days for responses to urgent issues",
    bouul: "24/7 priority support. Real humans, real help.",
    icon: "🎧",
  },
];

// Personalized Hero Component
const PersonalizedVendorHero: React.FC = () => {
  const [businessName, setBusinessName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categoryData = vendorServiceCategories.find(c => c.slug === selectedCategory);

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            MADE FOR YOU
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            {businessName && selectedCategory ? (
              <>
                Grow <span className="text-emerald-400">{businessName}</span> with Bouul
              </>
            ) : businessName ? (
              <>
                Grow <span className="text-emerald-400">{businessName}</span> with Bouul
              </>
            ) : (
              <>
                Grow <span className="text-neutral-500">your business</span> with Bouul
              </>
            )}
          </h2>
          <p className="text-neutral-500 text-lg mb-8 max-w-2xl mx-auto">
            {businessName && selectedCategory ? (
              <>
                Built specifically for {businessName} and {categoryData?.name.toLowerCase()} professionals. 
                {categoryData?.painPoint && ` Tired of ${categoryData.painPoint.toLowerCase()}?`}
              </>
            ) : businessName ? (
              <>
                See how {businessName} can earn more, work smarter, and keep 100% of profits.
              </>
            ) : (
              <>
                See how you can earn more, work smarter, and keep 100% of your profits.
              </>
            )}
          </p>

          {/* Input Fields */}
          <div className="max-w-2xl mx-auto mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your business name..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                {businessName && (
                  <button
                    onClick={() => setBusinessName("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-full text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select your service category...</option>
                {vendorServiceCategories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic Benefits - Shows when both name and category selected */}
          {businessName && selectedCategory && categoryData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
            >
              <div className="bg-neutral-950 border border-emerald-500/30 rounded-xl p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-emerald-400 text-xs font-semibold uppercase">Your Advantage</div>
                </div>
                <div className="text-white font-medium">{categoryData.bouulBenefit}</div>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-left">
                <div className="text-neutral-500 text-xs mb-1">With Bouul,</div>
                <div className="text-white font-medium">{businessName} keeps 100% of earnings</div>
                <div className="text-emerald-400 text-sm mt-1">R0 commission fees</div>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-left">
                <div className="text-neutral-500 text-xs mb-1">With Bouul,</div>
                <div className="text-white font-medium">{businessName} gets paid in 24-48h</div>
                <div className="text-emerald-400 text-sm mt-1">Not 5-7 business days</div>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-left">
                <div className="text-neutral-500 text-xs mb-1">With Bouul,</div>
                <div className="text-white font-medium">{businessName} owns customer data</div>
                <div className="text-emerald-400 text-sm mt-1">Build your client base</div>
              </div>
            </motion.div>
          )}

          {/* Category-specific CTA */}
          {businessName && selectedCategory && categoryData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <div className="inline-block bg-gradient-to-r from-emerald-500/10 via-emerald-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8">
                <div className="text-white font-semibold text-xl mb-4">
                  Ready to transform {businessName}?
                </div>
                <p className="text-neutral-500 text-sm mb-6 max-w-md">
                  Join other {categoryData.name.toLowerCase()} professionals earning more on Bouul.
                </p>
                <a
                  href="/vendors"
                  className="inline-block px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
                >
                  Create Free {categoryData.name} Profile
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainPointsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            THE PROBLEM
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Other platforms profit from your work
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            You built the skills. You do the work. Why should they take the biggest cut?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <div className="text-white font-semibold text-lg mb-3">{point.problem}</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="text-neutral-500 text-sm">{point.current}</div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-emerald-400 text-sm font-medium">{point.bouul}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Categories Section
const ServiceCategoriesSection: React.FC = () => {
  const [businessName, setBusinessName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categoryData = vendorServiceCategories.find(c => c.slug === selectedCategory);

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            WHO CAN JOIN
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            {businessName ? (
              <>Is {businessName} a fit?</>
            ) : (
              <>Every trade. Every profession.</>
            )}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            {businessName ? (
              <>
                Select your category to see how Bouul helps {businessName} succeed.
              </>
            ) : (
              <>
                If you provide a service, Bouul is built for you. 71+ categories and growing.
              </>
            )}
          </p>
        </motion.div>

        {/* Business Name Input for Personalization */}
        {!businessName && (
          <div className="max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Enter your business name..."
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors text-center"
            />
          </div>
        )}
        {businessName && (
          <div className="max-w-md mx-auto mb-12 flex items-center justify-center gap-3">
            <div className="text-emerald-400 text-sm">Personalizing for:</div>
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-medium">
              {businessName}
            </div>
            <button
              onClick={() => { setBusinessName(""); setSelectedCategory(""); }}
              className="text-neutral-500 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendorServiceCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setSelectedCategory(category.slug)}
              className={cn(
                "bg-neutral-950 border rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.02]",
                selectedCategory === category.slug
                  ? "border-emerald-500 bg-emerald-500/5"
                  : "border-neutral-800 hover:border-neutral-700"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 bg-neutral-900 rounded-full text-neutral-400 text-xs hover:text-emerald-400 hover:bg-neutral-800 transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
              {selectedCategory === category.slug && businessName && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 border-t border-neutral-800"
                >
                  <div className="text-neutral-500 text-xs mb-2">For {businessName}:</div>
                  <div className="text-neutral-400 text-sm mb-2">Challenge: {category.painPoint}</div>
                  <div className="text-emerald-400 text-sm font-medium">✓ {category.bouulBenefit}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedCategory && categoryData && businessName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500/10 via-emerald-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8">
              <div className="text-white font-semibold text-xl mb-4">
                {businessName} belongs on Bouul
              </div>
              <p className="text-neutral-500 text-sm mb-6 max-w-md">
                Join {categoryData.name.toLowerCase()} professionals already growing with Bouul.
              </p>
              <a
                href="/vendors"
                className="inline-block px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
              >
                Create Your Free Profile
              </a>
            </div>
          </motion.div>
        )}

        {!selectedCategory && (
          <div className="text-center mt-12">
            <p className="text-neutral-500 text-sm mb-6">
              Don't see your category? We're always adding new services.
            </p>
            <a
              href="/vendors"
              className="inline-block px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full transition-colors border border-neutral-800"
            >
              Contact Us About Your Service
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <LampContainer className="min-h-[350px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center relative z-10"
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
              href="/vendors"
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
      </LampContainer>

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

      {/* Personalization Input */}
      <PersonalizedVendorHero />

      {/* Pain Points */}
      <PainPointsSection />

      {/* Service Categories - Who Can Join */}
      <ServiceCategoriesSection />

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
