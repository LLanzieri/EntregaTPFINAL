import { Button, Image, Linking, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SafeAreaView } from "react-native-safe-area-context";
import { cargarTablaComics } from '../Redux/Actions/Comic.action';
import { cargarTablaPersonajes } from "../Redux/Actions/Personaje.action";
import { styles } from "../Styles/styles_Home";
import { validarYCrearUsuario } from "../Redux/Actions/Usuario.action";

const MarvelLogo = require('../../assets/images/Marvel_Logo.png');

const Home = ({ navigation }) => {

    const [listaPersonajes, setListaPersonajes] = useState(null);
    const [listaComics, setListaComics] = useState(null);

    const dispatch = useDispatch();
    const email = useSelector(state => state.autenticacionStore.userEmail);

    const api_key = 'd072d67a3dbef9bae47843e04a354895';

    const endPoint_personajes = `http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;
    const endPoint_comics = `http://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=${api_key}&hash=39572ddc34f5925b5c46465016f900af`;

    // ---------------------------------------------------

    const buscarPersonajesAPI = () => {
        fetch(endPoint_personajes)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setListaPersonajes(respuesta.data.results);
                },
            )
    }

    const buscarComicsAPI = () => {
        fetch(endPoint_comics)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setListaComics(respuesta.data.results);
                },
            )
    }

    // ---------------------------------------------------

    useEffect(() => {
        if (!listaPersonajes)
            buscarPersonajesAPI();

        if (!listaComics)
            buscarComicsAPI();

        dispatch(validarYCrearUsuario(email));

    }, []);

    // ---------------------------------------------------

    useEffect(() => {
        dispatch(cargarTablaPersonajes(listaPersonajes));
    }, [listaPersonajes]);

    useEffect(() => {
        dispatch(cargarTablaComics(listaComics));
    }, [listaComics]);

    // ---------------------------------------------------

    console.log(listaComics);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <View style={styles.containerLogo}>
                    <Image source={MarvelLogo} style={styles.logo} />
                </View>

                <View style={styles.containerOpciones}>
                    <View style={styles.containerBoton}>
                        <Button title="EXPLORAR PERSONAJES" onPress={() => { navigation.navigate('ListaPersonajes') }} color='black'
                        />
                    </View>
                    <View style={styles.containerBoton}>
                        <Button title="EXPLORAR COMICS" onPress={() => { navigation.navigate('ListaComics') }} color='black'
                        />
                    </View>
                    <View style={styles.containerBoton}>
                        <Button title="EXPLORAR SERIES Y PELICULAS" onPress={() => Linking.openURL('https://compucalitv.org/?s=marvel')} color='black'
                        />
                    </View>
                    <View style={styles.containerBoton}>
                        <Button title="Conocer más sobre la API" onPress={() => Linking.openURL('https://developer.marvel.com/')} color='black'
                        />
                    </View>


                </View>


            </View>
        </SafeAreaView>
    )
}


export default Home;