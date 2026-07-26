"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  Droplets,
  Zap,
  Clock,
  ShieldCheck,
  Star,
  MessageCircle,
  Search,
  CalendarCheck,
  Smartphone,
  ArrowRight,
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
  plumbers: {
    slug: "plumbers",
    name: "Plumbers",
    scene: "/scenes/plumbing.png",
    tagline: "Leaks, blockages, installations — fixed by verified pros, booked in seconds.",
    hook: {
      headline: "A burst pipe doesn't wait for Monday.",
      body: "It's 9pm on a Sunday and water is pooling under the sink. You need someone now — not a phone tag marathon, not a quote that evaporates. Bouul shows you plumbers near you who are available, rated by real customers, and verified. Book in two taps, pay when the leak is gone.",
    },
    howItHelps: [
      { pain: "You Google plumbers and get a list of strangers", solution: "Bouul shows you only verified, ID-checked plumbers near you, with real reviews from completed jobs. You see who's available right now." },
      { pain: "Every plumber gives a different quote over the phone", solution: "Prices are listed upfront — per job, per visit. No guessing, no 'surprise' fees. What you see is what you pay." },
      { pain: "You book someone and they don't show up", solution: "Booking is instant through the app, with reminders, live tracking, and chat. Your payment sits in escrow until the job is done right." },
    ],
    typicalServices: [
      "Burst pipe repair",
      "Blocked drain clearing",
      "Geyser installation & repair",
      "Leaking tap repair",
      "Toilet installation & repair",
      "Water pressure issues",
      "Pipe re-routing",
      "Leak detection",
    ],
    goodFor: [
      "Homeowners with emergency leaks",
      "Renters needing quick fixes",
      "Property managers maintaining units",
      "Offices with plumbing issues",
      "New home installations",
    ],
    whyBouul: [
      { icon: Zap, title: "Available when things break", body: "Plumbing emergencies don't keep office hours. Bouul shows you who's available now, not who will call you back tomorrow." },
      { icon: ShieldCheck, title: "Upfront pricing, no surprises", body: "See the cost before you book. Payment goes into escrow and releases only when the job is complete and you're satisfied." },
      { icon: MessageCircle, title: "Chat with photos", body: "Snap a photo of the problem and send it in the chat. Your plumber arrives knowing exactly what to bring — fewer trips, faster fixes." },
    ],
    trustPoints: [
      "ID-verified plumbers with completed job history",
      "Real reviews from real bookings — no fake feedback",
      "Escrow-protected payments: pay only when it's fixed",
      "Live tracking so you know when they'll arrive",
    ],
    faqs: [
      { q: "How fast can I get a plumber?", a: "Bouul shows you available plumbers near you in real time. Many can be booked within the hour, depending on your location and the time of day." },
      { q: "What if the plumber can't fix the problem?", a: "Your payment is held in escrow until you confirm the job is done. If it's not resolved, don't release the funds — and our support team steps in to mediate." },
      { q: "Are the plumbers qualified?", a: "Every plumber on Bouul is ID-verified. Many carry trade certifications, and their profile shows their completed job history and customer ratings." },
      { q: "What if the job costs more than quoted?", a: "The price you see is the price you pay for the quoted work. If the scope changes, your plumber will discuss it with you through the chat before any additional charges." },
    ],
    cta: "Download Bouul and book a plumber",
  },

  electricians: {
    slug: "electricians",
    name: "Electricians",
    scene: "/scenes/electrical_service.png",
    tagline: "Faulty wiring, blown circuits, new installations — safe, verified, upfront.",
    hook: {
      headline: "A flickering light is never just a bulb.",
      body: "When something's wrong with your electrics, it's not just annoying — it's unsafe. You need a qualified electrician who knows the code, carries the right gear, and shows up when they say they will. Bouul connects you with verified electricians near you, with upfront pricing and real reviews.",
    },
    howItHelps: [
      { pain: "Electrical work is dangerous — you can't trust just anyone", solution: "Every electrician on Bouul is ID-verified. Their profile shows completed jobs, ratings, and response times so you book with confidence." },
      { pain: "Electricians quote over the phone without seeing the job", solution: "Snap a photo of the issue and send it through the chat. Your electrician sees what's needed and quotes accurately — no guesswork." },
      { pain: "You're left waiting for hours with no update", solution: "Booking is instant via the app. You get live tracking, ETA updates, and a direct chat line so you're never left wondering where they are." },
    ],
    typicalServices: [
      "Fault finding & repairs",
      "New wiring & installations",
      "DB board upgrades",
      "Lighting installation",
      "Security system wiring",
      "Electrical certificate of compliance (COC)",
      "Appliance connection",
      "Emergency call-outs",
    ],
    goodFor: [
      "Homeowners with electrical faults",
      "Tenants needing COCs",
      "Offices requiring maintenance",
      "Renovation projects",
      "New building installations",
    ],
    whyBouul: [
      { icon: ShieldCheck, title: "Safety first, always", body: "Electrical work needs the right credentials. Bouul's verification process and review system mean you book someone qualified, every time." },
      { icon: Zap, title: "Emergency-ready", body: "Blown a fuse at midnight? Bouul shows you which electricians are available right now — no waiting for business hours." },
      { icon: MessageCircle, title: "See the problem before they arrive", body: "Take a photo of your switchboard, a loose wire, or a damaged socket and send it in the chat. Your electrician arrives prepared." },
    ],
    trustPoints: [
      "ID-verified electricians with job history",
      "Verified reviews from real bookings",
      "Escrow-protected payments",
      "Upfront pricing on every job",
    ],
    faqs: [
      { q: "Do electricians on Bouul carry COC certification?", a: "Many do — their profiles list their certifications. You can message them through the chat to confirm before booking." },
      { q: "Can I get a same-day electrician?", a: "Yes. Bouul shows real-time availability. Filter by 'available now' to see electricians who can come today." },
      { q: "What if the work needs municipal approval?", a: "Most residential electrical work doesn't need prior approval, but your electrician will advise on what requires a COC or inspection after the job." },
    ],
    cta: "Download Bouul and book an electrician",
  },
};

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

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
