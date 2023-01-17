import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import { useAppSelector } from "../../../app/hooks";
import { styles, selectColors } from "../../../theme";
import { BookingInterface } from "../../../ts/interfaces";
import { Item } from "./Item"

interface Props{
  date: {month: number, year: number},
  bookings: BookingInterface[],
  state: String | undefined
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const BookingDateList = ({date, bookings, state}: Props) => {
  const colors = useAppSelector(selectColors);
  const [_bookings, set_Bookings] = useState(bookings);

  useEffect(() => {
    const tmp = bookings.filter(booking => state==='all' || state===booking.state);
    set_Bookings(tmp);
  }, [state])

  if(_bookings.length === 0){
    return(<></>)
  }
  return (
    <View style={{marginBottom: 15}}>
      <View style={{marginBottom: 10}}>
        <Text style={{...styles.subtitle, color: colors.primary}}>
        {months[date.month-1]}, {String(date.year)}
        </Text>
      </View>
      <FlatList
        data={_bookings}
        keyExtractor={item => String(item._id)}
        renderItem={({item}) =>
          <View style={{marginBottom: 10}}> 
            <Item _id={item._id}/>
          </View>
        }
      />
    </View>
  )
}
