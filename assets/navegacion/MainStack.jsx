import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listado from '../screens/Listado';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Listado" component={Listado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
