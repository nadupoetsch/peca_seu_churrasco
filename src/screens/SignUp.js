import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [complement, setComplement] = useState('');

  
  const handleSignUp = async () => {
    try {
      // Create a user object with the form data
      const user = {
        email,
        senha: password, // Assuming 'senha' corresponds to 'password'
        nome: name,
        cpf,
        endereco: address, // Assuming 'endereco' corresponds to 'address'
      };
  
      // Send a POST request to your backend
      const response = await fetch('http://localhost:3005/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.status === 201) {
        // User created successfully
        const responseData = await response.json();
        console.log('User created successfully:', responseData);
        // You can add navigation logic here to navigate to the next screen
      } else {
        // Handle errors here
        console.error('Failed to create user:', response.statusText);
        // You can display an error message to the user
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle network or other errors here
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
      <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />
      <Text style={styles.cadastroText}>Cadastro Pessoa Física</Text>
      <View style={styles.form}>
        <View style={styles.containerVermelho}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputVermelho}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.inputVermelho}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonVoltar} >
            <Text style={styles.buttonTextVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#691D1D',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: 10,
  },
  cadastroText: {
    marginVertical: 10,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#411919',
    borderRadius: 25,
    padding: 15,
  },
  image: {
    width: '75%',
    height: 200,
    marginVertical: 10,
  },
  form: {
    width: '75%',
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    color: '#FFF',
  },
  input: {
    borderRadius: 25,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#bbb',
  },
  inputVermelho: {
    borderRadius: 25,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#bbb',
    width: 250,
  },
  input80: {
    borderRadius: 25,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#bbb',
    width: '90%',
  },
  input20: {
    borderRadius: 25,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#bbb',
    width: '100%',
  },
  input25: {
    borderRadius: 25,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#bbb',
    width: '80%',
  },
  input75: {
    borderRadius: 25,
    marginVertical: 5,
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
    marginBottom: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerVermelho: {
    backgroundColor: '#411919',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonVoltar: {
    width: '100%',
    height: 50,
    backgroundColor: '#411919',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  buttonTextVoltar: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;
