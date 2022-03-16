import { actualizarUsuario, buscarUsuario, insertarUsuario } from '../../Db/Database';

import RNFS from 'react-native-fs';
import Toast from 'react-native-toast-message';

export const VALIDARYCREARUSUARIO = 'VALIDARYCREARUSUARIO';
export const ACTUALIZAR_INFORMACION = 'ACTUALIZAR_INFORMACION';
export const ACTUALIZAR_FOTO = 'ACTUALIZAR_FOTO';
export const CARGAR_INFO_DB = 'CARGAR_INFO_DB'

export const validarYCrearUsuario = (email) => {

    return async dispatch => {
        try {

            // Consulto en la base si existe el usuario que se loguea
            const result = await buscarUsuario(email);
            let res = null;

            // Si no se devuelven registros, lo inserto
            if (result.length === 0) {

                res = await insertarUsuario(email);

                dispatch({
                    type: VALIDARYCREARUSUARIO,
                    emailEnviado: email
                });

            } else {
                console.log("EL USUARIO YA EXISTE");
                const res = await buscarUsuario(email);

                dispatch({
                    type: CARGAR_INFO_DB,
                    payload: res[0]
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}


export const actualizarInformacion = (email, nombre, apellido, direccion, cel, imagen) => {

    return async dispatch => {

        try {

            // Actualizo en la base de datos
            const result = await actualizarUsuario(email, nombre, apellido, direccion, cel, imagen);

            // Mando a actualizar en la store
            dispatch({
                type: ACTUALIZAR_INFORMACION,
                emailEnviado: email,
                nombreEnviado: nombre,
                apellidoEnviado: apellido,
                direccionEnviada: direccion,
                celularEnviado: cel,
                imagenEnviada: imagen
            });

            Toast.show({
                type: 'exito',
                text1: 'Actualizar información',
                text2: 'Su información se actualizó correctamente 😄',
                position: 'bottom',
            });

        } catch (e) {

        }
    }
}

export const actualizarFoto = (perfil, imagen) => {

    return async dispatch => {
        try {

            if (imagen) {
                const fileName = imagen.split('/').pop();
                const Path = `file:///${RNFS.DocumentDirectoryPath}/${fileName}`;

                // Hago la consulta que espera que por la respuesta, por eso se hace asíncrono


                // La imágen en "image" la va a copiar en el directorio que tenga en "Path"
                await RNFS.copyFile(imagen, Path);

                // Actualizo en la base de datos
                const result = await actualizarUsuario(perfil.email, perfil.nombre, perfil.apellido, perfil.direccion, perfil.cel, imagen);

                // Mando a ejecutar la action de "Agregar Lugar"
                dispatch({
                    type: ACTUALIZAR_FOTO,
                    imagenEnviada: Path
                });
            } else
                Toast.show({
                    type: 'aviso',
                    text1: 'Cambiar Foto',
                    text2: 'Debe tomar una foto para actualizar su información ⚠',
                    position: 'bottom',
                });

        } catch (e) {
            //console.log(e);
        }
    }

};

export const cargarInfoUsuarioDesdeDB = (email) => {
    return async dispatch => {

        const res = await buscarUsuario(email);

        dispatch({
            type: CARGAR_INFO_DB,
            payload: res[0]
        })
    }
}
