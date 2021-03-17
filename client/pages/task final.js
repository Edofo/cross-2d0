import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, Dimensions, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window')

export const TaskScreen = ({ navigation }) => {
    const [user, setUser] = useState([])
    const [tasks, setTask] = useState([
        {
            "id": 1,
            "content": "blablabla",
            "isComplete": false,
            "createdAt": "2021-03-12T08:12:38.086Z",
            "updatedAt": "2021-03-12T08:12:38.088Z",
            "userId": 1
        },
        {
            "id": 3,
            "content": "aaaaaaaaaaaaaaaaaaaaaassaaaaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:03:11.050Z",
            "updatedAt": "2021-03-12T09:03:11.050Z",
            "userId": 1
        },
        {
            "id": 4,
            "content": "aa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:03:50.868Z",
            "updatedAt": "2021-03-12T09:03:50.868Z",
            "userId": 1
        },
        {
            "id": 5,
            "content": "zzzz",
            "isComplete": false,
            "createdAt": "2021-03-12T09:04:36.406Z",
            "updatedAt": "2021-03-12T09:04:36.406Z",
            "userId": 1
        },
        {
            "id": 6,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:08:03.909Z",
            "updatedAt": "2021-03-12T09:08:03.909Z",
            "userId": 1
        },
        {
            "id": 7,
            "content": "aaaay",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:08.786Z",
            "updatedAt": "2021-03-12T09:24:08.788Z",
            "userId": 1
        },
        {
            "id": 8,
            "content": "aaaay",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:08.967Z",
            "updatedAt": "2021-03-12T09:24:08.968Z",
            "userId": 1
        },
        {
            "id": 9,
            "content": "aaaay",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:11.463Z",
            "updatedAt": "2021-03-12T09:24:11.463Z",
            "userId": 1
        },
        {
            "id": 10,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:35.672Z",
            "updatedAt": "2021-03-12T09:24:35.673Z",
            "userId": 1
        },
        {
            "id": 11,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:36.435Z",
            "updatedAt": "2021-03-12T09:24:36.435Z",
            "userId": 1
        },
        {
            "id": 12,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:36.674Z",
            "updatedAt": "2021-03-12T09:24:36.675Z",
            "userId": 1
        },
        {
            "id": 13,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:36.931Z",
            "updatedAt": "2021-03-12T09:24:36.931Z",
            "userId": 1
        },
        {
            "id": 14,
            "content": "aaaaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:24:37.145Z",
            "updatedAt": "2021-03-12T09:24:37.145Z",
            "userId": 1
        },
        {
            "id": 15,
            "content": "a",
            "isComplete": false,
            "createdAt": "2021-03-12T09:31:11.341Z",
            "updatedAt": "2021-03-12T09:31:11.342Z",
            "userId": 1
        },
        {
            "id": 16,
            "content": "a",
            "isComplete": false,
            "createdAt": "2021-03-12T09:31:34.712Z",
            "updatedAt": "2021-03-12T09:31:34.712Z",
            "userId": 1
        },
        {
            "id": 17,
            "content": "a",
            "isComplete": false,
            "createdAt": "2021-03-12T09:32:40.009Z",
            "updatedAt": "2021-03-12T09:32:40.009Z",
            "userId": 1
        },
        {
            "id": 18,
            "content": "z",
            "isComplete": false,
            "createdAt": "2021-03-12T09:41:31.686Z",
            "updatedAt": "2021-03-12T09:41:31.686Z",
            "userId": 1
        },
        {
            "id": 19,
            "content": "eeeee",
            "isComplete": false,
            "createdAt": "2021-03-12T09:43:20.594Z",
            "updatedAt": "2021-03-12T09:43:20.594Z",
            "userId": 1
        },
        {
            "id": 20,
            "content": "zzzzzz",
            "isComplete": false,
            "createdAt": "2021-03-12T09:47:48.018Z",
            "updatedAt": "2021-03-12T09:47:48.018Z",
            "userId": 1
        },
        {
            "id": 21,
            "content": "zzzzzz",
            "isComplete": false,
            "createdAt": "2021-03-12T09:48:04.657Z",
            "updatedAt": "2021-03-12T09:48:04.657Z",
            "userId": 1
        },
        {
            "id": 22,
            "content": "aaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:53:53.976Z",
            "updatedAt": "2021-03-12T09:53:53.976Z",
            "userId": 1
        },
        {
            "id": 23,
            "content": "z",
            "isComplete": false,
            "createdAt": "2021-03-12T09:54:08.868Z",
            "updatedAt": "2021-03-12T09:54:08.868Z",
            "userId": 1
        },
        {
            "id": 24,
            "content": "aaa",
            "isComplete": false,
            "createdAt": "2021-03-12T09:57:32.473Z",
            "updatedAt": "2021-03-12T09:57:32.473Z",
            "userId": 1
        },
        {
            "id": 25,
            "content": "ggggg",
            "isComplete": false,
            "createdAt": "2021-03-12T10:52:54.023Z",
            "updatedAt": "2021-03-12T10:52:54.024Z",
            "userId": 1
        },
        {
            "id": 26,
            "content": "ggggg",
            "isComplete": false,
            "createdAt": "2021-03-12T10:52:54.183Z",
            "updatedAt": "2021-03-12T10:52:54.184Z",
            "userId": 1
        },
        {
            "id": 2,
            "content": "aa",
            "isComplete": true,
            "createdAt": "2021-03-12T09:02:25.584Z",
            "updatedAt": "2021-03-12T12:20:31.946Z",
            "userId": 1
        }
    ]);

    return (
        <ImageBackground
  source={require('./fond.jpg')}
  style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>
        <ScrollView style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
            >
              <Icon 
                style={styles.profil}
                name="user"
                type="MaterialIcons"
              />
            </TouchableOpacity>

            <Text style={styles.title}>My list</Text>
            <View>



              {tasks.map((task) => (
                <View key={task.id}>

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
                                />
                            </TouchableOpacity>
    
                            <TouchableOpacity>
                                <Icon
                                    name="times"
                                    type="MaterialIcons"
                                    style={styles.icon}
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
                                />
                            </TouchableOpacity>
    
                            <TouchableOpacity>
                                <Icon
                                    name="check"
                                    type="MaterialIcons"
                                    style={styles.icon}
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
            <Button title="submit" onPress={() => { submit() }} />
        </View>
        
      </ScrollView>
      </ImageBackground>
    )
}


const styles = StyleSheet.create({
  container: {
    width: WIDTH,
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
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
    color:'white'
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

