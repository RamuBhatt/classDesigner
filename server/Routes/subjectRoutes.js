const express = require("express");
const subjectRouter = express.Router();

const {
	createSubject,
	getAllSubjects,
	getSubject,
} = require("../Controllers/subjectController");

subjectRouter.post("/subject", createSubject);
subjectRouter.get("/subject/all/:id", getAllSubjects);
subjectRouter.get("/subject/:id", getSubject);

module.exports = subjectRouter;
