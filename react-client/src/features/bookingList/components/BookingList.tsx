import { useEffect, useState } from "react"
import { View } from "react-native"
import BookingDateList from "./BookingDateList"
import Refresh from "../../../components/Refresh"
import { fetchBookings } from "../api/BookingsApi"
import { useNavigation } from "@react-navigation/native"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = ({toShow}:{toShow: String}) => {
  const [bookings, setBookings] = useState<data[] | undefined>(undefined);

  const navigation = useNavigation()

  useEffect(() => {
    updateBookings()
  }, [])

  const updateBookings = () => {
    fetchBookings(setBookings)
  }

  const navigateTo = (_id: String) =>{
    navigation.navigate('Booking', {id: _id})
  }

  if(!bookings){
    return (<Refresh refreshFun={updateBookings}/>)
  }

  return (
    <View>
      {bookings.map((list, index) => 
        <BookingDateList 
          key={index} 
          date={list._id} 
          bookings={list.bookings}
          state={toShow}
          navigateTo={navigateTo}
        />
      )}
    </View>
      
  )
}

export default BookingList