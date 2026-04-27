import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/investors/"],
      },
    ],
    sitemap: "https://bouul.com/sitemap.xml",
    host: "https://bouul.com",
  };
}
