import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import Task from "../components/getTask";

export const TaskScreen = ({ navigation }) => {
    // GET ALL TASK OF USER
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4242/api/task/1")
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
      console.log(task)

      fetch(`http://localhost:4242/api/task/add/1`, {
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
              console.log("RESULTS HERE:", responseData)
      })
      .catch((error) =>{
          console.error(error);
      }) 
  };
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
            />
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isComplete={task.isComplete}
              />
            ))}
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
        </View>
    )
}