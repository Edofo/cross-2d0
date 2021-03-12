import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export function Task(props) {
    
    const styles = StyleSheet.create({
        true: {
            textDecorationLine: 'line-through',
        }
        });

    return(
        <View>
            {props.isComplete ? 
            <Text style={styles.true}>{props.content}</Text> 
            : 
            <Text style={styles.false}>{props.content}</Text>}
        </View>
    );
    
}

export default Task;


