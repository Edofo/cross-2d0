import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import { Text, View, Button } from 'react-native';

export function HomeScreen({ navigation }) {

    const [user, setUser] = useState("")

    useEffect(() => {
      try {
        const value = AsyncStorage.getItem('token')
        .then((token) => { 
          const decryptToken = jwt_decode(token);

          fetch(`http://localhost:4242/api/users/${decryptToken.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            })

            .then((response) => response.json())
            .then((responseData) => {
            console.log(responseData.data.user)
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


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WELCOME {user.firstname} {user.lastname}</Text>
        <Button
          title="Go to Task"
          onPress={() => navigation.navigate('Task')}
        />
      </View>
    );
}
