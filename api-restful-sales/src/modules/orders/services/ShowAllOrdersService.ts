import { getCustomRepository } from 'typeorm';
import Order from '../typeorm/entities/Order';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';

class ShowAllOrdersService {
  public async execute(): Promise<Order[]> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = await ordersRepository.findAll();

    return orders;
  }
}

export default ShowAllOrdersService;
