import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { darkScheme, lightScheme } from './theme'

// Define a type for the slice state
interface ThemeState {
  dark: boolean,
  colors: {
    primary: string,
    secondary: string,
    background: string,
    text: string,
    border: string,
    card: string,
  }
}

// Define the initial state using that type
const initialState: ThemeState = {
  ...lightScheme
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    darkTheme: (state) => {
      state.colors = darkScheme.colors
      state.dark = true
    },
    lightTheme: (state) => {
      state.colors = lightScheme.colors
      state.dark = false
    },
  },
})

export const { darkTheme, lightTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectColors = (state: RootState) => state.theme.colors
export const selectDark = (state: RootState) => state.theme.dark

export default themeSlice.reducer