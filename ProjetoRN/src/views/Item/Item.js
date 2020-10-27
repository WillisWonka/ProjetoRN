import React, { useState } from 'react';
import { Text, View } from 'react-native';
import estiloItem from './estiloItem';

function Item({ navigation }) {
    
    const [item, setItem] = useState();
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    return (
        <View style={estiloItem.container}>
            <Text style={estiloItem.texto}>Produtos</Text>
        </View>
    )
}
export default Item;