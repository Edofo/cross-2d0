import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('window').width;

export function Task(props) {
    
    const styles = StyleSheet.create({
        container: {
            width: WIDTH - 25,
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 15,
            backgroundColor: 'white',
            borderRadius: 5,
        },
        finish: {
            width: WIDTH - 25,
            flex: 1,
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 5,
            backgroundColor: 'grey',
        },
        task: {
            flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
        },  
        text: {
            lineHeight: 70,
            left: 10,
            fontSize: 23,
        },
        true: {
            lineHeight: 70,
            left: 10,
            fontSize: 23,
            textDecorationLine: 'line-through',
        },
        icons: {
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'flex-end',
        },
        icon: {
            fontSize: 35,
            marginRight: 20,
        }
    });

    return (
        <View>

            {props.isComplete ?
            <View style={styles.container, styles.finish}>

                <View style={styles.task}>

                    <Text style={styles.true}>{props.content}</Text> 

                    <View style={styles.icons}>
                        
                        <TouchableOpacity>
                            <Icon
                                name="trash"
                                type="MaterialIcons"
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Icon
                            name="times"
                            type="MaterialIcons"
                            style={styles.icon}
                        />
                        </TouchableOpacity> 

                    </View>

                </View>
            </View>
            :
            <View style={styles.container}>
                                        
                <View style={styles.task}>

                    <Text style={styles.false, styles.text}>{props.content}</Text>

                    <View style={styles.icons}>
                        
                        <TouchableOpacity>
                            <Icon
                                name="trash"
                                type="MaterialIcons"
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon
                                name="check"
                                type="MaterialIcons"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }
        </View>
    );
    
}

export default Task;