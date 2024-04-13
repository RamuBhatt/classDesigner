const express = require("express");
const adminRouter = express.Router();

const createStudents = require("../Controllers/adminControllers");

adminRouter.post("/admin/student/add", createStudents);

module.exports = adminRouter
