import React, { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks';
import { selectColors } from '../../../theme';

interface Props {
  state: String,
  setState: Dispatch<SetStateAction<any>>
}

export const StatusMenu = ({state, setState}: Props) => {
  const colors = useAppSelector(selectColors);

  return (
    <View style={customStyles.container}>
      <View style={customStyles.option}>
        <TouchableOpacity
          onPress={() => setState('Pending')}
        >
          <Text
            style={{
              ...(state==='Pending')&&customStyles.selected,
              color: colors.text
            }}
          >Pendiente</Text>
        </TouchableOpacity>
      </View>
      <View style={{...customStyles.option}}>
        <TouchableOpacity
          onPress={() => setState('Cancelled')}
        >
          <Text
            style={{
              ...(state==='Cancelled')&&customStyles.selected,
            color: colors.text
          }}
          >Cancelado</Text>
        </TouchableOpacity>
      </View>
      <View style={{...customStyles.option}}>
        <TouchableOpacity
          onPress={() => setState('all')}
        >
          <Text
            style={{
              ...(state==='all')&&customStyles.selected,
              color: colors.text
            }}
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
    marginEnd: 10,
  },
  selected:{
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})
