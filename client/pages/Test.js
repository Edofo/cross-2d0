import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

import Task from "../components/Task";

export const Test = ({ navigation }) => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4242/api/task/1")
          .then(response => response.json())
          .then(data => setTask(data.data.task));
      }, []);

    if (!tasks) {
        return <Text>LOL</Text>
    }

    
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
        </View>
    )
}