import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Dimensions, Alert } from "react-native";

import IconFont from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { IconButton, Colors } from 'react-native-paper';

import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput'

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


    const customButton = [
        {
            actionsbtn: () => submit(),
            title: 'Register'
        }, 
      ]
    
      const customInput = [
        {
            placeholder: 'Firstname',
            valeur: user.firstname,
            changeText: handleFirstname,
            secureTextEntry: false,
            pwd: false
        }, 
        {
            placeholder: 'Lastname',
            valeur: user.lastname,
            changeText: handleLastname,
            secureTextEntry: false,
            pwd: false
        }, 
        {
            placeholder: 'Email',
            valeur: user.email,
            changeText: handleEmail,
            secureTextEntry: false,
            pwd: false
        },
        {
            placeholder: 'Birthdate YYYY-MM-DD',
            valeur: user.birthday,
            changeText: handleBirth,
            secureTextEntry: false,
            pwd: false
        }, 
    ]

    const customInput2 = [
        {
            placeholder: 'Password',
            value: user.password,
            changeText: handlePwd,
            secureTextEntry: user.security,
            pwd: true,
            changeVisibility: changeMode
        },
        {
            placeholder: 'Confirm Password',
            value: user.confpwd,
            changeText: handleConfPwd,
            secureTextEntry: user.security,
            pwd: true,
            changeVisibility: changeMode
        }
    ]


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
        setUser({ ...user, firstname: text })
    };

    function handleLastname(text) {
        setUser({ ...user, lastname: text })
    };

    function handleEmail(text) {
        setUser({ ...user, email: text })
    };

    function handleBirth(text) {
        setUser({ ...user, birthday: text })
    };

    function handlePwd(text) {
        setUser({ ...user, password: text })
    };

    function handleConfPwd(text) {
        setUser({ ...user, confpwd: text })
    };

    function handleGender(text) {
        setUser({ ...user, gender: text })
    };

    function changeMode() {
        user.security ? setUser({ ...user, security: false}) : setUser({ ...user, security: true})
    };

    return (
        <ImageBackground
            source={require('../assets/fond.jpg')}
            style={{ resizeMode: "cover", flex:1, height: '100%', width: '100%'}}>
            <ScrollView>
                <View style={styles.container} key={1}>

                    <View style={styles.container2}>
                        <CustomTitle
                            key={1}
                            id={1}
                            text={'Register'}
                            style={styles.title2}
                        />
                        <IconButton style={styles.icon}
                            icon="arrow-left"   
                            color={Colors.white}
                            size={25}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>

                    <View>
                    { customInput.map((input, index) => (
                        <CustomInput
                            key={index}
                            id={index}
                            placeholder={input.placeholder}
                            valeur={input.valeur}
                            text={input.changeText}
                            secure={input.secureTextEntry}
                            pwd={input.pwd}
                            changeVisibility={input.changeVisibility}
                        />
                    ))}
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

                    <View>
                    { customInput2.map((input, index) => (
                        <CustomInput
                            key={index}
                            id={index}
                            placeholder={input.placeholder}
                            valeur={input.valeur}
                            text={input.changeText}
                            secure={input.secureTextEntry}
                            pwd={input.pwd}
                            changeVisibility={input.changeVisibility}
                        />
                    ))}
                    </View>

                    <View>
                    { customButton.map((button, index) => (
                        <CustomButton
                            key={index}
                            id={index}
                            actionsbtn={button.actionsbtn}
                            title={button.title}
                        />
                    ))}
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        flexDirection:'row-reverse',
        alignContent: 'space-between',
        position: 'relative',
        left: -25,
    },
    icon: {
        left: 60
    },
    picker: {
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