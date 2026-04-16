/**
 * Meta Tag System for SEO
 * 
 * Generates consistent meta tags for all pages with support for
 * city + service combinations, Open Graph, and Twitter Cards.
 */

export interface MetaConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const BASE_URL = "https://bouul.com";
const DEFAULT_TITLE = "Bouul - Book Trusted Local Professionals";
const DEFAULT_DESCRIPTION = "Hyper-local services marketplace connecting you with verified professionals. Book plumbers, electricians, cleaners, and more in minutes.";
const DEFAULT_IMAGE = "/hero-banner-desktop.png";

/**
 * Generate meta tags for homepage
 */
export const getHomeMeta = (): MetaConfig => ({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonical: BASE_URL,
  ogImage: `${BASE_URL}${DEFAULT_IMAGE}`,
  type: "website",
  keywords: [
    "services marketplace",
    "local professionals",
    "book services",
    "plumbers",
    "electricians",
    "cleaners",
    "South Africa",
    "verified professionals",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for city landing pages
 */
export const getCityMeta = (city: string): MetaConfig => ({
  title: `${city} Services | Book Local Professionals - Bouul`,
  description: `Find trusted professionals in ${city}. Book plumbers, electricians, cleaners, and more. Verified, rated, and ready to help. Available 24/7.`,
  canonical: `${BASE_URL}/city/${city.toLowerCase().replace(/ /g, "-")}`,
  ogImage: `${BASE_URL}/og-city.jpg`,
  type: "website",
  keywords: [
    `${city} services`,
    `${city} professionals`,
    `${city} plumbers`,
    `${city} electricians`,
    `${city} cleaners`,
    `services in ${city}`,
    "local professionals",
    "book services",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for category pages
 */
export const getCategoryMeta = (category: string, city?: string): MetaConfig => {
  const location = city ? ` in ${city}` : "";
  
  return {
    title: `${category}${city ? ` in ${city}` : ""} | Book Now - Bouul`,
    description: `Book professional ${category.toLowerCase()}${location}. Verified experts, transparent pricing, and instant booking. Available today.`,
    canonical: `${BASE_URL}/category/${category.toLowerCase().replace(/ /g, "-")}${city ? `?city=${city.toLowerCase()}` : ""}`,
    ogImage: `${BASE_URL}/og-category.jpg`,
    type: "website",
    keywords: [
      `${category.toLowerCase()}${location}`,
      `${category.toLowerCase()} near me`,
      `hire ${category.toLowerCase()}`,
      `${category.toLowerCase()} services`,
      city ? `${category.toLowerCase()} ${city}` : "",
      "book now",
      "verified professionals",
    ].filter(Boolean) as string[],
    robots: "index, follow",
  };
};

/**
 * Generate meta tags for professional profile pages
 */
export const getProMeta = (pro: {
  name: string;
  category: string;
  city?: string;
  rating: number;
  reviewCount: number;
}): MetaConfig => ({
  title: `${pro.name} | ${pro.category} in ${pro.city || "Your Area"} - Bouul`,
  description: `Book ${pro.name}, a ${pro.rating}★ rated ${pro.category} with ${pro.reviewCount} reviews. Verified professional available for booking.`,
  canonical: `${BASE_URL}/pro/${pro.name.toLowerCase().replace(/ /g, "-")}`,
  ogImage: `${BASE_URL}/og-pro.jpg`,
  type: "profile",
  keywords: [
    pro.name,
    `${pro.category.toLowerCase()}`,
    `${pro.category.toLowerCase()} near me`,
    `book ${pro.name}`,
    "verified professional",
    pro.city ? `${pro.category.toLowerCase()} ${pro.city}` : "",
  ].filter(Boolean) as string[],
  robots: "index, follow",
  author: pro.name,
});

/**
 * Generate meta tags for vendor/four-pros page
 */
export const getVendorMeta = (): MetaConfig => ({
  title: "For Professionals | Grow Your Business - Bouul",
  description: "Join 5,000+ professionals growing their business on Bouul. AI-powered discovery, real-time analytics, and zero hidden fees.",
  canonical: `${BASE_URL}/vendors`,
  ogImage: `${BASE_URL}/og-vendors.jpg`,
  type: "website",
  keywords: [
    "for professionals",
    "grow business",
    "service professionals",
    "vendor dashboard",
    "get more clients",
    "book more jobs",
    "South Africa",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for safety/trust page
 */
export const getSafetyMeta = (): MetaConfig => ({
  title: "Trust & Safety | Verified Professionals - Bouul",
  description: "Your safety is our priority. Every professional is ID verified, background checked, and insured. Book with total confidence.",
  canonical: `${BASE_URL}/safety`,
  ogImage: `${BASE_URL}/og-safety.jpg`,
  type: "website",
  keywords: [
    "trust and safety",
    "verified professionals",
    "background check",
    "ID verification",
    "booking protection",
    "safe booking",
    "insured professionals",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for FAQ page
 */
export const getFAQMeta = (): MetaConfig => ({
  title: "FAQ | Frequently Asked Questions - Bouul",
  description: "Find answers to common questions about booking, payments, safety, and more on Bouul.",
  canonical: `${BASE_URL}/faq`,
  ogImage: `${BASE_URL}/og-faq.jpg`,
  type: "website",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "help",
    "support",
    "booking questions",
    "payment questions",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for subscription/pricing page
 */
export const getPricingMeta = (): MetaConfig => ({
  title: "Pricing & Subscriptions | Transparent Costs - Bouul",
  description: "Transparent pricing with no hidden fees. Choose from flexible subscription plans or pay per booking.",
  canonical: `${BASE_URL}/pricing`,
  ogImage: `${BASE_URL}/og-pricing.jpg`,
  type: "website",
  keywords: [
    "pricing",
    "subscriptions",
    "cost",
    "fees",
    "transparent pricing",
    "pay per booking",
  ],
  robots: "index, follow",
});

/**
 * Generate meta tags for download/app page
 */
export const getDownloadMeta = (): MetaConfig => ({
  title: "Download Bouul | iOS & Android App",
  description: "Download the Bouul app for iOS and Android. Book services, track professionals, and manage bookings on the go.",
  canonical: `${BASE_URL}/download`,
  ogImage: `${BASE_URL}/og-download.jpg`,
  type: "website",
  keywords: [
    "download",
    "mobile app",
    "iOS app",
    "Android app",
    "book services",
    "service marketplace",
  ],
  robots: "index, follow",
});

/**
 * Helper to generate JSON-LD script for meta tags
 */
export const generateMetaTags = (config: MetaConfig) => {
  const tags = [
    // Basic meta tags
    { name: "title", content: config.title },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords?.join(", ") },
    config.robots && { name: "robots", content: config.robots },
    config.author && { name: "author", content: config.author },
    
    // Canonical URL
    { rel: "canonical", href: config.canonical || BASE_URL },
    
    // Open Graph
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:image", content: config.ogImage || `${BASE_URL}${DEFAULT_IMAGE}` },
    { property: "og:url", content: config.canonical || BASE_URL },
    { property: "og:type", content: config.type || "website" },
    { property: "og:site_name", content: "Bouul" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: config.ogImage || `${BASE_URL}${DEFAULT_IMAGE}` },
    
    // Additional SEO
    { name: "theme-color", content: "#7ED957" },
  ];

  return tags.filter(Boolean);
};

export default {
  getHomeMeta,
  getCityMeta,
  getCategoryMeta,
  getProMeta,
  getVendorMeta,
  getSafetyMeta,
  getFAQMeta,
  getPricingMeta,
  getDownloadMeta,
  generateMetaTags,
};
