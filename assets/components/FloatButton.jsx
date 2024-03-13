import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {Screen} from 'react-native-screens';
import listado from '../styles/ListadoStyles';

const FloatButton = () => {
  const navegacion = useNavigation();
  const aRegistro = () => {
    navegacion.navigate('Home', {
      screen: 'Registro',
    });
  };
  return (
    <View style={listado.float_btn_cont}>
      <TouchableOpacity style={listado.button} onPress={aRegistro}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default FloatButton;
