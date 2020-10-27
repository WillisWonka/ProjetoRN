import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if (!isDrawerOpen) {
            navigation.openDrawer();
        }
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={18} color="white" />
                </TouchableOpacity>
                <Text style={estiloInicial.texto}>WB Violões</Text>
            </View>
            <Image source={require('../../../assets/imagens/guitar.png')} style={estiloInicial.imagem} />
        </View>
    )
}
export default Inicial;