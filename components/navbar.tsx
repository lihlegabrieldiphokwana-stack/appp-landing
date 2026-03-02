"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#overview"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              Overview
            </a>
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              Features
            </a>
            <a
              href="#vendor"
              className="text-gray-400 hover:text-white transition-colors text-xs"
            >
              For Vendors
            </a>
            <a
              href="#download"
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full transition-colors text-xs"
            >
              Download
            </a>
          </div>

          {/* Spacer for mobile */}
          <div className="w-5 md:hidden" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#overview"
              className="block text-gray-400 hover:text-white transition-colors text-sm"
            >
              Overview
            </a>
            <a
              href="#features"
              className="block text-gray-400 hover:text-white transition-colors text-sm"
            >
              Features
            </a>
            <a
              href="#vendor"
              className="block text-gray-400 hover:text-white transition-colors text-sm"
            >
              For Vendors
            </a>
            <a
              href="#download"
              className="block w-full text-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full transition-colors text-sm"
            >
              Download
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
