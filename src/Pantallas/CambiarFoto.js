import { Button, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import ImageSelector from "../Components/ImageSelector";
import { actualizarFoto } from "../Redux/Actions/Usuario.action";
import { styles } from '../Styles/styles_CambiarFoto'

const CambiarFoto = ({ navigation }) => {

    const dispatch = useDispatch();

    const perfil = useSelector(state => state.usuarioStore.miUsuario);
    const [imagen, setImagen] = useState();

    const handleOnImage = (uri) => {
        setImagen(uri);
    }

    const handleGuardarFoto = () => {

        dispatch(actualizarFoto(perfil, imagen));
        navigation.navigate('ActualizarConfiguracion');
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerFoto}>
                <ImageSelector onImage={handleOnImage} />
            </View>

            <View style={styles.btnGuardar}>
                <Button title="Guardar Foto 📷" color='black' onPress={() => handleGuardarFoto()} />
            </View>
        </View>
    )
}

export default CambiarFoto;