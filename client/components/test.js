import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class test extends Component {
  
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
    
  }

  async componentDidMount() {

    const response = await fetch(`http://localhost:4242/api/task/1`);
    const tasks = await response.json(); 

    this.setState({ tasks });

    console.log(tasks)
  }

  render() {
    if (!this.state.tasks) {
      return <Text>LOL</Text>
    }
  
  }
}
