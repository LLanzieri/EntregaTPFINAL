import { Button, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import { ingresoUsuario, registrarUsuario } from '../Redux/Actions/Autenticacion.action'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/styles_Autenticacion';
import { useDispatch } from 'react-redux';

const logo = require('../../assets/images/prueba1.png');

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

// ------------------------------------------------------ //

// Declaro el Reducer que después se le pasa en useReducer
export const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }

        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }

        // Si llego hasta acá, el formulario es válido
        let formIsValid = true;

        // Recorrer las validaciones de los campos para saber si todas las key son válidas
        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }

        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }

    return state;
}

// ------------------------------------------------------ //

const Autenticacion = ({ }) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = () => {
        if (isLogin)
            dispatch(ingresoUsuario(email, pass));
        else
            dispatch(registrarUsuario(email, pass));
    }

    return (

        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView style={styles.mainContainer}>
                <View View style={styles.authContainer} >
                    <View style={styles.containerLogo}>
                        <Image source={logo} style={styles.logo} />
                    </View>

                    <Text style={styles.titulo}>
                        {isLogin ? 'Login' : 'Registro'}
                    </Text>

                    <View style={styles.inputsContainer}>
                        <Text style={styles.texto}>
                            EMAIL
                        </Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#800000"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            style={styles.placeholderTexto}

                        />
                        <Text style={styles.texto}>
                            CONTRASEÑA
                        </Text>
                        <View >
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor="#800000"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(text) => setPass(text)}
                                value={pass}
                                style={styles.placeholderTexto}
                            />
                        </View>

                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.registroLoginText}>{isLogin ? '¿No tenés una cuenta? Hace click Aquí' : '¿Ya tenés una cuenta? Ingresa tu usuario'}</Text>
                        </TouchableOpacity>
                        <View style={{ margin: 10 }}>
                            <Button title={isLogin ? 'INGRESAR' : 'REGISTRARSE'} onPress={() => handleAuth()} color='#800000' />
                        </View>

                    </View>
                </View >
            </SafeAreaView>
        </KeyboardAwareScrollView>


    )
}

export default Autenticacion;