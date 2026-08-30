import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    summary: z.string(),
    order: z.number(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })),
    tech: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    external: z.string().url().optional(),
    personalProject: z.boolean().default(true),
  }),
});

export const collections = { work, projects };
