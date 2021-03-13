import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: WIDTH } = Dimensions.get('window')

export function LoginScreen({ navigation }) {

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  function submit() {

    fetch(`http://localhost:4242/api/auth/signin`, {
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
        Alert.alert('Your task has been added to the to do list')
        console.log(responseData)
        try {
          AsyncStorage.setItem('token', responseData.data.token)
          navigation.navigate('Home2')
        } catch (e) {
          console.log(e)
        }
    })
    .catch((error) =>{
        console.error(error);
    }) 
  }; 


  function handleEmail(text) {
    setLogin({ email: text })
  }
  function handlePassword(text) {
    setLogin({ password: text })
  }

  return (

    <ScrollView>

      <View style={styles.container}>

        <Text style={styles.toDoListTitle}>To-Do list</Text>

        <View style={styles.buttonArrondi}>

          <TextInput
              style={styles.textInput}
              placeholder='Email'
              label="Email"
              value={login.email}
              onEndEditing={(text) => handleEmail(text)}
            />

        </View>

        <View style={styles.buttonArrondi}>

          <TextInput
              style={styles.textInput}
              placeholder='Password'
              label="Password"
              value={login.password}
              onEndEditing={(text) => handlePassword(text)}
            />

        </View>

        <View style={styles.button}>

          <TouchableOpacity
            onPress={() => submit()}
            style={styles.btnBG}>
            <Text style={styles.front}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.btnBG}>
            <Text style={styles.front}>Register</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  toDoListTitle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 80,
    margin: 60,
    marginBottom: 80,
  },
  buttonArrondi: { 
    backgroundColor: "lightgray",
    borderRadius: 21,
    width: WIDTH - 55,
    height: 55,
    margin: 15,
  },
  textInput: {
    height: 55, 
    paddingLeft: 10
  },
  button: {
    marginTop: 30,
  },
  btnBG: {
    backgroundColor: "#636466",
    width: 138,
    height: 60,
    margin: 10,
  },
  front:{
    marginTop: 'auto',
    alignSelf:'center',
    color: 'yellow',
    height: 45,
    fontSize: 20,
  }
});
