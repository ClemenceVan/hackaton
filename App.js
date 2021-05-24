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
                    <TouchableOpacity
                        onPress={() => handleClick(1)}
                        style={[
                            styles.button, {
                                position: 'absolute',
                                left: 0,
                                top: 200,
                                backgroundColor: '#4169E1'
                            },
                        ]}>
                        <Text>Localisation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleClick(2)}
                        style={[styles.button, {
                            position: 'absolute',
                            left: 0,
                            bottom: 200,
                            backgroundColor: '#FFC0CB'}]}>
                        <Text>Appel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleClick(3)}
                        style={[
                            styles.button, {
                            position: 'absolute',
                            right: 0,
                            top: 200,
                            backgroundColor: '#EE82EE',
                        }]}>
                        <Text>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleClick(4)}
                        style={[
                            styles.button, {
                                position: 'absolute',
                                right: 0,
                                bottom: 200,
                                backgroundColor: '#ADD8E6',
                            },
                        ]}>
                        <Text>Répertoire</Text>
                    </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: 'black',
    },
    button: {
        padding: 10,
        margin: 40,
        width: 140,
        height: 140,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: "center",
    },
});
