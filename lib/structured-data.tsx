import React from "react";
import { JSONLDType, LocalBusinessSchema, ServiceSchema, ProductSchema, FAQPageSchema, ReviewSchema, PersonSchema } from "@/lib/schema-types";

/**
 * Schema.org Structured Data Generator
 * 
 * Generates JSON-LD structured data for SEO optimization.
 * Used for LocalBusiness, Service, Product, FAQ, Review, and Person schemas.
 * 
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

const BASE_URL = "https://bouul.com";

/**
 * Generate LocalBusiness schema for homepage
 */
export const generateLocalBusinessSchema = (): LocalBusinessSchema => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bouul",
  description: "Hyper-local services marketplace connecting you with trusted professionals in your area. Book plumbers, electricians, cleaners, and more.",
  url: BASE_URL,
  logo: `${BASE_URL}/bouul-logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  telephone: "+27-11-123-4567",
  email: "support@bouul.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "R50 - R5000",
  sameAs: [
    "https://facebook.com/bouul",
    "https://twitter.com/bouul",
    "https://instagram.com/bouul",
    "https://linkedin.com/company/bouul",
  ],
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauty" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gardening" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2847",
  },
});

/**
 * Generate Service schema for category pages
 */
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  image?: string;
  priceRange?: string;
  areaServed?: string[];
}): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  image: service.image ? [service.image] : undefined,
  serviceType: service.name,
  provider: {
    "@type": "LocalBusiness",
    name: "Bouul",
  },
  areaServed: service.areaServed?.map(city => ({
    "@type": "City",
    name: city,
  })),
  offers: {
    "@type": "Offer",
    priceCurrency: "ZAR",
    price: service.priceRange || "350",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} Services`,
  },
});

/**
 * Generate Product schema for subscription pages
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  priceCurrency?: string;
  availability?: string;
  image?: string;
}): ProductSchema => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image ? [product.image] : undefined,
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.priceCurrency || "ZAR",
    availability: product.availability || "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
  },
});

/**
 * Generate FAQPage schema for FAQ pages
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>): FAQPageSchema => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Generate Review schema for professional reviews
 */
export const generateReviewSchema = (review: {
  author: string;
  rating: number;
  date: string;
  text: string;
  professionalName: string;
}): ReviewSchema => ({
  "@context": "https://schema.org",
  "@type": "Review",
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody: review.text,
  datePublished: review.date,
  itemReviewed: {
    "@type": "ProfessionalService",
    name: review.professionalName,
  },
});

/**
 * Generate Person schema for professional profiles
 */
export const generatePersonSchema = (professional: {
  name: string;
  jobTitle: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  telephone?: string;
  email?: string;
  address?: { city: string; region: string };
  skills?: string[];
  yearsOfExperience?: number;
}): PersonSchema => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: professional.name,
  jobTitle: professional.jobTitle,
  image: professional.image ? [professional.image] : undefined,
  description: professional.description,
  telephone: professional.telephone,
  email: professional.email,
  address: professional.address ? {
    "@type": "PostalAddress",
    addressLocality: professional.address.city,
    addressRegion: professional.address.region,
    addressCountry: "ZA",
  } : undefined,
  hasOccupation: {
    "@type": "Occupation",
    name: professional.jobTitle,
    estimatedSalary: {
      "@type": "MonetaryAmount",
      currency: "ZAR",
      unitText: "hour",
    },
    skills: professional.skills,
    yearsOfExperience: professional.yearsOfExperience?.toString(),
  },
  aggregateRating: professional.rating ? {
    "@type": "AggregateRating",
    ratingValue: professional.rating.toString(),
    reviewCount: professional.reviewCount?.toString() || "0",
    bestRating: "5",
    worstRating: "1",
  } : undefined,
});

/**
 * Generate BreadcrumbList schema for navigation
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = (): JSONLDType => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bouul",
  url: BASE_URL,
  logo: `${BASE_URL}/bouul-logo.png`,
  description: "Hyper-local services marketplace connecting customers with trusted professionals.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Bouul Team",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@bouul.com",
    telephone: "+27-11-123-4567",
    availableLanguage: ["English", "Afrikaans", "Zulu", "Xhosa"],
  },
  sameAs: [
    "https://facebook.com/bouul",
    "https://twitter.com/bouul",
    "https://instagram.com/bouul",
    "https://linkedin.com/company/bouul",
  ],
});

/**
 * Generate WebSite schema
 */
export const generateWebSiteSchema = (): JSONLDType => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bouul",
  url: BASE_URL,
  description: "Book trusted local professionals in minutes",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

/**
 * Generate Event schema for promotions or special offers
 */
export const generateEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  price?: number;
}): JSONLDType => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  organizer: {
    "@type": "Organization",
    name: "Bouul",
    url: BASE_URL,
  },
  offers: {
    "@type": "Offer",
    price: event.price || 0,
    priceCurrency: "ZAR",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
  },
});

/**
 * Helper component to inject structured data into page head
 */
export const StructuredData: React.FC<{ data: JSONLDType }> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateProductSchema,
  generateFAQSchema,
  generateReviewSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateEventSchema,
  StructuredData,
};
