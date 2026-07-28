"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, ArrowRight, Sparkles, Compass, ShieldCheck, Lock } from "lucide-react";
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

/* ─── Mobile Section Peek Quick Search Data ─────────────────────────────── */

const PEEK_SECTIONS = [
  { label: "Three steps to done", href: "/#how-it-works", category: "Homepage Section", desc: "Step-by-step booking journey" },
  { label: "Two feeds, one homepage", href: "/#two-feeds", category: "Homepage Section", desc: "Discovery & Following feeds" },
  { label: "Search that gets you", href: "/#search", category: "Homepage Section", desc: "11 SA languages & AI search" },
  { label: "Glimpses short-content", href: "/#glimpses", category: "Homepage Section", desc: "Short video & photo feed" },
  { label: "Escrow & Payouts Hub", href: "/payments", category: "Payments", desc: "100% deposit protection" },
  { label: "For Customers & Users", href: "/payments/for-users", category: "Payments", desc: "Customer money-back guarantee" },
  { label: "For Vendors & Pros", href: "/payments/for-vendors", category: "Payments", desc: "Instant SA bank payouts" },
  { label: "Refunds & Disputes", href: "/payments/refunds-and-disputes", category: "Payments", desc: "Resolution rules & policies" },
  { label: "Invoices & Billing", href: "/payments/billing-and-invoices", category: "Payments", desc: "Automated PDF tax invoices" },
  { label: "Taxes & 1099 / SARS", href: "/payments/taxes-and-1099", category: "Payments", desc: "Annual earnings export" },
  { label: "Connect & Integrations", href: "/payments/connect-and-integrations", category: "Payments", desc: "Xero & Sage accounting sync" },
  { label: "Atlas Security Infrastructure", href: "/payments/atlas-infrastructure", category: "Payments", desc: "PCI-DSS Level 1 & AES-256" },
  { label: "Pro Verification Center", href: "/verification", category: "Trust", desc: "CIPC & ID checks" },
  { label: "All Services Directory", href: "/services", category: "Services", desc: "Search local pros by trade" },
];

export function RedesignNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [peekSearchOpen, setPeekSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkTop =
    !scrolled &&
    Boolean(
      pathname?.startsWith("/zola") ||
        pathname?.startsWith("/$") ||
        pathname?.startsWith("/handle") ||
        pathname?.startsWith("/pro") ||
        pathname?.startsWith("/resonance"),
    );

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return PEEK_SECTIONS;
    const q = searchQuery.toLowerCase();
    return PEEK_SECTIONS.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setPeekSearchOpen(false);
    setSearchQuery("");
  };

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

        {/* Action Controls & Mobile Trigger */}
        <div className="flex items-center gap-2">
          {/* Mobile Quick Section Search & Peek Button */}
          <button
            type="button"
            onClick={() => setPeekSearchOpen(true)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all md:hidden border shadow-xs cursor-pointer min-h-[40px]",
              isDarkTop
                ? "border-white/20 bg-white/10 text-b-cream hover:bg-white/20"
                : "border-b-line bg-b-paper text-b-ink hover:bg-b-paper-deep",
            )}
          >
            <Search className="h-3.5 w-3.5 text-b-green-deep" />
            <span>Peek</span>
          </button>

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
              "rounded-full p-2.5 md:hidden cursor-pointer min-h-[44px] transition-colors",
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
              {/* Quick Jump Search Input inside Mobile Menu */}
              <div
                onClick={() => setPeekSearchOpen(true)}
                className="flex items-center gap-2.5 rounded-xl border border-b-line bg-b-paper px-3.5 py-2.5 shadow-inner cursor-pointer"
              >
                <Search className="h-4 w-4 text-b-green-deep shrink-0" />
                <span className="text-xs text-b-ink-soft font-semibold">
                  Search & peek all page sections...
                </span>
              </div>

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
                        onClick={() => handleNavClick(item.href)}
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

      {/* Mobile Section Peek & Quick Search Sheet Overlay */}
      <AnimatePresence>
        {peekSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-b-ink/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="w-full max-w-lg rounded-3xl border border-b-line bg-b-paper-raised p-5 shadow-2xl max-h-[80vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-b-line">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-b-green-deep" />
                  <span className="font-display font-bold text-b-ink text-base">
                    Section Peek & Quick Finder
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPeekSearchOpen(false)}
                  className="rounded-full p-1.5 text-b-ink-soft hover:bg-b-paper-deep"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search Filter Bar */}
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-b-line bg-b-paper px-4 py-3 shadow-inner">
                <Search className="h-4 w-4 text-b-green-deep shrink-0" />
                <input
                  type="text"
                  placeholder="Filter sections (e.g. escrow, 3 steps, disputes)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-xs font-semibold text-b-ink outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-b-ink-faint hover:text-b-ink"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filtered Section List */}
              <div className="mt-4 overflow-y-auto space-y-2 pr-1 flex-1">
                {filteredSections.map((sec) => (
                  <Link
                    key={sec.href}
                    href={sec.href}
                    onClick={() => handleNavClick(sec.href)}
                    className="flex items-center justify-between rounded-2xl border border-b-line/60 bg-b-paper p-3.5 transition-all hover:border-b-green-deep/40 hover:bg-b-sun-soft/50 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-b-paper-deep px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-b-green-deep">
                          {sec.category}
                        </span>
                        <h4 className="font-display font-bold text-b-ink text-xs group-hover:text-b-green-deep transition-colors">
                          {sec.label}
                        </h4>
                      </div>
                      <p className="text-[11px] text-b-ink-soft mt-1">
                        {sec.desc}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-b-ink-faint group-hover:text-b-green-deep transition-colors shrink-0" />
                  </Link>
                ))}

                {filteredSections.length === 0 && (
                  <div className="p-6 text-center text-xs text-b-ink-soft">
                    No matching sections found for &quot;{searchQuery}&quot;. Try &quot;escrow&quot; or &quot;steps&quot;.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}


