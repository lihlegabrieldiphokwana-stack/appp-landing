"use client";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { vendorCategories } from "@/lib/vendor-categories-data";

export default function VendorCategoryPage() {
  const params = useParams();
  const slug = params.category as string;
  const category = vendorCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-b-paper">
        <RedesignNav />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-display font-extrabold text-b-ink mb-4">Category not found</h1>
          <Link href="/vendors" className="text-b-green-deep hover:text-b-green-deep">
            ← Back to vendor categories
          </Link>
        </section>
        <RedesignFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-b-line">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/vendors#categories"
            className="inline-flex items-center gap-1 text-b-ink-soft hover:text-b-ink-soft text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All categories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display font-extrabold text-5xl mb-4">{category.icon}</div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              {category.name} on Bouul
            </h1>
            <p className="text-b-ink-soft text-xl max-w-3xl">
              {category.categoryBenefit}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category pain point + benefit */}
      <section className="py-16 px-6 border-b border-b-line">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-b-green/30 bg-b-green-soft p-8 md:p-10">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              The opportunity
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink mb-4">
              {category.categoryPainPoint}
            </h2>
            <p className="text-b-ink-soft text-lg leading-relaxed">
              {category.categoryBenefit}
            </p>
          </div>
        </div>
      </section>

      {/* Service-by-service pain points */}
      <section className="py-24 px-6 border-b border-b-line">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              Services we support
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-b-ink">
              {category.services.length} services in {category.name}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {category.services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-b-line bg-b-paper-raised p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-b-ink">{service.name}</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-b-ink-soft">Pain point:</span>
                    <span className="text-b-ink-soft font-medium">{service.painPoint}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="text-b-green-deep font-medium">Bouul:</span>
                  <span className="text-b-ink-soft">{service.bouulBenefit}</span>
                </div>

                {service.detailedPainPoints && service.detailedPainPoints.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {service.detailedPainPoints.map((pp) => (
                      <div
                        key={pp.problem}
                        className="rounded-xl border border-b-line bg-b-paper p-4"
                      >
                        <div className="text-b-ink-soft text-xs uppercase tracking-widest mb-2">
                          Challenge
                        </div>
                        <div className="text-b-ink-soft text-sm font-medium mb-3">{pp.problem}</div>
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                          <span className="text-b-green-deep text-sm">{pp.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-b-ink mb-6">
              Ready to grow your {category.name.toLowerCase()} business?
            </h2>
            <p className="text-b-ink-soft text-lg mb-10">
              Join Bouul and get the tools you need to showcase your work, set your
              prices, and manage your bookings — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="px-10 py-4 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full transition-colors"
              >
                Create Free Profile
              </Link>
              <Link
                href="/vendors"
                className="px-10 py-4 border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium rounded-full transition-colors"
              >
                Explore more categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
