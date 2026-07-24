"use client";
import React from "react";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";

const safetyFeatures = [
  {
    icon: (
      <svg className="w-8 h-8 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: "ID & Business Verification",
    description: "Every professional completes identity document verification. Business-registered vendors are cross-referenced against official registries. One-time checks are monitored — re-verification triggers on significant profile changes.",
    stat: "Multi-level",
    statLabel: "verification badges",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Booking-Tied Reviews",
    description: "Only customers who completed a verified booking can leave a review. No bought stars, no anonymous spam, no fake feedback. Two-way ratings give both sides a voice.",
    stat: "100%",
    statLabel: "verified reviews",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Escrow Payments",
    description: "Your money sits securely with Bouul while the work happens. It only reaches the professional when you confirm the job is done right. Every payment is encrypted in transit and at rest.",
    stat: "Escrow",
    statLabel: "protected payments",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Dispute Resolution",
    description: "Structured dispute pipeline with evidence submission and moderated outcomes. Both sides submit their case, and our team reviews the facts. Fair outcomes protect everyone.",
    stat: "Structured",
    statLabel: "resolution process",
  },
];

const verificationSteps = [
  {
    step: "01",
    title: "Document Submission",
    description: "Professional submits government-issued ID, proof of address, and relevant qualifications or trade certificates. Business-registered vendors also provide registration documents.",
  },
  {
    step: "02",
    title: "Identity Verification",
    description: "Our KYC pipeline checks documents for authenticity, cross-references identity details against official registries, and validates contact information (phone, email).",
  },
  {
    step: "03",
    title: "Business Registry Check",
    description: "Registered businesses are cross-referenced against official company registries. Unregistered sole proprietors proceed on verified identity alone — no barrier to entry for informal traders.",
  },
  {
    step: "04",
    title: "Profile Badging",
    description: "The profile receives a verification badge reflecting the level achieved — ID-verified, business-verified, or both. Badges are clearly displayed so customers know exactly what's been checked.",
  },
  {
    step: "05",
    title: "Ongoing Monitoring",
    description: "Verification isn't one-and-done. Profile changes (name, address, business details) can trigger re-verification. Our trust pipeline monitors for anomalies and flags profiles that need a fresh check.",
  },
];

const protectionFeatures = [
  {
    title: "Escrow Protection",
    description: "Your payment is held by Bouul while the work is in progress. You only release the funds when you confirm the job is done right. If things go wrong, your money is still safe.",
    icon: "🛡️",
  },
  {
    title: "Verified Reviews",
    description: "Every review is tied to a completed booking. No anonymous ratings, no bought stars. Two-way ratings mean both customers and vendors build honest reputations over time.",
    icon: "⭐",
  },
  {
    title: "Unified Trust Standing",
    description: "Every profile shows a consolidated trust score — rating history, booking completion rate, dispute record, and verification status. Low scores are flagged to protect both sides.",
    icon: "📊",
  },
  {
    title: "Structured Disputes",
    description: "If something goes wrong, both sides submit evidence through a fair resolution pipeline. Our team reviews the facts and reaches a moderated outcome. Recovery paths let people rebuild their standing.",
    icon: "⚖️",
  },
];

const faqs = [
  {
    question: "How does the verification process work?",
    answer: "Every professional submits a government-issued ID and proof of address. Business-registered vendors are cross-referenced against official registries. Each profile shows a badge identifying the verification level achieved — ID-verified, business-verified, or both. The check is ongoing: significant profile changes can trigger re-verification.",
  },
  {
    question: "How does escrow protect my payment?",
    answer: "When you book, your payment is held securely by Bouul — it does not reach the professional until you confirm the job is complete. If the service isn't satisfactory, report it through the app and your money stays protected while our team reviews the situation.",
  },
  {
    question: "Are reviews real?",
    answer: "Absolutely. Only customers who completed a verified booking can leave a review. There are no anonymous ratings, no purchased stars, and no fake feedback. Both customers and vendors are rated, so trust is a two-way street.",
  },
  {
    question: "What is the unified trust standing?",
    answer: "Every profile on Bouul has a consolidated trust score that combines rating history, booking completion rate, dispute history, and verification status. It gives you a quick-read signal of who you're dealing with. Low-trust profiles are flagged to protect both customers and vendors.",
  },
  {
    question: "What happens if a dispute arises?",
    answer: "Both sides submit evidence through a structured resolution pipeline. Our team reviews the facts and reaches a moderated outcome. Recovery paths are available for users who want to improve their standing after a dispute is resolved.",
  },
  {
    question: "How is my personal data protected?",
    answer: "All data is encrypted in transit (TLS) and at rest. Database access uses row-level security — you can only see what you're authorised to. Vendor contact details are never exposed to customers until a booking is confirmed. We comply with South Africa's POPIA framework.",
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-b-paper">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-6">
              TRUST & SAFETY
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Your safety is our priority
            </h1>
            <p className="text-b-ink-soft text-xl max-w-2xl mx-auto mb-12">
              Every professional is thoroughly vetted. Every booking is protected. 
              Book with total confidence on Bouul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-b-paper border-y border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <div className="text-4xl font-display font-extrabold text-b-green-deep mb-2">{feature.stat}</div>
                <div className="text-b-ink-soft text-sm font-semibold mb-1">{feature.statLabel}</div>
                <h3 className="text-b-ink font-semibold mb-2">{feature.title}</h3>
                <p className="text-b-ink-soft text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              VERIFICATION PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight mb-4">
              5-step verification
            </h2>
            <p className="text-b-ink-soft text-lg max-w-2xl">
              Every professional must pass our rigorous verification process before earning the verified badge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {verificationSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-b-paper-raised border border-b-line rounded-2xl p-6 h-full">
                  <div className="text-b-green-deep font-display font-extrabold text-4xl mb-4">{step.step}</div>
                  <h3 className="text-b-ink font-semibold mb-3">{step.title}</h3>
                  <p className="text-b-ink-soft text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < verificationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-b-paper-deep" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Protection */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              BOOKING PROTECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight mb-4">
              Protected every step
            </h2>
            <p className="text-b-ink-soft text-lg max-w-2xl mx-auto">
              Comprehensive protection for every booking. Your peace of mind is built in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-b-paper-raised border border-b-line rounded-2xl p-6"
              >
                <div className="font-display font-extrabold text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-b-ink font-semibold mb-3">{feature.title}</h3>
                <p className="text-b-ink-soft text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-display font-extrabold text-b-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-b-ink-soft text-lg">
              Everything you need to know about safety on Bouul
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-b-paper-raised border border-b-line rounded-2xl p-6"
              >
                <h3 className="text-b-ink font-semibold mb-2">{faq.question}</h3>
                <p className="text-b-ink-soft text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-b-paper border-t border-b-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink mb-6">
              Ready to book with confidence?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Join thousands of customers who trust Bouul for their service needs.
            </p>
            <a
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Download Bouul
            </a>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
