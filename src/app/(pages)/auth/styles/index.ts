import { FlexStyle } from '@/components/types/global';
import { textProps } from '@/components/typography/types';

export const ConteinerWrap: FlexStyle = {
  position: 'relative',
  width: '70%',
  minwidth: '300px',
  maxwidth: '600px',
  height: '400px',
  bgcolor: 'primary',
  border: '1px solid black',
  borderradius: '1.5rem',
  aligny: 'center',
  overflow: 'hidden'
};

export const Conteiners: FlexStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bgcolor: 'transparent',
  aligny: 'center',
  transition: 'all 350ms ease'
};

export const beforeLogin = `
  content: '';
  position: absolute;
  left: 0%;
  background-color: black;
  width: 50%;
  height: 100%;
  transition: all 350ms ease;
  `;

export const beforeRegister = `
  content: '';
  position: absolute;
  left: 50%;
  background-color: black;
  width: 50%;
  height: 100%;
  transition: all 350ms ease;
`;

export const Sections: FlexStyle = {
  direction: 'column',
  alignx: 'center',
  aligny: 'center',
  width: '50%',
  zindex: 2
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
  color: 'primary',
  decoration: 'underline white',
  hover: { comands: 'color: white' }
};
