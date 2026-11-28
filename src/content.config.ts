import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    dateLabel: z.string().optional(),
    originalUrl: z.string().url().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['idea', 'in-progress', 'complete']).default('in-progress'),
    featured: z.boolean().default(false),
    link: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    articleUrl: z.string().url().optional(),
    notebookUrl: z.string().optional(),
    youtubeId: z.string().optional(),
    researchPaperUrl: z.string().optional(),
    projectNotesUrl: z.string().optional(),
    appDocumentationUrl: z.string().optional(),
    appScreenUrl: z.string().optional(),
  }),
});

export const collections = { blog, projects };
