'use client';

import { useContext } from 'react';
import { GamesContext } from '@/contexts/gameInformations';
import { SectionFlex, SectionGrid } from '@/components/containers/section';
import { Cards } from './components/untils/sectionCards';
import { Loading } from './components/untils/loader';
import { InputSearch } from './components/untils/imputSearch';
import { SelectGenre } from './components/untils/selectGenre';
import { MsgError } from './components/untils/msgErro';

export default function Home() {
  const { erro } = useContext(GamesContext);

  return (
    <SectionFlex direction="column" width="100%" minheight="100%" gap="3rem">
      <Loading />
      {erro ? (
        <>
          <MsgError />
        </>
      ) : (
        <>
          <SectionFlex
            alignx="space-between"
            aligny="center"
            wrap="wrap"
            gap="2rem"
          >
            <InputSearch />
            <SelectGenre />
          </SectionFlex>

          <SectionGrid
            id="section-cards"
            columns={'auto-fill'}
            templatecolumns="1fr 1fr 1fr"
            gap="2.5rem 5%"
          >
            <Cards />
          </SectionGrid>
        </>
      )}
    </SectionFlex>
  );
}
