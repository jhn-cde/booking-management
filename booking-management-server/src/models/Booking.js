const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  contactId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  price: {
    type: Number, 
    min: 0,
    get: v => Math.round(v*100)/100,
    set: v => Math.round(v*100)/100,
  },
  outstanding: {type: Number, min: 0},
  state: {Type: String, required: true},
  startdate: Date,
  foodType: [String],
  npassengers: {type: Number, min: 0},
  passengers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
  tours: [{ type: Schema.Types.ObjectId, ref: 'Tour' }],
  userId: String
});

const booking = mongoose.model('Booking', schema);

module.exports = booking