import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { RootStackScreenProps } from '../../../navigators/types';
import { PageContainer, Refresh } from '../../../components';
import { getBooking, getTour } from '../../../api'
import { BookingInterface } from '../../../ts/interfaces/booking.interface';

export const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const [booking, setBooking] = useState<BookingInterface | undefined>(undefined)

  useEffect(()=>{
    getBooking(route.params.id, setBooking)
  }, [])
  
  if(!booking) return(
    <Refresh refreshFun={getTour(route.params.id, setBooking)}/>
  )

  return (
    <PageContainer>
      <Text>{booking.contact.name}</Text>
    </PageContainer>
  )
}

export default Booking