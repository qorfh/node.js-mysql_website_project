module.exports = function(){
	var mysql = require("mysql");
	var conn = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'project'
	})
	conn.connect();
	return conn;
}