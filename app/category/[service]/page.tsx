"use client";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Map category slugs to display names and details
const categoryDetails: Record<string, { name: string; description: string; icon: string }> = {
  "plumbers": { name: "Plumbers", description: "Fix leaks, install fixtures, and solve all plumbing emergencies", icon: "🔧" },
  "electricians": { name: "Electricians", description: "Wiring, repairs, installations, and electrical safety checks", icon: "⚡" },
  "cleaners": { name: "Cleaners", description: "Home and office cleaning services for every need", icon: "🧹" },
  "tutors": { name: "Tutors", description: "Expert tutoring in all subjects and levels", icon: "📚" },
  "beauty": { name: "Beauty", description: "Hair, nails, skincare, and beauty treatments", icon: "💅" },
  "builders": { name: "Builders", description: "Construction, renovations, and building services", icon: "🔨" },
  "gardeners": { name: "Gardeners", description: "Landscaping, maintenance, and garden design", icon: "🌿" },
  "painters": { name: "Painters", description: "Interior and exterior painting services", icon: "🎨" },
};

const samplePros = [
  {
    name: "Marco T.",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 km",
    available: true,
    startingPrice: "R350",
    responseTime: "15 min",
    verified: true,
  },
  {
    name: "Sarah M.",
    rating: 5.0,
    reviews: 94,
    distance: "1.8 km",
    available: true,
    startingPrice: "R400",
    responseTime: "10 min",
    verified: true,
  },
  {
    name: "David K.",
    rating: 4.8,
    reviews: 203,
    distance: "3.5 km",
    available: false,
    startingPrice: "R300",
    responseTime: "45 min",
    verified: true,
  },
  {
    name: "Lisa P.",
    rating: 4.9,
    reviews: 156,
    distance: "0.9 km",
    available: true,
    startingPrice: "R280",
    responseTime: "20 min",
    verified: true,
  },
  {
    name: "James R.",
    rating: 4.7,
    reviews: 89,
    distance: "4.2 km",
    available: true,
    startingPrice: "R320",
    responseTime: "30 min",
    verified: false,
  },
  {
    name: "Emily W.",
    rating: 5.0,
    reviews: 112,
    distance: "2.1 km",
    available: true,
    startingPrice: "R450",
    responseTime: "5 min",
    verified: true,
  },
];

const faqs = [
  {
    question: "How quickly can I book a professional?",
    answer: "Most professionals on Bouul can be booked within the hour. You'll see real-time availability and can choose a time that works for you.",
  },
  {
    question: "Are all professionals verified?",
    answer: "Yes! Every professional undergoes identity verification and background checks. Look for the verified badge on profiles.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer booking protection. If you're not satisfied, contact our support team within 24 hours and we'll make it right.",
  },
  {
    question: "How do payments work?",
    answer: "Pay securely through the app with a single tap. Your payment is held until the job is completed to your satisfaction.",
  },
];

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.service as string;
  const category = categoryDetails[categorySlug] || {
    name: categorySlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    description: "Professional services near you",
    icon: "🛠️",
  };

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
            <div className="text-6xl mb-6">{category.icon}</div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              {category.name}
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl mx-auto mb-12">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Professionals */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Available {category.name}
            </h2>
            <p className="text-neutral-500 text-lg">
              {samplePros.filter(p => p.available).length} professionals ready to help
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePros.map((pro, i) => (
              <motion.a
                key={pro.name}
                href={`/pro/${pro.name.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-2xl">
                    {pro.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {pro.available && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-emerald-400 text-xs font-medium">Available</span>
                      </div>
                    )}
                    {pro.verified && (
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-blue-500/10 rounded-full">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-blue-400 text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                  {pro.name}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 font-semibold">★ {pro.rating}</span>
                  <span className="text-neutral-600 text-sm">({pro.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{pro.distance}</span>
                  <span>Response: {pro.responseTime}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="text-neutral-400 text-sm">From</span>
                  <span className="text-white font-semibold">{pro.startingPrice}</span>
                </div>
              </motion.a>
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
              Everything you need to know about booking {category.name.toLowerCase()}
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
              Ready to book a {category.name.toLowerCase()}?
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
              Get the job done right. Book a verified professional in minutes.
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
