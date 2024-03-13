import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listado from '../screens/Listado';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticatedUserContex} from '../../db/AuthenticatedUserProvider';
import GetCache from '../cache/GetCache';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import login from '../styles/LoginStyles';
import {crearTabla} from '../../db/Bdd';

const Stack = createStackNavigator();

const MainStack = () => {
  const {usuario, setUsuario} = useContext(AuthenticatedUserContex);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useState(() => {
    const logeado = async () => {
      const usuario_cache = await GetCache({key: 'usuario'});
      if (usuario_cache) {
        setUsuario(usuario_cache);
        setIsAuthenticated(true);
        console.log('cache con usuario');
      } else {
        setUsuario(null);
      }
      setIsLoading(false);
    };
    logeado();
    crearTabla();
  }, []);

  useEffect(() => {
    setIsAuthenticated(usuario !== null);
  }, [usuario]);

  if (isLoading) {
    return (
      <SafeAreaView style={login.loading}>
        <ActivityIndicator size="large" color="#5f008b" />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="Listado" component={Listado} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
