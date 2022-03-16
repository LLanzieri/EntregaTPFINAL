import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        borderColor: '#800000',
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerImagen:
    {
        margin: 10
    },
    imagen:
    {
        width: 250,
        height: 250
    },
    containerTexto:
    {
        margin: 10,
        alignItems: 'center'
    },
    nombre:
    {
        fontFamily: 'Asap-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

    },
    descripcion:
    {
        fontFamily:
            'Heebo-Light',
        fontSize: 16,
        color: 'black',
        marginTop: 15
    }

});
