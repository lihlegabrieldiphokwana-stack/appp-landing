"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const USER_FAQS = [
  {
    q: "What is Bouul?",
    a: "Bouul is a hyper-local services marketplace that connects you with vetted professionals in your city — from plumbers and electricians to hair stylists, tutors, photographers, and 200+ other categories. You can browse, book, track, chat, and pay entirely within the app.",
  },
  {
    q: "How do I find and book a service?",
    a: "Open Bouul and search for what you need — or just tell Zola (our AI assistant) in plain language. Zola finds available, vetted professionals near you, compares them by rating and distance, and confirms the booking in seconds. No phone calls, no back-and-forth.",
  },
  {
    q: "What is Zola, and how does she work?",
    a: "Zola stands for Zone of Local Assistance. She is Bouul's AI booking assistant — available 24/7. Just describe what you need ('I need a plumber in Sandton urgently') and Zola searches vetted professionals, surfaces the best match, and books on your behalf. She also tracks the job live and sends you updates.",
  },
  {
    q: "How are professionals vetted?",
    a: "Every professional on Bouul goes through identity verification, background screening, and skills assessment before their profile goes live. They also build a public rating from verified customer reviews — only people who completed a booking can leave a review. Ratings below our threshold result in automatic review and possible suspension.",
  },
  {
    q: "What if something goes wrong with my booking?",
    a: "Bouul has a built-in community dispute resolution system. If you have an issue — work not completed, damage, or a billing dispute — you open a case in-app. Our mediation team reviews the evidence from both sides and resolves it fairly, usually within 24 hours. Payments are held securely until the job is confirmed complete.",
  },
  {
    q: "How does real-time tracking work?",
    a: "Once a professional confirms your booking, you can track their GPS location live from within the app. You receive push notifications when they accept, when they're on their way, when they're 2 minutes out, and when the job is marked complete. In-app chat is open the whole time.",
  },
  {
    q: "How do I leave a review?",
    a: "After a booking is marked complete, Bouul prompts you to rate and review the professional. Reviews are verified — only completed-booking customers can leave them. Your review is also analysed by Bouul's AI sentiment engine to extract themes and help other users make informed decisions.",
  },
  {
    q: "How does the referral programme work?",
    a: "Share your unique referral link with friends. When someone signs up and completes their first booking, you earn R50 in Bouul credits — and so do they. Credits can be applied to any future booking. There's no limit to how many referrals you can make.",
  },
  {
    q: "What cities is Bouul available in?",
    a: "Bouul is currently live in 12 cities across South Africa, including Johannesburg, Cape Town, Durban, Pretoria, and growing. We expand to new cities when we've built a sufficient network of vetted professionals there. Check the app for your city's availability.",
  },
  {
    q: "Is Bouul free to download?",
    a: "Yes — Bouul is completely free to download on iOS and Android. There is no subscription fee for customers. You only pay for the services you book, at the rates set by the professional. No hidden fees, no markup.",
  },
];

