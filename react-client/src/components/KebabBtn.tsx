import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/SimpleLineIcons';
import { colors, styles } from "../theme/theme"

const KebabBtn = () => {
  return (
    <View
      style={customStyles.botonContainer}
    >
        <TouchableOpacity
          style={{
              ...customStyles.boton,
            }}
          onPress={() => {}}
        >
          {(
          <Icon
            name={'options-vertical'}
            style={{
              ...customStyles.text,
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
  },
  text:{
    fontSize: 22,
    color: colors.text
  }
})

export default KebabBtn