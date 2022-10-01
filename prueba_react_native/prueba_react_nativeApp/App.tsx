import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MenuLateral } from './src/navigator/MenuLateral';
import { Text } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  )
}
