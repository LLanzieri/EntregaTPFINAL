import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemFavoritos from '../Components/ItemFavoritos';
import { cargarFavoritosDesdeDB } from '../Redux/Actions/Favorito.action';
import { eliminarFavorito } from '../Redux/Actions/Favorito.action';
import { styles } from '../Styles/styles_Favoritos'

const Favoritos = ({ navigation }) => {
    const dispatch = useDispatch();

    const email = useSelector(state => state.autenticacionStore.userEmail);

    const listaFavoritos = useSelector(state => state.favoritoStore.favoritos);
    console.log("ESTOY EN PANTALLA FAVORITOS")
    console.log(listaFavoritos)

    useEffect(() => {
        dispatch(cargarFavoritosDesdeDB(email));
    }, []);

    const handlerMostrarDetalle = (info) => {
        navigation.navigate('DetallePersonaje', {
            titulo: info.nombre,
            data: info
        });
    }

    const eliminarFav = (email, nombre) => {
        dispatch(eliminarFavorito(email, nombre));
    }

    const renderItem = ({ item }) => (
        <ItemFavoritos info={item} onSelect={handlerMostrarDetalle} eliminarFav={eliminarFav} />
    )

    return (

        <View style={styles.mainContainer}>

            <FlatList
                data={listaFavoritos}
                style={styles.lista}
                keyExtractor={(item) => item.identificador}
                renderItem={
                    renderItem
                }
                ListEmptyComponent={
                    <View style={styles.containerListaVacia}>
                        <Text style={styles.texto}>
                            ¡ No posee ningún Favorito en su lista ! </Text>
                        <Text style={styles.texto}>Puede agregar personajes haciendo click <Text style={[styles.texto, { color: '#990000' }]} onPress={() => navigation.navigate('ListaPersonajes')}>AQUÍ</Text>
                        </Text>
                    </View>
                }
            />

        </View >
    )
}

export default Favoritos;