import { Button, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageSelector from '../Components/ImageSelector'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LocationSelector from "../Components/LocationSelector";
import { StyleSheet } from "react-native";
import Toast from 'react-native-toast-message';
import { guardarMiPersonaje } from '../Redux/Actions/MiPersonaje.action';

const CrearMiPersonaje = ({ navigation }) => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.autenticacionStore.userEmail);

    const [imagen, setImagen] = useState();
    const [nombre, setNombre] = useState();
    const [descripcion, setDescripcion] = useState();
    const [superpoder1, setSuperpoder1] = useState();
    const [superpoder2, setSuperpoder2] = useState();
    const [superpoder3, setSuperpoder3] = useState();
    const [location, setLocation] = useState(null);

    const handleOnImage = (uri) => {
        setImagen(uri);
    }
    const handleOnLocation = (position) => {
        setLocation(position);
    }

    const handleOnMapLocation = () => {
        navigation.navigate('Map', {
            location: location,
        });
    }

    const handlerGuardarMiPersonaje = () => {

        if (imagen && nombre && descripcion && superpoder1 && superpoder2 && superpoder3 && location)
            dispatch(guardarMiPersonaje(email, imagen, nombre, descripcion, superpoder1, superpoder2, superpoder3, location.latitude, location.longitude));
        else
            Toast.show({
                type: 'aviso',
                text1: 'Mis Personajes',
                text2: 'Por favor complete todos los datos de su personaje ⚠',
                position: 'bottom',
            });
    }

    return (

        <KeyboardAwareScrollView style={styles.mainContainer}>

            <View >
                <ImageSelector onImage={handleOnImage} />
            </View>
            <View style={styles.infoPersonaje} >

                <View style={styles.containerInputs} >
                    <Text style={styles.texto} >Nombre:</Text>
                    <TextInput
                        placeholder="Ingrese el nombre de su personaje"
                        onChangeText={(text) => setNombre(text)}
                        style={styles.input}
                        placeholderTextColor='#800000'
                    /*  value={nombre} */
                    />
                </View>
                <View style={styles.containerInputs}>
                    <Text style={styles.texto} >Descripción:</Text>
                    <TextInput
                        placeholder="Ingrese una descripción de su personaje"
                        onChangeText={(text) => setDescripcion(text)}
                        style={styles.input}
                        placeholderTextColor='#800000'
                    /*  value={nombre} */
                    />
                </View>
                <View style={styles.containerInputs}>
                    <Text style={styles.texto}>Superpoder 1:</Text>
                    <TextInput
                        placeholder="Ingrese el Superpoder de su personaje"
                        onChangeText={(text) => setSuperpoder1(text)}
                        style={styles.input}
                        placeholderTextColor='#800000'
                    /*  value={nombre} */
                    />
                </View>
                <View style={styles.containerInputs}>
                    <Text style={styles.texto} >Superpoder 2:</Text>
                    <TextInput
                        placeholder="Ingrese el Superpoder de su personaje"
                        onChangeText={(text) => setSuperpoder2(text)}
                        style={styles.input}
                        placeholderTextColor='#800000'
                    /*  value={nombre} */
                    />
                </View>
                <View style={styles.containerInputs}>
                    <Text style={styles.texto} >Superpoder 3:</Text>
                    <TextInput
                        placeholder="Ingrese el Superpoder de su personaje"
                        onChangeText={(text) => setSuperpoder3(text)}
                        style={styles.input}
                        placeholderTextColor='#800000'
                    /*  value={nombre} */
                    />
                </View>

                <View style={styles.containerLocation}>
                    <Text style={styles.texto} >Lugar de nacimiento:</Text>

                    <LocationSelector onLocation={handleOnLocation} onMapLocation={handleOnMapLocation} />
                </View>

                <View style={styles.containerBoton}>
                    <Button title='Guardar Nuevo Personaje ✔' onPress={() => handlerGuardarMiPersonaje()} color='black' />
                </View>

            </View>

        </KeyboardAwareScrollView>
    )
}


export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white'
    },
    infoPersonaje: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    containerInputs: {
        margin: 5
    },
    texto:
    {
        margin: 10,
        fontSize: 20,
        color: 'black'
    },
    input: {
        fontSize: 15,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontFamily: 'Asap-Italic'
    },
    containerLocation:
    {
        margin: 20
    },
    containerBoton: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


export default CrearMiPersonaje;