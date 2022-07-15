import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { CreateItemProvider } from './context';
export default App = () => {
  return (

    <NavigationContainer>
      <CreateItemProvider>
        <Router />
      </CreateItemProvider>
    </NavigationContainer>

  );
}