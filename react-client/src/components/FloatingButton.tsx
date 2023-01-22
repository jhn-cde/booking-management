import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native'
import { Ionicons as Icon} from '@expo/vector-icons';
import { useAppSelector } from '../app/hooks';
import { selectColors } from '../theme';

interface Props {
  navigateTo: () => void,
  iconName: keyof typeof Icon.glyphMap
}

export const FloatingButton = ({navigateTo, iconName}: Props) => {
  const colors = useAppSelector(selectColors);

  return (
    <TouchableOpacity
      style={{
          ...customStyles.btn,
          backgroundColor: colors.secondary
        }}
      onPress={ navigateTo }
      activeOpacity={0.7}
    >
      {(
        <Icon
          name={iconName}
          style={{
            fontSize: 30,
            color: '#ffffff'
          }}
        />
      )}
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  btn:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  }
})
