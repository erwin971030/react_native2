import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const Pantalla1Screen = () => {

  const [from, setForm ] = useState({
    lugarSubscripcion: '',
    nombre: '',
    email: '',
  });

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Formulario' />

      <Text style={styles.textoInput} >Lugar de subscripscion: </Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Lugar de subscripcion"
      />

      <Text style={styles.textoInput} >Nombre de ususario: </Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Nombre de usuario"
      />

      <Text style={styles.textoInput} >Contraseña: </Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Contraseña"
      />


    </View>
  )
}

const style = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
  }
})
