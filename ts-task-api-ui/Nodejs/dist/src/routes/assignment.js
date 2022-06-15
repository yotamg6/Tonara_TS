"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAssignment = void 0;
const validations_1 = require("../common/validations");
const validateAssignment = async (req, res, next) => {
    const { title, description, music_genre, practice_time, days, days_practiced, } = req.body;
    if (title && practice_time && days && days_practiced) {
        if ((0, validations_1.isNumber)(practice_time) && (0, validations_1.isNumber)(days) && (0, validations_1.isNumber)(days_practiced)) {
            return next();
        }
        return res
            .status(403)
            .json({ message: 'error. required field accepts only numbers' });
    }
    else
        return res.status(403).json({ message: 'error. empty fields not allowed' });
};
exports.validateAssignment = validateAssignment;
