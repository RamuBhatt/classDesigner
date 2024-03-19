const { connection, Result } = require("./connectionController");

const getUsersBySchoolId = (req, res) => {
    const SchoolId = req.params.id;
    const sqlget = `SELECT * FROM users WHERE SchoolId = ?`

    connection.query(sqlget, [SchoolId], (err, response) => {
        if(err){
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error in geting data";
            Result.Status = 404;
            res.send(Result);
        }
        Result.IsSuccess = true;
        Result.Model = response;
        Result.Message = "Data is restreive";
        Result.Status = 200;
        res.send(Result);
    });
}

module.exports = getUsersBySchoolId;