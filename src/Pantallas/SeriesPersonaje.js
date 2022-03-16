import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import { styles } from '../Styles/styles_SeriesPersonaje'

const SeriesPersonaje = ({ route, navigation }) => {

    const [infoSeriesPersonaje, setInfoSeriesPersonaje] = useState('');

    const { data } = route.params;

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const endPoint_series = `${data.uriseries}?ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;

    useEffect(() => {
        buscarSeries();
    }, []);

    const buscarSeries = () => {
        fetch(endPoint_series)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setInfoSeriesPersonaje(respuesta.data.results);
                },
            )
    }

    const Item = ({ obj }) => {

        const img = obj.thumbnail.path;
        const ext = obj.thumbnail.extension;
        const miniatura = img + '.' + ext;

        console.log(obj)

        return (
            <View style={styles.containerItem}>
                <View style={styles.containerMiniatura}>
                    <Image source={{ uri: miniatura }} style={styles.miniatura} />
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.titulo}>{obj.title}</Text>
                    {
                        obj.description ? <Text style={styles.texto}>{obj.description}</Text> : <Text style={styles.texto}>No se registra información en la base de datos de la API.</Text>
                    }

                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.containerGeneral}>

                <View style={styles.containerLista}>
                    {
                        infoSeriesPersonaje ?

                            <FlatList style={styles.lista}
                                data={infoSeriesPersonaje}
                                keyExtractor={(item) => item.id}
                                renderItem=
                                {
                                    ({ item }) => (
                                        <Item obj={item} />
                                    )
                                }
                                ListEmptyComponent=
                                {
                                    <Text style={styles.listaVacia}>No se registran series en la base de datos de la API.</Text>
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

export default SeriesPersonaje;