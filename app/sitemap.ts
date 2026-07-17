import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ouestwebcalvados.netlify.app",
      lastModified: new Date("2026-07-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
