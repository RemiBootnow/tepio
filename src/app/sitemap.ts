import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages - add more as you create them
  const staticPages = [
    "",
    "/devis-gratuit",
    // Future pages:
    // "/pompe-a-chaleur",
    // "/poele-a-bois",
    // "/poele-a-granules",
    // "/climatisation",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticEntries];
}
