import React, { useEffect } from 'react'
import { RootStackScreenProps } from '../../../navigators/types';
import PageContainer from '../../../components/PageContainer';
import AddBooking from '../components/AddBooking';
import EditBooking from '../components/EditBooking';

const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {

  useEffect(() => {
    const title = route.params? 'Reserva' : 'Agregar reserva' 
    navigation.setOptions({title: title})
  }, [route.params])
  

  return (
    <PageContainer>
      { route.params
        ?<EditBooking id={route.params.id}/>
        :<AddBooking />
      }
    </PageContainer>
  )
}

export default Booking