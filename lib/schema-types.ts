/**
 * Schema.org TypeScript Types
 * 
 * Type definitions for JSON-LD structured data schemas.
 * Based on https://schema.org documentation.
 */

export interface JSONLDType {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

// Base types
export interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface Offer {
  "@type": "Offer";
  price?: number | string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  itemOffered?: {
    "@type": string;
    name: string;
  };
}

export interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  reviewCount?: string;
  bestRating?: string;
  worstRating?: string;
}

export interface Review {
  "@type": "Review";
  author: {
    "@type": "Person";
    name: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: string;
    bestRating: string;
    worstRating: string;
  };
  reviewBody: string;
  datePublished: string;
  itemReviewed: {
    "@type": string;
    name: string;
  };
}

// Main schema types
export interface LocalBusinessSchema extends JSONLDType {
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  geo?: GeoCoordinates;
  openingHoursSpecification?: OpeningHoursSpecification;
  priceRange?: string;
  sameAs?: string[];
  areaServed?: {
    "@type": "Country";
    name: string;
  };
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
      };
    }>;
  };
  aggregateRating?: AggregateRating;
}

export interface ServiceSchema extends JSONLDType {
  "@type": "Service";
  name: string;
  description: string;
  image?: string[];
  serviceType: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
  };
  areaServed?: Array<{
    "@type": "City";
    name: string;
  }>;
  offers?: Offer;
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
  };
}

export interface ProductSchema extends JSONLDType {
  "@type": "Product";
  name: string;
  description: string;
  image?: string[];
  offers: Offer;
}

export interface FAQPageSchema extends JSONLDType {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface ReviewSchema extends JSONLDType {
  "@type": "Review";
}

export interface PersonSchema extends JSONLDType {
  "@type": "Person";
  name: string;
  jobTitle: string;
  image?: string[];
  description?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  hasOccupation?: {
    "@type": "Occupation";
    name: string;
    estimatedSalary?: {
      "@type": "MonetaryAmount";
      currency: string;
      unitText: string;
    };
    skills?: string[];
    yearsOfExperience?: string;
  };
  aggregateRating?: AggregateRating;
}

export interface BreadcrumbListSchema extends JSONLDType {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface OrganizationSchema extends JSONLDType {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  foundingDate?: string;
  founders?: Array<{
    "@type": "Person";
    name: string;
  }>;
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    email?: string;
    telephone?: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
}

export interface WebSiteSchema extends JSONLDType {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface EventSchema extends JSONLDType {
  "@type": "Event";
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  eventStatus: string;
  eventAttendanceMode: string;
  organizer: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  offers: Offer;
}

// Export union type for all schemas
export type SchemaType =
  | LocalBusinessSchema
  | ServiceSchema
  | ProductSchema
  | FAQPageSchema
  | ReviewSchema
  | PersonSchema
  | BreadcrumbListSchema
  | OrganizationSchema
  | WebSiteSchema
  | EventSchema;
