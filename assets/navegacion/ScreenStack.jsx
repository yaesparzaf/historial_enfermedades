import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const ScreenStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registro" />
    </Stack.Navigator>
  );
};

export default ScreenStack;
