//Load packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


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
//router.get('/contacts',route_contact.show);
//router.get('/contacts/:memberID', route_contact.show_by_id);
//router.get('/contacts/member/:memberID',route_contact.find_by_id);
//router.post('/contacts', route_contact.create);



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


