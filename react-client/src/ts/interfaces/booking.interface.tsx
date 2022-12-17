export interface BookingInterface {
  startdate: Date,
  tours: {name: String, _id: String}[],
  contact: {name: String, _id: String},
  ntravelers: Number,
  state: "Pending" | "In Progress" | "Completed" | "Cancelled",
  price: Number,
  foodType: String,
  travelers: {_id: String}[],
  userId: String,
  _id: String
}
