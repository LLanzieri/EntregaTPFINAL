import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        /* borderColor: 'pink',
        borderWidth: 2, */
        backgroundColor: 'white'
    },
    containerInfo: {
        flex: 1,
        /* borderColor: 'red',
        borderWidth: 2 */
    },

    containerLista: {
        flex: 1,
        borderColor: '#800000',
        borderWidth: 2,
        margin: 5
    },
    lista: {
        /* borderColor: 'yellow',
        borderWidth: 2, */
        flex: 1
    },
    listaVacia:
    {
        fontSize: 25,
        color: 'black',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Heebo-Light'
    },
    containerItem: {
        /* borderColor: 'black',
        borderWidth: 2, */
        alignItems: 'center',
        margin: 10,
        flex: 0.5
    },
    containterMiniatura: {
        margin: 10,

    },
    miniatura: {
        width: 150,
        height: 250,

    },
    containerTexto: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    titulo: {
        fontSize: 23,
        color: 'black',
        fontFamily: 'Asap-Regular',
        margin: 10,
        color: '#800000'
    },
    texto: {
        color: 'black',
        fontSize: 16,
        margin: 10,
        fontFamily:
            'Heebo-Light',
    },
    containerBotones: {
        flex: 0.1,
        alignItems: 'center',
        margin: 10
    },
    boton: {
        flex: 1,
        margin: 5
    }


});
