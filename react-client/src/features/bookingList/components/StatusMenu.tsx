import React, { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  state: String | undefined,
  setState: Dispatch<SetStateAction<any>>
}

const StatusMenu = ({state, setState}: Props) => {
  return (
    <View style={customStyles.container}>
      <View style={customStyles.option}>
        <TouchableOpacity
          onPress={() => setState('Pending')}
        >
          <Text
            style={(state && state==='Pending')&&customStyles.selected}
          >Pending</Text>
        </TouchableOpacity>
      </View>
      <View style={{...customStyles.option}}>
        <TouchableOpacity
          onPress={() => setState('Cancelled')}
        >
          <Text
            style={(state && state==='Cancelled')&&customStyles.selected}
          >Cancelado</Text>
        </TouchableOpacity>
      </View>
      <View style={{...customStyles.option}}>
        <TouchableOpacity
          onPress={() => setState(undefined)}
        >
          <Text
            style={(!state)&&customStyles.selected}
          >Ver todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginVertical: 16
  },
  option:{
    marginEnd: 10
  },
  selected:{
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
})

export default StatusMenu