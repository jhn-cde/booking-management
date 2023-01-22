import React from "react"
import { FlatList } from "react-native"
import { BookingDateList } from "./BookingDateList"
import { useAppSelector } from "../../../app/hooks"
import { selectBookingsList } from "../slice/bookingListSlice"

export const BookingList = ({toShow}:{toShow: String}) => {
  const bookings = useAppSelector(selectBookingsList)

  return (
    <FlatList
      data={bookings}
      keyExtractor={item => String(item._id.month)+String(item._id.year)}
      renderItem={({item}) => 
        <BookingDateList 
          date={item._id} 
          bookings={item.bookings}
          state={toShow}
        />}
    />  
  )
}
