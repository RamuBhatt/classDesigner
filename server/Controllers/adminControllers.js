const guid = require("guid");
const { connection, Result } = require("./connectionController");

const studentsCreate = (req, res) => {
    const { Count, SchoolId, StandardId } = req.body;
    const Users = [];
    const Students = [];
    const Password = "123";
    const RoleId = 1;
    const isActive = 0;

    for (i = 1; i <= Count; i++) {
        const Id = guid.create().toString();
        const UserName = `ABC ${100000 + i}`;
        const StudentId = guid.create().toString();

        Users.push([Id, isActive, RoleId, Password, SchoolId, UserName]);
        Students.push([StandardId, Id, StudentId, isActive]);
    }

    const sqlInsertUsers = "INSERT INTO users (Id, isActive,RoleID, Password, SchoolId, UserName) VALUES ?";
    connection.query(sqlInsertUsers, [Users], (err, resonse) => {
        if (err) {
            console.log(err);
            res.send(false);
            return;
        }
        console.log("User Success");
    });

    const sqlInsertStudents = "INSERT INTO student (StandardId, UsersId, Id, isActive) VALUES ?";
    connection.query(sqlInsertStudents, [Students], (err, response) => {
        if (err) {
            console.log(err);
            res.send(false);
            return;
        }
        console.log("Student Success");
        res.send({ IsSucess: true });
    });
}

module.exports = studentsCreate