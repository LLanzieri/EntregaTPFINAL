import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /* borderColor: 'red',
        borderWidth: 2 */
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
        width: 200,
        height: 200
    },
    containerDescrip: {
        flex: 1,
        borderColor: '#800000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        padding: 10
    },
    nombre: {
        fontSize: 20,
        color: '#800000',
        fontFamily: 'Asap-Regular',
        margin: 10
    },
    texto:
    {
        fontSize: 15,
        color: 'black',
        margin: 5,
        fontFamily: 'Heebo-Regular'
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
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#800000',
        borderWidth: 1
    },

});
