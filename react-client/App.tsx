import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={customStyles.container}>
        <StackNavigator />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
