'use client';

import { Card } from '@/components/cards';
import { Figure } from '@/components/medias/figures';
import { Text } from '@/components/typography/texts';
import { ConteinerFlex } from '@/components/containers';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { gameInfos, games } from '@/app/services/ApiGames/types';
import { addGames } from '@/redux/models/games/slice';
import { RatingStars } from './rating';
import { ButtonFavorite } from './isFavorite';
import { styled } from './styles';

function generateCards(item: gameInfos, index: number) {
  return (
    <Card.wrap key={index} {...styled.wrap}>
      <Card.body direction="column">
        <Figure.wrap {...styled.figure.wrap}>
          <Figure.img
            src={item.thumbnail}
            alt={item.short_description}
            fit="cover"
          />
          <Figure.caption>
            <Text {...styled.figure.text}>{item.title}</Text>
          </Figure.caption>
        </Figure.wrap>
        <ConteinerFlex as={'section'} {...styled.section}>
          <RatingStars id={item.id} value={item.rating ? item.rating : 0} />
          <ButtonFavorite
            idGame={item.id}
            favorite={item.favorite ? item.favorite : false}
          />
        </ConteinerFlex>
        <Text {...styled.description}>{item.short_description}</Text>
      </Card.body>
    </Card.wrap>
  );
}

export const Cards = ({ data }: { data: games }) => {
  const dispatch = useAppDispatch();
  if (useAppSelector((state) => state.games.games) == null) {
    dispatch(addGames(data));
  }
  const games = useAppSelector((state) => state.games.games);
  const filteredGames = useAppSelector((state) => state.games.filteredGames);
  const filterError = useAppSelector((state) => state.games.filterError);

  return (
    <>
      {filterError ? (
        <Text color="red" size="s">
          {filterError}
        </Text>
      ) : filteredGames && filteredGames.length > 0 ? (
        filteredGames.map((item: gameInfos, index: number) => {
          return generateCards(item, index);
        })
      ) : games && games.length > 0 ? (
        games.map((item: gameInfos, index: number) => {
          return generateCards(item, index);
        })
      ) : (
        ''
      )}
    </>
  );
};
