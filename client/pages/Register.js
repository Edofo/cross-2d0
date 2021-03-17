import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView, Dimensions, Alert } from "react-native";

import IconFont from 'react-native-vector-icons/FontAwesome';

import { Picker } from '@react-native-picker/picker';

const { width: WIDTH } = Dimensions.get('window')

export function RegisterScreen({ navigation }) {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        birthday: '',
        password: '',
        confpwd: '',
        gender: '',
        security: true,
    });


    function submit() {

        fetch(`http://10.3.2.188:4242/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                birthdate: user.birthday,
                password: user.password,
                passwordConfirmation: user.confpwd,
                gender: user.gender
            })
            })
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.error !== "id is not defined") {
                    console.log(responseData)
                    Alert.alert(responseData.error)
                } else {
                    navigation.navigate('Login2')
                }
            })
        .catch((error) =>{
            console.error(error);
        }) 
    };


    function handleFirstname(text) {
        setUser({ 
            firstname: text, 
            lastname: user.lastname,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
            confpwd: user.confpwd,
            gender: user.gender,
            security: user.security
        })
    }

    function handleLastname(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: text,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
            confpwd: user.confpwd,
            gender: user.gender,
            security: user.security
        })
    }

    function handleEmail(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: user.lastname,
            email: text,
            birthday: user.birthday,
            password: user.password,
            confpwd: user.confpwd,
            gender: user.gender,
            security: user.security
        })
    }

    function handleBirth(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: user.lastname,
            email: user.email,
            birthday: text,
            password: user.password,
            confpwd: user.confpwd,
            gender: user.gender,
            security: user.security
        })
    }

    function handlePwd(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: user.lastname,
            email: user.email,
            birthday: user.birthday,
            password: text,
            confpwd: user.confpwd,
            gender: user.gender,
            security: user.security
        })
    }

    function handleConfPwd(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: user.lastname,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
            confpwd: text,
            gender: user.gender,
            security: user.security
        })
    }

    function handleGender(text) {
        setUser({ 
            firstname: user.firstname, 
            lastname: user.lastname,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
            confpwd: user.confpwd,
            gender: text,
            security: user.security
        })
    }

    function changeMode() {
        if(user.security == true) {
            setUser({ 
                firstname: user.firstname, 
                lastname: user.lastname,
                email: user.email,
                birthday: user.birthday,
                password: user.password,
                confpwd: user.confpwd,
                gender: user.gender,
                security: false
            })
        } else {
            setUser({ 
                firstname: user.firstname, 
                lastname: user.lastname,
                email: user.email,
                birthday: user.birthday,
                password: user.password,
                confpwd: user.confpwd,
                gender: user.gender,
                security: true
            })
        }
      }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.toDoListTitle}>Register</Text>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Firstname'
                    value={user.firstname}
                    onChangeText={handleFirstname}
                />
            </View>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Lastname'
                    value={user.lastname}
                    onChangeText={handleLastname}
                />
            </View>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={user.email}
                    onChangeText={handleEmail}
                    />
            </View>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Birthdate YYYY-MM-DD'
                    value={user.birthday}
                    onChangeText={handleBirth}
                />     
            </View>

            <View style={styles.picker}>
                <Picker
                    selectedValue={user.gender}
                    value={user.gender}
                    onValueChange={handleGender}
                >
                    <Picker.Item label="Select a gender" value="" />
                    <Picker.Item label="No specific" value="NA" />
                    <Picker.Item label="Male" value="MALE" />
                    <Picker.Item label="Female" value="FEMALE" />
                </Picker>
                
            </View>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={user.password}
                    onChangeText={handlePwd}
                    secureTextEntry={user.security}
                />
                <TouchableOpacity>
                    <IconFont 
                        onPress={changeMode}
                        name="user"
                        type="MaterialIcons"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonArrondi}>
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    value={user.confpwd}
                    onChangeText={handleConfPwd}
                    secureTextEntry={user.security}
                />
                <TouchableOpacity>
                    <IconFont 
                        onPress={changeMode}
                        name="user"
                        type="MaterialIcons"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.register}>
                <TouchableOpacity
                    onPress={() => submit()}
                    style={styles.btnBG}>
                    <Text style={styles.front}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
)};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonArrondi: { 
        backgroundColor: "lightgrey",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 75,
        backgroundColor: "rgba(230,230,230,1)",
        width: WIDTH - 55,
        marginTop: 25,
    },
    btnBG: {
        backgroundColor: "lightgray",
        width: 138,
        height: 60,
        marginTop: 25
    },
    register: {
        marginTop: 20,
        marginBottom: 40,
    },
    toDoListTitle: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 40,
        marginBottom: 20,
      },
    front:{
        marginTop: 'auto',
        alignSelf:'center',
        color: 'yellow',
        height: 45,
        fontSize: 20,
    },
    input: {
        height: 50,
        paddingLeft: 20,
        fontSize: 15,
    },
    picker: {
        backgroundColor: "lightgrey",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 75,
        backgroundColor: "rgba(230,230,230,1)",
        width: WIDTH - 55,
        marginTop: 25,
        paddingLeft: 20,
        height: 50,
    }
});