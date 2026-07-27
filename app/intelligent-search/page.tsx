import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { IntelligentSearchHub } from "@/components/redesign/intelligent-search-hub";

export const metadata = {
  title: "AI Intelligent Search Architecture | Bouul",
  description: "Learn how Bouul AI search normalizes South African slang, parses isiZulu, Afrikaans, and Sotho inputs, and matches you with real-time GPS dispatched pros.",
};

export default function IntelligentSearchPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <IntelligentSearchHub />
      <RedesignFooter />
    </main>
  );
}
