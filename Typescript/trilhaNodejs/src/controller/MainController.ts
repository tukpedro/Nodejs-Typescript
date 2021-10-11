import { Request, Response, NextFunction } from 'express';
export default {
  async logRoutes(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    console.log(`[${req.method.toUpperCase()}] -> ${req.url}`);
    return next();
  },
  async index(req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'Hello World!',
    });
  },
};
