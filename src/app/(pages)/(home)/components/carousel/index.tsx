import { carouselItens } from '@/components/utils/carousel/type';
import { Carousel } from '@/components/utils/carousel';
import { Text, Title } from '@/components/typography/exports';
import image1 from '../../../../../../public/images/photo-1.png';
import image2 from '../../../../../../public/images/photo-2.png';
import image3 from '../../../../../../public/images/photo-3.png';

const itens: carouselItens = [
  {
    position: 'relative',
    height: '100%',
    width: '80vw',
    fontcolor: 'primary',
    img: {
      alt: 'mulher negra sorrindo',
      src: image1,
      fill: true,
      fit: 'cover',
      zindex: 1
    },
    caption: (
      <>
        <Title level="2" color="primary">
          Titulo
        </Title>
        <Text color="primary" size="m">
          Resumo da notíca
        </Text>
      </>
    )
  },
  {
    position: 'relative',
    height: '100%',
    width: '80vw',
    fontcolor: 'primary',
    img: {
      alt: 'girafa',
      src: image2,
      fill: true,
      fit: 'cover',
      zindex: 1
    },
    caption: (
      <>
        <Title level="2" color="primary">
          Titulo
        </Title>
        <Text color="primary" size="m">
          Resumo da notíca
        </Text>
      </>
    )
  },
  {
    position: 'relative',
    height: '100%',
    width: '80vw',
    fontcolor: 'primary',
    img: {
      alt: 'mulher com olhar sedutor',
      src: image3,
      fill: true,
      fit: 'cover',
      zindex: 1
    },
    caption: (
      <>
        <Title level="2" color="primary">
          Titulo
        </Title>
        <Text color="primary" size="m">
          Resumo da notíca
        </Text>
      </>
    )
  }
];

export const HighlightPosts = () => {
  return (
    <Carousel
      id="highlight-posts"
      borderradius="15px"
      gap="2rem"
      height="40rem"
      width="100%"
      overflow="hidden"
      itens={itens}
      transition="all 350ms ease-out"
    />
  );
};
