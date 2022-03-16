import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import React from 'react'

//import { styles } from '../Styles/styles_ItemListaMiPersonaje'

const ItemListaMiPersonaje = ({ obj, onSelect, onDelete }) => {
    const lat = obj.latitude;
    const long = obj.longitude;
    const coords = {
        latitude: parseFloat(lat), longitude: parseFloat(long)
    }

    return (

        <TouchableOpacity style={styles.container} onPress={() => onSelect(obj)}>
            <Image source={{ uri: obj.imagen }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{obj.nombre}</Text>
                <Text style={styles.address}>{obj.superpoder1}</Text>
                <Text style={styles.address}>{obj.superpoder2}</Text>
                <Text style={styles.address}>{obj.superpoder3}</Text>
            </View>
            <View style={{ width: '35%' }}>
                <Button title="Eliminar Personaje💔" onPress={() => onDelete(obj.nombre)} color='black' />
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
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Asap-Bold'
    },
    address: {
        color: 'black',
        fontSize: 14,
        margin: 3,
        fontFamily: 'Heebo-Regular'
    }
});

export default ItemListaMiPersonaje;

