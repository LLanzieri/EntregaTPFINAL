import { Button, FlatList, Text, View } from 'react-native'
import React, { useEffect } from "react";
import { buscarMisPersonajes, eliminarUnPersonajePropio } from '../Redux/Actions/MiPersonaje.action';
import { useDispatch, useSelector } from "react-redux";

import ItemListaMiPersonaje from '../Components/ItemListaMiPersonaje';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const MisPersonajes = ({ navigation }) => {
    const dispatch = useDispatch();
    const misPersonajes = useSelector(state => state.miPersonajeStore.misPersonajes);
    const email = useSelector(state => state.autenticacionStore.userEmail);

    useEffect(() => {
        dispatch(buscarMisPersonajes(email))
    }, []);

    const handlerCrearMiPersonaje = () => {
        navigation.navigate('Crear Personaje');
    }

    const renderItem = ({ item }) => (
        <ItemListaMiPersonaje obj={item} onSelect={handlerOnSelect} onDelete={eliminarPersonaje} />
    )

    const eliminarPersonaje = (nombre) => {
        dispatch(eliminarUnPersonajePropio(email, nombre));
    }

    const handlerOnSelect = (obj) => {
        navigation.navigate('Detalle Personaje', {
            titulo: obj.nombre,
            data: obj
        })
    }

    return (

        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                style={styles.lista}
                data={misPersonajes}
                keyExtractor={(item) => item.imagen}
                renderItem=
                {renderItem}
                ListEmptyComponent={
                    <Text style={styles.listaVacia}>No posee personajes creados en su biblioteca.</Text>
                }
            />
            <View style={styles.containerBoton}>
                <Button title='Crear mi personaje 🎯' onPress={() => handlerCrearMiPersonaje()} color='black' />
            </View>
        </SafeAreaView >
    )
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    lista:
    {
        flex: 1,
        borderColor: '#800000',
        borderWidth: 2,
        margin: 5
    },
    listaVacia: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Asap-Regular',
        margin: 10
    },
    containerBoton:
    {
        flex: 0.2,
        /* borderColor: 'blue',
        borderWidth: 2, */
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default MisPersonajes;