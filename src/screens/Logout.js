import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Logout = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.header}>Peça seu churrasco</Text>
            <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />

            <View style={styles.containerVermelho}>
                <Text>Deseja mesmo sair?</Text>
            </View>

            <View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
      );
    };

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
    },
    image: {
      width: '75%',
      height: 200,  // Set a fixed height for the image
      marginVertical: 10,
    },
    form: {
      width: '80%',
    },
    input: {
      borderRadius: 25,
      marginVertical: 5,
      padding: 10,
      backgroundColor: '#bbb',
      width: '100%',  // Set a fixed width for the input fields
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#2F9E41',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Logout;