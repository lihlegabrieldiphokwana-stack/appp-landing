"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  MessageCircle,
  Search,
  CalendarCheck,
  ArrowRight,
  Globe,
  Target,
  CheckCircle2,
} from "lucide-react";

const curricula = [
  {
    id: "ieb",
    name: "IEB",
    description: "Independent Examinations Board — critical thinking, higher-order questioning, and cross-disciplinary application. Assesses a learner's ability to synthesise rather than regurgitate.",
    features: [
      "Higher-order questioning that rewards analysis over recall",
      "Cross-disciplinary paper design (e.g., Maths Lit with data-journalism skills)",
      "Moderation by independent assessors, not school teachers",
      "Open-ended responses that test conceptual depth",
    ],
    bestFor: "Learners who thrive on reasoning and written argument",
  },
  {
    id: "caps",
    name: "CAPS",
    description: "Curriculum and Assessment Policy Statement — the national DBE framework followed by most public and many private schools. Structured, sequential, and exam-technique heavy.",
    features: [
      "Clear, sequential curriculum with defined term-by-term outcomes",
      "Predictable exam structures that reward consistent practice",
      "Strong emphasis on memorisation and application speed",
      "Largest pool of past papers and marking guidelines available",
    ],
    bestFor: "Learners who need structure, routine, and exam-strategy drilling",
  },
  {
    id: "cambridge",
    name: "Cambridge",
    description: "International GCSE and A-Level pathway — globally recognised, university-preparatory curriculum with subject-depth over breadth. Used by top-tier international schools worldwide.",
    features: [
      "Subject-depth model — fewer subjects, deeper per-subject mastery",
      "Internationally benchmarked papers graded by Cambridge examiners",
      "Flexible module selection allows subject-strength specialisation",
      "Direct articulation into UK, US, and European university applications",
    ],
    bestFor: "Learners targeting international university admission",
  },
];

const vettingSteps = [
  {
    icon: GraduationCap,
    title: "Academic credential verification",
    body: "We verify every degree, teaching certificate, and professional qualification directly with the issuing institution. No self-reported qualifications.",
  },
  {
    icon: ShieldCheck,
    title: "Identity and background screening",
    body: "Mandatory ID verification and criminal background checks through accredited South African screening partners. Every tutor is who they say they are.",
  },
  {
    icon: BookOpen,
    title: "Curriculum-specific assessment",
    body: "Tutors demonstrate subject-matter expertise through curriculum-aligned assessments. An IEB Maths tutor must pass an IEB Maths paper, not a generic test.",
  },
  {
    icon: MessageCircle,
    title: "Trial and feedback loop",
    body: "Every new tutor's first sessions are monitored through parent feedback. Consistent low ratings trigger a review of their platform status.",
  },
];

const subjects = [
  "Matric IEB Mathematics",
  "CAPS Mathematics",
  "Physical Sciences",
  "English Home Language",
  "Accounting",
  "Life Sciences",
  "Geography",
  "History",
  "Cambridge IGCSE Maths",
  "Cambridge A-Level Sciences",
  "Primary literacy & numeracy",
  "Exam technique coaching",
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find your curriculum specialist",
    body: "Tell Bouul your child's curriculum (IEB, CAPS, or Cambridge), subject, and grade. We surface tutors who have verified experience in that exact syllabus.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book a trial session",
    body: "Schedule a one-on-one session with the tutor. See if their teaching style matches your child's learning approach — no commitment, no pressure.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Track progress over time",
    body: "Monitor milestone reports, communicate directly with the tutor, and adjust focus areas as your child builds confidence and results improve.",
  },
];

const faqs: [string, string][] = [
  [
    "Do you have tutors familiar with the IEB marking guidelines?",
    "Yes, many professionals on the platform specialise exclusively in the IEB curriculum. You can filter for IEB-specific experience and prior exposure to IEB moderation standards.",
  ],
  [
    "Are the sessions conducted online or in person?",
    "Both options are available. You can filter for educators who travel to your suburb, or opt for digital sessions with integrated tools like shared whiteboards and screen collaboration.",
  ],
  [
    "Can I change tutors if it's not a good fit?",
    "Yes. You can book a trial session and easily switch to a different specialist if the teaching style doesn't match. We encourage parents to find the right chemistry — it matters as much as credentials.",
  ],
  [
    "What if my child needs help with a subject not listed?",
    "Contact us through the app. We maintain a growing network of specialists and can often match you within 48 hours for most high-school and primary subjects.",
  ],
];

