const Member = require('../models/member');





exports.show =  function(req,res){
    Member.find(function(err, members){
	if(err) return res.status(500).send({error: 'database failure'});
	
	console.log("send");
	res.json(members);
	});
};

// GET SINGLE member
export.show_by_id = function(req, res){
	Member.findOne({member1: req.params.id_member}, function(err, members){
		if(err) return res.statue(500).json({error: err});
		if(!members) return res.status(404).json({error: 'book not found'});
		res.json(members);
	});	
};

// GET member BY member_id
export.find_by_id = function(req, res){
	Member.find({member1: req.params.id_member}, {_id: 0, password: 1, name:0, phone:0}, function(err, members){
	if(err) return res.status(500).json({error: err});
	if(books.length ==0) return res.status(404).json({error: 'book not found'});
	res.json(members);
});
};

// CREATE BOOK
export.create = function(req, res){
	var member = new Member();


	//member.member1 = req.body.member1;
	//member.password = req.body.password;
	//member.name = req.body.name;
	//member.phone = req.body.phone;
	for(var i in req.body){
	var member = new Member();
	member.member1 = req.body[i]['member1'];
	member.password = req.body[i]['password'];
	member.name = req.body[i]['name'];
	member.phone = req.body[i]['phone'];
	member.save(function(err){
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

export.update = function(req, res){
Member.findById(req.params.id_member, function(err, member){
	if(err) return res.status(500).json({error: 'database failure'});
	if(!member) return res.status(404).json({error: ' member not found'});
	
	if(req.body.member_id) member.member_id = req.body.member_id;
	if(req.body.password) member.password = req.body.password;
	if(req.body.name) member.name = req.body.name;
	if(req.body.phone) member.phone = req.body.phone;
	
	member.save(function(err){
		if(err) res.status(500).json({error: 'failed to update'});
		res.json({message: 'book updated'});
	});
});
};

 
export.delete = function(req,res){
Member.remove({member1 : req.params.id_member}, function(err, output){
	if(err) return status(500).json({error: "database failure"});
	res.status(204).end();
});
};

