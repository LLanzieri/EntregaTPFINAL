import { Button, Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { agregarFavorito } from '../Redux/Actions/Favorito.action';
import { styles } from '../Styles/styles_DetallePersonaje'

const DetallePersonaje = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const email = useSelector(state => state.autenticacionStore.userEmail);
    const [infoPersonaje, setInfoPersonaje] = useState('');

    const { data } = route.params;

    const api_key = 'd072d67a3dbef9bae47843e04a354895';
    const endPoint_personaje = `${data.uripersonaje}?ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;

    const buscarPersonaje = () => {
        fetch(endPoint_personaje)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {

                    setInfoPersonaje(respuesta.data.results);
                },
            )
    }

    useEffect(() => {
        buscarPersonaje();
    }, [])

    const handlerVerComics = () => {
        navigation.navigate('ComicsPersonaje',
            {
                data: data
            }
        )
    }

    const handlerVerSeries = () => {
        navigation.navigate('SeriesPersonaje',
            {
                data: data
            }
        )
    }

    const handlerVerHistorias = () => {
        navigation.navigate('HistoriasPersonaje',
            {
                data: data
            }
        )
    }

    const handleAgregarFavoritos = (email, nombre) => {
        dispatch(agregarFavorito(email, nombre));
    }

    const handlerAbrirURL = () => {
        Linking.openURL(data.url);
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.infoContainer}>
                    <View style={styles.containerImagen}>
                        <Image source={{ uri: data.imagen }} style={styles.imagen} />
                    </View>

                    <View style={styles.containerDescrip}>

                        <Text style={styles.titulo}>{data.nombre}</Text>

                        {
                            data.descripcion != '' ? <Text style={styles.texto}>{data.descripcion}</Text> : <Text style={styles.texto}>No se registra información en la base de datos de la API.</Text>
                        }
                        {
                            infoPersonaje ? <Text style={styles.texto}>▪ COMICS: {infoPersonaje[0].comics.available}</Text> :
                                (<Text style={styles.texto}> Cargando ...</Text>)
                        }
                        {
                            infoPersonaje ? <Text style={styles.texto}>▪ SERIES: {infoPersonaje[0].series.available}</Text> :
                                (<Text style={styles.texto}> Cargando ...</Text>)
                        }
                        {
                            infoPersonaje ? <Text style={styles.texto}>▪ HISTORIAS: {infoPersonaje[0].stories.available}</Text> :
                                (<Text style={styles.texto}> Cargando ...</Text>)
                        }
                    </View>

                    <View style={styles.containerBotones}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.boton}>
                                <Button title="Ver Comics 📖" color={'black'} onPress={() => handlerVerComics()} />
                            </View>

                            <View style={styles.boton}>
                                <Button title="Ver Series 👀" color={'black'} onPress={() => handlerVerSeries()} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.boton}>
                                <Button title="Ver Historias 🎯" color={'black'} onPress={() => handlerVerHistorias()} />
                            </View>

                            <View style={styles.boton}>
                                <Button title="AGREGAR FAVORITO⭐" color={'black'} onPress={() => handleAgregarFavoritos(email, data.nombre)} />
                            </View>
                        </View>

                        <View style={styles.boton}>
                            <Button title="Conocer más 💭" color={'black'} onPress={() => handlerAbrirURL(data)} />
                        </View>

                    </View>
                </View>

            </SafeAreaView >
        </ScrollView>

    )
}


export default DetallePersonaje;