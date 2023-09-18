import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SelectType = ({ navigation }) => {
  const handleClientPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
      <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />
      <View style={styles.containerVermelho}>
      <Text style={styles.text}>Selecione o tipo de usuário:</Text>
      <TouchableOpacity style={styles.button} onPress={handleClientPress}>
        <Text style={styles.buttonText}>Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Churrasqueiro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleClientPress}>
        <Text style={styles.buttonText}>Açougue</Text>
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
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: 10,
  },
  image: {
    width: '90%',
    height: '35%',
    marginVertical: 20,
    borderRadius: 25
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#BBB',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    width: 300
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerVermelho: {
    backgroundColor: '#411919',
    borderRadius: 25,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25
  },
});

export default SelectType;
