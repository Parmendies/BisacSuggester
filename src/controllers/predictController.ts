import { Request, Response } from 'express';
import { suggestBisac } from '../services/bisacService';

export const predict = (req: Request, res: Response) => {
  const { title, context, cart, curta } = req.body;
  const result = suggestBisac({ title, context, cart, curta });
  res.json(result);
};


