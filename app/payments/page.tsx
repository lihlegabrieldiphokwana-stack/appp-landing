import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { PaymentsHub } from "@/components/redesign/payments-hub";

export const metadata = {
  title: "Escrow Payments & Payouts Architecture | Bouul",
  description: "Learn how Bouul 100% digital escrow locks funds safely, guarantees zero unpaid contractor invoices, and offers instant SA bank payouts with flat 8% fees.",
};

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <PaymentsHub />
      <RedesignFooter />
    </main>
  );
}
