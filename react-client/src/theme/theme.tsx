import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  title:{
    fontSize: 30
  },
  subtitle:{
    fontSize: 20,
    fontWeight: '500'
  },
  input:{
    fontSize: 18,
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

export const lightScheme = {
  dark: false,
  colors: {
    primary: "#FFC40C",
    secondary: "#3066BE",
    background: "#F2F2F2",
    text: "#1C1C1E",
    border: "#D8D8D8",
    card: "#FFFFFF",
  }
}

export const darkScheme = {
  dark: true,
  colors: {
    primary: "#FFC40C",
    secondary: "#3066BE",
    background: "#010101",
    text: '#E5E5E7',
    border: "#272729",
    card: "#121212",
  }
}