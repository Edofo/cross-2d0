import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions, View } from "react-native";

const { width: WIDTH } = Dimensions.get('window')

export default function CustomTitle(props) {

    const styles = StyleSheet.create({
        title: {
            color: '#efedec',
            height: 50,
            fontSize: 20,
            marginTop: 50,
            fontSize: 30
        }
     });    
    return (
        <Text style={styles.title}>{props.text}</Text>
    )
}

