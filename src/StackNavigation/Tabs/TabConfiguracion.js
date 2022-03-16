import ActualizarConfiguracion from '../../Pantallas/ActualizarConfiguracion';
import CambiarFoto from '../../Pantallas/CambiarFoto';
import Configuracion from '../../Pantallas/Configuracion';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabConfiguracion = () => {
    return (
        <Stack.Navigator initialRouteName='PantallaConfiguracion'>
            <Stack.Screen name="PantallaConfiguracion" component={Configuracion}
                options={{
                    //headerShown: false,
                    title: 'Mi Usuario',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="ActualizarConfiguracion" component={ActualizarConfiguracion}
                options={{
                    //headerShown: false
                    title: 'Actualizar información',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="CambiarFoto" component={CambiarFoto}
                options={{
                    //headerShown: false
                    title: 'Cambiar Foto',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
        </Stack.Navigator>
    )
}

export default TabConfiguracion; 