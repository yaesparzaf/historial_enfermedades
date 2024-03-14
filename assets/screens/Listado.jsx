import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetAlls from '../cache/GetAlls';
import RemoveCache from '../cache/RemoveCache';
import {useNavigation} from '@react-navigation/native';
import {contexUser} from '../../db/AuthenticatedUserProvider';
import FloatButton from '../components/FloatButton';
import listado from '../styles/ListadoStyles';
import Historial from '../components/Historial';
import {eliminarTodoDeTabla} from '../../db/enfermedades';
import BarraBusqueda from '../components/BarraBusqueda';

const Listado = ({route}) => {
  const navegacion = useNavigation();
  const {setUsuario} = contexUser();
  const [recarga, setRecarga] = useState(false);
  const [buscar, setBuscar] = useState();

  useEffect(() => {
    if (route.params && route.params.reload) {
      setRecarga(true);
    }
  }, [route]);

  useEffect(() => {
    if (recarga) {
      const obtenerDatos = async () => {
        await GetAlls();
        setRecarga(false);
      };
      obtenerDatos();
    }
  }, [recarga]);

  const deleteTabla = () => {
    eliminarTodoDeTabla(callback => {
      'callback eliminar: ', callback;
    });
  };

  const aLogin = async () => {
    ('presionado');
    await RemoveCache({key: 'usuario'});
    setUsuario(null);
    //navegacion.navigate('Login');
  };
  const getSearch = buscando => {
    if (buscando) {
      setBuscar(buscando);
      setRecarga(true);
    }
  };
  return (
    <SafeAreaView style={listado.listado_cont}>
      <BarraBusqueda onSearch={getSearch} />
      <Historial reload={recarga} buscar={buscar} />
      <FloatButton />
    </SafeAreaView>
  );
};

export default Listado;
