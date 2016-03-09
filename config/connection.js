var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host : 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user : 'uav3pmrxaujty64v',
  password : 'ln7yakcrr9xmoto2',
  database : 'ir724yjxghmglpnb'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


module.exports = connection;
