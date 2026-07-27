import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { VerificationHub } from "@/components/redesign/verification-hub";

export const metadata = {
  title: "Pro Verification & Safety Center | Bouul",
  description: "Learn how Bouul verifies South African trade contractors with SA ID biometrics, CIPC registration, PIRB plumbing, and Wireman electrical license checks.",
};

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <VerificationHub />
      <RedesignFooter />
    </main>
  );
}
