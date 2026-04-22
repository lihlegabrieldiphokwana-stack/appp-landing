import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  excerpt,
  fetchSupabaseRow,
  metadataImages,
  PublicDeepLinkPage,
  publicImageUrl,
  type VendorPreview,
} from "@/lib/public-deep-link";

type ServiceRow = {
  id: string;
  name: string;
  description: string | null;
  price: number | string | null;
  currency: string | null;
  duration_minutes: number | null;
  avg_rating: number | null;
  images: string[] | string | null;
  thumb_webp: string | null;
  thumb_jpg: string | null;
  service_categories: string[] | null;
  vendors: VendorPreview | null;
};

async function getService(serviceId: string) {
  return fetchSupabaseRow<ServiceRow>("services", {
    select:
      "id,name,description,price,currency,duration_minutes,avg_rating,images,thumb_webp,thumb_jpg,service_categories,vendors(business_name,handle,logo,is_verified)",
    id: `eq.${serviceId}`,
    is_active: "eq.true",
  });
}

function serviceImage(service: ServiceRow | null) {
  if (!service) return null;
  if (service.thumb_webp) return publicImageUrl(service.thumb_webp);
  if (service.thumb_jpg) return publicImageUrl(service.thumb_jpg);
  if (Array.isArray(service.images)) return publicImageUrl(service.images[0]);
  return publicImageUrl(service.images);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getService(serviceId);
  const title = service?.name ?? "Bouul service";
  const description = excerpt(
    service?.description,
    "Open this Bouul service to view pricing, availability, reviews, and booking options.",
  );
  const image = serviceImage(service);

  return {
    title,
    description,
    alternates: { canonical: `https://bouul.com/service/${serviceId}` },
    openGraph: {
      type: "website",
      url: `https://bouul.com/service/${serviceId}`,
      title,
      description,
      images: metadataImages(image),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["/optimized/hero-banner-desktop.jpg"],
    },
  };
}

export default async function PublicServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = await getService(serviceId);
  if (!service) notFound();

  const stats = [
    service.price != null
      ? `${service.currency ?? "ZAR"} ${Number(service.price).toFixed(0)}`
      : null,
    service.duration_minutes ? `${service.duration_minutes} min` : null,
    service.avg_rating ? `${Number(service.avg_rating).toFixed(1)} rating` : null,
  ].filter((item): item is string => Boolean(item));

  return (
    <PublicDeepLinkPage
      eyebrow="Bouul service"
      title={service.name}
      description={excerpt(
        service.description,
        "Open this Bouul service to view pricing, availability, reviews, and booking options.",
      )}
      canonicalUrl={`https://bouul.com/service/${service.id}`}
      appUrl={`appp://appp.com/service/${service.id}`}
      imageUrl={serviceImage(service)}
      vendor={service.vendors}
      stats={stats}
      tags={service.service_categories ?? []}
      primaryAction="Open service"
    />
  );
}
