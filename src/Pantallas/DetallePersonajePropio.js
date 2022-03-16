import { Button, Image, Linking, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import MapPreview from '../Components/MapPreview';
import { styles } from '../Styles/styles_DetallePersonajePropio'

//import { agregarFavorito } from '../Redux/Actions/Favorito.action';

const DetallePersonajePropio = ({ route, navigation }) => {

    const { data } = route.params;
    console.log(data)
    const location = { latitude: data.latitude, longitude: data.longitude }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.infoContainer}>
                    <View style={styles.containerImagen}>
                        <Image source={{ uri: data.imagen }} style={styles.imagen} />
                    </View>

                    <View style={styles.containerDescrip}>

                        <Text style={styles.nombre}>NOMBRE: {data.nombre}</Text>

                        <Text style={styles.texto}>DESCRIPCIÓN: {data.descripcion}</Text>

                        <Text style={styles.texto}>SUPERPODER 1: {data.superpoder1}</Text>
                        <Text style={styles.texto}>SUPERPODER 2: {data.superpoder2}</Text>
                        <Text style={styles.texto}>SUPERPODER 3: {data.superpoder3}</Text>
                        <Text style={styles.texto}>LUGAR DE ORIGEN: </Text>
                        <MapPreview
                            location={location}
                            style={styles.preview}
                        >
                            <Text>No hay una ubicación seleccionada</Text>
                        </MapPreview>
                    </View>

                    <View style={styles.containerBotones}>

                        <View style={styles.boton}>
                            <Button title="VOLVER AL INICIO 🏠" onPress={() => navigation.popToTop()} color='black' />
                        </View>

                    </View>
                </View>

            </View >
        </ScrollView >

    )
}


export default DetallePersonajePropio;