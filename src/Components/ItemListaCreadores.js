import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';

import React from 'react'
import { styles } from '../Styles/styles_ItemListaCreadores'

const ItemListaCreadores = ({ obj }) => {

    const handlerAbrirURL = (url) => {
        Linking.openURL(url);
    }

    return (
        <TouchableOpacity onPress={() => handlerAbrirURL(obj.urls[0].url)}>
            <View style={styles.containerTitulo}>
                <Text style={styles.nombre}>{obj.fullName}</Text>
            </View>
            <View style={styles.containerImagen}>
                <Image source={{ uri: obj.thumbnail.path + "." + obj.thumbnail.extension }} style={styles.imagen} />
            </View>
        </TouchableOpacity>
    )
}

export default ItemListaCreadores;