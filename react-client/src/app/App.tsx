import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import StackNavigator from '../navigators/StackNavigator'
import { darkTheme, lightTheme } from '../theme/themeSlice'
import { useAppDispatch } from './hooks'

const App = () => {
  const dispatch = useAppDispatch()
  const scheme = useColorScheme();
  
  useEffect(() => {
    dispatch(darkTheme())
  }, [])
  
  return (  
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App