import React, { useState } from "react"
import { View } from "react-native"
import { BookingDateList } from "./BookingDateList"
import { Refresh } from "../../../components"
import { fetchBookings } from "../api"
import { useFocusEffect } from "@react-navigation/native"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

export const BookingList = ({toShow}:{toShow: String}) => {
  const [bookings, setBookings] = useState<data[] | undefined>(undefined);

  useFocusEffect(React.useCallback(() => {
    updateBookings()
  }, []))

  const updateBookings = () => {
    fetchBookings(setBookings)
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
        />
      )}
    </View>
      
  )
}
