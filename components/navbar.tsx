"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CityDetector } from "@/components/city-detector";

export const Navbar = () => {
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-semibold text-lg hidden md:block">
              Bouul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Services
            </Link>
            <Link
              href="/safety"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              Safety
            </Link>
            <Link
              href="/vendors"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              For Vendors
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("learn")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
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
                    className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-neutral-800 bg-black/95 backdrop-blur-xl shadow-2xl overflow-hidden"
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
                          className="block rounded-xl px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
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
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
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
                    className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-neutral-800 bg-black/95 backdrop-blur-xl shadow-2xl overflow-hidden"
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
                          className="block rounded-xl px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
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
            <Link
              href="/faq"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0 ml-auto">
            <CityDetector compact />
            <Link
              href="/download"
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full transition-colors text-xs"
            >
              Download
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="pb-4 border-b border-neutral-800">
                <CityDetector />
              </div>
              <Link
                href="/services"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/safety"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Safety
              </Link>
              <Link
                href="/vendors"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Vendors
              </Link>
              <Link
                href="/learn"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/cities"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cities
              </Link>
              <Link
                href="/faq"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/download"
                className="block w-full text-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
