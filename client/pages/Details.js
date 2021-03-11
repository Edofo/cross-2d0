import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Task from "../components/Task";

class DetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
  }

  async componentDidMount() {

    const response = await fetch(`http://localhost:4242/api/task/1`);
    const tasks = await response.json(); 

    this.setState({ tasks });

    console.log(tasks);
  }

  render() {
    
    if (!this.state.tasks.data) {
      return <Text>LOL</Text>
    }

    console.log(this.state.tasks.data) 
    console.log(this.state.tasks.data.task) 
    console.log(this.state.tasks.data.task[0])
    console.log(this.state.tasks.data.task[0].id)  

    const aTask = this.state.tasks.data.task
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          {aTask.map((task, index) => (
            <Task
              key={task.index}
              content={task.content}
            />
          ))}
      </View>
    )
  }
}

export default DetailsScreen;
