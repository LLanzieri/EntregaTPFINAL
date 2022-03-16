import { Button, Image, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { cargarInfoUsuarioDesdeDB } from '../Redux/Actions/Usuario.action';
import { styles } from '../Styles/styles_Configuracion'

const ImgUser = require('../../assets/images/user.png');

const Configuracion = ({ navigation }) => {

    const dispatch = useDispatch();
    const perfil = useSelector(state => state.usuarioStore.miUsuario);
    const imagen = perfil.imagen;

    const actualizarInfoUsuario = () => {
        navigation.navigate('ActualizarConfiguracion');
    }

    // Cuando se monta el componente, voy a buscar a la bd la info del usuario y la cargo en store
    useEffect(() => {
        dispatch(cargarInfoUsuarioDesdeDB(perfil.email));
    }, []);

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.texto}>Mi foto de perfil</Text>
                </View>

                <View style={styles.imagen}>
                    {
                        imagen === '0' ?
                            <View>
                                <Image source={ImgUser} />
                            </View> :
                            (
                                <View>
                                    <Image source={{ uri: imagen }} style={styles.compImage} />
                                </View>
                            )
                    }
                </View>

                <View style={styles.infoUsuario}>
                    <Text style={styles.texto}>Email: {perfil.email}</Text>
                    <Text style={styles.texto}>Nombre: {perfil.nombre}</Text>
                    <Text style={styles.texto}>Apellido: {perfil.apellido}</Text>
                    <Text style={styles.texto}>Dirección: {perfil.direccion}</Text>
                    <Text style={styles.texto}>Celular: {perfil.cel}</Text>
                </View>

                <View style={styles.botonActualizar}>
                    <Button title='Actualizar datos ✏' color='black' onPress={() => actualizarInfoUsuario()} />
                </View>

            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default Configuracion; 