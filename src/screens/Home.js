import React, {useContext, useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AuthenticationContext } from '../context/Authentication';

const Home = ({navigation}) => {
    const {user, setUser} = useContext(AuthenticationContext);

    const handlePedidoPress =  () => {
      navigation.navigate('PedidoProdutos');
    }

    const handleSairPress = () => {
      navigation.navigate('Logout');
    }

    const handleTodosPress = () => {
      navigation.navigate('TodosPedidos')
    }
    return (
      
          <View style={styles.container}>
            <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
            <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app"/>
            <Text style={styles.containerVermelho}>Bem-vindo(a), {user}</Text>
            <View style={styles.div}>
              <TouchableOpacity onPress={handleSairPress} style={styles.buttonSair}>
                <Text style={styles.preto}>Sair</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.branco}>Meus dados</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTodosPress} style={styles.button}>
              <Text style={styles.branco}>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePedidoPress} style={styles.buttonCinza}>
              <Text style={styles.preto}>Pedir meu churrasco!</Text>
            </TouchableOpacity>
          </View>
      )
    }

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
      buttonCinza: {
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
      containerVermelho: {
        backgroundColor: '#411919',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 25,
        marginBottom: 15,
        width: 375,
        color: '#FFF',
        textAlign: 'center'
      },
      buttonSair: {
        backgroundColor: '#7F3030',
        borderRadius: 15,
        padding: 15,
        fontWeight: 'bold'
      },
      button: {
        backgroundColor: '#7F3030',
        color: 'FFF',
        borderRadius: 15,
        padding: 15,
        fontWeight: 'bold',
        width: 250,
        margin: 15
      },
      branco: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
      },
      preto: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
      },
      buttonCinza: {
        backgroundColor: '#BBB',
        color: 'FFF',
        borderRadius: 15,
        padding: 15,
        fontWeight: 'bold',
        width: 250,
        margin: 15
      },
      div: {
        marginLeft: 300
      }
    });

export default Home;