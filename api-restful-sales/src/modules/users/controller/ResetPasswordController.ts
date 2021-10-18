import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { token, password } = req.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      token,
      password,
    });

    return res.json({
      message: 'Password successfully reseted',
    });
  }
}
