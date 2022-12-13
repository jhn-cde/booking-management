import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import StatusMenu from "../components/StatusMenu"
import BookingDateList from "../components/BookingDateList"
import { colors } from "../../../theme/theme"
import PageContainer from "../../../components/PageContainer"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = () => {
  const [toShow, setToShow] = useState('Pending')
  const [bookings, setBookings] = useState<data[]>([])

  useEffect(() => {
    axios.get<data[]>('http://192.168.1.3:3000/api/bookings/groupdate')
    .then(response => {
      if(response.status === 200){
        setBookings(response.data)
      }
    })
    .catch(err => {
      console.log('Error!!', err)
    }) 
  }, [])

  return (
    <PageContainer>
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
    </PageContainer>
  )
}

export default BookingList