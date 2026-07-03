import { Navbar } from "@/components/bouul/navbar";
import { Footer } from "@/components/bouul/footer";
import {
  Hero, TrustStrip, HowItWorks,
  SearchFeature, BookingFeature, ZolaFeature, SocialFeature,
  TrustSafetyBento, ProTeaser, Testimonials, DownloadCTA,
} from "@/components/bouul/sections";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bouul-bg">
      <Navbar />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <SearchFeature />
      <BookingFeature />
      <ZolaFeature />
      <SocialFeature />
      <TrustSafetyBento />
      <ProTeaser />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
