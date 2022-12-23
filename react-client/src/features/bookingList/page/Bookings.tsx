import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks';
import FloatingButton from '../../../components/FloatingButton';
import PageContainer from '../../../components/PageContainer';
import { BottomTabScreenProps } from '../../../navigators/types';
import { styles } from '../../../theme/theme'
import { selectColors } from '../../../theme/themeSlice';
import BookingList from '../components/BookingList';
import StatusMenu from '../components/StatusMenu';

const Bookings = ({navigation}: BottomTabScreenProps<'Bookings'>) => {
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

export default Bookings