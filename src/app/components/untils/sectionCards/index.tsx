'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { GamesContext } from '@/contexts/gameInformations';
import { Card } from '@/components/utils/cards';
import { Figure } from '@/components/medias/figures';
import { Text } from '@/components/typography/texts';
import { gameInfos } from '@/app/service/gameInfo/types';
import { ArticleFlex } from '@/components/containers/article';

export const Cards = () => {
  const { games, gamesFilteredByGenre, gamesFilteredBySearch } =
    useContext(GamesContext);

  function generateCards(item: gameInfos, index: number) {
    return (
      <Card
        key={index}
        direction="column"
        bgcolor="secondary"
        height="30rem"
        width="30%"
        minwidth="300px"
        borderradius="1rem"
        overflow="hidden"
        boxshadow="1px 1px 5px 0px"
        body={
          <>
            <Figure
              img={{
                src: item.thumbnail,
                alt: item.short_description,
                quality: 80,
                fill: true,
                fit: 'cover'
              }}
              caption={
                <Text color="primary" size="m" align="center">
                  {item.title}
                </Text>
              }
            />
            <ArticleFlex padding="1rem">
              <Text color="secondary" size="s" align="justify">
                {item.short_description}
              </Text>
            </ArticleFlex>
          </>
        }
      />
    );
  }
  function getCards() {
    if (gamesFilteredBySearch.length > 0) {
      return gamesFilteredBySearch.map((item, index) => {
        return (
          <Link
            style={{ width: '30%', minWidth: '300px' }}
            target="_blank"
            rel="nooponer"
            key={index}
            href={item.game_url}
          >
            {generateCards(item, index)}
          </Link>
        );
      });
    } else if (gamesFilteredByGenre.length > 0) {
      return gamesFilteredByGenre.map((item, index) => {
        return (
          <Link
            style={{ width: '30%', minWidth: '300px' }}
            target="_blank"
            rel="nooponer"
            key={index}
            href={item.game_url}
          >
            {generateCards(item, index)}
          </Link>
        );
      });
    } else if (games.length > 0) {
      return games.map((item, index) => {
        return (
          <Link
            style={{ width: '30%', minWidth: '300px' }}
            target="_blank"
            rel="nooponer"
            key={index}
            href={item.game_url}
          >
            {generateCards(item, index)}
          </Link>
        );
      });
    }
  }
  return <>{getCards()}</>;
};
