import { buscarEnMisPersonajes, buscarTodosMisPersonajes, eliminarUnPersonajeCreado, insertarNuevoPersonaje } from "../../Db/Database";

import Toast from 'react-native-toast-message';

export const CARGAR_MIS_PERSONAJES_DESDE_DB = 'CARGAR_MIS_PERSONAJES_DESDE_DB';

export const guardarMiPersonaje = (email, imagen, nombre, descripcion, superpoder1, superpoder2, superpoder3, latitude, longitude) => {

    return async dispatch => {

        try {
            console.log("ESTOY EN CARGAR MI NUEVO PERSONAJE");

            const res = await buscarEnMisPersonajes(email, nombre);
            console.log(res.length)
            if (res.length === 0) {

                console.log("ESTOY EN INSERTARNUEVOPERSONAJE")
                const resultado = await insertarNuevoPersonaje(email, imagen, nombre, descripcion, superpoder1, superpoder2, superpoder3, latitude, longitude);
                console.log(resultado);

                const misPersonajes = await buscarTodosMisPersonajes(email);

                dispatch({
                    type: CARGAR_MIS_PERSONAJES_DESDE_DB,
                    infoPersonajes: misPersonajes
                })

                Toast.show({
                    type: 'exito',
                    text1: 'Mis personajes',
                    text2: 'Su personaje ha sido creado exitosamente 😄',
                    position: 'bottom',
                });
            }
            else {
                Toast.show({
                    type: 'aviso',
                    text1: 'Mis personajes',
                    text2: 'Ya existe un personaje con ese nombre ⛔',
                    position: 'bottom',
                });
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const buscarMisPersonajes = (email) => {

    return async dispatch => {

        try {
            console.log("BUSCO MIS PERSONAJES CREADOS");

            const misPersonajes = await buscarTodosMisPersonajes(email);

            dispatch({
                type: CARGAR_MIS_PERSONAJES_DESDE_DB,
                infoPersonajes: misPersonajes
            })

        } catch (error) {
            console.log(error)
        }

    }
}

export const eliminarUnPersonajePropio = (email, nombre) => {

    return async dispatch => {

        try {
            console.log("ESTOY EN ELIMINARUNPERSONAJEPROPIO");

            const res = await eliminarUnPersonajeCreado(email, nombre);

            const misPersonajes = await buscarTodosMisPersonajes(email);

            dispatch({
                type: CARGAR_MIS_PERSONAJES_DESDE_DB,
                infoPersonajes: misPersonajes
            });

            Toast.show({
                type: 'error',
                text1: 'Mis personajes',
                text2: 'El personaje se eliminó de su biblioteca 💔',
                position: 'bottom',
            });

        } catch (error) {
            console.log(error)
        }

    }
}