import { Request, Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import ShowAllOrdersService from '../services/ShowAllOrdersService';
import ShowOrderService from '../services/ShowOrderService';

export default class OrdersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const showAllOrders = new ShowAllOrdersService();

    const orders = await showAllOrders.execute();

    return res.json(orders);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute({ id });

    return res.json(order);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { customer_id, products } = req.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({ customer_id, products });

    return res.json(order);
  }
}
