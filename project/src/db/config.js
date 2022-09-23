const mysql = require('mysql');

const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '1234',
	port : 3000,
	database : 'o2'
})

db.connect();

module.exports = db;