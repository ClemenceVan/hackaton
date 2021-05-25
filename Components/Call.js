import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import call from 'react-native-phone-call';

const App = () => {
    const [inputValue, setInputValue] = useState('0686201018');

    const triggerCall = () => {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
        }

        const args = {
            number: inputValue,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Enter Conatct Number to Call
                </Text>
                <TextInput
                    value={inputValue}
                    onChangeText={
                        (inputValue) => setInputValue(inputValue)
                    }
                    placeholder={'Enter Contact Number to Call'}
                    keyboardType="numeric"
                    style={styles.textInput}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={triggerCall}>
                    <Text style={styles.buttonTextStyle}>
                        Make a Call
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
        color: 'white',
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#EE82EE',
        borderRadius: 12,
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        borderRadius: 12,
        marginTop: 30,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
});

