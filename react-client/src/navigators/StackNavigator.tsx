import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAppSelector } from '../app/hooks'
import { AddBookingNavigator, Booking } from '../features'
import { styles, selectColors } from '../theme'
import Tabs from './Tabs'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  const colors = useAppSelector(selectColors);
  
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle:{
          backgroundColor: colors.background
        },
        headerShadowVisible: false,
        headerTitleStyle:{
          ...styles.title,
          color: colors.secondary
        }
      }}
    >
      <Stack.Screen
        name='Tabs' 
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Booking' 
        component={Booking}
        options={{title: 'Reserva'}}
      />

      <Stack.Screen
        name='AddBooking' 
        component={AddBookingNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator