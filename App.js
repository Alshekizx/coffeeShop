import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import AppNavigator from './AppNavigation/AppNavigation';
import HomeScreen from './AppNavigation/Screens/Home';

export default function App() {
  return <AppNavigator />;
}
