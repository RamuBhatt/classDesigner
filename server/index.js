const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AxeNiNjAa1904',
    database: 'classdesigner'
})

app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: false }));

const Result = {
    IsSuccess:null,
    Model:null,
    Message:null,
    Status:null
}

app.get("/api/school", (req, res) => {

    const sqlget = "SELECT * FROM school";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });

});

app.get("/api/school/:id", (req, res) => {

    id = req.params.id;
    const sqlget = `SELECT * FROM school WHERE id = ${[id]} `;

    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });
});

app.delete("/api/school/:id", (req, res) => {
    id = req.params.id;

    const sqlDelete = `DELETE FROM school WHERE Id = ${[id]}`;
    connection.query(sqlDelete, [id], (err, result) => {
        if (err) {
            console.error("Error deleting data:", err);
            res.status(500).send("Error deleting data from database");
            return;
        }
        
        Result.IsSuccess = true;
        Result.Model = req.body;
        Result.Message = "Data is deleted";
        Result.Status = 200;

        console.log("Data deleted successfully");
        res.status(200).send("Data deleted successfully");
    });
});


app.get("/api/student", (req, res) => {

    const sqlget = "SELECT * FROM student";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });

});

app.get("/api/admin", (req, res) => {

    const sqlget = "SELECT * FROM admin";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });

});

app.get("/api/faculty", (req, res) => {

    const sqlget = "SELECT * FROM faculty";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });

});

app.get("/api/parents", (req, res) => {

    const sqlget = "SELECT * FROM parents";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });

});

app.get("/api/timetable", (req, res) => {

    const sqlget = "SELECT * FROM exam_time_table";
    connection.query(sqlget, (err, result) => {
        if (err) {
            res.status(500).send("Error fetching data from database");
            return;
        }
        let Result = { data: result, Message: 'Success' }
        res.send(Result);
    });
});

app.post("/api/timetable", (req, res) => {

    const{Date, Id, Subject, isActive, timeFrom, timeTo, Exam} = req.body

    const sqlInsert = `INSERT INTO exam_time_table VALUES (?,?,?,?,?,?,?)`;
    connection.query(sqlInsert, [Date,Id,Subject,isActive,timeFrom,timeTo,Exam], (err, result) => {
        
        if(err){
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error on inserting the data";
            Result.Status = 404;
        }else{
            console.log("data is inserted");
            Result.IsSuccess = true;
            Result.Model = req.body;
            Result.Message = "data is inserted";
            Result.Status = 200;
        }
        res.send(Result);
    });
});

app.put("/api/timetable/:id", (req, res) => {
    id = req.params.id

    const{Date, Subject, isActive, timeFrom, timeTo, Exam} = req.body
    const sqlUpdate = `UPDATE exam_time_table SET Date = ?, Subject = ?, isActive = ?, timeFrom = ?, timeTo = ?, Exam = ? WHERE Id = ${[id]}`

    connection.query(sqlUpdate, [Date, Subject, isActive, timeFrom, timeTo, Exam], (err, result) => {
        if(err){
            console.log("error on updating data", err);
            Result.IsSuccess = false;
            Result.Model = [];
            Result.Message = "Error on updating the data";
            Result.Status = 404;
        }else{
            Result.IsSuccess = true;
            Result.Model = req.body;
            Result.Message = "Data is updated";
            Result.Status = 200;
        }
    })
})

app.get("/api/timetable/exam", async (req, res) => {
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
});

function getExams() {
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

function getTable(examName) {
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


app.listen(1000, () => {
    console.log("Running on port 1000");
});