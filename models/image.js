var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    memberID: String,
    img: String,
});

module.exports = mongoose.model('image', imageSchema);