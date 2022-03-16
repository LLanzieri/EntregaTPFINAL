import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        /*  borderWidth: 2,
         borderColor: 'yellow', */
        //alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: 'white'

    },
    containerTitulo: {
        alignItems: 'center',
        marginBottom: 5
    },
    imagen: {
        /*  borderWidth: 2,
         borderColor: 'green', */
        margin: 5,
        alignItems: 'center',
        flex: 1
    },
    texto: {
        color: 'black',
        fontSize: 20,
        margin: 10,
        fontFamily: 'Asap-Regular'
    },
    containerInputs: {
        flexDirection: 'row'
    },
    input: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Asap-Italic'
    },
    infoUsuario: {
        flex: 0.85,
        width: '95%',
        /*  borderWidth: 2,
         borderColor: 'blue', */
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonActualizar: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    compImage: {
        width: 200,
        height: 150,
        borderRadius: 90
    }

});
