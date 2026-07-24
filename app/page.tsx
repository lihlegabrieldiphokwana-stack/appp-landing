import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { RedesignHero } from "@/components/redesign/hero";
import { ServiceTicker } from "@/components/redesign/marquee";
import { HowItWorks } from "@/components/redesign/how-it-works";
import { SearchFeature } from "@/components/redesign/search-feature";
import { ZolaFeature } from "@/components/redesign/zola-feature";
import { TrustFeature } from "@/components/redesign/trust-feature";
import { VendorTeaser } from "@/components/redesign/vendor-teaser";
import { DownloadCta } from "@/components/redesign/download-cta";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <RedesignHero />
      <ServiceTicker />
      <HowItWorks />
      <SearchFeature />
      <ZolaFeature />
      <TrustFeature />
      <VendorTeaser />
      <DownloadCta />
      <RedesignFooter />
    </main>
  );
}
