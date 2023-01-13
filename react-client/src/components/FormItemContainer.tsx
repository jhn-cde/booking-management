import React from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { selectColors, styles } from '../theme';

interface Props{
  children: React.ReactNode,
  name?: String | undefined,
  iconName: keyof typeof Icon.glyphMap,
};

export const FormItemContainer = ({children, name, iconName}:Props) => {
  const colors = useSelector(selectColors);

  return (
    <View style={{marginVertical: 10}}>
      {name&&<Text style={{margin: 5}}>{name}</Text>}
      <View style={{
        ...customStyles.container, 
        backgroundColor: colors.border
      }}>

        <Icon
          name={iconName} 
          style={{
            ...styles.input, 
            borderBottomWidth: 0,
            marginRight: 10
          }} 
          color={colors.secondary} 
          size={30} />
        {children}
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container:{
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  }
})
