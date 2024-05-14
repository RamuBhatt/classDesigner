const guid = require("guid");
const { connection, Result } = require("./connectionController");

const createStudents = (req, res) => {
	const { Count, SchoolId, StandardId } = req.body;
	const Users = [];
	const Students = [];
	const Parents = [];
	const StuRoleId = 1;
	const ParRoleId = 3;
	const IsActive = 0;

	for (i = 1; i <= Count; i++) {
		const SId = guid.create().toString();
		const PId = guid.create().toString();
		const StudentId = guid.create().toString();
		const ParentsId = guid.create().toString();
		const name = Math.floor(Math.random() * 90000) + 10000;
		const StuName = `STU${name}`;
		const StuPass = `STU${name}`;
		const ParName = `PAR${name}`;
		const ParPass = `PAR${name}`;

		Users.push([SId, IsActive, StuRoleId, StuPass, SchoolId, StuName]);
		Users.push([PId, IsActive, ParRoleId, ParPass, SchoolId, ParName]);
		Students.push([StandardId, SId, StudentId]);
		Parents.push([StudentId, SchoolId, ParentsId]);
	}

	const sqlInsertUsers =
		"INSERT INTO users (Id, IsActive,RoleID, Password, SchoolId, UserName) VALUES ?";
	connection.query(sqlInsertUsers, [Users], (err, result) => {
		if (err) {
			res.send(false);
			console.log(err);
			return;
		}
		console.log("User Success");
	});

	const sqlInsertStudents =
		"INSERT INTO student (StandardId, UsersId, Id) VALUES ?";
	connection.query(sqlInsertStudents, [Students], (err, result) => {
		if (err) {
			res.send(false);
			return;
		}
		console.log("Student Success");
		// res.send({ IsSucess: true });
	});

	const sqlInsertParents =
		"INSERT INTO parents (StudentId, SchoolId, Id) VALUES ?";
	connection.query(sqlInsertParents, [Parents], (err, result) => {
		if (err) {
			res.send(false);
			return;
		}
		console.log("Parents Suuccess");
	});
	res.send({ IsSucess: true });
};

const createFaculty = () => {
	const { Count, SchoolId, StandardId } = req.body;
	const Users = [];
	const Faculty = [];
	const RoleId = 2;
	const IsActive = 0;

	for (i = 1; i <= Count; i++) {
		const Id = guid.create().toString();
		const FacultyId = guid.create().toString();
		const name = Math.floor(Math.random() * 90000) + 10000;
		const username = `FAC${name}`;

		Users.push([Id, IsActive, RoleId, "1234", SchoolId, username]);
		Faculty.push([FacultyId, SchoolId, FacultyId]);
	}

	const sqlInsertUsers =
		"INSERT INTO users (Id, IsActive,RoleID, Password, SchoolId, UserName) VALUES ?";
	connection.query(sqlInsertUsers, [Users], (err, result) => {
		if (err) {
			res.send(false);
			console.log(err);
			return;
		}
		console.log("User Success");
	});

	const sqlInsertFaculty =
		"INSERT INTO student (StandardId, UsersId, Id) VALUES ?";
	connection.query(sqlInsertFaculty, [Faculty], (err, result) => {
		if (err) {
			res.send(false);
			return;
		}
		console.log("Student Success");
		// res.send({ IsSucess: true });
	});
	res.send({ IsSucess: true });
};
module.exports = { createStudents, createFaculty };
