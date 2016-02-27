var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var PORT = 8080;
var app = express();

app.use('/scripts', express.static('public/scripts'));
app.use('/css', express.static('public/stylesheets'));
app.use('/img', express.static('public/img'));

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

app.listen(PORT, function(req, res){
  console.log('You are listening on port: %s', PORT);
});
