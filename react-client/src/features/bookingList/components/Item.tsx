import { useNavigation } from "@react-navigation/native"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { get, update } from "../../../api/api"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { KebabBtn, Refresh } from "../../../components"
import { selectColors } from "../../../theme"
import { CustomerInterface, TourInterface } from "../../../ts/interfaces"
import { fetchBookingsList, selectBookingById } from "../slice/bookingListSlice"

export const Item = ({_id}: {_id: String}) => {
  const colors = useAppSelector(selectColors);
  const booking = useAppSelector(state => selectBookingById(state, _id))
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [contact, setContact] = useState<CustomerInterface | undefined>(undefined);
  const [tour, setTour] = useState<TourInterface | undefined>(undefined);
  const [items, setItems] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const _states = [
      {name: 'Compartir', value: 'Share', onPress: shareBooking},
      {name: 'Editar', value: 'Edit', onPress: () => navigation.navigate('Booking', {id: _id})},
      {name: 'Marcar como pendiente', value: 'Pending', onPress: () => changeState('Pending')},
      {name: 'Completar', value: 'Completed', onPress: () => changeState('Completed')},
      {name: 'Cancelar', value: 'Cancelled', onPress: () => changeState('Cancelled')},
      {name: 'Eliminar', value: 'Delete', onPress: deleteBooking}
    ]

    if(!tour || !contact){
      getData();

      const tmp = _states.filter(_state => _state.value!==booking?.state);
      let _items = tmp.map(_item => {return{onPress: _item.onPress, name: _item.name}});

      setItems([..._items]);
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
  const shareBooking = async () => {
    const msg = await getData()
    
    if(msg){
      const shareOptions = {
        title: 'Compartir via',
        message: `_*Peru Jungle Trips*_`+
          `${msg.name}`+
          `${msg.tour}`+
          `${msg.dir}`+
          `${msg.ntra}`+
          `${msg.extra}`
      }
  
      Share.share(shareOptions)
      .then((res)=>console.log(res))
      .catch((error)=>error && console.log(error));
    }
  }

  const getData = async () => {
    if(booking){
      try {
        const _contact = await get('customers', booking.contactId);
        setContact(_contact);

        const _tour = await get('tours', booking.tours[0]._id)
        setTour(_tour)

        return {
          name: `\nNombre de pasajero: *${_contact.name}*`,
          tour: `\nTour: *${_tour.name}*`,
          dir: `\nDireccion: ${booking.address?'*'+booking.address+'*':''}`,
          ntra: `\n*${booking.ntravelers}* pasajero${booking.ntravelers>1?'s':''}`,
          extra: `${booking.extra?'\n*'+booking.extra+'*':''}`
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  if(!booking || !contact || !tour){
    return(
      <Refresh text={'Cargando...'} refreshFun={()=>{}}/>
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
            {contact.name} - {String(booking.ntravelers)}p
          </Text>
          <Text style={{color: colors.text}}>
            {`${format(new Date(booking.startdate), 'EEEE d')}`} - {tour.name}
          </Text>
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
