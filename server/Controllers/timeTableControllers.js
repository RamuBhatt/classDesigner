const { connection, Result } = require("./connectionController");


const getSortedExams = async (req, res) => {
    try {
        let examArray = await getExams(); 
        
        let promises = examArray.map(exam => {
            return getTable(exam.Exam);
        });
        
        let Result = await Promise.all(promises);
        res.json(Result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data from database");
    }
}

const getExams = () => {
    return new Promise((resolve, reject) => {
        const ExamQuery = `SELECT DISTINCT Exam FROM exam_time_table`;
        connection.query(ExamQuery, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const getTable = (examName) => {
    return new Promise((resolve, reject) => {
        const sqlget = `SELECT * FROM exam_time_table WHERE Exam = ?`;
        connection.query(sqlget, [examName], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({ header: examName, data: result });
        });
    });
}

const createTimeTable = (req, res) => {
    const{Id, Exam, Date, Subject, TimeFrom, TimeTo, IsActive} = req.body;
    
    const sqlInsert = `INSERT INTO exam_time_table VALUES (?,?,?,?,?,?,?)`;
    connection.query(sqlInsert, [Id,Subject,IsActive,TimeFrom,TimeTo,Exam, Date], (err, result) => {
        
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
module.exports = { getSortedExams, createTimeTable, updateTimeTable }