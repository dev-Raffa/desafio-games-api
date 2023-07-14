'use client';

import { Card } from '@/components/cards';
import { Figure } from '@/components/medias/figures';
import { Text } from '@/components/typography/texts';
import { Rating } from './rating';
import { ConteinerFlex } from '@/components/containers';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addGames } from '@/redux/slices/games';
import { gameInfos, games } from '@/app/services/ApiGames/types';

function generateCards(item: gameInfos, index: number) {
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

export const Cards = ({ data }: { data: games }) => {
  const dispatch = useAppDispatch();
  dispatch(addGames(data));

  const games = useAppSelector((state) => state.games.games);
  const filteredGames = useAppSelector((state) => state.games.filteredGames);
  return (
    <>
      {filteredGames && filteredGames.length > 0
        ? filteredGames.map((item: gameInfos, index: number) => {
            return generateCards(item, index);
          })
        : games && games.length > 0
        ? games.map((item: gameInfos, index: number) => {
            return generateCards(item, index);
          })
        : ''}
    </>
  );
};
