import "@expo/metro-runtime";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import CalendarScreen from "./screens/CalendarScreen";
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HealthScreen from "./screens/HealthScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'list';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar';
            } else if (route.name === 'Health') {
              iconName = 'heart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'darkgray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#2d4887'
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Health" component={HealthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
