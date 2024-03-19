const express = require("express");
const studentRouter = express.Router();

const { getStudentById, getStudentBySchool, getStudentByStandard, getStudentBySubject } = require("../Controllers/studentControllers");

studentRouter.get("/profile/student/:id", getStudentById);
studentRouter.get("/student/school/:id", getStudentBySchool);
studentRouter.get("/student/standard/:id", getStudentByStandard);
studentRouter.get("/student/subject/:id", getStudentBySubject);

module.exports = studentRouter