"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BouulConsumerJourneyStepper } from "./bouul-consumer-journey-stepper";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  Camera,
  Brain,
  Sparkles,
  MapPin,
  CalendarCheck,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Droplets,
  Wrench,
  AlertTriangle,
  FileText,
  UserCheck,
  Zap,
  HelpCircle,
  BookOpen,
  X,
  Star,
  Check,
  Building2,
  Hammer,
} from "lucide-react";

export interface ActivityArticleData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  readTime: string;
  author: string;
  problemHeadline: string;
  problemBody: string;
  bouulSolution: string[];
  partsNeeded: string[];
  guidePricing: string;
  timeline: string;
  aiPromptExample: string;
  aiDiagnosisOutput: string;
  escrowGuarantee: string;
  pirbStandard: string;
  articleSections: Array<{
    heading: string;
    body: string;
  }>;
}

interface GenericActivityArticleModalProps {
  article: ActivityArticleData;
  onClose: () => void;
}

export function GenericActivityArticleModal({
  article,
  onClose,
}: GenericActivityArticleModalProps) {
  const [activeTab, setActiveTab] = useState<"article" | "journey">("article");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-b-forest/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-b-paper rounded-3xl border border-b-line shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-b-paper-raised/95 border-b border-b-line backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/20">
              {article.tag}
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs text-b-ink-faint">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-b-paper border border-b-line rounded-full text-xs">
              <button
                onClick={() => setActiveTab("article")}
                className={`px-3 py-1 rounded-full font-bold transition-all ${
                  activeTab === "article"
                    ? "bg-b-ink text-white shadow-xs"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                Article &amp; Guide
              </button>
              <button
                onClick={() => setActiveTab("journey")}
                className={`px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "journey"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>11-Step Stepper</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-b-paper border border-b-line text-b-ink hover:bg-b-paper-deep transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {activeTab === "journey" ? (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Interactive Walkthrough</span>
                <h2 className="font-display text-2xl font-extrabold text-b-ink">
                  The Bouul Consumer Journey for {article.title}
                </h2>
                <p className="text-xs text-b-ink-soft">
                  Experience the exact 11-step workflow from suburb selection to Live GPS tracking and 3-way reviews.
                </p>
              </div>
              <BouulConsumerJourneyStepper />
            </div>
          ) : (
            <>
              {/* Article Title & Subtitle */}
              <div className="space-y-3 border-b border-b-line pb-6">
                <h1 className="font-display text-3xl md:text-4xl font-extrabold text-b-ink tracking-tight leading-tight">
                  {article.title}
                </h1>
                <p className="text-base text-b-ink-soft leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              {/* Problem vs. Bouul Solution Box */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                    <span>The Problem: {article.problemHeadline}</span>
                  </div>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    {article.problemBody}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>How Bouul Solves It</span>
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-950/90 font-medium">
                    {article.bouulSolution.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Equipment & Pricing Quick Spec */}
              <div className="grid gap-4 sm:grid-cols-3 p-5 rounded-2xl bg-b-paper-raised border border-b-line">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block mb-1">Guide Pricing (ZAR):</span>
                  <div className="font-display font-extrabold text-lg text-emerald-700">{article.guidePricing}</div>
                  <span className="text-[10px] text-b-ink-faint">Fixed quote locked in escrow</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block mb-1">Estimated Timeline:</span>
                  <div className="font-display font-bold text-sm text-b-ink">{article.timeline}</div>
                  <span className="text-[10px] text-b-ink-faint">Real-time ETA tracking</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block mb-1">Compliance Standard:</span>
                  <div className="font-display font-semibold text-xs text-b-ink">{article.pirbStandard}</div>
                </div>
              </div>

              {/* Zola AI Photo Diagnostics Box */}
              <div className="rounded-2xl border border-b-forest-line bg-b-forest p-6 text-b-cream space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-b-forest-line pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-b-sun" />
                    <span className="font-display font-bold text-sm text-white">Zola AI Visual Diagnostics</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                    Multimodal Vision
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold text-b-sun uppercase tracking-wider block">Customer Prompt:</span>
                    <p className="text-b-cream/90 italic">&quot;{article.aiPromptExample}&quot;</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Zola AI Diagnostic Output:</span>
                    <p className="text-emerald-300 font-semibold">{article.aiDiagnosisOutput}</p>
                  </div>
                </div>
              </div>

              {/* Main Article Sections */}
              <div className="space-y-6 pt-4 border-t border-b-line">
                <h3 className="font-display font-extrabold text-xl text-b-ink">
                  Detailed Service Breakdown &amp; Standards
                </h3>
                {article.articleSections.map((sec, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-display font-bold text-base text-b-ink flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{sec.heading}</span>
                    </h4>
                    <p className="text-xs text-b-ink-soft leading-relaxed pl-7">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Escrow Guarantee Footer Box */}
              <div className="p-5 rounded-2xl bg-b-paper-deep border border-b-line flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-display font-bold text-sm text-b-ink flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-emerald-600" /> Digital Escrow Protection
                  </span>
                  <p className="text-xs text-b-ink-soft">{article.escrowGuarantee}</p>
                </div>
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-6 py-2.5 text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all shrink-0 flex items-center gap-2 shadow-md"
                >
                  <span>Book Job in App</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
