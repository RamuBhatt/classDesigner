const mysql = require('mysql2');

const connection = mysql.createPool({
	connectionLimit: 20,
	host: "b58rayq5uhoqavn7diwd-mysql.services.clever-cloud.com",
	user: "uct7meqkve4ltlb4",
	password: "YDfs8gqvA7pRBz6tYHOr",
	database: "b58rayq5uhoqavn7diwd",
});

const Result = {
    IsSuccess:null,
    Model:null,
    Message:null,
    Status:null
}

module.exports = { connection, Result }