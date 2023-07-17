import React, { ReactElement } from 'react';
import { StyledIcon, IconStyleProps } from './style';

export type iconProps = IconStyleProps & {
  icon: ReactElement;
};

export const Icon = ({ icon, ...args }: iconProps) => {
  return <StyledIcon {...args}>{icon}</StyledIcon>;
};
