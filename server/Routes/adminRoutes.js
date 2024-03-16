const express = require("express");
const adminRouter = express.Router();

const studentsCreate = require("../Controllers/adminControllers");

adminRouter.post("/admin/student/add/:count", studentsCreate);

module.exports = adminRouter
