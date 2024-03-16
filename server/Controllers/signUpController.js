const guid = require("guid");
const { connection, Result } = require("./connectionController");

const userRegisteration = (req, res) => {
    const UserName = req.body.UserName;

    // check if the username already exist
    const sqlCondition = `SELECT * FROM users WHERE userName = ?`;
    connection.query(sqlCondition, [UserName], (err, result) => {
        if(err) throw err;
        if(result.length > 0){
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "userName already exist";
            Result.Status = 409;
            res.send(Result);
            return
        }
        // register the user if the username does not exist
        userSignUp(req.body, res);
    });
}

const userSignUp = (data, res) => {
    const SchoolId = guid.create().toString();
        const sqlSchoolInsert = "INSERT INTO schools (Id) VALUES (?)";
        connection.query(sqlSchoolInsert, [SchoolId], (err, res) => {
            if(err){
                console.log(err);
            }
            console.log("Success");
        });

    const sqlInsert = `INSERT INTO users (Id, UserName, Password, RoleId, SchoolId) VALUES (?,?,?,?,?)`;
    connection.query(sqlInsert, [data.Id, data.UserName, data.Password, data.RoleId, SchoolId], (err, response) => {
        if(err){
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error on user Registeration" + err;
            Result.Status = 404;
            console.log(err);
            return
        }
        console.log("User data is inserted")
        Result.IsSuccess = true;
        Result.Model = data;
        Result.Message = "user is successfully Registered";
        Result.Status = 200;
        res.send(Result);
    });
}

module.exports = userRegisteration