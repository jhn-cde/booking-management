import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAppSelector } from '../app/hooks'
import Booking from '../features/booking/page/Booking'
import { styles } from '../theme/theme'
import { selectColors } from '../theme/themeSlice'
import Tabs from './Tabs'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  const colors = useAppSelector(selectColors);
  
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
        options={{title: 'Agregar Reserva'}}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator