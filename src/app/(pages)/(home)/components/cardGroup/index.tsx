import { CardGroup } from '@/components/utils/cards/group';
import type { cardProps } from '@/components/utils/cards/types';
import { Title, Text } from '@/components/typography/exports';
import type { FigureProps } from '@/components/medias/figures/types';
import { Figure } from '@/components/medias/figures';
import image1 from '../../../../../../public/images/photo-1.png';

const Figures: Array<FigureProps> = [
  {
    img: {
      alt: '',
      src: image1,
      fill: true,
      fit: 'cover',
      quality: 75
    },
    alignx: 'center',
    height: '13rem',
    width: '100%',
    borderradius: '1rem 1rem 0 0'
  },
  {
    img: {
      alt: '',
      src: image1,
      fill: true,
      fit: 'cover',
      quality: 75
    },
    alignx: 'center',
    height: '13rem',
    width: '100%',
    borderradius: '1rem 1rem 0 0'
  },
  {
    img: {
      alt: '',
      src: image1,
      fill: true,
      fit: 'cover',
      quality: 75
    },
    alignx: 'center',
    height: '13rem',
    width: '100%',
    borderradius: '1rem 1rem 0 0'
  },
  {
    img: {
      alt: '',
      src: image1,
      fill: true,
      fit: 'cover',
      quality: 75
    },
    alignx: 'center',
    height: '13rem',
    width: '100%',
    borderradius: '1rem 1rem 0 0'
  },
  {
    img: {
      alt: '',
      src: image1,
      fill: true,
      fit: 'cover',
      quality: 75
    },
    alignx: 'center',
    height: '13rem',
    width: '100%',
    borderradius: '1rem 1rem 0 0'
  }
];
const titles: Array<string> = [
  'Titulo 1',
  'Titulo 2',
  'Titulo 3',
  'Titulo 4',
  'Titulo 5'
];
const resumes: Array<string> = [
  'Este é o resumo da notícia 1 do grupo de notícias mais recentes',
  'Este é o resumo da notícia 2 do grupo de notícias mais recentes',
  'Este é o resumo da notícia 3 do grupo de notícias mais recentes',
  'Este é o resumo da notícia 4 do grupo de notícias mais recentes',
  'Este é o resumo da notícia 5 do grupo de notícias mais recentes'
];

const lasPosts: Array<cardProps> = [
  {
    keyid: 'lastPosts-1',
    direction: 'column',
    height: '25rem',
    bgcolor: 'secondary',
    minwidth: '17rem',
    padding: '1rem',
    boxshadow: '1px 1px 1px 1px rgb(80 77 77 / 66%)',
    borderradius: '10px',
    body: (
      <>
        <Figure {...Figures[0]} />
        <Title level="5" color="secondary">
          {titles[0]}
        </Title>
        <Text size="xs" color="secondary" align="justify">
          {resumes[0]}
        </Text>
      </>
    )
  },
  {
    keyid: 'lastPosts-2',
    direction: 'column',
    height: '25rem',
    bgcolor: 'secondary',
    minwidth: '17rem',
    padding: '1rem',
    boxshadow: '1px 1px 1px 1px rgb(80 77 77 / 66%)',
    borderradius: '10px',
    body: (
      <>
        <Figure {...Figures[1]} />
        <Title level="5" color="secondary">
          {titles[1]}
        </Title>
        <Text size="xs" color="secondary" align="justify">
          {resumes[1]}
        </Text>
      </>
    )
  },
  {
    keyid: 'lastPosts-3',
    direction: 'column',
    height: '25rem',
    bgcolor: 'secondary',
    minwidth: '17rem',
    padding: '1rem',
    boxshadow: '1px 1px 1px 1px rgb(80 77 77 / 66%)',
    borderradius: '10px',
    body: (
      <>
        <Figure {...Figures[2]} />
        <Title level="5" color="secondary">
          {titles[2]}
        </Title>
        <Text size="xs" color="secondary" align="justify">
          {resumes[2]}
        </Text>
      </>
    )
  },
  {
    keyid: 'lastPosts-4',
    direction: 'column',
    height: '25rem',
    bgcolor: 'secondary',
    minwidth: '17rem',
    padding: '1rem',
    boxshadow: '1px 1px 1px 1px rgb(80 77 77 / 66%)',
    borderradius: '10px',
    body: (
      <>
        <Figure {...Figures[3]} />
        <Title level="5" color="secondary">
          {titles[3]}
        </Title>
        <Text size="xs" color="secondary" align="justify">
          {resumes[3]}
        </Text>
      </>
    )
  },
  {
    keyid: 'lastPosts-5',
    direction: 'column',
    height: '25rem',
    bgcolor: 'secondary',
    minwidth: '17rem',
    padding: '1rem',
    boxshadow: '1px 1px 1px 1px rgb(80 77 77 / 66%)',
    borderradius: '10px',
    body: (
      <>
        <Figure {...Figures[4]} />
        <Title level="5" color="secondary">
          {titles[4]}
        </Title>
        <Text size="xs" color="secondary" align="justify">
          {resumes[4]}
        </Text>
      </>
    )
  }
];

export const LastPosts = () => {
  return (
    <CardGroup
      itens={lasPosts}
      title="Posts mais recentes"
      direction="row"
      wrap="nowrap"
      bgcolor="transparent"
      width="100%"
      height="30rem"
      padding="0 2rem"
      gap="2rem"
      aligny="center"
      overflow="scroll"
    />
  );
};
