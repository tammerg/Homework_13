var express = require ('express');
var router = express.Router();
var burger_commands = require('../models/burger.js');

//get route -> index
router.get('/', function(req,res) {
	res.render('index');
});

module.exports = router;
