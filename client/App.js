import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HomeScreen } from './pages/Home';
import { TaskScreen } from './pages/TaskScreen';
import { LoginScreen } from './pages/Login';

const Stack = createStackNavigator();

export default function App() {

  const [Logged, setLogged] = useState(false)
  const [Token, setToken] = useState("")


  useEffect(() => {
    try {
      const value = AsyncStorage.getItem('token')
      .then((login) => { login ? setLogged(true) : setLogged(false)})
      .then((token) => { token ? setToken(token) : setToken("")})      
    } catch(e) {
      console.log(e)
    }
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      > 
      {
        Logged ?
          <Stack.Screen name="Home" component={HomeScreen} />
        :
          <Stack.Screen name="Login" component={LoginScreen} />
      }
        <Stack.Screen name="Home2" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}