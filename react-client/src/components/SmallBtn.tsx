import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  tour: String
}

export const SmallBtn = ({tour} : Props) => {
  return (
    <View
      style={styles.container}
    >
      {(
      <Text style={styles.text}>{tour}</Text>
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 5,
  },
  text:{
    textDecorationLine: 'underline'
  }
})
