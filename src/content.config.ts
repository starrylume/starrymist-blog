import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
    loader: glob({
        base: "./src/content/posts",
        pattern: "**/*.md",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        lang: z.string().default("en"),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    posts,
};
