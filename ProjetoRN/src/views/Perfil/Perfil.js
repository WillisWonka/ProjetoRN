import React, { useState } from 'react';
import { Text, View } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil({ navigation }) {

    const [perfil, setPerfil] = useState();
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    return (
        <View style={estiloPerfil.container}>
            <Text style={estiloPerfil.texto}>Perfil</Text>
        </View>
    )
}
export default Perfil;