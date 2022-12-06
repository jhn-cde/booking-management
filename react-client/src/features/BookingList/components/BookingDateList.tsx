import { Text, View } from "react-native"
import { styles } from "../../../theme/theme"
import Item from "./Item"

interface Booking {
  date: Date,
  tours: String[],
  customerName: String,
  nTravelers: Number,
  state: String
}

interface Props {
  date: Date,
  bookings: Booking[],
  state: String | undefined
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BookingDateList = ({date, bookings, state}: Props) => {
  return (
    <View style={{marginBottom: 15}}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.subtitle}>
          {months[date.getMonth()]}, {date.getFullYear()}
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