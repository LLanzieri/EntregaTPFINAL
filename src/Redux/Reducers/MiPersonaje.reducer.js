import { CARGAR_MIS_PERSONAJES_DESDE_DB } from "../Actions/MiPersonaje.action";
import React from "react";

const initialState = {
    misPersonajes: null
}

const MiPersonajeReducer = (state = initialState, action) => {

    switch (action.type) {

        case CARGAR_MIS_PERSONAJES_DESDE_DB: {
            return {
                ...state,
                misPersonajes: action.infoPersonajes
            }
        }

        default:
            return state;
    }
}

export default MiPersonajeReducer;