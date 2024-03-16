const { connection, Result } = require("./connectionController");

const getTimeTable = (req, res) => {
    const sqlget = "SELECT * FROM exam_time_table";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database" + err);
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });
}

const createTimeTable = (req, res) => {
    const{Id, Exam, Date, Subject, TimeFrom, TimeTo, isActive} = req.body;
    
    const sqlInsert = `INSERT INTO exam_time_table VALUES (?,?,?,?,?,?,?)`;
    connection.query(sqlInsert, [Id,Subject,isActive,TimeFrom,TimeTo,Exam, Date], (err, result) => {
        
        if(err){
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error on inserting the data" + err;
            Result.Status = 404;
            console.log(err)
        }else{
            Result.IsSuccess = true;
            Result.Model = req.body;
            Result.Message = "data is inserted";
            Result.Status = 200;
        }
        res.send(Result);
    });
}

const updateTimeTable = (req, res) => {
    id = req.params.id
    const{Date, Subject, isActive, timeFrom, timeTo, Exam} = req.body
    const sqlUpdate = `UPDATE exam_time_table SET Date = ?, Subject = ?, isActive = ?, timeFrom = ?, timeTo = ?, Exam = ? WHERE Id = ${[id]}`

    connection.query(sqlUpdate, [Date, Subject, isActive, timeFrom, timeTo, Exam], (err, result) => {
        if(err){
            console.log("error on updating data", err);
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error on updating the data" + err;
            Result.Status = 404;
        }else{
            Result.IsSuccess = true;
            Result.Model = req.body;
            Result.Message = "Data is updated";
            Result.Status = 200;
        }
    });
}

const deleteTimeTable = (req, res) => {
    id = req.params.id;
}
module.exports = { getTimeTable, createTimeTable, updateTimeTable }