'use client';

import { Card } from '@/components/cards';
import { Figure } from '@/components/medias/figures';
import { Text } from '@/components/typography/texts';
import { ConteinerFlex } from '@/components/containers';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { gameInfos, games } from '@/app/services/ApiGames/types';
import { addGames, setIsFavorite, setRating } from '@/redux/models/games/slice';
import { RatingStars } from './rating';
import { ButtonFavorite } from './isFavorite';
import { styled } from './styles';
import { getAllFavoriteGames } from '@/app/services/firebase/games/controller';

interface cardProps {
  data: games;
}

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
          <RatingStars
            key={`rating-item-${item.id}`}
            id={item.id}
            value={item.rating ? item.rating : 0}
          />
          <ButtonFavorite
            key={`favorite-item-${item.id}`}
            idGame={item.id}
            favorite={item.favorite}
          />
        </ConteinerFlex>
        <Text {...styled.description}>{item.short_description}</Text>
      </Card.body>
    </Card.wrap>
  );
}

export function Cards({ data }: cardProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userId);
  let allGames = useAppSelector((state) => state.games.games);
  let favoriteGames: object;

  async function getFavoriteGames() {
    if (userId) {
      favoriteGames = await getAllFavoriteGames(userId);
      for (const key in favoriteGames) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const item = favoriteGames[key];
        item.favorite &&
          dispatch(
            setIsFavorite({ idGame: item.id, isFavorite: item.favorite })
          );
        item.rating &&
          dispatch(setRating({ idGame: item.id, rating: item.rating }));
      }
    }
  }

  if (allGames == null) {
    dispatch(addGames(data));
    getFavoriteGames();
  } else {
    getFavoriteGames();
  }

  allGames = useAppSelector((state) => state.games.games);
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
      ) : allGames && allGames.length > 0 ? (
        allGames.map((item: gameInfos, index: number) => {
          return generateCards(item, index);
        })
      ) : (
        ''
      )}
    </>
  );
}
