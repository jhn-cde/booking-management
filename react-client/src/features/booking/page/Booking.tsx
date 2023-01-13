import React, { useState } from 'react'
import { RootStackScreenProps } from '../../../navigators/types';
import { PageContainer } from '../../../components';
import { EditBooking } from '../components';

export const Booking = ({route, navigation}: RootStackScreenProps<'Booking'>) => {
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