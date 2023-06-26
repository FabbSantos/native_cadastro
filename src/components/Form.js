import { React, useState } from "react";
import { View, TouchableOpacity, TextInput, Image, Text, StyleSheet, StatusBar } from 'react-native'

function Form () {

    const [clientName, setClientName] = useState('');
    const [clientAlias, setClientAlias] = useState('');


    function handleSignUp() {
        if (clientName === '' || clientAlias === '') {
            alert("Please, fill the fields.");
            return
        }
        const data = {
            clientName,
            clientAlias,
        }
        console.log(data);
    }

    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <View>
                <Image source={require('../../assets/logo.png')} style={{ width: 300, height: 300 }} />
            </View>
            <Text style={styles.text}>Teste foda</Text>

            <View style={styles.containerInput}>

                <TextInput
                    style={styles.input}
                    placeholder='Client name'
                    placeholderTextColor='#5a5c5a'
                    value={clientName}
                    onChangeText={setClientName}
                />

                <TextInput style={styles.input}
                    placeholder='Client alias'
                    placeholderTextColor='#5a5c5a'
                    onChangeText={setClientAlias}
                    value={clientAlias}
                />

                <TouchableOpacity
                    style={styles.submit}
                    onPress={handleSignUp}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>SignUp</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#1c1e21',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60
    },
    containerInput: {
        width: '100%',
        gap: 20,
        paddingHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        paddingLeft: 20,
        paddingVertical: 8,
        borderRadius: 15,
        width: '100%',
    },
    submit: {
        width: '100%',
        backgroundColor: '#F93C00',
        color: '#000',
        paddingVertical: 14,
        borderRadius: 20,
        justifyContent: 'center',
    }
});


export default Form;