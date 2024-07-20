import { Request, Response } from 'express';

export const dataController = {
  handleRequest: (req: Request, res: Response) => {
    res.sendStatus(200); 
  }
};