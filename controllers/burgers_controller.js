var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function (req, res) {
  burger.showBurgers(function (burgers_data) {
    res.render('index');
  });
});

router.post('/', function (req, res) {
  burger.showBurgers(function (burgers_data) {
    res.render('index');
  });
});

router.post('/add', function (req, res) {
  burger.addBurger(req.body.burger_name, function (result) {
    res.redirect('/');
  });
});

router.post('/devour', function (req, res) {
  burger.devourBurger(req.body.id, function (result) {
    res.redirect('/');
  });
});

router.delete('/delete', function (req, res) {
  burger.deleteBurger(req.body.id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;
