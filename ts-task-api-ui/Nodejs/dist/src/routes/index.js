"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AssignmentModel_1 = require("../models/AssignmentModel");
const router = express_1.default.Router();
router.post('/assignment', async (req, res) => {
    try {
        const ret = await AssignmentModel_1.Assignments.create({
            title: req.body.title,
            description: req.body.description,
            music_genre: req.body.music_genre,
            practice_time: req.body.practice_time,
            days: req.body.days,
            days_practiced: req.body.days_practiced,
        });
        // return res.json({ filedata: ret.dataValues });
        return res.json(ret);
    }
    catch (e) {
        console.log('from uploads', e);
    }
});
router.get('/all-assignments', async (req, res) => {
    try {
        const myAssignments = await AssignmentModel_1.Assignments.findAll();
        return res.json(myAssignments);
    }
    catch (e) {
        console.log('in SelectAllAssignments', e);
    }
});
exports.default = router;
