const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: String,
 ndoc: String,
 email: String,
 phone: String,
 nationality: String,
 birthDate: Date,
 userId: String
});

const customer = mongoose.model('Customer', schema);

module.exports = customer