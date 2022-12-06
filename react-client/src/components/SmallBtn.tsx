import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  tour: String
}

const SmallBtn = ({tour} : Props) => {
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

export default SmallBtn