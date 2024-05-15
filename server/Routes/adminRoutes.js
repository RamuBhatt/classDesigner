const express = require("express");
const adminRouter = express.Router();

const { createStudents, createFaculty} = require("../Controllers/adminControllers");

adminRouter.post("/admin/student/add", createStudents);
adminRouter.post("/admin/faculty/add", createFaculty);

module.exports = adminRouter
