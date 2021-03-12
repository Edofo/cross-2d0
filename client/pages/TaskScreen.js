import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Task from "../components/getTask";

const { width: WIDTH } = Dimensions.get('window')

export const TaskScreen = ({ navigation }) => {
    // GET ALL TASK OF USER
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch("http://192.168.56.1:4242/api/task/1")
          .then(response => response.json())
          .then(data => data.data ? setTask(data.data.task) : setTask(['You don\'t have task']));
      }, []);

    if (!tasks) {
        return <Text>LOADING</Text>
    }

    // ADD TASK 

    const [task, addTask] = useState({
      content: ''
    })

    function submit() {

      fetch(`http://192.168.56.1:4242/api/task/add/1`, {
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
      })
      .catch((error) =>{
          console.error(error);
      }) 
    };    

    return (
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
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isComplete={task.isComplete}
                />
              ))}
            </View>
            <View
            style={{margin:20, marginTop:100}}
            >
            <TextInput
                placeholder="Enter content"
                onChangeText={(text) => { addTask({ content: text }) }}
                style={{ borderWidth:2, borderColor:'skyblue', margin:20 }}
            />
            <Button title="submit" onPress={() => { submit() }} />
        </View>
      </ScrollView>
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
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
  },
});