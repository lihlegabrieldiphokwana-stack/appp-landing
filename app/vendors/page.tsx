import { Suspense } from "react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  VendorExperience,
  VendorOperating,
  VendorMoney,
  VendorTrust,
  VendorCta,
} from "@/components/redesign/vendor-experience";

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <Suspense fallback={<div className="min-h-[60vh] bg-b-paper" />}>
        <VendorExperience />
      </Suspense>
      <VendorOperating />
      <VendorMoney />
      <VendorTrust />
      <VendorCta />
      <RedesignFooter />
    </main>
  );
}
