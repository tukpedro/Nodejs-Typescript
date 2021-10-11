import { Request, Response, NextFunction } from 'express';
export default {
  async logRoutes(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method.toUpperCase()}] -> ${req.url}`);
    return next();
  },
  async index(req: Request, res: Response) {
    return res.json({
      message: 'Hello World!',
    });
  },
};
