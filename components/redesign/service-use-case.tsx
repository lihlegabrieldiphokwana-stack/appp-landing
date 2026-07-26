"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  Droplets,
  Zap,
  ShieldCheck,
  Star,
  MessageCircle,
  Search,
  CalendarCheck,
  Smartphone,
  ArrowRight,
  Sparkles,
  Home,
  Paintbrush,
  Wrench,
  Flower2,
  Bug,
  Key,
  Car,
  Truck,
  Scissors,
  BookOpen,
  GraduationCap,
  Heart,
  Palette,
  Camera,
} from "lucide-react";

interface ServicePageConfig {
  /** URL slug */
  slug: string;
  /** Display name */
  name: string;
  /** Scene image path */
  scene: string;
  /** Short descriptor for the service */
  tagline: string;
  /** A relatable scenario hook */
  hook: {
    headline: string;
    body: string;
  };
  /** How Bouul helps — 3 pain-point-solution pairs */
  howItHelps: Array<{
    pain: string;
    solution: string;
  }>;
  /** Typical services under this category */
  typicalServices: string[];
  /** Who needs this */
  goodFor: string[];
  /** Why Bouul over alternatives */
  whyBouul: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    body: string;
  }>;
  /** Trust signals specific to this category */
  trustPoints: string[];
  /** CTA text */
  cta: string;
  /** FAQ */
  faqs: Array<{ q: string; a: string }>;
}

/** Default config — override per service in the map below. */
const DEFAULT_CONFIG: ServicePageConfig = {
  slug: "",
  name: "Professional",
  scene: "/scenes/interior_design.png",
  tagline: "Find trusted help near you",
  hook: {
    headline: "When you need it done, you need it done right.",
    body: "The moment something breaks, you want someone reliable — fast. Bouul connects you with verified pros who show up, do the work, and get paid only when you're happy.",
  },
  howItHelps: [
    { pain: "You don't know who to call", solution: "Search for the service you need. Bouul shows you verified pros near you with real ratings and upfront pricing — no guessing." },
    { pain: "You worry about being overcharged", solution: "See the price before you book. Payment is held in escrow and only released when the job is done right." },
    { pain: "You're tired of chasing people", solution: "Book in seconds, chat with your pro in the app, and get reminders when they're on the way. Everything in one place." },
  ],
  typicalServices: ["General service"],
  goodFor: ["Homeowners", "Renters", "Property managers"],
  whyBouul: [],
  trustPoints: ["ID-verified professionals"],
  faqs: [],
  cta: "Download Bouul",
};

/* ────────────────────────────────────────────
   SERVICE-SPECIFIC CONFIG
   ──────────────────────────────────────────── */

