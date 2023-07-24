import { FlexStyle } from '@/components/types/global';
import { textProps } from '@/components/typography/types';
import { breakPoint } from '@/types/layout';

export const Conteiners: FlexStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bgcolor: 'transparent',
  aligny: 'center',
  transition: 'all 350ms ease'
};

export const conteinerBreakPoints: breakPoint = {
  sizes: { maxWidth: '720px' },
  comands: `
    justify-content: center;
    flex-direction: column-reverse;
  `
};

export const Sections: FlexStyle = {
  direction: 'column',
  alignx: 'center',
  aligny: 'center',
  width: '50%',
  zindex: 2
};

export const sectionLoginBreakPoints: breakPoint = {
  sizes: { maxWidth: '720px' },
  comands: `
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  `
};

export const sectionRegisterBreakPoints: breakPoint = {
  sizes: { maxWidth: '720px' },
  comands: `
  position: absolute;
  top: 0;
  width: 100%;
  height: 10%;
  `
};

export const ButtonsWrap: FlexStyle = {
  bgcolor: 'transparent',
  width: '150px',
  alignx: 'center',
  aligny: 'center',
  border: 'none'
};

export const ButtonsText: textProps = {
  size: 's',
  color: 'white',
  decoration: 'underline white',
  hover: { comands: 'color: blue; decoration: none;' }
};
