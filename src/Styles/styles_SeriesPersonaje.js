import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        /* borderColor: 'pink',
        borderWidth: 2, */
        backgroundColor: 'white'
    },
    containerGeneral:
    {
        flex: 1,
        /* borderColor: 'purple',
        borderWidth: 2 */
    },
    containerLista:
    {
        flex: 1,
        margin: 5
        /* borderColor: 'green',
        borderWidth: 2 */
    },
    containerItem:
    {
        alignItems: 'center',
        /* borderColor: 'blue',
        borderWidth: 2 */
    },
    lista:
    {
        borderColor: '#800000',
        borderWidth: 2
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
    miniatura:
    {
        width: 200,
        height: 200
    },
    containerMiniatura: {
        margin: 10
    },
    miniatura: {
        width: 200,
        height: 200
    },
    titulo:
    {
        color: '#800000',
        fontSize: 25,
        margin: 5,
        fontFamily: 'Asap-Regular'
    },
    texto:
    {
        fontSize: 20,
        margin: 5,
        color: 'black',
        fontFamily: 'Heebo-Light'
    },

    containerTexto: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
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
