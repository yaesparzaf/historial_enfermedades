import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import login from '../styles/LoginStyles';
import {useNavigation} from '@react-navigation/native';

const FormLogin = () => {
  const navegacion = useNavigation();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = () => {
    navegacion.navigate('Listado');
  };
  return (
    <View style={login.contenedor}>
      <Text style={login.titulo}>Inicio de Sesión</Text>
      <View style={login.form_cont}>
        <TextInput
          placeholder="correo"
          value={correo}
          onChangeText={setCorreo}
          style={login.input}
        />
        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={login.input}
        />
        <TouchableOpacity style={login.enviar_btn} onPress={isLogin}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;
