import React from 'react';
import { StyleSheet, Dimensions, TextInput , View, TouchableOpacity } from "react-native";
import { IconButton, Colors } from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('window')

export default function CustomInput(props) {

    const styles = StyleSheet.create({
        containerText: {
            flexDirection: 'row',
            alignSelf: 'center'
        },
        textInput: {
            width: WIDTH - 75,
            height: 55,
            backgroundColor: "#ded6d4",
            borderWidth: 1.5,
            borderColor: "#000000",
            opacity: 0.8,
            borderRadius: 45,
            paddingLeft: 10,
            marginTop: 15,
            marginBottom: 15,
        },
        inputIcon: {
            position: 'absolute',
            top: 22,
            right: 5,
            fontSize: 20
        }
     });
    
    return (
        <View
            key={props.id}
            style={styles.containerText}
        >
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                placeholder={props.placeholder}
                value={props.valeur}
                onChangeText={props.text}
                secureTextEntry={props.secure}
            />   
            { props.pwd ? 
            <IconButton 
                style={styles.inputIcon}
                icon="eye"
                size={20}
                onPress={props.changeVisibility}
            />
            : 
            <View></View> 
            } 
        </View>
    )
}

