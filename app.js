var http = require('http');
var express = require('express');
var app = require('./config/mysql/express')();
var mysql = require('mysql');

var passport = require('./config/mysql/passport')(app);
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

//custom middlewares
app.use(function(req,res,next){
	res.locals.isAuthenticated = req.isAuthenticated();
	res.locals.currentUser = req.user;
	next();
});

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));

var auth = require('./routes/auth')(passport);
app.use('/auth', auth);


server.listen(7777, function(){
	console.log("7777포트에서 웹서버 가동중");
})