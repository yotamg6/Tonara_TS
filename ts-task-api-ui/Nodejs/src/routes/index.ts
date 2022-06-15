import express, { Request, Response } from 'express';
import { Assignments } from '../models/AssignmentModel';
import { validateAssignment } from './assignment';
import {
  createAssignment,
  deleteAssignmentsAndReturnCurrent,
  getAllAssignments,
} from '../controllers/assignment';

const router = express.Router();

router.post('/assignment', validateAssignment, createAssignment);
router.get('/assignment', getAllAssignments);
router.post('/delete-assignments', deleteAssignmentsAndReturnCurrent);

export default router;
