import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FormLogin from '../components/FormLogin';

const Login = ({onLogin}) => {
  const logeado = respuesta => {
    if (respuesta !== null) {
      onLogin(respuesta);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FormLogin onLogin={logeado} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
