import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //padding: 10,
        /* borderWidth: 2,
        borderColor: 'blue', */
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
        //margin: 10,


    },
    authContainer: {
        flex: 1,
        width: '90%',
        //padding: 10,
        /* borderWidth: 2,
        borderColor: 'green', */
        justifyContent: 'space-evenly'
        //alignItems: 'center',

    },
    containerLogo: {
        alignItems: 'center',
        margin: 10
    },
    logo: {
        width: 200,
        height: 200
    },
    titulo: {
        flex: 1,
        color: '#800000',
        fontSize: 25,
        textAlign: 'center',
        //margin: 5,
        padding: 10,
        /* borderWidth: 2,
        borderColor: 'purple', */
        fontFamily: 'Heebo-Bold'
    },
    inputsContainer: {
        //margin: 5,
        padding: 10,
        /* borderWidth: 2,
        borderColor: 'purple', */
        justifyContent: 'center'

    },
    texto: {
        fontSize: 20,
        color: 'black',
        marginTop: 5

    },
    placeholderTexto: {
        fontSize: 20,
        fontStyle: 'italic',
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },
    bottomContainer: {
        margin: 5,
        padding: 10,
        /* borderWidth: 2,
        borderColor: 'purple', */
        alignItems: 'center'
    },
    registroLoginText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Heebo-Medium',
        color: 'black',
        fontStyle: 'italic'
    }

});
