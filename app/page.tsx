"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { AppleHero } from "@/components/apple-hero";
import { ProductShowcase } from "@/components/product-showcase";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <AppleHero />
      <ProductShowcase />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
