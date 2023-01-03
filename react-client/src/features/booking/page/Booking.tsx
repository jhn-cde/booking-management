import React, { useEffect, useState } from 'react'
import { RootStackScreenProps } from '../../../navigators/types';
import PageContainer from '../../../components/PageContainer';
import EditBooking from '../components/EditBooking';

const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
  const [edit, setEdit] = useState(false)
  return (
    <PageContainer>
      { edit&&
        <EditBooking id={route.params.id}/>
      }
    </PageContainer>
  )
}

export default Booking