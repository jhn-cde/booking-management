import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { FloatingButton, PageContainer, Refresh, SpinIcon } from '../../../components';
import { BottomTabScreenProps } from '../../../navigators/types';
import { styles, selectColors } from '../../../theme';
import { BookingList, StatusMenu } from '../components';
import { fetchBookingsList } from '../slice/bookingListSlice';

export const Bookings = ({navigation}: BottomTabScreenProps<'Bookings'>) => {
  const [toShow, setToShow] = useState('Pending');
  const colors = useAppSelector(selectColors);
  const bookingsStatus = useAppSelector(state => state.bookingsDateList.status)
  const error = useAppSelector(state => state.bookingsDateList.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(bookingsStatus === 'idle'){
      dispatch(fetchBookingsList())
    }
  },[bookingsStatus, dispatch])

  let content;
  if(bookingsStatus === 'failed'){
    content = (
      <Refresh 
        text={error} 
        refreshFun={()=>dispatch(fetchBookingsList())}
      />
    )
  }
  else if(bookingsStatus === 'loading'){
    content = ( 
      <View style={{position: 'absolute', top: 10, right: 10}}>
        <SpinIcon/>
      </View>
    )
  }
  else if(bookingsStatus === 'succeeded'){
    content = <BookingList toShow={toShow}/>
  }
  return (
    <PageContainer>
      <Text
        style={{
          ...styles.title, 
          color: colors.secondary,
        marginVertical: 10}}
      >
        Reservas
      </Text>
      <View>
        <StatusMenu state={toShow} setState={setToShow}/>
      </View>

      {content}
      
      <FloatingButton
        navigateTo={() => navigation.navigate('AddBooking')}
        iconName='add-outline'
      />
    </PageContainer>
  )
}
