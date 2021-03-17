import React from 'react';
import { StyleSheet, Dimensions, TextInput , View, TouchableOpacity } from "react-native";
import IconFont from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window')

export default function CustomInput(props) {

    const styles = StyleSheet.create({
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
        }
     });
    
    return (
        <View
            key={props.id}
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
            <TouchableOpacity>
              <IconFont 
                onPress={props.changeVisibility}
                name="user"
                type="MaterialIcons"
              />
            </TouchableOpacity> 
            : 
            <View></View> 
            } 
        </View>
    )
}

