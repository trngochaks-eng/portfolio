import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tran-ngoc-ha-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
