import React, { useState } from "react"
import { FlatList, ScrollView, View } from "react-native"
import { BookingDateList } from "./BookingDateList"
import { Refresh } from "../../../components"
import { useFocusEffect } from "@react-navigation/native"
import { get } from "../../../api/api"
import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

export const BookingList = ({toShow}:{toShow: String}) => {
  const [bookings, setBookings] = useState<data[] | undefined>(undefined);

  useFocusEffect(React.useCallback(() => {
    updateBookings();
  }, []))

  const updateBookings = async () => {
    const _bookings = await get('bookings', 'groupdate');
    setBookings(_bookings);
  }

  if(!bookings){
    return (<Refresh refreshFun={updateBookings}/>)
  }
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
