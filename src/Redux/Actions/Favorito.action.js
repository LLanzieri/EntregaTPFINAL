//import { actualizarUsuario, buscarUsuario, insertarUsuario } from '../../Db/Database';

import { buscarEnFavoritos, buscarPersonaje, buscarTodosLosFavoritos, eliminarUnFavorito, insertarFavorito } from "../../Db/Database";

import Toast from 'react-native-toast-message';

//import RNFS from 'react-native-fs';

/* export const VALIDARYCREARUSUARIO = 'VALIDARYCREARUSUARIO';*/
export const CARGAR_FAVORITOS_DB = 'CARGAR_FAVORITOS_DB'
export const AGREGAR_FAVORITO = 'AGREGAR_FAVORITO';
export const ELIMINAR_FAVORITO = 'ELIMINAR_FAVORITO'

export const agregarFavorito = (email, nombre) => {

    return async dispatch => {
        try {

            // Consulto en la base si existe el favorito que se quiere agregar
            const result = await buscarEnFavoritos(email, nombre)
            let res = null;

            // Si no se devuelven registros, lo agrego
            if (result.length === 0) {

                res = await insertarFavorito(email, nombre);
                //console.log(res)

                //const personaje = await buscarPersonaje(nombre);
                // Consulto en la base para buscar todos los favoritos y pasarlos a la store
                res = await buscarTodosLosFavoritos(email);

                console.log("ESTOY EN AGREGAR FAVORITO")
                //console.log(personaje)

                dispatch({
                    type: AGREGAR_FAVORITO,
                    //favoritoEnviado: personaje[0]
                    favoritoEnviado: res
                });

                Toast.show({
                    type: 'exito',
                    text1: 'Favoritos',
                    text2: 'El personaje se agregó a su lista de Favoritos ⭐',
                    position: 'bottom',
                });

            } else {
                //console.log("EL FAVORITO YA EXISTE");
                Toast.show({
                    type: 'aviso',
                    text1: 'Favoritos',
                    text2: 'El personaje ya se encuentra en su lista de Favoritos ⭐',
                    position: 'bottom',
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

export const cargarFavoritosDesdeDB = (email) => {

    return async dispatch => {
        try {

            // Consulto en la base si existe el favorito que se quiere agregar
            const result = await buscarTodosLosFavoritos(email)

            console.log("ESTOY EN CARGAR FAVORITO")
            console.log(result)

            dispatch({
                type: CARGAR_FAVORITOS_DB,
                favoritoEnviado: result
            });

        }
        catch (e) {
            console.log(e);
        }
    }
}

export const eliminarFavorito = (email, nombre) => {

    return async dispatch => {
        try {

            // Ejecuto el delete en la base de datos
            const result = await eliminarUnFavorito(email, nombre);

            console.log("ESTOY EN ELIMINAR FAVORITO")
            console.log(result)



            // Consulto en la base para buscar todos los favoritos y pasarlos a la store
            const res = await buscarTodosLosFavoritos(email);
            console.log(res)

            dispatch({
                type: CARGAR_FAVORITOS_DB,
                favoritoEnviado: res
            });

            Toast.show({
                type: 'error',
                text1: 'Favoritos',
                text2: 'El personaje se eliminó de su lista de Favoritos 💔',
                position: 'bottom',
            });

        }
        catch (e) {
            console.log(e);
        }
    }
}