var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use('/', routes);
app.use('/add', routes);
app.use('/devour', routes);
app.use('delete', routes);

var port = 3000;
app.listen(port);
