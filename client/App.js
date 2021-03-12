import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './pages/Home';
import { TaskScreen } from './pages/TaskScreen';
import { LoginScreen } from './pages/Login';

import { handleTaskFormSubmit } from './pages/test';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="test" component={handleTaskFormSubmit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
