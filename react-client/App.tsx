import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BookingDateList from './src/features/BookingList/components/BookingDateList';
import BookingList from './src/features/BookingList/components/BookingList';


export default function App() {
  return (
    <View style={customStyles.container}>
      <BookingList />
      <StatusBar style="auto" />
    </View>
  );
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 12,
    marginTop:30
  },
});
