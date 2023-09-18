import React, {useContext, useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import { AuthenticationContext } from '../context/Authentication';
import { SafeAreaView } from 'react-native-safe-area-context';
import MeuButton from '../components/MeuButton';


const TodosPedidos = ({navigation}) => {
    const {user, setUser} = useContext(AuthenticationContext);

    const handlePedidoPress =  () => {
      navigation.navigate('PedidoProdutos');
    }

    return (
      <ScrollView>
          <View style={styles.container}>
            <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
            <Text style={styles.pedido}>MEUS PEDIDOS</Text>
            <TouchableHighlight style={styles.buttonPedido} onPress={handlePedidoPress}>
                <Text style={styles.buttonPedidoColor}>+     Pedido 1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonPedido}>
                <Text style={styles.buttonPedidoColor}>+     Pedido 2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonPedido}>
                <Text style={styles.buttonPedidoColor}>+     Pedido 3</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonPedido}>
                <Text style={styles.buttonPedidoColor}>+     Pedido 4</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonVoltar}>
                <Text style={styles.buttonVoltarText}>Voltar</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      )
    }

    const styles = StyleSheet.create({
        input: {
          borderRadius: 25,
          margin: 10,
          padding: 10,
          backgroundColor: '#bbb',
          width: 250
        },
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%', 
          backgroundColor: '#691D1D'
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 250 // Set the width to 100% of the parent container's width
        },
        texto: {
          margin: 25,
          padding: 50,
          color: '#FFF',
          backgroundColor: '#411119',
          borderRadius: 25
        },
        image: {
          width: '75%',
          height: '50%',
          margin: 25,
          borderRadius: 25
        },
        button: {
          width: 350,
          height: 50,
          backgroundColor: '#2F9E41',
          padding: '10',
          margin: '10',
          borderRadius: 25,
          marginTop: 25
        }, 
        header: {
          fontWeight: 'bold',
          fontSize: 28,
          color: '#FFF',
          margin: 25
        },
        pedido: {
            backgroundColor: '#411919',
            padding: 25,
            margin: 25,
            borderRadius: 25,
            color:'#FFF',
            fontWeight: 'bold',
            width: 300,
            textAlign: 'center'
        },
        buttonPedido: {
            margin: 15,
            padding: 15,
            borderRadius: 15,
            color: '#FFF',
            backgroundColor: '#411919',
            width: 300
        },
        buttonPedidoColor: {
            color: '#FFF',
            textAlign: 'center'
        },
        buttonVoltar: {
            margin: 50,
            backgroundColor: '#DDD',
            color: '#000',
            borderRadius: 15,
            padding: 25,
            marginTop: 200,
            width: 150
        },
        buttonVoltarText: {
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#000'
        }
    });

export default TodosPedidos;