const guid = require("guid");
const { connection, Result } = require("./connectionController");

/**
 * /:count(30 tne malde url ma)
 * ane aa hu tne aapis = schollid standardid
 * 
 * for 30
 *  guid crerate  
 *      users -> guid , schoolid , username(ABC1001) , 123
 *      student ->  UsersId = guid , StudentId =new Guid() , standardId
 */

const studentsCreate = (req, res) => {
    count = req.params.count;
    const { SchoolId, StandardId } = req.body;
    const Users = [];
    const Students = [];
    const Password = "123";
    const RoleId = 1;

    for(i = 1; i <= count; i++){
        const Id = guid.create().toString();
        const UserName = `ABC ${100000 + i}`;
        const StudentId = guid.create().toString();

        Users.push([Id,RoleId,Password,SchoolId, UserName]);
        Students.push([StandardId, Id, StudentId]);
    }
    
    const sqlInsertUsers = "INSERT INTO users (Id, RoleID, Password, SchoolId, UserName) VALUES ?";
    connection.query(sqlInsertUsers, [Users], (err, resonse) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("User Success");
    });
    
    const sqlInsertStudents = "INSERT INTO student (StandardId, UsersId, Id) VALUES ?";
    connection.query(sqlInsertStudents, [Students], (err, response) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Student Success");
    });
}

module.exports = studentsCreate