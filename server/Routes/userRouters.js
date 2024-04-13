const express = require("express");
const usersRouter = express.Router();

const getUsersBySchoolId = require("../Controllers/usersController");

usersRouter.get("/users/:id", getUsersBySchoolId);

module.exports = usersRouter