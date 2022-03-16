import { ACTUALIZAR_FOTO, ACTUALIZAR_INFORMACION, CARGAR_INFO_DB, VALIDARYCREARUSUARIO } from "../Actions/Usuario.action";

import React from "react";
import Usuario from "../../Models/Usuario";

const initialState = {
    miUsuario: null
}

const UsuarioReducer = (state = initialState, action) => {

    switch (action.type) {

        case VALIDARYCREARUSUARIO: {

            let perfilActualizado = state.miUsuario;

            // Agarro la info que tengo
            const valorActual = state.miUsuario;

            if (!valorActual) {
                perfilActualizado = new Usuario(action.emailEnviado, 'Por favor completar', 'Por favor completar', 'Por favor completar', 'Por favor completar', '0');
            }

            return {
                ...state,
                miUsuario: perfilActualizado
            }
        }

        case ACTUALIZAR_INFORMACION: {

            console.log("PASE POR ACTUALIZAR INFO")

            let nuevaInfo = new Usuario(action.emailEnviado, action.nombreEnviado, action.apellidoEnviado, action.direccionEnviada, action.celularEnviado, action.imagenEnviada);

            return {
                ...state,
                miUsuario: nuevaInfo
            }
        }

        case ACTUALIZAR_FOTO: {

            //console.warn("PASE POR ACTUALIZAR FOTO");
            //  console.warn(action.imagenEnviada);
            let info = state.miUsuario;
            let nuevaInfo = new Usuario(info.email, info.nombre, info.apellido, info.direccion, info.cel, action.imagenEnviada);

            return {
                ...state,
                miUsuario: nuevaInfo
            }
        }

        case CARGAR_INFO_DB: {

            console.log("PASE POR CARGAR INFO DB")
            console.log(action.payload)
            let nuevaInfo = new Usuario(action.payload.email, action.payload.nombre, action.payload.apellido, action.payload.direccion, action.payload.cel, action.payload.imagen);

            return {
                ...state,
                miUsuario: nuevaInfo
            }
        }

        default:
            return state;
    }
}

export default UsuarioReducer;