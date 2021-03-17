import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView, ImageBackground } from "react-native";
import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

export function ProfilScreen({ navigation }) {
return (
  <ImageBackground
  source={require('./fond.jpg')}
  style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>

<ScrollView>
<View style={styles.encadrement}>
<View>
  <View style={styles.container}>
    <View style={styles.container2}>
    
  <Text style={styles.toDoListTitle}>Profil</Text>
  <IconButton style={styles.icon}
          icon="logout"   
          color={Colors.black}
          size={25}
          onPress={() => navigation.navigate('Home')}
          />
  </View>
  </View>

    <View style={styles.container}>
      <Text style={styles.front}>Firstname </Text>
      <Text style={styles.frontInfo}>Firstname </Text>
      <View style={styles.ligne}></View>

    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Lastname </Text>
      <Text style={styles.frontInfo}>Lastname </Text>
      <View style={styles.ligne}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>BirthDay </Text>
      <Text style={styles.frontInfo}>BirthDay </Text>
      <View style={styles.ligne}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Gender </Text>
      <Text style={styles.frontInfo}>Gender </Text>
      <View style={styles.ligne}></View>
    </View>

    <View style={styles.container}>
      <Text style={styles.front}>Password </Text>
      <Text style={styles.frontInfo}>Password </Text>
      <View style={styles.ligne}></View>
    </View>
<View style={styles.separator}></View>
    <View style={styles.container}>
    <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.btnstyle}
      >
        <Text style={styles.btntxt}>Edit my Profil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.btnstyle}
      >
        <Text style={styles.btntxt}> My tasks</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator}></View>
    

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
    color: 'red',
    marginBottom: -20,
    height: 50,
    fontSize: 23,
    marginTop: '3%',
  },
    frontInfo:{
      color: '#2c3e50',
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
    opacity: 0.8,
    borderRadius: 45,
    },
    toDoListTitle: {
      color: '#2c3e50',
      height: 50,
      fontSize: 20,
      marginTop: 50,
      fontSize: 30,
      marginRight:'40%',
      marginLeft:'25%'
      },
      btnstyle: {
        width: 200,
        height: 55,
        backgroundColor: "#e74c3c",
        borderWidth: 1.75,
        borderColor: "#000000",
        opacity: 0.8,
        borderRadius: 15,
        marginTop: 10
        },
      btntxt: {
        color: "#bdc3c7",
        alignSelf: 'center',
        marginTop: '4%',
        fontSize: 20,
        fontWeight: 'bold'
      },
      encadrement:{
        backgroundColor:'white',
        margin: '10%',
        borderRadius: 20,
        borderWidth: 1,  
      },
      container2:{
        flexDirection:'row-reverse',
      },
      icon: {
        flex:1,
        alignSelf:'center',
      },
      ligne: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '65%',
    marginTop:'5%',
    opacity: 0.76
      },
      separator:{
        paddingTop: 40
      }
});
