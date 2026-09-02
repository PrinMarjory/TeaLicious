import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const teas = defineCollection({
    loader: glob({
        base: "./src/content/teas",
        pattern: "**/*.md",
    }),

    schema: z.object({
        name: z.string(),
        brand: z.string(),
        type: z.enum([
            "black",
            "green",
            "white",
            "oolong",
            "puerh",
            "infusion",
        ]),
        origin: z.string().optional(),
        image: z.string().optional(),
        ingredients: z.array(z.string()).optional(),
        shortDescription: z.string(),
        longDescription: z.string().optional(),
        temperature: z.number().optional(),
        steepingTime: z.number().optional(),
    }),
});

export const collections = {
    teas,
};