import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import { BookingInterface } from '../../../ts/interfaces/booking.interface'
import useForm from '../../../hooks/useForm';
import { RootStackScreenProps } from '../../../navigators/types';
import PageContainer from '../../../components/PageContainer';
import AddBooking from '../components/AddBooking';
import EditBooking from '../components/EditBooking';

const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  if(route.params){
    return (
      <PageContainer>
        <EditBooking id={route.params.id}/>
      </PageContainer>
    )
  }
  else{
    return (
      <PageContainer>
        <AddBooking />
      </PageContainer>
    )
  }
}

export default Booking