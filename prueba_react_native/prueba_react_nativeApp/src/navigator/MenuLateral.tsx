import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";

import React from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Pantalla1Screen } from "../screens/Pantalla1Screen";
import { Pantalla2Screen } from "../screens/Pantalla2Screen";
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
    drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
        <Drawer.Screen name="Pantalla1Screen" options={{ title: 'Formulario' }} component={Pantalla1Screen} />
        <Drawer.Screen name="Pantalla2Screen" options={{ title: 'Datos de subscriptores' }} component={Pantalla2Screen}/>
    </Drawer.Navigator>
  )
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={ styles.avatarContainer } >
                <Image 
                    source={{
                        uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
                      }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones del menu  */}
            <View style = { styles.menuContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Pantalla1Screen') }
                >
                    <Text style={ styles.menuTexto }>Fromulario</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Pantalla2Screen') }
                >
                    <Text style={ styles.menuTexto } >Datos de subscriptores</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
