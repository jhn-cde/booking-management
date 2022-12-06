const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 username: {type: String, trim: true, required: true},
 password: {type: String, trim: true, required: true},
 rol: {
  type: String, 
  trim: true, 
  enum: ['admin', 'user'],
  default: 'user'
},
 isActive: {type: Boolean, default: true}
});

const user = mongoose.model('User', schema);

module.exports = user