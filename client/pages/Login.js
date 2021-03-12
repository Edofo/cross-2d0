import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";

export function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button2Row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button2}
        >
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum}></Text>
      </View>
      <View style={styles.rect}>
        <TextInput placeholder="Email" style={styles.email}></TextInput>
      </View>
      <View style={styles.rect2}>
        <TextInput placeholder="Password" style={styles.password}></TextInput>
      </View>
      <View style={styles.toDoListRow}>
        <Text style={styles.toDoList}>To-Do List</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ToDolist")}
        style={styles.button}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button2: {
    width: 138,
    height: 56,
    backgroundColor: "#E6E6E6"
  },
  register: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 68,
    fontSize: 18,
    marginTop: 19,
    marginLeft: 35
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  button2Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 474,
    marginLeft: 132,
    marginRight: 105
  },
  rect: {
    width: 272,
    height: 61,
    backgroundColor: "#E6E6E6",
    borderRadius: 21,
    marginTop: -356,
    alignSelf: "center"
  },
  email: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 244,
    marginTop: 16,
    marginLeft: 20
  },
  email1: {
    top: 16,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 244
  },
  rect2: {
    top: 0,
    left: 0,
    width: 272,
    height: 61,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 21
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 244,
    marginTop: 16,
    marginLeft: 14
  },
  email1Stack: {
    width: 272,
    height: 61,
    marginTop: 32,
    marginLeft: 58
  },
  toDoList: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 50,
    width: 107,
    fontSize: 20
  },
  toDoList1: {
    top: 25,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 50,
    width: 107,
    fontSize: 20
  },
  toDoList2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 50,
    width: 107,
    fontSize: 20
  },
  toDoList1Stack: {
    width: 107,
    height: 75,
    marginLeft: 272
  },
  toDoListRow: {
    height: 75,
    flexDirection: "row",
    marginTop: -252,
    marginLeft: 140,
    marginRight: -251
  },
  button: {
    width: 138,
    height: 56,
    backgroundColor: "#E6E6E6",
    marginTop: 231,
    marginLeft: 132
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 46,
    fontSize: 18,
    marginTop: 19,
    marginLeft: 39
  }
});