import { DefaultTheme, NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import MyApp from './src/app/App';
import store from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
      <StatusBar/>
    </Provider>
  );
}
