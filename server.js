var express = require('express');
var methodoverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));

//Handlebars and express set as well as default layout
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function(req, res){
  console.log('You are now connected');
});
