import { Image, View } from 'react-native';

import React from 'react'
import { styles } from '../Styles/styles_ItemListaComic'

const ItemListaComic = ({ obj }) => {
    
    return (
        <View style={styles.containerImagen}>
            <Image source={{ uri: obj.path + "." + obj.extension }} style={styles.imagen} />
        </View>
    )
}

export default ItemListaComic;