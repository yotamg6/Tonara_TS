import { NextFunction } from 'express';
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
  const message: string = 'error. required field accepts only numbers';
  if (title && practice_time && days && days_practiced) {
    if (
      isNumber(title) &&
      isNumber(practice_time) &&
      isNumber(days) &&
      isNumber(days_practiced)
    ) {
      next();
    }
    return res.json(message);
    // else return res.json().then((data) => data as string);
  } else return res.json({ message: 'error. empty fields not allowed' });
};
