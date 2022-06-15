import { Request, Response } from 'express';
import { Assignments } from '../models/AssignmentModel';
export const createAssignment = async (req: Request, res: Response) => {
  const {
    title,
    description,
    music_genre,
    practice_time,
    days,
    days_practiced,
  }: any = req.body;
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
};

export const getAllAssignments = async (req: Request, res: Response) => {
  try {
    const myAssignments: Assignments[] = await Assignments.findAll({
      order: [['updatedat', 'DESC']],
    });
    return res.json(myAssignments);
  } catch (e) {
    console.log('in SelectAllAssignments', e);
  }
};

export const deleteAssignmentsAndReturnCurrent = async (
  req: Request,
  res: Response
) => {
  const { checkedIds } = req.body;
  if (checkedIds.length) {
    try {
      const returning = await Assignments.destroy({
        where: {
          id: checkedIds,
        },
      });
      getAllAssignments(req, res);
    } catch (e) {
      console.log(e);
    }
  } else
    return res
      .status(404)
      .json({ message: 'unable to delete, please try again' });
};
