import { ERROR, INGRESO_USUARIO, REGISTRAR_USUARIO } from "../Actions/Autenticacion.action";

import React from "react";
import Toast from 'react-native-toast-message';

const initialState = {
    token: null,
    userId: null,
    userEmail: null
}

const AutenticacionReducer = (state = initialState, action) => {
    switch (action.type) {

        case ERROR: {
            Toast.show({
                type: 'error',
                text1: 'Login',
                text2: 'Usuario o contraseña incorrectos, intente nuevamente.',
                position: 'bottom',
            });

            return {
                ...state
            }
        }

        case INGRESO_USUARIO:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userEmail: action.emailEnviado
            }

        case REGISTRAR_USUARIO:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }

        default:
            return state;
    }
}

export default AutenticacionReducer;