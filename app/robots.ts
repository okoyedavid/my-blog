import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/editor", "/search", "/style"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
