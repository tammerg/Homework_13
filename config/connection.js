var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host : 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user : 'vd9ql3qe45w11uy2',
  password : 'aaiiygito6gm5ce6',
  database : 'oafe1ud6yohijc7k'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


module.exports = connection;
