enum EState{
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}
export interface BookingInterface {
  startdate: Date,
  tours: {name: String, _id: String}[],
  contact: {name: String, _id: String},
  ntravelers: Number,
  state: EState,
  price: Number,
  foodType: String,
  travelers: {_id: String}[],
  userId: String,
  _id: String
}
