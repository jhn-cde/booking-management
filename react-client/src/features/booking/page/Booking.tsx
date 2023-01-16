import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { RootStackScreenProps } from '../../../navigators/types';
import { PageContainer, Refresh, TextInputWithIcon } from '../../../components';
import { TourInterface } from '../../../ts/interfaces';
import { get } from '../../../api/api';
import useForm from '../../../hooks/useForm';
import { DateWithIcon, DropDownWithIcon } from '../components';

export const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const [booking, handleBookingChange, setBooking] = useForm(undefined)
  const [contact, handleContactChange, setContact] = useForm(undefined)
  const [tour, handleTourChange, setTour] = useForm(undefined)
  
  useEffect(()=>{
    fillData();
  }, [])
  
  async function fillData() {
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

  if(!booking || !contact || !tour) return(
    <Refresh refreshFun={fillData}/>
  )
  return (
    <PageContainer>
      <View>
        <Text>Sobre el tour</Text>
        <View>
          <DropDownWithIcon
            name={'Tour'}
            tour={tour} 
            setTour={(_tour: TourInterface)=>setTour(_tour)}
          />
          <TextInputWithIcon
            name={'N. Pasajeros'}
            text={booking.ntravelers.toString()} 
            setText={(_text: string)=>handleBookingChange({k: 'ntravelers', v: _text})}
          />
          <DateWithIcon
            name={'Fecha'}
            date={booking.startdate} 
            setDate={(_date: Date)=>handleBookingChange({k: 'startdate', v: _date})}
          />
          <TextInputWithIcon
            name={'Extra'}
            text={booking.extra.toString()} 
            setText={(_text: string)=>handleBookingChange({k: 'extra', v: _text})}
          />
        </View>
      </View>

      <View>
        <Text>Datos de contacto</Text>
        <View>
          <TextInputWithIcon
            name={'Nombres'}
            text={contact.name.toString()} 
            setText={(_text: string)=>handleContactChange({k: 'name', v: _text})}
          />
          <TextInputWithIcon
            name={'Telefono'}
            text={contact.phone.toString()} 
            setText={(_text: string)=>handleContactChange({k: 'phone', v: _text})}
          />

          <TextInputWithIcon
            name={'Direccion'}
            text={booking.address.toString()} 
            setText={(_text: string)=>handleBookingChange({k: 'address', v: _text})}
          />
        </View>
      </View>
    </PageContainer>
  )
}

export default Booking