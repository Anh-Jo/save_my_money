import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { CreateItemProvider, UserContextProvider, ItemsContextProvider } from './context';

const App = () => {
  return (
    <UserContextProvider>
      <CreateItemProvider>
        <ItemsContextProvider>
          <Router />
        </ItemsContextProvider>
      </CreateItemProvider>
    </UserContextProvider>
  );
}

export default AppWithProvider = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)