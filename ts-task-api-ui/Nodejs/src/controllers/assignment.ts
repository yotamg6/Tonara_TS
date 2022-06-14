import { Assignments } from '../models/AssignmentModel';
export const createAssignment = async (req: Request,
    res: Response,
    )=> {
        const {
            title,
            description,
            music_genre,
            practice_time,
            days,
            days_practiced,
          }:any = req.body;
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
}