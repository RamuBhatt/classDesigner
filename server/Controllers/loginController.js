const { connection, Result } = require("./connectionController");
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    const { UserName, Password } = req.body;
    const sqlcondition = `SELECT * FROM users WHERE userName = '${UserName}' AND password = '${Password}'`;

    connection.query(sqlcondition, [UserName, Password], (err, result) => {
        if(err) throw err;

        if(result.length > 0){
            const {Id,RoleId, UserName, SchoolId} = result[0];
            const token = jwt.sign({user:{Id, RoleId, UserName, SchoolId}}, 'my_secret_key');
            Result.IsSuccess = true;
            Result.Model = token;
            Result.Message = "User does exist";
            Result.Status = 200;
            res.send(Result);
            return
        }
        Result.IsSuccess = false;
        Result.Model = [];
        Result.Message = "Incorrect UserName or Password";
        Result.Status = 404;
        res.send(Result);
    });
}

module.exports = userLogin