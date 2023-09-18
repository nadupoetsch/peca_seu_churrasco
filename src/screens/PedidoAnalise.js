import React, {useEffect} from 'react';
import { ScrollView, TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';


const PedidoAnalise = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Pagamento'); // Navigate to the 'SignIn' screen
        }, 2000); // Delay for 2 seconds (2000 milliseconds)
    
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
      }, [navigation]);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
        <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />
        <View style={styles.containerVermelho}>
            <Text style={styles.branco}>Solicitação do pedido em análise! 
                O pagamento será liberado assim que o pedido for confirmado pelo estabelecimento.</Text>
        </View>
        <TouchableHighlight style={styles.buttonVermelho}>
            <Text style={styles.branco}>Verificar status do meu pedido</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonCinza}>
            <Text style={styles.buttonText}>Voltar para tela inicial</Text>
        </TouchableHighlight>
    </View>
  )
}

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
      width: '75%',
            height: '50%',
            margin: 25,
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
    branco: {
        color: '#FFF'
    },
    containerVermelhoButton: {
        backgroundColor: '#411919',
        borderRadius: 25,
        width: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 25,
        margin: 25
      },
      buttonCinza: {
        backgroundColor: '#BBB',
        borderRadius: 15,
        padding: 15,
        width: 250,
        margin: 15,
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
      buttonVermelho: {
        backgroundColor: '#7F3030',
        color: 'FFF',
        borderRadius: 15,
        padding: 15,
        fontWeight: 'bold',
        width: 250,
        margin: 15
      },
  });
  
export default PedidoAnalise;