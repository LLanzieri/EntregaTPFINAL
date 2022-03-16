import React from "react";
import { CARGAR_PERSONAJES_DESDE_DB } from "../Actions/Personaje.action";

const initialState = {
    personajes: null
}

const PersonajeReducer = (state = initialState, action) => {

    switch (action.type) {

        case CARGAR_PERSONAJES_DESDE_DB: {
            return {
                ...state,
                personajes: action.personajesEnviados
            }
        }

        default:
            return state;
    }
}

export default PersonajeReducer;