import { FlexStyle } from '@/components/types/global';
import { breakPoint } from '@/types/layout';

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

export const beforeLoginBreakPoints: breakPoint = {
  sizes: { maxWidth: '720px' },
  comands: `
  &&::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: black;
    width: 100%;
    height: 10%;
    transition: all 350ms ease 0s;
  }`
};

export const beforeRegisterBreakPoints: breakPoint = {
  sizes: { maxWidth: '720px' },
  comands: `
  &&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 10%;
    transition: all 350ms ease 0s;
  }`
};
