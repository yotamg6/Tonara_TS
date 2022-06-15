"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (assignmentProperty) => {
    const allowedInput = /^[0-9\b]+$/;
    return allowedInput.test(assignmentProperty);
};
exports.isNumber = isNumber;
