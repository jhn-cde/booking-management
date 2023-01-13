import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/SimpleLineIcons';
import { selectColors } from "../theme";
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { Menu, MenuItem } from 'react-native-material-menu';

export const KebabBtn = () => {
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
        <MenuItem onPress={hideMenu}>Editar</MenuItem>
        <MenuItem onPress={hideMenu}>Atendido</MenuItem>
        <MenuItem onPress={hideMenu}>Eliminar</MenuItem>
      </Menu>

      <TouchableOpacity
        style={{
            ...customStyles.boton,
          }}
        onPress={() => showMenu()}
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
