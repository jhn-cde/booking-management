import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/SimpleLineIcons';
import { selectColors } from "../theme";
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { Menu, MenuItem } from 'react-native-material-menu';

interface Props{
  items: {onPress: () => void, name: string}[]
}

export const KebabBtn = ({items}: Props) => {
  const [visible, setVisible] = useState(false);
  const colors = useAppSelector(selectColors);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View
      style={customStyles.botonContainer}
    >
      <Menu
        visible={visible}
        onRequestClose={hideMenu}
      >
        {items.map(item => 
          <MenuItem 
            onPress={() => {
              hideMenu();
              item.onPress();
            }} 
            key={item.name}
          >{item.name}</MenuItem>
        )}
      </Menu>

      <TouchableOpacity
        style={{
            ...customStyles.boton,
          }}
        onPress={showMenu}
      >
        {(
        <Icon
          name={'options-vertical'}
          style={{
            fontSize: 22,
            color: colors.text
          }}
        />
      )}
      </TouchableOpacity>
    </View>
  )
}
const customStyles = StyleSheet.create({
  botonContainer:{},
  boton:{
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
