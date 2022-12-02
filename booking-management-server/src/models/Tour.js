const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 name: {Type: String, trim: true, required: true},
 price: {
  type: Number, 
  min: 0,
  get: v => Math.round(v*100)/100,
  set: v => Math.round(v*100)/100,
},
 ndays: {Type: Number, min: 0},
 userId: {Type: String, required: true}
});

const tour = mongoose.model('Tour', schema);

module.exports = tour