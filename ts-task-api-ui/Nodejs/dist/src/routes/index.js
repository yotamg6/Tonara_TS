"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AssignmentModel_1 = require("../models/AssignmentModel");
const router = express_1.default.Router();
router.post('/assignment', async (req, res) => {
    const { title, description, music_genre, practice_time, days, days_practiced, } = req.body;
    try {
        const returning = await AssignmentModel_1.Assignments.create({
            title,
            description,
            music_genre,
            practice_time,
            days,
            days_practiced,
        });
        return res.json(returning);
    }
    catch (e) {
        console.log('from uploads', e);
    }
});
router.get('/all-assignments', async (req, res) => {
    try {
        const myAssignments = await AssignmentModel_1.Assignments.findAll({
            order: [['updatedat', 'DESC']],
        });
        return res.json(myAssignments);
    }
    catch (e) {
        console.log('in SelectAllAssignments', e);
    }
});
router.post('/delete-assignments', async (req, res) => {
    const { checkedIds } = req.body;
    try {
        // await Promise.all(
        // checkedIds.map((id: number) => {
        const returning = await AssignmentModel_1.Assignments.destroy({
            where: {
                id: checkedIds,
            },
        });
        console.log(returning);
        // })
        // );
    }
    catch (e) {
        console.log(e);
    }
    try {
        const myAssignments = await AssignmentModel_1.Assignments.findAll({
            order: [['updatedat', 'DESC']],
        });
        return res.json(myAssignments);
    }
    catch (e) {
        console.log('in SelectAllAssignments', e);
    }
});
exports.default = router;
