import React, {useContext, useState} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { PedidoContext } from '../context/Pedido';
import CheckBox from '@react-native-community/checkbox';

// import { Container } from './styles';

const Pagamento = ({navigation}) => {
    const { pedido, acougue, setAcougue, churrasqueiro, setChurrasqueiro, total, setTotal, } = useContext(PedidoContext);
    const [isCheckedPix, setIsCheckedPix] = useState(false);
    const [isCheckedCreditCard, setIsCheckedCreditCard] = useState(false);
    const [isCheckedDebitCard, setIsCheckedDebitCard] = useState(false);

    const trocaTela = () => {
    navigation.navigate('PedidoFinalizado');
    }

  return (
    <View style={styles.body}>
        <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
        <View style={styles.containerVermelho}>
          <Text style={styles.header}>TOTAL</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.branco}>Açougue</Text>
            <Text style={styles.branco}>R$ {acougue}</Text>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.branco}>Churrasqueiro</Text>
            <Text style={styles.branco}>R$ {churrasqueiro ? '70.00' : "0.00"}</Text>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.branco}>Valor final</Text>
            <Text style={styles.branco}>R$ {total}</Text>
          </View>
        </View>

        <View style={styles.containerVermelho}>
            <Text style={styles.header}>FORMA DE PAGAMENTO</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.branco}>Pix</Text>
              <CheckBox value={isCheckedPix}  onValueChange={() => setIsCheckedPix(!isCheckedPix)} style={styles.unchecked}/>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.branco}>Cartão de crédito</Text>
              <CheckBox value={isCheckedCreditCard}  onValueChange={() => setIsCheckedCreditCard(!isCheckedCreditCard)} style={styles.unchecked}/>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.branco}>Cartão de débito</Text>
              <CheckBox value={isCheckedDebitCard}  onValueChange={() => setIsCheckedDebitCard(!isCheckedDebitCard)} style={styles.unchecked}/>
            </View>
        </View>

        <TouchableHighlight style={styles.buttonCinza}>
            <Text style={styles.preto}>Revisar itens</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={trocaTela} style={styles.buttonVermelho}>
            <Text style={styles.branco}>Realizar pagamento</Text>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: '#691D1D',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerVermelho: {
    backgroundColor: '#411919',
    borderRadius: 25,
    width: 350,
    display: 'flex',
    padding: 15,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Updated this line
    width: '100%', // Added this line to take full width
  },
  label: {
    marginRight: 10,
    marginLeft: 10,
    color: '#fff',
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  },
  unit: {
    flex: 1, // Updated this line
    color: '#fff',
    marginRight: 5, // Added margin for spacing
  },
  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
    marginLeft: 10,
    color: '#FFF'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: 10,
    marginBottom: 20
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
  branco: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 15
  },
  unchecked: {
    borderColor: '#fff',
    color: '#fff'
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'space-evenly',
    justifyContent: 'space-evenly'
  },
  start: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  end: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    marginLeft: 'auto', // Move value to the end
  },
  buttonCinza: {
    backgroundColor: '#BBB',
    borderRadius: 15,
    padding: 15,
    width: 250,
    margin: 15,
    marginTop: 50
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

export default Pagamento;