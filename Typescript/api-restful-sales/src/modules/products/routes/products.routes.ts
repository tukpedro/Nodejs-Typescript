import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);
productsRouter.get('/', productsController.show);
productsRouter.post('/', productsController.create);
productsRouter.put('/', productsController.update);
productsRouter.delete('/', productsController.delete);

export default productsRouter;
