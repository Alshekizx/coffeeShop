// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/Home';
import OrderHistory from './Screens/OrderHistory';
import Cart from './Screens/cart';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#DC3535',
          tabBarInactiveTintColor: '#52555A',
          tabBarActiveBackgroundColor: '#0C0F14',
          tabBarInactiveBackgroundColor: '#0C0F14',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'OrderHistory') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarLabel: () => null, // Hide tab names
        })}
        tabBarOptions={{}}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }} name="OrderHistory" component={OrderHistory} />
        <Tab.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
