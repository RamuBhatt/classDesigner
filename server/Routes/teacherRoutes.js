const express = require("express");
const facultyRouter = express.Router();

const {
	getFacultyById
} = require("../Controllers/teacherController");

facultyRouter.get("/profile/student/:id", getStudentById);
facultyRouter.get("/student/school/:id", getStudentBySchool);
facultyRouter.get("/student/standard/:id", getStudentByStandard);
facultyRouter.get("/student/subject/:id", getStudentBySubject);
facultyRouter.put("/profile/student", updateStudent);

module.exports = facultyRouter;
