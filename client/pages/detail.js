import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";


export function DetailsScreen({ navigation }) {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');
return (
  <ScrollView>
<View style={styles.container}>
  <Text style={styles.toDoListTitle}>To-Do list</Text>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 55, paddingLeft:10 }}
      placeholder='Email'
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
  </View>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 55, paddingLeft:10 }}
      placeholder='Password'
      label="Password"
      value={text2}
      onChangeText={text2 => setText2(text2)}
    />
  </View>
  <View>
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
</ScrollView>)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
buttonArrondi: { backgroundColor: "grey",
    borderRadius: 21,
    width: 300,
    height: 55,
    marginTop: 125,
    marginBottom:-60,
    alignSelf:'center'
  },
  btnBG: {
    backgroundColor: "#636466",
    width: 138,
    height: 60,
    alignSelf:'center',
    
    marginTop: 100

  },
  toDoListTitle: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 100 ,
    fontWeight: 'bold',
    height: 50,
    fontSize: 30,
    },
  front:{
    marginTop: 'auto',
    alignSelf:'center',
    color: 'yellow',
    height: 45,
    fontSize: 20,

  }
});
