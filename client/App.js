import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProfilScreen } from './pages/Profil';
import { TaskScreen } from './pages/TaskScreen';
import { LoginScreen } from './pages/Login';
import { RegisterScreen } from './pages/Register';
import { ForgotPasswordScreen } from './pages/ForgotPassword';



const Stack = createStackNavigator();

export default function App() {

  const [Logged, setLogged] = useState(false)

  useEffect(() => {
    try {
      const value = AsyncStorage.getItem('token')
      .then((login) => { login ? setLogged(true) : setLogged(false)})
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
          <Stack.Screen name="Home" component={ProfilScreen} />
        :
          <Stack.Screen name="Login" component={LoginScreen} />
      }
        <Stack.Screen name="Home2" component={ProfilScreen} />
        <Stack.Screen name="Login2" component={LoginScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}