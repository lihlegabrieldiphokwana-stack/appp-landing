"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingFeature {
  name: string;
  bouul: boolean | string;
  competitors: boolean | string;
  tooltip?: string;
}

const features: PricingFeature[] = [
  {
    name: "Commission Rate",
    bouul: "0%",
    competitors: "15-25%",
    tooltip: "Keep 100% of what you earn",
  },
  {
    name: "Booking Fees",
    bouul: "None",
    competitors: "R50-150 per booking",
    tooltip: "No hidden booking or transaction fees",
  },
  {
    name: "AI Discovery Engine",
    bouul: true,
    competitors: false,
    tooltip: "Resonance™ tests multiple titles/images per service",
  },
  {
    name: "Multi-Variant Testing",
    bouul: "Unlimited",
    competitors: "Not available",
    tooltip: "Test 3-5 title + image combinations per service",
  },
  {
    name: "Real-Time Analytics",
    bouul: "4-stage funnel",
    competitors: "Basic views",
    tooltip: "Track impressions → views → intents → purchases",
  },
  {
    name: "Customer Data Access",
    bouul: "Full access",
    competitors: "Restricted",
    tooltip: "Build direct relationships with your customers",
  },
  {
    name: "Profile Customization",
    bouul: "Complete control",
    competitors: "Limited templates",
    tooltip: "Full branding control with custom sections",
  },
  {
    name: "Dynamic Pricing Tools",
    bouul: true,
    competitors: false,
    tooltip: "Adjust pricing based on demand, season, urgency",
  },
  {
    name: "GPS Live Tracking",
    bouul: true,
    competitors: "Basic",
    tooltip: "Real-time location sharing for service delivery",
  },
  {
    name: "In-App Chat",
    bouul: "Unlimited",
    competitors: "Limited messages",
    tooltip: "Direct messaging with all customers",
  },
  {
    name: "Review Management",
    bouul: "AI sentiment + replies",
    competitors: "Basic reviews",
    tooltip: "AI-powered review analysis and suggested replies",
  },
  {
    name: "Video Content",
    bouul: "Unlimited reels",
    competitors: "Photos only",
    tooltip: "Short-form video showcase your work",
  },
  {
    name: "Social Following",
    bouul: true,
    competitors: false,
    tooltip: "Customers can follow your profile for updates",
  },
  {
    name: "Subscription Tiers",
    bouul: "Flexible plans",
    competitors: "One-size-fits-all",
    tooltip: "Choose plans that match your business size",
  },
  {
    name: "Payout Speed",
    bouul: "24-48 hours",
    competitors: "5-7 business days",
    tooltip: "Get paid faster with direct EFT",
  },
  {
    name: "Support",
    bouul: "24/7 priority",
    competitors: "Email only",
    tooltip: "Dedicated vendor support team",
  },
  {
    name: "Onboarding",
    bouul: "Guided + training",
    competitors: "Self-service",
    tooltip: "Personal onboarding call and setup assistance",
  },
  {
    name: "Marketing Boost",
    bouul: "Included",
    competitors: "Paid add-on",
    tooltip: "Featured placements and promotional support",
  },
  {
    name: "API Access",
    bouul: "Available",
    competitors: "Enterprise only",
    tooltip: "Integrate with your existing tools",
  },
  {
    name: "Multi-Location",
    bouul: true,
    competitors: "Single location",
    tooltip: "Manage multiple service areas from one dashboard",
  },
];

const competitorNames = [
  { name: "Bouul", color: "emerald" },
  { name: "Other SA Markets", color: "neutral" },
];

