import type { MetadataRoute } from "next";
import { newsroomArticles } from "./newsroom/articles";

const baseUrl = "https://bouul.com";
const now = new Date();

const staticRoutes = [
  "/",
  "/services",
  "/vendors",
  "/download",
  "/faq",
  "/support",
  "/cities",
  "/status",
  "/contact",
  "/learn",
  "/newsroom",
  "/press",
  "/careers",
  "/about",
  "/privacy",
  "/terms",
  "/policies",
  "/community-guidelines",
  "/safety",
  "/use-cases",
].map((path) => ({
  url: `${baseUrl}${path}`,
  lastModified: now,
  changeFrequency: "weekly" as const,
  priority: path === "/" ? 1 : 0.7,
}));

const cities = [
  "johannesburg",
  "sandton",
  "cape-town",
  "durban",
  "pretoria",
  "centurion",
  "midrand",
  "roodepoort",
  "boksburg",
  "benoni",
].map((city) => ({
  url: `${baseUrl}/city/${city}`,
  lastModified: now,
  changeFrequency: "weekly" as const,
  priority: 0.6,
}));

const categories = [
  "plumbers",
  "electricians",
  "cleaners",
  "tutors",
  "beauty",
  "builders",
  "gardeners",
  "painters",
].map((service) => ({
  url: `${baseUrl}/category/${service}`,
  lastModified: now,
  changeFrequency: "weekly" as const,
  priority: 0.6,
}));

const newsroom = newsroomArticles.map((article) => ({
  url: `${baseUrl}/newsroom/${article.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.5,
}));

const proProfiles = [
  "marco-t",
].map((username) => ({
  url: `${baseUrl}/pro/${username}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.5,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...cities, ...categories, ...newsroom, ...proProfiles];
}
