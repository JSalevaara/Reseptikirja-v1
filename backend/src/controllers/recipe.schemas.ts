import { z } from "zod";

export const recipeSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100, "Title must be less than 100 characters"),
    description: z
        .string()
        .min(1, "Description is required")
        .max(200, "Description must be less than 200 characters"),
    ingredients: z.array(
        z.object({
            name: z
                .string()
                .min(1, "Ingredient name is required")
                .max(50, "Ingredient must be less than 50 characters"),
            quantity: z.object({
                value: z
                    .number()
                    .min(0.01, "Quantity value must be greater than 0"), // Numeric value
                unit: z.enum([
                    "L",
                    "ml",
                    "g",
                    "kg",
                    "tsp",
                    "tbsp",
                    "cup",
                    "oz",
                    "lb",
                    "piece",
                ]),
            }),
        })
    ),
    instructions: z.array(
        z.object({
            step: z.string().min(1, "Instruction step is required"),
        })
    ),
    rating: z
        .number()
        .min(0, "Rating must be at least 0")
        .max(5, "Rating must be at most 5"),
    imageUrl: z.string().url("Image URL must be a valid URL").optional(),
});
