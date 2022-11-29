var mongoose = require('mongoose');
var schema = new mongoose.Schema({
 name: String,
 ndoc: String,
});
module.exports = mongoose.model('Customer', schema);