module.exports = function connection(){
var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'burgers_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, data) {
  if (err) throw err;

  console.log('The solution is: ', data);
});

connection.end();
};
