import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors, styles } from '../theme/theme'
import Tabs from './Tabs'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle:{
          backgroundColor: colors.primary
        },
        headerShadowVisible: false,
        headerTitleStyle:{
          ...styles.title,
          color: colors.secondary
        }
      }}
    >
      <Stack.Screen
        name='tabs' 
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator