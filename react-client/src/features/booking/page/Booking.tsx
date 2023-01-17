import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '../../../navigators/types';
import { PageContainer, Refresh} from '../../../components';
import { TourInterface } from '../../../ts/interfaces';
import { get, update } from '../../../api/api';
import useForm from '../../../hooks/useForm';
import { DateWithIcon, DropDownWithIcon, TextInputWithIcon } from '../components';
import { selectColors, styles } from '../../../theme';
import { useSelector } from 'react-redux';
import { SpinIcon } from '../../../components';

export const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const colors = useSelector(selectColors);
  const [booking, handleBookingChange, setBooking] = useForm(undefined)
  const [contact, handleContactChange, setContact] = useForm(undefined)
  const [tour, handleTourChange, setTour] = useForm(undefined)
  const [edited, setEdited] = useState(false)
  const [editing, setEditing] = useState(false)
  
  useEffect(() => {
    fillData();
  }, [])
  
  const fillData = async () => {
    const _booking = await get('bookings', route.params.id)
    setBooking(_booking)
    if(_booking){
      try {
        const _contact = await get('customers', _booking.contactId)
        setContact(_contact)

        const _tour = await get('tours', _booking.tours[0]._id)
        setTour(_tour)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const save = async() => {
    try {
      setEdited(false)
      setEditing(true)
      const _tour = await update('tours', tour._id, tour)
      const _booking = await update('bookings', booking._id, booking)
      const _contact = await update('customers', contact._id, contact)
      fillData()
      setEditing(false)
    } catch (error) {
      console.log(error)
    }
  }

  if(!booking || !contact || !tour) return(
    <Refresh refreshFun={fillData}/>
  )
  return (
    <PageContainer>
      <View style={{
        ...customStyles.container,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TextInputWithIcon
          name={''}
          text={contact.name.toString()} 
          setText={(_text: string)=>{
            setEdited(true)
            handleContactChange({k: 'name', v: _text})}
          }
          propsStyles={{fontSize: 25, color: colors.secondary, paddingHorizontal: 0, marginEnd: 10}}
        />
      </View>
      <View style={customStyles.container}>
        <Text style={{...customStyles.subTitle, ...styles.subtitle, color: colors.primary}}>
          Sobre el tour
        </Text>
        <View>
          <DropDownWithIcon
            name={'Tour'}
            tour={tour} 
            setTour={(_tour: TourInterface)=>{
              setEdited(true)
              setTour(_tour)}
            }
          />
          <TextInputWithIcon
            name={'N. Pasajeros'}
            text={booking.ntravelers.toString()} 
            setText={(_text: string)=>{
              setEdited(true)
              handleBookingChange({k: 'ntravelers', v: _text})}
            }
          />
          <DateWithIcon
            name={'Fecha'}
            date={booking.startdate} 
            setDate={(_date: Date)=>{
              setEdited(true)
              handleBookingChange({k: 'startdate', v: _date})}
            }
          />
        </View>
      </View>

      <View style={customStyles.container}>
        <Text style={{...customStyles.subTitle, ...styles.subtitle, color: colors.primary}}>
          Datos de contacto
        </Text>
        <View>
          <TextInputWithIcon
            name={'Telefono'}
            text={contact.phone.toString()} 
            setText={(_text: string)=>{
              setEdited(true)
              handleContactChange({k: 'phone', v: _text})}
            }
          />

          <TextInputWithIcon
            name={'Direccion'}
            text={booking.address.toString()} 
            setText={(_text: string)=>{
              setEdited(true)
              handleBookingChange({k: 'address', v: _text})}
            }
          />
        </View>
      </View>
      <View style={customStyles.container}>
        <TextInputWithIcon
          name={'Extra'}
          text={booking.extra.toString()} 
          setText={(_text: string)=>{
            setEdited(true)
            handleBookingChange({k: 'extra', v: _text})}
          }
        />
      </View>
      {edited && 
      <View style={{...customStyles.container, marginTop: 10}}>
        <TouchableOpacity
          style={{
            ...customStyles.btn,
            backgroundColor: colors.secondary
          }}
          onPress={save}
        >
          <Text
            style={{fontSize: 18, color:'#fff'}}
          >
            GUARDAR
          </Text>
        </TouchableOpacity>
      </View>}
      {editing&&
        <View style={customStyles.spin_container}>
          <SpinIcon/>
        </View>
      }
    </PageContainer>
  )
}

const customStyles = StyleSheet.create({
  container: {
    marginVertical: 15
  },
  subTitle: {
    marginBottom: 5
  },
  btn: {
    marginTop: 15,
    borderRadius: 5,
    paddingVertical: 10,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spin_container: {
    position: 'absolute',
    top: 10,
    right: 10
  }
})

export default Booking