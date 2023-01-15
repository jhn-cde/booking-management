import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { RootStackScreenProps } from '../../../navigators/types';
import { PageContainer, Refresh } from '../../../components';
import { BookingInterface } from '../../../ts/interfaces/booking.interface';
import { CustomerInterface } from '../../../ts/interfaces/customer.interface';
import { get } from '../../../api/api';

export const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const [booking, setBooking] = useState<BookingInterface | undefined>(undefined)
  const [contact, setContact] = useState<CustomerInterface | undefined>(undefined)
  
  useEffect(()=>{
    fillData();
  }, [])
  
  async function fillData() {
    const _booking = await get('bookings', route.params.id)
    setBooking(_booking)
    if(_booking){
      const _contact = await get('customers', _booking.contactId)
      setContact(_contact)
    }
  }

  if(!booking || !contact) return(
    <Refresh refreshFun={fillData}/>
  )
  /* tour, nombres*, telefono*, lugar*, nViajantes*, fecha*, extra* */
  return (
    <PageContainer>
      <Text>{contact.name}</Text>
    </PageContainer>
  )
}

export default Booking