"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignment_1 = require("./assignment");
const assignment_2 = require("../controllers/assignment");
const router = express_1.default.Router();
router.post('/assignment', assignment_1.validateAssignment, assignment_2.createAssignment);
router.get('/assignment', assignment_2.getAllAssignments);
router.post('/delete-assignments', assignment_2.deleteAssignmentsAndReturnCurrent);
// router.post('/assignment', async (req: Request, res: Response) => {
//   const {
//     title,
//     description,
//     music_genre,
//     practice_time,
//     days,
//     days_practiced,
//   } = req.body;
//   try {
//     const returning: Assignments = await Assignments.create({
//       title,
//       description,
//       music_genre,
//       practice_time,
//       days,
//       days_practiced,
//     });
//     return res.json(returning);
//   } catch (e) {
//     console.log('from uploads', e);
//   }
// });
// router.get('/all-assignments', async (req: Request, res: Response) => {
//   try {
//     const myAssignments: Assignments[] = await Assignments.findAll({
//       order: [['updatedat', 'DESC']],
//     });
//     return res.json(myAssignments);
//   } catch (e) {
//     console.log('in SelectAllAssignments', e);
//   }
// });
// router.post('/delete-assignments', async (req: Request, res: Response) => {
//   const { checkedIds } = req.body;
//   try {
//     const returning = await Assignments.destroy({
//       where: {
//         id: checkedIds,
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   try {
//     const myAssignments: Assignments[] = await Assignments.findAll({
//       order: [['updatedat', 'DESC']],
//     });
//     return res.json(myAssignments);
//   } catch (e) {
//     console.log('in SelectAllAssignments', e);
//   }
// });
exports.default = router;
