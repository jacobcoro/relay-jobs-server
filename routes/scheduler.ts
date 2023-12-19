import { Router, Request, Response } from 'express';
import { scheduleEmails } from './helpers/schedule-emails';

let schedulerRouter = Router();

schedulerRouter.post('/schedule-emails', (req: Request, res: Response) => {
  const { steps, scheduledEmails, influencer, account } = req.body;

  const result = scheduleEmails(steps, scheduledEmails, influencer, account);

  return res.json(result);
});

export { schedulerRouter };
