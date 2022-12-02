const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: {type: String, trim: true, required: true},
 price: {
  type: Number, 
  min: 0,
  get: v => Math.round(v*100)/100,
  set: v => Math.round(v*100)/100,
  default: 0
},
 ndays: {type: Number, min: 0, default: 1},
 userId: {type: String, required: true}
});

const tour = mongoose.model('Tour', schema);

module.exports = tour