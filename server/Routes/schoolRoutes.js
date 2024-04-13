const express = require("express");
const schoolRouter = express.Router();

const getSchoolsInfo = require("../Controllers/schoolContollers");

schoolRouter.get("/school", getSchoolsInfo);

module.exports = getSchoolsInfo