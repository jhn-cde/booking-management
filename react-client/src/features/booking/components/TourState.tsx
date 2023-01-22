import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props{
  state: string,
  setState: (newState: String) => void
}

const states = [
  {label: 'Pendiente', value: 'Pending', color: '#EFB700'}, 
  {label: 'Completado', value: 'Completed', color: '#008450'},
  {label: 'Cancelado', value: 'Cancelled', color: '#B81D13'}
]

export const TourState = ({state, setState}: Props) => {
  return(
    <View
      style={customStyles.container}
    >
      {states.map(item =>
        <TouchableOpacity
          key={item.value}
          style={{
            ...customStyles.btn,
            backgroundColor: state===item.value?item.color:'rgba(0,0,0,0)'
          }}
          onPress={() => setState(item.value)}
        >
          <Text
            style={{
              textDecorationLine: state===item.value?'none':'underline'
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
};

const customStyles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
})