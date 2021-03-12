import React from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export function Task(props) {
    
    const styles = StyleSheet.create({
        container: {
            width: WIDTH - 25,
            flex: 1,
            alignSelf: 'center',
            marginTop: 15,
            backgroundColor: 'white',
            borderRadius: 5,
        },
        text: {
            lineHeight: 70,
            left: 10,
            fontSize: 23,
        },
        true: {
            textDecorationLine: 'line-through',
        }
    });

    return(
        <View style={styles.container}>
            {props.isComplete ? 
            <Text style={styles.true, styles.text}>{props.content}</Text> 
            : 
            <Text style={styles.false, styles.text}>{props.content}</Text>}
        </View>
    );
    
}

export default Task;


