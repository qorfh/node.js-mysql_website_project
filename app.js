var http = require('http');
var express = require('express');
var methodOverride = require('method-override');
var app = require('./config/mysql/express')();
var mysql = require('mysql');

var passport = require('./config/mysql/passport')(app);
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
//app.use('/upload', express.static('uploads'));
//가상 경로 설정, 내부적으로 /upload라는 가상경로로 접근

console.log(__dirname);
app.use(methodOverride("_method"));

//custom middlewares
app.use(function(req,res,next){
	res.locals.isAuthenticated = req.isAuthenticated();
	res.locals.currentUser = req.user;
	next();
});

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
//app.use('/upload', require('./routes/upload'));

var auth = require('./routes/auth')(passport);
app.use('/auth', auth);


server.listen(7777, function(){
	console.log("7777포트에서 웹서버 가동중");
})
