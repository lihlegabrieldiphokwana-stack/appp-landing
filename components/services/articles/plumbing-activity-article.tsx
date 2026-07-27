"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BouulConsumerJourneyStepper } from "./bouul-consumer-journey-stepper";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  Camera,
  Brain,
  Sparkles,
  MapPin,
  CalendarCheck,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Droplets,
  Wrench,
  AlertTriangle,
  FileText,
  UserCheck,
  Zap,
  HelpCircle,
  BookOpen,
  X,
  Star,
  Check,
  Building2,
  Hammer,
} from "lucide-react";

export type PlumbingActivityId =
  | "burst_pipes"
  | "renovation_plumbing"
  | "geyser_compliance"
  | "damp_restoration"
  | "site_cleanup"
  | "outdoor_drainage";

interface ActivityArticleData {
  id: PlumbingActivityId;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  readTime: string;
  author: string;
  problemHeadline: string;
  problemBody: string;
  bouulSolution: string[];
  partsNeeded: string[];
  guidePricing: string;
  timeline: string;
  aiPromptExample: string;
  aiDiagnosisOutput: string;
  escrowGuarantee: string;
  pirbStandard: string;
  articleSections: Array<{
    heading: string;
    body: string;
  }>;
}

export const ActivityArticles: Record<PlumbingActivityId, ActivityArticleData> = {
  burst_pipes: {
    id: "burst_pipes",
    tag: "Emergency Repairs",
    title: "Burst Pipes & High-Pressure Valves",
    subtitle: "Rapid containment of emergency leaks, copper pipe soldering, and isolating ball valve replacements using SABS-approved fittings.",
    image: "/scenes/plumbing.png",
    readTime: "4 min read",
    author: "Bouul Emergency Hydraulics Team",
    problemHeadline: "When pressurized water bursts behind drywall at 2:00 AM",
    problemBody: "A sudden burst pipe can flood a living room in under 20 minutes. Traditional emergency calls lead to unanswered phones, predatory R2,500 call-out fees, or plumbers arriving without copper cutters or isolating valves.",
    bouulSolution: [
      "Live GPS Proximity Dispatch — Filters available master plumbers within 15km",
      "Zola AI Visual Leak Pre-Briefing — Plumbers arrive with exact 15mm/22mm SABS copper fittings",
      "Digital Escrow Safety — Payments remain locked until high-pressure leak testing passes",
    ],
    partsNeeded: ["15mm/22mm SABS Copper Pipe", "Isolating Ball Valves", "Compression Couplings", "Silver Solder Ring"],
    guidePricing: "R450 – R1,200",
    timeline: "Average Arrival: 25 - 40 Mins",
    aiPromptExample: "Water is spraying under my bathroom sink behind the wall tiles!",
    aiDiagnosisOutput: "Identified 15mm copper flexi line rupture. Pre-packed 15mm ball valve & compression coupling dispatched with PIRB Plumber.",
    escrowGuarantee: "100% Escrow Protection: Funds held digitally until water pressure test passes & client confirms zero leaks.",
    pirbStandard: "PIRB Registered Plumber #482091 • SABS 460 Copper Standards",
    articleSections: [
      {
        heading: "1. The 10-Second Emergency Containment Protocol",
        body: "Upon booking, Zola AI immediately identifies your property's main stopcock location from your Home Memory profile and guides you to shut off the main supply while your plumber is en-route.",
      },
      {
        heading: "2. Why Trip #1 Equipment Packing Matters",
        body: "Unverified emergency plumbers often spend 2 hours driving to hardware suppliers. On Bouul, uploading a photo of the burst pipe ensures your pro carries copper pipe benders, silver solder, and high-pressure valves directly in their van.",
      },
      {
        heading: "3. Pressure Testing & Digital Certificate of Compliance",
        body: "After soldering or coupling the burst section, your plumber conducts a 500kPa static pressure test and issues a digital PIRB Certificate directly in the app before escrow release.",
      },
    ],
  },
  renovation_plumbing: {
    id: "renovation_plumbing",
    tag: "Renovation Plumbing",
    title: "Bathroom & Kitchen Installations",
    subtitle: "Precision plumbing integration for modern vanities, concealed wall-mounted cisterns, and custom residential fixtures.",
    image: "/scenes/carpentry.png",
    readTime: "5 min read",
    author: "Bouul Residential Renovation Division",
    problemHeadline: "Upgrading fixtures without ruining wall tiles or alignment",
    problemBody: "Installing modern wall-hung toilets, freestanding tubs, or brass mixers requires exact rough-in dimensions. Amateur installers frequently misalign waste outlets, causing persistent odors or wall leaks.",
    bouulSolution: [
      "CAD & Photo Rough-In Review — Upload architectural spec sheets before installation",
      "Concealed Cistern Specialists — Vetted pros trained on Geberit & Grohe wall frames",
      "Milestone Escrow Releases — Pay per stage: rough-in piping, fixture mounting, final test",
    ],
    partsNeeded: ["Geberit Wall-Mount Frame", "P-Trap & Flexi Waste Couplings", "Threaded Brass Nipple 1/2\"", "Sanitary Silicone"],
    guidePricing: "R1,500 – R4,800",
    timeline: "Timeline: 1 - 2 Days",
    aiPromptExample: "Installing a new wall-mounted vanity and black brass mixer taps in main bathroom.",
    aiDiagnosisOutput: "Spec sheet verified: 1/2\" female thread hot/cold feeds & 40mm waste outlet required. Matched Renovation Plumbing Specialist.",
    escrowGuarantee: "Milestone Escrow: Payments locked per stage (Rough-In -> Mounting -> Leak Test).",
    pirbStandard: "SABS 10252 Water Supply & Drainage Compliance",
    articleSections: [
      {
        heading: "1. Pre-Installation Rough-In Verification",
        body: "Your renovation plumber inspects supply pressure and waste pipe gradients before closing walls, preventing costly tile demolition later.",
      },
      {
        heading: "2. Precision Vanity & Mixer Fitting",
        body: "Fixtures are mounted using reinforced wall brackets and sanitary sealant, ensuring zero movement and leak-free seals around stone basins.",
      },
    ],
  },
  geyser_compliance: {
    id: "geyser_compliance",
    tag: "Geyser Compliance",
    title: "Geyser & Automated Thermostat Wiring",
    subtitle: "CoC-compliant electrical & plumbing connections for traditional geysers, hybrid solar conversions, and high-pressure vacuum breakers.",
    image: "/scenes/electrical_service.png",
    readTime: "4 min read",
    author: "Bouul Thermal Energy & Geyser Division",
    problemHeadline: "Ceiling floods caused by failed vacuum breakers & corroded elements",
    problemBody: "A bursting 150L geyser can collapse a drywall ceiling. Incorrectly installed temperature-pressure (TP) valves or un-bonded electrical wiring violate home insurance policies.",
    bouulSolution: [
      "Dual Plumbing & Electrical Certification — Qualified PIRB & Wireman License pros",
      "Insurance CoC Guarantee — Full digital Certificate of Compliance issued in-app",
      "SABS Approved Drip Tray & Overflow Cabling — Guarantees safe water discharge outdoors",
    ],
    partsNeeded: ["150L/200L SABS Geyser", "400kPa Pressure Control Valve", "Vacuum Breakers", "3kW Thermostat & Element"],
    guidePricing: "R7,500 – R11,500",
    timeline: "Timeline: 4 - 6 Hours",
    aiPromptExample: "My geyser overflow pipe is dripping constantly and hot water is lukewarm.",
    aiDiagnosisOutput: "Pressure Control Valve (PCV) diaphragm failure detected. Thermostat calibration required. Matched Geyser Specialist.",
    escrowGuarantee: "Insurance CoC Escrow: Escrow funds held until official CoC document is uploaded.",
    pirbStandard: "SANS 10254 Mandatory Geyser Installation Standard",
    articleSections: [
      {
        heading: "1. Safety Valve & Drip Tray Verification",
        body: "Every geyser installed on Bouul includes a high-impact SABS drip tray piped directly outdoors with twin 20mm vacuum breakers installed 300mm above the vessel.",
      },
      {
        heading: "2. Electrical Bonding & Isolator Safety",
        body: "Plumbers verify 30A electrical isolator switch proximity and earth bonding connections to comply with SANS 10142 electrical safety regulations.",
      },
    ],
  },
  damp_restoration: {
    id: "damp_restoration",
    tag: "Damp Restoration",
    title: "Post-Leak Wall & Plaster Waterproofing",
    subtitle: "Complete interior wall repair, anti-fungal waterproofing plaster, and paint restoration following internal pipe repairs.",
    image: "/scenes/painting_service.png",
    readTime: "4 min read",
    author: "Bouul Property Damp & Restoration Team",
    problemHeadline: "Flaking paint, black mold & damp patches after pipe leaks",
    problemBody: "Even after fixing a leaking pipe inside a brick wall, trapped moisture causes paint peeling, efflorescence salt buildup, and unhealthy mold growth.",
    bouulSolution: [
      "Moisture Meter Wall Testing — Digital moisture sensors verify wall dryness before plastering",
      "Anti-Fungal Barrier Coatings — Application of specialized waterproofing slurry",
      "Color-Matched Paint Finish — Restores your room wall back to original condition",
    ],
    partsNeeded: ["Moisture Seal Slurry", "Anti-Fungal Primer", "Hydraulic Patch Plaster", "Washable Satin Acrylic Paint"],
    guidePricing: "R1,200 – R3,200",
    timeline: "Timeline: 1 - 2 Days",
    aiPromptExample: "Water stain and bubbling paint on my bedroom wall behind the shower.",
    aiDiagnosisOutput: "Post-leak moisture level 38%. Requires plaster hacking, moisture seal slurry & anti-fungal paint.",
    escrowGuarantee: "Mold-Free Escrow: Funds released after moisture level drops below 12% threshold.",
    pirbStandard: "Waterproofing Federation & SABS Paint Standards",
    articleSections: [
      {
        heading: "1. Wall Moisture Level Diagnosis",
        body: "Contractors test deep brick moisture using pinless moisture meters, ensuring plastering only occurs once the wall core has dried safely.",
      },
      {
        heading: "2. Multi-Coat Waterproof Barrier Application",
        body: "Hacked plaster areas are coated with a dual-layer cementitious slurry that prevents residual moisture from migrating to surface paint.",
      },
    ],
  },
  site_cleanup: {
    id: "site_cleanup",
    tag: "Guaranteed Cleanup",
    title: "Spotless Post-Repair Site Cleanup",
    subtitle: "Our verified pros never leave mud, rubble, or debris behind. Thorough site cleaning is a mandatory platform requirement.",
    image: "/scenes/house_cleaning.png",
    readTime: "3 min read",
    author: "Bouul Platform Quality Assurance Team",
    problemHeadline: "Muddy footprints, plaster dust & old rusty pipes left in your home",
    problemBody: "The worst part of hiring traditional plumbers is the messy aftermath—dirty bath tubs, plaster dust over carpets, and old broken pipes left on your lawn.",
    bouulSolution: [
      "Mandatory Floor Protection Drop-Cloth Protocol — Tarps laid down before tools open",
      "Old Parts Disposal & Eco-Recycling — Contractor removes all old copper & rubble",
      "Post-Job Wipe Down & Floor Mop — Home left cleaner than when the plumber arrived",
    ],
    partsNeeded: ["Heavy Duty Floor Tarps", "HEPA Vacuum Cleaner", "Eco Disinfectant Cleaners"],
    guidePricing: "Included Free in All Jobs",
    timeline: "Included in Service Visit",
    aiPromptExample: "Plumber finished fixing the pipe under my kitchen counter.",
    aiDiagnosisOutput: "Pre-completion checklist triggered: Drop-cloth removal, surface wipe down & rubble disposal required.",
    escrowGuarantee: "Spotless Guarantee: Escrow release requires photo proof of clean work area.",
    pirbStandard: "Bouul Mandatory Quality Code #QA-902",
    articleSections: [
      {
        heading: "1. The Drop-Cloth & Shoe Cover Rule",
        body: "Pros on Bouul lay down heavy-duty protective canvas tarps across your flooring and wear protective shoe covers before carrying heavy toolboxes into your home.",
      },
      {
        heading: "2. Responsible Recycling of Old Metal Parts",
        body: "Old copper pipes, corroded brass valves, and packaging are loaded into the contractor's vehicle for eco-friendly metal recycling.",
      },
    ],
  },
  outdoor_drainage: {
    id: "outdoor_drainage",
    tag: "Outdoor Drainage",
    title: "Subsurface Irrigation & Main Line Repair",
    subtitle: "Non-destructive underground leak detection and repairs for main boundary water lines, borehole piping, and garden drainage.",
    image: "/scenes/garden_maintenance.png",
    readTime: "4 min read",
    author: "Bouul Underground Utilities Division",
    problemHeadline: "High municipal water bills and soggy lawn patches from buried leaks",
    problemBody: "An underground leak between your municipal meter and home can waste thousands of liters per day without obvious surface pooling, leading to massive municipal water bills.",
    bouulSolution: [
      "Acoustic & Gas Leak Detection — Pinpoints buried pipe leaks without digging up the entire garden",
      "Minimal Excavation Repair — Small trenching focused only on the exact leak spot",
      "Municipal Meter Flow Verification — Confirms meter stops spinning when taps are closed",
    ],
    partsNeeded: ["Electro-Acoustic Leak Locator", "High-Density Polyethylene (HDPE) Pipe", "Compression Fittings"],
    guidePricing: "R1,800 – R4,500",
    timeline: "Timeline: 3 - 5 Hours",
    aiPromptExample: "My water bill doubled this month and the grass near the front gate is damp.",
    aiDiagnosisOutput: "Suspected main line underground leak. Dispatched Acoustic Leak Detection Team.",
    escrowGuarantee: "Water Bill Shield: Escrow released after municipal meter flow stops completely.",
    pirbStandard: "SANS 10252 Underground Utilities Standard",
    articleSections: [
      {
        heading: "1. Acoustic & Thermal Underground Scanning",
        body: "Technicians use ground microphones and thermal imaging to hear underground water hiss through soil, pinpointing the leak to within 30cm.",
      },
      {
        heading: "2. Precision Pipe Coupling & Turf Restoration",
        body: "Only a small section of lawn or paving is lifted to replace the damaged HDPE pipe section before neatly replacing grass sods.",
      },
    ],
  },
};

