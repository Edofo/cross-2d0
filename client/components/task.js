import React, { Component } from "react";
import { Text } from 'react-native';

class Task extends Component {
    render() {
        return(
            <Text>{this.props.content}</Text>
        );
    }
}

export default Task;
