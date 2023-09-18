import React, {createContext,  useState} from 'react';

export const PedidoContext = createContext({});

export const PedidoProvider = ({children}) => {
    const initialState = {
        paoDeAlho: 0,
        linguicaFina: 0,
        linguicaGrossa: 0,
        queijo: 0,
        frango: 0,
        porco: 0,
        costelaDeOvelha: 0,
        paletaDeOvelha: 0,
        picanha: 0,
        fileMignon: 0,
        maminha: 0,
        entrecot: 0,
        costela: 0,
        vazio: 0,
        alcatra: 0,
        capaDeFile: 0,
      };
      const [pedido, setPedido] = useState(initialState);
      const [acougue, setAcougue] = useState(0);
      const [churrasqueiro, setChurrasqueiro] = useState(false);
      const [total, setTotal] = useState(0);

  return (
    <PedidoContext.Provider value={{pedido, setPedido, acougue, setAcougue, churrasqueiro, setChurrasqueiro, total, setTotal}}>
      {children}
    </PedidoContext.Provider>
  );
};