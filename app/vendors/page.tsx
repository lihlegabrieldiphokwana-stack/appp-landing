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

// Service categories for vendors with detailed pain points per service
const vendorServiceCategories = [
  { 
    name: "Home Services", 
    icon: "🏠", 
    slug: "home-services", 
    services: [
      { name: "Plumbers", painPoint: "Emergency calls at 2AM", bouulBenefit: "Set emergency hours & premium rates" },
      { name: "Electricians", painPoint: "Clients sourcing cheap materials", bouulBenefit: "Specify exact materials in quotes" },
      { name: "Carpenters", painPoint: "Scope creep on custom projects", bouulBenefit: "Milestone-based payments" },
      { name: "Painters", painPoint: "Weather delays affecting income", bouulBenefit: "Flexible rescheduling policies" },
      { name: "Builders", painPoint: "Payment delays after completion", bouulBenefit: "Progress payments built-in" },
      { name: "Gardeners", painPoint: "Seasonal work inconsistency", bouulBenefit: "Year-round subscription packages" },
      { name: "Pool Cleaners", painPoint: "Chemical costs eating margins", bouulBenefit: "Dynamic pricing per pool size" },
      { name: "Pest Control", painPoint: "Follow-up visits unpaid", bouulBenefit: "Guarantee packages with deposits" },
      { name: "AC Repair", painPoint: "Peak season burnout", bouulBenefit: "Demand-based surge pricing" },
      { name: "Appliance Repair", painPoint: "Diagnostic time uncompensated", bouulBenefit: "Charge call-out fees" },
      { name: "Handyman", painPoint: "Too many small jobs, not enough profit", bouulBenefit: "Minimum booking values" },
      { name: "Roofers", painPoint: "Insurance claim complexities", bouulBenefit: "Direct insurer billing options" },
      { name: "Tilers", painPoint: "Material wastage costs", bouulBenefit: "Precise quote calculators" },
      { name: "Welders", painPoint: "Specialized skills undervalued", bouulBenefit: "Portfolio showcases expertise" },
      { name: "Aluminum & Glass", painPoint: "Measurement errors costly", bouulBenefit: "Digital measurement tools" },
    ],
    categoryPainPoint: "Emergency calls at odd hours",
    categoryBenefit: "Set your own availability. You control when you work.",
  },
  { 
    name: "Cleaning", 
    icon: "✨", 
    slug: "cleaning", 
    services: [
      { name: "House Cleaning", painPoint: "Clients expecting hotel-level service", bouulBenefit: "Clear service tier definitions" },
      { name: "Carpet Cleaning", painPoint: "Equipment transport costs", bouulBenefit: "Distance-based pricing" },
      { name: "Office Cleaning", painPoint: "After-hours work life balance", bouulBenefit: "Set preferred time slots" },
      { name: "Deep Cleaning", painPoint: "Physically demanding, low rates", bouulBenefit: "Premium pricing for deep services" },
      { name: "Move-In/Out Cleaning", painPoint: "Last-minute booking chaos", bouulBenefit: "Advance booking requirements" },
      { name: "Window Cleaning", painPoint: "Height work risk vs reward", bouulBenefit: "Risk-adjusted pricing tools" },
      { name: "Upholstery Cleaning", painPoint: "Stain removal guarantees", bouulBenefit: "Realistic expectation setting" },
      { name: "Pressure Washing", painPoint: "Equipment maintenance costs", bouulBenefit: "Job pricing includes overhead" },
    ],
    categoryPainPoint: "Clients don't value your expertise",
    categoryBenefit: "Showcase before/after videos. Let your work speak.",
  },
  { 
    name: "Beauty & Wellness", 
    icon: "💅", 
    slug: "beauty", 
    services: [
      { name: "Hairdressers", painPoint: "No-shows killing schedule", bouulBenefit: "Non-refundable deposits" },
      { name: "Barbers", painPoint: "Walk-in unpredictability", bouulBenefit: "Appointment-only options" },
      { name: "Nail Technicians", painPoint: "Complex designs underpriced", bouulBenefit: "Photo-based price calculator" },
      { name: "Massage Therapists", painPoint: "Physical burnout", bouulBenefit: "Booking limits per day" },
      { name: "Facial Treatments", painPoint: "Product costs not covered", bouulBenefit: "Product-inclusive pricing" },
      { name: "Makeup Artists", painPoint: "Trial sessions unpaid", bouulBenefit: "Trial fee structures" },
      { name: "Eyelash & Brows", painPoint: "Touch-up requests", bouulBenefit: "Clear aftercare policies" },
      { name: "Spas", painPoint: "Staff scheduling nightmares", bouulBenefit: "Multi-therapist management" },
      { name: "Personal Trainers", painPoint: "Client consistency issues", bouulBenefit: "Package commitments" },
      { name: "Yoga Instructors", painPoint: "Venue costs", bouulBenefit: "Virtual class options" },
    ],
    categoryPainPoint: "Last-minute cancellations",
    categoryBenefit: "Require deposits. Protect your time and income.",
  },
  { 
    name: "Automotive", 
    icon: "🚗", 
    slug: "automotive", 
    services: [
      { name: "Mechanics", painPoint: "Customers questioning diagnostics", bouulBenefit: "Photo/video evidence sharing" },
      { name: "Car Detailing", painPoint: "Water/electricity at client location", bouulBenefit: "Mobile service premiums" },
      { name: "Panel Beaters", painPoint: "Insurance assessment delays", bouulBenefit: "Direct insurance partnerships" },
      { name: "Towing Services", painPoint: "Fuel costs fluctuating", bouulBenefit: "Dynamic distance pricing" },
      { name: "Car Wash", painPoint: "Weather dependency", bouulBenefit: "Indoor venue partnerships" },
      { name: "Windscreen Repair", painPoint: "Mobile service logistics", bouulBenefit: "Route optimization" },
      { name: "Auto Electricians", painPoint: "Specialized diagnostic equipment costs", bouulBenefit: "Premium skill pricing" },
    ],
    categoryPainPoint: "Customers question your pricing",
    categoryBenefit: "Transparent quotes upfront. No more haggling.",
  },
  { 
    name: "Education", 
    icon: "📚", 
    slug: "education", 
    services: [
      { name: "Math Tutors", painPoint: "Parents expecting grade guarantees", bouulBenefit: "Progress tracking, not promises" },
      { name: "English Tutors", painPoint: "Essay grading unpaid time", bouulBenefit: "Grading time included in rates" },
      { name: "Science Tutors", painPoint: "Lab equipment costs", bouulBenefit: "Material fees built-in" },
      { name: "Language Lessons", painPoint: "Student practice inconsistency", bouulBenefit: "Homework tracking tools" },
      { name: "Music Lessons", painPoint: "Instrument practice enforcement", bouulBenefit: "Practice log integration" },
      { name: "Computer Lessons", painPoint: "Software licensing costs", bouulBenefit: "License-inclusive pricing" },
      { name: "Homework Help", painPoint: "Parent communication overload", bouulBenefit: "Automated progress reports" },
      { name: "Exam Prep", painPoint: "Seasonal income peaks", bouulBenefit: "Year-round subscription models" },
    ],
    categoryPainPoint: "Hard to prove your qualifications",
    categoryBenefit: "Verified badges + reviews. Credibility built-in.",
  },
  { 
    name: "Health & Medical", 
    icon: "🏥", 
    slug: "health", 
    services: [
      { name: "Physiotherapists", painPoint: "Insurance claim paperwork", bouulBenefit: "Digital claim submissions" },
      { name: "Dietitians", painPoint: "Client compliance tracking", bouulBenefit: "Progress monitoring tools" },
      { name: "Counselors", painPoint: "Session note administration", bouulBenefit: "Integrated note-taking" },
      { name: "Nurses", painPoint: "Liability concerns for home visits", bouulBenefit: "Platform insurance coverage" },
      { name: "Elderly Care", painPoint: "Family communication demands", bouulBenefit: "Family portal updates" },
      { name: "Baby Nurses", painPoint: "Odd hour expectations", bouulBenefit: "Night shift premiums" },
      { name: "First Aid Training", painPoint: "Certification tracking", bouulBenefit: "Automated renewal reminders" },
    ],
    categoryPainPoint: "Insurance paperwork nightmares",
    categoryBenefit: "Handle bookings, not bureaucracy. We simplify admin.",
  },
  { 
    name: "Events & Photography", 
    icon: "📸", 
    slug: "events", 
    services: [
      { name: "Photographers", painPoint: "Editing time uncompensated", bouulBenefit: "Editing hours in quotes" },
      { name: "Videographers", painPoint: "Equipment depreciation", bouulBenefit: "Gear rental line items" },
      { name: "Event Planners", painPoint: "Vendor coordination chaos", bouulBenefit: "Vendor management portal" },
      { name: "Caterers", painPoint: "Last-minute headcount changes", bouulBenefit: "Final numbers deadline" },
      { name: "DJs", painPoint: "Song request management", bouulBenefit: "Pre-event planning tools" },
      { name: "Live Bands", painPoint: "Equipment transport logistics", bouulBenefit: "Venue requirement specs" },
      { name: "Decorators", painPoint: "Setup/teardown time unpaid", bouulBenefit: "Full event time billing" },
      { name: "MCs", painPoint: "Script preparation time", bouulBenefit: "Prep time compensation" },
    ],
    categoryPainPoint: "Seasonal income instability",
    categoryBenefit: "Year-round visibility. Peak season or not.",
  },
  { 
    name: "Professional", 
    icon: "💼", 
    slug: "professional", 
    services: [
      { name: "Accountants", painPoint: "Tax season burnout", bouulBenefit: "Off-season promotions" },
      { name: "Bookkeepers", painPoint: "Monthly retainer collection", bouulBenefit: "Auto-debit subscriptions" },
      { name: "Tax Consultants", painPoint: "Client document delays", bouulBenefit: "Document upload deadlines" },
      { name: "Legal Services", painPoint: "Initial consultation time-wasters", bouulBenefit: "Paid consultation fees" },
      { name: "Business Consultants", painPoint: "ROI proof demands", bouulBenefit: "Milestone tracking" },
      { name: "Marketing Agencies", painPoint: "Scope creep on campaigns", bouulBenefit: "Clear deliverable definitions" },
      { name: "Web Designers", painPoint: "Endless revision requests", bouulBenefit: "Revision limit policies" },
      { name: "Graphic Designers", painPoint: "Concept theft concerns", bouulBenefit: "Watermarked previews" },
    ],
    categoryPainPoint: "Referrals dry up sometimes",
    categoryBenefit: "Consistent inbound leads. No more feast or famine.",
  },
  { 
    name: "Pets", 
    icon: "🐾", 
    slug: "pets", 
    services: [
      { name: "Pet Groomers", painPoint: "Difficult pet handling", bouulBenefit: "Temperament disclosures" },
      { name: "Dog Walkers", painPoint: "Weather cancellations", bouulBenefit: "Weather policies built-in" },
      { name: "Pet Sitters", painPoint: "Emergency vet decisions", bouulBenefit: "Vet authorization forms" },
      { name: "Veterinarians", painPoint: "After-hours emergencies", bouulBenefit: "On-call scheduling" },
      { name: "Pet Training", painPoint: "Owner compliance issues", bouulBenefit: "Owner homework tracking" },
    ],
    categoryPainPoint: "Clients don't trust strangers with pets",
    categoryBenefit: "Verified profiles + reviews. Trust established instantly.",
  },
  { 
    name: "Logistics", 
    icon: "📦", 
    slug: "logistics", 
    services: [
      { name: "Removal Companies", painPoint: "Stairs/access not disclosed", bouulBenefit: "Detailed job questionnaires" },
      { name: "Courier Services", painPoint: "Fuel surcharge calculations", bouulBenefit: "Auto fuel adjustments" },
      { name: "Furniture Delivery", painPoint: "Assembly time uncompensated", bouulBenefit: "Assembly add-on pricing" },
      { name: "Storage Services", painPoint: "Inventory tracking", bouulBenefit: "Digital inventory systems" },
      { name: "Skip Hire", painPoint: "Permit complexities", bouulBenefit: "Permit handling service" },
    ],
    categoryPainPoint: "Fuel costs eating margins",
    categoryBenefit: "Dynamic pricing tools. Adjust for distance, load, urgency.",
  },
  { 
    name: "Tech & IT", 
    icon: "💻", 
    slug: "tech", 
    services: [
      { name: "IT Support", painPoint: "Remote vs onsite confusion", bouulBenefit: "Clear service type selection" },
      { name: "Computer Repair", painPoint: "Data liability concerns", bouulBenefit: "Liability waivers built-in" },
      { name: "Network Installation", painPoint: "Multi-day project payments", bouulBenefit: "Milestone billing" },
      { name: "Security Systems", painPoint: "Monitoring subscription management", bouulBenefit: "Recurring revenue tools" },
      { name: "CCTV Installation", painPoint: "Maintenance call expectations", bouulBenefit: "Maintenance packages" },
      { name: "Data Recovery", painPoint: "Success rate expectations", bouulBenefit: "No recovery, no fee options" },
    ],
    categoryPainPoint: "Clients don't understand technical value",
    categoryBenefit: "Show expertise through content. Education converts.",
  },
  { 
    name: "Legal & Financial", 
    icon: "⚖️", 
    slug: "legal", 
    services: [
      { name: "Attorneys", painPoint: "Billable hour tracking", bouulBenefit: "Time tracking integration" },
      { name: "Notaries", painPoint: "Travel time uncompensated", bouulBenefit: "Mobile notary premiums" },
      { name: "Financial Advisors", painPoint: "Compliance documentation", bouulBenefit: "Compliance templates" },
      { name: "Insurance Agents", painPoint: "Policy renewal tracking", bouulBenefit: "Automated renewal reminders" },
      { name: "Real Estate Agents", painPoint: "Property showing coordination", bouulBenefit: "Showing scheduling tools" },
    ],
    categoryPainPoint: "Compliance limits marketing",
    categoryBenefit: "Professional platform. Compliant by design.",
  },
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
                {categoryData?.categoryPainPoint && ` Tired of ${categoryData.categoryPainPoint.toLowerCase()}?`}
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
                <div className="text-white font-medium">{categoryData.categoryBenefit}</div>
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
  const [selectedService, setSelectedService] = useState<string>("");

  const categoryData = vendorServiceCategories.find(c => c.slug === selectedCategory);
  const serviceData = categoryData?.services.find(s => s.name === selectedService);

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
                If you provide a service, Bouul is built for you. 71+ services and growing.
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
              onClick={() => { setBusinessName(""); setSelectedCategory(""); setSelectedService(""); }}
              className="text-neutral-500 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vendorServiceCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => { setSelectedCategory(category.slug); setSelectedService(""); }}
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
              <div className="text-neutral-500 text-sm mb-3">
                {category.services.length} services
              </div>
              <div className="flex flex-wrap gap-2">
                {category.services.slice(0, 5).map((service) => (
                  <span
                    key={service.name}
                    className="px-3 py-1.5 bg-neutral-900 rounded-full text-neutral-400 text-xs"
                  >
                    {service.name}
                  </span>
                ))}
                {category.services.length > 5 && (
                  <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-neutral-500 text-xs">
                    +{category.services.length - 5} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Selection within Category */}
        {selectedCategory && categoryData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {businessName && categoryData ? (
                  <>Select {businessName}'s primary service</>
                ) : (
                  <>Select your service</>
                )}
              </h3>
              <p className="text-neutral-500 text-sm">
                See exactly how Bouul solves {categoryData.name.toLowerCase()}'s biggest challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryData.services.map((service, i) => (
                <motion.button
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setSelectedService(service.name)}
                  className={cn(
                    "text-left p-4 rounded-xl border transition-all",
                    selectedService === service.name
                      ? "bg-emerald-500/10 border-emerald-500"
                      : "bg-neutral-950 border-neutral-800 hover:border-neutral-700"
                  )}
                >
                  <div className="text-white font-medium mb-1">{service.name}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Detailed Pain Points for Selected Service */}
        {selectedService && serviceData && businessName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-emerald-500/10 via-neutral-950 to-neutral-950 border border-emerald-500/30 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Personalized for {businessName}
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  {serviceData.name} on Bouul
                </h3>
                <p className="text-neutral-500 text-lg">
                  Here's how we solve your industry's biggest challenges
                </p>
              </div>

              {/* Main Pain Point */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
                  <div className="text-red-400 text-sm font-semibold uppercase mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    The Problem
                  </div>
                  <div className="text-white text-lg font-medium mb-2">
                    {serviceData.painPoint}
                  </div>
                  <div className="text-neutral-500 text-sm">
                    This is what {businessName} deals with regularly. Other platforms don't solve this.
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
                  <div className="text-emerald-400 text-sm font-semibold uppercase mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The Bouul Solution
                  </div>
                  <div className="text-white text-lg font-medium mb-2">
                    {serviceData.bouulBenefit}
                  </div>
                  <div className="text-emerald-400/70 text-sm">
                    Built specifically for {businessName} and {categoryData?.name.toLowerCase()} like you.
                  </div>
                </div>
              </div>

              {/* Category-wide Benefits */}
              <div className="border-t border-neutral-800 pt-8">
                <div className="text-white font-semibold mb-6">Plus, everything you need to grow:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-white font-medium">0% Commission</div>
                      <div className="text-neutral-500 text-sm">{businessName} keeps every rand earned</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-white font-medium">24-48h Payouts</div>
                      <div className="text-neutral-500 text-sm">Not 5-7 business days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-white font-medium">Customer Ownership</div>
                      <div className="text-neutral-500 text-sm">Build your client base directly</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-white font-medium">AI Discovery</div>
                      <div className="text-neutral-500 text-sm">Automatic A/B testing for your services</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <a
                  href="/vendors"
                  className="inline-block px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
                >
                  Create Free Profile for {businessName}
                </a>
                <p className="text-neutral-500 text-sm mt-4">
                  No credit card required. Setup takes 2 minutes.
                </p>
              </div>
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
