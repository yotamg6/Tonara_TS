"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignmentsAndReturnCurrent = exports.getAllAssignments = exports.createAssignment = void 0;
const AssignmentModel_1 = require("../models/AssignmentModel");
const createAssignment = async (req, res) => {
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
};
exports.createAssignment = createAssignment;
const getAllAssignments = async (req, res) => {
    try {
        const myAssignments = await AssignmentModel_1.Assignments.findAll({
            order: [['updatedat', 'DESC']],
        });
        return res.json(myAssignments);
    }
    catch (e) {
        console.log('in SelectAllAssignments', e);
    }
};
exports.getAllAssignments = getAllAssignments;
const deleteAssignmentsAndReturnCurrent = async (req, res) => {
    const { checkedIds } = req.body;
    if (checkedIds.length) {
        try {
            const returning = await AssignmentModel_1.Assignments.destroy({
                where: {
                    id: checkedIds,
                },
            });
            return (0, exports.getAllAssignments)(req, res);
        }
        catch (e) {
            console.log(e);
        }
    }
    else
        return res
            .status(404)
            .json({ message: 'unable to delete, please try again' });
};
exports.deleteAssignmentsAndReturnCurrent = deleteAssignmentsAndReturnCurrent;
