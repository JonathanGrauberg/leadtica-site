import type { MetadataRoute } from "next";
import { articles, legalPages, posts } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/comolohacemos", "/resultados", "/acerca-de", "/insights", "/formaparte"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...[...articles, ...legalPages].map((a) => ({ url: `${SITE_URL}/${a.slug}` })),
    ...posts.map((p) => ({ url: `${SITE_URL}/post/${p.slug}`, lastModified: p.date })),
  ];
}
