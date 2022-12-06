const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: {type: String, Trim: true, required: true},
 ndoc: {type: String, trim: true, default: ''},
 email: {type: String, trim: true, default: ''},
 phone: {type: String, trim: true, default: ''},
 nationality: {type: String, trim: true, default: ''},
 birthdate: {type: Date, default: Date.now},
 userId: {type: String, required: true}
});

const customer = mongoose.model('Customer', schema);

module.exports = customer