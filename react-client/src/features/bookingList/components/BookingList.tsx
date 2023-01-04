import axios from "axios"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import StatusMenu from "./StatusMenu"
import BookingDateList from "./BookingDateList"
import PageContainer from "../../../components/PageContainer"
import FloatingButton from "../../../components/FloatingButton"
import { BottomTabScreenProps } from "../../../navigators/types"
import { styles } from '../../../theme/theme'
import { useAppSelector } from "../../../app/hooks"
import { selectColors } from "../../../theme/themeSlice"
import Refresh from "../../../components/Refresh"
import { api } from "../../../api/api"
import { fetchBookings } from "../api/BookingsApi"
import { useNavigation } from "@react-navigation/native"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = ({toShow}:{toShow: String}) => {
  const colors = useAppSelector(selectColors);
  const [bookings, setBookings] = useState<data[] | undefined>(undefined);

  const navigation = useNavigation()

  useEffect(() => {
    updateBookings()
  }, [bookings])

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