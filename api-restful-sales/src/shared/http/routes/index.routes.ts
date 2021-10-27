import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import isAuthenticated from '../middlewares/isAuthenticated';
import passwordRouter from '@modules/users/routes/password.routes';
import customersRouter from '@modules/customers/routes/customers.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/users', usersRouter);
routes.use(isAuthenticated);
routes.use('/products', productsRouter);
routes.use('/customers', customersRouter);

export default routes;
