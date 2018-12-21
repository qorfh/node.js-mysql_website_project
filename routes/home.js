// routes/home.js
var express = require('express');
var router = express.Router();
var conn = require('../config/mysql/db')();
//var passport = require('../config/passport');

//Home
router.get('/', function(res,res){
	res.render('home/home');
});
router.get('/about', function(req,res){
	res.render('home/about')
});
router.get('/content', function(req,res){
	res.render('home/content');
})

module.exports = router;