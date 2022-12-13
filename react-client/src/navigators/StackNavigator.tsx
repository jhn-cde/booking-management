import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import React from 'react'
import BookingList from '../features/bookingList/page/BookingList'
import { colors, styles } from '../theme/theme'

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle:{
          backgroundColor: colors.primary
        },
        headerShadowVisible: false,
        headerTitleStyle:{
          ...styles.title,
          color: colors.secondary
        },
      }}
    >
      <Stack.Screen name='bookings' component={BookingList}/>
    </Stack.Navigator>
  )
}

export default StackNavigator