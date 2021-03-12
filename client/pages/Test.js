import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const Test = ({ navigation }) => {

  const [selectedLanguage, setSelectedLanguage] = useState();


    return (
      <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    )
}