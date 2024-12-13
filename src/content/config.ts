import { defineCollection, z } from "astro:content";

const places = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    osm_id: z.string().nullable(),
    description: z.string().optional(),
  }),
});

export const collections = {
  places,
};
