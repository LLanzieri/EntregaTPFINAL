import Autenticacion from '../Pantallas/Autenticacion';

import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const AutenticacionNavigator = () => {

    return (
        <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Auth" component={Autenticacion} />

        </Stack.Navigator>

    )
}

export default AutenticacionNavigator;