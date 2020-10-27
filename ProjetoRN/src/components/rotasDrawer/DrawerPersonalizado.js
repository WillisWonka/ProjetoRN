import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado() {
    return (
        <DrawerContentScrollView>
            <Text> Drawer Personalizado </Text>
        </DrawerContentScrollView>
    );
}
export default DrawerPersonalizado;