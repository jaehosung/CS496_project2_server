const express 		 = require('express');
const router 		 = express.Router();
const route_contact	 = require('./route_contact');
const route_member	 = require('./route_member');
const route_image	 = require('./route_image');


//member
router.get('/members',route_member.show);
router.get('/members/:id_member', route_member.show_by_id);
router.get('/members/member/:id_member'route_member.find_by_id);
router.post('/members', route_member.create);
router.put('/members/:id_member', route_member.update);
router.delete('/members/:id_member',route_member.delete);

//contact



//image
router.get('/image',route_image.show);
router.get('/images/:memberID', route_image.show_by_id);
router.get('/images/memberID/:memberID'route_image.find_by_id);
router.post('/images', route_image.create);
router.put('/images/:image_id', route_image.update);
router.delete('/images/:image_id',route_image.delete);


module.exports = router;