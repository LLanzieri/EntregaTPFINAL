import Favoritos from '../../Pantallas/Favoritos';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabFavoritos = () => {
    return (
        <Stack.Navigator initialRouteName='Mis Favoritos'>
            <Stack.Screen name="Mis Favoritos" component={Favoritos}
                options={{
                    //headerShown: false,
                    title: 'Mis Favoritos',
                    headerStyle: {
                        backgroundColor: 'black',

                    },
                    headerTintColor: '#fff',
                }} />

        </Stack.Navigator>
    )
}

export default TabFavoritos; 