import { Router } from 'express';
import MainController from './controller/MainController';

const router = Router();
const logRoutes = MainController.logRoutes;

router.use(logRoutes);

router.get('/', MainController.index);

export default router;
