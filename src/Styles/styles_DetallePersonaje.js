import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
       /*  borderColor: 'red',
        borderWidth: 2, */
        backgroundColor: 'white'
    },
    infoContainer: {
        flex: 1,
        /* borderColor: 'blue',
        borderWidth: 2 */
    },
    containerImagen: {
        margin: 10,
        alignItems: 'center'
    },
    imagen: {
        width: 250,
        height: 250
    },
    containerDescrip: {
        flex: 1,
        /* borderColor: 'green',
        borderWidth: 2, */
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontStyle: 'italic',
        fontSize: 25,
        margin: 5,
        fontFamily: 'Asap-Bold',
        color: '#800000'
    },
    texto: {
        //fontStyle: 'italic',
        fontSize: 20,
        margin: 10,
        fontFamily:
            'Heebo-Light',
        color: 'black'
    },

    containerBotones: {
        margin: 10,
        flex: 1,
        /* borderColor: 'purple',
        borderWidth: 2, */
        alignItems: 'center',
        justifyContent: 'center'
    },
    boton: {
        margin: 10
    },

});
