'use client';

import { useContext } from 'react';
import { RiLoader3Line } from 'react-icons/ri';
import { GamesContext } from '@/contexts/gameInformations';
import { Loader } from '@/components/utils/loader';
import { SectionFlex } from '@/components/containers/section';

export const Loading = () => {
  const { loading } = useContext(GamesContext);

  return loading ? (
    <SectionFlex
      position="fixed"
      alignx="center"
      aligny="center"
      bgcolor="#bbb8b8"
      height="100%"
      width="80%"
    >
      <Loader icon={<RiLoader3Line />}></Loader>
    </SectionFlex>
  ) : (
    <></>
  );
};
