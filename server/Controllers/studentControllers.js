const { connection, Result } = require("./connectionController");

const getStudentById = (req, res) => {
	Id = req.params.id;
	const sqlgetById = "SELECT * FROM student WHERE UsersId = ?";
	const sqlUsersgetById = "SELECT * FROM users WHERE Id = ?";
	let User = {};

	connection.query(sqlUsersgetById, [Id], (err, result) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on user getting data";
			Result.Model = [];
			Result.Status = 409;
			res.send(Result);
			return;
		}
		User = { ...User, ...result[0] };
		connection.query(sqlgetById, [Id], (err, studentResult) => {
			if (err) {
				Result.IsSuccess = false;
				Result.Message = "Error stydent on getting data";
				Result.Model = [];
				Result.Status = 409;
				res.send(Result);
				return;
			}
			User = { ...User, ...studentResult[0] };
			Result.IsSuccess = true;
			Result.Message = "Data is successfully retrieve";
			Result.Model = User;
			Result.Status = 200;
			res.send(Result);
		});
	});
};

const getStudentBySchool = (req, res) => {
	SchoolId = req.params.id;
	const sqlgetById = "SELECT * FROM student WHERE SchoolId = ?";

	connection.query(sqlgetById, [SchoolId], (err, result) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on getting data";
			Result.Model = [];
			Result.Status = 409;
			res.send(Result);
			return;
		}
		Result.IsSuccess = true;
		Result.Message = "Data is successfully retrieve";
		Result.Model = result;
		Result.Status = 200;
		res.send(Result);
	});
};

const getStudentByStandard = (req, res) => {
	StandardID = req.params.id;
	const sqlgetById = "SELECT * FROM student WHERE StandardId = ?";

	connection.query(sqlgetById, [StandardID], (err, result) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on getting data";
			Result.Model = [];
			Result.Status = 409;
			res.send(Result);
			return;
		}
		Result.IsSuccess = true;
		Result.Message = "Data is successfully retrieve";
		Result.Model = result;
		Result.Status = 200;
		res.send(Result);
	});
};

const getStudentBySubject = (req, res) => {
	SubjectId = req.params.id;
	const sqlgetById = "SELECT * FROM student WHERE SubjectId = ?";

	connection.query(sqlgetById, [SubjectId], (err, result) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on getting data";
			Result.Model = [];
			Result.Status = 409;
			res.send(Result);
			return;
		}
		Result.IsSuccess = true;
		Result.Message = "Data is successfully retrieve";
		Result.Model = result;
		Result.Status = 200;
		res.send(Result);
	});
};

const updateStudent = (req, res) => {
	const {
		Address,
		Division,
		Email,
		FirstName,
		LastName,
		Id,
		Medium,
		Phone,
		RollNumber,
		StandardId,
		Gender,
	} = req.body;
	const IsActive = 1;
	const user = [FirstName, LastName, Address, Email, Phone, Gender, IsActive];
	const student = [Division, Medium, RollNumber, StandardId];

	const sqlUpdateStudent = "UPDATE student SET ? WHERE UsersId = ?";
	const sqlUpdateUser = "UPDATE users SET ? WHERE Id = ?";

	connection.query(sqlUpdateUser, [...user, Id], (err, result) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on getting data";
			Result.Model = [];
			Result.Status = 409;
			console.log(err);
			res.send(Result);
		}
		connection.query(sqlUpdateStudent, [...student, Id], (err, result) => {
			if (err) {
				Result.IsSuccess = false;
				Result.Message = "Error on getting data";
				Result.Model = [];
				Result.Status = 409;
				console.log(err);
				res.send(Result);
			}
			Result.IsSuccess = true;
			Result.Message = "Data updated successfully";
			Result.Model = [];
			Result.Status = 200;
			res.send(Result);
		});
	});
};

module.exports = {
	getStudentById,
	getStudentBySchool,
	getStudentByStandard,
	getStudentBySubject,
	updateStudent,
};
