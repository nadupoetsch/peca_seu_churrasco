import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthenticationContext } from '../context/Authentication';

const SignIn = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Create a data object with the email and password
    const data = {
      email,
      senha: password, // Assuming "senha" is the password field in your database
    };
  
    // Make a POST request to your backend
    fetch('http://localhost:3005/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          console.error('Sign-in error:', responseJson.error);
          // Handle sign-in error, e.g., display an error message to the user
        } else {
          // Sign-in successful, you can set user data in your context
          setUser(responseJson.user);
          // You can also navigate to a different screen here
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        // Handle sign-in error, e.g., display an error message to the user
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
      <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor="#000"/>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholderTextColor="#000"/>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SelectType')}>
        <Text style={styles.linkText} >Criar uma conta agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#691D1D',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#FFF',
    marginTop: 20,
  },
  texto: {
    marginVertical: 20,
    color: '#FFF',
  },
  image: {
    width: '100%',
    height: '35%',
    marginVertical: 20,
    borderRadius: 25
  },
  input: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#bbb',
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#BBB',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#FFF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default SignIn;
