import {SafeAreaView, View} from 'react-native';
import React from 'react';
import FormEnfermedad from '../components/FormEnfermedad';
import registro from '../styles/RegistroStyles';

const Registro = () => {
  return (
    <SafeAreaView style={registro.safeArea}>
      <FormEnfermedad />
    </SafeAreaView>
  );
};

export default Registro;
