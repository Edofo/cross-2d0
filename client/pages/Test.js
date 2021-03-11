import React from 'react';
import { Text, View, Button } from 'react-native';

export function Test({ navigation }) {

    const response = fetch(`http://localhost:4242/api/task/1`).then((res) => res.json());


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Test Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
      </View>
    );
}

