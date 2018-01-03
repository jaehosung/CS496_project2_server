var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
	memberID: String,
	password: String,		
	name: String,
	phone: String
});

module.exports = mongoose.model('member', memberSchema);
