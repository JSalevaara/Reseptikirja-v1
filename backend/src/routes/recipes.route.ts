import { Router } from "express";
import {
    recipeCreateHandler,
    recipeGetHandler,
} from "../controllers/recipe.controller";

const recipeRoutes = Router();

recipeRoutes.get("/", recipeGetHandler);
recipeRoutes.post("/", recipeCreateHandler);

export default recipeRoutes;
