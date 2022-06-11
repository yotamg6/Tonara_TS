import express, { Request, Response } from 'express';
import { Assignments } from '../models/AssignmentModel';

const router = express.Router();

router.post('/assignment', async (req: Request, res: Response) => {
  const {
    title,
    description,
    music_genre,
    practice_time,
    days,
    days_practiced,
  } = req.body;
  try {
    const returning: Assignments = await Assignments.create({
      title,
      description,
      music_genre,
      practice_time,
      days,
      days_practiced,
    });
    return res.json(returning);
  } catch (e) {
    console.log('from uploads', e);
  }
});
router.get('/all-assignments', async (req: Request, res: Response) => {
  try {
    const myAssignments: Assignments[] = await Assignments.findAll();//add inside findall: { order: [['updatedAt', 'DESC']]}
    return res.json(myAssignments);
  } catch (e) {
    console.log('in SelectAllAssignments', e);
  }
});

export default router;
