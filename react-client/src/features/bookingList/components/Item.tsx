import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { get, update } from "../../../api/api"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { KebabBtn, Refresh } from "../../../components"
import { selectColors } from "../../../theme"
import { CustomerInterface } from "../../../ts/interfaces"
import { fetchBookingsList, selectBookingById } from "../slice/bookingListSlice"
import { ItemInfo } from "./ItemInfo"

export const Item = ({_id}: {_id: String}) => {
  const colors = useAppSelector(selectColors);
  const booking = useAppSelector(state => selectBookingById(state, _id))
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [contact, setContact] = useState<CustomerInterface | undefined>(undefined);
  const [items, setItems] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    if(booking){
      getContact();
      
      const edit = {onPress: () => navigation.navigate('Booking', {id: _id}), name: 'Editar'}
      const del = {onPress: deleteBooking, name: 'Eliminar'}
      const _states = [
        {name: 'Marcar como pendiente', value: 'Pending', onPress: () => changeState('Pending')},
        {name: 'Completar', value: 'Completed', onPress: () => changeState('Completed')},
        {name: 'Cancelar', value: 'Cancelled', onPress: () => changeState('Cancelled')},
      ]

      const tmp = _states.filter(_state => _state.value!==booking.state);
      let _items = tmp.map(_item => {return{onPress: _item.onPress, name: _item.name}});

      setItems([edit, ..._items, del]);
    }
  }, [dispatch])

  const changeState = async (newState: String) => {
    try {
      const _booking = await update('bookings', _id, {state: newState});
      dispatch(fetchBookingsList());
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBooking = async () => {
    try {
      console.log('delete');
    } catch (error) {
      console.log(error);
    }
  }

  const getContact = async () => {
    if(booking){
      const _contact = await get('customers', booking.contactId);
      setContact(_contact);
    }
  }

  if(!booking){
    return(
      <Refresh text={'Reserva no encontrada'} refreshFun={()=>{}}/>
    )
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
            {contact&&contact.name} - {String(booking.ntravelers)}p
          </Text>
          <ItemInfo
            date={booking.startdate}
            tour_id={booking.tours[0]._id} 
          />
        </TouchableOpacity>
        <View>
          {items&&
            <KebabBtn 
              items={items}
            />
          }
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
