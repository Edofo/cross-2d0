import { StyleSheet, View, Text, ImageBackground, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { IconButton, Colors } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import CustomButton from '../components/CustomButton';

export function ProfilScreen({ navigation }) {

  const customButton = [
    {
        actionsbtn: () => EditProfil(),
        title: 'Edit my Profil'
    }, 
    {
      actionsbtn: () => navigation.navigate('Task'),
      title: 'My tasks'
    }
  ]

  const [user, setUser] = useState("")

    useEffect(() => {
      try {
        const value = AsyncStorage.getItem('token')
        .then((token) => { 
          const decryptToken = jwt_decode(token);

          fetch(`http://10.3.2.188:4242/api/users/${decryptToken.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            })

            .then((response) => response.json())
            .then((responseData) => {
            setUser(responseData.data.user)
          })

          .catch((error) =>{
              console.error(error);
          }) 

        })
      } catch(e) {
        console.log(e)
      }
    },[])

    function logout() {
      Alert.alert('You have been disconnected')
      try {
        AsyncStorage.removeItem('token')
        navigation.navigate('Login2')
      } catch (e) {
        console.log(e)
      }
    }

  return (
    <ImageBackground
      source={require('../assets/fond.jpg')}
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
                  onPress={() => logout()}
                />
              </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.front}>Firstname</Text>
            <Text style={styles.frontInfo}>{user.firstname}</Text>
            <View style={styles.ligne}></View>
          </View>

            <View style={styles.container}>
              <Text style={styles.front}>Lastname</Text>
              <Text style={styles.frontInfo}>{user.lastname}</Text>
              <View style={styles.ligne}></View>
            </View>

            <View style={styles.container}>
              <Text style={styles.front}>BirthDay</Text>
              <Text style={styles.frontInfo}>{user.birthdate}</Text>
              <View style={styles.ligne}></View>
            </View>

            <View style={styles.container}>
              <Text style={styles.front}>Gender</Text>
              <Text style={styles.frontInfo}>{user.gender}</Text>
              <View style={styles.ligne}></View>
            </View>

            <View style={styles.separator}></View>
            
            <View style={styles.container}>
                { customButton.map((button, index) => (
                    <CustomButton
                        key={index}
                        id={index}
                        actionsbtn={button.actionsbtn}
                        title={button.title}
                    />
                ))}          
            </View>

          <View style={styles.separator}></View>

          </View>
        </View>
      </ScrollView>

    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical:'center',
    justifyContent: 'center',
    alignItems:'center',
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
  toDoListTitle: {
    color: '#2c3e50',
    height: 50,
    fontSize: 20,
    marginTop: 50,
    fontSize: 30,
    marginRight:'40%',
    marginLeft:'25%'
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