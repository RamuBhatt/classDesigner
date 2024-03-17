const { getSortedExams, createTimeTable, updateTimeTable } = require("../Controllers/timeTableControllers");
const express = require("express");
const timeTableRouter = express.Router();

timeTableRouter.get("/timetable", getSortedExams);
timeTableRouter.post("/timetable/:id", createTimeTable);
timeTableRouter.put("/timetable/:id", updateTimeTable);

module.exports = timeTableRouter
