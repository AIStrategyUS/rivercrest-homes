import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All three collections below are intentionally EMPTY at launch — no real
// testimonials, closed deals, or long-form guides exist yet. See each
// src/data/<collection>/README.md for how to add a real entry later. Do not
// seed these with fabricated content.

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/testimonials' }),
  schema: z.object({
    authorName: z.string(),
    authorLocation: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5),
    sourceUrl: z.string().optional(),
    dateCollected: z.coerce.date(),
    relatedProjectSlug: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    propertyCity: z.string(),
    county: z.string(),
    situationTag: z.string().optional(),
    status: z.enum(['Acquired', 'Under Renovation', 'Sold']),
    summary: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    closedDate: z.coerce.date().optional(),
    sqft: z.number().optional(),
    beds: z.number().optional(),
    baths: z.number().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/guides' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    relatedSituationSlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { testimonials, projects, guides };
