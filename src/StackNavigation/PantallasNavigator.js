//import Icon from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import TabConfiguracion from "./Tabs/TabConfiguracion";
import TabFavoritos from "./Tabs/TabFavoritos";
import TabHome from "./Tabs/TabHome";
import TabMisPersonajes from "./Tabs/TabMisPersonajes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Necesario para inicializar el Stack de pestañas
const Pantallas = createBottomTabNavigator();

const PantallasNavigator = () => {

    return (

        <Pantallas.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: '#ed1d24',
            tabBarInactiveBackgroundColor: "black",
            tabBarLabelStyle: { fontSize: 10, color: 'white', paddingBottom: 1 },
        }}
        >
            <Pantallas.Screen name='Home' component={TabHome}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='home' size={25} color='white' />
                    )

                }}
            />

            <Pantallas.Screen name='Favoritos' component={TabFavoritos}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='star' size={25} color='white' />

                    )
                }}
            />
            <Pantallas.Screen name='Mis Personajes' component={TabMisPersonajes}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='book' size={25} color='white' />

                    )
                }}
            />
            <Pantallas.Screen name='Usuario' component={TabConfiguracion}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='person-circle-outline' size={25} color='white' />

                    )
                }}
            />

        </Pantallas.Navigator >

    )
}

export default PantallasNavigator;