import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';

class Task extends Component {
    
    render() {

        const styles = StyleSheet.create({
            true: {
                textDecorationLine: 'line-through',
            }
          });

        return(
            <View>
                {this.props.isComplete ? 
                <Text style={styles.true}>{this.props.content}</Text> 
                : 
                <Text style={styles.false}>{this.props.content}</Text>}
            </View>
        );
    }
    
}

export default Task;


