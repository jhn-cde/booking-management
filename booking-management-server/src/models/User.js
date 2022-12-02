const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 username: String,
 password: String,
 rol: String,
 isActive: String
});

const user = mongoose.model('User', schema);

module.exports = user