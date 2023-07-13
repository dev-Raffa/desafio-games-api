'use client';

import { Card } from '@/components/cards';
import { Figure } from '@/components/medias/figures';
import { Text } from '@/components/typography/texts';
import { Rating } from './rating';
import { ConteinerFlex } from '@/components/containers';
import { games } from '@/types/data';
import { useGameSContext } from '@/app/contexts/game/context';

interface cardsProps {
  data: Array<games>;
}

export const Cards = ({ data }: cardsProps) => {
  const { getGames, games, gamesFilteredByGenre, gamesFilteredBySearch } =
    useGameSContext();

  getGames(data);

  function generateCards(item: games, index: number) {
    return (
      <Card.wrap
        key={index}
        position="relative"
        direction="column"
        bgcolor="secondary"
        height="40rem"
        width="30%"
        maxwidth="400px"
        minwidth="300px"
        borderradius="5px"
        overflow="hidden"
        boxshadow="1px 1px 5px 0px"
      >
        <Card.body direction="column">
          <Figure.wrap position="relative" overflow="hidden" height="17.5rem">
            <Figure.img
              src={item.thumbnail}
              alt={item.short_description}
              fit="cover"
            />
            <Figure.caption>
              <Text size="m" color="primary" align="center">
                {item.title}
              </Text>
            </Figure.caption>
          </Figure.wrap>
          <Text size="m" color="primary" align="justify" margin="0 1rem">
            {item.short_description}
          </Text>
        </Card.body>
        <Card.footer
          position="absolute"
          bottom="0"
          alignx="space-around"
          height="3rem"
          width="100%"
          bgcolor="white"
        >
          <ConteinerFlex
            as={'section'}
            width="50%"
            alignx="space-between"
            aligny="center"
            fontcolor="yellow"
          >
            <Rating />
          </ConteinerFlex>
        </Card.footer>
      </Card.wrap>
    );
  }
  function getCards() {
    if (gamesFilteredBySearch.length > 0) {
      return gamesFilteredBySearch.map((item: games, index: number) => {
        return generateCards(item, index);
      });
    } else if (gamesFilteredByGenre.length > 0) {
      return gamesFilteredByGenre.map((item: games, index: number) => {
        return generateCards(item, index);
      });
    } else if (games.length > 0) {
      return games.map((item: games, index: number) => {
        return generateCards(item, index);
      });
    }
  }
  return <>{getCards()}</>;
};
