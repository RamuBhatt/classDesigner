const { connection, Result } = require("./connectionController");

const createSubject = (req, res) => {
	const { Id, Name, SchoolId, FacultyId, StandardId } = req.body;
	const sqlInsert = "INSERT INTO subject VALUES (?,?,?,?)";
	connection.query(
		sqlInsert,
		[FacultyId, Id, Name, SchoolId, StandardId],
		(err, resonse) => {
			if (err) {
				console.log(err);
				Result.IsSuccess = false;
				Result.Message = "Error on inserting data";
				Result.Model = [];
				Result.Status = 404;
				res.send(Result);
				return;
			}
			console.log("Success");
			Result.IsSuccess = true;
			Result.Message = "data is Inserted successfully";
			Result.Model = req.body;
			Result.Status = 200;
			return res.send(Result);
		}
	);
};

const getAllSubjects = (req, res) => {
	StandardId = req.params.id;
	const sqlGetAll = "SELECT * FROM subject WHERE StandardId = ?";
	connection.query(sqlGetAll, [StandardId], (err, response) => {
		if (err) {
			console.log(err);
			Result.IsSuccess = false;
			Result.Message = "Error on geting data";
			Result.Model = [];
			Result.Status = 409;
			res.send(Result);
			return;
		}
		Result.IsSuccess = true;
		Result.Message = "All data is retrieve";
		Result.Model = response;
		Result.Status = 200;
		res.send(Result);
	});
};

const getSubject = (req, res) => {
	StandardId = req.params.id;
	const sqlget = "SELECT * FROM subject WHERE Id = ?";
	connection.query(sqlget, [StandardId], (err, response) => {
		if (err) {
			Result.IsSuccess = false;
			Result.Message = "Error on geting data";
			Result.Model = [];
			Result.Status = 404;
			res.send(Result);
			return;
		}
		Result.IsSuccess = true;
		Result.Message = "All data is retrieve";
		Result.Model = response;
		Result.Status = 200;
		res.send(Result);
	});
};

module.exports = { createSubject, getAllSubjects, getSubject };
