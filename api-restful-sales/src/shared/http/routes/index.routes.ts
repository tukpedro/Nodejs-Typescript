import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import isAuthenticated from '../middlewares/isAuthenticated';
import passwordRouter from '@modules/users/routes/password.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use(isAuthenticated);
routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes;