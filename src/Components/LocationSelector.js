import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Geolocation from '@react-native-community/geolocation';
import MapPreview from '../Components/MapPreview';
import { useRoute } from '@react-navigation/native';

const LocationSelector = ({ onLocation, onMapLocation }) => {
    const [pickedLocation, setPickedLocation] = useState('');
    const route = useRoute();
    const mapLocation = route?.params?.mapLocation;

    useEffect(() => {
        if (mapLocation) {
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }
    }, [mapLocation]);

    const handleGetLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                // console.warn(position);
                const { latitude, longitude } = position.coords;
                const location = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
                setPickedLocation(location)
                onLocation(location);
            },
            error => {
                // console.warn(error);
                Alert.alert(
                    'No se pudo obtener su ubicación',
                    'Por favor habilite los permisos de locación y vuelva a intentar.',
                    [{ text: 'Cerrar' }]
                )
            },
            {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 10000,
                forceRequestLocation: true,
                showLocationDialog: true,
            }
        )
    }

    const handlePickOnMap = () => {
        onMapLocation();
    }

    console.log(pickedLocation)

    return (
        <View style={styles.container}>
            <MapPreview
                location={pickedLocation}
                style={styles.preview}
            >
                <Text style={styles.sinUbicacion}>No hay una ubicación seleccionada</Text>
            </MapPreview>

            <View style={styles.action}>
                <Button
                    title="ubicación actual"
                    color='black'
                    onPress={handleGetLocation}

                />
                <Button
                    title="Elegir del mapa"
                    color='black'
                    onPress={handlePickOnMap}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#800000',
        borderWidth: 1,

    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sinUbicacion: {
        textAlign: 'center',
        fontFamily: 'Asap-Regular',
        color: 'black',
        fontSize: 20
    }
});

export default LocationSelector;