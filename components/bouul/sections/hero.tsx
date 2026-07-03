"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container, Button, Eyebrow, Pill } from "../ui/primitives";
import { PhoneShell } from "../ui/phone-shell";
import { SearchResultsMock } from "@/components/mockups";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-bouul-border bg-bouul-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--bouul-accent-soft),transparent)]" />
      <Container className="relative grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Eyebrow>Hyper-local services</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-bouul-text md:text-7xl"
          >
            Find it. Book it.<br />Track it.
          </motion.h1>
          <p className="mt-5 max-w-md text-lg text-bouul-text-secondary">
            The marketplace for local services — search across services, vendors, posts and more, powered by Zola AI.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-full border border-bouul-border bg-bouul-surface px-4 py-2.5 text-sm text-bouul-text-muted">
            <Search className="h-4 w-4 text-bouul-accent" /> hair, plumbers, salons near you
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/download" variant="primary">Get the app</Button>
            <Button href="/vendors" variant="secondary">For Professionals</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Pill><span className="h-1.5 w-1.5 rounded-full bg-bouul-accent" /> Verified pros</Pill>
            <Pill><span className="h-1.5 w-1.5 rounded-full bg-bouul-accent" /> Secure payments</Pill>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneShell><SearchResultsMock /></PhoneShell>
        </div>
      </Container>
    </section>
  );
}
