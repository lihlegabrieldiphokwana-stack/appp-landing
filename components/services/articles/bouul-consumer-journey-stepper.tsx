"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Clock,
  UserCheck,
  Calendar,
  CheckCircle2,
  Lock,
  ShoppingBag,
  CreditCard,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Camera,
  Share2,
  ChevronRight,
  ArrowRight,
  Flame,
  ShieldCheck,
  Zap,
  Check,
  Heart,
  FileText,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

export const BOOKING_JOURNEY_STEPS = [
  {
    step: 1,
    title: "1. Landing & Discovery",
    subtitle: "Suburb selector, multi-lingual search & trending chips",
    badge: "Home Feed",
    icon: MapPin,
    details: {
      suburb: "Fourways, Sandton",
      placeholders: ["Find a plumber...", "Search for gate motor repair...", "Look for hairstylist near me..."],
      hashtags: ["#emergencyplumber", "#burstpipe", "#geyserrepair", "#solarinstallation"],
      quickGrid: ["Plumbers", "Electricians", "Cleaners", "Mechanics", "Photographers", "Caterers"],
      desc: "Top suburb pill allows switching to rental properties or family homes. Frosted glass search bar rotates multi-lingual prompts. Horizontal hashtag chips display real-time nearby searches.",
    },
  },
  {
    step: 2,
    title: "2. Predictive Search",
    subtitle: "Instant suggestion cards & matching vendors",
    badge: "Smart Autocomplete",
    icon: Search,
    details: {
      query: "geyser repair Fourways",
      suggestions: [
        { label: "Emergency Geyser Repair", category: "Plumbing: Hot Water", time: "30 min dispatch" },
        { label: "Fourways Plumbing Solutions", category: "Verified Vendor (4.9 ★)", distance: "1.2 km" },
        { label: "Solar Geyser Retrofit", category: "Eco Energy", discount: "15% OFF" },
      ],
      desc: "As you type, predictive card rows pop up instantly matching services, local vendors, and recent search history.",
    },
  },
  {
    step: 3,
    title: "3. Search Results (8 Tabs)",
    subtitle: "All, Services, Vendors, Reviews, Users, Glimpses, Posts, Bundles",
    badge: "8 Result Views",
    icon: SlidersHorizontal,
    details: {
      tabs: ["All", "Services", "Vendors", "Reviews", "Users", "Glimpses", "Posts", "Bundles"],
      activeTab: "All",
      cards: [
        {
          name: "Emergency Geyser Repair",
          vendor: "Fourways Plumbing Solutions",
          rating: "4.8 ★",
          price: "R850",
          distance: "1.2 km away",
          badge: "Sponsored Gold",
        },
        {
          name: "Burst Pipe Containment",
          vendor: "AquaFlow Pro",
          rating: "4.9 ★",
          price: "R650",
          distance: "2.4 km away",
          badge: "Top Rated",
        },
      ],
      desc: "Eight top tabs filter results by listings, verified vendor stores, video Glimpses of real repairs, and package deals.",
    },
  },
  {
    step: 4,
    title: "4. Service Detail & Professional Selection",
    subtitle: "Photos, dynamic pricing, Thabo (4.9★), 30-day calendar & instructions",
    badge: "Decision Screen",
    icon: UserCheck,
    details: {
      heroImage: "/scenes/plumbing.png",
      serviceName: "Emergency Geyser Repair & Element Replacement",
      businessName: "Fourways Plumbing Solutions (4.9 ★)",
      quickStats: { rating: "4.9 ★", likes: "1,420", duration: "1h 30m" },
      variants: [
        { name: "Standard Repair (same-day)", price: "R850" },
        { name: "Emergency Callout (2-hour response)", price: "R1,200", selected: true },
        { name: "After-Hours Callout", price: "R1,800" },
      ],
      pros: [
        { name: "Thabo M.", rating: "4.9 ★", exp: "8 yrs exp", status: "Available Tomorrow 10 AM", selected: true },
        { name: "John K.", rating: "4.3 ★", exp: "3 yrs exp", status: "Available Today 4 PM" },
      ],
      timeSlot: "Tomorrow at 10:00 AM – 11:00 AM",
      specialInstructions: "Backyard entrance, gate code #4321. Geyser is in ceiling manhole main passage.",
      desc: "Inspect high-res photos, tap Share for landlord approval, pick your specific plumber (Thabo), choose dynamic variant pricing, and select a 30-day calendar slot.",
    },
  },
  {
    step: 5,
    title: "5. Delivery Method & Risk Check",
    subtitle: "Travels to You vs Store Visit & behind-the-scenes booking gates",
    badge: "Risk Shield",
    icon: ShieldCheck,
    details: {
      deliveryMode: "The Plumber Travels to Your Location (Fourways)",
      address: "14 Cedar Road, Fourways, Sandton",
      riskGateResult: "Passed Verification Check ✅",
      overdueOrders: "0 Overdue Bookings",
      noShowScore: "0 Risk Points",
      desc: "Select service delivery mode. Behind-the-scenes booking gates verify active order limits to protect plumbers and homeowners from double-booking or no-shows.",
    },
  },
  {
    step: 6,
    title: "6. Your Basket & Zola AI Pre-Fill",
    subtitle: "Grouped items, Zola AI pre-filled banner & price breakdown",
    badge: "Basket Review",
    icon: ShoppingBag,
    details: {
      zolaBanner: "Booking preferences pre-filled by Zola AI Assistant",
      vendorName: "Fourways Plumbing Solutions",
      serviceName: "Emergency Geyser Repair",
      selectedPro: "Thabo M. (4.9 ★)",
      bookedTime: "Tomorrow at 10:00 AM – 11:00 AM",
      variantName: "Emergency Callout (2-hour response)",
      specialInstructions: "Backyard entrance, gate code #4321. Geyser in ceiling manhole.",
      basePrice: "R1,200.00",
      desc: "If booked via Zola AI, pre-filled choices are summarized in a purple banner. Review itemized base prices, callout options, and fees.",
    },
  },
  {
    step: 7,
    title: "7. Checkout & Digital Celebration",
    subtitle: "Card/Apple Pay selection, fee breakdown & confetti burst",
    badge: "Order #20260727-88342",
    icon: CreditCard,
    details: {
      paymentMethod: "Apple Pay / Saved Visa ending in 4821",
      subtotal: "R1,200.00",
      serviceFee: "R120.00 (10%)",
      vat: "R198.00 (15%)",
      totalPrice: "R1,518.00",
      celebrationText: "Confetti burst + Haptic feedback + Instant booking registration",
      desc: "Review 10% platform fee and 15% VAT transparency. Tap Pay to trigger confetti, haptic feedback, and live order creation.",
    },
  },
  {
    step: 8,
    title: "8. Live Order Tracking & Milestones",
    subtitle: "Vertical 5-stage progress bar & real-time ETA updates",
    badge: "Live ETA: 10:00 AM",
    icon: Clock,
    details: {
      orderNumber: "Order #20260727-88342",
      vendorName: "Fourways Plumbing Solutions",
      proName: "Thabo M.",
      stages: [
        { label: "Order Placed", timestamp: "Jul 28, 10:01 AM", status: "completed" },
        { label: "Vendor Confirmed", timestamp: "Jul 28, 10:03 AM", status: "completed" },
        { label: "Professional Dispatched", timestamp: "Jul 28, 10:15 AM", status: "completed" },
        { label: "On-Site / Job Started", timestamp: "En-Route (ETA 12 mins)", status: "active" },
        { label: "Job Completed & Inspected", timestamp: "Pending Sign-Off", status: "pending" },
      ],
      desc: "Follow the 5-milestone tracking bar live as Thabo departs, arrives on-site, completes repairs, and requests photo verification.",
    },
  },
  {
    step: 9,
    title: "9. In-App Chat & Zola AI Assistant",
    subtitle: "Direct messaging with pro + Zola AI memory & assistance",
    badge: "24/7 Support",
    icon: MessageCircle,
    details: {
      messages: [
        { sender: "User", text: "Gate code is #4321, I've shut off the main water valve." },
        { sender: "Thabo (Plumber)", text: "Thanks! I'm 5 minutes away with the 15mm replacement element." },
        { sender: "Zola AI", text: "Zola Memory updated: Main stopcock logged for Fourways property." },
      ],
      desc: "Seamless communication between client, plumber, and Zola AI to share access instructions, photos, or schedule tweaks.",
    },
  },
  {
    step: 10,
    title: "10. After-Job Review & Rating",
    subtitle: "3-way rating (Service, Business, Plumber), photos & sentiment check",
    badge: "Quality Check",
    icon: Star,
    details: {
      ratings: [
        { item: "Service: Emergency Geyser Repair", score: "5 ★ Excellent" },
        { item: "Business: Fourways Plumbing Solutions", score: "5 ★ Excellent" },
        { item: "Plumber: Thabo M.", score: "5 ★ Excellent" },
      ],
      reviewBody: "Thabo arrived right on time, diagnosed the issue in 10 mins, had the new geyser element installed in 2 hours. Cleaned up spotless!",
      anonymousStatus: "Public Verified Review",
      desc: "Rate the service, business, and individual plumber separately. Attach before/after repair photos and submit verified reviews.",
    },
  },
  {
    step: 11,
    title: "11. Order History & Rebook",
    subtitle: "Active & Past orders tab with 1-tap rebook",
    badge: "Account Memory",
    icon: Calendar,
    details: {
      pastOrderTitle: "Emergency Geyser Repair & Element Replacement",
      vendor: "Fourways Plumbing Solutions • Thabo M.",
      dateCompleted: "Completed Jul 28 • Total R1,518.00",
      rebookAvailable: true,
      desc: "All completed orders reside in your account history, storing receipts, warranties, review photos, and 1-tap rebooking.",
    },
  },
];

