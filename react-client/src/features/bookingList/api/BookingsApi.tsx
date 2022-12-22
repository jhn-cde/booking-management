import { api } from "../../../api/api";

interface data{
  _id: {year: number, month: number},
  bookings: []
}
export const fetchBookings = (setBookings: (value: React.SetStateAction<data[] | undefined>) => void) => {
  api.get<data[]>('/bookings/groupdate')
  .then(response => {
    if(response.status === 200){
      setBookings(response.data)
    }
  })
  .catch(err => {
    console.log('Error!!', err)
  })
}