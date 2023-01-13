import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { selectColors } from '../theme';
import { useAppSelector } from '../app/hooks';

export const Refresh = ({refreshFun}:{refreshFun: () => void}) => {
  const colors = useAppSelector(selectColors);
  return (
    <View
      style={{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:150, 
        alignItems:'center',
        marginVertical: 20
      }}
    >
      <Text
        style={{color:colors.text}}
      >Cargando...</Text>
      <TouchableOpacity
        onPress={refreshFun}
      >
        <Icon
          name="refresh" 
          color={colors.card} 
          size={26}
          style={{textDecorationLine: 'underline'}}
        />
      </TouchableOpacity>
    </View>
  )
}