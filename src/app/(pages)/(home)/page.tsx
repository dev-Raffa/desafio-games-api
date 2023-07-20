import { getGames } from '@/app/services/ApiGames/getData';
import { Cards } from './components/page/sectionCards/cards';
import { ConteinerFlex } from '@/components/containers';
import { AlertLoging } from './components/utils/offcanvas';
import { Ordered } from './components/page/sectionSearch/ordered';
import { SectionFilters } from './components/page/sectionSearch';

export default async function Home() {
  const games = await getGames();

  return (
    <>
      <AlertLoging />
      <SectionFilters />
      <ConteinerFlex as="section" width="100%" alignx="right" aligny="center">
        <Ordered />
      </ConteinerFlex>
      <ConteinerFlex
        as={'section'}
        alignx="center"
        wrap="wrap"
        width="100%"
        gap="2.5rem 5%"
      >
        <Cards data={games} />
      </ConteinerFlex>
    </>
  );
}
