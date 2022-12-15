import { Text, View } from "react-native"
import { styles } from "../../../theme/theme"
import { Booking } from "../../../ts/interfaces/booking.interface";
import Item from "./Item"

interface Props{
  date: {month: number, year: number},
  bookings: Booking[],
  state: String | undefined,
  navigateTo: (_id: String) => void
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BookingDateList = ({date, bookings, state, navigateTo}: Props) => {
  return (
    <View style={{marginBottom: 15}}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.subtitle}>
        {months[date.month-1]}, {String(date.year)}
        </Text>
      </View>
      <View>
        {
          bookings.map((booking, index) =>
            (!state || state===booking.state)&&
            <View key={index} style={{marginBottom: 10}}> 
              <Item {...booking} navigateTo={navigateTo}/>
            </View>
          )
        }
      </View>
    </View>
  )
}

export default BookingDateList