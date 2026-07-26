"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  Scissors,
  Star,
  Sparkles,
  ArrowRight,
  Search,
  CalendarCheck,
  Smartphone,
  Image,
  MessageCircle,
  ShieldCheck,
  Camera,
  MapPin,
  Sun,
  Wind,
  Heart,
} from "lucide-react";

const services = [
  { name: "Professional hair styling & blowouts", icon: Scissors },
  { name: "Braiding and ethnic hair care", icon: Scissors },
  { name: "Gel and acrylic nail applications", icon: Sparkles },
  { name: "Bridal and event makeup artistry", icon: Star },
  { name: "Eyelash extension installation", icon: Sparkles },
  { name: "Mobile barbering and grooming", icon: Scissors },
  { name: "Threading and facial waxing", icon: Wind },
  { name: "Skincare and facial treatments", icon: Heart },
];

const audience = [
  "Bridal parties requiring on-site preparation",
  "Corporate executives needing in-office grooming",
  "Mothers unable to leave home for lengthy treatments",
  "Individuals seeking premium, private aesthetic services",
];

const trustFeatures = [
  "Verified photographic portfolios of prior work",
  "Transparent peer reviews from completed bookings",
  "Identity verified professionals for safe home entry",
  "In-app consultation via photo sharing",
];