const SERVICE_CONFIGS: Record<string, ServicePageConfig> = {
  "beauty-hair": {
    slug: "beauty-hair",
    name: "Beauty & Hair",
    scene: "/scenes/hair_styling.png",
    tagline: "Top stylists and beauty technicians booked on your terms, impervious to loadshedding.",
    hook: {
      headline: "Flawless aesthetics, delivered to your door.",
      body: "You have a major event, but the prospect of navigating traffic to sit in a crowded salon \u2014 wondering if the power will hold \u2014 ruins the luxury. Bouul transforms beauty into an elite, mobile service. Connect with highly-rated stylists and nail technicians who bring fully equipped, battery-powered setups directly to your home. Review their digital portfolios, book instantly, and experience aesthetic perfection in your own space.",
    },
    howItHelps: [
      { pain: "Salons cancelling or disrupting appointments due to sudden power outages.", solution: "Bouul professionals are equipped with cordless tools and rechargeable UV systems, ensuring uninterrupted service." },
      { pain: "The inability to verify a stylist's actual capabilities before committing.", solution: "Browse rich, visual portfolios and read authentic reviews from previous clients directly within the app." },
      { pain: "Wasting valuable weekend hours in transit and salon waiting areas.", solution: "Mobile professionals travel to your residence, office, or hotel, maximising your time." },
    ],
    typicalServices: [
      "Professional hair styling and blowouts",
      "Braiding and ethnic hair care",
      "Gel and acrylic nail applications",
      "Bridal and event makeup artistry",
      "Eyelash extension installation",
      "Mobile barbering and grooming",
      "Skincare and facial treatments",
    ],
    goodFor: [
      "Bridal parties requiring on-site preparation",
      "Corporate executives needing in-office grooming",
      "Mothers unable to leave home for lengthy treatments",
      "Individuals seeking premium, private aesthetic services",
    ],
    whyBouul: [
      { icon: Scissors, title: "Visual verification", body: "Don't guess. Assess a professional's capabilities through integrated photo portfolios and real client reviews." },
      { icon: Star, title: "Loadshedding resilient", body: "Access professionals armed with rechargeable technology, guaranteeing your treatment is completed flawlessly." },
      { icon: Sparkles, title: "Seamless scheduling", body: "Synchronise availability instantly. No phone tag with receptionists, just confirmed digital bookings." },
    ],
    trustPoints: [
      "Verified photographic portfolios of prior work",
      "Transparent peer reviews from completed bookings",
      "Identity verified professionals for safe home entry",
      "In-app consultation via photo sharing",
    ],
    cta: "Book your beauty professional",
    faqs: [
      { q: "What happens if there is load shedding during my appointment?", a: "Bouul encourages professionals to use battery-operated equipment. You can confirm their loadshedding readiness via the in-app chat before booking." },
      { q: "Can I request a specific style or share inspiration photos?", a: "Absolutely. The integrated chat allows you to send reference images to the stylist beforehand." },
      { q: "Is travel cost included in the price?", a: "Pricing is fully transparent. Any applicable travel surcharges based on your location are calculated before you confirm." },
    ],
  },
  "carpenters": {
    slug: "carpenters",
    name: "Carpenters",
    scene: "/scenes/carpentry.png",
    tagline: "Verified carpenters and joiners for repairs, installations, and bespoke creations.",
    hook: {
      headline: "Custom craftsmanship you can actually trust.",
      body: "Whether it is a broken cabinet hinge driving you crazy or a vision for a custom built-in wardrobe, finding a skilled carpenter who will actually show up is a pervasive challenge. Too often, deposits disappear with informal contractors. Bouul connects you directly with ID-verified carpentry specialists. Share your designs via chat, review their past projects, and secure your materials budget safely in escrow.",
    },
    howItHelps: [
      { pain: "Paying large deposits for custom wood and never seeing the contractor again.", solution: "Bouul's digital escrow system secures your capital, releasing it only as measurable progress is made." },
      { pain: "Sloppy joinery and misaligned cabinets from underqualified handymen.", solution: "Filter specifically for verified carpenters and assess their precision through high-resolution portfolio images." },
      { pain: "Waiting weeks for a quote after an initial site visit.", solution: "Upload dimensions and inspiration photos directly into the app for rapid, accurate digital quoting." },
    ],
    typicalServices: [
      "Custom built-in cupboards (BICs)",
      "Kitchen cabinet repairs and installations",
      "Door hanging and alignment",
      "Skirting board installation",
      "Decking repairs and construction",
      "Custom shelving units",
      "Furniture assembly",
    ],
    goodFor: [
      "Homeowners renovating kitchens or bedrooms",
      "Property managers requiring rapid door or cabinet repairs",
      "Offices needing custom boardroom furniture",
      "Individuals seeking bespoke timber creations",
    ],
    whyBouul: [
      { icon: Wrench, title: "Artisan portfolios", body: "Don't rely on promises. View authenticated images of previous installations to verify their craftsmanship." },
      { icon: ShieldCheck, title: "Secure material funding", body: "Custom woodwork requires expensive materials. Escrow protects your investment until the final installation." },
      { icon: MessageCircle, title: "Clear communication", body: "Use the integrated chat to share Pinterest boards, exact dimensions, and layout changes instantly." },
    ],
    trustPoints: [
      "Milestone-based escrow payments for large installations",
      "Strict identity verification for in-home work",
      "Reviews focusing on precision and tidiness",
      "In-app design sharing",
    ],
    cta: "Book a verified carpenter",
    faqs: [
      { q: "Can I hire a carpenter just for small repairs, like a broken hinge?", a: "Yes. Bouul allows you to post jobs of any size, from minor repairs to full kitchen installations, matching you with appropriate professionals." },
      { q: "How do I ensure the wood finish matches my existing furniture?", a: "Utilise the chat feature to send well-lit photos of your current finishes, allowing the carpenter to source exact matches before arriving." },
      { q: "What happens if the custom build doesn't fit my space?", a: "Because payments are held in escrow, the carpenter is financially obligated to make the necessary adjustments to fulfil the agreed-upon brief before funds are released." },
    ],
  },
  "childcare": {
    slug: "childcare",
    name: "Childcare",
    scene: "/scenes/childcare_service.png",
    tagline: "Connect with thoroughly vetted, highly-rated nannies and au pairs for your ultimate peace of mind.",
    hook: {
      headline: "Uncompromising care, rigorously verified.",
      body: "Finding someone to trust with your children is the most daunting task a parent faces. Relying on neighbourhood whispers or unverified classifieds is simply not an option. Bouul elevates the standard of childcare discovery. Every caregiver undergoes comprehensive background checks. Browse rich profiles, read reviews from other parents, and use secure messaging to establish rapport before they ever step into your home.",
    },
    howItHelps: [
      { pain: "The paralyzing anxiety of leaving your child with an unvetted stranger.", solution: "Bouul enforces strict, mandatory identity and background verification for every listed caregiver." },
      { pain: "Misalignment on parenting styles or emergency protocols.", solution: "Use the in-app chat to conduct preliminary interviews and align on crucial caregiving methodologies." },
      { pain: "The awkwardness of managing cash payments and negotiating overtime.", solution: "All rates are transparent, and payments are handled securely through the app's digital facility." },
    ],
    typicalServices: [
      "Ad-hoc evening babysitting",
      "After-school au pair services",
      "Infant and toddler care",
      "Emergency short-notice childcare",
      "Weekend caregiving",
      "School holiday care",
    ],
    goodFor: [
      "Working parents requiring structured afternoon support",
      "Couples needing reliable weekend babysitting",
      "Families seeking caregivers with specific infant experience",
    ],
    whyBouul: [
      { icon: Heart, title: "Unrivaled security vetting", body: "Identity checks and historical reviews from real families form the foundation of our platform." },
      { icon: ShieldCheck, title: "Direct relationship building", body: "Communicate directly to establish expectations, routines, and emergency protocols before booking." },
      { icon: Star, title: "Cashless security", body: "Digital payments mean you never have to worry about having cash on hand or financial disputes." },
    ],
    trustPoints: [
      "Mandatory national identity verification",
      "Authentic reviews strictly from completed family bookings",
      "In-app interview and rapport-building",
      "Secure digital payments",
    ],
    cta: "Connect with verified caregivers",
    faqs: [
      { q: "How thorough is the vetting process?", a: "Every caregiver must pass a strict identity verification process. Their profile displays an un-editable history of reviews from other parents on the platform." },
      { q: "Can I interview the caregiver first?", a: "Yes. We encourage using the in-app chat to ask detailed questions, discuss your child's specific needs, and arrange a brief introductory call." },
      { q: "What happens if we need to cancel last minute?", a: "Cancellation policies are set by each caregiver and displayed before booking. You can choose professionals whose policies match your needs." },
    ],
  },
  "cleaners": {
    slug: "cleaners",
    name: "Cleaners",
    scene: "/scenes/house_cleaning.png",
    tagline: "Vetted, reliable cleaning professionals you can actually communicate with.",
    hook: {
      headline: "Reclaim your weekend without the security anxiety.",
      body: "The house requires a deep clean, but the prospect of navigating platforms that send a different, unverified stranger every week is exhausting. You require consistency, rigorous security vetting, and direct communication. Bouul empowers you to select and re-book specific cleaning professionals. Every individual is ID-verified, and live tracking ensures you know exactly who is arriving at your gate.",
    },
    howItHelps: [
      { pain: "Platforms that randomise who comes to your home, preventing you from building trust.", solution: "Bouul allows you to browse profiles, read individual reviews, and re-book your preferred professional." },
      { pain: "Service providers cancelling at the last minute with no backup available.", solution: "View real-time availability and rely on transparent reliability ratings before making a booking." },
      { pain: "Security concerns regarding granting access to unknown individuals.", solution: "Mandatory ID verification and geolocation tracking provide complete peace of mind at your estate gate." },
    ],
    typicalServices: [
      "Standard residential cleaning",
      "Deep spring cleaning",
      "Move-in/Move-out sanitisation",
      "Post-construction clearing",
      "Window cleaning",
      "Upholstery cleaning",
      "Carpet cleaning",
    ],
    goodFor: [
      "Busy professionals lacking domestic time",
      "Families requiring reliable weekly maintenance",
      "Tenants needing exit-inspection deep cleans",
      "Estate residents requiring vetted personnel",
    ],
    whyBouul: [
      { icon: ShieldCheck, title: "Complete security vetting", body: "Every cleaning professional undergoes rigorous identity verification before being listed on the platform." },
      { icon: MessageCircle, title: "Direct communication", body: "Use the in-app chat to clarify specific requirements, ensuring your expectations are met flawlessly." },
      { icon: Sparkles, title: "Build a recurring relationship", body: "Found someone brilliant? Easily re-book them directly, maintaining consistency in your home." },
    ],
    trustPoints: [
      "Strict identity and background checks",
      "Transparent cancellation and reliability statistics",
      "Direct messaging avoiding third-party miscommunication",
      "Secure cashless transactions",
    ],
    cta: "Book a trusted cleaner",
    faqs: [
      { q: "Will I get the same person every time?", a: "Unlike other platforms, Bouul allows you to request and re-book the specific professional you prefer, subject to their schedule." },
      { q: "How is access control managed for secure estates?", a: "You are provided with the professional's verified ID details and live tracking, streamlining the security clearance process at your gate." },
      { q: "Do they bring their own cleaning supplies?", a: "You can specify this when booking. Many professionals arrive fully equipped, while others offer labour-only rates if you provide the products." },
    ],
  },
  "creative": {
    slug: "creative",
    name: "Creative Services",
    scene: "/scenes/graphic_design.png",
    tagline: "Verified creative professionals, with payments protected until the final draft.",
    hook: {
      headline: "Bring your vision to life, securely.",
      body: "Hiring freelance creatives often involves paying a hefty deposit and praying the final product matches your vision \u2014 or that the freelancer doesn't vanish entirely. Bouul introduces absolute security to the creative process. Browse rich portfolios, communicate directly, and place your project funds in escrow. Payment is only released when the high-resolution files or final designs are delivered to your exact specifications.",
    },
    howItHelps: [
      { pain: "Paying a 50% deposit to a freelancer who stops communicating.", solution: "Bouul's escrow system holds the capital securely; the professional is only paid upon successful delivery." },
      { pain: "Receiving substandard work that doesn't match the initial portfolio.", solution: "Platform reviews are linked directly to completed projects, ensuring portfolios represent actual capabilities." },
      { pain: "Messy communication scattered across emails and WhatsApp.", solution: "Centralise all briefs, feedback, and file sharing within the secure in-app chat." },
    ],
    typicalServices: [
      "Event and commercial photography",
      "Graphic design and branding",
      "Website development and UI design",
      "Videography and video editing",
      "Content writing and copywriting",
      "Social media management",
      "Interior design consultation",
    ],
    goodFor: [
      "Small businesses needing professional branding",
      "Individuals requiring event or wedding photography",
      "Startups seeking reliable web development",
      "Companies needing ongoing content creation",
    ],
    whyBouul: [
      { icon: Camera, title: "Escrow protected projects", body: "Your budget is safe. Release funds only when the creative output meets the agreed-upon brief." },
      { icon: Palette, title: "Verified portfolios", body: "Assess capabilities through authenticated past work and reviews from actual platform clients." },
      { icon: ShieldCheck, title: "Streamlined collaboration", body: "Manage the entire creative process \u2014 from brief to final delivery \u2014 in one central application." },
    ],
    trustPoints: [
      "Digital escrow facility protecting all project capital",
      "Authentic reviews validating reliability and skill",
      "In-app file sharing and brief management",
      "Transparent milestone payments",
    ],
    cta: "Hire a verified creative",
    faqs: [
      { q: "What happens if I am not satisfied with the final design?", a: "Because funds are in escrow, you have leverage. You can request revisions as per your initial agreement before authorising the final payout." },
      { q: "Can large files be shared through the platform?", a: "Yes, the in-app communication tools are designed to facilitate the sharing of briefs, drafts, and visual assets." },
      { q: "How do revisions work?", a: "Revision policies are agreed upon upfront and reflected in the escrow milestone schedule. Clear terms protect both parties." },
    ],
  },
  "electricians": {
    slug: "electricians",
    name: "Electricians",
    scene: "/scenes/electrical_service.png",
    tagline: "From inverter setups to fault-finding \u2014 verified electrical experts, securely booked.",
    hook: {
      headline: "Don't leave your home's safety in the dark.",
      body: "The main breaker keeps tripping, and the prospect of navigating a power outage without a functioning backup system is daunting. Finding an electrician who understands complex modern load-shedding setups is risky when relying on random web searches. Bouul connects you with strictly vetted electrical contractors. Track their arrival, approve the scope of work, and pay safely through digital escrow once the power is restored.",
    },
    howItHelps: [
      { pain: "Hiring an unverified contractor who damages expensive inverters or batteries.", solution: "Bouul profiles highlight specific expertise, backed by reviews from localised, verified installations." },
      { pain: "Paying large upfront cash deposits and the contractor disappearing.", solution: "Bouul's escrow system secures your funds digitally; payment is only released upon successful project completion." },
      { pain: "Waiting days for a Certificate of Compliance (COC) for a property sale.", solution: "Filter specifically for certified professionals authorised to issue immediate compliance documentation." },
    ],
    typicalServices: [
      "Inverter and battery installation",
      "Electrical fault finding",
      "Single/Three-phase COC issuance",
      "Distribution board (DB) rewiring",
      "Generator integration",
      "Lighting installation",
      "Security system wiring",
    ],
    goodFor: [
      "Homeowners upgrading backup power systems",
      "Sellers requiring a rapid COC",
      "Tenants experiencing dangerous electrical faults",
    ],
    whyBouul: [
      { icon: ShieldCheck, title: "Certified safety standards", body: "Access professionals qualified to handle high-voltage systems, issuing legitimate compliance certificates." },
      { icon: Zap, title: "Capital protection", body: "Never risk a cash deposit again. Your money is protected in escrow until the installation is fully functional." },
      { icon: MessageCircle, title: "Prepared for load shedding", body: "Connect with experts highly experienced in integrating solar, inverters, and lithium battery backup systems." },
    ],
    trustPoints: [
      "Comprehensive identity and background verification",
      "Escrow facility mitigating all financial risk",
      "Transparent pricing on every job",
      "Publicly visible portfolio of completed local projects",
    ],
    cta: "Find a certified electrician",
    faqs: [
      { q: "Can I book someone specifically for a solar or inverter fault?", a: "Yes. The platform allows you to specify the exact nature of your backup power issue, matching you with specialists in that distinct field." },
      { q: "Is my payment safe for large-scale installations?", a: "Absolutely. Bouul's escrow system is designed specifically to protect capital on high-value jobs until the agreed-upon milestones are met." },
      { q: "What if the work needs municipal approval?", a: "Most residential electrical work doesn't need prior approval, but your electrician will advise on what requires a COC or inspection after the job." },
    ],
  },
  "gardeners": {
    slug: "gardeners",
    name: "Gardeners",
    scene: "/scenes/garden_maintenance.png",
    tagline: "Vetted gardeners and landscaping professionals, managed entirely from your phone.",
    hook: {
      headline: "Maintain your sanctuary effortlessly.",
      body: "Maintaining a pristine garden shouldn't require managing unreliable informal labour or worrying about estate security access. You need consistency, professionalism, and easy payment structures. Bouul connects you with ID-verified gardening professionals. Schedule recurring maintenance, communicate specific landscaping needs via chat, and handle all payments digitally without ever needing cash on hand.",
    },
    howItHelps: [
      { pain: "The weekly hassle of drawing cash to pay informal garden services.", solution: "Bouul handles all transactions digitally, automating payments upon successful completion of the job." },
      { pain: "Security anxiety regarding who is actually entering your property.", solution: "Every gardening professional is strictly ID-verified, smoothing the process with estate security." },
      { pain: "Inconsistent scheduling where the gardener simply doesn't show up.", solution: "Live tracking and transparent reliability ratings ensure you hire professionals who respect your time." },
    ],
    typicalServices: [
      "Regular lawn mowing and edging",
      "Weeding and bed maintenance",
      "Pruning and hedge trimming",
      "Seasonal planting and composting",
      "Garden refuse removal",
      "Irrigation system checks",
      "Mulching and fertilising",
    ],
    goodFor: [
      "Busy homeowners needing consistent weekly maintenance",
      "Estate residents requiring highly vetted personnel",
      "Property investors maintaining empty plots",
      "Individuals seeking seasonal garden cleanups",
    ],
    whyBouul: [
      { icon: Flower2, title: "Cashless convenience", body: "Never scramble for cash again. Approve the completed work and release digital payments instantly." },
      { icon: ShieldCheck, title: "Verified reliability", body: "Access professionals with proven attendance records, backed by reviews from other local homeowners." },
      { icon: MessageCircle, title: "Seamless security access", body: "Provide your estate security with verified digital ID profiles, preventing gate delays." },
    ],
    trustPoints: [
      "Mandatory national identity verification",
      "Digital payment gateways eliminating cash risks",
      "Transparent reviews on punctuality and work ethic",
      "In-app scheduling for recurring services",
    ],
    cta: "Find a trusted gardener",
    faqs: [
      { q: "Can I book the same gardener every week?", a: "Yes, Bouul allows you to establish recurring bookings with the professional you prefer, ensuring consistency." },
      { q: "Do they bring their own equipment?", a: "You can specify this when booking. Many professionals arrive fully equipped, while others offer labour-only rates if you provide the tools." },
      { q: "Does the service include the removal of garden refuse?", a: "You can request refuse removal as part of the quote. The professional will confirm their capacity to transport waste before accepting the job." },
    ],
  },
  "locksmiths": {
    slug: "locksmiths",
    name: "Locksmiths",
    scene: "/scenes/interior_design.png",
    tagline: "ID-verified, emergency locksmiths dispatched instantly to your location.",
    hook: {
      headline: "Locked out? Don't panic. Track your rescue.",
      body: "It is late at night, and your keys are locked inside. The vulnerability of standing outside your property in Johannesburg is intense. Searching Google for a random locksmith who might overcharge you or compromise your security is a massive risk. Bouul provides immediate relief. Book a strictly vetted locksmith, watch their vehicle approach on the live map, and pay a transparent, upfront rate.",
    },
    howItHelps: [
      { pain: "The extreme physical vulnerability of waiting outside a locked property or vehicle.", solution: "Live GPS tracking provides the exact ETA of your verified professional, drastically reducing anxiety." },
      { pain: "Rogue locksmiths who exploit your emergency by demanding exorbitant cash fees.", solution: "Pricing is fixed and transparent within the app. Payment is handled digitally via escrow." },
      { pain: "The security risk of an unverified stranger understanding your home's locking mechanisms.", solution: "Every locksmith undergoes rigorous criminal background checks and identity verification." },
    ],
    typicalServices: [
      "Emergency home lockouts",
      "Vehicle unlocking services",
      "Lock cylinder replacement",
      "Security gate lock repairs",
      "Safe opening services",
      "Smart lock installation",
      "Master key systems",
    ],
    goodFor: [
      "Individuals locked out of their homes or vehicles after hours",
      "New homeowners needing immediate lock changes",
      "Landlords securing properties post-eviction",
      "Businesses requiring complex access control repairs",
    ],
    whyBouul: [
      { icon: Key, title: "Live rescue tracking", body: "Watch your verified locksmith navigate to your location in real-time, eliminating the anxious waiting game." },
      { icon: ShieldCheck, title: "Strict security vetting", body: "Only professionals who pass comprehensive identity and background checks are permitted on the platform." },
      { icon: Car, title: "Anti-extortion pricing", body: "Agree to a transparent digital quote before they arrive, preventing any on-site cash shakedowns." },
    ],
    trustPoints: [
      "Mandatory criminal background checks and ID verification",
      "Live geolocation tracking for emergency arrivals",
      "Cashless digital payments",
      "Authentic reviews from verified emergency call-outs",
    ],
    cta: "Dispatch an emergency locksmith",
    faqs: [
      { q: "How quickly can a locksmith reach me at night?", a: "Bouul prioritises professionals who are active and nearby. You can often secure a response within minutes, and track their arrival live." },
      { q: "How do I know the locksmith is legitimate?", a: "The app displays the professional's verified ID, photo, and vehicle details, allowing you to confirm their identity before they approach your property." },
      { q: "Will they have to break my lock?", a: "Verified professionals prioritise non-destructive entry methods. You can upload a photo of your specific lock via chat so they arrive prepared." },
    ],
  },
  "mobile-mechanic": {
    slug: "mobile-mechanic",
    name: "Mobile Mechanics",
    scene: "/scenes/mobile_mechanic.png",
    tagline: "Skip the workshop queues. Verified mobile mechanics delivering transparent diagnostics and repairs to your location.",
    hook: {
      headline: "Professional car care, right in your driveway.",
      body: "Your vehicle is making an ominous sound, but taking a day off work to sit in a sterile dealership waiting room is impossible. Furthermore, you dread the inevitable, inflated bill. Bouul changes the paradigm. Browse vetted mobile mechanics, receive transparent upfront pricing, and have the workshop brought directly to your office or home.",
    },
    howItHelps: [
      { pain: "Losing a full day of productivity dropping off and collecting your vehicle.", solution: "The mechanic comes directly to your specified geolocation, allowing you to continue your day uninterrupted." },
      { pain: "Opaque billing practices where the final invoice is double the verbal estimate.", solution: "All costs are quoted and approved digitally in advance, with funds held securely in escrow." },
      { pain: "Anxiety regarding the competency of an unverified independent operator.", solution: "Bouul professionals possess verifiable track records, backed by reviews from localised, completed repairs." },
    ],
    typicalServices: [
      "Comprehensive electronic diagnostics",
      "Scheduled servicing",
      "Brake pad and disc replacement",
      "Battery testing and installation",
      "Alternator and starter motor repair",
      "Pre-purchase vehicle inspections",
      "Timing belt replacement",
    ],
    goodFor: [
      "Corporate employees working long hours",
      "Families unable to manage without a vehicle for a day",
      "Individuals purchasing second-hand cars requiring inspection",
      "Drivers seeking dealership-quality work at independent prices",
    ],
    whyBouul: [
      { icon: Wrench, title: "Absolute convenience", body: "Repairs and servicing executed at your home or workplace, eliminating logistical headaches." },
      { icon: Car, title: "Digital cost control", body: "Diagnose the issue via chat and approve fixed-price quotes before a single spanner is turned." },
      { icon: ShieldCheck, title: "Verified automotive expertise", body: "Access specialists across vehicle brands, ensuring complex diagnostics are handled correctly." },
    ],
    trustPoints: [
      "Identity verified automotive technicians",
      "Escrow facility protecting against arbitrary overcharging",
      "Live geolocation tracking for precise arrival management",
      "In-app vehicle specification sharing",
    ],
    cta: "Book a mobile mechanic",
    faqs: [
      { q: "Can complex diagnostics be performed remotely?", a: "Yes, mobile mechanics arrive equipped with advanced OBD-II scanning tools capable of pinpointing complex electronic faults on-site." },
      { q: "How do I ensure the mechanic brings the correct parts?", a: "You can upload a photo of your licence disc in the secure chat. This allows the professional to source the exact components for your specific model." },
      { q: "Does using a mobile mechanic void my warranty?", a: "Under South African law, using an independent qualified mechanic for servicing does not automatically void manufacturer warranties, provided original specification parts are used." },
    ],
  },
  "painters": {
    slug: "painters",
    name: "Painters",
    scene: "/scenes/painting_service.png",
    tagline: "Professional painting contractors verified for quality, tidiness, and reliability.",
    hook: {
      headline: "Flawless finishes without the disruption.",
      body: "A fresh coat of paint transforms a space, but managing unreliable contractors who leave your home in disarray is a nightmare. You need a team that respects your property, covers your furniture, and delivers perfectly cut-in lines. Bouul connects you with vetted painting professionals. Review portfolios of their previous work, agree on a transparent price, and protect your budget with escrow until the final inspection is flawless.",
    },
    howItHelps: [
      { pain: "Contractors who fail to prepare surfaces properly, leading to peeling paint within months.", solution: "Bouul professionals are reviewed on long-term quality, ensuring they utilise proper priming and crack-filling techniques." },
      { pain: "Workers leaving a chaotic mess of splatters and debris in your living space.", solution: "Authentic peer reviews explicitly highlight contractors who maintain pristine, respectful work environments." },
      { pain: "Vague quotes that magically escalate halfway through the job.", solution: "In-app quoting and escrow payments guarantee you only pay the agreed-upon price." },
    ],
    typicalServices: [
      "Interior residential painting",
      "Exterior wall coatings",
      "Ceiling crack repair and painting",
      "Boundary wall restoration",
      "Roof painting and sealing",
      "Varnishing and wood treatment",
      "Waterproof coating application",
    ],
    goodFor: [
      "Homeowners modernising their living spaces",
      "Sellers preparing properties for the market",
      "Tenants needing to restore walls before moving out",
      "Estate managers maintaining complex aesthetics",
    ],
    whyBouul: [
      { icon: Paintbrush, title: "Visual verification", body: "Browse actual photos of completed jobs to ensure the contractor's standard meets your expectations." },
      { icon: ShieldCheck, title: "Respect for your property", body: "ID-verified teams are held accountable by permanent reviews focusing on tidiness and professionalism." },
      { icon: Star, title: "Protected payments", body: "Release funds from escrow only when the paint is dry and you are completely satisfied with the finish." },
    ],
    trustPoints: [
      "Verified portfolios of previous painting projects",
      "Escrow protection against material theft or abandonment",
      "Mandatory ID verification for all crew members on site",
      "Transparent pricing structures",
    ],
    cta: "Request a painting quote",
    faqs: [
      { q: "Do the painters supply the paint, or do I?", a: "You can negotiate this directly in the app. Contractors can quote for labour only, or provide a comprehensive quote including premium materials." },
      { q: "How is access managed for multi-day jobs?", a: "You maintain control. The app allows you to communicate daily schedules, and ID verification ensures estate security clearance is seamless." },
      { q: "What if they drip paint on my floors?", a: "Your funds remain in escrow until you approve the final cleanup. Professionals are highly incentivised to protect your property." },
    ],
  },
  "pest-control": {
    slug: "pest-control",
    name: "Pest Control",
    scene: "/scenes/pest_control.png",
    tagline: "Licensed pest control experts, available immediately for discreet, effective eradication.",
    hook: {
      headline: "Take your home back today.",
      body: "Discovering a pest infestation triggers immediate anxiety. You don't have time to wait for call-backs or wonder if the chemicals being sprayed in your kitchen are safe for your family and pets. Bouul connects you instantly with certified pest control specialists. Review their safety credentials, track their immediate arrival, and pay securely once your home is secured.",
    },
    howItHelps: [
      { pain: "Extreme urgency met with slow, unresponsive traditional agencies.", solution: "Bouul shows you verified specialists who are available to respond to your location immediately." },
      { pain: "Anxiety regarding the toxicity of chemicals used around children and pets.", solution: "Use the in-app chat to confirm eco-friendly or pet-safe methodologies before the technician arrives." },
      { pain: "Recurring infestations because the root cause wasn't treated.", solution: "Platform reviews enforce accountability; highly-rated pros are proven to deliver long-term eradication." },
    ],
    typicalServices: [
      "Termite inspection and eradication",
      "Rodent control and exclusion",
      "Cockroach fumigation",
      "Ant and spider treatments",
      "Bed bug thermal eradication",
      "Bird proofing and nesting removal",
      "Flea and tick yard treatment",
    ],
    goodFor: [
      "Homeowners discovering sudden infestations",
      "Restaurant managers requiring urgent, discreet services",
      "Landlords preparing properties for new tenants",
      "Families needing pet-safe pest solutions",
    ],
    whyBouul: [
      { icon: Bug, title: "Rapid eradication", body: "Pests don't wait. Access professionals who can be dispatched to your property within hours, not days." },
      { icon: ShieldCheck, title: "Verified safety protocols", body: "Connect with licensed operators trained in safe chemical application and eco-friendly alternatives." },
      { icon: Sparkles, title: "Accountability through reviews", body: "Don't pay for temporary fixes. Authentic reviews highlight specialists who solve the problem permanently." },
    ],
    trustPoints: [
      "Verification of pest control licenses and certifications",
      "Digital escrow protecting payment until eradication is confirmed",
      "Live geolocation tracking for precise arrival times",
      "Direct communication regarding chemical safety",
    ],
    cta: "Book a pest control expert",
    faqs: [
      { q: "Are the treatments safe for my dogs and cats?", a: "Many specialists offer pet-safe solutions. You can filter for these professionals and discuss the specific chemicals via chat before booking." },
      { q: "Do I need to leave my house during the treatment?", a: "This depends on the specific pest and treatment method. Your verified professional will advise you on safety protocols via the app before they arrive." },
      { q: "What if the pests return after a week?", a: "You can negotiate warranty periods within the app. Furthermore, your payment remains in escrow for a designated period to ensure the treatment was effective." },
    ],
  },
  "plumbers": {
    slug: "plumbers",
    name: "Plumbers",
    scene: "/scenes/plumbing.png",
    tagline: "Leaks, blockages, and geyser bursts \u2014 fixed by verified pros, booked in seconds.",
    hook: {
      headline: "A burst pipe doesn't respect your schedule.",
      body: "It is 7 PM on a Thursday, and water is rapidly pooling beneath your kitchen sink. You need intervention immediately, not a string of unreturned WhatsApp messages or vague promises of 'tomorrow morning.' Bouul instantly connects you with ID-verified plumbers in your area who are available right now. Review real ratings, book with two taps, and secure your payment in escrow until the leak is permanently resolved.",
    },
    howItHelps: [
      { pain: "You broadcast a message on a neighbourhood group and wait hours for a response.", solution: "Bouul displays available, vetted plumbers within your radius instantly, eliminating response anxiety." },
      { pain: "Contractors issue arbitrary quotes over the phone without assessing the damage.", solution: "Prices are structured upfront. Funds are held securely in escrow, ensuring no surprise billing at the end of the job." },
      { pain: "You wait home all day for a tradesperson who never arrives.", solution: "Live tracking and instant in-app messaging keep you updated on the exact arrival time." },
    ],
    typicalServices: [
      "Burst pipe repair",
      "Blocked drain clearing",
      "Geyser installation & repair",
      "Leaking tap repair",
      "Toilet installation",
      "Water pressure optimisation",
      "Leak detection",
    ],
    goodFor: [
      "Estate homeowners facing emergency leaks",
      "Sectional title renters needing swift resolution",
      "Property managers maintaining multiple units",
      "Offices requiring immediate facility repairs",
    ],
    whyBouul: [
      { icon: Zap, title: "Immediate emergency response", body: "Visibility into who is active and available right now, bypassing the traditional phone-tag delays." },
      { icon: ShieldCheck, title: "Escrow payment protection", body: "Funds are secured digitally and only released to the provider when you confirm the issue is successfully resolved." },
      { icon: MessageCircle, title: "Visual diagnostics via chat", body: "Share images of the leak directly in the app, allowing the plumber to arrive with the correct replacement parts." },
    ],
    trustPoints: [
      "ID-verified tradespeople with transparent job histories",
      "Authentic reviews strictly from completed platform bookings",
      "Secure digital escrow payments to prevent cash disputes",
      "Live geolocation tracking for accurate arrival times",
    ],
    cta: "Dispatch a verified plumber now",
    faqs: [
      { q: "How rapidly can a plumber be dispatched?", a: "The platform displays real-time availability. Depending on traffic and location within Gauteng, professionals can frequently arrive within the hour." },
      { q: "What happens if the underlying issue is not fixed?", a: "Your payment remains in a secure escrow facility until the job is signed off. If unresolved, funds are not released, and mediation is provided." },
      { q: "Are the listed plumbers certified?", a: "Providers undergo rigorous ID verification, and many possess formal trade certifications, visible alongside their historical booking ratings." },
      { q: "How do I pay if the scope of work changes?", a: "Adjustments are quoted and approved transparently within the app before further work commences, ensuring zero financial surprises." },
    ],
  },
  "roofers": {
    slug: "roofers",
    name: "Roofers",
    scene: "/scenes/carpentry.png",
    tagline: "Specialist roofing contractors held accountable by digital escrow and real reviews.",
    hook: {
      headline: "Stop paying for the same leak twice.",
      body: "Summer storms in Gauteng reveal the harsh reality of poor roofing work. You previously paid a contractor who issued a '10-year warranty' but now ignores your calls as the ceiling stains spread. Bouul eliminates this risk. Connect with established roofing specialists whose long-term platform ratings verify their workmanship. Secure your project capital in escrow, releasing funds only when the structural integrity is proven.",
    },
    howItHelps: [
      { pain: "Contractors demanding 50% upfront for materials and then delaying the project indefinitely.", solution: "Bouul's escrow facility protects your deposit. Funds remain secure and are distributed based on agreed milestones." },
      { pain: "Warranties that prove worthless when the contractor stops answering their phone.", solution: "Professionals on Bouul rely on their digital reputation; long-term, un-deletable reviews enforce permanent accountability." },
      { pain: "Inaccurate quotes based on a glance from the driveway.", solution: "Utilise in-app photo sharing to document internal ceiling damage, ensuring accurate, comprehensive assessments." },
    ],
    typicalServices: [
      "Complex leak detection and repair",
      "Comprehensive waterproofing",
      "Fascia and gutter replacement",
      "Roof tile replacement",
      "Corrugated iron restoration",
      "Truss repair",
      "Solar panel roof mounting",
    ],
    goodFor: [
      "Homeowners facing seasonal storm damage",
      "Property investors renovating older estates",
      "Commercial building managers",
      "Insurance claimants needing rapid repairs",
    ],
    whyBouul: [
      { icon: Home, title: "Accountability engineered in", body: "Unfiltered reviews from real, completed projects mean substandard contractors cannot survive on the platform." },
      { icon: ShieldCheck, title: "Capital protection on large jobs", body: "Roofing is expensive. Escrow ensures your funds are protected from abandonment or material theft." },
      { icon: Camera, title: "Verified structural expertise", body: "Access specialists in complex waterproofing, truss repair, and tile replacement, not generalist handymen." },
    ],
    trustPoints: [
      "High-value milestone escrow payments",
      "Photographic evidence sharing via secure chat",
      "Identity and operational verification",
      "Long-term review accountability",
    ],
    cta: "Find a verified roofing expert",
    faqs: [
      { q: "How does payment work for large roofing projects?", a: "Funds are held securely in Bouul's escrow system. You agree on milestones with the contractor, and money is released proportionally as work is completed." },
      { q: "Can I get an inspection before committing?", a: "Yes, you can book a diagnostic inspection. The professional will provide a transparent quote within the app for the full repair." },
      { q: "What if it rains before the job is finished?", a: "Your contractor will advise on weather contingencies. Your payment is tied to completed milestones, not calendar days." },
    ],
  },
  "towing-roadside": {
    slug: "towing-roadside",
    name: "Towing & Roadside",
    scene: "/scenes/roadside_assistance.png",
    tagline: "Rapid, highly secure breakdown recovery with fixed digital pricing.",
    hook: {
      headline: "Don't fall victim to roadside extortion.",
      body: "You are stranded on the shoulder of the N1 at dusk. Unmarked tow trucks arrive instantly, pressuring you to sign. If you do, your car will be held hostage at an unauthorised yard for a R12,000 release fee. Do not sign. Open Bouul. Book a verified, ID-checked recovery vehicle, track its arrival live, and pay a fixed rate through the app. Your safety and your asset are protected.",
    },
    howItHelps: [
      { pain: "Aggressive, unverified tow operators demanding you hand over your vehicle.", solution: "Bouul dispatches specific, vetted operators; you know the driver's name and vehicle registration before they arrive." },
      { pain: "Hidden storage costs and extortionate release fees from unauthorised yards.", solution: "Pricing is locked in upfront via the app, and payment is processed digitally. No cash, no ransom." },
      { pain: "Extreme physical vulnerability waiting on dangerous arterial roads.", solution: "Live GPS tracking gives you the exact ETA of your rescuer, significantly reducing roadside anxiety." },
    ],
    typicalServices: [
      "Emergency flatbed towing",
      "Accident recovery",
      "Jump start assistance",
      "Flat tyre changing",
      "Emergency fuel delivery",
      "Vehicle lockout resolution",
      "Battery boost",
    ],
    goodFor: [
      "Uninsured drivers requiring immediate, scam-free recovery",
      "Female drivers prioritising strict security protocols",
      "Commuters broken down on high-risk highways",
      "Families stranded during after-hours travel",
    ],
    whyBouul: [
      { icon: Truck, title: "Anti-extortion pricing", body: "Fixed rates authorised within the app prevent operators from holding your vehicle for ransom." },
      { icon: ShieldCheck, title: "Verified security", body: "Every operator is strictly vetted. You receive their ID and vehicle details to verify upon arrival." },
      { icon: Car, title: "Live rescue tracking", body: "Watch your recovery vehicle approach in real-time on the map, providing critical peace of mind." },
    ],
    trustPoints: [
      "Mandatory driver ID and vehicle registration verification",
      "No-cash, digital-only payments to eliminate roadside coercion",
      "Transparent point-to-point digital routing",
      "Real-time geolocation tracking",
    ],
    cta: "Request secure towing immediately",
    faqs: [
      { q: "What if an unverified tow truck tries to take my car?", a: "Decline their service. Inform them you have a digitally tracked Bouul operator en route." },
      { q: "How is the towing fee calculated?", a: "The fee is calculated based on distance and vehicle type within the app prior to confirmation, eliminating arbitrary release fees." },
      { q: "Are the operators equipped for highway recoveries?", a: "Yes, listed operators possess the necessary beacon lighting and flatbed equipment for safe extractions from major routes like the N1 and M1." },
    ],
  },
  "tutoring": {
    slug: "tutoring",
    name: "Tutoring",
    scene: "/scenes/tutoring_service.png",
    tagline: "Specialist CAPS and IEB tutors matched to your child's learning style.",
    hook: {
      headline: "Secure their university future without the stress.",
      body: "Matric pressure is mounting, and generalised extra lessons are no longer sufficient. Your child needs strategic intervention tailored to the rigorous demands of the IEB or CAPS curriculum. Bouul connects you with vetted academic specialists who focus on conceptual rebuilding and exam technique. Review academic credentials, arrange secure sessions, and track progress.",
    },
    howItHelps: [
      { pain: "Hiring a generalist tutor who doesn't understand the specific nuances of the IEB curriculum.", solution: "Filter educators specifically by their curriculum expertise and prior examiner experience." },
      { pain: "Lack of transparency regarding the tutor's actual academic credentials.", solution: "Bouul mandates strict vetting of academic qualifications and identity before listing." },
      { pain: "The logistical nightmare of driving children to tutoring centres during peak traffic.", solution: "Choose between secure, in-home sessions with ID-verified tutors or integrated online learning." },
    ],
    typicalServices: [
      "Matric IEB Mathematics preparation",
      "Physical Science conceptual rebuilding",
      "English Home Language essay structuring",
      "Accounting exam technique",
      "Primary school foundational literacy",
      "Cambridge curriculum support",
      "Exam technique coaching",
    ],
    goodFor: [
      "Parents of high school students facing critical NSC exams",
      "Learners transitioning between DBE and private education",
      "Students requiring specialised attention for learning barriers",
      "Homeschooling families seeking structured support",
    ],
    whyBouul: [
      { icon: BookOpen, title: "Curriculum-specific matching", body: "Use Zola AI to find tutors specifically trained in IEB, CAPS, or Cambridge methodologies." },
      { icon: GraduationCap, title: "Verified academic excellence", body: "Every tutor's educational background and identity are rigorously authenticated." },
      { icon: MessageCircle, title: "Structured progress tracking", body: "Communicate directly with the educator to establish goals and monitor milestone achievements." },
    ],
    trustPoints: [
      "Stringent identity and criminal background checks",
      "Verification of university degrees and teaching certificates",
      "Authentic reviews from other parents",
      "In-home or online session flexibility",
    ],
    cta: "Find a curriculum specialist",
    faqs: [
      { q: "Do you have tutors familiar with the IEB marking guidelines?", a: "Yes, many professionals on the platform specialise exclusively in the IEB curriculum." },
      { q: "Are the sessions conducted online or in person?", a: "Both options are available. You can filter for educators who travel to your suburb, or opt for digital sessions." },
      { q: "Can I change tutors if it's not a good fit?", a: "Yes. You can book a trial session and easily switch to a different specialist if the teaching style doesn't match." },
    ],
  },
};

