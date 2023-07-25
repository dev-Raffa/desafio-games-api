import { IconStyleProps } from '@/components/medias/icons/style';
import { FlexStyle } from '@/components/types/global';
import { textProps } from '@/components/typography/types';

export const cardWrap: FlexStyle = {
  position: 'relative',
  width: '25rem',
  height: '15rem',
  bgcolor: 'primary',
  alignx: 'center',
  aligny: 'center',
  direction: 'column',
  padding: '1.5rem',
  border: '1px solid black',
  borderradius: '5px',
  boxshadow: '0px 0px 12px 10px',
  overflow: 'hidden'
};

export const cardHeader: FlexStyle = {
  alignx: 'right',
  aligny: 'center',
  width: '100%',
  position: 'absolute',
  top: '0',
  padding: '0.5rem 1rem',
  bgcolor: 'secondary'
};

export const cardButtonWrap: FlexStyle = {
  bgcolor: 'transparent',
  border: 'none',
  height: '2rem',
  width: '2rem'
};

export const cardButtonIcon: IconStyleProps = {
  color: 'red',
  height: '2rem',
  width: '2rem'
};

export const cardTitle: textProps = {
  color: 'primary',
  size: 's',
  align: 'center'
};

export const cardFooter: FlexStyle = {
  width: '100%',
  position: 'absolute',
  alignx: 'right',
  bottom: '0',
  padding: '0.5rem 1rem'
};
export const cardFooterButtonWrap: FlexStyle = {
  bgcolor: 'transparent',
  border: 'none'
};

export const cardFooterButonLink: textProps = {
  color: 'primary',
  size: 's',
  decoration: 'underline'
};