const VENDOR_FAQS = [
  {
    q: "How do I join Bouul as a professional?",
    a: "Download Bouul and select 'Join as a Professional'. You'll go through identity verification, submit your qualifications and a portfolio, and complete a brief onboarding assessment. Once approved (typically 48 hours), your profile goes live and you can start receiving bookings.",
  },
  {
    q: "Does Bouul take a commission?",
    a: "Bouul charges a transparent service fee on completed bookings — no hidden deductions, no surprise charges. You see exactly what you earn before accepting any job. The fee covers payment processing, platform maintenance, customer support, and your access to Zola-powered lead generation.",
  },
  {
    q: "How does Zola AI help me get more bookings?",
    a: "Zola actively matches your profile to customer requests based on location, availability, specialisation, and rating. When a customer asks for a service you offer and you're nearby, Zola surfaces you as a top match and can book you instantly — even while you're mid-job. You don't have to chase leads.",
  },
  {
    q: "What is the Vendor Dashboard?",
    a: "Your dashboard is command central for your Bouul business. It shows real-time booking requests, your earnings, customer ratings and reviews, job history, payout schedule, and analytics on profile views and conversion rate. Everything you need to run and grow your service business, in one screen.",
  },
  {
    q: "How do I set my pricing?",
    a: "You set your own rates. Bouul provides benchmark pricing data so you can see what other professionals in your category and city are charging — but the final rate is yours to decide. You can set different rates for different service types, time of day, or travel distance.",
  },
  {
    q: "What is Magic Remover?",
    a: "Magic Remover is Bouul's AI image tool built specifically for professionals. It automatically removes backgrounds, clutter, and unwanted elements from your portfolio photos — giving your profile a clean, professional look without needing a graphic designer. Higher-quality profiles get more views and more bookings.",
  },
  {
    q: "How does dispute resolution work for vendors?",
    a: "If a customer opens a dispute, Bouul's mediation team reviews the full booking record, chat history, photos, and both parties' accounts. You have the opportunity to present your evidence. Our team aims to resolve every case within 24 hours. The system is designed to be fair — not to automatically favour either side.",
  },
  {
    q: "How do I build my profile and get discovered?",
    a: "Upload a strong portfolio using Magic Remover to clean up your images. Post short-form videos showing your work — professionals with video feeds receive significantly more profile views. Collect reviews consistently. Maintain a response rate above 90%. All of these signals improve your ranking in Zola's recommendations.",
  },
  {
    q: "When and how do I get paid?",
    a: "Payments from completed bookings are processed to your registered bank account on a rolling basis — typically within 1–2 business days of job completion. You can track all pending and settled payments in your dashboard. Bouul uses secure payment infrastructure; your banking details are never shared with customers.",
  },
  {
    q: "Can I manage multiple service types?",
    a: "Yes. Your Bouul professional profile supports multiple service categories. A photographer can list portrait shoots, event coverage, and product photography separately — each with its own pricing, availability, and portfolio. Zola will match you to the right category of request automatically.",
  },
];

// ─── Accordion item ───────────────────────────────────────────────────────────
const AccordionItem = ({
  q, a, index,
}: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-neutral-800"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="text-white text-sm md:text-base font-medium group-hover:text-neutral-200 transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition-colors"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-neutral-400 text-sm leading-relaxed pb-6 max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Tab switcher ─────────────────────────────────────────────────────────────
type Tab = "users" | "vendors";

const TAB_CONFIG: { id: Tab; label: string; description: string }[] = [
  { id: "users",   label: "For Users",   description: "Booking, tracking, payments, and everything in between." },
  { id: "vendors", label: "For Vendors", description: "Dashboard, payouts, Zola, and growing your business." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<Tab>("users");
  const faqs = activeTab === "users" ? USER_FAQS : VENDOR_FAQS;

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              HELP CENTRE
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Questions, answered.
            </h1>
            <p className="text-neutral-500 text-xl max-w-2xl">
              Everything you need to know about using Bouul — whether you&apos;re booking a service
              or building your professional business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="px-6 mb-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex bg-neutral-950 border border-neutral-800 rounded-2xl p-1.5 gap-1"
          >
            {TAB_CONFIG.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-white rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${activeTab === tab.id ? "text-black" : "text-neutral-400 hover:text-white"}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Tab description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-600 text-sm mt-4"
            >
              {TAB_CONFIG.find((t) => t.id === activeTab)?.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Still stuck? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-neutral-950 border border-neutral-800 rounded-2xl px-8 py-10 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-emerald-400 font-bold text-sm">Z</span>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">
              Still have questions?
            </h3>
            <p className="text-neutral-500 text-sm mb-6 max-w-sm mx-auto">
              Ask Zola directly in the app, or reach our support team — we typically respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/download"
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-sm transition-colors"
              >
                Ask Zola
              </a>
              <a
                href="mailto:support@bouul.com"
                className="px-6 py-2.5 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium rounded-full text-sm transition-colors"
              >
                Contact support →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
