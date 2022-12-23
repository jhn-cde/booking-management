import { Text, View } from "react-native"
import { useAppSelector } from "../../../app/hooks";
import { styles } from "../../../theme/theme"
import { selectColors } from "../../../theme/themeSlice";
import { BookingInterface } from "../../../ts/interfaces/booking.interface";
import Item from "./Item"

interface Props{
  date: {month: number, year: number},
  bookings: BookingInterface[],
  state: String | undefined,
  navigateTo: (_id: String) => void
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BookingDateList = ({date, bookings, state, navigateTo}: Props) => {
  const colors = useAppSelector(selectColors);
  
  return (
    <View style={{marginBottom: 15}}>
      <View style={{marginBottom: 10}}>
        <Text style={{...styles.subtitle, color: colors.primary}}>
        {months[date.month-1]}, {String(date.year)}
        </Text>
      </View>
      <View>
        {
          bookings.map((booking, index) =>
            (state==='all' || state===booking.state)&&
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