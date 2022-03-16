import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import { styles } from '../Styles/styles_ComicsPersonaje'

const ComicsPersonaje = ({ route, navigation }) => {

    const [infoComicsPersonaje, setInfoComicsPersonaje] = useState('');

    const { data } = route.params;

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const endPoint_comics = `${data.uricomics}?ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;

    useEffect(() => {
        buscarComics();
    }, []);

    const buscarComics = () => {
        fetch(endPoint_comics)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setInfoComicsPersonaje(respuesta.data.results);
                },
            )
    }

    const Item = ({ obj }) => {

        const img = obj.thumbnail.path;
        const ext = obj.thumbnail.extension;
        const miniatura = img + '.' + ext;

        return (

            <SafeAreaView style={styles.containerItem}>
                <View style={styles.containterMiniatura}>
                    <Image source={{ uri: miniatura }} style={styles.miniatura} />
                </View>
                <View style={styles.containerTexto} >
                    <Text style={styles.titulo}>{obj.title}</Text>

                    {
                        obj.description ? <Text style={styles.texto}>{obj.description}</Text> : <Text style={styles.texto}>No se registra información en la base de datos de la API.</Text>
                    }

                </View>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.containerInfo}>

                <View style={styles.containerLista}>
                    {
                        infoComicsPersonaje ?

                            <FlatList style={styles.lista}
                                data={infoComicsPersonaje}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                renderItem=
                                {
                                    ({ item }) => (
                                        <Item obj={item} />
                                    )
                                }
                                ListEmptyComponent=
                                {
                                    <Text style={styles.listaVacia}>No se registran comics en la base de datos de la API.</Text>
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
        </View>
    )
}

export default ComicsPersonaje;