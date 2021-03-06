import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, Dimensions, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';


const { width: WIDTH } = Dimensions.get('window')

export const TaskScreen = ({ navigation }) => {
    
    const [user, setUser] = useState([])
    const [tasks, setTask] = useState([]);

    useEffect(() => {
      try {
        const value = AsyncStorage.getItem('token')
        .then((token) => { 
          const decryptToken = jwt_decode(token);
          setUser(decryptToken)

            fetch(`http://10.3.2.188:4242/api/task/${decryptToken.id}`)
                .then(response => response.json())
                .then(data => { data.data ? setTask(data.data.task) : setTask(['You don\'t have task'])});
        })
      } catch(e) {
        console.log(e)
      }
    },[])

    
    if (!tasks) {
        return <Text>LOADING</Text>
    }

    // ADD TASK 

    const [task, addTask] = useState({
      content: ''
    })

    function submit() {

        fetch(`http://10.3.2.188:4242/api/task/add/${user.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: task.content,
            })
            })

            .then((response) => response.json())
            .then((responseData) => {
            Alert.alert('Your task has been added to the to do list')
            fetch(`http://10.3.2.188:4242/api/task/${user.id}`)
                .then(response => response.json())
                .then(data => data.data ? setTask(data.data.task) : setTask(['You don\'t have task']));
        })
        .catch((error) =>{
            console.error(error);
        }) 
    };    
    

    // EDIT TASK

    function editTask(id) {

        fetch(`http://10.3.2.188:4242/api/task/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            })
            .then((response) => response.json())
            .then((responseData) => {  
            fetch(`http://10.3.2.188:4242/api/task/${user.id}`)
                .then(response => response.json())
                .then(data => data.data ? setTask(data.data.task) : setTask(['You don\'t have task']));
        })
        .catch((error) =>{
            console.error(error);
        }) 
  };   
  

  // DELETE TASK

    function deleteTask(id) {

        fetch(`http://10.3.2.188:4242/api/task/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            })
            .then((response) => response.json())
            .then((responseData) => {  
            fetch(`http://10.3.2.188:4242/api/task/${user.id}`)
                .then(response => response.json())
                .then(data => data.data ? setTask(data.data.task) : setTask(['You don\'t have task']));
        })
        .catch((error) =>{
            console.error(error);
        }) 
    };  

    return (
        <ImageBackground
            source={require('../assets/fond.jpg')}
            style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>

            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home2')}
                        >
                            <Icon 
                                style={styles.profil}
                                name="user"
                                type="MaterialIcons"
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <CustomTitle
                            key={1}
                            id={1}
                            text={'My List'}
                        />
                    </View>
                <View>



              {tasks.map((task, index) => (
                <View key={index}>

                {task.isComplete ?
                <View style={styles.finish}>
    
                    <View style={styles.task}>
    
                        <Text style={styles.true}>{task.content}</Text> 
    
                        <View style={styles.icons}>
                            
                            <TouchableOpacity>
                                <Icon
                                    name="trash"
                                    type="MaterialIcons"
                                    style={styles.icon}
                                    onPress={() => deleteTask(task.id)}
                                />
                            </TouchableOpacity>
    
                            <TouchableOpacity>
                                <Icon
                                    name="times"
                                    type="MaterialIcons"
                                    style={styles.icon}
                                    onPress={() => editTask(task.id)}
                                />
                            </TouchableOpacity> 
    
                        </View>
    
                    </View>
                </View>
                :
                <View style={styles.notfinish}>
                                            
                    <View style={styles.task}>
    
                        <Text style={styles.false, styles.text}>{task.content}</Text>
    
                        <View style={styles.icons}>
                            
                            <TouchableOpacity>
                                <Icon
                                    name="trash"
                                    type="MaterialIcons"
                                    style={styles.icon}
                                    onPress={() => deleteTask(task.id)}
                                />
                            </TouchableOpacity>
    
                            <TouchableOpacity>
                                <Icon
                                    name="check"
                                    type="MaterialIcons"
                                    style={styles.icon}
                                    onPress={() => editTask(task.id)}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                }
            </View>
              ))}




            </View>

            <View style={styles.ligne}></View>

            <View
                style={{margin:20, marginTop:15}}
            >
                <TextInput
                    placeholder="Enter content"
                    onChangeText={(text) => { addTask({ content: text }) }}
                    style={{ borderWidth:3, borderColor:'#34495e',backgroundColor: "#ecf0f1", margin:20, paddingLeft: 10, fontSize : 17, height : 50, borderRadius : 15 }}
                />
                <CustomButton
                    key={1}
                    id={1}
                    actionsbtn={() => submit()}
                    title={'Submit'}
                />
            </View>

            </View>
        </ScrollView>
      </ImageBackground>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profil: {
    marginTop: 25,
    position: 'relative',
    right: 20,
    fontSize: 40,
    alignSelf: 'flex-end',
    color: 'white'
  },
  notfinish: {
    width: WIDTH - 25,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#E9E9E9',
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
  },
  finish: {
      width: WIDTH - 25,
      flex: 1,
      alignSelf: 'center',
      marginTop: 15,
      borderRadius: 5,
      backgroundColor: 'lightgray',
      borderWidth: 2,
      borderColor: "gray",
  },
  task: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
  },  
  text: {
      lineHeight: 70,
      left: 10,
      fontSize: 23,
  },
  true: {
      lineHeight: 70,
      left: 10,
      fontSize: 23,
      textDecorationLine: 'line-through',
  },
  icons: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'flex-end',
  },
  icon: {
      fontSize: 35,
      marginRight: 20,
  },

  ligne: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: '80%',
    marginTop:'5%',
    opacity: 0.76,
    alignSelf: 'center',
    height: 15
  },
});