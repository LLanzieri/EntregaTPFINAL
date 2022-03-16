import { Button, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import ItemListaComic from '../Components/ItemListaComic';
import ItemListaCreadores from '../Components/ItemListaCreadores';
import Toast from 'react-native-toast-message';
import { styles } from '../Styles/styles_DetalleComic'

const DetalleCreadores = ({ route, navigation }) => {

    const [infoCreadores, setInfoCreadores] = useState('');

    const { data } = route.params;

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const hash = '39572ddc34f5925b5c46465016f900af';
    const endPoint_creadores = `${data.uricreadores}?ts=1&apikey=${api_key}&hash=${hash}`;

    const buscarCreadores = () => {
        fetch(endPoint_creadores)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {

                    setInfoCreadores(respuesta.data.results);
                },
            )
    }

    useEffect(() => {
        Toast.show({
            type: 'aviso',
            text1: 'Creadores',
            text2: 'Oprima sobre un creador para conocer más 💭',
            position: 'bottom',
        });
        buscarCreadores();
    }, [])

    const renderItemCreadores = ({ item }) =>
    (
        < ItemListaCreadores
            obj={item}
        />
    )


    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.infoContainer}>

                {
                    infoCreadores ? <FlatList
                        style={styles.lista}
                        data={infoCreadores}
                        keyExtractor={(item) => item.id}
                        renderItem=
                        {
                            renderItemCreadores

                        }
                        ListEmptyComponent={
                            <Text style={styles.listaVacia}>No se registra información sobre los creadores.</Text>
                        }
                    /> : null
                }

                <View style={styles.containerBotones}>

                    <View style={styles.boton}>
                        <Button title="VOLVER AL INICIO 🏠" onPress={() => navigation.popToTop()} color='black' />
                    </View>

                </View>
            </View>

        </SafeAreaView >
    )
}


export default DetalleCreadores;