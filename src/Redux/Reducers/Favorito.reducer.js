//import { CARGAR_PERSONAJES_DESDE_DB } from "../Actions/Personaje.action";

import { AGREGAR_FAVORITO, CARGAR_FAVORITOS_DB } from "../Actions/Favorito.action";

import React from "react";

const initialState = {
    favoritos: []
}

const FavoritoReducer = (state = initialState, action) => {

    switch (action.type) {

        case AGREGAR_FAVORITO: {

            console.log("PASE POR AGREGAR FAVORITO REDUCER")
            console.log(action.favoritoEnviado)

            /*  const nuevoFavorito = new Personaje(action.favoritoEnviado.identificador, action.favoritoEnviado.nombre, action.favoritoEnviado.descripcion, action.favoritoEnviado.imagen, action.favoritoEnviado.uripersonaje, action.favoritoEnviado.uricomics, action.favoritoEnviado.uriseries, action.favoritoEnviado.urihistorias, action.favoritoEnviado.url); */

            return {
                ...state,
                favoritos: action.favoritoEnviado
                //favoritos: state.favoritos.concat(nuevoFavorito)
            }
        }

        case CARGAR_FAVORITOS_DB: {
            console.log("PASE POR CARGAR FAVORITOS DB")
            return {
                ...state,
                favoritos: action.favoritoEnviado
            }
        }

        default:
            return state;
    }
}

export default FavoritoReducer;