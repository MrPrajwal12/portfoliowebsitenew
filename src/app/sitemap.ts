import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-13");

  const work = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...work,
  ];
}
