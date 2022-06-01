import express, { Request, Response } from 'express';
import { Assignments } from '../models/AssignmentModel';

const router = express.Router();

router.post('/assignment', async (req: Request, res: Response) => {
  try {
    const ret: Assignments = await Assignments.create({
      title: req.body.title,
      description: req.body.description,
      music_genre: req.body.musicGenre,
      practice_time: req.body.practiceTime,
      days: req.body.days,
      days_practiced: req.body.daysPracticed,
    });
    // return res.json({ filedata: ret.dataValues });
    return res.json({ filedata: ret });
  } catch (e) {
    console.log('from uploads', e);
  }
});
router.get('/all-assignments', async (req: Request, res: Response) => {
  try {
    const myAssignments: Assignments[] = await Assignments.findAll();
    return res.json(myAssignments);
  } catch (e) {
    console.log('in SelectAllAssignments', e);
  }
});

export default router;
