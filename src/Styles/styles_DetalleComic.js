import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /* borderColor: 'red',
        borderWidth: 2, */
        backgroundColor: 'white'
    },
    infoContainer: {
        flex: 1,
        /* borderColor: 'blue',
        borderWidth: 2 */
    },
    titulo: {
        margin: 10,
        alignItems: 'center'
    },
    titulito:
    {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Asap-SemiBold',
        margin: 5,
        textDecorationLine: 'underline',

    },
    lista: {
        flex: 1,
        borderColor: '#800000',
        borderWidth: 2,
        margin: 5
    },
    listaVacia: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Asap-Regular',
        margin: 10,

    },
    containerImagen: {
        alignItems: 'center',
        margin: 10
    },
    imagen: {
        width: 200,
        height: 200,
    },
    containerBotones: {
        //margin: 5,
        flex: 0.3,
        /*  borderColor: 'purple',
         borderWidth: 2, */
        alignItems: 'center',
        justifyContent: 'center',
        flexDirectionx: 'row'
    },
    boton: {
        margin: 5
    }
});
