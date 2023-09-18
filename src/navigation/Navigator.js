import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SelectType from '../screens/SelectType';
import PedidoProdutos from '../screens/PedidoProdutos';
import SelecionarAcougue from '../screens/SelecionarAcougue';
import TodosPedidos from '../screens/TodosPedidos';
import Loading from '../screens/Loading';
import ConfirmarPedido from '../screens/ConfirmarPedido'
import PedidoAnalise from '../screens/PedidoAnalise';
import Pagamento from '../screens/Pagamento';
import PedidoFinalizado from '../screens/PedidoFinalizado';
import Logout from '../screens/Logout';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SelectType" component={SelectType}></Stack.Screen>
      <Stack.Screen name="PedidoProdutos" component={PedidoProdutos}></Stack.Screen>
      <Stack.Screen name="SelecionarAcougue" component={SelecionarAcougue}></Stack.Screen>
      <Stack.Screen name="TodosPedidos" component={TodosPedidos}></Stack.Screen>
      <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
      <Stack.Screen name="ConfirmarPedido" component={ConfirmarPedido}></Stack.Screen>
      <Stack.Screen name="PedidoAnalise" component={PedidoAnalise}></Stack.Screen>
      <Stack.Screen name="Pagamento" component={Pagamento}></Stack.Screen>
      <Stack.Screen name="PedidoFinalizado" component={PedidoFinalizado}></Stack.Screen>
      <Stack.Screen name="Logout" component={Logout}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;