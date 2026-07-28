"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  desc: string;
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const navCategories: NavCategory[] = [
  {
    title: "Services",
    items: [
      { href: "/services", label: "Find Services", desc: "Browse verified local trade pros" },
      { href: "/tutorials", label: "Interactive Guides", desc: "55 step-by-step app tutorials" },
      { href: "/trophies", label: "Trophy System", desc: "Gamified reward badges" },
    ],
  },
  {
    title: "Platform",
    items: [
      { href: "/zola", label: "Zola AI Assistant", desc: "DeepSeek V4 automated booking" },
      { href: "/resonance", label: "Resonance AI Engine", desc: "7-signal personalized feed engine" },
      { href: "/intelligent-search", label: "Intelligent AI Search", desc: "SA slang & multi-lingual vector search" },
      { href: "/payments", label: "Escrow Payments", desc: "100% deposit protection & SA payouts" },
      { href: "/ai-safety", label: "AI Safety & Veto", desc: "5-min merchant veto window" },
    ],
  },
  {
    title: "For Pros",
    items: [
      { href: "/vendors", label: "Merchant Overview", desc: "Free leads & 8% commission only" },
      { href: "/vendors/business", label: "Vendor & Team Suite", desc: "Kanban board & employee dispatch" },
      { href: "/case-studies", label: "Merchant Stories & ROI", desc: "Real SA business success stories" },
    ],
  },
  {
    title: "Trust & Help",
    items: [
      { href: "/verification", label: "Pro Verification Center", desc: "ID biometrics & trade license checks" },
      { href: "/disputes", label: "Dispute Resolution", desc: "48-hour evidence review protocol" },
      { href: "/about", label: "About Bouul", desc: "Our mission & story" },
      { href: "/faq", label: "Help Centre & FAQ", desc: "Common questions answered" },
    ],
  },
];

export function RedesignNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark top hero detection (e.g. /zola, /$handle, /handle, /pro, /resonance)
  const isDarkTop =
    !scrolled &&
    Boolean(
      pathname?.startsWith("/zola") ||
        pathname?.startsWith("/$") ||
        pathname?.startsWith("/handle") ||
        pathname?.startsWith("/pro") ||
        pathname?.startsWith("/resonance"),
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "border-b-line bg-b-paper-raised/95 shadow-[0_8px_30px_rgba(24,39,32,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight transition-colors duration-300 group",
            isDarkTop ? "text-b-cream" : "text-b-ink",
          )}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/bouul-logo.png"
              alt="Bouul Logo Mark"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span>
            bouul
            <span className={cn("transition-colors duration-300", isDarkTop ? "text-b-sun" : "text-b-green")}>
              .
            </span>
          </span>
        </Link>

        {/* Desktop Categorized Sub-Nav Bar */}
        <div className="hidden items-center gap-1 md:flex">
          {navCategories.map((category) => (
            <div
              key={category.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(category.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none cursor-pointer min-h-[44px]",
                  activeDropdown === category.title
                    ? isDarkTop
                      ? "bg-white/20 text-white"
                      : "bg-b-paper-deep text-b-ink"
                    : isDarkTop
                    ? "text-b-cream/80 hover:bg-white/10 hover:text-white"
                    : "text-b-ink-soft hover:bg-b-paper-deep/60 hover:text-b-ink",
                )}
              >
                <span>{category.title}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === category.title && "rotate-180",
                    isDarkTop ? "text-b-sun" : "text-b-green-deep",
                  )}
                />
              </button>

              {/* Sub-Nav Flyout Menu */}
              <AnimatePresence>
                {activeDropdown === category.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl border border-b-line bg-b-paper-raised p-2 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex flex-col gap-0.5">
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group/item rounded-xl p-3 transition-colors hover:bg-b-paper-deep"
                        >
                          <div className="font-display text-xs font-bold text-b-ink group-hover/item:text-b-green-deep">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-b-ink-faint leading-snug mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all shadow-md md:inline-flex cursor-pointer min-h-[44px] items-center justify-center gap-2",
              isDarkTop
                ? "bg-b-sun text-b-ink hover:bg-amber-300"
                : "bg-b-ink text-b-paper hover:bg-b-forest",
            )}
          >
            <img src="/bouul-logo-mark.svg" alt="" className="h-4 w-4 shrink-0" />
            <span>Get the app</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "rounded-full p-3 md:hidden cursor-pointer min-h-[44px] transition-colors",
              isDarkTop ? "text-b-cream" : "text-b-ink",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-b-line bg-b-paper-raised p-5 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navCategories.map((category) => (
                <div key={category.title} className="space-y-2">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-b-green-deep px-2">
                    {category.title}
                  </div>
                  <div className="flex flex-col gap-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-b-ink hover:bg-b-paper-deep transition-colors"
                      >
                        <div>{item.label}</div>
                        <div className="text-[11px] text-b-ink-faint font-normal">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-b-ink py-3.5 text-center text-sm font-semibold text-b-paper"
              >
                <img src="/bouul-logo-mark.svg" alt="" className="h-4 w-4 shrink-0" />
                <span>Get the app</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

