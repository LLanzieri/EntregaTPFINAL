import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react'

//import { styles } from '../Styles/styles_ItemLista'

const ItemFavoritos = ({ info, onSelect, eliminarFav }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => onSelect(info)}>
            <Image source={{ uri: info.imagen }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{info.identificador}</Text>
                <Text style={styles.address}>{info.nombre}</Text>
            </View>
            <View style={{ width: '30%' }}>
                <Button title="Eliminar Favorito💔" onPress={() => eliminarFav(info.email, info.nombre)} color='black' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    title: {

        fontSize: 18,
        marginBottom: 5,
        color: 'black',
        fontFamily: 'Asap-Regular'
    },
    address: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Heebo-Medium'
    }
});

export default ItemFavoritos;