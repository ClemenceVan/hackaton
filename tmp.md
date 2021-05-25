


                    style={[
                        styles.button, {
                            position: 'absolute',
                            left: 0,
                            top: 200,
                            backgroundColor: '#4169E1'
                        },
                    ]}

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Home Screen</Text>
<Button
title="Go to Details"
onPress={() => navigation.navigate('Details')}
/>
</View>
//////
import * as React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={styles.title}>
<Text style={{color: 'white', fontSize: 40}}>SecureKeys</Text>
</View>
<View style={styles.question_mark}>
<Text style={{color: 'white', fontSize: 40}}>?</Text>
</View>
<TouchableOpacity
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
style={[styles.button, {
position: 'absolute',
left: 0,
bottom: 200,
backgroundColor: '#FFC0CB'
}]}>
<Text>Appel</Text>
</TouchableOpacity>
<TouchableOpacity
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
<View style={styles.credit}>
<Text style={{color: 'white', fontSize: 20}}>Hackathon 2021</Text>
</View>
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
title: {
flex: 1,
padding: 10,
alignItems: "center",
margin: 40,
},
credit: {
alignItems: "center",
justifyContent: 'center',
bottom: 0,
left: 100,
margin: 20,
},
question_mark: {
position: 'absolute',
width: 50,
height: 50,
bottom: 0,
left: 0,
margin: 20,
alignItems: "center",
justifyContent: 'center',
borderWidth: 2,
borderRadius: 30,
borderColor: 'white',
},
});
