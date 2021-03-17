import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconFont from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window')

export function ForgotPasswordScreen({ navigation }) {

  const [email, setEmail] = useState({
      email: '',
  })

  function submit() {

    fetch(`http://10.3.2.188:4242/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.email,
        })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
            if (!responseData.error) {
                Alert.alert('Check your email adress !')
                navigation.navigate("Login")
            } else {
                Alert.alert(responseData.error)
            }
        })
    .catch((error) =>{
        console.error(error);
    }) 
  }; 


  function handleEmail(text) {
    setEmail({ email: text })
  }

  return (

    <ScrollView>

      <View style={styles.container}>

        <View style={styles.buttonArrondi}>

            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                placeholder={'Email'}
                value={email.email}
                onChangeText={handleEmail}
            />

        </View>
             
        <View style={styles.button}>

            <TouchableOpacity
                onPress={() => submit()}
                style={styles.btnBG}>
                <Text style={styles.front}>SEND</Text>
            </TouchableOpacity>

        </View>
    
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH - 55,
  }
});
