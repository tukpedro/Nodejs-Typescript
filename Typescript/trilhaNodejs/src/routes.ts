import { Router } from 'express';
import MainController from './controller/MainController';

const router = Router();
const logRoutes = MainController.logRoutes;

router.use(logRoutes);

router.post('/account', MainController.createAccount);
router.get('/statement', MainController.getStatement);

export default router;
