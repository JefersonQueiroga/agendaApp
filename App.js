import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/Auth';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

