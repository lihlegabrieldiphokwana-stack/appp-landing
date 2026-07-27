import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { DisputesHub } from "@/components/redesign/disputes-hub";

export const metadata = {
  title: "Dispute Resolution & Fair Escrow Governance | Bouul",
  description: "Learn how Bouul handles customer & contractor disputes with 48-hour evidence uploads, escrow freezes, and trade jury signoffs.",
};

export default function DisputesPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <DisputesHub />
      <RedesignFooter />
    </main>
  );
}
