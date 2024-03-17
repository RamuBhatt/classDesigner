const { connection } = require("./connectionController");

const getSchoolsInfo = (req, res) => {
    const sqlget = "SELECT * FROM schools";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        console.log("in schools");
        res.send(Result);
    });
}

module.exports = getSchoolsInfo