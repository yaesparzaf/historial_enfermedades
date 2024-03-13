import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import login from '../styles/LoginStyles';
import {useNavigation} from '@react-navigation/native';
import PutCache from '../cache/PutCache';
import {getUsuario} from '../../db/bdd';

const FormLogin = ({onLogin}) => {
  const navegacion = useNavigation();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [correoValido, setCorreoValido] = useState(false);
  const [passValido, setPassValido] = useState(false);

  const validarEmail = text => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(text);
  };

  const isValido = text => {
    setCorreo(text);
    setCorreoValido(validarEmail(text));
  };

  const isLogin = async () => {
    getUsuario(correo, password, async existe => {
      if (existe) {
        // navegacion.navigate('Listado');
        try {
          await PutCache({key: 'usuario', datos: {correo, password}});
          console.log(existe);
          onLogin(existe);
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
          keyboardType="email-address"
          value={correo}
          maxLength={100}
          onChangeText={isValido}
          style={login.input}
        />
        <Text style={login.texto}>Contraseña</Text>

        <TextInput
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
          maxLength={100}
          value={password}
          onChangeText={texto => {
            setPassword(texto);
            setPassValido(texto.length > 2);
          }}
          style={login.input}
        />
        <TouchableOpacity
          disabled={!correoValido || !passValido}
          style={{
            ...login.enviar_btn,
            backgroundColor:
              correoValido && passValido
                ? login.enviar_btn.backgroundColor
                : 'grey',
          }}
          onPress={isLogin}>
          <Text style={login.texto_btn}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;
