import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import login from '../styles/LoginStyles';
import {useNavigation} from '@react-navigation/native';
import PutCache from '../cache/PutCache';
import {getUsuario} from '../../db/bdd';

const FormLogin = () => {
  const navegacion = useNavigation();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [respuesta, setRespuesta] = useState();

  const isLogin = async () => {
    getUsuario(correo, password, async existe => {
      if (existe) {
        try {
          await PutCache({key: 'usuario', datos: {correo, password}});
          navegacion.navigate('Listado');
        } catch (error) {
          console.error('Error al guardar en la caché:', error);
        }
      } else {
        Alert.alert('Usuario o contraseña incorrectos');
      }
    });
  };
  return (
    <View style={login.contenedor}>
      <Text style={login.titulo}>Inicio de Sesión</Text>
      <View style={login.form_cont}>
        <Text style={login.texto}>Email</Text>
        <TextInput
          placeholder="Ingresa tu email"
          value={correo}
          onChangeText={setCorreo}
          style={login.input}
        />
        <Text style={login.texto}>Contraseña</Text>

        <TextInput
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={login.input}
        />
        <TouchableOpacity style={login.enviar_btn} onPress={isLogin}>
          <Text style={login.texto_btn}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;
