import { URL_AUTH_INGRESOUSUARIO, URL_AUTH_REGISTRO } from "../../Utils/Data/DatabaseFirebase";

export const INGRESO_USUARIO = 'INGRESO_USUARIO';
export const REGISTRAR_USUARIO = 'REGISTRAR_USUARIO';
export const ERROR = 'ERROR';

export const ingresoUsuario = (email, password) => {

    let error;

    return async dispatch => {

        const response = await fetch(URL_AUTH_INGRESOUSUARIO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await response.json()

        if (data.error)
            dispatch({
                type: ERROR,
            });
        else
            dispatch({
                type: INGRESO_USUARIO,
                token: data.idToken,
                userId: data.localId,
                emailEnviado: data.email
            });
    }

}

export const registrarUsuario = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_REGISTRO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        const data = await response.json();

        //console.warn(data);

        dispatch({
            type: INGRESO_USUARIO,
            token: data.idToken,
            userId: data.localId,
            emailEnviado: data.email
        });
    }
}