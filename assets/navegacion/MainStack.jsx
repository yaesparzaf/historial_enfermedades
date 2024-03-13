import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listado from '../screens/Listado';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticatedUserContex} from '../../db/AuthenticatedUserProvider';
import GetCache from '../cache/GetCache';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import login from '../styles/LoginStyles';
import {crearTabla} from '../../db/bdd';
import Registro from '../screens/Registro';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Listado">
      <Stack.Screen name="Listado" component={Listado} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  const {usuario, setUsuario} = useContext(AuthenticatedUserContex);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, [setUsuario]);

  useEffect(() => {
    setIsAuthenticated(usuario !== null);
  }, [usuario]);
  console.log('isAuth: ', isAuthenticated);

  const isLogin = onlogin => {
    setIsAuthenticated(onlogin);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={login.loading}>
        <ActivityIndicator size="large" color="#5f008b" />
      </SafeAreaView>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen name="Login" options={{headerShown: false}}>
              {() => <Login onLogin={isLogin} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainStack;
