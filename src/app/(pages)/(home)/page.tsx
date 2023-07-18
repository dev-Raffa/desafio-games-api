import { Cards } from './components/page/sectionCards/cards';
import { InputSearch } from './components/page/sectionSearch/imputSearch';
import { SelectGenre } from './components/page/sectionSearch/selectGenre';
import { ConteinerFlex } from '@/components/containers';
import { getGames } from '@/app/services/ApiGames/getData';
import { AlertLoging } from './components/utils/offcanvas';
import { ButtonFavorites } from './components/page/sectionSearch/favorites';
import { Ordered } from './components/page/sectionSearch/ordered';
import { Text } from '@/components/typography/texts';

export default async function Home() {
  const games = await getGames();

  return (
    <>
      <AlertLoging />
      <ConteinerFlex
        as={'section'}
        alignx="center"
        aligny="end"
        height="15rem"
        width="100%"
        wrap="wrap"
        gap="1.75rem"
        padding="2rem 0"
      >
        <Text color="primary" size="m">
          Filtros:
        </Text>
        <InputSearch />
        <SelectGenre />
        <ButtonFavorites />
      </ConteinerFlex>

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
