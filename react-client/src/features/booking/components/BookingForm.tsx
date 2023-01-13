import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks'
import data from '../../../assets/countries.json'

import useForm from '../../../hooks/useForm'
import { selectColors } from '../../../theme'
import { BookingInterface } from '../../../ts/interfaces/booking.interface'

export const BookingForm = ({initialState}: {initialState: BookingInterface}) => {
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
        alignItems: 'center',
        maxWidth: '100%'
      }}>
    </View>
  )
}

const customStyles = StyleSheet.create({
  elementContainer:{
    padding: 10,
    borderRadius: 10
  }
})
