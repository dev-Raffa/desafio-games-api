import { Cards } from './components/page/sectionCards/cards';
import { InputSearch } from './components/page/sectionSearch/imputSearch';
import { SelectGenre } from './components/page/sectionSearch/selectGenre';
import { ConteinerFlex } from '@/components/containers';
import { getGames } from '@/app/services/ApiGames/getData';

export default async function Home() {
  const games = await getGames();

  return (
    <>
      <ConteinerFlex
        as={'section'}
        alignx="space-between"
        aligny="center"
        wrap="wrap"
        gap="1.75rem 30%"
      >
        <InputSearch />
        <SelectGenre />
      </ConteinerFlex>

      <ConteinerFlex
        as={'section'}
        alignx="space-between"
        wrap="wrap"
        width="100%"
        gap="2.5rem 5%"
      >
        <Cards data={games} />
      </ConteinerFlex>
    </>
  );
}
