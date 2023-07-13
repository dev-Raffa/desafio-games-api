import { FlexStyle } from '@/components/types/global';
import { animation } from '@/types/layout';

export const AnimationButtonMoon: animation = {
  from: 'transform: rotate(0deg);',
  to: 'transform: rotate(15deg);',
  duration: '2s',
  repeat: 'infinite',
  direction: 'alternate'
};

export const ButtonsMoon: FlexStyle = {
  bgcolor: 'transparent',
  fontcolor: 'dark',
  height: '2.5rem',
  width: '2.5rem',
  border: 'none',
  alignx: 'center',
  aligny: 'center',
  animation: AnimationButtonMoon
};

export const AnimationButtonSun: animation = {
  from: 'transform: rotate(0deg);',
  to: 'transform: rotate(360deg);',
  duration: '25s',
  repeat: 'infinite'
};

export const ButtonSun: FlexStyle = {
  bgcolor: 'transparent',
  fontcolor: 'light',
  height: '2.5rem',
  width: '2.5rem',
  border: 'none',
  alignx: 'center',
  aligny: 'center',
  animation: AnimationButtonSun
};
