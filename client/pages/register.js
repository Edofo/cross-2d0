import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {Gpicker} from "../composant/Gpicker"

export function Register({ navigation }) {
    const [Firstname, setFirstname] = React.useState('');
    const [Lastname, setLastname] = React.useState('');
    const [Birthday, setBirthday] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [ConfPwd, setConfPwd] = React.useState('');
return (
<View style={styles.container}>
  <Text style={styles.toDoListTitle}>Register</Text>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 50, paddingLeft:10 }}
      placeholder='Firstname'
      label="firstname"
      value={Firstname}
      onChangeText={Firstname => setFirstname(Firstname)}
    />
  </View>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 50, paddingLeft:10 }}
      placeholder='Lastname'
      label="Lastname"
      value={Lastname}
      onChangeText={Lastname => setLastname(Lastname)}
    />
  </View>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 50, paddingLeft:10 }}
      placeholder='Birthday (yyyy/mm/dd)'
      label="Birthday"
      value={Birthday}
      onChangeText={Birthday => setBirthday(Birthday)}
    />
  </View>
  <View style={styles.buttonArrondi}>
  <Gpicker/>
  </View>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 50, paddingLeft:10 }}
      placeholder='Password'
      label="Password"
      value={Password}
      onChangeText={Password => setPassword(Password)}
    />
  </View>
  <View style={styles.buttonArrondi}>
  <TextInput
  style={{ height: 50, paddingLeft:10 }}
      placeholder='Confirm Password'
      label="Confirm password"
      value={ConfPwd}
      onChangeText={ConfPwd => setConfPwd(ConfPwd)}
    />
  </View>
  <View>
  <TouchableOpacity
        onPress={() => props.navigation.navigate("")}
        style={styles.btnBG}>
        <Text style={styles.front}>Register</Text>
      </TouchableOpacity>
</View>
</View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
buttonArrondi: { backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 75,
    backgroundColor: "rgba(230,230,230,1)",
    width: 321,
    marginTop:25,
    alignSelf:'center'
  },
  btnBG: {
    backgroundColor: "lightgray",
    width: 138,
    height: 60,
    alignSelf:'center',
    marginTop: 25

  },
  toDoListTitle: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 5 ,
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
