import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import { styles } from '../Styles/styles_HistoriasPersonaje'

const comic = require('../../assets/images/marvel_comic.png')

const HistoriasPersonaje = ({ route, navigation }) => {

    const [infoHistoriasPersonaje, setInfoHistoriasPersonaje] = useState('');

    const { data } = route.params;

    console.log(data)

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const endPoint_historias = `${data.urihistorias}?ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;

    useEffect(() => {
        buscarHistorias();
    }, []);

    const buscarHistorias = () => {
        fetch(endPoint_historias)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setInfoHistoriasPersonaje(respuesta.data.results);
                },
            )
    }

    const Item = ({ obj }) => {

        console.log(obj)
        return (
            <View style={styles.containerItem}>
                <View style={styles.containerTexto}>
                    <Text style={styles.id}>{obj.id}</Text>
                    <Text style={styles.titulo}>{obj.title}</Text>
                    {
                        obj.description ? <Text style={styles.titulo}>{obj.description}</Text> : <Text style={styles.titulo}>Description not available.</Text>
                    }

                </View>

                <View style={styles.containerMiniatura}>
                    <Image source={comic} style={styles.miniatura} />
                </View>


            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerGeneral}>

                <View style={styles.containerLista}>
                    {
                        infoHistoriasPersonaje ?

                            <FlatList style={styles.lista}
                                data={infoHistoriasPersonaje}
                                keyExtractor={(item) => item.id}
                                renderItem=
                                {
                                    ({ item }) => (
                                        <Item obj={item} />
                                    )
                                }
                                ListEmptyComponent=
                                {
                                    <Text style={styles.listaVacia}>No se registran historias en la base de datos de la API.</Text>
                                }
                            /> : <ActivityIndicator size={"large"} />
                    }
                </View>

                <View style={styles.containerBotones}>

                    <View style={styles.boton}>
                        <Button title="VOLVER AL INICIO 🏠" onPress={() => navigation.popToTop()} color='black' />
                    </View>

                </View>

            </View >
        </SafeAreaView>
    )
}

export default HistoriasPersonaje;