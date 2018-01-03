//Load packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//image limit
app.use(bodyParser.json({limit : '20mb'}));
app.use(bodyParser.urlencoded({limit : '20mb',extended: true }));

var port = process.env.PORT || 20180;

//DEFINE MODEL
//var Book = require('./models/book');
var Member = require('./models/member');
var Contact = require('./models/contact');
var Image = require('./models/image');


//Router
// TODO add Image
// var routerMember = require('./routes')(app, Member);
// var routerContact = require('./routes')(app,Contact);
// var routerImage = require('./routes')(app,Image);

app.use('/api',require('./routes'));

var server = app.listen(port, function(){
	console.log("Express JHDB server has started on port" + port);
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	//CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/JHDB');


