import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';
import { MaterialIcon } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
    Inicial: { name: 'home' },
    Item: { name: 'storage' },
    Perfil: { name: 'person' },
}
const RotasTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    style: {backgroundColor: '#081a31', borderTopColor: '#081a31'},
                    activeTintColor: '#FFFFFF',
                    showLabel: false,
                }
            }
            screenOptions={ ({route}) => ({
                tabBarIcon: ({color, size}) => {
                    const {name} = icones[route.name];
                    return <MaterialIcon name={name} size={size} color={color} />
                }
            })
            }
        >
            <Tab.Screen 
                name="Inicial" 
                component={RotasDrawer}
                options={{
                    unmountOnBlur: true,
                }} 
            />
            <Tab.Screen name="Item" component={Item} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}
export default RotasTab;