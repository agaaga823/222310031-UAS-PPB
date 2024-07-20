import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';  
import OlahanPage from './components/OlahanPage';  
import DetailPage from './components/DetailPage'; 
import Welcome from './components/Welcome';
import DetailPageOlahan from './components/DetailPageOlahan';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListSampah from './components/ListSampah';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Jenis Sampah') {
            iconName = focused ? 'trash' : 'trash-outline';
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route.name === 'Hasil Olahan') {
            iconName = 'recycle'; 
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex'}
      })}
    >
      <Tab.Screen name="Jenis Sampah" component={MainPage} options={{headerTitle: "", headerShown: false}} />
      <Tab.Screen name="Hasil Olahan" component={OlahanPage} options={{headerTitle: "", headerShown: false}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerTitle:"", headerShown:false}}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerTitle:"", headerShown:false}}/>
        <Stack.Screen name="DetailPageOlahan" component={DetailPageOlahan} options={{headerTitle:""}} />
        <Stack.Screen name="ListSampah" component={ListSampah} options={{headerTitle:""}} />
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerTitle:""}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
