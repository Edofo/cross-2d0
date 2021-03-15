import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';


export function ProfilScreen({ navigation }) {
return (
<View style={styles.container}>
    <View style={styles.container2}>
        <Text style={styles.toDoListTitle}>Profil</Text>
        <IconButton style={styles.icon}
        icon="arrow-left"   
        color={Colors.red500}
        size={20}
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  <Text style={styles.front}>Firstname :</Text>
  <View style={styles.rect}>
        <Icon name="edit" style={styles.Icon}></Icon>
        <Text style={styles.billy}>billy</Text>
      </View>
  <Text style={styles.front}>Lastname :</Text>
  <View style={styles.rect}>
        <Icon name="edit" style={styles.Icon}></Icon>
        <Text style={styles.billy}>billy</Text>
      </View>
  <Text style={styles.front}>Birthday :</Text>
  <View style={styles.rect}>
        <Icon name="edit" style={styles.Icon}></Icon>
        <Text style={styles.billy}>billy</Text>
      </View>
  <Text style={styles.front}>Gender :</Text>
  <View style={styles.rect}>
        <Icon name="edit" style={styles.Icon}></Icon>
        <Text style={styles.billy}>billy</Text>
      </View>
  <Text style={styles.front}>Password :</Text>
  <View style={styles.rect}>
        <Icon name="edit" style={styles.Icon}></Icon>
        <Text style={styles.billy}>billy</Text>
      </View>
  </View>)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection:'row-reverse',
    alignItems: 'center',
    marginRight: 'auto',
    alignContent: 'space-between'
  },
  btnBG: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000000",
    width: 138,
    height: 60,
    alignSelf:'center',
    marginTop: 25

  },
  toDoListTitle: {
    color: 'grey',
    height: 50,
    fontSize: 20,
    marginTop: 25,
    
    },
  front:{
    marginTop: 20,
    color: 'grey',
    height: 50,
    fontSize: 20,
  },
  rect: {
    width: 304,
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 15,
  },
  Icon: {
    fontSize: 15,
    marginLeft: 'auto'
  },
  icon: {
      backgroundColor: 'green',
      marginRight: 150
  }
});
