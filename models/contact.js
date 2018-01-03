var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	memberID : String,
	name : String,
	img : String,
	phone : String,
	check : Number
});

module.exports = mongoose.model('contact', contactSchema);
