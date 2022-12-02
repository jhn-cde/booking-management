const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  contactId: String,
  price: Number,
  outstanding: Number,
  state: String,
  startdate: Date,
  foodType: [],
  npassengers: Number,
  passengers: [],
  tours:[],
  userId: String
});

const booking = mongoose.model('Booking', schema);

module.exports = booking