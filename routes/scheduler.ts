import { Router, Request, Response } from 'express';
import { scheduleEmails } from './helpers/schedule-emails';

let schedulerRouter = Router();

schedulerRouter.post('/schedule-emails', (req: Request, res: Response) => {
  const {
    sequenceSteps,
    scheduledEmails,
    influencer,
    account,
    now,
    maxDailyPerStep,
  } = req.body;

  const result = scheduleEmails(
    sequenceSteps,
    scheduledEmails,
    influencer,
    account,
    now,
    maxDailyPerStep
  );

  return res.json(result);
});

export { schedulerRouter };
