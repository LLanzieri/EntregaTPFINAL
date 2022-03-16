import { Button, Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { actualizarInformacion } from '../Redux/Actions/Usuario.action';
import { styles } from '../Styles/styles_Configuracion'

const ImgUser = require('../../assets/images/user.png');

const ActualizarConfiguracion = ({ navigation }) => {

    const perfil = useSelector(state => state.usuarioStore.miUsuario);
    const imagen = perfil.imagen;

    const [nombre, setNombre] = useState(perfil.nombre);
    const [apellido, setApellido] = useState(perfil.apellido);
    const [direccion, setDireccion] = useState(perfil.direccion);
    const [celular, setCelular] = useState(perfil.cel);

    const dispatch = useDispatch();

    const actualizarDatosUsuario = () => {
        dispatch(actualizarInformacion(perfil.email, nombre, apellido, direccion, celular, perfil.imagen));
    }

    const actualizarFotoUsuario = () => {
        navigation.navigate('CambiarFoto');
    }

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView SafeAreaView style={styles.mainContainer} >

                <View style={styles.imagen}>
                    {

                        imagen === '0' ?
                            <Image source={ImgUser} /> :
                            (
                                <View>
                                    <Image source={{ uri: imagen }} style={styles.compImage} />
                                </View>
                            )
                    }

                </View>

                <View style={styles.botonActualizar}>
                    <Button title='Cargar Foto 📷' color='black' onPress={() => actualizarFotoUsuario()} />
                </View>

                <View style={styles.infoUsuario}>
                    <Text style={styles.texto}>Email: {perfil.email}</Text>

                    <View style={styles.containerInputs}>
                        <Text style={styles.texto}>Nombre:</Text>
                        <TextInput
                            placeholder={perfil.nombre}
                            onChangeText={(text) => setNombre(text)}
                            style={styles.input}
                            placeholderTextColor='#800000'
                        /*  value={nombre} */
                        />
                    </View>

                    <View style={styles.containerInputs}>
                        <Text style={styles.texto}>Apellido:</Text>
                        <TextInput
                            placeholder={perfil.apellido}
                            onChangeText={(text) => setApellido(text)}
                            style={styles.input}
                            placeholderTextColor='#800000'
                        /* value={apellido} */
                        />
                    </View>

                    <View style={styles.containerInputs}>
                        <Text style={styles.texto}>Dirección:</Text>
                        <TextInput
                            placeholder={perfil.direccion}
                            onChangeText={(text) => setDireccion(text)}
                            style={styles.input}
                            placeholderTextColor='#800000'
                        /* value={direccion}  */
                        />
                    </View>

                    <View style={styles.containerInputs}>
                        <Text style={styles.texto}>Celular:</Text>
                        <TextInput
                            placeholder={perfil.cel}
                            onChangeText={(text) => setCelular(text)}
                            style={styles.input}
                            placeholderTextColor='#800000'
                        /* value={celular}  */
                        />
                    </View>
                </View>
                <View style={styles.botonActualizar}>
                    <Button title='Actualizar información ✏' color='black' onPress={() => actualizarDatosUsuario()} />
                </View>
            </SafeAreaView >
        </KeyboardAwareScrollView >
    )
}

export default ActualizarConfiguracion; 