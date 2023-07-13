'use client';

import { useUserContext } from '@/app/contexts/user/context';
import { Logout } from './parts/logout';
import { Login } from './parts/login';

export const IsLoged = () => {
  const { user } = useUserContext();

  return user?.isLogged ? <Logout /> : <Login />;
};
