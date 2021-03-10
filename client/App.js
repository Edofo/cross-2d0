import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';

export default function App() {

  return (
      <View style={styles.container}>
        
        <StatusBar style="auto" />
      </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
});
