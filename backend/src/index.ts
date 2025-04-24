import "dotenv/config";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import { APP_ORIGIN, PORT } from "./constants/env";
import recipeRoutes from "./routes/recipes.route";
import connectDB from "./config/mongodb";
dotenv.config();

const app = express();
app.use(
    cors({
        origin: APP_ORIGIN,
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/recipes", recipeRoutes);
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(
        `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
    await connectDB();
});
