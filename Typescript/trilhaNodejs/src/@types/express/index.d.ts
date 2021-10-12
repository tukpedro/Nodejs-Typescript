declare namespace Express {
  export interface Request {
    customer: {
      cpf: string;
      name: string;
      id: string;
      statement: string[];
    };
  }
}
