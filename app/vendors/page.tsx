"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { VendorCategoryValueProp } from "@/components/vendor-category-value-prop";
import { VendorPricingComparison } from "@/components/vendor-pricing-comparison";
import { LampContainer } from "@/components/ui/lamp-effect";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

interface PainPoint {
  problem: string;
  solution: string;
}

interface Service {
  name: string;
  painPoint: string;
  bouulBenefit: string;
  detailedPainPoints?: PainPoint[];
}

interface Category {
  name: string;
  icon: string;
  slug: string;
  services: Service[];
  categoryPainPoint: string;
  categoryBenefit: string;
}

interface MainPainPoint {
  problem: string;
  current: string;
  bouul: string;
  icon: string;
}

interface VendorFeature {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
}

interface VendorStat {
  stat: string;
  label: string;
  description: string;
}

const vendorFeatures: VendorFeature[] = [
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

const vendorStats: VendorStat[] = [
  { stat: "10x", label: "more bookings", description: "Vendors see an average 10x increase in monthly bookings" },
  { stat: "40-60%", label: "revenue growth", description: "Top performers increase revenue by 40-60%" },
  { stat: "Zero", label: "hidden fees", description: "Transparent pricing with no surprise commissions" },
  { stat: "Full", label: "control", description: "Complete dashboard control over your business" },
];

// Service categories for vendors with detailed pain points per service
const vendorServiceCategories: Category[] = [
  { 
    name: "Home Services", 
    icon: "🏠", 
    slug: "home-services", 
    services: [
      { 
        name: "Plumbers", 
        painPoint: "Emergency calls at 2AM", 
        bouulBenefit: "Set emergency hours & premium rates",
        detailedPainPoints: [
          { problem: "Emergency calls at 2AM", solution: "Set emergency hours & charge premium rates for after-hours" },
          { problem: "Clients sourcing cheap materials", solution: "Specify exact materials in quotes with markup options" },
          { problem: "Payment delays after completion", solution: "Progress payments built into booking flow" },
          { problem: "Scope creep on jobs", solution: "Change order approval before extra work" },
          { problem: "No-shows for appointments", solution: "Deposit requirements & automated reminders" },
        ]
      },
      { name: "Electricians", painPoint: "Clients sourcing cheap materials", bouulBenefit: "Specify exact materials in quotes", detailedPainPoints: [
        { problem: "Clients sourcing cheap materials", solution: "Specify exact materials in quotes with markup options" },
        { problem: "Compliance certification paperwork", solution: "Automated COC generation & storage" },
        { problem: "Emergency call-out underpriced", solution: "Dynamic after-hours pricing" },
        { problem: "Parts running costs", solution: "Include parts in upfront quotes" },
        { problem: "Follow-up visits unpaid", solution: "Guarantee period tracking" },
      ]},
      { name: "Carpenters", painPoint: "Scope creep on custom projects", bouulBenefit: "Milestone-based payments", detailedPainPoints: [
        { problem: "Scope creep on custom projects", solution: "Milestone-based payments with approval gates" },
        { problem: "Material cost fluctuations", solution: "Quote validity periods" },
        { problem: "Design revision hell", solution: "Limited revision rounds in contract" },
        { problem: "Workshop overhead costs", solution: "Workshop time billed separately" },
        { problem: "Installation delays", solution: "Clear timeline expectations" },
      ]},
      { name: "Painters", painPoint: "Weather delays affecting income", bouulBenefit: "Flexible rescheduling policies", detailedPainPoints: [
        { problem: "Weather delays affecting income", solution: "Flexible rescheduling policies built-in" },
        { problem: "Paint costs eating margins", solution: "Material markup transparency" },
        { problem: "Prep time uncompensated", solution: "Prep work itemized in quotes" },
        { problem: "Touch-up requests", solution: "Clear warranty terms" },
        { problem: "Access/scaffolding costs", solution: "Site requirements specified upfront" },
      ]},
      { name: "Builders", painPoint: "Payment delays after completion", bouulBenefit: "Progress payments built-in", detailedPainPoints: [
        { problem: "Payment delays after completion", solution: "Progress payments built into booking flow" },
        { problem: "Change order disputes", solution: "Digital change order approvals" },
        { problem: "Subcontractor coordination", solution: "Multi-contractor scheduling" },
        { problem: "Material delivery delays", solution: "Timeline buffers automatically added" },
        { problem: "Snag list endless revisions", solution: "Defined completion criteria" },
      ]},
      { name: "Gardeners", painPoint: "Seasonal work inconsistency", bouulBenefit: "Year-round subscription packages", detailedPainPoints: [
        { problem: "Seasonal work inconsistency", solution: "Year-round subscription packages" },
        { problem: "Equipment maintenance costs", solution: "Equipment costs in pricing" },
        { problem: "Fuel surcharges", solution: "Distance-based pricing" },
        { problem: "Weather cancellations", solution: "Weather rescheduling policies" },
        { problem: "Green waste disposal", solution: "Disposal fees included" },
      ]},
      { name: "Pool Cleaners", painPoint: "Chemical costs eating margins", bouulBenefit: "Dynamic pricing per pool size", detailedPainPoints: [
        { problem: "Chemical costs eating margins", solution: "Dynamic pricing per pool size" },
        { problem: "Travel between pools", solution: "Route optimization & clustering" },
        { problem: "Equipment wear", solution: "Maintenance costs factored in" },
        { problem: "Seasonal demand swings", solution: "Off-season promotions" },
        { problem: "Emergency cleanups", solution: "Premium emergency rates" },
      ]},
      { name: "Pest Control", painPoint: "Follow-up visits unpaid", bouulBenefit: "Guarantee packages with deposits", detailedPainPoints: [
        { problem: "Follow-up visits unpaid", solution: "Guarantee packages with deposits" },
        { problem: "Chemical handling certification", solution: "Certification badges displayed" },
        { problem: "Safety liability concerns", solution: "Waivers built into booking" },
        { problem: "Recurring treatment scheduling", solution: "Automated recurring bookings" },
        { problem: "Inspection time uncompensated", solution: "Inspection fees charged" },
      ]},
      { name: "AC Repair", painPoint: "Peak season burnout", bouulBenefit: "Demand-based surge pricing", detailedPainPoints: [
        { problem: "Peak season burnout", solution: "Demand-based surge pricing" },
        { problem: "Gas refill costs", solution: "Gas costs itemized" },
        { problem: "Diagnostic time", solution: "Diagnostic fees applied" },
        { problem: "Warranty claim paperwork", solution: "Digital warranty submissions" },
        { problem: "Emergency breakdowns", solution: "Emergency premium pricing" },
      ]},
      { name: "Appliance Repair", painPoint: "Diagnostic time uncompensated", bouulBenefit: "Charge call-out fees", detailedPainPoints: [
        { problem: "Diagnostic time uncompensated", solution: "Charge call-out fees" },
        { problem: "Parts sourcing delays", solution: "Parts availability checked first" },
        { problem: "Multiple visit requirements", solution: "Multi-visit pricing packages" },
        { problem: "Old appliance incompatibility", solution: "Model/year verification upfront" },
        { problem: "Warranty confusion", solution: "Clear warranty explanations" },
      ]},
      { name: "Handyman", painPoint: "Too many small jobs, not enough profit", bouulBenefit: "Minimum booking values", detailedPainPoints: [
        { problem: "Too many small jobs, not enough profit", solution: "Minimum booking values" },
        { problem: "Travel time wasted", solution: "Geographic clustering" },
        { problem: "Tool wear costs", solution: "Tool costs factored in" },
        { problem: "Skill undervalued", solution: "Portfolio showcases expertise" },
        { problem: "Job scope unclear", solution: "Photo-based scoping" },
      ]},
      { name: "Roofers", painPoint: "Insurance claim complexities", bouulBenefit: "Direct insurer billing options", detailedPainPoints: [
        { problem: "Insurance claim complexities", solution: "Direct insurer billing options" },
        { problem: "Weather dependency", solution: "Weather contingency planning" },
        { problem: "Safety equipment costs", solution: "Safety costs included" },
        { problem: "Height work premiums", solution: "Height pricing tiers" },
        { problem: "Debris removal", solution: "Cleanup fees itemized" },
      ]},
      { name: "Tilers", painPoint: "Material wastage costs", bouulBenefit: "Precise quote calculators", detailedPainPoints: [
        { problem: "Material wastage costs", solution: "Precise quote calculators" },
        { problem: "Pattern complexity underpriced", solution: "Complexity multipliers" },
        { problem: "Surface prep time", solution: "Prep work quoted separately" },
        { problem: "Grout color matching", solution: "Sample approval process" },
        { problem: "Cutting time", solution: "Cut time factored in" },
      ]},
      { name: "Welders", painPoint: "Specialized skills undervalued", bouulBenefit: "Portfolio showcases expertise", detailedPainPoints: [
        { problem: "Specialized skills undervalued", solution: "Portfolio showcases expertise" },
        { problem: "Equipment costs", solution: "Equipment fees line items" },
        { problem: "Material costs", solution: "Material markup options" },
        { problem: "Safety certification", solution: "Certification badges" },
        { problem: "Custom design time", solution: "Design time billed" },
      ]},
      { name: "Aluminum & Glass", painPoint: "Measurement errors costly", bouulBenefit: "Digital measurement tools", detailedPainPoints: [
        { problem: "Measurement errors costly", solution: "Digital measurement tools" },
        { problem: "Custom fabrication time", solution: "Fabrication time quoted" },
        { problem: "Installation complexity", solution: "Site assessment required" },
        { problem: "Breakage during transport", solution: "Insurance included" },
        { problem: "Sealant curing time", solution: "Timeline buffers added" },
      ]},
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
      { name: "Hairdressers", painPoint: "No-shows killing schedule", bouulBenefit: "Non-refundable deposits", detailedPainPoints: [
        { problem: "No-shows killing schedule", solution: "Non-refundable deposits required" },
        { problem: "Last-minute cancellations", solution: "Cancellation fee policies" },
        { problem: "Color correction nightmares", solution: "Consultation photos required" },
        { problem: "Product costs rising", solution: "Product surcharges built-in" },
        { problem: "Chair time undervalued", solution: "Time-based pricing tiers" },
      ]},
      { name: "Barbers", painPoint: "Walk-in unpredictability", bouulBenefit: "Appointment-only options", detailedPainPoints: [
        { problem: "Walk-in unpredictability", solution: "Appointment-only options" },
        { problem: "Peak time bottlenecks", solution: "Time slot pricing" },
        { problem: "Beard trim underpriced", solution: "Service add-on pricing" },
        { problem: "Equipment sanitization time", solution: "Buffer time between slots" },
        { problem: "Youth pricing pressure", solution: "Age-based pricing tiers" },
      ]},
      { name: "Nail Technicians", painPoint: "Complex designs underpriced", bouulBenefit: "Photo-based price calculator", detailedPainPoints: [
        { problem: "Complex designs underpriced", solution: "Photo-based price calculator" },
        { problem: "Gel removal time", solution: "Removal fees charged" },
        { problem: "Fill-in vs full set confusion", solution: "Clear service descriptions" },
        { problem: "Art time uncompensated", solution: "Per-nail art pricing" },
        { problem: "Repair requests", solution: "Repair policy defined" },
      ]},
      { name: "Massage Therapists", painPoint: "Physical burnout", bouulBenefit: "Booking limits per day", detailedPainPoints: [
        { problem: "Physical burnout", solution: "Booking limits per day" },
        { problem: "Oil/linen costs", solution: "Supply fees included" },
        { problem: "No-shows", solution: "Deposit requirements" },
        { problem: "Pressure for discounts", solution: "Fixed pricing displayed" },
        { problem: "Late arrivals", solution: "Late policy enforced" },
      ]},
      { name: "Facial Treatments", painPoint: "Product costs not covered", bouulBenefit: "Product-inclusive pricing", detailedPainPoints: [
        { problem: "Product costs not covered", solution: "Product-inclusive pricing" },
        { problem: "Skin type variations", solution: "Custom treatment pricing" },
        { problem: "Follow-up questions", solution: "Aftercare documentation" },
        { problem: "Extraction time", solution: "Add-on extraction pricing" },
        { problem: "Product recommendation pressure", solution: "Affiliate links for commissions" },
      ]},
      { name: "Makeup Artists", painPoint: "Trial sessions unpaid", bouulBenefit: "Trial fee structures", detailedPainPoints: [
        { problem: "Trial sessions unpaid", solution: "Trial fee structures" },
        { problem: "Travel to venue", solution: "Travel fees charged" },
        { problem: "Kit maintenance costs", solution: "Kit fees line item" },
        { problem: "Last-minute changes", solution: "Change cutoff policies" },
        { problem: "Bridal party coordination", solution: "Group booking discounts" },
      ]},
      { name: "Eyelash & Brows", painPoint: "Touch-up requests", bouulBenefit: "Clear aftercare policies", detailedPainPoints: [
        { problem: "Touch-up requests", solution: "Clear aftercare policies" },
        { problem: "Allergic reactions", solution: "Patch test requirements" },
        { problem: "Fill-in timing confusion", solution: "Fill-in window defined" },
        { problem: "Lash removal requests", solution: "Removal fees charged" },
        { problem: "Style consultation time", solution: "Consultation photos used" },
      ]},
      { name: "Spas", painPoint: "Staff scheduling nightmares", bouulBenefit: "Multi-therapist management", detailedPainPoints: [
        { problem: "Staff scheduling nightmares", solution: "Multi-therapist management" },
        { problem: "Room turnover time", solution: "Buffer time auto-added" },
        { problem: "Package redemptions", solution: "Package tracking system" },
        { problem: "Peak time demand", solution: "Dynamic peak pricing" },
        { problem: "No-shows", solution: "Card-on-file required" },
      ]},
      { name: "Personal Trainers", painPoint: "Client consistency issues", bouulBenefit: "Package commitments", detailedPainPoints: [
        { problem: "Client consistency issues", solution: "Package commitments" },
        { problem: "Gym rental costs", solution: "Venue fees included" },
        { problem: "Session cancellations", solution: "24hr cancellation policy" },
        { problem: "Nutrition advice liability", solution: "Disclaimers built-in" },
        { problem: "Progress tracking", solution: "Photo tracking tools" },
      ]},
      { name: "Yoga Instructors", painPoint: "Venue costs", bouulBenefit: "Virtual class options", detailedPainPoints: [
        { problem: "Venue costs", solution: "Virtual class options" },
        { problem: "Class size variability", solution: "Min/max class sizes" },
        { problem: "Drop-in vs package", solution: "Tiered pricing options" },
        { problem: "Equipment provision", solution: "Mat rental fees" },
        { problem: "Seasonal attendance", solution: "Off-season promotions" },
      ]},
    ],
    categoryPainPoint: "Last-minute cancellations",
    categoryBenefit: "Require deposits. Protect your time and income.",
  },
  { 
    name: "Automotive", 
    icon: "🚗", 
    slug: "automotive", 
    services: [
      { name: "Mechanics", painPoint: "Customers questioning diagnostics", bouulBenefit: "Photo/video evidence sharing", detailedPainPoints: [
        { problem: "Customers questioning diagnostics", solution: "Photo/video evidence sharing" },
        { problem: "Parts markup suspicion", solution: "Transparent parts pricing" },
        { problem: "Comeback repairs", solution: "Warranty period tracking" },
        { problem: "Diagnostic time unpaid", solution: "Diagnostic fees charged" },
        { problem: "Old car complications", solution: "Age-based pricing multipliers" },
      ]},
      { name: "Car Detailing", painPoint: "Water/electricity at client location", bouulBenefit: "Mobile service premiums", detailedPainPoints: [
        { problem: "Water/electricity at client location", solution: "Mobile service premiums" },
        { problem: "Product costs", solution: "Product-inclusive packages" },
        { problem: "Weather dependency", solution: "Indoor venue partnerships" },
        { problem: "Paint correction time", solution: "Hourly correction pricing" },
        { problem: "Pet hair removal", solution: "Pet hair surcharge" },
      ]},
      { name: "Panel Beaters", painPoint: "Insurance assessment delays", bouulBenefit: "Direct insurance partnerships", detailedPainPoints: [
        { problem: "Insurance assessment delays", solution: "Direct insurance partnerships" },
        { problem: "Parts sourcing delays", solution: "Parts availability checks" },
        { problem: "Paint matching", solution: "Digital color matching" },
        { problem: "Rental car costs", solution: "Timeline guarantees" },
        { problem: "Supplemental claims", solution: "Supp documentation system" },
      ]},
      { name: "Towing Services", painPoint: "Fuel costs fluctuating", bouulBenefit: "Dynamic distance pricing", detailedPainPoints: [
        { problem: "Fuel costs fluctuating", solution: "Dynamic distance pricing" },
        { problem: "After-hours calls", solution: "Night premium rates" },
        { problem: "Vehicle damage liability", solution: "Insurance included" },
        { problem: "Storage yard costs", solution: "Storage fees charged" },
        { problem: "Difficult recoveries", solution: "Recovery complexity pricing" },
      ]},
      { name: "Car Wash", painPoint: "Weather dependency", bouulBenefit: "Indoor venue partnerships", detailedPainPoints: [
        { problem: "Weather dependency", solution: "Indoor venue partnerships" },
        { problem: "Water costs", solution: "Water usage included" },
        { problem: "Subscription management", solution: "Recurring billing system" },
        { problem: "Equipment maintenance", solution: "Maintenance costs factored" },
        { problem: "Upselling pressure", solution: "Package tier options" },
      ]},
      { name: "Windscreen Repair", painPoint: "Mobile service logistics", bouulBenefit: "Route optimization", detailedPainPoints: [
        { problem: "Mobile service logistics", solution: "Route optimization" },
        { problem: "Insurance claims", solution: "Direct insurer billing" },
        { problem: "Resin costs", solution: "Material fees included" },
        { problem: "Curing time", solution: "Timeline buffers added" },
        { problem: "Replacement vs repair", solution: "Assessment guidelines" },
      ]},
      { name: "Auto Electricians", painPoint: "Specialized diagnostic equipment costs", bouulBenefit: "Premium skill pricing", detailedPainPoints: [
        { problem: "Specialized diagnostic equipment costs", solution: "Premium skill pricing" },
        { problem: "Software update costs", solution: "Software fees charged" },
        { problem: "Wiring complexity", solution: "Complexity-based quotes" },
        { problem: "Parts compatibility", solution: "VIN verification required" },
        { problem: "Intermittent faults", solution: "Diagnostic time packages" },
      ]},
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

const painPoints: MainPainPoint[] = [
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

// Personalized Hero Component - Just collects business name
const PersonalizedVendorHero: React.FC<{ 
  businessName: string; 
  setBusinessName: (name: string) => void;
  selectedCategory: string;
  setSelectedCategory: (slug: string) => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
}> = ({ businessName, setBusinessName, selectedCategory, setSelectedCategory, selectedService, setSelectedService }) => {
  const categoryData = vendorServiceCategories.find(c => c.slug === selectedCategory);
  const serviceData = categoryData?.services.find(s => s.name === selectedService);

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
            {businessName ? (
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
            {businessName ? (
              <>
                Enter your business name and select your service to see how Bouul helps {businessName} succeed.
              </>
            ) : (
              <>
                See how you can earn more, work smarter, and keep 100% of your profits.
              </>
            )}
          </p>

          {/* Business Name Input */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Enter your business name..."
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors text-center"
            />
          </div>

          {/* Show category/service selection inline when name is entered */}
          {businessName && !selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-neutral-500 text-sm"
            >
              Scroll down to select your service category ↓
            </motion.div>
          )}

          {/* Show selected info */}
          {businessName && selectedCategory && serviceData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            >
              <span className="text-emerald-400 text-sm">Personalizing for:</span>
              <span className="text-white font-medium">{businessName}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">{serviceData.name}</span>
              <button
                onClick={() => { setSelectedCategory(""); setSelectedService(""); }}
                className="text-neutral-500 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainPointsSection: React.FC<{ businessName: string }> = ({ businessName }) => {
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
            {businessName ? (
              <>Other platforms profit from {businessName}'s work</>
            ) : (
              <>Other platforms profit from your work</>
            )}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            {businessName ? (
              <>{businessName} built the skills. {businessName} does the work. Why should they take the biggest cut?</>
            ) : (
              <>You built the skills. You do the work. Why should they take the biggest cut?</>
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point: MainPainPoint, i: number) => (
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

// Service Categories Section - No name input, receives from parent
const ServiceCategoriesSection: React.FC<{
  businessName: string;
  selectedCategory: string;
  setSelectedCategory: (slug: string) => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
}> = ({ businessName, selectedCategory, setSelectedCategory, selectedService, setSelectedService }) => {
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

        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vendorServiceCategories.map((category: Category, i: number) => (
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
                {category.services.slice(0, 5).map((service: Service) => (
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
              {categoryData.services.map((service: Service, i: number) => (
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

// Detailed Pain Points Section - Shows 5 pain points for selected service
const DetailedPainPointsSection: React.FC<{
  businessName: string;
  selectedCategory: string;
  selectedService: string;
}> = ({ businessName, selectedCategory, selectedService }) => {
  const categoryData = vendorServiceCategories.find(c => c.slug === selectedCategory);
  const serviceData = categoryData?.services.find(s => s.name === selectedService);

  if (!serviceData) return null;

  // Use detailedPainPoints if available, otherwise generate from main pain point
  const painPoints: PainPoint[] = serviceData.detailedPainPoints || [
    { problem: serviceData.painPoint, solution: serviceData.bouulBenefit },
    { problem: "Time wasted on admin", solution: "Automated booking & reminders" },
    { problem: "Payment collection delays", solution: "Upfront payment options" },
    { problem: "No-shows", solution: "Deposit requirements" },
    { problem: "Pricing pressure", solution: "Fixed pricing displayed" },
  ];

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            BUILT FOR {selectedService.toUpperCase()}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            {businessName ? (
              <>5 challenges {businessName} faces daily</>
            ) : (
              <>5 challenges {selectedService} face daily</>
            )}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We built Bouul specifically to solve these problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point: PainPoint, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-neutral-400 text-xs font-semibold uppercase">Problem {i + 1}</div>
              </div>
              <div className="text-white font-medium text-lg mb-4">{point.problem}</div>
              
              <div className="h-px bg-neutral-800 my-4" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-emerald-400 text-xs font-semibold uppercase">Bouul Solution</div>
              </div>
              <div className="text-emerald-400 font-medium">{point.solution}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 via-neutral-950 to-emerald-500/10 border border-emerald-500/20 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {businessName ? (
                <>Ready to solve these for {businessName}?</>
              ) : (
                <>Ready to solve these challenges?</>
              )}
            </h3>
            <p className="text-neutral-500 text-sm mb-6 max-w-md">
              Join {selectedService.toLowerCase()} who are already growing with Bouul.
            </p>
            <a
              href="/vendors"
              className="inline-block px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
            >
              Create Free Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Onboarding Journey Section
const OnboardingJourneySection: React.FC<{ businessName: string }> = ({ businessName }) => {
  const steps = [
    {
      title: "Join the Network",
      description: businessName 
        ? `Create ${businessName}'s free profile in 2 minutes. No credit card, no commitment.`
        : "Create your free professional profile in 2 minutes. No credit card, no commitment.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      aiPointer: "AI-Powered Verification"
    },
    {
      title: "Upload Your Craft",
      description: businessName
        ? `List ${businessName}'s services with multiple titles and videos. Let the AI test what works.`
        : "List your services with multiple titles and videos. Let the AI test what works.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      aiPointer: "Resonance™ Optimization"
    },
    {
      title: "Grow & Earn",
      description: businessName
        ? `Collect 100% of ${businessName}'s revenue with 24-48h payouts. Build your direct client base.`
        : "Collect 100% of your revenue with 24-48h payouts. Build your direct client base.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      aiPointer: "Smart Revenue Forecasting"
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            THE JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            {businessName ? `How ${businessName} grows` : "How it works"}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            From first upload to scale. We've simplified the path to professional success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-800 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="w-24 h-24 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-8 group-hover:border-emerald-500/50 transition-colors relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-black text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                {step.aiPointer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Vendor Trust Section
const VendorTrustSection: React.FC<{ businessName: string }> = ({ businessName }) => {
  const trustFeatures = [
    {
      title: "Verified Customers Only",
      description: "Only users with a verified payment method and booking history can review your services. No fake reviews, ever.",
      icon: "🛡️"
    },
    {
      title: "FICA & Identity Compliant",
      description: "We handle the heavy lifting of compliance and security so you can focus on your craft.",
      icon: "🆔"
    },
    {
      title: "Secure 24-48h Payouts",
      description: "Direct to your bank account. No waiting for weekly cycles or platform approvals.",
      icon: "💳"
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              TRUST & SECURITY
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              {businessName ? `Bouul protects ${businessName}` : "Bouul protects your business"}
            </h2>
            <p className="text-neutral-500 text-lg mb-10">
              We built the platform to be a fortress. Your data, your revenue, and your reputation are our highest priority.
            </p>
            <div className="space-y-8">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl border border-emerald-500/20 flex items-center justify-center p-12 overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-6">🔒</div>
                <div className="text-emerald-400 font-mono text-xs tracking-widest mb-2 uppercase">Encryption Active</div>
                <div className="text-neutral-500 text-sm font-mono">256-bit Secure Payout Channel</div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-2 w-24 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 animate-pulse" />
                  </div>
                  <div className="h-2 w-24 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-1/2 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Dashboard Preview Section
const DashboardPreviewSection: React.FC<{ businessName: string }> = ({ businessName }) => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            DASHBOARD
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            {businessName ? `Control ${businessName} from anywhere` : "Control your business from anywhere"}
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Full-feature management for mobile and desktop. Track bookings, manage staff, and analyze growth in real-time.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-neutral-950 border-b border-neutral-800 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>
              <div className="px-4 py-1.5 bg-neutral-900 rounded-lg text-[10px] text-neutral-500 font-mono flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {businessName ? `${businessName.toLowerCase()}.bouul.com` : "yourbusiness.bouul.com"}
              </div>
              <div className="w-6 h-6 rounded-full bg-neutral-800" />
            </div>
            <div className="aspect-video bg-neutral-950 flex items-center justify-center relative group">
              <div className="text-neutral-700 text-xs font-mono uppercase tracking-[0.2em]">Dashboard Preview</div>
              
              {/* AI Pointer Overlay */}
              <div className="absolute top-8 right-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-md max-w-[200px]">
                <div className="text-emerald-400 text-[10px] font-bold uppercase mb-2">Zola AI Insight</div>
                <div className="text-white text-xs leading-relaxed">
                  "Peak demand expected tomorrow between 2pm-4pm. {businessName && `Adjusting ${businessName}'s availability.`}"
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>
          
          {/* Floating Mobile Preview */}
          <div className="absolute -bottom-12 -right-6 hidden lg:block w-56 aspect-[9/19] bg-neutral-900 border-4 border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="h-6 w-1/3 bg-neutral-800 rounded-b-xl mx-auto mb-4" />
            <div className="px-4 space-y-4">
              <div className="h-2 w-full bg-neutral-800 rounded-full" />
              <div className="h-20 w-full bg-emerald-500/20 rounded-xl" />
              <div className="h-2 w-2/3 bg-neutral-800 rounded-full" />
              <div className="h-2 w-full bg-neutral-800 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function VendorsPage() {
  const [businessName, setBusinessName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <LampContainer className="min-h-[500px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center relative z-10"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-6">
            FOR PROFESSIONALS
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8">
            {businessName ? (
              <>
                Grow <span className="text-emerald-400">{businessName}</span> <br />
                <span className="text-neutral-500 text-4xl md:text-5xl">on your own terms.</span>
              </>
            ) : (
              <>
                Built for professionals <br />
                <span className="text-neutral-500">who mean business.</span>
              </>
            )}
          </h1>
          
          <div className="max-w-md mx-auto mb-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Enter your business name..."
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-8 py-5 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-all text-center text-lg group-hover:bg-neutral-900/80 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {businessName ? (
              <p className="text-emerald-400/70 text-xs mt-4 animate-pulse uppercase tracking-widest font-semibold">
                Personalizing experience for {businessName}...
              </p>
            ) : (
              <p className="text-neutral-500 text-xs mt-4 uppercase tracking-widest font-medium">
                Enter name to personalize the journey
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="px-10 py-5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full text-lg border border-neutral-800 transition-all"
            >
              How it works
            </a>
          </div>
        </motion.div>
      </LampContainer>

      {/* Stats */}
      <section className="py-20 bg-black border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {vendorStats.map((stat: VendorStat, i: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-3">
                  {stat.stat}
                </div>
                <div className="text-neutral-400 text-sm font-bold mb-2 uppercase tracking-widest">{stat.label}</div>
                <div className="text-neutral-600 text-xs max-w-[200px] mx-auto leading-relaxed">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Journey */}
      <div id="how-it-works">
        <OnboardingJourneySection businessName={businessName} />
      </div>

      {/* Pain Points */}
      <PainPointsSection businessName={businessName} />

      {/* Service Categories - Who Can Join */}
      <ServiceCategoriesSection
        businessName={businessName}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      {/* Detailed Pain Points Section - Shows after service selection */}
      {selectedCategory && selectedService && (
        <DetailedPainPointsSection
          businessName={businessName}
          selectedCategory={selectedCategory}
          selectedService={selectedService}
        />
      )}

      {/* Resonance Discovery Engine */}
      <section id="features" className="py-24 md:py-32 bg-black border-t border-neutral-900 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              KEYSTONE DISCOVERY™ AI
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-3xl">
              {businessName ? (
                <>{businessName} uploads. <br /> The AI optimizes.</>
              ) : (
                <>Vendors upload. <br /> The AI optimizes.</>
              )}
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl leading-relaxed">
              Every service {businessName && <>from {businessName}</>} can have multiple titles and images. 
              Our AI discovery engine automatically cycles through all combinations, learning exactly 
              what converts each individual user.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendorFeatures.map((feature: VendorFeature, i: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 flex flex-col gap-4 group hover:border-emerald-500/30 transition-all"
              >
                <div className="text-emerald-400 p-3 bg-neutral-900 rounded-2xl w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                <div className="text-4xl font-bold text-white mt-2">{feature.stat}</div>
                <div className="text-white font-semibold text-xl">{feature.title}</div>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
                <div className="text-emerald-400/70 text-[10px] font-bold uppercase tracking-widest border-t border-neutral-900 pt-4 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  {feature.statLabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extra AI Pointer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-neutral-950 border border-emerald-500/20 rounded-3xl flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-4xl shrink-0">
              🤖
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                Zola™ AI Assistant
                <span className="px-2 py-0.5 bg-emerald-500 text-black text-[10px] font-bold rounded-full">ACTIVE</span>
              </h4>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Zola acts as {businessName ? `${businessName}'s` : "your"} 24/7 sales agent. 
                She answers customer questions about {businessName ? `${businessName}'s` : "your"} 
                services, suggests add-ons, and completes the booking — all without you lifting a finger.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Security */}
      <VendorTrustSection businessName={businessName} />

      {/* Dashboard Preview */}
      <DashboardPreviewSection businessName={businessName} />

      {/* Pricing Comparison */}
      <VendorPricingComparison businessName={businessName} />

      {/* Category Value Props */}
      <VendorCategoryValueProp 
        businessName={businessName}
        initialCategory={selectedCategory}
        initialService={selectedService}
      />

      {/* Final CTA */}
      <section id="get-started" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tighter">
              Ready to grow <br />
              <span className="text-emerald-400">{businessName || "your business"}?</span>
            </h2>
            <p className="text-neutral-500 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Join 5,000+ professionals who trust Bouul to fill their calendar
              and grow their revenue with 0% commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download"
                className="px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full text-xl transition-all hover:scale-105 shadow-2xl shadow-emerald-500/20"
              >
                Create Free {businessName && "Thirdspace"} Profile
              </a>
            </div>
            <p className="text-neutral-600 text-sm mt-8 font-medium">
              NO COMMISSION • NO HIDDEN FEES • 100% PROFIT
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
