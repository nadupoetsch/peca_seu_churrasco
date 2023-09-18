import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { PedidoContext } from "../context/Pedido"; // Import the context
import CheckBox from "@react-native-community/checkbox";

const ConfirmarPedidos = ({navigation}) => {
  const { pedido, acougue, setAcougue, churrasqueiro, setChurrasqueiro, total, setTotal } = useContext(PedidoContext); // Access pedido from the context
  const [isChecked, setIsChecked] = useState(false);

  const itemPrices = {
    paoDeAlho: 14.90,
    linguicaFina: 33.90,
    linguicaGrossa: 38.90,
    queijo: 37.90,
    frango: 13.90,
    porco: 26.90,
    costelaDeOvelha: 65.98,
    paletaDeOvelha: 79.89,
    picanha: 151.98,
    fileMignon: 49.45,
    maminha: 35.75,
    entrecot: 59.98,
    costela: 68.98,
    vazio: 49.81,
    alcatra: 31.99,
    capaDeFile: 32.98,
  };

  const itemDisplayNames = {
    paoDeAlho: "Pão de Alho",
    linguicaFina: "Linguica Fina",
    linguicaGrossa: "Linguica Grossa",
    queijo: "Queijo",
    frango: "Frango",
    porco: "Porco",
    costelaDeOvelha: "Costela de Ovelha",
    paletaDeOvelha: "Paleta de Ovelha",
    picanha: "Picanha",
    fileMignon: "Filé Mignon",
    maminha: "Maminha",
    entrecot: "Entrecot",
    costela: "Costela",
    vazio: "Vazio",
    alcatra: "Alcatra",
    capaDeFile: "Capa de Filé",
  };
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setChurrasqueiro(!churrasqueiro);
  };

  const trocaTela = () => {
    navigation.navigate('PedidoAnalise');
  }

  useEffect(() => {
    let acougueTotal = 0;
    for (const item in pedido) {
      if (pedido[item] > 0 && itemPrices[item]) {
        acougueTotal += pedido[item] * itemPrices[item];
      }
    }
    setAcougue(acougueTotal);
    // Calculate the total value for valorTotal including churrasqueiro
    let valorTotal = acougue + (churrasqueiro ? 70.0 : 0);
    // Update the total value in the context
    setTotal(valorTotal);
  }, [acougue, churrasqueiro]);

  const renderPedidoItems = () => {
    return Object.keys(pedido).map((item) => {
      const quantity = pedido[item];
      if (quantity > 0) {
        return (
          <View style={styles.inputWrapper} key={item}>
            <Text style={styles.unit}>{itemDisplayNames[item]}:</Text>
            <Text style={styles.value}>{quantity} {item === "frango" ? "Un" : "Kg"}</Text>
          </View>
        );
      }
      return null;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
      <View style={styles.container}>
        
        <View style={styles.containerVermelho}>
          <Text style={styles.header}>ITENS SOLICITADOS</Text>
          {renderPedidoItems()}
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Valor total:</Text>
            <Text style={styles.value}>R$ {acougue}</Text>
          </View>
        </View>

        <View style={styles.containerVermelho}>
          <Text style={styles.header}>CHURRASQUEIRO</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Necessita de um churrasqueiro?</Text>
            <CheckBox value={isChecked} onValueChange={handleCheckboxChange} style={styles.value}/>
          </View>
        </View>

        <View style={styles.containerVermelho}>
          <Text style={styles.header}>TOTAL</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Açougue</Text>
            <Text style={styles.value}>R$ {acougue.toFixed(2)}</Text>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Churrasqueiro</Text>
            <Text style={styles.value}>R$ {churrasqueiro ? '70.00' : "0.00"}</Text>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Valor final</Text>
            <Text style={styles.value}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {/* Navigation buttons */}
      <View>
        <TouchableHighlight style={styles.buttonVermelho}>
          <Text style={styles.branco}>Voltar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonCinza} onPress={trocaTela}>
          <Text style={styles.preto}>Confirmar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

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
    margin: 15
  },
  unchecked: {
    borderColor: '#fff',
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

export default ConfirmarPedidos;
