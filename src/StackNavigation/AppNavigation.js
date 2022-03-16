import AutenticacionNavigator from "./AutenticacionNavigator";
import { NavigationContainer } from '@react-navigation/native';
import PantallasNavigator from "./PantallasNavigator";
import React from "react";
import { useSelector } from "react-redux";

const AppNavigation = () => {

    const isAuth = useSelector(state => state.autenticacionStore.userId);
    
    return (

        <NavigationContainer>

            {
                isAuth ? <PantallasNavigator /> : <AutenticacionNavigator />
            }

        </NavigationContainer >
    )
}

export default AppNavigation;