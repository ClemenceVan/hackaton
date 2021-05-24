import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default function App() {
    const handleClick = (num) => {
        alert(`${num} clicked`);
    };
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <View style={styles.btnContainerMiddle}>
                    <TouchableOpacity
                        onPress={() => handleClick(1)}
                        style={[
                            styles.button,
                            {position: 'absolute', left: -100, top: 0, backgroundColor: '#4169E1'},
                        ]}>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleClick(2)}
                        style={[styles.button, {backgroundColor: '#00FF00'}]}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleClick(3)}
                        style={[styles.button, {
                            position: 'absolute',
                            left: 100,
                            top: 0,
                            backgroundColor: '#FFFF00',
                        }]}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainerMiddle}>
                    <TouchableOpacity
                        onPress={() => handleClick(5)}
                        style={[
                            styles.button,
                            {
                                position: 'absolute', left: -100, bottom: 0, backgroundColor: '#FF00FF',
                            },
                        ]}>
                        <Text>5</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer: {
        // flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'grey',
        padding: 8,
        width: 400,
        height: 400,
        borderRadius: 100,
        alignItems: 'center',
    },
    btnContainerMiddle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        width: 140,
        height: 140,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
