import { Request, Response, NextFunction } from 'express';
import { isNumber } from '../common/validations';

export const validateAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    description,
    music_genre,
    practice_time,
    days,
    days_practiced,
  }: any = req.body;
  if (title && practice_time && days && days_practiced) {
    if (isNumber(practice_time) && isNumber(days) && isNumber(days_practiced)) {
      return next();
    }
    return res
      .status(403)
      .json({ message: 'error. required field accepts only numbers' });
  } else
    return res.status(403).json({ message: 'error. empty fields not allowed' });
};
