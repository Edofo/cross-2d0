import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

export function ProfilScreen({ navigation }) {
return (
  <ImageBackground
  source={require('./fond.jpg')}
  style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>

<ScrollView>
<View>
  <View style={styles.container}>
    <View style={styles.container2}>
  <Text style={styles.toDoListTitle}>Register</Text>
          <IconButton style={styles.icon}
          icon="arrow-left"   
          color={Colors.white}
          size={25}
          onPress={() => navigation.navigate('Home')}
          />
  </View>
  </View>
    <View style={styles.container}>
      <Text style={styles.front}>Firstname </Text>
        <View style={styles.rect}></View>

    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Lastname </Text>
      <View style={styles.rect}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>BirthDay </Text>
      <View style={styles.rect}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Gender </Text>
      <View style={styles.rect}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Password </Text>
      <View style={styles.rect}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Confirm Password </Text>
      <View style={styles.rect}></View>
    </View>

    <View style={styles.container}>
    <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.btnstyle}
      >
        <Text style={styles.btntxt}>Create my account</Text>
      </TouchableOpacity>
    </View>
</View>
</ScrollView>
</ImageBackground>
    )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical:'center',
    justifyContent: 'center',
    alignItems:'center',
  },
  bkgc:{
backgroundColor:'black',
width: '100%',
height: '100%',
opacity:0.5
  },
  front:{
    color: 'lightgrey',
    marginBottom: -20,
    height: 50,
    fontSize: 20,
    marginTop: '3%',

    
  },
  rect: {
    width: 300,
    height: 55,
    backgroundColor: "#ded6d4",
    borderWidth: 1.5,
    borderColor: "#000000",
    marginLeft: 15,
    opacity: 0.8,
    borderRadius: 45,
    },
    toDoListTitle: {
      color: '#efedec',
      height: 50,
      fontSize: 20,
      marginTop: 50,
      fontSize: 30,
      marginLeft: '-12%'
      },
      Icon: {
        fontSize: 15,
        marginLeft: 'auto'
      },
      icon: {
          marginRight: 150
      },
      container2: {
        flex: 1,
        flexDirection:'row-reverse',
        alignItems: 'center',
        marginRight: 'auto',
        alignContent: 'space-between'
      },
      btnstyle: {
        width: 200,
        height: 55,
        backgroundColor: "#e74c3c",
        borderWidth: 1.75,
        borderColor: "#000000",
        marginLeft: 15,
        opacity: 0.8,
        borderRadius: 15,
        },
      btntxt: {
        color: "#bdc3c7",
        alignSelf: 'center',
        marginTop: '4%',
        fontSize: 20,
        fontWeight: 'bold'
      }
});
