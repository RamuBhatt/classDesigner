const { connection, Result } = require("./connectionController");

const createStandard = (req, res) => {
    const { Id, SchoolId, Name, Division } = req.body;
    const sqlInsert = "INSERT INTO standards VALUES (?,?,?,?)";
    connection.query(sqlInsert, [Id, SchoolId, Name, Division], (err, resonse) => {
        if(err) {
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
        res.send(Result);
    });
}

const getAllStandard = (req, res) => {
    SchoolId = req.params.id;
    const sqlGetAll = "SELECT * FROM standards WHERE SchoolsId = ?";
    connection.query(sqlGetAll, [SchoolId], (err, response) => {
        if(err) {
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
}

const getStandard = (req, res) => {
    StandardId = req.params.id;
    const sqlget = "SELECT * FROM standards WHERE Id = ?";
    connection.query(sqlget, [StandardId], (err, response) => {
        if(err) {
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
}

module.exports = { createStandard, getAllStandard, getStandard }