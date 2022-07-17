import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { CreateItemProvider, UserContextProvider, ItemsContextProvider } from './context';

const App = () => {
  return (
    <UserContextProvider>
      <ItemsContextProvider>
        <CreateItemProvider>
          <Router />
        </CreateItemProvider>
      </ItemsContextProvider>
    </UserContextProvider>
  );
}

export default AppWithProvider = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)