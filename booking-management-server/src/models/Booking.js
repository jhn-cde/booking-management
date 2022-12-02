const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  contactId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true},
  price: {
    type: Number, 
    min: 0,
    get: v => Math.round(v*100)/100,
    set: v => Math.round(v*100)/100,
    default: 0
  },
  outstanding: {type: Number, min: 0, default: 0},
  state: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  startdate: {type: Date, default: Date.now},
  foodType: {type: String, default: ''},
  ntravelers: {type: Number, min: 0, default: 1},
  travelers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
  tours: [{ type: Schema.Types.ObjectId, ref: 'Tour' }],
  userId: {type: String, required: true}
});

const booking = mongoose.model('Booking', schema);

module.exports = booking