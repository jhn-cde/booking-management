import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';
import { selectColors } from '../theme/themeSlice';

const PageContainer = ({children}:{children: React.ReactNode}) => {
  const colors = useSelector(selectColors);

  return (
    <View style={{...customStyles.container, backgroundColor: colors.background}}>
      {children}
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 15,
  }
})
export default PageContainer