import mongoose from "mongoose";

export interface Recipe {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    ingredients: {
        name: string;
        quantity: {
            value: number;
            unit:
                | "L"
                | "ml"
                | "g"
                | "kg"
                | "tsp"
                | "tbsp"
                | "cup"
                | "oz"
                | "lb"
                | "piece";
        };
    }[];
    instructions: { step: string }[]; // Updated to an array of objects
    rating: number;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const recipeSchema = new mongoose.Schema<Recipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: {
                value: { type: Number, required: true, min: 0.01 },
                unit: {
                    type: String,
                    enum: [
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
                    ],
                    required: true,
                },
            },
        },
    ],
    instructions: [
        {
            step: { type: String, required: true }, // Each step is a required string
        },
    ],
    rating: { type: Number, required: true },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const RecipeModel = mongoose.model<Recipe>("Recipe", recipeSchema);
export default RecipeModel;
