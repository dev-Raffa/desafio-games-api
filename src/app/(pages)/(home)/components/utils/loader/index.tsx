'use client';

import { useContext } from 'react';
import { RiLoader3Line } from 'react-icons/ri';
import { GamesContext } from '@/contexts/gameInformations';
import { Loader } from '@/components/utils/loader';
import { ConteinerFlex } from '@/components/containers';

export const Loading = () => {
  const { loading } = useContext(GamesContext);

  return loading ? (
    <ConteinerFlex
      as={'section'}
      position="fixed"
      alignx="center"
      aligny="center"
      bgcolor="#bbb8b80"
      height="100%"
      width="80%"
    >
      <Loader icon={<RiLoader3Line />}></Loader>
    </ConteinerFlex>
  ) : (
    <></>
  );
};
