"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// TYPES
// ============================================================================

interface ServiceTemplate {
  id: string;
  category_enum: string;
  name: Record<string, string>;
  description: Record<string, string>;
  emoji: string;
  service_behavior: string;
  delivery_method: string;
  pricing_model: string;
  base_price: number;
  duration_minutes: number;
  search_keywords: string[];
  required_certifications: string[];
  safety_level: string;
  upsell_opportunities: Array<{
    name: string;
    description: string;
    additionalCost: number;
  }>;
}

interface CategoryValueProp {
  headline: string;
  subheadline: string;
  keyBenefits: string[];
  bouulFeatures: string[];
  idealFor: string;
  revenuePotential: string;
  successTip: string;
}

// ============================================================================
// CATEGORY VALUE PROPOSITIONS
// ============================================================================

const CATEGORY_VALUE_PROPS: Record<string, CategoryValueProp> = {
  personalCare: {
    headline: "Grow Your Beauty & Personal Care Business",
    subheadline: "From barbers to nail technicians, Bouul helps you fill your chair and build loyal clients.",
    keyBenefits: [
      "Steady stream of local clients searching for your services",
      "Showcase your portfolio with before/after photos",
      "Manage bookings, reminders, and repeat clients effortlessly",
      "Build reputation through verified reviews and ratings",
    ],
    bouulFeatures: [
      "Visual portfolio gallery to showcase your best work",
      "Automated appointment reminders reduce no-shows",
      "Package deals and loyalty programs built-in",
      "Client history and preferences at your fingertips",
    ],
    idealFor: "Barbers, hair stylists, nail technicians, beauty therapists, makeup artists, estheticians",
    revenuePotential: "Top performers on Bouul see 40-60% more bookings and 3x repeat client rate",
    successTip: "Upload high-quality photos of your work and offer package deals for regular clients",
  },
  healthcare: {
    headline: "Expand Your Healthcare Practice",
    subheadline: "Connect with patients who need your expertise, from telemedicine to home nursing.",
    keyBenefits: [
      "Reach patients in your local area seeking healthcare services",
      "Offer both in-person and virtual consultations",
      "Secure, HIPAA-compliant booking and communication",
      "Build trust with verified credentials and patient reviews",
    ],
    bouulFeatures: [
      "Telemedicine integration for remote consultations",
      "Credential verification badge for trust",
      "Automated intake forms and medical history",
      "Secure messaging for follow-up care",
    ],
    idealFor: "Doctors, nurses, physiotherapists, dentists, chiropractors, mental health counselors, speech therapists",
    revenuePotential: "Healthcare providers on Bouul report 50% increase in patient acquisition",
    successTip: "Highlight your certifications and offer both in-person and remote options for maximum reach",
  },
  homeServices: {
    headline: "Scale Your Home Services Business",
    subheadline: "From plumbing to electrical work, Bouul connects you with homeowners who need you most.",
    keyBenefits: [
      "Get discovered by homeowners in your service area",
      "Emergency service requests come with premium pricing",
      "Showcase licenses, certifications, and insurance",
      "Build recurring revenue with maintenance contracts",
    ],
    bouulFeatures: [
      "Emergency service badge for 24/7 availability",
      "License and certification verification",
      "Recurring booking for maintenance services",
      "Photo documentation for before/after work",
    ],
    idealFor: "Plumbers, electricians, carpenters, painters, cleaners, gardeners, HVAC technicians, locksmiths",
    revenuePotential: "Home service pros earn 35-70% more through emergency and recurring bookings",
    successTip: "Mark yourself as available for emergency services and offer maintenance packages",
  },
  fitnessWellness: {
    headline: "Build Your Fitness & Wellness Clientele",
    subheadline: "Personal trainers, yoga instructors, and wellness coaches—grow your practice on Bouul.",
    keyBenefits: [
      "Attract clients committed to their health goals",
      "Offer flexible session packages and subscriptions",
      "Share workout plans and progress tracking",
      "Build a community around your brand",
    ],
    bouulFeatures: [
      "Package deals for session bundles",
      "Subscription management for ongoing coaching",
      "Progress photo sharing (private & secure)",
      "Integration with fitness tracking apps",
    ],
    idealFor: "Personal trainers, yoga instructors, Pilates teachers, life coaches, nutritionists, meditation instructors",
    revenuePotential: "Fitness professionals see 2-3x client retention with Bouul's subscription features",
    successTip: "Offer package deals for multiple sessions and use subscriptions for ongoing coaching",
  },
  automotive: {
    headline: "Drive More Business to Your Auto Shop",
    subheadline: "Mechanics, detailers, and roadside assistance—Bouul keeps your bay full.",
    keyBenefits: [
      "Connect with car owners in your local area",
      "Mobile services command premium pricing",
      "Emergency roadside calls have higher margins",
      "Build trust with transparent pricing and reviews",
    ],
    bouulFeatures: [
      "Mobile service radius mapping",
      "Emergency service priority listing",
      "Vehicle history tracking per client",
      "Service reminder automation for clients",
    ],
    idealFor: "Mechanics, mobile mechanics, detailers, tyre services, towing companies, auto electricians",
    revenuePotential: "Auto service providers report 45% more jobs through Bouul's emergency network",
    successTip: "Offer mobile services and highlight emergency availability for maximum visibility",
  },
  petServices: {
    headline: "Care for More Pets, Grow Your Business",
    subheadline: "Dog walkers, groomers, and vets—Bouul connects you with pet parents who trust you.",
    keyBenefits: [
      "Reach pet owners who prioritize quality care",
      "Recurring bookings for walks, grooming, and daycare",
      "Build trust with pet parent reviews",
      "Offer add-on services for increased revenue",
    ],
    bouulFeatures: [
      "Recurring booking for regular walks/grooming",
      "Pet profile tracking (breed, age, special needs)",
      "Photo updates for pet parents",
      "Vaccination record tracking",
    ],
    idealFor: "Dog walkers, pet groomers, veterinarians, pet sitters, doggy daycare operators",
    revenuePotential: "Pet service providers see 60% repeat booking rate on Bouul",
    successTip: "Offer recurring packages and share cute pet photos (with permission) to build engagement",
  },
  creative: {
    headline: "Showcase Your Creative Talent",
    subheadline: "Photographers, designers, and content creators—Bouul is your portfolio and booking platform.",
    keyBenefits: [
      "Display your portfolio to attract ideal clients",
      "Project-based pricing for custom work",
      "Remote collaboration tools for digital services",
      "Build a brand with verified reviews",
    ],
    bouulFeatures: [
      "Rich media portfolio gallery",
      "Project milestone tracking",
      "File sharing and collaboration",
      "Deposit and milestone payments",
    ],
    idealFor: "Photographers, graphic designers, videographers, content writers, social media managers, voiceover artists",
    revenuePotential: "Creative professionals earn 2-4x more with portfolio-driven bookings",
    successTip: "Invest time in your portfolio—high-quality work samples are your best marketing",
  },
  hospitality: {
    headline: "Fill Your Venue and Grow Bookings",
    subheadline: "Event venues, bartenders, and wait staff—Bouul connects you with event planners.",
    keyBenefits: [
      "Reach event planners searching for venues and staff",
      "Seasonal and one-off bookings managed easily",
      "Upsell packages for catering, decor, and equipment",
      "Build reputation with event reviews",
    ],
    bouulFeatures: [
      "Calendar availability management",
      "Package deal builder (venue + staff + equipment)",
      "Deposit and cancellation policies",
      "Event timeline coordination tools",
    ],
    idealFor: "Event venues, bartenders, wait staff, accommodation rentals, catering services",
    revenuePotential: "Hospitality providers see 50% higher booking value with package deals",
    successTip: "Create bundled packages and showcase photos of past events",
  },
  education: {
    headline: "Share Your Knowledge, Grow Your Impact",
    subheadline: "Tutors and educators—Bouul helps you find students who need your expertise.",
    keyBenefits: [
      "Connect with students and parents locally",
      "Offer both in-person and online tutoring",
      "Recurring sessions for ongoing learning",
      "Build credibility with subject expertise badges",
    ],
    bouulFeatures: [
      "Subject and level specialization tags",
      "Online lesson integration (Zoom, etc.)",
      "Progress tracking and reporting",
      "Recurring booking for weekly sessions",
    ],
    idealFor: "Academic tutors, music teachers, language instructors, test prep coaches",
    revenuePotential: "Tutors on Bouul maintain 80%+ client retention with recurring bookings",
    successTip: "Specialize in high-demand subjects and offer package deals for exam prep",
  },
  retail: {
    headline: "Extend Your Retail Services",
    subheadline: "Personal shoppers, gift wrappers, and mystery shoppers—Bouul creates new revenue streams.",
    keyBenefits: [
      "Offer value-added services beyond products",
      "Mobile and at-home service options",
      "Seasonal and gift-focused promotions",
      "Build client loyalty through personalized service",
    ],
    bouulFeatures: [
      "Service menu customization",
      "Gift card and voucher system",
      "Seasonal promotion tools",
      "Client preference tracking",
    ],
    idealFor: "Personal shoppers, gift wrappers, mystery shoppers, product demonstrators",
    revenuePotential: "Retail service providers add 25-40% revenue through service add-ons",
    successTip: "Bundle services with products and promote heavily during holiday seasons",
  },
  childcare: {
    headline: "Trusted Childcare, Peace of Mind for Parents",
    subheadline: "Nannies, au pairs, and babysitters—Bouul connects you with families who need you.",
    keyBenefits: [
      "Reach parents seeking verified, trusted caregivers",
      "Background check and certification badges",
      "Recurring bookings for ongoing care",
      "Build long-term relationships with families",
    ],
    bouulFeatures: [
      "Background check verification badge",
      "First aid/CPR certification display",
      "Recurring schedule management",
      "Parent reviews and testimonials",
    ],
    idealFor: "Nannies, au pairs, babysitters, daycare providers, after-school care providers",
    revenuePotential: "Childcare providers on Bouul see 70%+ recurring booking rate",
    successTip: "Highlight your certifications and experience, and offer flexible scheduling",
  },
  seniorCare: {
    headline: "Compassionate Care for Seniors",
    subheadline: "Caregivers and companions—Bouul helps you support families who need trusted senior care.",
    keyBenefits: [
      "Connect with families seeking quality senior care",
      "Specialized training and certification badges",
      "Recurring and respite care bookings",
      "Build trust through verified reviews",
    ],
    bouulFeatures: [
      "Certification and training verification",
      "Specialized care tags (dementia, mobility, etc.)",
      "Recurring schedule coordination",
      "Family communication tools",
    ],
    idealFor: "Senior caregivers, companions, home health aides, respite care providers",
    revenuePotential: "Senior care providers maintain 85%+ client retention on Bouul",
    successTip: "Emphasize your compassion, training, and reliability in your profile",
  },
  professional: {
    headline: "Professional Services, Simplified",
    subheadline: "Consultants, coaches, and professional service providers—Bouul streamlines your practice.",
    keyBenefits: [
      "Reach clients seeking professional expertise",
      "Remote and in-person consultation options",
      "Package deals for ongoing consulting",
      "Build credibility with professional badges",
    ],
    bouulFeatures: [
      "Professional credential verification",
      "Consultation package builder",
      "Video conferencing integration",
      "Invoice and payment tracking",
    ],
    idealFor: "Business consultants, career coaches, financial advisors, legal consultants",
    revenuePotential: "Professional service providers earn 30-50% more with package pricing",
    successTip: "Offer free initial consultations and package deals for ongoing support",
  },
  eventServices: {
    headline: "Make Every Event Memorable",
    subheadline: "Event planners, decorators, and coordinators—Bouul connects you with celebration seekers.",
    keyBenefits: [
      "Reach clients planning weddings, parties, and corporate events",
      "Showcase past events with photo galleries",
      "Package deals for full-service planning",
      "Coordinate with other vendors seamlessly",
    ],
    bouulFeatures: [
      "Event portfolio gallery",
      "Package and tier pricing",
      "Vendor collaboration tools",
      "Event timeline and checklist management",
    ],
    idealFor: "Event planners, wedding coordinators, party decorators, venue stylists",
    revenuePotential: "Event service providers see 60% higher booking value with packages",
    successTip: "Create tiered packages and showcase your best events with professional photos",
  },
  logistics: {
    headline: "Move More, Earn More",
    subheadline: "Delivery services, movers, and logistics providers—Bouul keeps you busy.",
    keyBenefits: [
      "Connect with businesses and individuals needing logistics support",
      "On-demand and scheduled delivery options",
      "Route optimization and tracking",
      "Build reputation with reliable service",
    ],
    bouulFeatures: [
      "Service area mapping",
      "Real-time tracking integration",
      "Scheduled and on-demand booking",
      "Proof of delivery photos",
    ],
    idealFor: "Delivery drivers, movers, courier services, freight handlers",
    revenuePotential: "Logistics providers report 40% more jobs through Bouul's network",
    successTip: "Offer both scheduled and on-demand services for maximum flexibility",
  },
  entertainment: {
    headline: "Book More Gigs, Entertain More People",
    subheadline: "Musicians, DJs, performers, and entertainers—Bouul is your stage.",
    keyBenefits: [
      "Reach event planners and party hosts",
      "Showcase performances with video/audio",
      "Package deals for different event sizes",
      "Build a fan base through reviews",
    ],
    bouulFeatures: [
      "Media gallery (video, audio, photos)",
      "Availability calendar",
      "Package pricing by event type/size",
      "Client testimonial highlights",
    ],
    idealFor: "Musicians, DJs, magicians, face painters, caricature artists, performers",
    revenuePotential: "Entertainers on Bouul book 3x more gigs during peak seasons",
    successTip: "Upload high-quality performance videos and offer themed packages",
  },
  financial: {
    headline: "Grow Your Financial Services Practice",
    subheadline: "Accountants, bookkeepers, and financial advisors—Bouul connects you with clients.",
    keyBenefits: [
      "Reach individuals and small businesses",
      "Remote consultation and document sharing",
      "Recurring monthly service packages",
      "Build trust with professional credentials",
    ],
    bouulFeatures: [
      "Secure document sharing",
      "Recurring billing for monthly services",
      "Professional credential verification",
      "Video consultation integration",
    ],
    idealFor: "Accountants, bookkeepers, tax preparers, financial planners, payroll services",
    revenuePotential: "Financial service providers see 50%+ recurring revenue on Bouul",
    successTip: "Offer monthly packages and highlight your certifications prominently",
  },
  realEstate: {
    headline: "Property Services, Simplified",
    subheadline: "Property managers, inspectors, and real estate services—Bouul streamlines your operations.",
    keyBenefits: [
      "Connect with property owners and tenants",
      "Schedule inspections and maintenance easily",
      "Package deals for property management",
      "Build credibility with verified reviews",
    ],
    bouulFeatures: [
      "Property profile management",
      "Inspection scheduling and reporting",
      "Maintenance request tracking",
      "Document and lease management",
    ],
    idealFor: "Property managers, home inspectors, real estate photographers, staging professionals",
    revenuePotential: "Real estate service providers earn 35% more with Bouul's scheduling tools",
    successTip: "Offer comprehensive property packages and maintain detailed service records",
  },
  transport: {
    headline: "Keep Moving Forward",
    subheadline: "Drivers, chauffeurs, and transport services—Bouul connects you with riders.",
    keyBenefits: [
      "Reach clients needing reliable transport",
      "Scheduled and on-demand booking options",
      "Premium pricing for luxury/specialty services",
      "Build trust with safety certifications",
    ],
    bouulFeatures: [
      "Vehicle profile and photo gallery",
      "Availability and route management",
      "Recurring ride scheduling",
      "Safety certification badges",
    ],
    idealFor: "Chauffeurs, airport transfer services, tour drivers, specialized transport",
    revenuePotential: "Transport providers see 45% higher booking value with premium services",
    successTip: "Highlight your vehicle's features and offer airport/corporate packages",
  },
  foodBeverage: {
    headline: "Serve More Customers, Grow Your Culinary Brand",
    subheadline: "Private chefs, caterers, and food service professionals—Bouul is your kitchen pass.",
    keyBenefits: [
      "Reach food lovers seeking unique experiences",
      "Showcase your culinary creations",
      "Package deals for events and meal plans",
      "Build a following through reviews",
    ],
    bouulFeatures: [
      "Menu gallery with photos",
      "Dietary restriction tags",
      "Event catering packages",
      "Meal plan subscription management",
    ],
    idealFor: "Private chefs, caterers, personal cooks, baking specialists, meal prep services",
    revenuePotential: "Food service providers earn 50-80% more with private chef services",
    successTip: "Stunning food photos are essential—invest in professional photography",
  },
  unknown: {
    headline: "Join the Bouul Revolution",
    subheadline: "Whatever service you offer, Bouul helps you grow your business.",
    keyBenefits: [
      "Reach local clients actively searching for your services",
      "Flexible booking and pricing options",
      "Build credibility with verified reviews",
      "Grow your business on your terms",
    ],
    bouulFeatures: [
      "Customizable service offerings",
      "Flexible scheduling",
      "Secure payment processing",
      "Client communication tools",
    ],
    idealFor: "Any service professional looking to grow their business",
    revenuePotential: "Service providers across all categories see significant growth on Bouul",
    successTip: "Complete your profile fully, respond quickly to inquiries, and deliver exceptional service",
  },
};

