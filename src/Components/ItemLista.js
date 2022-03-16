import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react'
import { styles } from '../Styles/styles_ItemLista'

const ItemLista = ({ obj, onSelect }) => {
    return (

        <TouchableOpacity onPress={() => onSelect(obj)} style={styles.mainContainer}>
            <View style={styles.containerImagen}>
                <Image source={{ uri: obj.imagen }} style={styles.imagen} />
            </View>

            <View style={styles.containerTexto}>

                <Text style={styles.nombre}>{obj.nombre}</Text>
                {
                    obj.descripcion ? <Text style={styles.descripcion}>{obj.descripcion}</Text> : <Text style={styles.descripcion}>No se registra información en la base de datos de la API.</Text>
                }
            </View>
        </TouchableOpacity>

    )
}

export default ItemLista;