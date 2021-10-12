import { Request, Response, NextFunction } from 'express';
import { v4 } from 'uuid';
import customers from '../database/db';

export default {
  async logRoutes(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    console.log(`[${req.method.toUpperCase()}] -> ${req.url}`);
    return next();
  },

  verifyCpf(req: Request, res: Response, next: NextFunction): any {
    const { cpf } = req.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
      return res.json({
        error: 'CPF not found',
      });
    }

    return next();
  },

  async createAccount(req: Request, res: Response): Promise<Response> {
    const { cpf, name } = req.body;

    const cpfExists = customers.some(customer => customer.cpf === cpf);

    if (!cpfExists) {
      const id = v4();

      customers.push({
        cpf,
        name,
        id,
        statement: [],
      });

      return res.status(201).json(customers);
    }

    return res.status(400).json({
      error: 'CPF already exists',
    });
  },

  async getStatement(req: Request, res: Response): Promise<Response> {
    const { customer } = req;
    return res.json(customer.statement);
  },

  async deposit(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.headers;
    const { description, amount } = req.body;

    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
      return res.json({
        error: 'CPF not found',
      });
    }

    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: 'credit',
    };

    customer.statement.push(statementOperation);

    return res.json(customer.statement);
  },
};
