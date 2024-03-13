import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import GetAlls from '../cache/GetAlls';
import {eliminarTabla} from '../../db/bdd';

const Listado = () => {
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
  return (
    <View>
      <TouchableOpacity onPress={deleteTabla}>
        <Text>Borrar tabla</Text>
      </TouchableOpacity>
      <Text>Listado</Text>
    </View>
  );
};

export default Listado;
