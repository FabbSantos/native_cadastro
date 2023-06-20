import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  function handleSignUp(){
    if (name === '' || email === '' || password === '') {
      alert("Please, fill the fields.");
      return
    }
    const data = {
      name,
      email,
      password
    }
    console.log(data);
  }

  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <View>
        <Image source={require('./assets/logo.png')} style={{ width: 300, height: 300}}/>
      </View>
      <Text style ={styles.text}>Teste foda</Text>

      <View style ={ styles.containerInput }>

        <TextInput 
          style={styles.input} 
          placeholder='Your name' 
          placeholderTextColor='#5a5c5a' 
          value={name}
          onChangeText={setName}
        />

        <TextInput style={styles.input} 
          placeholder='Your E-mail' 
          placeholderTextColor='#5a5c5a'  
          onChangeText={setEmail} 
          value={email}
        />
        <TextInput style={styles.input} 
          placeholder='Password' 
          placeholderTextColor='#5a5c5a'  
          secureTextEntry={true} 
          onChangeText={setPassword} 
          value={password}
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
  text:{
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
