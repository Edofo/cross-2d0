import React from 'react';

import { Text, View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Task"
          onPress={() => navigation.navigate('Task')}
        />
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
}
