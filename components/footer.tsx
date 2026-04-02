"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
              </div>
              <span className="text-white font-bold text-xl">Bouul</span>
            </div>
            <p className="text-neutral-500 text-sm mb-4">
              The hyper-local marketplace for services and professionals.
            </p>
            <div className="flex gap-4">
              <span className="text-neutral-600 text-sm">
                Social links coming soon.
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-neutral-500 hover:text-white transition-colors text-sm">Service Discovery</Link></li>
              <li><Link href="/use-cases" className="text-neutral-500 hover:text-white transition-colors text-sm">Use Cases</Link></li>
              <li><Link href="/vendors" className="text-neutral-500 hover:text-white transition-colors text-sm">For Professionals</Link></li>
              <li><Link href="/about" className="text-neutral-500 hover:text-white transition-colors text-sm">About Bouul</Link></li>
              <li><Link href="/download" className="text-neutral-500 hover:text-white transition-colors text-sm">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-neutral-500 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link href="/support" className="text-neutral-500 hover:text-white transition-colors text-sm">Support</Link></li>
              <li><Link href="/careers" className="text-neutral-500 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="/newsroom" className="text-neutral-500 hover:text-white transition-colors text-sm">Newsroom</Link></li>
              <li><Link href="/press" className="text-neutral-500 hover:text-white transition-colors text-sm">Press</Link></li>
              <li><Link href="/status" className="text-neutral-500 hover:text-white transition-colors text-sm">Status</Link></li>
              <li><Link href="/city/johannesburg" className="text-neutral-500 hover:text-white transition-colors text-sm">City Coverage</Link></li>
              <li><Link href="/vendors" className="text-neutral-500 hover:text-white transition-colors text-sm">Vendor Stories</Link></li>
              <li><a href="mailto:support@bouul.com" className="text-neutral-500 hover:text-white transition-colors text-sm">Email support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Policies</h4>
            <ul className="space-y-2">
              <li><Link href="/policies" className="text-neutral-500 hover:text-white transition-colors text-sm">Policy Hub</Link></li>
              <li><Link href="/safety" className="text-neutral-500 hover:text-white transition-colors text-sm">Trust & Safety</Link></li>
              <li><Link href="/privacy" className="text-neutral-500 hover:text-white transition-colors text-sm">Privacy</Link></li>
              <li><Link href="/terms" className="text-neutral-500 hover:text-white transition-colors text-sm">Terms</Link></li>
              <li><Link href="/community-guidelines" className="text-neutral-500 hover:text-white transition-colors text-sm">Community Guidelines</Link></li>
              <li><Link href="/faq" className="text-neutral-500 hover:text-white transition-colors text-sm">Help Centre</Link></li>
              <li><a href="mailto:support@bouul.com" className="text-neutral-500 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Bouul. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/safety" className="text-neutral-600 hover:text-white transition-colors text-sm">
              Trust & Safety
            </Link>
            <Link href="/privacy" className="text-neutral-600 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-neutral-600 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-white transition-colors text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
