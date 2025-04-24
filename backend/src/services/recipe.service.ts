import RecipeModel from "../models/recipe.model";

export type CreateRecipeParams = {
    title: string;
    description: string;
    ingredients: Map<string, string>[];
    instructions: Map<string, string>[];
    rating: number;
    imageUrl?: string;
};

export const CreateRecipe = async (data: CreateRecipeParams) => {
    const recipe = await RecipeModel.create(data);
    return recipe;
};
