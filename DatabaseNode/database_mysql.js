var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'o2'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// var sql = 'SELECT * FROM topic'; 

// connection.query(sql, function(err, rows, fields){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		for(var i=0; i<rows.length; i++){
// 			console.log(rows[i].description);
// 		}
// 	}
// })

// var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
// var params = ['Supervisor', 'Watcher', 'grahpittie']; // 치환 => 보완!
// connection.query(sql, params, function(err, rows, fileds){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log(rows.insertId);
// 	}
// })

var sql = 'UPDATE topic SET title=?, author=? WHERE id=?';
var params = ['NPM', 'leezche', 1]; // 치환 => 보완!
connection.query(sql, params, function(err, rows, fileds){
	if(err){
		console.log(err);
	} else{
		console.log(rows);
	}
})

connection.end();