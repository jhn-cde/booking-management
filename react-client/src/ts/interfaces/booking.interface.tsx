export interface BookingInterface {
  startdate: Date,
  tours: {name: String, _id: String}[],
  contactId: String,
  ntravelers: Number,
  address: String,
  state: "Pending" | "In Progress" | "Completed" | "Cancelled",
  price: Number,
  foodType: String,
  travelers: {_id: String}[],
  extra: String,
  userId: String,
  _id: String
}
