import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.phd-bd.com";
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/projects",
    "/where-we-work",
    "/impact",
    "/knowledge",
    "/careers",
    "/get-involved",
    "/transparency",
    "/contact",
  ];
  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const programEntries: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${base}/what-we-do/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticEntries, ...programEntries];
}
