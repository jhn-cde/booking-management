import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BookingList from "../features/bookingList/page/BookingList";
import { colors } from "../theme/theme";
import Icon from '@expo/vector-icons/Ionicons';
import Record from "../features/record/page/Record";
import { BottomTabParamList } from "./types";

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();
const Tabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: colors.primary }}
      backBehavior="firstRoute"
      activeColor={colors.secondary}
    >
      <Tab.Screen
        name="Bookings"
        component={BookingList}
        options={{
          title: 'Calendario', 
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          title: 'Record',
          tabBarIcon: ({ color }) => (
            <Icon name="analytics" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs