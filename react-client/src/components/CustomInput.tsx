import React from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { styles } from '../theme/theme';
import { useSelector } from 'react-redux';
import { selectColors } from '../theme/themeSlice';
import { TextInput } from 'react-native';

interface Props{
  value: string,
  handleInputChange: (val: string) => void,
  iconName: keyof typeof Icon.glyphMap,
  placeholder: string
}

const CustomInput = ({value, iconName, placeholder, handleInputChange}: Props) => {
  const colors = useSelector(selectColors);

  return (
    <>
      <Icon
        name={iconName} 
        style={{
          ...styles.input, 
          borderBottomWidth: 0
        }} 
        color={colors.secondary} 
        size={30} />
      <TextInput
        style={{...styles.input, color: colors.text, width:'80%'}}
        placeholderTextColor={'gray'}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputChange}
      />
    </>
  )
}

export default CustomInput