import catchErrors from "../utils/catchError";
import { recipeSchema } from "../controllers/recipe.schemas";
import RecipeModel from "../models/recipe.model";
import { CREATED } from "../constants/http";

export const recipeCreateHandler = catchErrors(async (req, res) => {
    const request = recipeSchema.parse(req.body);
    console.log(request);

    const recipe = await RecipeModel.create(request);
    return res.status(CREATED).json(recipe);
});

export const recipeGetHandler = catchErrors(async (req, res) => {
    const { id } = req.params;
    if (id) {
        const recipe = await RecipeModel.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        return res.status(200).json(recipe);
    } else {
        const recipes = await RecipeModel.find();
        return res.status(200).json(recipes);
    }
});
