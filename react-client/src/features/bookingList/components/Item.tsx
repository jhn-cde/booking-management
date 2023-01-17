import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { get } from "../../../api/api"
import { useAppSelector } from "../../../app/hooks"
import { KebabBtn } from "../../../components"
import { selectColors } from "../../../theme"
import { BookingInterface, CustomerInterface } from "../../../ts/interfaces"
import { ItemInfo } from "./ItemInfo"

export const Item = ({_id, startdate, tours, contactId, ntravelers}: BookingInterface) => {
  const colors = useAppSelector(selectColors);
  const navigation = useNavigation()
  const [contact, setContact] = useState<CustomerInterface | undefined>(undefined)

  useEffect(()=>{
    getContact()
  }, [])

  const getContact = async () => {
    const _contact = await get('customers', contactId)
    setContact(_contact)
  }
  
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
            {contact&&contact.name} - {String(ntravelers)}p
          </Text>
          <ItemInfo
            date={startdate}
            tour_id={tours[0]._id} 
          />
        </TouchableOpacity>
        <View>
          <KebabBtn 
            items={
              [{onPress: ()=>navigation.navigate('Booking', {id: _id}), name: 'Editar'}]
            }
          />
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
