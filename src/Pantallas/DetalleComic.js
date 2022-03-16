import { Button, FlatList, Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import ItemListaComic from '../Components/ItemListaComic';
import { styles } from '../Styles/styles_DetalleComic'

const DetalleComic = ({ route, navigation }) => {

    const [infoComic, setInfoComic] = useState('');

    const { data } = route.params;

    console.log(data);

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const hash = '39572ddc34f5925b5c46465016f900af';
    const endPoint_comic = `${data.uricomic}?ts=1&apikey=${api_key}&hash=${hash}`;

    const buscarComic = () => {
        fetch(endPoint_comic)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {

                    setInfoComic(respuesta.data.results);
                },
            )
    }

    useEffect(() => {
        buscarComic();
    }, [])

    const renderItemComic = ({ item }) =>
    (
        < ItemListaComic
            obj={item}
        />
    )

    const handlerInfoCreadores = (info) => {
        navigation.navigate('DetalleCreadores',
            {
                data: info
            });
    }


    const handlerAbrirURL = () => {
        Linking.openURL(data.url);
    }

    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.infoContainer}>

                <View style={styles.titulo}>
                    <Text style={styles.titulito}>Imágenes</Text>
                </View>

                {
                    infoComic ? <FlatList
                        style={styles.lista}
                        data={infoComic[0].images}
                        keyExtractor={(item) => item.path}
                        numColumns={2}
                        renderItem=
                        {
                            renderItemComic
                        }
                        ListEmptyComponent={
                            <Text style={styles.listaVacia}>No se encuentran imágenes disponibles.</Text>
                        }
                    /> : null
                }

                <View style={styles.containerBotones}>

                    <View style={styles.boton}>
                        <Button title="Creadores del comic 🧠" color={'black'} onPress={() => handlerInfoCreadores(data)} />
                    </View>

                    <View style={styles.boton}>
                        <Button title="Conocer más 💭" color={'black'} onPress={() => handlerAbrirURL(data)} />
                    </View>

                </View>
            </View>

        </SafeAreaView >

    )
}


export default DetalleComic;