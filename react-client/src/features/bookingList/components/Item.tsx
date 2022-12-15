import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import KebabBtn from "../../../components/KebabBtn"
import { colors } from "../../../theme/theme"
import { Booking } from "../../../ts/interfaces/booking.interface"
import ItemInfo from "./ItemInfo"

interface Props extends Booking{
  navigateTo: (_id: String) => void
}
const Item = ({_id, startdate, tours, contact, ntravelers, navigateTo}: Props) => {
  return (
    <View 
      style={{alignItems: 'center', marginBottom: 10}}
    >
      <View style={customStyles.container}>
        <TouchableOpacity
          style={{marginLeft: 5, width: '85%'}}
          onPress={() => navigateTo(_id)}
          activeOpacity={0.5}
        >
          <Text style={{...customStyles.title, marginBottom: 3}}>
            {contact.name} - {String(ntravelers)}p
          </Text>
          <ItemInfo
            date={startdate}
            tours={tours} 
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
    color: colors.secondary,
    fontWeight: '500',
    fontSize: 20,
  }
})

export default Item