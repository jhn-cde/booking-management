import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks';
import { FloatingButton, PageContainer } from '../../../components';
import { BottomTabScreenProps } from '../../../navigators/types';
import { styles, selectColors } from '../../../theme';
import { BookingList, StatusMenu } from '../components';

export const Bookings = ({navigation}: BottomTabScreenProps<'Bookings'>) => {
  const [toShow, setToShow] = useState('Pending');
  const colors = useAppSelector(selectColors);
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
      <BookingList toShow={toShow}/>
      <FloatingButton
        navigateTo={() => navigation.navigate('AddBooking')}
        iconName='add-outline'
      />
    </PageContainer>
  )
}
