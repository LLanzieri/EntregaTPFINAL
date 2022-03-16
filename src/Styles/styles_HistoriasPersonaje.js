import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        /*  borderColor: 'pink',
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
        /* borderColor: 'green',
        borderWidth: 2 */
    },
    lista: {
        borderColor: '#800000',
        borderWidth: 2,
        flex: 1,
        margin: 5
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
    containerItem:
    {
        alignItems: 'center',
        /* borderColor: 'blue',
        borderWidth: 2 */
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
    containerTexto: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    id:
    {
        color: '#800000',
        fontSize: 25,
        margin: 5,
        fontFamily: 'Asap-Regular'
    },
    titulo:
    {
        color: 'black',
        fontSize: 20,
        margin: 5,
        fontFamily: 'Heebo-Light'
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
