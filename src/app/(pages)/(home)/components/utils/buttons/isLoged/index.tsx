'use client';

import { Logout } from './parts/logout';
import { Login } from './parts/login';
import { useAppSelector } from '@/redux/hook';

export const IsLoged = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return isLogged ? <Logout /> : <Login />;
};
