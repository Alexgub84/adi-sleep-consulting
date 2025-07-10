import { defineCollection, z } from 'astro:content';

const en = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    primaryButton: z.string().optional(),
    primaryButtonLink: z.string().optional(),
    secondaryButton: z.string().optional(),
    secondaryButtonLink: z.string().optional(),
  })
});

const he = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    primaryButton: z.string().optional(),
    primaryButtonLink: z.string().optional(),
    secondaryButton: z.string().optional(),
    secondaryButtonLink: z.string().optional(),
  })
});

export const collections = {
  en,
  he,
}; 