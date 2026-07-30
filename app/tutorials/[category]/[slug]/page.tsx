"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Share2,
  Bookmark,
  Sparkles,
  BookOpen,
  ChevronRight,
  HelpCircle,
  Zap,
  Flame,
  ShieldCheck,
  Tag,
  Copy,
  Check,
  Search,
  Sliders,
  ListFilter,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { TUTORIAL_CATEGORIES, Tutorial } from "@/lib/tutorials/tutorials-data";

export default function TutorialDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const [resolvedParams, setResolvedParams] = useState<{
    category: string;
    slug: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [feedbackGiven, setFeedbackGiven] = useState<boolean | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <main className="min-h-screen bg-b-paper flex items-center justify-center">
        <div className="animate-pulse text-b-ink-muted text-sm">Loading guide...</div>
      </main>
    );
  }

  const fullSlug = `${resolvedParams.category}/${resolvedParams.slug}`;
  
  let category = TUTORIAL_CATEGORIES.find((c) => c.id === resolvedParams.category);
  let tutorial: Tutorial | undefined = category?.tutorials.find(
    (item) => item.slug === resolvedParams.slug || item.slug.endsWith(resolvedParams.slug)
  );

  if (!tutorial) {
    for (const cat of TUTORIAL_CATEGORIES) {
      const item = cat.tutorials.find(
        (i) => i.slug === resolvedParams.slug || i.slug.includes(resolvedParams.slug)
      );
      if (item) {
        tutorial = item;
        category = cat;
        break;
      }
    }
  }

  if (!tutorial) {
    return (
      <main className="min-h-screen bg-b-paper font-sans text-b-ink">
        <RedesignNav />
        <div className="max-w-3xl mx-auto py-32 px-6 text-center space-y-4">
          <HelpCircle className="h-12 w-12 text-b-ink-faint mx-auto" />
          <h1 className="font-display text-2xl font-bold">Guide Not Found</h1>
          <p className="text-b-ink-muted text-sm">
            We couldn't locate the guide at <code className="bg-b-paper-raised px-2 py-1 rounded text-xs">{fullSlug}</code>.
          </p>
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 rounded-xl bg-b-forest text-b-cream px-5 py-2.5 text-xs font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All 55 Tutorials</span>
          </Link>
        </div>
        <RedesignFooter />
      </main>
    );
  }

  // Parse markdown content into structured sections & steps for interactive UI
  const rawLines = tutorial.content.split("\n");
  const paragraphs: { type: "heading" | "text" | "list" | "callout"; content: string; level?: number }[] = [];
  
  let currentList: string[] = [];

  rawLines.forEach((line) => {
    if (line.startsWith("## ")) {
      paragraphs.push({ type: "heading", content: line.replace("## ", ""), level: 2 });
    } else if (line.startsWith("# ")) {
      // skip title
    } else if (line.match(/^\d+\.\s/) || line.startsWith("- ")) {
      const cleanStep = line.replace(/^\d+\.\s*/, "").replace(/^-\s*/, "");
      currentList.push(cleanStep);
    } else if (line.trim() !== "") {
      if (currentList.length > 0) {
        paragraphs.push({ type: "list", content: JSON.stringify(currentList) });
        currentList = [];
      }
      paragraphs.push({ type: "text", content: line });
    }
  });

  if (currentList.length > 0) {
    paragraphs.push({ type: "list", content: JSON.stringify(currentList) });
  }

  const toggleStepCheck = (index: number) => {
    setCheckedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. EDITORIAL HEADER ── */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-b-forest via-b-forest-raised to-b-forest text-b-cream border-b border-b-forest-line px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Knowledge Base</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-b-cream transition-colors text-xs flex items-center gap-1.5 px-3 font-semibold"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                <span>{copied ? "Link Copied" : "Share"}</span>
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-xl border transition-colors ${
                  bookmarked
                    ? "bg-amber-500 text-b-forest border-amber-500 font-bold"
                    : "bg-white/10 text-b-cream border-white/15 hover:bg-white/20"
                }`}
              >
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <span>{category?.label || "Tutorial"}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-b-cream leading-tight">
              {tutorial.title}
            </h1>

            <p className="text-b-cream/80 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              {tutorial.summary}
            </p>
          </div>

          {/* Metadata Pill Strip */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-b-cream/70 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>3 min read</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Interactive SOP Guide</span>
            </span>
            <span>•</span>
            <span className="text-emerald-300 font-bold">Bouul Verified Tutorial</span>
          </div>
        </div>
      </section>

      {/* ── 2. TWO-COLUMN EDITORIAL CONTENT BODY ── */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Section Shortcuts (Table of Contents) */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-b-line bg-b-paper-raised p-5 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-b-ink-muted">
                <ListFilter className="h-4 w-4 text-emerald-600" />
                <span>Guide Jump Links</span>
              </div>

              <nav className="space-y-1.5 text-xs font-medium">
                {tutorial.sections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="block py-2 px-3 rounded-lg text-b-ink-muted hover:text-b-ink hover:bg-b-paper transition-all border border-transparent hover:border-b-line"
                  >
                    {sec}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Interactive Widget */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                <Zap className="h-4 w-4 text-emerald-600" />
                <span>Live Action Progress</span>
              </div>
              <p className="text-xs text-b-ink-muted leading-relaxed">
                Check off action items as you follow along on your Bouul Vendor Dashboard.
              </p>
              <div className="text-xs font-mono font-bold text-emerald-700">
                {Object.values(checkedSteps).filter(Boolean).length} items completed
              </div>
            </div>
          </aside>

          {/* Right Column: Editorial Tutorial Markdown Content */}
          <article className="lg:col-span-9 space-y-8">
            {paragraphs.map((block, idx) => {
              if (block.type === "heading") {
                const secIndex = tutorial.sections.findIndex((s) => s.toLowerCase() === block.content.toLowerCase());
                return (
                  <div key={idx} id={secIndex !== -1 ? `section-${secIndex}` : undefined} className="pt-4 scroll-mt-28">
                    <h2 className="font-display text-2xl font-extrabold text-b-ink flex items-center gap-2 border-b border-b-line pb-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{block.content}</span>
                    </h2>
                  </div>
                );
              }

              if (block.type === "list") {
                const listItems: string[] = JSON.parse(block.content);
                return (
                  <div key={idx} className="rounded-2xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-sm">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>Action Step Checklist</span>
                    </h3>

                    <div className="space-y-3">
                      {listItems.map((item, stepIdx) => {
                        const isChecked = checkedSteps[stepIdx] || false;
                        const cleanItem = item
                          .replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, "$1")
                          .replace(/\.md\b/g, "");

                        return (
                          <div
                            key={stepIdx}
                            onClick={() => toggleStepCheck(stepIdx)}
                            className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer ${
                              isChecked
                                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-900"
                                : "bg-b-paper border-b-line hover:border-b-ink/20 text-b-ink"
                            }`}
                          >
                            <div
                              className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                                isChecked
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-b-ink-muted/40 bg-b-paper"
                              }`}
                            >
                              {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-sm leading-relaxed font-medium ${isChecked ? "line-through opacity-75" : ""}`}>
                              {cleanItem}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Clean markdown links like [Text](path.md) to clean text and links
              let formattedContent = block.content
                .replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, "$1")
                .replace(/\.md\b/g, "");

              return (
                <p key={idx} className="text-b-ink text-base leading-relaxed font-sans">
                  {formattedContent}
                </p>
              );
            })}

            {/* ── 3. INTERACTIVE FEEDBACK & NEXT STEPS ── */}
            <div className="pt-8 border-t border-b-line space-y-8">
              {/* Feedback Rating */}
              <div className="rounded-2xl bg-b-paper-raised border border-b-line p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-b-ink text-base">Was this guide helpful?</h4>
                  <p className="text-xs text-b-ink-muted">Your feedback helps us keep the 55 Bouul tutorials up-to-date.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFeedbackGiven(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      feedbackGiven === true
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-b-paper text-b-ink border-b-line hover:border-b-ink/30"
                    }`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>Yes, helpful</span>
                  </button>
                  <button
                    onClick={() => setFeedbackGiven(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      feedbackGiven === false
                        ? "bg-b-ink text-b-paper border-b-ink"
                        : "bg-b-paper text-b-ink border-b-line hover:border-b-ink/30"
                    }`}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span>Could be better</span>
                  </button>
                </div>
              </div>

              {/* Related Guides Navigation */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-extrabold text-b-ink">
                  Continue Learning
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {TUTORIAL_CATEGORIES.flatMap((c) =>
                    c.tutorials.map((item) => ({ ...item, categoryId: c.id }))
                  )
                    .filter((t) => t.slug !== tutorial.slug)
                    .slice(0, 2)
                    .map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/tutorials/${rel.categoryId}/${rel.slug}`}
                        className="group rounded-xl border border-b-line bg-b-paper p-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Next Guide</span>
                          <h4 className="font-display font-bold text-sm text-b-ink group-hover:text-emerald-700 transition-colors mt-1">
                            {rel.title}
                          </h4>
                          <p className="text-xs text-b-ink-muted line-clamp-2 mt-1">{rel.summary}</p>
                        </div>
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-3">
                          <span>Read Guide</span>
                          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
