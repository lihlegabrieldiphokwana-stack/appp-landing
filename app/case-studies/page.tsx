import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { CaseStudiesHub } from "@/components/redesign/case-studies-hub";

export const metadata = {
  title: "Merchant Success Stories & Interactive ROI Calculator | Bouul",
  description: "Read real South African service pro success stories and calculate your annual savings using Bouul's flat 8% fee and escrow protection.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <CaseStudiesHub />
      <RedesignFooter />
    </main>
  );
}
