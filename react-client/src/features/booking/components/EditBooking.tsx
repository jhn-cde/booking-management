import axios from 'axios'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Refresh } from '../../../components'
import useForm from '../../../hooks/useForm'
import { BookingInterface } from '../../../ts/interfaces'

export const EditBooking = ({id}: {id:String}) => {
  const [booking, handleInputChange, setBooking] = useForm(undefined)

  useEffect(() => {
    fetchBooking()
  }, [id])

  const fetchBooking = () => {
    axios.get<BookingInterface>(`http://192.168.1.3:3000/api/bookings/${id}`)
    .then(response => {
      if(response.status === 200){
        setBooking(response.data)
      }
    })
    .catch(err => {
      console.log('Error!!', err)
      alert(err)
    })
  }

  if(!booking){
    return (<Refresh refreshFun={fetchBooking}/>)
  }
  return (
    <View>
      <Text>{booking.contact.name}</Text>
    </View>
  )
}
