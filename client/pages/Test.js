import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function handleTaskFormSubmit() {

    const [task, addTask] = useState({
        content: ''
    })

    function submit() {
        console.log(task)

        fetch(`http://localhost:4242/api/task/add/1`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: task.content,
            })
            })

                .then((response) => response.json())
                .then((responseData) => {
                console.log("RESULTS HERE:", responseData)
        })
        .catch((error) =>{
            console.error(error);
        }) 
    };
    
    return (
        <View
            style={{margin:20, marginTop:100}}
        >
            <TextInput
                placeholder="Enter content"
                onChangeText={(text) => { addTask({ content: text }) }}
                style={{ borderWidth:2, borderColor:'skyblue', margin:20 }}
            />
            <Button title="submit" onPress={() => { submit() }} />
        </View>
    );
};
