import "@expo/metro-runtime";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import EventList from './components/EventList';
import HomeScreen from './components/HomeScreen';
import MentalHealth from './components/MentalHealth';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {
      // <Text>Open up App.js to start working on your app!</Text>
      // <Test />
      }
      <EventList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
