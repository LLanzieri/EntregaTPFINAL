import { Button, Image, Platform, Text, View } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useState } from 'react';

import { launchCamera } from 'react-native-image-picker';
import { styles } from '../Styles/styles_ImageSelector'

const ImageSelector = ({ onImage }) => {

    // Variable que guarda información de la foto
    const [pickerResponse, setPickerResponse] = useState();
    const IS_IOS = Platform.OS === 'ios';

    const handleTakePicture = async () => {

        // Seteo las opciones a pasar
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        }

        let granted;

        // Pregunta por los permisos según la plataforma del celular
        if (IS_IOS) {
            granted = await request(PERMISSIONS.IOS.CAMERA);
        } else {
            granted = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        // Si tengo acceso
        if (granted === RESULTS.GRANTED) {

            launchCamera(options, (res) => {

                if (!res.didCancel && !res.error) {
                    setPickerResponse(res.assets[0]);
                    onImage && onImage(res.assets[0].uri);
                    console.log(res.assets[0]);
                }
            });

        } else {
            //console.warn('Permission denied')
            Alert.alert(
                'No se pudo acceder a la cámara',
                'Por favor habilite los permisos de la cámara y vuelva a intentar.',
                [{ text: 'Cerrar' }]
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>

                {
                    !pickerResponse ?
                        <Text style={styles.msjImagen}>No hay una imágen seleccionada</Text>
                        :
                        (
                            <Image style={styles.image} source={{ uri: pickerResponse.uri }} />
                        )

                }
            </View>
            <View style={styles.botonTomarFoto}>
                <Button title="tomar foto 🤳" color={'black'} onPress={handleTakePicture} />
            </View>
        </View>
    )
}


export default ImageSelector;