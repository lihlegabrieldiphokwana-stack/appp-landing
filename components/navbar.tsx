"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CityDetector } from "@/components/city-detector";

type Mode = "consumer" | "vendor" | "employee";

function getMode(pathname: string): Mode {
  if (pathname.startsWith("/vendors")) return "vendor";
  if (pathname.startsWith("/employees")) return "employee";
  return "consumer";
}

const MODE_LABELS: Record<Mode, string> = {
  consumer: "Consumer",
  vendor: "Vendor",
  employee: "Employee",
};

const MODE_HREFS: Record<Mode, string> = {
  consumer: "/",
  vendor: "/vendors",
  employee: "/employees",
};

interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export const Navbar = () => {
  const pathname = usePathname();
  const mode = getMode(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"learn" | "company" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Desktop links per mode ─────────────────────────────────────────────
  const desktopLinks: NavLink[] = (() => {
    switch (mode) {
      case "vendor":
        return [
          { href: "/vendors", label: "Dashboard" },
          { href: "/vendors#pricing", label: "Pricing" },
          { href: "/vendors#categories", label: "Categories" },
        ];
      case "employee":
        return [
          { href: "/employees#workboard", label: "Workboard" },
          { href: "/employees#schedule", label: "Schedule" },
          { href: "/employees#assignments", label: "Assignments" },
        ];
      default:
        return [
          {
            href: "/services",
            label: "Services",
            icon: (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            ),
          },
          { href: "/safety", label: "Safety" },
          { href: "/vendors", label: "For Vendors" },
          { href: "/employees", label: "For Employees" },
        ];
    }
  })();

  // ── Mobile links per mode ──────────────────────────────────────────────
  const mobileLinks: NavLink[] = (() => {
    switch (mode) {
      case "vendor":
        return [
          { href: "/vendors", label: "Dashboard" },
          { href: "/vendors#pricing", label: "Pricing" },
          { href: "/vendors#categories", label: "Categories" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
          { href: "/faq", label: "FAQ" },
        ];
      case "employee":
        return [
          { href: "/employees#workboard", label: "Workboard" },
          { href: "/employees#schedule", label: "Schedule" },
          { href: "/employees#assignments", label: "Assignments" },
          { href: "/about", label: "About" },
          { href: "/faq", label: "FAQ" },
        ];
      default:
        return [
          { href: "/services", label: "Services" },
          { href: "/safety", label: "Safety" },
          { href: "/vendors", label: "For Vendors" },
          { href: "/employees", label: "For Employees" },
          { href: "/learn", label: "Learn" },
          { href: "/cities", label: "Cities" },
          { href: "/faq", label: "FAQ" },
        ];
    }
  })();

  // ── CTA per mode ───────────────────────────────────────────────────────
  const cta =
    mode === "vendor"
      ? { href: "/download", label: "List Your Business" }
      : mode === "employee"
        ? { href: "/download", label: "Download App" }
        : { href: "/download", label: "Download" };

  // ── Back link (vendor/employee modes show a return link) ───────────────
  const showBackLink = mode !== "consumer";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-mode-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-50 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <Image src="/bouul-logo.png" alt="Bouul" width={32} height={32} className="object-cover" />
            </div>
            <span className="text-slate-50 font-semibold text-lg hidden md:block">Bouul</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
            {/* Back to Marketplace link for vendor/employee modes */}
            {showBackLink && (
              <Link
                href="/"
                className="text-slate-500 hover:text-slate-300 transition-colors text-xs flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Marketplace
              </Link>
            )}

            {desktopLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-slate-400 hover:text-slate-50 transition-colors text-xs flex items-center gap-1.5"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}

            {/* Learn dropdown (consumer only) */}
            {mode === "consumer" && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("learn")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="text-slate-400 hover:text-slate-50 transition-colors text-xs flex items-center gap-1"
                  onFocus={() => setActiveDropdown("learn")}
                  onBlur={() => setActiveDropdown(null)}
                  type="button"
                >
                  Learn
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "learn" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-mode-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {[
                          ["/about", "About Bouul"],
                          ["/use-cases", "Use Cases"],
                          ["/newsroom", "Newsroom"],
                          ["/cities", "Cities"],
                          ["/policies", "Policy Hub"],
                          ["/faq", "FAQ"],
                        ].map(([href, label]) => (
                          <Link
                            key={href}
                            href={href}
                            className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-slate-50 hover:bg-mode-surface transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Company dropdown (consumer + vendor) */}
            {mode !== "employee" && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="text-slate-400 hover:text-slate-50 transition-colors text-xs flex items-center gap-1"
                  onFocus={() => setActiveDropdown("company")}
                  onBlur={() => setActiveDropdown(null)}
                  type="button"
                >
                  Company
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "company" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-mode-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {[
                          ["/contact", "Contact"],
                          ["/support", "Support"],
                          ["/careers", "Careers"],
                          ["/press", "Press"],
                          ["/status", "Status"],
                        ].map(([href, label]) => (
                          <Link
                            key={href}
                            href={href}
                            className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-slate-50 hover:bg-mode-surface transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Right side: mode pills + CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
            {/* Mode switcher pills */}
            <div className="flex items-center gap-0.5 rounded-full border border-mode-border bg-mode-surface p-0.5">
              {(Object.keys(MODE_LABELS) as Mode[]).map((m) => (
                <Link
                  key={m}
                  href={MODE_HREFS[m]}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors",
                    m === mode
                      ? "bg-mode-accent text-mode-cta-text"
                      : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  {MODE_LABELS[m]}
                </Link>
              ))}
            </div>

            {mode === "consumer" && <CityDetector compact />}

            <Link
              href={cta.href}
              className="px-4 py-1.5 bg-mode-accent hover:bg-mode-accent-bright text-mode-cta-text font-medium rounded-full transition-colors text-xs"
            >
              {cta.label}
            </Link>
          </div>

          {/* Spacer for mobile */}
          <div className="w-5 md:hidden" />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-mode-border"
          >
            <div className="px-6 py-4 space-y-4">
              {/* Mode switcher (mobile) */}
              <div className="flex items-center gap-1 rounded-full border border-mode-border bg-mode-surface p-1">
                {(Object.keys(MODE_LABELS) as Mode[]).map((m) => (
                  <Link
                    key={m}
                    href={MODE_HREFS[m]}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex-1 text-center py-1.5 rounded-full text-xs font-medium transition-colors",
                      m === mode
                        ? "bg-mode-accent text-mode-cta-text"
                        : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {MODE_LABELS[m]}
                  </Link>
                ))}
              </div>

              {mode === "consumer" && (
                <div className="pb-4 border-b border-mode-border">
                  <CityDetector />
                </div>
              )}

              {/* Back link (mobile) */}
              {showBackLink && (
                <Link
                  href="/"
                  className="block text-slate-500 hover:text-slate-300 transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ← Back to Marketplace
                </Link>
              )}

              {mobileLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-slate-400 hover:text-slate-50 transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={cta.href}
                className="block w-full text-center px-4 py-2 bg-mode-accent hover:bg-mode-accent-bright text-mode-cta-text font-medium rounded-full transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
