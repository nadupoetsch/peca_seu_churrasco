import React from 'react';
import {AuthenticationProvider} from '../context/Authentication';
import Navigator from './Navigator';
import { PedidoProvider } from '../context/Pedido';

export default function Providers() {
  return (
    <AuthenticationProvider>
      <PedidoProvider>
        <Navigator />
      </PedidoProvider>
    </AuthenticationProvider>
  );
}