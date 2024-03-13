import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import RemoveCache from '../cache/RemoveCache';
import Icon from 'react-native-vector-icons/FontAwesome';
import {contexUser} from '../../db/AuthenticatedUserProvider';
import listado from '../styles/ListadoStyles';

const LogOut = () => {
  const {usuario, setUsuario} = contexUser();
  const navegacion = useNavigation();
  const cerrarSesion = async () => {
    try {
      await RemoveCache({key: 'usuario'});
      setUsuario(null);
      navegacion.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };
};

export default LogOut;