// ============================================================================
// SERVICE DATA (From Database)
// ============================================================================

const SERVICE_TEMPLATES: ServiceTemplate[] = [
  {"id":"accommodation_rental","category_enum":"hospitality","name":{"en": "Short-term Accommodation"},"description":{"en": "Guest house or room rental."},"emoji":"🏠","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":800.00,"duration_minutes":1440,"search_keywords":["guest house","BnB","rental","short term stay","lodging"],"required_certifications":["Tourism Grading Council (Optional)","Local Municipality Business License"],"safety_level":"low","upsell_opportunities":[{"name": "Early Check-in","description": "Check in before 2 PM","additionalCost": 200},{"name": "Airport Shuttle","description": "One-way transport to airport","additionalCost": 450}]},
  {"id":"alarm_installation","category_enum":"homeServices","name":{"en": "Security Systems"},"description":{"en": "Installing alarms, beams, and electric fences."},"emoji":"🚨","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":180,"search_keywords":["alarm","security","beams","electric fence","CCTV"],"required_certifications":["PSIRA Registration","SAIDSA Certification (Preferred)"],"safety_level":"high","upsell_opportunities":[{"name": "Mobile App Integration","description": "Connect alarm to smartphone app","additionalCost": 800},{"name": "Annual Maintenance","description": "Full system test and battery check","additionalCost": 650}]},
  {"id":"auto_repair","category_enum":"automotive","name":{"en": "General Auto Repair"},"description":{"en": "Mechanical repairs for engines, gearboxes, and suspension."},"emoji":"🔧","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":950.00,"duration_minutes":120,"search_keywords":["mechanic","car repair","engine","gearbox","suspension","service"],"required_certifications":["Trade Test (Motor Mechanic)","RMI Membership"],"safety_level":"high","upsell_opportunities":[{"name": "Full Vehicle Inspection","description": "Comprehensive 50-point inspection","additionalCost": 350},{"name": "Brake Fluid Flush","description": "Complete brake system flush","additionalCost": 400}]},
  {"id":"barber_service","category_enum":"personalCare","name":{"en": "Barbering"},"description":{"en": "Traditional barbering services including fades, beard trims, and shaves."},"emoji":"💈","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":200.00,"duration_minutes":45,"search_keywords":["haircut","fade","beard trim","hot towel","shave"],"required_certifications":["Barbering Trade Certificate (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Hot Towel Shave","description": "Traditional hot towel and straight razor shave","additionalCost": 150},{"name": "Beard Trim & Style","description": "Professional beard shaping and conditioning","additionalCost": 100}]},
  {"id":"bartending","category_enum":"hospitality","name":{"en": "Private Bartending"},"description":{"en": "Mixology and drink service for events."},"emoji":"🍺","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":240,"search_keywords":["bartender","cocktails","mixology","drinks service","event bar"],"required_certifications":["Professional Bartending Course (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Custom Cocktail Menu","description": "Personalized menu for your event","additionalCost": 500},{"name": "Flair Bartending","description": "Entertainment and tricks while serving","additionalCost": 1500}]},
  {"id":"battery_replacement","category_enum":"automotive","name":{"en": "Battery Replacement"},"description":{"en": "Car battery testing and replacement."},"emoji":"🪫","service_behavior":"emergency","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":30,"search_keywords":["battery","car battery","jump start","testing","replacement"],"required_certifications":["Automotive Technician Certificate"],"safety_level":"medium","upsell_opportunities":[{"name": "Alternator Test","description": "Ensure alternator is charging correctly","additionalCost": 150},{"name": "Battery Terminal Protectors","description": "Apply anti-corrosion spray and felt washers","additionalCost": 80}]},
  {"id":"car_wash_detailing","category_enum":"automotive","name":{"en": "Car Wash & Detailing"},"description":{"en": "Premium vehicle cleaning, polishing, and interior valet."},"emoji":"🧼","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":350.00,"duration_minutes":90,"search_keywords":["car wash","detailing","valet","polishing","interior clean"],"required_certifications":["Professional Detailing Certification (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Engine Bay Detail","description": "Deep clean and dress engine compartment","additionalCost": 250},{"name": "Headlight Restoration","description": "Remove oxidation and restore clarity","additionalCost": 300}]},
  {"id":"carpentry","category_enum":"homeServices","name":{"en": "Carpentry & Joinery"},"description":{"en": "Woodwork, cupboard installation, and repairs."},"emoji":"🪚","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":120,"search_keywords":["carpenter","kitchen cupboards","shelving","door hanging","woodwork"],"required_certifications":["Trade Test (Carpenter)"],"safety_level":"medium","upsell_opportunities":[{"name": "Soft-Close Hinge Upgrade","description": "Replace standard hinges with soft-close","additionalCost": 150},{"name": "Custom Shelving","description": "Add additional internal shelving","additionalCost": 450}]},
  {"id":"childcare_nanny","category_enum":"childcare","name":{"en": "Nanny & Au Pair"},"description":{"en": "Child supervision and transport."},"emoji":"👶","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":150.00,"duration_minutes":180,"search_keywords":["nanny","au pair","babysitter","childcare","transport"],"required_certifications":["First Aid for Children","Drivers License (if transport required)"],"safety_level":"high","upsell_opportunities":[{"name": "Homework Assistance","description": "Help child with daily school work","additionalCost": 150},{"name": "Meal Prep","description": "Prepare healthy meals for children","additionalCost": 100}]},
  {"id":"childcare_service","category_enum":"childcare","name":{"en": "Childcare Services"},"description":{"en": "Professional childcare and babysitting services."},"emoji":"👩‍🍼","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":150.00,"duration_minutes":240,"search_keywords":["childcare","babysitting","daycare","supervision","kids"],"required_certifications":["ECD (Early Childhood Development) Certificate","First Aid / CPR"],"safety_level":"high","upsell_opportunities":[{"name": "Educational Activities","description": "Structured learning activities","additionalCost": 100},{"name": "Meal Preparation","description": "Healthy meals for children","additionalCost": 150}]},
  {"id":"chiropractic","category_enum":"healthcare","name":{"en": "Chiropractic Adjustment"},"description":{"en": "Spinal manipulation and musculoskeletal treatment."},"emoji":"💆","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":750.00,"duration_minutes":30,"search_keywords":["chiropractor","back cracker","spine alignment","neck pain","chiro"],"required_certifications":["HPCSA Registration (Chiropractor)","Master of Chiropractic degree"],"safety_level":"medium","upsell_opportunities":[{"name": "Posture Analysis","description": "Digital posture assessment and report","additionalCost": 300},{"name": "Massage Add-On","description": "15-minute targeted soft tissue work","additionalCost": 250}]},
  {"id":"content_writing","category_enum":"creative","name":{"en": "Content Writing"},"description":{"en": "Blogs, website copy, and articles."},"emoji":"📝","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":600.00,"duration_minutes":60,"search_keywords":["content writer","copywriting","blog writing","SEO articles","website copy"],"required_certifications":["Bachelor of Arts / Journalism (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "SEO Keyword Research","description": "Identify best keywords for your topic","additionalCost": 450},{"name": "Express Delivery","description": "24-hour turnaround","additionalCost": 300}]},
  {"id":"dental_service","category_enum":"healthcare","name":{"en": "Dental Check-up"},"description":{"en": "General dentistry, cleaning, and oral hygiene."},"emoji":"🦷","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":900.00,"duration_minutes":30,"search_keywords":["dentist","teeth cleaning","cavity","toothache","filling","dental"],"required_certifications":["HPCSA Registration (Dentist)"],"safety_level":"high","upsell_opportunities":[{"name": "Professional Teeth Whitening","description": "In-office whitening treatment","additionalCost": 2500},{"name": "Digital X-Ray Package","description": "Full mouth X-rays","additionalCost": 450}]},
  {"id":"dog_daycare","category_enum":"petServices","name":{"en": "Doggy Daycare"},"description":{"en": "Daytime pet supervision."},"emoji":"🐶","service_behavior":"subscription","delivery_method":"inStore","pricing_model":"fixed","base_price":150.00,"duration_minutes":480,"search_keywords":["dog daycare","pet sitting","dog minding","puppy care"],"required_certifications":["Animal Handling Training (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Pet Grooming Add-On","description": "Wash and brush before pickup","additionalCost": 350},{"name": "One-on-One Play","description": "15 mins of dedicated play time","additionalCost": 100}]},
  {"id":"dog_walking","category_enum":"petServices","name":{"en": "Dog Walking"},"description":{"en": "Professional dog walking."},"emoji":"🦮","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":150.00,"duration_minutes":30,"search_keywords":["dog walker","pet exercise","dog walking service"],"required_certifications":["Pet First Aid (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Extra 30 Mins","description": "Extend walk time","additionalCost": 100},{"name": "Feed & Water","description": "Replenish food/water after walk","additionalCost": 50}]},
  {"id":"electrical_service","category_enum":"homeServices","name":{"en": "Electrical Service"},"description":{"en": "Licensed electrician for repairs and installations."},"emoji":"⚡️","service_behavior":"emergency","delivery_method":"atHome","pricing_model":"fixed","base_price":950.00,"duration_minutes":90,"search_keywords":["electrician","tripping","inverter","solar","generator","DB board"],"required_certifications":["Wiremans License","ECSA Registration"],"safety_level":"critical","upsell_opportunities":[{"name": "Full Home Safety Inspection","description": "Complete electrical safety audit with COC","additionalCost": 800},{"name": "Surge Protection Installation","description": "Whole-home surge protector","additionalCost": 1500}]},
  {"id":"event_venue","category_enum":"hospitality","name":{"en": "Event Venue Rental"},"description":{"en": "Space rental for weddings, parties, or conferences."},"emoji":"🏰","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":5000.00,"duration_minutes":480,"search_keywords":["venue rental","event space","wedding venue","party hall","conference room"],"required_certifications":["Liquor License (if serving)","Fire Safety Certificate"],"safety_level":"low","upsell_opportunities":[{"name": "Sound System","description": "Professional PA and DJ setup","additionalCost": 3000},{"name": "Decor Package","description": "Tables, chairs, linens, centerpieces","additionalCost": 5000}]},
  {"id":"eyelash_extensions","category_enum":"personalCare","name":{"en": "Eyelash Extensions"},"description":{"en": "Application of individual lash extensions."},"emoji":"🙄","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":650.00,"duration_minutes":90,"search_keywords":["lashes","volume lashes","classic lashes","eyelash extensions"],"required_certifications":["Eyelash Technician Certification"],"safety_level":"medium","upsell_opportunities":[{"name": "Lash Bath","description": "Deep clean of lashes before service","additionalCost": 100},{"name": "Lash Tint","description": "Darken natural lashes","additionalCost": 150}]},
  {"id":"garage_door_repair","category_enum":"homeServices","name":{"en": "Garage Door Automation"},"description":{"en": "Repairing motors and garage doors."},"emoji":"🚪","service_behavior":"emergency","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":60,"search_keywords":["garage door","motor repair","automation","broken spring","remote"],"required_certifications":["Garage Door Installation Certificate (Optional)"],"safety_level":"high","upsell_opportunities":[{"name": "Smart Remote","description": "Smartphone controlled garage door","additionalCost": 1200},{"name": "Battery Backup","description": "Ensure door works during loadshedding","additionalCost": 850}]},
  {"id":"garden_maintenance","category_enum":"homeServices","name":{"en": "Landscaping & Maintenance"},"description":{"en": "Planting, pruning, and garden design."},"emoji":"🪏","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":450.00,"duration_minutes":120,"search_keywords":["gardener","landscaping","planting","pruning","garden service"],"required_certifications":["Horticulture Certificate (Optional)"],"safety_level":"medium","upsell_opportunities":[{"name": "Hedge Trimming","description": "Professional hedge shaping","additionalCost": 300},{"name": "Weed Treatment","description": "Apply weed killer and preventer","additionalCost": 200}]},
  {"id":"gift_wrapping","category_enum":"retail","name":{"en": "Professional Gift Wrapping"},"description":{"en": "Artistic wrapping for bulk gifts or special occasions."},"emoji":"🎁","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":200.00,"duration_minutes":60,"search_keywords":["gift wrapping","present wrapping","corporate gifts","bulk wrapping"],"required_certifications":["Gift Wrapping Workshop (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Custom Gift Tag","description": "Hand-written or printed tag","additionalCost": 20},{"name": "Luxury Ribbon Upgrade","description": "Silk or velvet ribbon","additionalCost": 50}]},
  {"id":"graphic_design","category_enum":"creative","name":{"en": "Graphic Design"},"description":{"en": "Logos, flyers, and branding."},"emoji":"☮️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"project","base_price":850.00,"duration_minutes":60,"search_keywords":["graphic designer","logo design","branding","flyers","digital art"],"required_certifications":["Diploma/Degree in Graphic Design"],"safety_level":"low","upsell_opportunities":[{"name": "Brand Style Guide","description": "Complete brand guidelines document","additionalCost": 3500},{"name": "Social Media Kit","description": "Templates for all social platforms","additionalCost": 2000}]},
  {"id":"hair_styling","category_enum":"personalCare","name":{"en": "Hair Styling Service"},"description":{"en": "Professional hair cutting, coloring, and styling services."},"emoji":"💇","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":350.00,"duration_minutes":60,"search_keywords":["hair stylist","haircut","coloring","plaiting","blow wave"],"required_certifications":["Cosmetology Qualification"],"safety_level":"low","upsell_opportunities":[{"name": "Wash & Blow-Dry","description": "Professional wash and styling","additionalCost": 150},{"name": "Deep Conditioning Treatment","description": "Intensive moisture repair treatment","additionalCost": 200}]},
  {"id":"home_nursing","category_enum":"healthcare","name":{"en": "Home Nursing Services"},"description":{"en": "Wound care, injections, and post-op recovery assistance."},"emoji":"👩‍⚕️","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":600.00,"duration_minutes":60,"search_keywords":["nurse","home care","wound dressing","injection","post-op"],"required_certifications":["SANC Registration (South African Nursing Council)"],"safety_level":"high","upsell_opportunities":[{"name": "Overnight Shift","description": "12-hour overnight nursing care","additionalCost": 1500},{"name": "Full Vital Check","description": "Detailed report for family doctor","additionalCost": 200}]},
  {"id":"house_cleaning","category_enum":"homeServices","name":{"en": "House Cleaning"},"description":{"en": "Professional residential cleaning."},"emoji":"🧹","service_behavior":"subscription","delivery_method":"atHome","pricing_model":"fixed","base_price":350.00,"duration_minutes":240,"search_keywords":["cleaner","maid","domestic worker","spring clean","ironing"],"required_certifications":["Cleaning Professional Certificate (Optional)"],"safety_level":"medium","upsell_opportunities":[{"name": "Deep Clean Add-On","description": "Intensive cleaning of kitchen appliances and bathrooms","additionalCost": 400},{"name": "Window Cleaning (Interior)","description": "All interior windows cleaned","additionalCost": 250}]},
  {"id":"hvac_service","category_enum":"homeServices","name":{"en": "HVAC Service"},"description":{"en": "Heating and cooling systems."},"emoji":"💨","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":90,"search_keywords":["aircon repair","HVAC","heating","cooling","ventilation"],"required_certifications":["Refrigeration and Air Conditioning Trade Certificate"],"safety_level":"high","upsell_opportunities":[{"name": "Annual Service Plan","description": "Two maintenance visits per year","additionalCost": 1200},{"name": "Filter Replacement","description": "Install new high-efficiency filters","additionalCost": 350}]},
  {"id":"interior_design","category_enum":"creative","name":{"en": "Interior Design Consultation"},"description":{"en": "Style advice and room planning."},"emoji":"🛋️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":850.00,"duration_minutes":60,"search_keywords":["interior designer","decorating","room planning","style advice","home makeover"],"required_certifications":["Degree/Diploma in Interior Design"],"safety_level":"low","upsell_opportunities":[{"name": "3D Render","description": "Realistic 3D image of the proposed design","additionalCost": 1500},{"name": "Shopping Service","description": "Sourcing and ordering furniture/decor","additionalCost": 1000}]},
  {"id":"lawn_care","category_enum":"homeServices","name":{"en": "Lawn Mowing & Edging"},"description":{"en": "Routine grass cutting and edge trimming."},"emoji":"👨‍🌾","service_behavior":"subscription","delivery_method":"atHome","pricing_model":"fixed","base_price":250.00,"duration_minutes":60,"search_keywords":["lawn mowing","grass cutting","edging","lawn care","garden maintenance"],"required_certifications":["Pesticide Applicator License (if applying chemicals)"],"safety_level":"medium","upsell_opportunities":[{"name": "Lawn Fertilization","description": "Apply professional grade fertilizer","additionalCost": 350},{"name": "Soil Aeration","description": "Mechanical aeration of the lawn","additionalCost": 600}]},
  {"id":"life_coaching","category_enum":"fitnessWellness","name":{"en": "Life Coaching"},"description":{"en": "Personal development and goal setting."},"emoji":"🏃‍♀️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":800.00,"duration_minutes":60,"search_keywords":["life coach","personal development","goal setting","mentoring","mindset"],"required_certifications":["ICF Certification (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Monthly Program","description": "4 sessions per month discount","additionalCost": 2500},{"name": "Personality Assessment","description": "Detailed profiling and report","additionalCost": 600}]},
  {"id":"locksmith","category_enum":"homeServices","name":{"en": "Locksmith Service"},"description":{"en": "Opening locked doors, cutting keys, and lock replacement."},"emoji":"🔓","service_behavior":"emergency","delivery_method":"atHome","pricing_model":"fixed","base_price":650.00,"duration_minutes":45,"search_keywords":["locksmith","locked out","key cutting","lock replacement","emergency locksmith"],"required_certifications":["LASA Registration (Locksmith Association of SA)"],"safety_level":"medium","upsell_opportunities":[{"name": "High Security Lock","description": "Upgrade to pick-resistant lock","additionalCost": 1200},{"name": "Spare Key","description": "Additional key cut on-site","additionalCost": 80}]},
  {"id":"makeup_artist","category_enum":"personalCare","name":{"en": "Professional Makeup"},"description":{"en": "Makeup for events, weddings, or shoots."},"emoji":"💄","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":60,"search_keywords":["makeup artist","MUA","bridal makeup","matric dance","event makeup"],"required_certifications":["Makeup Artistry Certificate"],"safety_level":"low","upsell_opportunities":[{"name": "False Lashes Application","description": "Professional lash application","additionalCost": 150},{"name": "Airbrush Makeup","description": "Flawless airbrush finish","additionalCost": 250}]},
  {"id":"massage_therapy","category_enum":"fitnessWellness","name":{"en": "Massage Therapy"},"description":{"en": "Therapeutic massage and relaxation services."},"emoji":"🧖‍♀️","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":650.00,"duration_minutes":60,"search_keywords":["massage","therapy","relaxation","deep tissue","spa"],"required_certifications":["Massage Therapy Qualification"],"safety_level":"low","upsell_opportunities":[{"name": "Hot Stone Therapy","description": "Heated basalt stones for deep relaxation","additionalCost": 200},{"name": "Aromatherapy Add-On","description": "Custom essential oil blend","additionalCost": 100}]},
  {"id":"meditation_instruction","category_enum":"fitnessWellness","name":{"en": "Meditation & Breathwork"},"description":{"en": "Guided mindfulness and breathing techniques."},"emoji":"🧘‍♀️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":350.00,"duration_minutes":30,"search_keywords":["meditation","breathwork","mindfulness","guided meditation","calm"],"required_certifications":["Meditation Teacher Certification"],"safety_level":"low","upsell_opportunities":[{"name": "Personalized Guided Audio","description": "Recorded meditation tailored to you","additionalCost": 300},{"name": "Group Session","description": "Add up to 5 friends","additionalCost": 500}]},
  {"id":"mental_health_counseling","category_enum":"healthcare","name":{"en": "Mental Health Counseling"},"description":{"en": "Therapy sessions for mental wellness and psychology."},"emoji":"🛋️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":1100.00,"duration_minutes":50,"search_keywords":["psychologist","therapy","counselor","depression","anxiety","mental health"],"required_certifications":["HPCSA Registration (Psychologist/Counselor)"],"safety_level":"low","upsell_opportunities":[{"name": "Emergency Support","description": "Access to emergency chat support","additionalCost": 500},{"name": "Workshop Access","description": "Discounted access to mental health webinars","additionalCost": 200}]},
  {"id":"mobile_mechanic","category_enum":"automotive","name":{"en": "Mobile Mechanic"},"description":{"en": "On-site vehicle repair and minor servicing."},"emoji":"👨‍🔧","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":650.00,"duration_minutes":60,"search_keywords":["mechanic","mobile mechanic","car repair","on-site service","breakdown"],"required_certifications":["Trade Test (Motor Mechanic)"],"safety_level":"medium","upsell_opportunities":[{"name": "Battery Health Check","description": "Full battery and charging system test","additionalCost": 150},{"name": "Fluids Top-Up","description": "Top up oil, coolant, and brake fluid","additionalCost": 250}]},
  {"id":"mystery_shopping","category_enum":"retail","name":{"en": "Mystery Shopping"},"description":{"en": "Evaluating service quality anonymously."},"emoji":"🛍️","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":250.00,"duration_minutes":60,"search_keywords":["mystery shopper","quality evaluation","secret shopper","service audit"],"required_certifications":["Mystery Shopping Training (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Detailed Audio Report","description": "Audio recording of the experience","additionalCost": 200},{"name": "Video Evidence","description": "Hidden camera video of the audit","additionalCost": 500}]},
  {"id":"nail_service","category_enum":"personalCare","name":{"en": "Nail Technology"},"description":{"en": "Manicures, pedicures, and artificial nails."},"emoji":"💅","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":350.00,"duration_minutes":60,"search_keywords":["nails","acrylic","gel","pedi","manicure","nail tech"],"required_certifications":["Nail Technology Certificate"],"safety_level":"low","upsell_opportunities":[{"name": "Gel Polish Upgrade","description": "Long-lasting gel polish","additionalCost": 150},{"name": "Acrylic Full Set","description": "Full set acrylic extensions","additionalCost": 400}]},
  {"id":"nutrition_consulting","category_enum":"fitnessWellness","name":{"en": "Nutrition Consultation"},"description":{"en": "Dietary planning and nutritional advice."},"emoji":"🥦","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":700.00,"duration_minutes":60,"search_keywords":["nutritionist","dietitian","diet planning","weight loss","healthy eating"],"required_certifications":["Dietetics degree or Nutritionist Certification"],"safety_level":"low","upsell_opportunities":[{"name": "Personalized Meal Plan","description": "Detailed 7-day meal plan","additionalCost": 500},{"name": "Supermarket Tour","description": "Guided shopping for healthy choices","additionalCost": 800}]},
  {"id":"optometry","category_enum":"healthcare","name":{"en": "Eye Examination"},"description":{"en": "Vision testing and prescription for glasses/contacts."},"emoji":"👓","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":450.00,"duration_minutes":30,"search_keywords":["eye test","optometrist","glasses","contact lenses","vision"],"required_certifications":["HPCSA Registration (Optometrist)"],"safety_level":"low","upsell_opportunities":[{"name": "Blue Light Filter","description": "Add blue light protection to lenses","additionalCost": 450},{"name": "Retinal Photography","description": "Advanced imaging of the back of the eye","additionalCost": 350}]},
  {"id":"painting_service","category_enum":"homeServices","name":{"en": "Painting Service"},"description":{"en": "Interior and exterior wall painting."},"emoji":"🖌️","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"project","base_price":1500.00,"duration_minutes":480,"search_keywords":["painter","waterproofing","wall paint","interior painting","exterior painting"],"required_certifications":["Painting Trade Certificate (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Feature Wall","description": "Accent wall with custom color or texture","additionalCost": 600},{"name": "Trim Painting","description": "Detailed painting of skirtings and door frames","additionalCost": 800}]},
  {"id":"panel_beating","category_enum":"automotive","name":{"en": "Panel Beating & Dent Repair"},"description":{"en": "Auto body repair, spray painting, and scratch removal."},"emoji":"🛠️","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":1500.00,"duration_minutes":240,"search_keywords":["panel beating","dent repair","auto body","spray paint","collision repair"],"required_certifications":["Trade Test (Panel Beater)"],"safety_level":"high","upsell_opportunities":[{"name": "Full Car Polish","description": "Machine polish for entire vehicle","additionalCost": 1200},{"name": "Scratch Removal","description": "Deep scratch repair per panel","additionalCost": 450}]},
  {"id":"personal_shopper","category_enum":"retail","name":{"en": "Personal Shopper"},"description":{"en": "Buying clothes, groceries, or gifts on client behalf."},"emoji":"🛒","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":350.00,"duration_minutes":120,"search_keywords":["personal shopper","grocery delivery","shopping assistant","stylist"],"required_certifications":["Fashion Styling Certificate (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Wardrobe Audit","description": "Review current wardrobe and suggest additions","additionalCost": 1200},{"name": "Gift Wrapping","description": "Professional wrapping of purchased items","additionalCost": 150}]},
  {"id":"personal_training","category_enum":"fitnessWellness","name":{"en": "Personal Training"},"description":{"en": "1-on-1 fitness coaching and workout planning."},"emoji":"🏋️‍♀️","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":400.00,"duration_minutes":60,"search_keywords":["personal trainer","fitness coach","workout","gym training","bodybuilding"],"required_certifications":["Personal Training Certificate (REPSSA Accredited)"],"safety_level":"medium","upsell_opportunities":[{"name": "Nutrition Plan","description": "Customized meal plan and macros","additionalCost": 500},{"name": "Body Composition Analysis","description": "Detailed body fat and muscle analysis","additionalCost": 200}]},
  {"id":"pest_control","category_enum":"homeServices","name":{"en": "Pest Control"},"description":{"en": "Extermination of pests and insects."},"emoji":"🪳","service_behavior":"subscription","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":60,"search_keywords":["pest control","fumigation","cockroaches","rats","ants","exterminator"],"required_certifications":["P Number (Registered Pest Control Operator)"],"safety_level":"high","upsell_opportunities":[{"name": "Rodent Bait Stations","description": "Install permanent outdoor bait stations","additionalCost": 450},{"name": "Follow-up Visit","description": "Second treatment after 14 days","additionalCost": 600}]},
  {"id":"pet_grooming","category_enum":"petServices","name":{"en": "Pet Grooming"},"description":{"en": "Bathing, haircuts, and nail trimming for pets."},"emoji":"🐩","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":450.00,"duration_minutes":90,"search_keywords":["pet grooming","dog wash","pet haircut","nail trimming","poodle cut"],"required_certifications":["Pet Grooming Certificate"],"safety_level":"medium","upsell_opportunities":[{"name": "De-Shedding Treatment","description": "Reduce shedding by 80%","additionalCost": 150},{"name": "Teeth Brushing","description": "Professional pet teeth cleaning","additionalCost": 100}]},
  {"id":"photography_service","category_enum":"creative","name":{"en": "Professional Photography"},"description":{"en": "Portrait, event, or product photography services."},"emoji":"📸","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":120,"search_keywords":["photographer","portrait","event photography","product shots","wedding photographer"],"required_certifications":["Photography Diploma/Degree (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Additional Hour","description": "Extra hour of shooting time","additionalCost": 800},{"name": "Premium Editing Package","description": "Advanced retouching for all photos","additionalCost": 1000}]},
  {"id":"physiotherapy","category_enum":"healthcare","name":{"en": "Physiotherapy Session"},"description":{"en": "Rehabilitation, pain management, and mobility treatment."},"emoji":"🧑‍⚕️","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":45,"search_keywords":["physio","sports injury","back pain","rehab","stiff neck"],"required_certifications":["HPCSA Registration (Physiotherapist)","Degree in Physiotherapy"],"safety_level":"medium","upsell_opportunities":[{"name": "Dry Needling","description": "Trigger point dry needling","additionalCost": 200},{"name": "Shockwave Therapy","description": "Advanced pain treatment","additionalCost": 400}]},
  {"id":"pilates_class","category_enum":"fitnessWellness","name":{"en": "Pilates Instruction"},"description":{"en": "Core strength and posture conditioning."},"emoji":"🤸‍♀️","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":500.00,"duration_minutes":50,"search_keywords":["pilates","core strength","posture","reformer","fitness"],"required_certifications":["Pilates Instructor Certification"],"safety_level":"medium","upsell_opportunities":[{"name": "Private Intro Session","description": "One-on-one introduction to Pilates","additionalCost": 450},{"name": "Reformer Upgrade","description": "Use reformer machine instead of mat","additionalCost": 150}]},
  {"id":"plumbing","category_enum":"homeServices","name":{"en": "Plumbing Service"},"description":{"en": "Professional plumbing repair and maintenance."},"emoji":"👨‍🔧","service_behavior":"emergency","delivery_method":"atHome","pricing_model":"fixed","base_price":850.00,"duration_minutes":60,"search_keywords":["plumber","geyser","leak","drain","toilet","solar geyser"],"required_certifications":["PIRB Registered","Trade Test"],"safety_level":"high","upsell_opportunities":[{"name": "Full Home Plumbing Inspection","description": "Complete plumbing audit","additionalCost": 600},{"name": "Geyser Maintenance","description": "Geyser service and anode replacement","additionalCost": 800}]},
  {"id":"product_demonstration","category_enum":"retail","name":{"en": "Product Demonstration"},"description":{"en": "In-store or event demo of products."},"emoji":"📹","service_behavior":"projectBased","delivery_method":"inStore","pricing_model":"fixed","base_price":150.00,"duration_minutes":240,"search_keywords":["product demo","in-store demonstration","promotion","sampling","event promo"],"required_certifications":["Promotional Training (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Lead Capture Service","description": "Detailed report of customer contacts","additionalCost": 300},{"name": "Video Summary","description": "Short video clip of the demo","additionalCost": 250}]},
  {"id":"roadside_assistance","category_enum":"automotive","name":{"en": "Roadside Assistance"},"description":{"en": "Fuel delivery, jump starts, and lockout services."},"emoji":"🚗","service_behavior":"emergency","delivery_method":"remote","pricing_model":"fixed","base_price":550.00,"duration_minutes":30,"search_keywords":["roadside assistance","fuel delivery","jump start","lockout","flat tyre"],"required_certifications":["Automotive Technician Certificate"],"safety_level":"medium","upsell_opportunities":[{"name": "Tyre Plug","description": "On-site puncture repair","additionalCost": 150},{"name": "Battery Testing","description": "Full diagnostic test of battery","additionalCost": 100}]},
  {"id":"roofing_repair","category_enum":"homeServices","name":{"en": "Roofing Repairs"},"description":{"en": "Fixing tiles, cleaning gutters, and roof structure."},"emoji":"🛖","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":950.00,"duration_minutes":120,"search_keywords":["roof repair","leaking roof","gutter cleaning","tiles","waterproofing"],"required_certifications":["Roofing Specialist Certificate"],"safety_level":"critical","upsell_opportunities":[{"name": "Full Roof Inspection","description": "Comprehensive roof audit","additionalCost": 500},{"name": "Gutter Cleaning","description": "Clean and clear all gutters","additionalCost": 400}]},
  {"id":"senior_care","category_enum":"seniorCare","name":{"en": "Senior Care Services"},"description":{"en": "Companionship and assistance for elderly individuals."},"emoji":"👵","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":200.00,"duration_minutes":180,"search_keywords":["senior care","elderly care","companionship","assisted living","home care"],"required_certifications":["Caregiver Training (Level 1-3)","First Aid"],"safety_level":"high","upsell_opportunities":[{"name": "Medication Reminders","description": "Scheduled medication management","additionalCost": 100},{"name": "Transport Service","description": "Doctor appointments and errands","additionalCost": 200}]},
  {"id":"skincare_facial","category_enum":"personalCare","name":{"en": "Skincare & Facials"},"description":{"en": "Treatments for skin health and aesthetics."},"emoji":"🧴","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":550.00,"duration_minutes":60,"search_keywords":["skincare","facial","peel","acne treatment","anti-aging","esthetician"],"required_certifications":["Somatologist / Esthetician Qualification"],"safety_level":"low","upsell_opportunities":[{"name": "Eye Treatment","description": "Targeted treatment for dark circles/puffiness","additionalCost": 150},{"name": "Sheet Mask Add-On","description": "Premium hydrating sheet mask","additionalCost": 80}]},
  {"id":"social_media_management","category_enum":"creative","name":{"en": "Social Media Management"},"description":{"en": "Managing profiles, posts, and engagement."},"emoji":"📱","service_behavior":"subscription","delivery_method":"remote","pricing_model":"subscription","base_price":3500.00,"duration_minutes":60,"search_keywords":["social media manager","instagram management","facebook marketing","content scheduling"],"required_certifications":["Social Media Marketing Certificate"],"safety_level":"low","upsell_opportunities":[{"name": "Content Creation","description": "Custom graphics and videos","additionalCost": 2000},{"name": "Paid Ads Management","description": "Facebook/Instagram ads","additionalCost": 2500}]},
  {"id":"speech_therapy","category_enum":"healthcare","name":{"en": "Speech Therapy"},"description":{"en": "Treatment for speech, language, and swallowing disorders."},"emoji":"🗯️","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":800.00,"duration_minutes":45,"search_keywords":["speech therapist","speechie","stuttering","lisp","language delay"],"required_certifications":["HPCSA Registration (Speech Therapist)","Degree in Speech Therapy"],"safety_level":"low","upsell_opportunities":[{"name": "Home Practice Kit","description": "Materials for between-session practice","additionalCost": 350},{"name": "Detailed Assessment Report","description": "Full written report of findings","additionalCost": 600}]},
  {"id":"telemedicine","category_enum":"healthcare","name":{"en": "Telemedicine Consultation"},"description":{"en": "Virtual doctor consultation via video call."},"emoji":"👩‍⚕️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":550.00,"duration_minutes":15,"search_keywords":["online doctor","virtual GP","sick note","prescription","telehealth"],"required_certifications":["HPCSA Registration (Medical Practitioner)"],"safety_level":"low","upsell_opportunities":[{"name": "Sick Note Delivery","description": "Digital sick note via email/WhatsApp","additionalCost": 50},{"name": "Prescription Courier","description": "Delivery of medication to your door","additionalCost": 150}]},
  {"id":"threading_service","category_enum":"personalCare","name":{"en": "Threading"},"description":{"en": "Precision hair removal using thread."},"emoji":"🪡","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":100.00,"duration_minutes":15,"search_keywords":["threading","eyebrows","upper lip","facial hair removal","precision threading"],"required_certifications":["Threading Certificate (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Brow Tint","description": "Add color to eyebrows","additionalCost": 120},{"name": "Aloe Soothing Mask","description": "Post-threading soothing treatment","additionalCost": 50}]},
  {"id":"tiling_service","category_enum":"homeServices","name":{"en": "Tiling Service"},"description":{"en": "Floor and wall tiling."},"emoji":"🗜️","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"project","base_price":350.00,"duration_minutes":240,"search_keywords":["tiler","floor tiling","wall tiling","bathroom tiles","kitchen splashback"],"required_certifications":["Tiling Trade Certificate (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Epoxy Grout Upgrade","description": "Stain-resistant and durable grout","additionalCost": 800},{"name": "Old Tile Removal","description": "Removal and disposal of existing tiles","additionalCost": 1500}]},
  {"id":"towing_service","category_enum":"automotive","name":{"en": "Towing Service"},"description":{"en": "Vehicle recovery and towing."},"emoji":"🛻","service_behavior":"projectBased","delivery_method":"remote","pricing_model":"fixed","base_price":1800.00,"duration_minutes":60,"search_keywords":["tow truck","roadside recovery","breakdown towing","vehicle transport"],"required_certifications":["Public Drivers Permit (PDP)","Towing Association Membership"],"safety_level":"high","upsell_opportunities":[{"name": "Winch Recovery","description": "Vehicle recovery from difficult positions","additionalCost": 500},{"name": "Long Distance Towing","description": "Per additional kilometer","additionalCost": 25}]},
  {"id":"tree_felling","category_enum":"homeServices","name":{"en": "Tree Felling"},"description":{"en": "Cutting down and removing trees."},"emoji":"🪾","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":2500.00,"duration_minutes":180,"search_keywords":["tree felling","tree removal","stump grinding","pruning","arborist"],"required_certifications":["Certified Arborist (Preferred)"],"safety_level":"critical","upsell_opportunities":[{"name": "Stump Grinding","description": "Complete stump removal","additionalCost": 800},{"name": "Debris Removal","description": "Remove all branches and wood","additionalCost": 500}]},
  {"id":"tutoring_service","category_enum":"education","name":{"en": "Academic Tutoring"},"description":{"en": "One-on-one educational support for all subjects and levels."},"emoji":"🧑‍🏫","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":300.00,"duration_minutes":60,"search_keywords":["tutor","academic help","maths tutor","science tutor","exam prep"],"required_certifications":["Subject Matter Expertise (Degree or High Achievement)"],"safety_level":"low","upsell_opportunities":[{"name": "Study Plan Creation","description": "Customized study schedule","additionalCost": 300},{"name": "Practice Tests","description": "Additional practice exam sessions","additionalCost": 250}]},
  {"id":"tyre_service","category_enum":"automotive","name":{"en": "Mobile Tyre Service"},"description":{"en": "Tyre replacement, puncture repair, and balancing."},"emoji":"🛞","service_behavior":"onDemand","delivery_method":"atHome","pricing_model":"fixed","base_price":400.00,"duration_minutes":45,"search_keywords":["tyre repair","puncture fix","wheel balancing","mobile tyre service"],"required_certifications":["Tyre Technician Training"],"safety_level":"medium","upsell_opportunities":[{"name": "Wheel Balancing","description": "Ensure wheels rotate without vibration","additionalCost": 250},{"name": "Nitrogen Fill","description": "Fill tyres with nitrogen for stable pressure","additionalCost": 100}]},
  {"id":"veterinary_home_visit","category_enum":"petServices","name":{"en": "Veterinary Home Consult"},"description":{"en": "Vet consultation at home."},"emoji":"🐈","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":900.00,"duration_minutes":45,"search_keywords":["vet","mobile vet","home visit vet","pet health","animal doctor"],"required_certifications":["SAVC Registration (Veterinarian)"],"safety_level":"medium","upsell_opportunities":[{"name": "Microchipping","description": "Install permanent identification chip","additionalCost": 450},{"name": "Rabies Vaccination","description": "Essential rabies shot","additionalCost": 250}]},
  {"id":"video_editing","category_enum":"creative","name":{"en": "Video Editing"},"description":{"en": "Post-production for video content."},"emoji":"🖥️","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"project","base_price":1500.00,"duration_minutes":120,"search_keywords":["video editor","post-production","youtube editing","commercial editing","reels"],"required_certifications":["Video Editing Certification (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Color Grading","description": "Professional color correction","additionalCost": 1000},{"name": "Motion Graphics","description": "Animated titles and effects","additionalCost": 1500}]},
  {"id":"voiceover_artist","category_enum":"creative","name":{"en": "Voiceover Service"},"description":{"en": "Audio recording for commercials or narration."},"emoji":"🎤","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"fixed","base_price":1200.00,"duration_minutes":30,"search_keywords":["voice artist","voiceover","narration","commercial voice","dubbing"],"required_certifications":["Voice Acting Training (Optional)"],"safety_level":"low","upsell_opportunities":[{"name": "Sync to Video","description": "Timing voiceover to video","additionalCost": 500},{"name": "Multiple Revisions","description": "Up to 5 revision rounds","additionalCost": 600}]},
  {"id":"wait_staff","category_enum":"hospitality","name":{"en": "Wait Staff Service"},"description":{"en": "Servers and runners for private events."},"emoji":"🕴","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"hourly","base_price":150.00,"duration_minutes":240,"search_keywords":["waiter","server","event staff","catering help","private party staff"],"required_certifications":["Hospitality Training Certificate (Preferred)"],"safety_level":"low","upsell_opportunities":[{"name": "Drink Service","description": "Dedicated beverage serving","additionalCost": 200},{"name": "Setup & Cleanup","description": "Additional hour for setup/cleanup","additionalCost": 150}]},
  {"id":"waterproofing","category_enum":"homeServices","name":{"en": "Waterproofing"},"description":{"en": "Sealing roofs, showers, and balconies."},"emoji":"💦","service_behavior":"projectBased","delivery_method":"atHome","pricing_model":"fixed","base_price":1200.00,"duration_minutes":180,"search_keywords":["waterproofing","roof sealing","shower sealing","leak prevention","damp proofing"],"required_certifications":["Waterproofing Specialist Certificate"],"safety_level":"high","upsell_opportunities":[{"name": "Full Damp Audit","description": "Complete check for hidden moisture","additionalCost": 450},{"name": "Guarantee Certificate","description": "Written 5-year workmanship guarantee","additionalCost": 300}]},
  {"id":"waxing_service","category_enum":"personalCare","name":{"en": "Waxing & Hair Removal"},"description":{"en": "Professional hair removal services."},"emoji":"🪒","service_behavior":"scheduled","delivery_method":"inStore","pricing_model":"fixed","base_price":250.00,"duration_minutes":30,"search_keywords":["waxing","hair removal","leg wax","brazilian","hollywood"],"required_certifications":["Somatologist / Esthetician Qualification"],"safety_level":"medium","upsell_opportunities":[{"name": "Soothing Mask","description": "Cooling mask for sensitive areas","additionalCost": 100},{"name": "Ingrown Hair Serum","description": "Take-home serum to prevent ingrowns","additionalCost": 250}]},
  {"id":"web_development","category_enum":"creative","name":{"en": "Web Development"},"description":{"en": "Website and app creation."},"emoji":"💻","service_behavior":"scheduled","delivery_method":"remote","pricing_model":"project","base_price":5000.00,"duration_minutes":60,"search_keywords":["web developer","website creation","ecommerce","app development","react","flutter"],"required_certifications":["Degree/Diploma in Computer Science or Web Development"],"safety_level":"low","upsell_opportunities":[{"name": "SEO Optimization","description": "Basic SEO setup and optimization","additionalCost": 2500},{"name": "Content Management System","description": "Easy-to-use CMS integration","additionalCost": 3000}]},
  {"id":"yoga_class","category_enum":"fitnessWellness","name":{"en": "Private Yoga Session"},"description":{"en": "Guided yoga instruction for flexibility and mindfulness."},"emoji":"🧘","service_behavior":"scheduled","delivery_method":"atHome","pricing_model":"fixed","base_price":450.00,"duration_minutes":60,"search_keywords":["yoga","vinyasa","mindfulness","flexibility","private yoga"],"required_certifications":["RYT 200 (Registered Yoga Teacher)"],"safety_level":"low","upsell_opportunities":[{"name": "Guided Meditation Add-On","description": "15 mins of guided meditation after class","additionalCost": 150},{"name": "Private Intro Pack","description": "3 sessions for beginners","additionalCost": 1200}]},
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const VendorCategoryValueProp = () => {
  const services = SERVICE_TEMPLATES;
  const [selectedCategory, setSelectedCategory] = useState<string>("personalCare");
  const [selectedService, setSelectedService] = useState<ServiceTemplate | null>(null);

  // Group services by category
  const servicesByCategory = useMemo(() => {
    const grouped: Record<string, ServiceTemplate[]> = {};
    services.forEach((service) => {
      const category = service.category_enum;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(service);
    });
    return grouped;
  }, [services]);

  const categories = Object.keys(servicesByCategory).sort();
  const currentCategoryServices = servicesByCategory[selectedCategory] || [];
  const valueProp = CATEGORY_VALUE_PROPS[selectedCategory] || CATEGORY_VALUE_PROPS.unknown;

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            FOR EVERY PROFESSIONAL
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Built for your success
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Whatever service you offer, Bouul gives you the tools to grow your business, 
            manage bookings, and build lasting client relationships.
          </p>
        </motion.div>

        {/* Category Selector - Horizontal Scroll */}
        <div className="mb-12">
          <div
            className="flex gap-2 overflow-x-auto pb-4 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((category) => {
              const count = servicesByCategory[category]?.length || 0;
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedService(null);
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  {formatCategoryName(category)}
                  <span className={`ml-2 ${isActive ? "text-emerald-200" : "text-neutral-600"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Value Proposition */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {valueProp.headline}
              </h3>
              <p className="text-neutral-400 text-base mb-6">
                {valueProp.subheadline}
              </p>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {valueProp.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouul Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                  Bouul Features
                </h4>
                <ul className="space-y-2">
                  {valueProp.bouulFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="bg-neutral-900 rounded-xl p-4 mb-6">
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Ideal For
                </h4>
                <p className="text-neutral-300 text-sm">{valueProp.idealFor}</p>
              </div>

              {/* Revenue Potential */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-4 mb-6">
                <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  Revenue Potential
                </h4>
                <p className="text-white text-sm font-medium">{valueProp.revenuePotential}</p>
              </div>

              {/* Success Tip */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  Pro Tip
                </h4>
                <p className="text-neutral-300 text-sm">{valueProp.successTip}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Services in Category */}
          <motion.div
            key={selectedCategory + "-services"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Services in {formatCategoryName(selectedCategory)}
              </h3>
              <p className="text-neutral-500 text-sm mb-6">
                {currentCategoryServices.length} service{currentCategoryServices.length !== 1 ? "s" : ""} available
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {currentCategoryServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedService?.id === service.id
                        ? "bg-emerald-500/10 border-emerald-500/30"
                        : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{service.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm truncate">
                          {service.name.en}
                        </h4>
                        <p className="text-neutral-500 text-xs mt-1 line-clamp-2">
                          {service.description.en}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-neutral-600">
                            R{service.base_price}
                          </span>
                          <span className="text-xs text-neutral-600">•</span>
                          <span className="text-xs text-neutral-600">
                            {service.duration_minutes} min
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {selectedService?.id === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-neutral-800 space-y-3">
                            {/* Service Behavior */}
                            {service.service_behavior && (
                              <div>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                                  Service Type
                                </span>
                                <p className="text-sm text-neutral-300 capitalize">
                                  {service.service_behavior.replace(/([A-Z])/g, " $1")}
                                </p>
                              </div>
                            )}

                            {/* Delivery Method */}
                            {service.delivery_method && (
                              <div>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                                  Delivery
                                </span>
                                <p className="text-sm text-neutral-300 capitalize">
                                  {service.delivery_method.replace(/([A-Z])/g, " $1")}
                                </p>
                              </div>
                            )}

                            {/* Certifications */}
                            {service.required_certifications?.length > 0 && (
                              <div>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                                  Certifications
                                </span>
                                <ul className="mt-1 space-y-1">
                                  {service.required_certifications.slice(0, 3).map((cert, i) => (
                                    <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                                      <span className="text-emerald-500 mt-0.5">•</span>
                                      {cert}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Upsell Opportunities */}
                            {service.upsell_opportunities?.length > 0 && (
                              <div>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                                  Popular Add-ons
                                </span>
                                <ul className="mt-1 space-y-1">
                                  {service.upsell_opportunities.slice(0, 3).map((upsell, i) => (
                                    <li key={i} className="text-xs text-neutral-400 flex items-center justify-between">
                                      <span>{upsell.name}</span>
                                      <span className="text-emerald-400 font-medium">
                                        +R{upsell.additionalCost}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to grow your business?
            </h3>
            <p className="text-neutral-400 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of service professionals already using Bouul to book more clients and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #525252;
        }
      `}</style>
    </section>
  );
};
