const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: String,
 price: Number,
 ndays: Number,
 userId: String
});

const tour = mongoose.model('Tour', schema);

module.exports = tour