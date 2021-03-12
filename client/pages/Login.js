import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')

export function LoginScreen({ navigation }) {

  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  return (

    <ScrollView>

      <View style={styles.container}>

        <Text style={styles.toDoListTitle}>To-Do list</Text>

        <View style={styles.buttonArrondi}>

          <TextInput
              style={styles.textInput}
              placeholder='Email'
              label="Email"
              value={text}
              onChangeText={text => setText(text)}
            />

        </View>

        <View style={styles.buttonArrondi}>

          <TextInput
              style={styles.textInput}
              placeholder='Password'
              label="Password"
              value={text2}
              onChangeText={text2 => setText2(text2)}
            />

        </View>

        <View style={styles.button}>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("")}
            style={styles.btnBG}>
            <Text style={styles.front}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
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
