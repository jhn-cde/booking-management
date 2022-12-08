import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import StatusMenu from "../StatusMenu"
import BookingDateList from "./BookingDateList"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = () => {
  const [state, setState] = useState('Pending')
  const [bookings, setBookings] = useState<data[]>([])

  useEffect(() => {
    axios.get<data[]>('http://localhost:3000/api/bookings/groupdate').then(response => {
      if(response.status === 200){
        setBookings(response.data)
      }
    })
  }, [])

  return (
    <View>
      <View>
        <StatusMenu state={state} setState={setState}/>
      </View>
      <View>
        {bookings.map((list, index) => 
          <BookingDateList 
            key={index} 
            date={list._id} 
            bookings={list.bookings}
            state={state}
          />
        )}
      </View>
    </View>
  )
}

export default BookingList