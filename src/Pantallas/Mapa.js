import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import Geolocation from '@react-native-community/geolocation';

const Mapa = ({ navigation }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                //console.warn(position);
                const { latitude, longitude } = position.coords;
                const location = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
                setInitialRegion(location);
                setSelectedLocation(location);
            },
            error => {
                //console.warn(error);
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
    }, [])

    const handleSelectLocation = event => {
        setSelectedLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
        })

    }

    const handleSaveLocation = () => {
        if (selectedLocation) {
            navigation.navigate('Crear Personaje', {
                mapLocation: selectedLocation,
            })
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <Text style={styles.buttonText}>
                        Guardar
                    </Text>
                </TouchableOpacity>
            ),
        })
    }, [navigation, handleSaveLocation])

    return (
        <>
            {initialRegion ? (
                <MapView
                    style={styles.container}
                    region={initialRegion}
                    onPress={handleSelectLocation}
                >
                    {
                        selectedLocation && (
                            <Marker
                                title='Ubicación seleccionada'
                                coordinate={selectedLocation}
                            />
                        )
                    }
                </MapView>) : <ActivityIndicator size={"large"} />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        backgroundColor: 'white',
        fontSize: 16,
        color: 'black',
        padding: 10,
        borderRadius: 4,
    },
    loading: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    }
})

export default Mapa
