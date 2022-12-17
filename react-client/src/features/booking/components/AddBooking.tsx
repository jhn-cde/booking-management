import React from 'react'
import BookingForm from './BookingForm'

const AddBooking = () => {
  return (
    <BookingForm 
      initialState={{
        startdate: new Date(),
        tours: [],
        contact: {name: '', _id:''},
        ntravelers: 1,
        price: 0,
        travelers: [],
        userId: '',
        _id: '',
        foodType:'',
        state: 'Pending'
      }}/>
  )
}

export default AddBooking