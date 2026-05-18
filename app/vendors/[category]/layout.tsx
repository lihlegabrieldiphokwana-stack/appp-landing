import type { Metadata } from "next";
import { vendorCategories } from "@/lib/vendor-categories-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = vendorCategories.find((c) => c.slug === slug);
  const name = category?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${name} — Vendor Services`,
    description: category?.categoryBenefit ?? `Join Bouul as a ${name.toLowerCase()} professional. Set your rates, manage bookings, and grow your business.`,
    openGraph: {
      title: `${name} Professionals on Bouul`,
      description: category?.categoryBenefit ?? `Discover how ${name.toLowerCase()} professionals grow with Bouul.`,
    },
  };
}

export default function VendorCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
