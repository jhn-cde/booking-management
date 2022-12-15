import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons as Icon} from '@expo/vector-icons';
import { colors } from '../theme/theme'

interface Props {
  navigateTo: () => void,
  iconName: keyof typeof Icon.glyphMap
}

const FloatingButton = ({navigateTo, iconName}: Props) => {
  return (
    <TouchableOpacity
      style={{
          ...customStyles.btn,
          backgroundColor: colors.acento
        }}
      onPress={ navigateTo }
      activeOpacity={0.7}
    >
      {(
        <Icon
          name={iconName}
          style={{
            ...customStyles.text,
          }}
        />
      )}
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  btn:{
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 55,
    width: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  text:{
    fontSize: 35,
    color: colors.primary
  }
})

export default FloatingButton