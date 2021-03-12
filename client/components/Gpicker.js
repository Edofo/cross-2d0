import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window')

export const Gpicker = () => {

    const [selectedValue, setSelectedValue] = useState("");

    return (
      <View style={styles.input}>
        <Icon
          name="sort-down"
          type="MaterialIcons"
          style={styles.pickerIcon}
        />
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
  
          <Picker.Item label="" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    picker: {
      width: 265,
      height: 50,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: 25,
    },
    pickerIcon: {
      color: 'rgba(255, 255, 255, 0.7)',
      position: "absolute",
      bottom: 15,
      right: 15,
      fontSize: 20,
      zIndex: 10,
   },
});