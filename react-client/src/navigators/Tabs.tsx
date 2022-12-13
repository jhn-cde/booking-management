import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BookingList from "../features/bookingList/page/BookingList";
import { colors } from "../theme/theme";
import Icon from '@expo/vector-icons/Ionicons';
import Record from "../features/record/page/Record";

const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: colors.primary }}
      backBehavior="firstRoute"
      activeColor={colors.secondary}
    >
      <Tab.Screen
        name="bookings"
        component={BookingList}
        options={{
          title: 'Calendario', 
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="record"
        component={Record}
        options={{
          title: 'Record',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs