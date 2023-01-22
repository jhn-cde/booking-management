import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAppSelector } from '../../../app/hooks';
import { styles } from '../../../theme/theme';
import { selectColors } from '../../../theme/themeSlice';
import {AddBooking, ContactData, ToursData} from '../page';
import { AddBookingParamList } from './types';

const Stack = createNativeStackNavigator<AddBookingParamList>()

export const AddBookingNavigator = () => {
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
        },
        animation: 'slide_from_right',
        gestureDirection: 'horizontal',
        gestureEnabled: true
      }}
    >
      <Stack.Screen
        name='Main' 
        component={AddBooking}
        options={{title: 'Agregar reserva'}}
      />
      <Stack.Screen
        name='Contact' 
        component={ContactData}
        options={{title: 'Contact'}}
      />
      <Stack.Screen
        name='Tours' 
        component={ToursData}
        options={{title: 'Tour'}}
      />
    </Stack.Navigator>
  )
}
