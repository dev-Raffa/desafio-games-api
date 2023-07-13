'use client';

import { ReactNode, useState } from 'react';
import { UserContext } from './context';
import { user } from '@/types/user';

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserData] = useState<user | null>();

  const setUser = (userData: user | null) => {
    setUserData(userData);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
