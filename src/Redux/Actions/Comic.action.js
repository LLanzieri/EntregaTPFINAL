import { buscarTodosLosComics, insertarComic } from "../../Db/Database";

export const CARGAR_COMICS_DESDE_DB = 'CARGAR_COMICS_DESDE_DB';

export const cargarTablaComics = (listaComics) => {

    let imagen = null;
    let extension = null;
    let pathImagen = null;
    let r;

    return async dispatch => {

        try {
            // Consulto si la tabla de comics tiene datos
            let res = await buscarTodosLosComics();
            console.log(res.length);

            if (res.length === 0) {
                console.log("CARGO COMICS POR PRIMERA VEZ");

                listaComics.map((comic) => {

                    imagen = comic.thumbnail.path;
                    extension = comic.thumbnail.extension;
                    pathImagen = imagen + '.' + extension;

                    if (comic.id && comic.title && comic.description && pathImagen && comic.resourceURI && comic.creators.collectionURI && comic.urls[0].url)
                        r = insertarComic(comic.id, comic.title, comic.description, pathImagen, comic.resourceURI, comic.creators.collectionURI, comic.urls[0].url);
                })

            }
            else {
                console.log("LOS COMICS ESTAN CARGADOS");
            }

            res = await buscarTodosLosComics();

            dispatch({
                type: CARGAR_COMICS_DESDE_DB,
                comicsEnviados: res
            })

        } catch (error) {
            console.log(error)
        }

    }
}