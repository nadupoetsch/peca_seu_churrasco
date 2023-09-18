import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight } from "react-native";
import { PedidoContext } from "../context/Pedido";

const Escolha = ({navigation}) => {
  const { pedido, setPedido } = useContext(PedidoContext);

  const navigateToNextScreen = () => {
    navigation.navigate('ConfirmarPedido');
  }
  
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.header}>PEÇA SEU CHURRASCO</Text>
      <View style={styles.container}>
        <View style={styles.containerVemelho}>
          <Text style={styles.category}>ENTRADAS</Text>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Pão de alho</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Un</Text>
              <TextInput style={styles.input} value={pedido.paoDeAlho.toString()} onChangeText={(text) => {setPedido({ ...pedido, paoDeAlho: parseFloat(text) || 0 });}}/>
            </View>
          </View>

          <View style={styles.inputRow}>
          <Text style={styles.label}>Linguiça fina</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.linguicaFina.toString()} onChangeText={(text) => {setPedido({ ...pedido, linguicaFina: parseFloat(text) || 0 });}}/>
            </View>
          </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Linguiça grossa</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.linguicaGrossa.toString()} onChangeText={(text) => {setPedido({ ...pedido, linguicaGrossa: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Queijo</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.queijo.toString()} onChangeText={(text) => {setPedido({ ...pedido, queijo: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        </View>
      </View>

      <View style={styles.container}>
      <View style={styles.containerVemelho}>
          <Text style={styles.category}>PRATO PRINCIPAL</Text>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Frango</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Un</Text>
              <TextInput style={styles.input} value={pedido.frango.toString()} onChangeText={(text) => {setPedido({ ...pedido, frango: parseFloat(text) || 0 });}}/>
            </View>
          </View>

          <View style={styles.inputRow}>
          <Text style={styles.label}>Porco</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.porco.toString()} onChangeText={(text) => {setPedido({ ...pedido, porco: parseFloat(text) || 0 });}}/>
            </View>
          </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Costela de ovelha</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Un</Text>
            <TextInput style={styles.input} value={pedido.costelaDeOvelha.toString()} onChangeText={(text) => {setPedido({ ...pedido, costelaDeOvelha: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Paleta de ovelha</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Un</Text>
            <TextInput style={styles.input} value={pedido.paletaDeOvelha.toString()} onChangeText={(text) => {setPedido({ ...pedido, paletaDeOvelha: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
            <Text style={styles.label}>Picanha</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.picanha.toString()} onChangeText={(text) => {setPedido({ ...pedido, picanha: parseFloat(text) || 0 });}}/>
            </View>
          </View>

          <View style={styles.inputRow}>
          <Text style={styles.label}>Filé Mignon</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.fileMignon.toString()} onChangeText={(text) => {setPedido({ ...pedido, fileMignon: parseFloat(text) || 0 });}}/>
            </View>
          </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Maminha</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.maminha.toString()} onChangeText={(text) => {setPedido({ ...pedido, maminha: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Entrecot</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.entrecot.toString()} onChangeText={(text) => {setPedido({ ...pedido, entrecot: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
            <Text style={styles.label}>Costela</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.costela.toString()} onChangeText={(text) => {setPedido({ ...pedido, costela: parseFloat(text) || 0 });}}/>
            </View>
          </View>

          <View style={styles.inputRow}>
          <Text style={styles.label}>Vazio</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.unit}>Kg</Text>
              <TextInput style={styles.input} value={pedido.vazio.toString()} onChangeText={(text) => {setPedido({ ...pedido, vazio: parseFloat(text) || 0 });}}/>
            </View>
          </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Alcatra</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.alcatra.toString()} onChangeText={(text) => {setPedido({ ...pedido, alcatra: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Capa de filé</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.unit}>Kg</Text>
            <TextInput style={styles.input} value={pedido.capaDeFile.toString()} onChangeText={(text) => {setPedido({ ...pedido, capaDeFile: parseFloat(text) || 0 });}}/>
          </View>
        </View>

        </View>
      </View>

      <View>
      <TouchableHighlight style={styles.buttonVermelho}>
        <Text style={styles.branco}>Voltar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonCinza} onPress={navigateToNextScreen}>
          <Text style={styles.preto}>Finalizar</Text>
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
  containerVemelho: {
    backgroundColor: '#411919',
    borderRadius: 25,
    width: 350,
    display: 'flex',
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
    justifyContent: 'center'
  },
  label: {
    marginRight: 10,
    marginLeft: 10,
    color: '#fff',
    alignItems: "flex-end",
    justifyContent: 'flex-end'
  },
  unit: {
    marginLeft: 5,
    color: '#fff'
  },
  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
    marginLeft: 10,
    color: '#000',
    backgroundColor: '#fff'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: 10,
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

export default Escolha;