export function PlumbingActivityArticle({
  articleId,
  onClose,
}: {
  articleId: PlumbingActivityId;
  onClose?: () => void;
}) {
  const article = ActivityArticles[articleId] || ActivityArticles.burst_pipes;
  const [isEscrowSimulated, setIsEscrowSimulated] = useState(false);

  return (
    <div className="bg-b-paper text-b-ink rounded-3xl border border-b-line p-6 md:p-10 shadow-2xl max-w-5xl mx-auto space-y-10 my-8 relative">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full bg-b-paper-raised p-2 border border-b-line text-b-ink-faint hover:text-b-ink transition-colors z-20"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* ── ARTICLE HEADER BANNER ── */}
      <div className="border-b border-b-line pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
            {article.tag}
          </span>
          <span className="text-xs text-b-ink-faint font-semibold">
            {article.readTime} • {article.author}
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-b-ink leading-tight">
          {article.title}
        </h1>

        <p className="text-base md:text-lg text-b-ink-soft leading-relaxed max-w-3xl">
          {article.subtitle}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-600">
          <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="h-4 w-4" /> {article.pirbStandard}
          </span>
          <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-full text-amber-700 border border-amber-500/20">
            <Lock className="h-4 w-4" /> {article.escrowGuarantee}
          </span>
        </div>
      </div>

      {/* ── HERO IMAGE & PROBLEM VS SOLUTION ── */}
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 rounded-2xl border border-b-line bg-b-paper-deep overflow-hidden aspect-[16/10] relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-b-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
            <span className="bg-emerald-600 px-2 py-0.5 rounded font-bold uppercase text-[10px] mr-2">Vetted Standard</span>
            <span className="font-semibold">{article.title} Protocol on Bouul</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs text-red-950 space-y-1.5">
            <h4 className="font-display font-bold text-sm text-red-700 flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span>The Industry Problem</span>
            </h4>
            <p className="font-semibold">{article.problemHeadline}</p>
            <p className="text-red-900 leading-relaxed">{article.problemBody}</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 space-y-2">
            <h4 className="font-display font-bold text-sm text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>How Bouul Solves It</span>
            </h4>
            <ul className="space-y-1.5 text-emerald-900 font-medium">
              {article.bouulSolution.map((sol, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── EMBEDDED UX COMPONENT: ZOLA DIAGNOSTIC & ESCROW INSPECTOR ── */}
      <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-b-line pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full mb-1">
              <Sparkles className="h-3 w-3" /> Zola AI Interactive Inspector
            </div>
            <h3 className="font-display text-xl font-extrabold text-b-ink">
              Activity Booking &amp; Quote Diagnostic Preview
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Est. Rate: {article.guidePricing}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Prompt & Diagnosis Box */}
          <div className="rounded-2xl border border-b-forest-line bg-b-forest p-5 text-b-cream space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-b-sun">
              <Brain className="h-4 w-4" />
              <span>Zola Visual Prompt Input</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-xs text-white">
              &quot;{article.aiPromptExample}&quot;
            </div>

            <div className="pt-1 space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-b-sun block">Zola Diagnostic Output:</span>
              <p className="text-b-cream/90 leading-relaxed text-[11px]">{article.aiDiagnosisOutput}</p>
            </div>

            <div className="pt-2 border-t border-b-forest-line/60 flex items-center justify-between text-[10px] text-b-cream/60">
              <span>{article.timeline}</span>
              <span className="text-emerald-400 font-bold">Auto-Brief Active</span>
            </div>
          </div>

          {/* Escrow Lock Simulator */}
          <div className="rounded-2xl border border-b-line bg-b-paper p-5 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-b-ink">Pre-Packed Parts &amp; Equipment</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  PIRB Approved
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {article.partsNeeded.map((p) => (
                  <span key={p} className="text-[11px] font-semibold text-b-ink bg-b-paper-raised px-2.5 py-1 rounded-md border border-b-line">
                    ✓ {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-b-line space-y-2">
              <button
                onClick={() => setIsEscrowSimulated(!isEscrowSimulated)}
                className={`w-full rounded-xl py-3 font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                  isEscrowSimulated
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-b-ink text-white hover:bg-b-ink/90"
                }`}
              >
                <Lock className="h-4 w-4" />
                <span>{isEscrowSimulated ? "✓ Escrow Deposit Locked (Simulated)" : "Simulate Digital Escrow Lock"}</span>
              </button>
              <p className="text-[10px] text-center text-b-ink-faint">
                Funds remain safely held in digital escrow until you test the repair.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 11-STEP CONSUMER JOURNEY WALKTHROUGH ── */}
      <BouulConsumerJourneyStepper />

      {/* ── ARTICLE DETAILED SECTIONS ── */}
      <div className="space-y-6 pt-2">
        <h3 className="font-display text-2xl font-extrabold text-b-ink">
          In-Depth Activity Process &amp; Technical Standards
        </h3>

        <div className="space-y-4">
          {article.articleSections.map((sec, i) => (
            <div key={i} className="rounded-2xl border border-b-line bg-b-paper-raised p-6 space-y-2 shadow-sm">
              <h4 className="font-display font-bold text-lg text-b-ink">{sec.heading}</h4>
              <p className="text-sm leading-relaxed text-b-ink-soft">{sec.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTICLE BOTTOM CTA ── */}
      <div className="rounded-3xl bg-b-forest text-b-cream p-8 text-center space-y-4">
        <h3 className="font-display text-2xl font-extrabold text-white">
          Ready to book {article.title.toLowerCase()}?
        </h3>
        <p className="text-xs text-b-cream/80 max-w-md mx-auto leading-relaxed">
          Book background-cleared, PIRB-compliant plumbers with visual Zola AI diagnostics and 100% digital escrow safety.
        </p>
        <div className="pt-2">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-full bg-b-green px-8 py-3.5 text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-xl"
          >
            <Droplets className="h-4 w-4" />
            <span>Book {article.title} In App</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
