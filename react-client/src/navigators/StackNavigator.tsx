import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import React from 'react'
import BookingList from '../features/bookingList/page/BookingList'

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='bookings' component={BookingList}/>
    </Stack.Navigator>
  )
}

export default StackNavigator