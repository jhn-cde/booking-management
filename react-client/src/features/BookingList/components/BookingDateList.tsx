import { Text, View } from "react-native"
import { styles } from "../../../theme/theme"
import Item from "./Item"

interface Booking {
  startdate: Date,
  tours: [],
  contact: {name: String},
  ntravelers: Number,
  state: String
}

interface Props {
  date: {month: number, year: number},
  bookings: Booking[],
  state: String | undefined
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BookingDateList = ({date, bookings, state}: Props) => {
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
              <Item {...booking}/>
            </View>
          )
        }
      </View>
    </View>
  )
}

export default BookingDateList