import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { selectColors } from '../theme/themeSlice';
import { styles } from '../theme/theme';

interface Props{
  children: React.ReactNode,
  name?: String | undefined
}

const FormItemContainer = ({children, name}:Props) => {
  const colors = useSelector(selectColors);

  return (
    <View style={{marginVertical: 10}}>
      {name&&<Text style={{margin: 5}}>{name}</Text>}
      <View style={{
        ...customStyles.container, 
        backgroundColor: colors.border
      }}>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})
export default FormItemContainer