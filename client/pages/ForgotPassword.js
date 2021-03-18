import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Alert, ImageBackground, Text } from "react-native";

import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput'


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

    <ImageBackground
      source={require('../assets/fond.jpg')}
      style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>

      <ScrollView>

        <View style={styles.container}>

          <View>
            <CustomTitle
              key={1}
              id={1}
              text={'Forgot Password ?'}
            />
          </View>

          <View>
            <Text style={styles.text}>
              An email will be sent to you with a randomly generated password so you can log into your account.
            </Text>
          </View>

          <View>
              <CustomInput
                key={1}
                id={1}
                placeholder={'Email'}
                valeur={email}
                changeText={handleEmail}
                secureTextEntry={false}
                pwd={false}
              />
          </View>
                
          <View>

            <CustomButton
              key={1}
              id={1}
              actionsbtn={() => submit()}
              title={'Send'}
            />

          </View>

          <View>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("Login")}
            >
              Back to login
            </Text>
          </View>
      
        </View>
      </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: WIDTH - 100,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    color: '#efedec'
  }
});
