import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Alert, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput'


const { width: WIDTH } = Dimensions.get('window')

export function LoginScreen({ navigation }) {

  const [login, setLogin] = useState({
    email: '',
    password: '',
    security: true,
  })

  
  const customButton = [
    {
        actionsbtn: () => submit(),
        title: 'Login'
    }, 
    {
        actionsbtn: () => navigation.navigate("Register"),
        title: 'Register'
    }
  ]

  const customInput = [
    {
        placeholder: 'Email',
        valeur: login.email,
        changeText: handleEmail,
        secureTextEntry: false,
        pwd: false
    }, 
    {
        placeholder: 'Password',
        value: login.password,
        changeText: handlePassword,
        secureTextEntry: login.security,
        pwd: true,
        changeVisibility: changeMode
    }
  ]

  function submit() {

    fetch(`http://10.3.2.188:4242/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: login.email,
            password: login.password,
        })
        })
        .then((response) => response.json())
        .then((responseData) => {

          console.log(responseData)
          if (!responseData.data.user == false) {
            try {
              AsyncStorage.setItem('token', responseData.data.token)
              navigation.navigate('Home2')
            } catch (e) {
              console.log(e)
            }
          } else {
            Alert.alert('THIS ACCOUNT DOSEN\'T EXIST')
          }
        })
    .catch((error) =>{
        console.error(error);
    }) 
  }; 


  function handleEmail(text) {
    setLogin({ email: text, password: login.password, security: login.security})
  }
  function handlePassword(text) {
    setLogin({ email: login.email, password: text, security: login.security})
  }

  function changeMode() {
    login.security ? 
      setLogin({ email: login.email, password: login.password, security: false}) 
    : 
      setLogin({ email: login.email, password: login.password, security: true})
  }


  
  return (

    <ImageBackground
      source={require('../assets/fond.jpg')}
      style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>

      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.toDoListTitle}>Login</Text>
          <View>
            <CustomTitle
              id={1}
              text={'Login'}
            />
          </View>

          <View style={styles.separator}></View>

          <View style={styles.separator}></View>

          <View>
          { customInput.map((input, index) => (
            <CustomInput
              id={input.index}
              placeholder={input.placeholder}
              valeur={input.valeur}
              text={input.changeText}
              secure={input.secureTextEntry}
              pwd={input.pwd}
              changeVisibility={input.changeVisibility}
            />
          ))}
          </View>

          <View>
          { customButton.map((button, index) => (
            <CustomButton
              key={button.index}
              actionsbtn={button.actionsbtn}
              title={button.title}
            />
          ))}
          </View>

          <View style={styles.separator}></View>

          <View>
            <Text
              style={styles.text2}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password ?
            </Text>
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  separator:{
    paddingTop: 40
  },
  text2: {
    color: '#efedec',
  }
});
