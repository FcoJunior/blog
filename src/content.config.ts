import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts'
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    slug: z.string().optional(),
    cover: z.union([image(), z.string()]).default('/images/posts/default-cover.png'),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Geral'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    lang: z.enum(['pt', 'en']),
    translationKey: z.string()
  })
});

export const collections = { posts };
