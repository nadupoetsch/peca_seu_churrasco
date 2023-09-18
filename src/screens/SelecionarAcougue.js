import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AuthenticationContext } from '../context/Authentication';
import { Picker } from '@react-native-picker/picker';

const SelecionarAcougue = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Peça seu churrasco</Text>
      <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />

      <View style={styles.containerVemelho}>
        <Text style={styles.texto}>Escolha o estabelecimento</Text>
        <Picker selectedValue={selectedValue} onValueChange={value => console.log(value)}>
            <Picker.Item label="Default" value="default" /> {/* Add a default option */}
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PedidoProdutos')}>
              <Text style={styles.linkText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      
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
    width: '75%',
    height: '50%',
    marginVertical: 20,
  },
  input: {
    borderRadius: 25,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#bbb',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150
  },
  button: {
    backgroundColor: '#BBB',
    margin: 15,
    padding: 15,
    borderRadius: 25
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#FFF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  containerVemelho: {
    backgroundColor: '#411919',
    borderRadius: 25,
    width: 350,
    display: 'flex',
  },
});

export default SelecionarAcougue;
