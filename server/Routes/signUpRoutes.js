const userRegisteration = require("../Controllers/signUpController");
const express = require("express");
const signupRouter = express.Router();

signupRouter.post("/signup", userRegisteration);

module.exports = signupRouter