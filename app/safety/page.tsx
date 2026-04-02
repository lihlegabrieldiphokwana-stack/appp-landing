"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const safetyFeatures = [
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "ID Verification",
    description: "Every professional undergoes rigorous identity verification including government-issued ID checks and background screening.",
    stat: "100%",
    statLabel: "of pros verified",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Skill Testing",
    description: "Trade professionals complete skills assessments to demonstrate competency in their field before joining Bouul.",
    stat: "4-stage",
    statLabel: "assessment process",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Secure Payments",
    description: "All payments are held securely until job completion. Your money is protected with industry-standard encryption.",
    stat: "256-bit",
    statLabel: "SSL encryption",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Our support team is available around the clock to assist with any issues or concerns during your booking.",
    stat: "< 5 min",
    statLabel: "avg response time",
  },
];

const verificationSteps = [
  {
    step: "01",
    title: "Document Submission",
    description: "Professional submits government-issued ID, proof of address, and relevant qualifications or trade certificates.",
  },
  {
    step: "02",
    title: "Background Check",
    description: "Comprehensive criminal background check and reference verification from previous clients or employers.",
  },
  {
    step: "03",
    title: "Skills Assessment",
    description: "Trade professionals complete practical and theoretical assessments to verify their claimed expertise.",
  },
  {
    step: "04",
    title: "Insurance Verification",
    description: "Confirmation of valid liability insurance coverage for added protection during service delivery.",
  },
  {
    step: "05",
    title: "Final Approval",
    description: "Manual review by our trust & safety team before the verified badge is awarded.",
  },
];

const protectionFeatures = [
  {
    title: "Booking Protection",
    description: "If the service doesn't meet expectations, report within 24 hours for a full refund or rebooking.",
    icon: "🛡️",
  },
  {
    title: "Price Guarantee",
    description: "Pay the quoted price. No hidden fees or surprise charges. What you see is what you pay.",
    icon: "💰",
  },
  {
    title: "Dispute Resolution",
    description: "Fair mediation process with our dedicated team to resolve any disagreements between customers and professionals.",
    icon: "⚖️",
  },
  {
    title: "Insurance Coverage",
    description: "All verified professionals carry liability insurance to cover any accidental damage during service.",
    icon: "🏥",
  },
];

const faqs = [
  {
    question: "How do I verify a professional's credentials?",
    answer: "Look for the blue verified badge on profiles. Click on it to see exactly what verifications they've completed: ID check, background screening, skills assessment, and insurance status.",
  },
  {
    question: "What happens if something goes wrong during the service?",
    answer: "All bookings include Booking Protection. Report any issues within 24 hours through the app, and our support team will investigate. You're covered for refunds or rebooking.",
  },
  {
    question: "Are payments secure?",
    answer: "Absolutely. We use 256-bit SSL encryption and partner with leading payment processors. Your payment is held securely until you confirm the job is complete.",
  },
  {
    question: "Can I request a different professional if I'm not satisfied?",
    answer: "Yes! If you're not happy with your booking, contact support and we'll arrange a different professional at no additional cost.",
  },
  {
    question: "How are reviews moderated?",
    answer: "All reviews are from verified customers who completed bookings. We use AI to detect fake reviews and manually review flagged content to maintain authenticity.",
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-6">
              TRUST & SAFETY
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Your safety is our priority
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl mx-auto mb-12">
              Every professional is thoroughly vetted. Every booking is protected. 
              Book with total confidence on Bouul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-black border-y border-neutral-900">
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
                <div className="text-4xl font-bold text-emerald-400 mb-2">{feature.stat}</div>
                <div className="text-neutral-400 text-sm font-semibold mb-1">{feature.statLabel}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              VERIFICATION PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              5-step verification
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl">
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
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 h-full">
                  <div className="text-emerald-400 font-bold text-4xl mb-4">{step.step}</div>
                  <h3 className="text-white font-semibold mb-3">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < verificationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-neutral-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Protection */}
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
              BOOKING PROTECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Protected every step
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
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
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-lg">
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
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to book with confidence?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of customers who trust Bouul for their service needs.
            </p>
            <a
              href="/download"
              className="inline-block px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-lg transition-colors"
            >
              Download Bouul
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
