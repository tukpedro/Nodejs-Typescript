import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async findByName(name: string): Promise<Customer | undefined> {

  }

  public async findById(id: string): Promise<Customer | undefined> {

  }

  public async findByEmail(email: string): Promise<Customer | undefined> {

  }
}

export default CustomersRepository;
