'use client';

import { user } from '@/types/user';
import { createContext, useContext } from 'react';

interface userContext {
  user?: user | null;
  setUser: (user: user | null) => void;
}

export const UserContext = createContext<userContext>({} as userContext);

export const useUserContext = () => useContext(UserContext);
