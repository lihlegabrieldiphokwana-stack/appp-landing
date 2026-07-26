"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  Heart,
  ShieldCheck,
  Star,
  Home,
  Search,
  MessageCircle,
  Baby,
  Users,
  Clock,
  FileCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function CarePage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-b-paper px-5 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl">
                Uncompromising care for your loved ones, rigorously verified.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft">
                Entrusting someone with your children or aging parents is deeply anxiety-inducing.
                Relying on neighbourhood whispers or unverified agency temps is simply not an option.
                Bouul elevates the standard of caregiving discovery. Every professional undergoes
                comprehensive background checks. Browse rich profiles, read reviews from other
                families, and use secure messaging to establish rapport before they ever step into
                your home.
              </p>

              {/* Two CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/search?category=childcare"
                  className="inline-flex items-center gap-2 rounded-full bg-b-green px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-transform hover:scale-[1.03]"
                >
                  <Baby className="h-4 w-4" />
                  Find childcare
                </Link>
                <Link
                  href="/search?category=senior-care"
                  className="inline-flex items-center gap-2 rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50"
                >
                  <Heart className="h-4 w-4" />
                  Find senior care
                </Link>
              </div>

              {/* Trust markers — not busy, just the essentials */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-b-ink-faint">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> ID-verified with
                  family reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="h-3.5 w-3.5 text-b-green-deep" /> Background-checked
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-b-green-deep" /> Escrow-protected payment
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="overflow-hidden rounded-3xl border border-b-line bg-b-paper-deep shadow-[0_24px_60px_rgba(24,39,32,0.12)]"
            >
              <img
                src="/scenes/childcare_service.png"
                alt="Caregiver with child"
                className="aspect-[4/3] w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our vetting process ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Our vetting process
            </h2>
            <p className="mt-4 b-body-sm leading-relaxed text-b-ink-soft">
              Every caregiver on Bouul passes a strict multi-layer verification. Nothing is skipped,
              nothing is automatic. This is the standard we hold because your family depends on it.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                icon: UserCheck,
                title: "Identity verification",
                body: "Government-issued ID matched against national databases. Name, photo, and document number confirmed before a profile goes live. No exceptions.",
              },
              {
                icon: ShieldCheck,
                title: "Background check",
                body: "Criminal record screening across all provinces. National sex offender registry check. Employment history gaps investigated and resolved.",
              },
              {
                icon: FileCheck,
                title: "Profile review",
                body: "Every qualification, certification, and reference is manually reviewed by our team. Profiles with discrepancies are flagged until resolved or removed.",
              },
              {
                icon: Star,
                title: "Family reviews",
                body: "Reviews are only accepted from completed, verified bookings — never anonymous. Each review is attached to a real family, and the history cannot be edited by the caregiver.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-b-green-soft">
                  <step.icon className="h-6 w-6 text-b-green-deep" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-b-ink">
                  {step.title}
                </h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-xs font-semibold tracking-widest text-b-ink-faint uppercase"
          >
            Every caregiver. Every booking. Every time.
          </motion.p>
        </div>
      </section>

      {/* ── Childcare / Senior Care split ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              Care for every stage of life
            </h2>
            <p className="mt-4 b-body-sm leading-relaxed text-b-ink-soft">
              Whether you need a nanny for your toddler or a companion for your parent,
              Bouul connects you with professionals who specialise in your family&apos;s
              specific needs.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Childcare card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-b-green-soft">
                <Baby className="h-7 w-7 text-b-green-deep" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-b-ink">Childcare</h3>
              <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">
                From after-school au pairs who pick up from school and help with homework, to
                experienced infant and toddler carers trained in early childhood development.
                Evening babysitters for date nights. Emergency coverage when your regular
                arrangement falls through. Every profile shows you their experience level,
                certifications, and availability before you start a conversation.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Ad-hoc evening babysitting",
                  "After-school au pair services",
                  "Infant and toddler care",
                  "Emergency short-notice coverage",
                  "School holiday care",
                  "Weekend caregiving",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-b-ink">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-b-green-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/search?category=childcare"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Find a childcarer
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Senior care card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-b-green-soft">
                <Heart className="h-7 w-7 text-b-green-deep" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-b-ink">Senior care</h3>
              <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">
                Companions who provide meaningful social connection and assistance with daily
                routines. Dementia-trained caregivers who understand how to maintain dignity and
                calm in challenging moments. Help with medication reminders, meal preparation,
                mobility support, and transportation to appointments. Designed to help your loved
                one age in place rather than move to a facility before they are ready.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Senior companionship and assistance",
                  "Dementia and Alzheimer&apos;s support",
                  "Daily living aid (meals, mobility, meds)",
                  "Palliative and end-of-life care",
                  "Weekend caregiving relief",
                  "Transportation to appointments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-b-ink">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-b-green-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/search?category=senior-care"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-b-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Find a senior carer
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's covered — combined services grid ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              What&apos;s covered
            </h2>
            <p className="mt-4 b-body-sm leading-relaxed text-b-ink-soft">
              Bouul covers the full spectrum of family care, from infant support through to senior
              companionship. Each category is searchable by expertise, experience level, and
              availability.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { label: "Ad-hoc evening babysitting", icon: Clock },
              { label: "After-school au pair services", icon: Users },
              { label: "Infant and toddler care", icon: Baby },
              { label: "Senior companionship", icon: Heart },
              { label: "Dementia support caregivers", icon: ShieldCheck },
              { label: "Weekend caregiving relief", icon: Home },
            ].map((service) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-b-line bg-b-paper-raised px-4 py-6 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-green-soft">
                  <service.icon className="h-5 w-5 text-b-green-deep" />
                </span>
                <div className="text-sm font-medium text-b-ink">{service.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to choose — brief guide ── */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
              How to choose a caregiver
            </h2>
            <p className="mt-4 b-body-sm leading-relaxed text-b-ink-soft">
              The right fit is about more than qualifications. These are the questions families tell
              us matter most when choosing who to invite into their home.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "What experience do you have with my family&apos;s specific situation?",
                body: 'Ask about infant sleep training, toddler discipline approaches, or dementia communication techniques. A caregiver who can articulate their approach clearly is one who has done the work — not just clocked the hours. Look for profiles with specific certifications (first aid, early childhood development, palliative care training) that match your needs.',
              },
              {
                icon: MessageCircle,
                title: "How do you handle emergencies?",
                body: 'Every family should know: what is your emergency contact protocol? Are you first-aid certified? What happens if the child runs a fever or the senior falls? Bouul profiles display certifications, but the conversation is where you gauge comfort and competence. Trust your instinct in the chat — if something feels vague, keep looking.',
              },
              {
                icon: Clock,
                title: "What does a typical day look like in your care?",
                body: 'For childcare: nap schedules, meal preparation, screen time policies. For senior care: daily routines, medication management, social activities. A detailed answer reveals preparation and thoughtfulness. It also surfaces potential mismatches before they become problems — a high-energy au pair for a quiet household, or a homebound companion for an active senior.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-green-soft">
                  <item.icon className="h-5 w-5 text-b-green-deep" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-b-ink">
                  {item.title}
                </h3>
                <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-xl rounded-2xl border border-b-line bg-b-paper-raised p-5 text-center"
          >
            <p className="b-body-sm leading-relaxed text-b-ink-soft">
              <span className="font-semibold text-b-ink">Use Bouul&apos;s in-app chat</span> to ask
              these questions before booking. Every caregiver expects it. Families who do their
              homework first report significantly higher satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-b-line bg-b-paper-deep px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              Common questions about family care
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              [
                "How thorough is the vetting process?",
                "Every caregiver must pass a strict identity verification process. Their profile displays an un-editable history of reviews from other families on the platform. Background checks include criminal record screening and national sex offender registry checks.",
              ],
              [
                "Can I interview the caregiver first?",
                "Yes. We encourage using the in-app chat to ask detailed questions, discuss your child's or parent's specific needs, and arrange a brief introductory call. Most caregivers expect this and welcome the opportunity to connect before meeting.",
              ],
              [
                "What about elder care experience?",
                "You can filter caregivers by their specific expertise, including dementia support, palliative care, or mobility assistance. Each profile lists the caregiver's training, certifications, and years of experience in senior care.",
              ],
              [
                "What happens if we need to cancel last minute?",
                "Cancellation policies are set by each caregiver and displayed before booking. You can choose professionals whose policies match your needs. Emergency situations are handled case by case through the app's support system.",
              ],
            ].map((faq, i) => (
              <motion.div
                key={faq[0]}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <h3 className="mb-2 font-semibold text-b-ink">{faq[0]}</h3>
                <p className="b-body-sm leading-relaxed text-b-ink-soft">{faq[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-b-forest px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl mb-6">
              Find the right caregiver for your family
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-b-cream/70">
              Every caregiver on Bouul is verified, background-checked, and reviewed by real
              families. Your search starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/search?category=childcare"
                className="inline-flex items-center gap-2 rounded-full bg-b-sun px-8 py-4 text-base font-semibold text-b-forest shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-transform hover:scale-[1.03]"
              >
                <Baby className="h-4 w-4" />
                Browse childcare
              </Link>
              <Link
                href="/search?category=senior-care"
                className="inline-flex items-center gap-2 rounded-full border border-b-cream/20 px-8 py-4 text-base font-semibold text-b-cream transition-colors hover:border-b-cream/50"
              >
                <Heart className="h-4 w-4" />
                Browse senior care
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
