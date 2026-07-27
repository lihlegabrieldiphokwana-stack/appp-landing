import { Metadata } from "next";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { TutorialsHub } from "@/components/redesign/tutorials-hub";

export const metadata: Metadata = {
  title: "Tutorials & Knowledge Base | Bouul",
  description:
    "Explore 55+ step-by-step guides for running your service business on Bouul. Learn how to launch your storefront, dispatch staff, track inventory, protect earnings with escrow, and use Zola AI.",
};

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <TutorialsHub />
      <RedesignFooter />
    </main>
  );
}
