const express = require("express");
const loginRouter = express.Router();
const userLogin = require("../Controllers/loginController");

loginRouter.post('/login', userLogin);

module.exports = loginRouter