export const VendorPricingComparison: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? features : features.slice(0, 10);

  const bouulWins = features.filter(f => 
    f.bouul === true && f.competitors === false ||
    f.bouul === "0%" ||
    f.bouul === "None" ||
    f.bouul === "Unlimited" ||
    f.bouul === "Full access" ||
    f.bouul === "Complete control" ||
    f.bouul === "24-48 hours" ||
    f.bouul === "24/7 priority" ||
    f.bouul === "4-stage funnel" ||
    f.bouul === "AI sentiment + replies"
  ).length;

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
            PRICING COMPARISON
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Why professionals choose Bouul
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We've built the platform we wish existed. No hidden fees. No commission nightmares. 
            Just powerful tools to grow your business.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">0%</div>
            <div className="text-white font-semibold mb-1">Commission</div>
            <div className="text-neutral-500 text-sm">Keep everything you earn</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">{bouulWins}</div>
            <div className="text-white font-semibold mb-1">Features We Win</div>
            <div className="text-neutral-500 text-sm">Out of {features.length} compared</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">24-48h</div>
            <div className="text-white font-semibold mb-1">Payout Time</div>
            <div className="text-neutral-500 text-sm">Get paid faster</div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden mb-8">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-neutral-800">
            <div className="p-6" />
            <div className="p-6 text-center bg-emerald-500/5">
              <div className="text-emerald-400 font-bold text-xl mb-1">Bouul</div>
              <div className="text-emerald-500/70 text-xs">For Professionals</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-neutral-400 font-bold text-xl mb-1">Other SA Markets</div>
              <div className="text-neutral-600 text-xs">Typical platforms</div>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-neutral-800">
            {displayedFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="grid grid-cols-3 items-center hover:bg-neutral-900/50 transition-colors"
              >
                <div className="p-4">
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    {feature.name}
                    {feature.tooltip && (
                      <div className="group relative">
                        <svg className="w-4 h-4 text-neutral-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-xs text-neutral-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                          {feature.tooltip}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 text-center">
                  {typeof feature.bouul === 'boolean' ? (
                    feature.bouul ? (
                      <svg className="w-6 h-6 text-emerald-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-neutral-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )
                  ) : (
                    <span className="text-emerald-400 font-medium text-sm">{feature.bouul}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof feature.competitors === 'boolean' ? (
                    feature.competitors ? (
                      <svg className="w-6 h-6 text-emerald-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-neutral-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )
                  ) : (
                    <span className="text-neutral-500 text-sm">{feature.competitors}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {features.length > 10 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
            >
              {showAll ? 'Show Less' : `Show ${features.length - 10} More Features`}
              <svg className={cn("w-4 h-4 transition-transform", showAll && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8"
          >
            <div className="text-neutral-400 text-sm font-medium mb-2">Starter</div>
            <div className="text-4xl font-bold text-white mb-2">FREE</div>
            <div className="text-neutral-500 text-sm mb-6">Forever</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                0% commission
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic profile
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Up to 5 services
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic analytics
              </li>
            </ul>
            <a
              href="/vendors"
              className="block w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full text-center transition-colors"
            >
              Get Started Free
            </a>
          </motion.div>

          {/* Pro - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-950 border-2 border-emerald-500 rounded-3xl p-8 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full">
              MOST POPULAR
            </div>
            <div className="text-emerald-400 text-sm font-medium mb-2">Professional</div>
            <div className="text-4xl font-bold text-white mb-2">FREE</div>
            <div className="text-neutral-500 text-sm mb-6">During beta</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Everything in Starter
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited services
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI Discovery Engine
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Video content
              </li>
            </ul>
            <a
              href="/vendors"
              className="block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-center transition-colors"
            >
              Start Free Trial
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8"
          >
            <div className="text-neutral-400 text-sm font-medium mb-2">Enterprise</div>
            <div className="text-4xl font-bold text-white mb-2">FREE</div>
            <div className="text-neutral-500 text-sm mb-6">Custom solutions</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Multi-location
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                API access
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom integrations
              </li>
            </ul>
            <a
              href="/vendors"
              className="block w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full text-center transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 via-emerald-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8">
            <div className="text-emerald-400 font-bold text-6xl mb-4">FREE</div>
            <div className="text-white font-semibold text-2xl mb-2">Join During Beta</div>
            <div className="text-neutral-500 text-sm mb-6 max-w-md">
              Be an early adopter and lock in lifetime benefits. No credit card required. 
              Start growing your business today.
            </div>
            <a
              href="/vendors"
              className="inline-block px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
            >
              Create Free Vendor Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
