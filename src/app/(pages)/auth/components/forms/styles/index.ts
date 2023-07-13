import { styledFieldForm } from '@/components/form/types/types';
import { IconStyleProps } from '@/components/medias/icons/style';
import { FlexStyle } from '@/components/types/global';
import { textProps, titleProps } from '@/components/typography/types';
import { styledInput } from '@/components/utils/input/types';

export const FormWrap: FlexStyle = {
  direction: 'column',
  alignx: 'center',
  aligny: 'center',
  gap: '1rem',
  width: '50%',
  minwidth: '250px',
  padding: '0 1rem',
  zindex: 3
};

export const FormTitle: titleProps = {
  color: 'primary',
  level: '4',
  align: 'center'
};

export const FormLabel: styledFieldForm = {
  bgcolor: 'white',
  aligny: 'center',
  alignx: 'center',
  borderradius: '15px',
  padding: '0 1rem',
  gap: '0.5rem'
};

export const FormIcon: IconStyleProps = {
  color: 'primary',
  height: '2rem',
  width: '2rem'
};

export const FormInput: styledInput = {
  height: '90%',
  width: '100%',
  minwidth: '200px',
  border: 'none',
  bgcolor: 'transparent'
};

export const FormMsgError: textProps = {
  color: 'red',
  size: 'xs'
};

const buttonsWrapHover = `
  background-color: transparent;
  color: black;
  border: 1px solid black;
`;

export const FormButtonsWrap: FlexStyle = {
  width: '200px',
  height: '3rem',
  aligny: 'center',
  alignx: 'center',
  border: 'none',
  borderradius: '1.5rem',
  padding: '1rem',
  gap: '0.5rem',
  fontcolor: 'white',
  bgcolor: 'black',
  transition: 'all 350ms ease',
  hover: { comands: buttonsWrapHover }
};

export const FormButtonText: textProps = {
  color: 'CurrentColor',
  size: 's',
  align: 'center'
};
