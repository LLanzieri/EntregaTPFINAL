import { Button } from "react-native";
import ComicsPersonaje from "../../Pantallas/ComicsPersonaje";
import DetalleComic from "../../Pantallas/DetalleComic";
import DetalleCreadores from "../../Pantallas/DetalleCreadores";
import DetallePersonaje from "../../Pantallas/DetallePersonaje";
import HistoriasPersonaje from "../../Pantallas/HistoriasPersonaje";
import Home from "../../Pantallas/Home";
import ListaComics from "../../Pantallas/ListaComics";
import ListaPersonajes from "../../Pantallas/ListaPersonajes";
import React from "react";
import SeriesPersonaje from "../../Pantallas/SeriesPersonaje";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabHome = () => {
    return (
        <Stack.Navigator initialRouteName='Principal'>
            <Stack.Screen name="Principal" component={Home}
                options={{
                    //headerShown: false
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="ListaPersonajes" component={ListaPersonajes}
                options={{
                    //headerShown: false,
                    title: 'Lista de personajes',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="DetallePersonaje" component={DetallePersonaje}
                options={({ route }) => ({

                    //headerShown: false
                    title: route.params.titulo,
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                })} />
            <Stack.Screen name="ComicsPersonaje" component={ComicsPersonaje}
                options={{
                    //headerShown: false
                    title: 'Comics',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="SeriesPersonaje" component={SeriesPersonaje}
                options={{
                    //headerShown: false
                    title: 'Series',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="HistoriasPersonaje" component={HistoriasPersonaje}
                options={{
                    //headerShown: false
                    title: 'Historias',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="ListaComics" component={ListaComics}
                options={{
                    //headerShown: false
                    title: 'Lista de comics',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />
            <Stack.Screen name="DetalleComic" component={DetalleComic}
                options={({ route }) => ({
                    //headerShown: false
                    title: route.params.titulo,
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                })} />
            <Stack.Screen name="DetalleCreadores" component={DetalleCreadores}
                options={{
                    //headerShown: false
                    title: 'Creadores',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />

        </Stack.Navigator>
    )
}

export default TabHome; 