"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";
import {
  Search,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Store,
  Share2,
} from "lucide-react";

const SAMPLE_HANDLES = [
  { handle: "$sipho_plumbing", name: "Sipho Plumbing & Solar", category: "Plumbing", rating: 4.9 },
  { handle: "$highveld_elec", name: "Highveld Electrical Co.", category: "Electrical", rating: 4.95 },
  { handle: "$paws_bubbles", name: "Paws & Bubbles Mobile Spa", category: "Pet Care", rating: 4.88 },
];

export default function HandleSearchPage() {
  const [handleInput, setHandleInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = handleInput.trim().replace(/^[@\$]/, "");
    if (!clean) return;
    router.push(`/$${clean}`);
  };

  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />

      <Section className="pt-32 pb-24">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Eyebrow tone="green" className="mb-3">
              Merchant Verification Lookup
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-b-ink mb-4">
              Search &amp; Verify Any <br />
              <span className="text-b-green-deep">Bouul Merchant ($handle).</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              Every verified business on Bouul has a unique storefront handle (e.g. <code className="bg-b-paper-raised px-2 py-1 rounded text-b-green-deep">$sipho_plumbing</code>). Type a handle below to inspect their verification badge and launch deep links.
            </p>
          </div>
        </Reveal>

        {/* Handle Lookup Form */}
        <Reveal delay={0.1}>
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex items-center gap-3 p-2 pl-5 rounded-2xl border-2 border-b-line bg-b-paper-raised shadow-xl focus-within:border-b-green-deep">
              <span className="font-display font-extrabold text-xl text-b-green-deep">$</span>
              <input
                type="text"
                value={handleInput}
                onChange={(e) => setHandleInput(e.target.value)}
                placeholder="sipho_plumbing"
                className="w-full bg-transparent py-3 font-display text-xl font-bold text-b-ink placeholder:text-b-ink-faint focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-b-green-deep px-6 py-3.5 text-xs font-extrabold text-b-cream hover:bg-b-forest transition-all cursor-pointer min-h-[44px] flex items-center gap-2"
              >
                <span>Verify Handle</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Sample Merchant Buttons */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap text-xs">
              <span className="font-semibold text-b-ink-faint">Sample Handles:</span>
              {SAMPLE_HANDLES.map((item) => (
                <Link
                  key={item.handle}
                  href={`/${item.handle}`}
                  className="px-3 py-1.5 rounded-full bg-b-paper border border-b-line text-b-ink font-mono font-bold hover:border-b-green-deep hover:text-b-green-deep transition-all"
                >
                  {item.handle}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Verification Guarantee Box */}
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 space-y-2">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold mx-auto">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-base text-b-ink">Identity Verified</h3>
              <p className="text-xs text-b-ink-soft">Verified SA ID &amp; CIPC business registration proof on file.</p>
            </div>

            <div className="p-4 space-y-2">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold mx-auto">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-base text-b-ink">Deep-Link Ready</h3>
              <p className="text-xs text-b-ink-soft">Seamlessly opens in the Bouul mobile app on iOS &amp; Android.</p>
            </div>

            <div className="p-4 space-y-2">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold mx-auto">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-base text-b-ink">Escrow Protected</h3>
              <p className="text-xs text-b-ink-soft">100% deposit protection on all bookings with this handle.</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <RedesignFooter />
    </main>
  );
}
