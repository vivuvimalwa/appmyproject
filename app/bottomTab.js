import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import About from '../screens/about'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReviewDetails from '@/screens/reviewDetails';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="settings" component={About}
      options={{
        tabBarLabel:'settings',
        tabBarIcon: ({ color, size }) => (
<MaterialIcons name="settings" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name="ReviewDetail" component={ReviewDetails}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="details" size={24} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
    </GestureHandlerRootView>
  );
}
