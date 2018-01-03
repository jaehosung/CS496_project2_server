const Member = require('../models/image');



exports.show function(req,res){
    Image.find(function(err, images){
        console.log("call get image");
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(images);
    })
};


// GET SINGLE BOOK
// GET SINGLE BOOK
export.show_by_id = function(req, res){
    Image.findOne({_id: req.params.memberID}, function(err, image){
        if(err) return res.status(500).json({error: err});
        if(!image) return res.status(404).json({error: 'image not found'});
        res.json(image);
    })
};

// GET BOOK BY AUTHOR
// GET BOOKS BY AUTHOR
export.find_by_id = function(req, res){
    Image.find({memberID: req.params.memberID}, {_id: 1, img: 1},  function(err, images){
        if(err) return res.status(500).json({error: err});
        if(images.length === 0) return res.status(404).json({error: 'image not found'});
        res.json(images);
    })
};

// CREATE BOOK
export.create = function(req, res){
    var image = new Image();

    for(var i in req.body){
        image.memberID = req.body[i]['memberID'];
        image.img = req.body[i]['img'];
    }

    image.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
};


export.update = function(req, res){
    Image.update({ _id: req.params.book_id }, { $set: req.body }, function(err, output){
        if(err) res.status(500).json({ error: 'database failure' });
        console.log(output);
        if(!output.n) return res.status(404).json({ error: 'book not found' });
        res.json( { message: 'book updated' } );
    })
};

// DELETE BOOK
export.delete = function(req, res){
    Image.remove({ _id: req.params.image_id }, function(err, output){
        if(err) return res.status(500).json({ error: "database failure" });


        res.status(204).end();
    })
};