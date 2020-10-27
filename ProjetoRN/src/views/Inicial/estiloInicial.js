import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        color: '#000000',
    },
    imagem: {
        width: 200,
        height: 100,
        transform: [{ rotate: '-50deg'}],
    },
});
export default estiloInicial;