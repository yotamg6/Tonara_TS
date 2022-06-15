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
exports.default = router;
