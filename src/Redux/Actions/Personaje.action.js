import { buscarPersonaje, buscarTodosLosPersonajes, insertarPersonaje } from "../../Db/Database";

export const CARGAR_PERSONAJES_DESDE_DB = 'CARGAR_PERSONAJES_DESDE_DB';

export const cargarTablaPersonajes = (listaPersonajes) => {

    let imagen = null;
    let extension = null;
    let pathImagen = null;
    let r;

    return async dispatch => {

        try {
            // Consulto si la tabla de personajes tiene datos
            let res = await buscarTodosLosPersonajes();
            console.log(res.length);

            if (res.length === 0) {
                console.log("CARGO PERSONAJES POR PRIMERA VEZ");

                listaPersonajes.map((personaje) => {

                    imagen = personaje.thumbnail.path;
                    extension = personaje.thumbnail.extension;
                    pathImagen = imagen + '.' + extension;

                    r = insertarPersonaje(personaje.id, personaje.name, personaje.description, pathImagen, personaje.resourceURI, personaje.comics.collectionURI, personaje.series.collectionURI, personaje.stories.collectionURI, personaje.urls[0].url);
                })

            }
            else {
                console.log("LOS PERSONAJES ESTAN CARGADOS");
            }

            res = await buscarTodosLosPersonajes();

            dispatch({
                type: CARGAR_PERSONAJES_DESDE_DB,
                personajesEnviados: res
            })

        } catch (error) {
            console.log(error)
        }

    }
}