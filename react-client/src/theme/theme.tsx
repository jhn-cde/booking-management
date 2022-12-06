import { StyleSheet } from "react-native"

export const colors = {
  primary: '#ffffff',
  secondary: '#3066be',
  acento: '#ffc40c',

  text: '#000000',
  border: '#aaaaaa',
  opacity: '#eeeeee',
  
  danger: '#ca0b00',
  dangerPress: '#843D39',
  succes: '#198754',
  cancel: '#8B008B'
}

export const styles = StyleSheet.create({
  globalPadding:{
    paddingHorizontal: 20
  },
  title:{
    fontSize: 30,
    marginBottom: 10
  },
  subtitle:{
    fontSize: 20,
    fontWeight: '500',
    color: colors.acento
  },
  text:{
    color: colors.text,
    fontSize: 15
  },
  input:{
    color: colors.text,
    fontSize: 18,
    borderColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 3,
    width: '100%',
  },
  danger:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 13,
    fontWeight: '500'
  }
})