import { useState } from "react"
import { View } from "react-native"
import StatusMenu from "../StatusMenu"
import BookingDateList from "./BookingDateList"

const bookings = [
  {
    date: new Date(),
    bookings: [
      {
        date: new Date(Date.now()),
        tours: ['Manu 4', 'Machupicchu'],
        customerName: 'Johan',
        nTravelers: 2,
        state: 'Pending'
      },
      {
        date: new Date(Date.now()),
        tours: ['Manu 7'],
        customerName: 'Wilfredo',
        nTravelers: 4,
        state: 'Pending'
      },
    ]
  },
  {
    date: new Date('2023/02/01'),
    bookings: [
      {
        date: new Date(Date.now()),
        tours: ['Manu 4', 'Machupicchu'],
        customerName: 'Johan',
        nTravelers: 2,
        state: 'Cancelled'
      },
      {
        date: new Date(Date.now()),
        tours: ['Manu 7'],
        customerName: 'Wilfredo',
        nTravelers: 4,
        state: 'Pending'
      },
      {
        date: new Date(Date.now()),
        tours: ['Manu 4', 'Manu 7', 'Machupicchu'],
        customerName: 'Yllasiray',
        nTravelers: 2,
        state: 'Pending'
      },
    ]
  }
]

const BookingList = () => {
  const [state, setState] = useState('Pending')

  return (
    <View>
      <View>
        <StatusMenu state={state} setState={setState}/>
      </View>
      <View>
        {bookings.map(list => 
          <BookingDateList 
            key={list.date.toDateString()} 
            date={list.date} 
            bookings={list.bookings}
            state={state}
          />
        )}
      </View>
    </View>
  )
}

export default BookingList