'use client';

import { useState, useRef } from 'react';
import { carousel } from './type';
import { BlockStyle } from '@/components/containers/style';
import { NavLink } from '../navs/style';
import { SectionFlex } from '@/components/containers/section';
import { Figure } from '@/components/medias/figures';
import { ButtonCircle } from '../buttons/circle';

export const Carousel = ({ gap, itens, ...rest }: carousel) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLDivElement>(null);
  const [itemIndex, setIndex] = useState(0);

  const time = setTimeout(() => {
    const nextI =
      itemIndex < itens.length - 1
        ? itemIndex + 1
        : itemIndex - (itens.length - 1);

    const posY = carouselRef.current?.getBoundingClientRect().top || 0;
    posY > 0 && scroollToIndex(itemIndex, nextI);
  }, 10000);

  const scroollToIndex = (currentIndex: number, nextIndex: number) => {
    carouselRef.current
      ?.getElementsByClassName('carousel-item')
      [nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });

    indexRef.current
      ?.querySelectorAll('button')
      [currentIndex].style.setProperty(
        'background-color',
        'rgba(217, 217, 217, 0.21)'
      );
    indexRef.current
      ?.querySelectorAll('button')
      [nextIndex].style.setProperty(
        'background-color',
        'rgba(217, 217, 217, 1)'
      );

    setIndex(nextIndex);
  };

  const handleClick = (currentIndex: number, nextIndex: number) => {
    scroollToIndex(currentIndex, nextIndex);
    clearTimeout(time);
  };

  return (
    <SectionFlex position="relative" overflow="hidden" {...rest}>
      <BlockStyle
        ref={carouselRef}
        variant="section"
        position="absolute"
        display="flex"
        direction="row"
        gap={gap}
        height="100%"
      >
        {itens.map((item, index) => {
          return item.path ? (
            <NavLink
              key={`item-${index}`}
              href={item.path}
              target={item.target}
            >
              <Figure
                key={`item-image-${index}`}
                className="carousel-item"
                {...item}
              />
            </NavLink>
          ) : (
            <Figure
              key={`item-image-${index}`}
              className="carousel-item"
              {...item}
            />
          );
        })}
      </BlockStyle>
      <BlockStyle
        ref={indexRef}
        variant="section"
        display="flex"
        position="sticky"
        top="95%"
        left="0"
        height="30px"
        width="100%"
        zindex={2}
        alignx="center"
        aligny="center"
        gap="5px"
      >
        {itens.map((item, index) => {
          return (
            <ButtonCircle
              key={`item-index-${index}`}
              id={`button-index-${index}`}
              height="1.5rem"
              bgcolor={
                index == 0
                  ? 'rgba(217, 217, 217, 1)'
                  : 'rgba(217, 217, 217, 0.21)'
              }
              onClick={() => handleClick(itemIndex, index)}
            />
          );
        })}
      </BlockStyle>
    </SectionFlex>
  );
};
