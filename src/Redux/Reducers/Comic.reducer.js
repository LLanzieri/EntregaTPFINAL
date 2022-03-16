import { CARGAR_COMICS_DESDE_DB } from "../Actions/Comic.action";
import React from "react";

const initialState = {
    comics: null
}

const ComicReducer = (state = initialState, action) => {

    switch (action.type) {

        case CARGAR_COMICS_DESDE_DB: {
            return {
                ...state,
                comics: action.comicsEnviados
            }
        }

        default:
            return state;
    }
}

export default ComicReducer;