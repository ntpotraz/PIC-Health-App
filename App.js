import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import EventList from './components/EventList';

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