function StepCard({ number, icon: Icon, title, body }: {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
    >
      <span className="font-price text-sm font-semibold text-b-ink-faint">{number}</span>
      <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
        <Icon className="h-6 w-6 text-b-ink" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{title}</h3>
      <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{body}</p>
    </motion.div>
  );
}

export default function ServiceUseCasePage(props: { params?: { service: string }; slug?: string }) {
  const slug = props.slug ?? props.params?.service ?? "";
  return <ServiceUseCaseInner slug={slug} />;
}

function ServiceUseCaseInner({ slug }: { slug: string }) {
  const config = SERVICE_CONFIGS[slug] ?? {
    ...DEFAULT_CONFIG,
    slug,
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
    scene: `/scenes/${slug}.png`,
  };

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Bouul for {config.name}
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                {config.hook.headline}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                {config.hook.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  {config.cta}
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50"
                >
                  See how it works
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]"
            >
              <img
                src={config.scene}
                alt={config.name}
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint"
          >
            {config.trustPoints.slice(0, 4).map((pt) => (
              <span key={pt} className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> {pt}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── The problem Bouul solves ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              THE OLD WAY
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Finding a {config.name.toLowerCase()} shouldn&apos;t be a project.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {config.howItHelps.map((item, i) => (
              <motion.div
                key={item.pain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-line bg-b-paper p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun-soft text-xs font-semibold text-b-sun">!</span>
                  <span className="text-sm font-semibold text-b-ink">The problem</span>
                </div>
                <p className="text-b-ink-soft b-body-sm leading-relaxed mb-5">{item.pain}</p>
                <div className="flex items-start gap-2.5 pt-4 border-t border-b-line">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                  <p className="b-body-sm leading-relaxed text-b-ink">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              HOW BOUUL WORKS
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From emergency to done, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <StepCard number="01" icon={Search} title="Find who's available"
              body={`Tell Bouul what you need — "burst pipe" or "blocked toilet" works. We show you verified ${config.name.toLowerCase()} near you, with real availability and upfront prices.`}
            />
            <StepCard number="02" icon={CalendarCheck} title="Book in seconds"
              body={`Pick your pro, choose a time that works, and confirm. No phone calls, no back-and-forth. Your booking is instant.`}
            />
            <StepCard number="03" icon={Smartphone} title="Track, chat, pay"
              body={`Watch your pro on the way, chat with them in the app, and release payment from escrow only when the job is done right.`}
            />
          </div>
        </div>
      </section>

      {/* ── Why Bouul ── */}
      <section className="border-t border-b-line bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold tracking-widest text-b-sun uppercase mb-4">
              WHY BOUUL
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">
              Better than a Google search and a prayer.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {config.whyBouul.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-b-cream">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-cream/70">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services covered ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              WHAT&apos;S COVERED
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Common {config.name.toLowerCase()} jobs on Bouul.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {config.typicalServices.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3 text-center"
              >
                <div className="text-b-ink text-sm font-medium">{service}</div>
              </div>
            ))}
          </div>
          {config.goodFor.length > 0 && (
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase text-center mb-4">
                Good for
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {config.goodFor.map((who) => (
                  <span key={who} className="rounded-full bg-b-green-soft px-4 py-2 text-sm font-medium text-b-green-deep">
                    {who}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      {config.faqs.length > 0 && (
        <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
                Common questions about booking {config.name.toLowerCase()}
              </h2>
            </motion.div>
            <div className="space-y-4">
              {config.faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
                >
                  <h3 className="text-b-ink font-semibold mb-2">{faq.q}</h3>
                  <p className="b-body-sm leading-relaxed text-b-ink-soft">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Ready to find a {config.name.toLowerCase()}?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              {config.goodFor.length > 0
                ? `Join thousands of ${config.goodFor[0].toLowerCase()} who use Bouul to book verified pros.`
                : "Join thousands of people who use Bouul to book verified pros."}
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              {config.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}

