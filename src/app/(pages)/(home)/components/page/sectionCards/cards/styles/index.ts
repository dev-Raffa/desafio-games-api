import { FlexStyle } from '@/components/types/global';
import { textProps } from '@/components/typography/types';

const styledWrapCard: FlexStyle = {
  position: 'relative',
  direction: 'column',
  bgcolor: 'secondary',
  height: '30rem',
  width: '30%',
  maxwidth: '400px',
  minwidth: '250px',
  borderradius: '5px',
  overflow: 'hidden',
  boxshadow: '1px 1px 5px 0px'
};

const styledWrapFigureCard: FlexStyle = {
  position: 'relative',
  overflow: 'hidden',
  height: '15rem'
};

const styledTextFigureCard: textProps = {
  color: 'secondary',
  size: 'm',
  align: 'center'
};

const styledDescCard: textProps = {
  size: 's',
  color: 'primary',
  align: 'justify',
  margin: '0 1rem'
};

const styledWrapFooterCard: FlexStyle = {
  position: 'absolute',
  bottom: '0',
  alignx: 'space-around',
  height: '3rem',
  width: '100%',
  bgcolor: 'white'
};

const styledSection: FlexStyle = {
  width: '100%',
  alignx: 'space-between',
  aligny: 'center',
  fontcolor: 'yellow',
  padding: '1rem 5%'
};
export const styled = {
  wrap: styledWrapCard,
  figure: { wrap: styledWrapFigureCard, text: styledTextFigureCard },
  section: styledSection,
  description: styledDescCard,
  footer: {
    wrap: styledWrapFooterCard
  }
};
