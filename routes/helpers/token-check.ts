import { NextFunction, Request, Response } from 'express';

const localToken = process.env.SCHEDULER_SERVER_TOKEN;
if (!localToken) {
  throw new Error('SCHEDULER_SERVER_TOKEN not set');
}

export const tokenChecker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  if (token !== localToken) {
    return res.status(401).send({ auth: false, message: 'Invalid token.' });
  }

  next();
};
