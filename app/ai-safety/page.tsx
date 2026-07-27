import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { AISafetyHub } from "@/components/redesign/ai-safety-hub";

export const metadata = {
  title: "AI Safety, Ethics & Merchant Veto Controls | Bouul",
  description: "Discover Bouul's Zola AI safety architecture, including the 5-minute merchant veto window, zero price hallucination guardrails, and POPIA privacy protection.",
};

export default function AISafetyPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <AISafetyHub />
      <RedesignFooter />
    </main>
  );
}
