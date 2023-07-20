import { ConteinerFlex } from '@/components/containers';
import { Text } from '@/components/typography/texts';
import { InputSearch } from './imputSearch';
import { SelectGenre } from './selectGenre';
import { ButtonFavorites } from './favorites';

export const SectionFilters = () => {
  return (
    <ConteinerFlex
      as={'section'}
      alignx="center"
      aligny="end"
      height="15rem"
      width="100%"
      padding="2rem 0"
    >
      <ConteinerFlex
        as="section"
        alignx="center"
        aligny="center"
        wrap="wrap"
        borderradius="0.7rem"
        gap="1.75rem"
        width="100%"
        padding="1rem"
      >
        <Text color="primary" size="m">
          Filtros:
        </Text>
        <InputSearch />
        <SelectGenre />
        <ButtonFavorites />
      </ConteinerFlex>
    </ConteinerFlex>
  );
};
