import { StyleSheet, Text, View } from "react-native"
import KebabBtn from "../../../components/KebabBtn"
import { colors, styles } from "../../../theme/theme"
import ItemInfo from "./ItemInfo"

interface Props {
  date: Date,
  tours: String[],
  customerName: String,
  nTravelers: Number
}

const Item = ({date, tours, customerName, nTravelers}: Props) => {
  return (
    <View style={{alignItems: 'center', marginBottom: 10}}>
      <View style={customStyles.container}>
        <View style={{marginLeft: 5, width: '85%'}}>
          <Text style={{...customStyles.title, marginBottom: 3}}>
            {customerName} - {String(nTravelers)}p
          </Text>
          <ItemInfo
            date={date}
            tours={tours} 
          />
        </View>
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