export function BouulConsumerJourneyStepper() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStepData = BOOKING_JOURNEY_STEPS.find((s) => s.step === activeStep) || BOOKING_JOURNEY_STEPS[0];
  const Icon = currentStepData.icon;

  return (
    <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8 space-y-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-b-line pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Consumer Walkthrough</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-b-ink">
            The Complete 11-Step Bouul Booking Journey
          </h3>
          <p className="text-xs text-b-ink-soft mt-1">
            Experience every screen from a flooded kitchen to a fixed geyser and satisfied review.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={activeStep === 1}
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            className="rounded-full border border-b-line bg-b-paper px-4 py-2 text-xs font-bold text-b-ink disabled:opacity-40 hover:bg-b-paper-deep transition-all"
          >
            ← Previous Step
          </button>
          <button
            disabled={activeStep === 11}
            onClick={() => setActiveStep((prev) => Math.min(11, prev + 1))}
            className="rounded-full bg-b-green px-5 py-2 text-xs font-extrabold text-b-forest disabled:opacity-40 hover:bg-emerald-400 transition-all shadow-md"
          >
            Next Step →
          </button>
        </div>
      </div>

      {/* Step Indicator Pills (Horizontal Scroll bar) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {BOOKING_JOURNEY_STEPS.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
              activeStep === s.step
                ? "bg-b-ink text-white shadow-md scale-[1.02]"
                : "bg-b-paper text-b-ink-soft border border-b-line hover:border-b-ink/30"
            }`}
          >
            <span className={`h-5 w-5 rounded-full text-[10px] font-extrabold flex items-center justify-center ${activeStep === s.step ? "bg-b-sun text-b-ink" : "bg-b-paper-deep text-b-ink-faint"}`}>
              {s.step}
            </span>
            <span>Step {s.step}</span>
          </button>
        ))}
      </div>

      {/* Step Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-b-line bg-b-paper p-6 md:p-8 space-y-6"
        >
          {/* Step Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-b-line pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold text-xl shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">
                  {currentStepData.badge}
                </span>
                <h4 className="font-display font-extrabold text-xl text-b-ink mt-0.5">
                  {currentStepData.title}
                </h4>
                <p className="text-xs text-b-ink-soft">{currentStepData.subtitle}</p>
              </div>
            </div>
          </div>

          {/* STEP 1 SIMULATION */}
          {activeStep === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-b-ink">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <MapPin className="h-4 w-4" /> Suburb: {currentStepData.details.suburb}
                  </span>
                  <span className="text-b-ink-faint">Tap to switch location</span>
                </div>

                <div className="p-3 rounded-xl bg-b-paper border border-b-line text-xs text-b-ink-faint flex items-center justify-between">
                  <span>&quot;{currentStepData.details.placeholders?.[0]}&quot;</span>
                  <Search className="h-4 w-4 text-emerald-600" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block mb-2">
                    Trending Nearby Hashtags:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStepData.details.hashtags?.map((h) => (
                      <span key={h} className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 2 SIMULATION */}
          {activeStep === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-3">
                <div className="text-xs font-bold text-b-ink flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-600" />
                  <span>Searching for: &quot;{currentStepData.details.query}&quot;</span>
                </div>

                <div className="space-y-2">
                  {currentStepData.details.suggestions?.map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-b-paper border border-b-line flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-b-ink">{s.label}</p>
                        <p className="text-[10px] text-b-ink-faint">{s.category}</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {s.time || s.distance || s.discount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 3 SIMULATION */}
          {activeStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-3">
                <div className="flex gap-1 overflow-x-auto pb-1">
                  {currentStepData.details.tabs?.map((tab) => (
                    <span
                      key={tab}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tab === "All" ? "bg-emerald-600 text-white" : "bg-b-paper text-b-ink-soft"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {currentStepData.details.cards?.map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-b-paper border border-b-line space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-b-ink">{c.name}</span>
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded">
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-b-ink-soft">{c.vendor}</p>
                      <div className="flex justify-between items-center text-[10px] pt-1">
                        <span className="font-bold text-emerald-600">{c.price}</span>
                        <span className="text-b-ink-faint">{c.distance} • {c.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 4 SIMULATION */}
          {activeStep === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-display font-extrabold text-base text-b-ink">
                      {currentStepData.details.serviceName}
                    </h5>
                    <p className="text-xs text-b-ink-soft">{currentStepData.details.businessName}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                    {currentStepData.details.quickStats?.rating}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block">
                    1. Select Service Option / Variant:
                  </span>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {currentStepData.details.variants?.map((v) => (
                      <div
                        key={v.name}
                        className={`p-2.5 rounded-xl border text-xs ${
                          v.selected ? "border-emerald-600 bg-emerald-500/10 font-bold" : "border-b-line bg-b-paper"
                        }`}
                      >
                        <p className="text-[11px] text-b-ink">{v.name}</p>
                        <p className="text-emerald-600 font-extrabold mt-1">{v.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block">
                    2. Select Your Specific Plumber Professional:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentStepData.details.pros?.map((p) => (
                      <div
                        key={p.name}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                          p.selected ? "border-emerald-600 bg-emerald-500/10 font-bold" : "border-b-line bg-b-paper"
                        }`}
                      >
                        <div>
                          <p className="font-bold text-b-ink">{p.name} ({p.rating})</p>
                          <p className="text-[10px] text-b-ink-faint">{p.exp}</p>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-semibold">{p.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-b-paper border border-b-line text-xs space-y-1">
                  <p className="font-bold text-b-ink flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-emerald-600" /> Slot: {currentStepData.details.timeSlot}
                  </p>
                  <p className="text-[11px] text-b-ink-soft">Instructions: &quot;{currentStepData.details.specialInstructions}&quot;</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 5 SIMULATION */}
          {activeStep === 5 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 space-y-1">
                  <span className="font-bold block text-emerald-800">Delivery Choice:</span>
                  <p className="font-semibold">{currentStepData.details.deliveryMode}</p>
                  <p className="text-[11px] text-emerald-900">{currentStepData.details.address}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-b-paper border border-b-line text-xs space-y-2">
                  <span className="font-bold text-b-ink flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> Behind-the-Scenes Risk Gate
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-500/20">
                      {currentStepData.details.riskGateResult}
                    </div>
                    <div className="p-2 rounded bg-b-paper-deep text-b-ink-soft font-medium border border-b-line">
                      {currentStepData.details.overdueOrders}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 6 SIMULATION */}
          {activeStep === 6 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-900 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{currentStepData.details.zolaBanner}</span>
                </div>

                <div className="p-4 rounded-xl bg-b-paper border border-b-line space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-b-ink border-b border-b-line pb-2">
                    <span>{currentStepData.details.serviceName}</span>
                    <span className="text-emerald-600">{currentStepData.details.basePrice}</span>
                  </div>
                  <p className="text-[11px] text-b-ink-soft">Vendor: {currentStepData.details.vendorName}</p>
                  <p className="text-[11px] text-b-ink-soft">Assigned Pro: {currentStepData.details.selectedPro}</p>
                  <p className="text-[11px] text-b-ink-soft">Time Slot: {currentStepData.details.bookedTime}</p>
                  <p className="text-[11px] text-b-ink-soft">Special Instructions: &quot;{currentStepData.details.specialInstructions}&quot;</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 7 SIMULATION */}
          {activeStep === 7 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="p-3 rounded-xl bg-b-paper border border-b-line text-xs font-bold text-b-ink flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-emerald-600" />
                    <span>Payment Method:</span>
                  </span>
                  <span className="text-emerald-600">{currentStepData.details.paymentMethod}</span>
                </div>

                <div className="p-4 rounded-xl bg-b-paper border border-b-line text-xs space-y-2">
                  <div className="flex justify-between text-b-ink-soft">
                    <span>Subtotal</span>
                    <span className="font-semibold text-b-ink">{currentStepData.details.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-b-ink-soft">
                    <span>Platform Service Fee</span>
                    <span className="font-semibold text-b-ink">{currentStepData.details.serviceFee}</span>
                  </div>
                  <div className="flex justify-between text-b-ink-soft">
                    <span>VAT (15%)</span>
                    <span className="font-semibold text-b-ink">{currentStepData.details.vat}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-b-ink text-sm border-t border-b-line pt-2">
                    <span>Total Amount</span>
                    <span className="text-emerald-600">{currentStepData.details.totalPrice}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-900 text-center">
                  🎉 {currentStepData.details.celebrationText}
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 8 SIMULATION */}
          {activeStep === 8 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="flex items-center justify-between border-b border-b-line pb-3 text-xs">
                  <div>
                    <p className="font-bold text-b-ink">{currentStepData.details.orderNumber}</p>
                    <p className="text-[11px] text-b-ink-soft">{currentStepData.details.vendorName} • {currentStepData.details.proName}</p>
                  </div>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                    Live Progress
                  </span>
                </div>

                <div className="space-y-3">
                  {currentStepData.details.stages?.map((stg, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                          stg.status === "completed"
                            ? "bg-emerald-600 text-white"
                            : stg.status === "active"
                            ? "bg-amber-500 text-white animate-pulse"
                            : "bg-b-paper-deep text-b-ink-faint border border-b-line"
                        }`}
                      >
                        {stg.status === "completed" ? "✓" : i + 1}
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className={`font-bold ${stg.status === "active" ? "text-amber-600" : "text-b-ink"}`}>
                          {stg.label}
                        </span>
                        <span className="text-[10px] text-b-ink-faint font-medium">{stg.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 9 SIMULATION */}
          {activeStep === 9 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-3">
                <div className="space-y-2.5">
                  {currentStepData.details.messages?.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl text-xs max-w-[85%] ${
                        msg.sender === "User"
                          ? "ml-auto bg-emerald-600 text-white rounded-br-none"
                          : msg.sender === "Zola AI"
                          ? "bg-b-forest text-b-cream border border-b-forest-line"
                          : "bg-b-paper border border-b-line text-b-ink rounded-bl-none"
                      }`}
                    >
                      <span className="font-bold text-[10px] block opacity-80 mb-0.5">{msg.sender}</span>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 10 SIMULATION */}
          {activeStep === 10 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block">
                    3-Way Verified Rating Breakdown:
                  </span>
                  <div className="grid gap-2">
                    {currentStepData.details.ratings?.map((r, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-b-paper border border-b-line flex justify-between text-xs">
                        <span className="font-bold text-b-ink">{r.item}</span>
                        <span className="font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded">{r.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-b-paper border border-b-line text-xs space-y-1">
                  <span className="font-bold text-b-ink block">Written Review:</span>
                  <p className="text-b-ink-soft leading-relaxed italic">&quot;{currentStepData.details.reviewBody}&quot;</p>
                  <span className="text-[10px] text-emerald-600 font-bold block pt-1">{currentStepData.details.anonymousStatus}</span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* STEP 11 SIMULATION */}
          {activeStep === 11 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-4">
                <div className="p-4 rounded-xl bg-b-paper border border-b-line space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-b-line pb-2">
                    <span className="font-bold text-b-ink">{currentStepData.details.pastOrderTitle}</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Completed</span>
                  </div>
                  <p className="text-[11px] text-b-ink-soft">{currentStepData.details.vendor}</p>
                  <p className="text-[11px] text-b-ink-soft">{currentStepData.details.dateCompleted}</p>

                  <div className="pt-2 flex justify-end">
                    <button className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-all flex items-center gap-1.5">
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Rebook Thabo M. in 1-Tap</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-b-ink-soft">{currentStepData.details.desc}</p>
            </div>
          )}

          {/* Stepper Footer Controls */}
          <div className="pt-4 border-t border-b-line flex items-center justify-between text-xs">
            <span className="text-b-ink-faint font-semibold">Step {activeStep} of 11 in Bouul Consumer Journey</span>
            <div className="flex gap-2">
              {activeStep < 11 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="rounded-full bg-emerald-600 px-5 py-2 font-bold text-white hover:bg-emerald-500 transition-all flex items-center gap-1.5"
                >
                  <span>Proceed to Step {activeStep + 1}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <span className="text-emerald-600 font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> Journey Complete!
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
