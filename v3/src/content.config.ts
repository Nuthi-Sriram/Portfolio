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
    // Defaults to false so the badge must be opted into. Its purpose is to stop the
    // Raft entry being read as production C++ experience; applying it to everything
    // both dilutes that signal and mislabels IntelliProc, which is published research.
    personalProject: z.boolean().default(false),
  }),
});

export const collections = { work, projects };
