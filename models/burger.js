var orm = require('../config/orm.js');

var burgerThings ={
  findAll: function(cb) {
    orm.selectAll("about_a_burger", function(res){
      cb(res);
    });
  },
  addBurger: function(nameInput, cb){
    orm.newBurger("about_a_burger", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.devourBurger("about_a_burger", inputId, cb);
  },
};

module.export = burgerThings;
