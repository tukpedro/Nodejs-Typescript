import { Router } from 'express';
import MainController from './controller/MainController';

const router = Router();
const logRoutes = MainController.logRoutes;
const verifyCpf = MainController.verifyCpf;

router.use(logRoutes);

router.post('/account', MainController.createAccount);

router.use(verifyCpf);

router.get('/statement', MainController.getStatement);

router.post('/deposit', MainController.deposit);

export default router;
