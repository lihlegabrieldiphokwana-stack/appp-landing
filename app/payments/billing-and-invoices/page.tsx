import React from "react";
import Link from "next/link";
import { FileText, Download, CheckCircle2, ArrowLeft, ArrowRight, DollarSign, Receipt, CreditCard } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Automated Invoicing & Business Billing | Bouul Payments",
  description: "Generate instant PDF tax invoices, job receipts, and itemized billing statements for every completed service on Bouul.",
};

export default function BillingAndInvoicesPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="billing-invoices">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">Automated Billing</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Invoices & Business Billing
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Every booking on Bouul automatically generates compliant PDF invoices with custom company registration numbers, VAT breakdowns, and itemized labor & material costs.
              </p>
            </div>
          </Reveal>

          {/* Billing Features */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Receipt className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Instant PDF Invoices</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Generated automatically upon escrow release and sent straight to both customer and vendor emails.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Custom Company Details</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Add your CIPC registration number, VAT number, company letterhead logo, and address to all outgoing receipts.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Flexible Payment Methods</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Accept Instant EFT, credit/debit cards, Apple Pay, and Capitec Pay directly on every invoice statement.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>
      <RedesignFooter />
    </main>
  );
}
