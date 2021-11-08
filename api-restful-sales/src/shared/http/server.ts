import 'dotenv/config';
import cors from 'cors';
import '@shared/typeorm';
import 'reflect-metadata';
import 'express-async-errors';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload';
import routes from './routes/index.routes';
import AppError from '@shared/errors/AppError';
import { pagination } from 'typeorm-pagination';
import rateLimiter from '@shared/http/middlewares/rateLimiter';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(pagination);
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(errors());
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal Server Error',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`✨ Server running on port ${process.env.PORT} ✨`);
});
