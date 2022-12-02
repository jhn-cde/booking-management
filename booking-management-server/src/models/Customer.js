const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: {Type: String, trim: true, required: true},
 ndoc: {Type: String, trim: true},
 email: {Type: String, trim: true},
 phone: {Type: String, trim: true},
 nationality: {Type: String, trim: true},
 birthdate: Date,
 userId: {Type: String, required: true}
});

const customer = mongoose.model('Customer', schema);

module.exports = customer