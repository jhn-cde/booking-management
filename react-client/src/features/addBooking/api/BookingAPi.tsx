import { api } from "../../../api/api";

interface BookingI{
  contact: {name: string, phone: string},
  address: string,
  state: string,
  startdate: Date,
  extra: string,
  ntravelers: string,
  tours: {}[]
}

export async function AddBooking(booking: BookingI): Promise<any>  {
  const customer = {
    name: booking.contact.name,
    phone: booking.contact.phone
  }
  try{
    const res = await api.post('/customers', customer)
    .then(response => {
        if(response.status === 201){
          const newBooking = {
            contact: {name: customer.name, _id: response.data._id},
            address: booking.address,
            state: booking.state,
            startdate: booking.startdate,
            extra: booking.extra,
            ntravelers: booking.ntravelers,
            tours: booking.tours
          }

        return api.post('/bookings', newBooking)
        }
      }
    )
    return res
  }catch (err){
    console.log('Error!!', err)
    return err
  }
}