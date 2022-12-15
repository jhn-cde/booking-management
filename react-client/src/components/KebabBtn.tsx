import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/SimpleLineIcons';
import { selectColors } from "../theme/themeSlice";
import { useAppSelector } from "../app/hooks";

const KebabBtn = () => {
  const colors = useAppSelector(selectColors);

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

export default KebabBtn