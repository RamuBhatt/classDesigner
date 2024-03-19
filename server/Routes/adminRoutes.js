const express = require("express");
const adminRouter = express.Router();

const studentsCreate = require("../Controllers/adminControllers");

adminRouter.post("/admin/student/add", studentsCreate);

module.exports = adminRouter
