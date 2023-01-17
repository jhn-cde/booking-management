import React, { useEffect } from "react"
import { FlatList } from "react-native"
import { BookingDateList } from "./BookingDateList"
import { Refresh } from "../../../components"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectBookingsList, updateBookingsList } from "../slice/bookingListSlice"

export const BookingList = ({toShow}:{toShow: String}) => {
  const bookings = useAppSelector(selectBookingsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    updateBookings()
  },[])

  const updateBookings = async () => {
    dispatch(updateBookingsList())
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
