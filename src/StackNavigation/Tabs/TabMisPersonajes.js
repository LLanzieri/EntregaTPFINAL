import CrearMiPersonaje from '../../Pantallas/CrearMiPersonaje';
import DetallePersonajePropio from '../../Pantallas/DetallePersonajePropio';
import Mapa from '../../Pantallas/Mapa';
import MisPersonajes from '../../Pantallas/MisPersonajes';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabMisPersonajes = () => {
    return (
        <Stack.Navigator initialRouteName='Personajes'>
            <Stack.Screen name="Personajes" component={MisPersonajes}
                options={{
                    //headerShown: false,
                    title: 'Mis Personajes',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="Crear Personaje" component={CrearMiPersonaje}
                options={{
                    //headerShown: false,
                    title: 'Crear Personaje',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="Detalle Personaje" component={DetallePersonajePropio}
                options={({ route }) => ({

                    //headerShown: false
                    title: route.params.titulo,
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                })} />
            <Stack.Screen name="Map" component={Mapa}
                options={{
                    //headerShown: false,
                    title: 'Elegir del mapa',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />

        </Stack.Navigator>
    )
}

export default TabMisPersonajes; 