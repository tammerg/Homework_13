var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'burgers_db'
});

connection.connect();

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.end();

module.exports = connection;