const faqs: [string, string][] = [
  [
    "What happens if there is load shedding during my appointment?",
    "Bouul encourages professionals to use battery-operated equipment. You can confirm their loadshedding readiness via the in-app chat before booking.",
  ],
  [
    "Can I request a specific style or share inspiration photos?",
    "Absolutely. The integrated chat allows you to send reference images to the stylist beforehand.",
  ],
  [
    "Is travel cost included in the price?",
    "Pricing is fully transparent. Any applicable travel surcharges based on your location are calculated before you confirm.",
  ],
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const stagger = (i: number) => ({ duration: 0.5, delay: i * 0.08 });

export default function BeautyPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Bouul for Beauty & Hair
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Flawless aesthetics, delivered to your door.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                You have a major event, but the prospect of navigating traffic to sit in a crowded salon &mdash;
                wondering if the power will hold &mdash; ruins the luxury. Bouul transforms beauty into an elite, mobile
                service. Connect with highly-rated stylists, makeup artists, and nail technicians who bring fully
                equipped, battery-powered setups directly to your home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Book your beauty professional
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50"
                >
                  See how it works
                </Link>
              </div>
              {/* Alternative killer */}
              <div className="mt-8 rounded-2xl border border-b-line bg-b-paper-raised p-4">
                <p className="text-sm leading-relaxed text-b-ink-soft">
                  <span className="font-semibold text-b-ink">Your salon, wherever you are.</span> No traffic, no waiting
                  room, no loadshedding cancellations. Browse portfolios, pick your professional, and get the full
                  treatment in the comfort of your own space.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]"
            >
              <img
                src="/scenes/hair_styling.png"
                alt="Beauty and hair styling"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint"
          >
            <span className="flex items-center gap-1.5">
              <Image className="h-3.5 w-3.5 text-b-green-deep" /> Verified photo portfolios
            </span>
            <span className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-b-green-deep" /> Loadshedding-resilient tools
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-b-green-deep" /> Mobile, to your door
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Your look, your space ── */}
      <section className="border-t border-b-line bg-b-sun-soft px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              YOUR LOOK, YOUR SPACE
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Why the best salon chair is your own.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-b-ink-soft text-lg leading-relaxed">
              A trip to the salon means traffic, waiting, and hoping the power stays on. Mobile beauty brings the
              studio &mdash; and the peace of mind &mdash; to you.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "No traffic, no waiting",
                body: "Your stylist travels to your home, office, or hotel room. No fighting peak-hour traffic just to sit in a crowded reception area for forty-five minutes.",
              },
              {
                icon: Sparkles,
                title: "Loadshedding-proof treatments",
                body: "Every Bouul professional arrives with battery-operated tools and rechargeable UV systems. Your blowout, gel set, or lash lift finishes on schedule, regardless of the grid.",
              },
              {
                icon: Star,
                title: "Your soundtrack, your vibe",
                body: "Play your own playlist, adjust the lighting, pour your own coffee. The full salon experience without the salon environment — tailored exactly to how you relax best.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={stagger(i)}
                className="rounded-3xl border border-b-sun-soft bg-b-paper p-7"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-7 w-7 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── See their work before you book ── */}
      <section className="border-t border-b-line bg-b-paper px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              SEE THEIR WORK
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Know exactly what you are getting, before you book.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-b-ink-soft text-lg leading-relaxed">
              A stylist&apos;s portfolio tells you everything. Browse real photos from real bookings so there are no
              surprises when you sit in the chair.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Camera,
                title: "Photo portfolios",
                body: "Every professional maintains a gallery of their actual work. See the precision of their braids, the finish on their gel sets, the softness of their blowouts.",
              },
              {
                icon: Star,
                title: "Client reviews with photos",
                body: "Read honest reviews from people who booked before you &mdash; many with photos attached so you can see exactly what was delivered.",
              },
              {
                icon: MessageCircle,
                title: "Share inspiration photos",
                body: "Found a look on Pinterest or Instagram? Send it through the in-app chat before booking. Your stylist confirms they can deliver before you commit.",
              },
              {
                icon: ShieldCheck,
                title: "Identity-verified professionals",
                body: "Every Bouul beauty professional is ID-verified. You know exactly who is arriving at your door, backed by real booking history and reviews.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={stagger(i)}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-b-ink">{item.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's covered ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">WHAT&apos;S COVERED</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Full-service beauty, from roots to tips.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-b-ink-soft text-lg leading-relaxed">
              Hair, nails, makeup, barbering, skincare &mdash; if it makes you feel beautiful, it&apos;s on Bouul.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                {...fadeUp}
                transition={stagger(i)}
                className="rounded-2xl border border-b-line bg-b-paper p-5 flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-b-sun-soft">
                  <service.icon className="h-4 w-4 text-b-ink" />
                </span>
                <span className="text-sm font-medium text-b-ink leading-snug">{service.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-14 max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase mb-4">Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {audience.map((who) => (
                <span
                  key={who}
                  className="rounded-full bg-b-green-soft px-4 py-2 text-sm font-medium text-b-green-deep"
                >
                  {who}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Book your appointment ── */}
      <section className="border-t border-b-line bg-b-paper px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">BOOK YOUR APPOINTMENT</div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Three steps to your perfect look.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-b-ink-soft text-lg leading-relaxed">
              No phone tag, no back-and-forth. Browse, pick, and book in under a minute.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                icon: Search,
                title: "Browse portfolios",
                body: "Search by service or style. Scroll through real photos of each professional's work, read genuine reviews, and find someone whose aesthetic matches yours.",
              },
              {
                number: "02",
                icon: Star,
                title: "Pick your pro",
                body: "Choose the stylist, makeup artist, or technician you connect with. See their real-time availability and check their verified credentials before you commit.",
              },
              {
                number: "03",
                icon: CalendarCheck,
                title: "Book in-app",
                body: "Select your time, share any inspiration photos, confirm your location, and relax. Your professional arrives at your door with everything needed.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={stagger(i)}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-7"
              >
                <span className="font-price text-sm font-semibold text-b-ink-faint">{step.number}</span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <step.icon className="h-6 w-6 text-b-ink" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-b-ink">{step.title}</h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust bar / Peace of mind ── */}
      <section className="border-t border-b-line bg-b-sun-soft px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink md:text-4xl">
              Peace of mind, built in.
            </h2>
          </motion.div>
          <div className="grid gap-3 md:grid-cols-2">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                {...fadeUp}
                transition={stagger(i)}
                className="flex items-center gap-3 rounded-2xl border border-b-sun bg-b-paper p-4"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-b-green-deep" />
                <span className="text-sm font-medium text-b-ink">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              Common questions about booking beauty professionals
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <motion.div
                key={q}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <h3 className="text-b-ink font-semibold mb-2">{q}</h3>
                <p className="b-body-sm leading-relaxed text-b-ink-soft">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Ready for your moment?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Book your beauty professional today and experience salon-quality care without leaving home.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Book your beauty professional
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
