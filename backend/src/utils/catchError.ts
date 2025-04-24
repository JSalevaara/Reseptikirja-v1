import { Request, Response, NextFunction } from "express";

type AsyncController = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<unknown>;

const catchErrors =
    (controller: AsyncController) =>
    (req: Request, res: Response, next: NextFunction): void => {
        controller(req, res, next).catch(next);
    };

export default catchErrors;
