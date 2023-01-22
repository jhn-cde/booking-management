import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';
import { selectColors } from '../theme';

export const PageContainer = ({children}:{children: React.ReactNode}) => {
  const colors = useSelector(selectColors);

  return (
    <View style={{...customStyles.container, backgroundColor: colors.background}}>
      {children}
    </View>
  )
}

export const customStyles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 15,
  }
})
