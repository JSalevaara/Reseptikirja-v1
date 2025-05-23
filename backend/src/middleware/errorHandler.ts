import { INTERNAL_SERVER_ERROR } from "../constants/http";
import { z } from "zod";
import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST } from "../constants/http";

const handleZodError = (res: Response, error: z.ZodError) => {
    const errors = error.issues.map((error) => ({
        path: error.path.join("."),
        message: error.message,
    }));
    return res.status(BAD_REQUEST).json({
        message: error.message,
        errors,
    });
};

const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
    console.log(`PATH: ${req.path}`, error);

    if (error instanceof z.ZodError) {
        handleZodError(res, error);
        return;
    }
};

export default errorHandler;
