import { Router, Request, Response } from 'express';
import { schedulerRouter } from './scheduler';

let apiRouter = Router();

apiRouter.get('/pong', (req: Request, res: Response) => {
  res.send({ reply: 'pong' });
});

apiRouter.use(schedulerRouter);

export { apiRouter };
