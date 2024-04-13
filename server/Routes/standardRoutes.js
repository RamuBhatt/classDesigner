const express = require("express");
const standardRouter = express.Router();

const { createStandard, getAllStandard, getStandard } = require("../Controllers/standardController");

standardRouter.post("/standard", createStandard);
standardRouter.get("/standard/all/:id", getAllStandard);
standardRouter.get("/standard/:id", getStandard);

module.exports = standardRouter