const { connection } = require("./connectionController");

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

module.exports = getSortedExams