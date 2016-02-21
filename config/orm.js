var connection =require('../config/connection.js');
var orm = {
  selectAll: function(tableInput, cb) {
    var q = 'SELECT * FROM' + tableInput + ';';
    connection.query(q, function(err, result){
      if (err) throw error;
      cb(result);
    });
  }
};
module.exports = orm;
