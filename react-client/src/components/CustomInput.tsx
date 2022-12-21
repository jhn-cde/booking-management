import React from 'react'
import { styles } from '../theme/theme';
import { useSelector } from 'react-redux';
import { selectColors } from '../theme/themeSlice';
import { TextInput } from 'react-native';

interface Props{
  value: string,
  handleInputChange: (val: string) => void,
  placeholder: string,
  pstyles?: {},
  keyboardtype?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url'
};

const CustomInput = ({value, placeholder, pstyles, keyboardtype, handleInputChange}: Props) => {
  const colors = useSelector(selectColors);

  return (
    <TextInput
      style={{...styles.input, ...pstyles, color: colors.text, width:'80%'}}
      placeholderTextColor={'gray'}
      placeholder={placeholder}
      value={value}
      onChangeText={handleInputChange}
      keyboardType={keyboardtype}
    />
  )
}

export default CustomInput