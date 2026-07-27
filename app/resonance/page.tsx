import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { ResonanceEngine } from "@/components/resonance-engine";
import { ResonanceShowcaseHub } from "@/components/redesign/resonance-showcase-hub";

export const metadata = {
  title: "Resonance™ Recommendation & Discovery Engine | Bouul",
  description: "Explore Bouul's revolutionary Resonance AI recommendation engine: 7-signal real-time fusion, epsilon-greedy multi-armed bandit sampling, and Keystone Discovery parallel creative testing.",
};

export default function ResonancePage() {
  return (
    <main className="min-h-screen bg-black text-white font-body">
      <RedesignNav />
      <ResonanceShowcaseHub />
      <ResonanceEngine />
      <RedesignFooter />
    </main>
  );
}
