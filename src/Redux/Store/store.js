import { applyMiddleware, combineReducers, createStore } from 'redux'

import AutenticacionReducer from '../Reducers/Autenticacion.reducer'
import ComicReducer from '../Reducers/Comic.reducer'
import FavoritoReducer from '../Reducers/Favorito.reducer'
import MiPersonajeReducer from '../Reducers/MiPersonaje.reducer'
import PersonajeReducer from '../Reducers/Personaje.reducer'
import UsuarioReducer from '../Reducers/Usuario.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    autenticacionStore: AutenticacionReducer,
    usuarioStore: UsuarioReducer,
    personajeStore: PersonajeReducer,
    comicStore: ComicReducer,
    favoritoStore: FavoritoReducer,
    miPersonajeStore: MiPersonajeReducer

})

export default createStore(RootReducer, applyMiddleware(thunk));