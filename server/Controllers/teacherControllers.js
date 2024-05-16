const { connection, Result } = require("./connectionController");

const getFacultyById = (req, res) => {
	Id = req.params.id;
	const sqlgetById = "SELECT * FROM faculty WHERE UsersId = ?";
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
