import { ReactElement } from 'react';
import { StyledIcon, IconStyleProps } from './style';

type IconProps = IconStyleProps & {
  icon: ReactElement;
};

export const Icon = ({ icon, ...args }: IconProps) => {
  return <StyledIcon {...args}>{icon}</StyledIcon>;
};