export default function TutoringPage() {
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
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Secure their university future without the stress.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Matric pressure is mounting, and generalised extra lessons are no longer sufficient. Your child needs
                strategic intervention tailored to the rigorous demands of the IEB or CAPS curriculum. Bouul connects you
                with vetted academic specialists who focus on conceptual rebuilding and exam technique. Review academic
                credentials, arrange secure sessions, and track progress.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Find a curriculum specialist
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
                  <span className="font-semibold text-b-ink">Not another generalist tutor.</span> Most tutoring platforms
                  match you with whoever is available. Bouul matches your child with a specialist who has taught their
                  specific curriculum — IEB, CAPS, or Cambridge — and has the credentials to prove it.
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
                src="/scenes/tutoring_service.png"
                alt="One-on-one tutoring session"
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
              <GraduationCap className="h-3.5 w-3.5 text-b-green-deep" /> Verified academic credentials
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-b-green-deep" /> Curriculum-specific matching
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> Background-checked tutors
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Curriculum matters ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Curriculum matters.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-b-ink-soft">
              A generalist tutor cannot prepare your child for the specific demands of their curriculum. The difference
              between an A and a B+ is often knowing how the paper is designed, not just the content.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {curricula.map((curr, i) => (
              <motion.div
                key={curr.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-7 flex flex-col"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-green-soft">
                    {curr.id === "ieb" && <Target className="h-5 w-5 text-b-green-deep" />}
                    {curr.id === "caps" && <BookOpen className="h-5 w-5 text-b-green-deep" />}
                    {curr.id === "cambridge" && <Globe className="h-5 w-5 text-b-green-deep" />}
                  </span>
                  <span className="font-display text-2xl font-extrabold text-b-ink">{curr.name}</span>
                </div>
                <p className="b-body-sm leading-relaxed text-b-ink-soft mb-5">{curr.description}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {curr.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
                      <span className="b-body-sm leading-relaxed text-b-ink">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-b-green-soft px-4 py-3">
                  <span className="text-xs font-semibold text-b-green-deep uppercase tracking-wider">
                    Best for
                  </span>
                  <p className="mt-1 b-body-sm text-b-ink">{curr.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we vet our tutors ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              How we vet our tutors.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-b-ink-soft">
              The number one fear parents have is real: "Is this person actually qualified to teach my child?" Every
              tutor on Bouul passes four layers of verification before they can accept a single session.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-4 mt-14">
            {vettingSteps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-b-green-soft">
                  <item.icon className="h-6 w-6 text-b-green-deep" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-ink">{item.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects we cover ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Subjects we cover.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-b-ink-soft">
              From foundational primary support to matric exam preparation — find a specialist for your child's exact
              subject and curriculum.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="rounded-2xl border border-b-line bg-b-paper px-4 py-3.5 text-center"
              >
                <div className="text-b-ink text-sm font-medium">{subject}</div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <p className="text-xs font-semibold tracking-widest text-b-ink-faint uppercase text-center mb-4">
              This serves
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Parents of high school students facing critical NSC exams",
                "Learners transitioning between DBE and private education",
                "Students requiring specialised attention for learning barriers",
                "Homeschooling families seeking structured support",
              ].map((who) => (
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

      {/* ── How it works ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              From concern to confidence, in three steps.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-7"
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

      {/* ── FAQ ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              Common questions about tutoring on Bouul
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-6">
              Give your child the advantage they deserve.
            </h2>
            <p className="text-b-ink-soft text-lg mb-10 max-w-xl mx-auto">
              Every day without the right support is a day your child falls further behind. Find a curriculum-matched
              specialist who knows exactly what the exam board expects.
            </p>
            <Link
              href="/download"
              className="inline-block px-10 py-5 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full text-lg transition-colors"
            >
              Find a curriculum specialist
            </Link>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
