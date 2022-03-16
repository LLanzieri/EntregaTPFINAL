import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

import ItemLista from "../Components/ItemLista";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { styles } from '../Styles/styles_ListaPersonajes'
import { useSelector } from "react-redux";

const MarvelLogo = require('../../assets/images/logo2.png');

const ListaComics = ({ navigation }) => {

    const comicsStore = useSelector(state => state.comicStore.comics);

    const handleOnSelect = (comic) => {
        navigation.navigate('DetalleComic', {
            titulo: comic.nombre,
            data: comic
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
                comicsStore ? (<FlatList
                    style={styles.lista}
                    data={comicsStore}
                    keyExtractor={(item) => item.id}
                    renderItem=
                    {renderItem}
                />) : <ActivityIndicator size={"large"} />

            }

        </SafeAreaView >
    )
}

export default ListaComics;