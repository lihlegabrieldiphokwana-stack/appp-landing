"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CityDetector } from "@/components/city-detector";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
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

          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-semibold text-lg hidden md:block">
              Bouul
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <CityDetector compact />
            <div className="relative group">
              <button className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                Services
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2">
                  <Link href="/category/plumbers" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Plumbers</Link>
                  <Link href="/category/electricians" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Electricians</Link>
                  <Link href="/category/cleaners" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Cleaners</Link>
                  <Link href="/category/beauty" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Beauty</Link>
                  <Link href="/category/builders" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Builders</Link>
                  <Link href="/category/tutors" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-neutral-800 text-xs">Tutors</Link>
                </div>
              </div>
            </div>
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
            <Link
              href="/faq"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              FAQ
            </Link>
            <Link
              href="#download"
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
              <div>
                <div className="text-gray-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-2">
                  <Link href="/category/plumbers" className="block text-gray-500 hover:text-white transition-colors text-sm">Plumbers</Link>
                  <Link href="/category/electricians" className="block text-gray-500 hover:text-white transition-colors text-sm">Electricians</Link>
                  <Link href="/category/cleaners" className="block text-gray-500 hover:text-white transition-colors text-sm">Cleaners</Link>
                  <Link href="/category/beauty" className="block text-gray-500 hover:text-white transition-colors text-sm">Beauty</Link>
                  <Link href="/category/builders" className="block text-gray-500 hover:text-white transition-colors text-sm">Builders</Link>
                  <Link href="/category/tutors" className="block text-gray-500 hover:text-white transition-colors text-sm">Tutors</Link>
                </div>
              </div>
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
                href="/faq"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#download"
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
