const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: String,
 ndoc: String,
});

const customer = mongoose.model('Customer', schema);

module.exports = customer