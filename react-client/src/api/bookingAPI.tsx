import { get } from "./api"

export const getBooking = (
    tour_id: String, 
    f: any
  ) => {
  get('bookings', tour_id, f)
}