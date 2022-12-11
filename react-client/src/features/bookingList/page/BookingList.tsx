import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import StatusMenu from "../components/StatusMenu"
import BookingDateList from "../components/BookingDateList"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = () => {
  const [toShow, setToShow] = useState('Pending')
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
        <StatusMenu state={toShow} setState={setToShow}/>
      </View>
      <View>
        {bookings.map((list, index) => 
          <BookingDateList 
            key={index} 
            date={list._id} 
            bookings={list.bookings}
            state={toShow}
          />
        )}
      </View>
    </View>
  )
}

export default BookingList