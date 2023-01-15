import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAppSelector } from "../../../app/hooks"
import { KebabBtn } from "../../../components"
import { selectColors } from "../../../theme"
import { BookingInterface } from "../../../ts/interfaces/booking.interface"
import { ItemInfo } from "./ItemInfo"

export const Item = ({_id, startdate, tours, contact, ntravelers}: BookingInterface) => {
  const colors = useAppSelector(selectColors);

  const navigation = useNavigation()

  return (
    <View 
      style={{alignItems: 'center', marginBottom: 10}}
    >
      <View style={customStyles.container}>
        <TouchableOpacity
          style={{marginLeft: 5, width: '85%'}}
          onPress={() => navigation.navigate('Booking', {id: _id})}
          activeOpacity={0.5}
        >
          <Text style={{...customStyles.title, marginBottom: 3, color: colors.secondary}}>
            {contact.name} - {String(ntravelers)}p
          </Text>
          <ItemInfo
            date={startdate}
            tour_id={tours[0]._id} 
          />
        </TouchableOpacity>
        <View>
          <KebabBtn />
        </View>
      </View>
      <View style={customStyles.line}></View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%'
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%'
  },
  title:{
    fontWeight: '500',
    fontSize: 20,
  }
})
