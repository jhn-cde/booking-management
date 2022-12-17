import axios from "axios"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import StatusMenu from "../components/StatusMenu"
import BookingDateList from "../components/BookingDateList"
import PageContainer from "../../../components/PageContainer"
import FloatingButton from "../../../components/FloatingButton"
import { BottomTabScreenProps } from "../../../navigators/types"
import { styles } from '../../../theme/theme'
import { useAppSelector } from "../../../app/hooks"
import { selectColors } from "../../../theme/themeSlice"
import Refresh from "../../../components/Refresh"

interface data{
  _id: {year: number, month: number},
  bookings: []
}

const BookingList = ({navigation, route}: BottomTabScreenProps<'Bookings'>) => {
  const colors = useAppSelector(selectColors);
  const [toShow, setToShow] = useState('Pending')
  const [bookings, setBookings] = useState<data[]|undefined>(undefined)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = () => {
    axios.get<data[]>('http://192.168.1.3:3000/api/bookings/groupdate')
    .then(response => {
      if(response.status === 200){
        setBookings(response.data)
      }
    })
    .catch(err => {
      console.log('Error!!', err)
    })
  }

  const navigateTo = (_id: String) =>{
    navigation.navigate('Booking', {id: _id})
  }

  if(!bookings){
    return (<Refresh refreshFun={fetchBookings}/>)
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
      <View>
        {bookings.map((list, index) => 
          <BookingDateList 
            key={index} 
            date={list._id} 
            bookings={list.bookings}
            state={toShow}
            navigateTo={navigateTo}
          />
        )}
      </View>
      <FloatingButton
        navigateTo={() => navigation.navigate('Booking')}
        iconName='add-outline'
      />
    </PageContainer>
  )
}

export default BookingList