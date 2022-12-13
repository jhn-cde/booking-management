import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../theme/theme'

const PageContainer = ({children}:{children: React.ReactNode}) => {
  return (
    <View style={customStyles.container}>
      {children}
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    backgroundColor: colors.primary,
    flex: 1,
    paddingHorizontal: 15,
  }
})
export default PageContainer