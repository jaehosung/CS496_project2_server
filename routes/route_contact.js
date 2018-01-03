const Contact = require('../models/contact');

exports.show =  function(req,res){
    Contact.find(function(err, contacts){
	if(err) return res.status(500).send({error: 'database failure'});
	
	console.log("send");
	res.json(contacts);
	});
};

// GET SINGLE member
exports.show_by_id = function(req, res){
	Contact.findOne({memberID: req.params.memberID}, function(err, contacts){
		if(err) return res.statue(500).json({error: err});
		if(!contacts) return res.status(404).json({error: 'book not found'});
		res.json(contacts);
	});	
};

// GET member BY member_id
exports.find_by_id = function(req, res){
	Contact.find({memberID: req.params.memberID}, {_id: 0, img: 1, name:1, phone:1}, function(err, contacts){
	if(err) return res.status(500).json({error: err});
	if(books.length ==0) return res.status(404).json({error: 'book not found'});
	res.json(contacts);
});
};

// CREATE BOOK
exports.create = function(req, res){

	for(var i in req.body){
	var contact = new Contact();
	contact.memberID = req.body[i]['memberID'];
	contact.img = req.body[i]['img'];
	contact.name = req.body[i]['name'];
	contact.phone = req.body[i]['phone'];
	contact.save(function(err){
		if(err){
			console.error(err);
			res.json({result: 0});
			return;
		}
	});
	}
	console.log("test complete");	
	res.json({result: 1});
};

exports.update = function(req, res){
Contact.findById(req.params.memberID, function(err, contact){
	if(err) return res.status(500).json({error: 'database failure'});
	if(!contact) return res.status(404).json({error: 'contact not found'});
	
	if(req.body.memberID) contact.memberID = req.body.memberID;
	if(req.body.password) contact.img = req.body.img;
	if(req.body.name) contact.name = req.body.name;
	if(req.body.phone) contact.phone = req.body.phone;
	
	contact.save(function(err){
		if(err) res.status(500).json({error: 'failed to update'});
		res.json({message: 'book updated'});
	});
});
};

 
exports.delete = function(req,res){
Contact.remove({memberID : req.params.memberID}, function(err, output){
	if(err) return status(500).json({error: "database failure"});
	res.status(204).end();
});
};

