import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks'
import data from '../../../assets/countries.json'
import MyPicker from '../../../components/MyPicker'
import useForm from '../../../hooks/useForm'
import { selectColors } from '../../../theme/themeSlice'
import { BookingInterface } from '../../../ts/interfaces/booking.interface'

const BookingForm = ({initialState}: {initialState: BookingInterface}) => {
  const [booking, handleInputChange] = useForm(initialState)
  const colors = useAppSelector(selectColors);
  const countries = data.countries

  return (
    <View 
      style={{
        ...customStyles.elementContainer, 
        backgroundColor: colors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <MyPicker
        options={countries} 
        initialValue={'Peru'}
        changeValue={(newValue) => {}}
      />
    </View>
  )
}

const customStyles = StyleSheet.create({
  elementContainer:{
    padding: 10,
    borderRadius: 10
  }
})

export default BookingForm