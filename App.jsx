import React from 'react';
import MainStack from './assets/navegacion/MainStack';
import {AuthenticatedUserProvider} from './db/AuthenticatedUserProvider';

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <MainStack />
    </AuthenticatedUserProvider>
  );
}
