"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Find services" },
  { href: "/zola", label: "Zola AI" },
  { href: "/zola/business", label: "Zola Business" },
  { href: "/vendors/business", label: "Vendor & Team Suite" },
  { href: "/trophies", label: "Trophy System" },
  { href: "/vendors", label: "For pros" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "Help" },
];

export function RedesignNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "border-b-line bg-b-paper-raised/90 shadow-[0_8px_30px_rgba(24,39,32,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          className="font-display text-2xl font-extrabold tracking-tight text-b-ink"
        >
          bouul<span className="text-b-green">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-b-ink-soft transition-colors hover:bg-b-paper-deep hover:text-b-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="hidden rounded-full bg-b-ink px-5 py-2.5 text-sm font-semibold text-b-paper transition-colors hover:bg-b-forest md:inline-block"
          >
            Get the app
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-3 text-b-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-b-line bg-b-paper-raised p-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-b-ink-soft hover:bg-b-paper-deep hover:text-b-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-b-ink px-4 py-3.5 text-center text-sm font-semibold text-b-paper"
            >
              Get the app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
