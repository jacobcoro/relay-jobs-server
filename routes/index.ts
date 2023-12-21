import { Router, Request, Response } from 'express';
import { schedulerRouter } from './scheduler';
import { tokenChecker } from './helpers/token-check';

let apiRouter = Router();

apiRouter.get('/ping', (req: Request, res: Response) => {
  res.send({ reply: 'pong' });
});

apiRouter.use(schedulerRouter);
apiRouter.use(tokenChecker);

export { apiRouter };
