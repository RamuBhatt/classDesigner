const getSortedExams = require("../Controllers/examController");
const express = require("express");
const examRouter = express.Router();

examRouter.get("/timetable", getSortedExams);

module.exports = examRouter