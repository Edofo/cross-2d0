import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Task from "../components/Task";

class TaskScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
  }

  async componentDidMount() {

    const response = await fetch(`http://localhost:4242/api/task/1`);
    const tasks = await response.json(); 

    this.setState({ tasks });

  }

  render() {
    
    if (!this.state.tasks.data) {
      return <Text>LOADING</Text>
    }


    const aTask = this.state.tasks.data.task
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          {aTask.map((task) => (
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
}

export default TaskScreen;
