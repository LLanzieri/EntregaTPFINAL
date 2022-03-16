import { StyleSheet, Text, View } from 'react-native'

import AppNavigation from './src/StackNavigation/AppNavigation';
import { Provider } from 'react-redux';
import React from 'react';
import Store from './src/Redux/Store/store';
import Toast from 'react-native-toast-message';
import { init } from './src/Db/Database';

// Inicializo la base de datos
init().then(() => {
  console.log('DB inicializada correctamente');
}).catch(err => {
  console.log('DB no pudo ser inicializada', err);
});

const App = () => {

  const toastConfig = {

    exito: ({ text1, text2 }) => (
      <View style={[styles.mainContainer, { borderColor: '#5cd65c' }]} >
        <Text style={styles.titulo}>{text1}</Text>
        <Text style={styles.mensaje}>{text2}</Text>
      </View>
    ),

    aviso: ({ text1, text2 }) => (
      <View style={[styles.mainContainer, { borderColor: '#ffcc00' }]} >
        <Text style={styles.titulo}>{text1}</Text>
        <Text style={styles.mensaje}>{text2}</Text>
      </View>
    ),

    error: ({ text1, text2 }) => (
      <View style={[styles.mainContainer, { borderColor: '#ff6666' }]} >
        <Text style={styles.titulo}>{text1}</Text>
        <Text style={styles.mensaje}>{text2}</Text>
      </View >
    )

  };

  // Es necesario encapsular toda la aplicación con el Provider -> "Proveedor de datos" y pasarle la store para que sepa de donde buscar la información

  return (

    <Provider store={Store}>
      <AppNavigation />
      <Toast config={toastConfig} />
    </Provider>

  );
};

export default App;

export const styles = StyleSheet.create({
  mainContainer:
  {
    height: 60,
    width: '90%',
    backgroundColor: '#f7f7f7',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderWidth: 1.5,
    padding: 10
  },
  titulo:
  {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  },
  mensaje:
  {
    fontSize: 12,
    color: 'black'
  }
});



