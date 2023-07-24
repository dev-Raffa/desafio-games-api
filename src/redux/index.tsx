'use client';

import { Provider } from 'react-redux';
import { persStore, store } from './store';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persStore}>{children}</PersistGate>
    </Provider>
  );
};
