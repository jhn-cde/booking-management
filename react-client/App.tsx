import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar/>
    </NavigationContainer>
  );
}
