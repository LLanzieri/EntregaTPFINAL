import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

import ItemLista from "../Components/ItemLista";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { styles } from '../Styles/styles_ListaPersonajes'
import { useSelector } from "react-redux";

const MarvelLogo = require('../../assets/images/logo2.png');


const ListaPersonajes = ({ navigation }) => {

    const personajesStore = useSelector(state => state.personajeStore.personajes);

    const handleOnSelect = (personaje) => {
        navigation.navigate('DetallePersonaje', {
            titulo: personaje.nombre,
            data: personaje
        });
    }

    const renderItem = ({ item }) => (
        <ItemLista
            obj={item}
            onSelect={handleOnSelect}
        />
    )

    return (

        < SafeAreaView style={styles.mainContainer} >
            <View style={styles.containerImagen}>
                <Image source={MarvelLogo} style={styles.imagen} />
            </View>

            {
                personajesStore ? (<FlatList
                    style={styles.lista}
                    data={personajesStore}
                    keyExtractor={(item) => item.id}
                    renderItem=
                    {renderItem}
                />) : <ActivityIndicator size={"large"} />

            }

        </SafeAreaView >
    )
}

export default ListaPersonajes;