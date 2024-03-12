import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FormLogin from '../components/FormLogin';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FormLogin />
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
