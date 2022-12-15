import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import { Booking } from '../../../ts/interfaces/booking.interface'
import useForm from '../../../hooks/useForm';
import { RootStackScreenProps } from '../../../navigators/types';

const AddBooking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const [data, handleDataChange, setState] = useForm({
    startdate: new Date(),
    tours: [],
    contact: {name: ''},
    ntravelers: 1,
    state: 'Pending',
    _id: ''
  })

  useEffect(() => {
    if(route.params){
      axios.get<Booking>(`http://192.168.1.3:3000/api/bookings/${route.params.id}`)
      .then(response => {
        if(response.status === 200){
          setState(response.data)
        }
      })
      .catch(err => {
        console.log('Error!!', err)
      })
    }
  }, [route.params])
  
  return (
    <View>
      {route.params
      &&<Text>hello {data._id} - {data.contact.name}</Text>}
    </View>
  )
}

export default AddBooking