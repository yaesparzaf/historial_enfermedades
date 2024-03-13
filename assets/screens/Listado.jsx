import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import GetAlls from '../cache/GetAlls';
import {eliminarTabla} from '../../db/bdd';
import RemoveCache from '../cache/RemoveCache';
import {useNavigation} from '@react-navigation/native';
import {contexUser} from '../../db/AuthenticatedUserProvider';
import FloatButton from '../components/FloatButton';
import listado from '../styles/ListadoStyles';
import Historial from '../components/Historial';

const Listado = () => {
  const navegacion = useNavigation();
  const {setUsuario} = contexUser();
  useEffect(() => {
    const obtenerDatos = async () => {
      const cache = await GetAlls();
      console.log('datos: ', cache);
    };
    obtenerDatos();
  }, []);

  const deleteTabla = () => {
    eliminarTabla();
  };
  const aLogin = async () => {
    console.log('presionado');
    await RemoveCache({key: 'usuario'});
    setUsuario(null);
    //navegacion.navigate('Login');
  };
  return (
    <SafeAreaView style={listado.listado_cont}>
      <Historial />
      <TouchableOpacity onPress={deleteTabla}>
        <Text>eliminar</Text>
      </TouchableOpacity>
      <FloatButton />
    </SafeAreaView>
  );
};

export default Listado;
