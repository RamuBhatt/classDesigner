const { connection, Result } = require("./connectionController");

const getSchoolsInfo = () => {
    const sqlget = "SELECT * FROM school";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });
}