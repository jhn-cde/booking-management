const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: {type: String, Trim: true, required: true},
 ndoc: {type: String, trim: true},
 email: {type: String, trim: true},
 phone: {type: String, trim: true},
 nationality: {type: String, trim: true},
 birthdate: Date,
 userId: {type: String, required: true}
});

const customer = mongoose.model('Customer', schema);

module.exports = customer